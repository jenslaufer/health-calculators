import { describe, it, expect } from 'vitest'
import {
  pregnancyCalories,
  calcPrePregnancyEER,
  trimesterAddition,
  isPlausibleAge,
  isPlausibleWeightKg,
  isPlausibleHeightCm,
  lbToKg,
  inToCm,
  PA,
} from '../utils/pregnancyCalories.js'

// IOM/DRI EER for adult women (>=19y):
//   EER = 354 - 6.91·age + PA·(9.36·weight + 726·height)
//   weight kg, height m
//
// Pregnancy additions:
//   Trimester 1: +0 kcal
//   Trimester 2: +340 kcal
//   Trimester 3: +452 kcal
//
// Twins: +300 kcal extra in T2/T3 (singleton case is the default).

describe('PA coefficients (IOM women)', () => {
  it('exposes the four standard activity factors', () => {
    expect(PA.sedentary).toBeCloseTo(1.00)
    expect(PA.low_active).toBeCloseTo(1.12)
    expect(PA.active).toBeCloseTo(1.27)
    expect(PA.very_active).toBeCloseTo(1.45)
  })
})

describe('Plausibility checks', () => {
  it('age 18..50 plausible, outside not', () => {
    expect(isPlausibleAge(28)).toBe(true)
    expect(isPlausibleAge(17)).toBe(false)
    expect(isPlausibleAge(60)).toBe(false)
    expect(isPlausibleAge(null)).toBe(false)
  })
  it('weight 35..200 kg plausible', () => {
    expect(isPlausibleWeightKg(65)).toBe(true)
    expect(isPlausibleWeightKg(20)).toBe(false)
    expect(isPlausibleWeightKg(250)).toBe(false)
  })
  it('height 130..210 cm plausible', () => {
    expect(isPlausibleHeightCm(170)).toBe(true)
    expect(isPlausibleHeightCm(100)).toBe(false)
    expect(isPlausibleHeightCm(230)).toBe(false)
  })
})

describe('Unit conversions', () => {
  it('lb → kg', () => {
    expect(lbToKg(154)).toBeCloseTo(69.853, 2)
  })
  it('in → cm', () => {
    expect(inToCm(67)).toBeCloseTo(170.18, 2)
  })
})

describe('Pre-pregnancy EER (IOM women)', () => {
  it('30y, 65kg, 1.68m, low_active → ~2120 kcal', () => {
    // 354 - 6.91*30 + 1.12 * (9.36*65 + 726*1.68)
    //   = 354 - 207.3 + 1.12 * (608.4 + 1219.68)
    //   = 146.7 + 1.12 * 1828.08
    //   = 146.7 + 2047.45
    //   = 2194.15
    const v = calcPrePregnancyEER({ age: 30, weightKg: 65, heightCm: 168, activity: 'low_active' })
    expect(v).toBeCloseTo(2194, 0)
  })

  it('25y, 60kg, 1.65m, sedentary → lower than active', () => {
    const sed = calcPrePregnancyEER({ age: 25, weightKg: 60, heightCm: 165, activity: 'sedentary' })
    const act = calcPrePregnancyEER({ age: 25, weightKg: 60, heightCm: 165, activity: 'active' })
    expect(sed).toBeLessThan(act)
  })

  it('returns null for invalid input', () => {
    expect(calcPrePregnancyEER({ age: 10, weightKg: 60, heightCm: 165, activity: 'sedentary' })).toBeNull()
    expect(calcPrePregnancyEER({ age: 30, weightKg: 60, heightCm: 165, activity: 'bogus' })).toBeNull()
  })
})

describe('Trimester additions', () => {
  it('T1 → 0', () => {
    expect(trimesterAddition(1)).toBe(0)
  })
  it('T2 → 340', () => {
    expect(trimesterAddition(2)).toBe(340)
  })
  it('T3 → 452', () => {
    expect(trimesterAddition(3)).toBe(452)
  })
  it('returns null for invalid trimester', () => {
    expect(trimesterAddition(0)).toBeNull()
    expect(trimesterAddition(4)).toBeNull()
  })
  it('twins add +300 kcal in T2/T3 but not T1', () => {
    expect(trimesterAddition(1, { twins: true })).toBe(0)
    expect(trimesterAddition(2, { twins: true })).toBe(640)
    expect(trimesterAddition(3, { twins: true })).toBe(752)
  })
})

describe('pregnancyCalories (full)', () => {
  it('30y, 65kg, 1.68m, low_active, T1 → ~2194 kcal, addition 0', () => {
    const r = pregnancyCalories({
      age: 30, weightKg: 65, heightCm: 168, activity: 'low_active', trimester: 1,
    })
    expect(r).not.toBeNull()
    expect(r.addition).toBe(0)
    expect(r.dailyKcal).toBe(Math.round(r.prePregnancyKcal))
  })

  it('30y, 65kg, 1.68m, low_active, T2 → adds 340 kcal', () => {
    const r = pregnancyCalories({
      age: 30, weightKg: 65, heightCm: 168, activity: 'low_active', trimester: 2,
    })
    expect(r.addition).toBe(340)
    expect(r.dailyKcal).toBe(r.prePregnancyKcal + 340)
  })

  it('30y, 65kg, 1.68m, low_active, T3 → adds 452 kcal', () => {
    const r = pregnancyCalories({
      age: 30, weightKg: 65, heightCm: 168, activity: 'low_active', trimester: 3,
    })
    expect(r.addition).toBe(452)
    expect(r.dailyKcal).toBe(r.prePregnancyKcal + 452)
  })

  it('twins add +300 to T2', () => {
    const single = pregnancyCalories({
      age: 30, weightKg: 65, heightCm: 168, activity: 'low_active', trimester: 2,
    })
    const twins = pregnancyCalories({
      age: 30, weightKg: 65, heightCm: 168, activity: 'low_active', trimester: 2, twins: true,
    })
    expect(twins.dailyKcal - single.dailyKcal).toBe(300)
  })

  it('returns null for invalid trimester', () => {
    const r = pregnancyCalories({
      age: 30, weightKg: 65, heightCm: 168, activity: 'low_active', trimester: 7,
    })
    expect(r).toBeNull()
  })

  it('returns null for implausible inputs', () => {
    expect(pregnancyCalories({
      age: 12, weightKg: 65, heightCm: 168, activity: 'low_active', trimester: 1,
    })).toBeNull()
    expect(pregnancyCalories({
      age: 30, weightKg: 10, heightCm: 168, activity: 'low_active', trimester: 1,
    })).toBeNull()
  })

  it('result is well-formed', () => {
    const r = pregnancyCalories({
      age: 28, weightKg: 60, heightCm: 165, activity: 'active', trimester: 3,
    })
    expect(typeof r.dailyKcal).toBe('number')
    expect(typeof r.prePregnancyKcal).toBe('number')
    expect(typeof r.addition).toBe('number')
    expect(r.trimester).toBe(3)
  })
})
