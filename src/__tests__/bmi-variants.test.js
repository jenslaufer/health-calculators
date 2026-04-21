import { describe, it, expect } from 'vitest'
import { calcBmi, getBmiCategory, getBmiBarPosition } from '../composables/useBmi.js'

describe('calcBmi — metric', () => {
  it('170cm, 70kg → ~24.2', () => {
    expect(calcBmi(70, 170, 'metric')).toBeCloseTo(24.22, 1)
  })

  it('175cm, 80kg → ~26.1', () => {
    expect(calcBmi(80, 175, 'metric')).toBeCloseTo(26.12, 1)
  })

  it('160cm, 50kg → ~19.5', () => {
    expect(calcBmi(50, 160, 'metric')).toBeCloseTo(19.53, 1)
  })

  it('returns null for missing weight', () => {
    expect(calcBmi(null, 170, 'metric')).toBeNull()
  })

  it('returns null for missing height', () => {
    expect(calcBmi(70, null, 'metric')).toBeNull()
  })
})

describe('calcBmi — imperial', () => {
  it('67 inches, 154 lbs → ~24.1', () => {
    expect(calcBmi(154, 67, 'imperial')).toBeCloseTo(24.1, 0)
  })

  it('70 inches, 200 lbs → ~28.7', () => {
    expect(calcBmi(200, 70, 'imperial')).toBeCloseTo(28.7, 0)
  })
})

describe('getBmiCategory — DGE brackets', () => {
  it('18.4 → underweight', () => {
    expect(getBmiCategory(18.4).label).toBe('bmi.underweight')
  })

  it('18.5 → normal', () => {
    expect(getBmiCategory(18.5).label).toBe('bmi.normal')
  })

  it('24.9 → normal', () => {
    expect(getBmiCategory(24.9).label).toBe('bmi.normal')
  })

  it('25.0 → overweight', () => {
    expect(getBmiCategory(25.0).label).toBe('bmi.overweight')
  })

  it('29.9 → overweight', () => {
    expect(getBmiCategory(29.9).label).toBe('bmi.overweight')
  })

  it('30.0 → obese', () => {
    expect(getBmiCategory(30.0).label).toBe('bmi.obese')
  })

  it('null input → null', () => {
    expect(getBmiCategory(null)).toBeNull()
  })
})

describe('getBmiBarPosition', () => {
  it('BMI 10 → 0%', () => {
    expect(getBmiBarPosition(10)).toBe(0)
  })

  it('BMI 40 → 100%', () => {
    expect(getBmiBarPosition(40)).toBe(100)
  })

  it('BMI 25 → 50%', () => {
    expect(getBmiBarPosition(25)).toBeCloseTo(50, 0)
  })

  it('BMI below 10 clamps to 0', () => {
    expect(getBmiBarPosition(5)).toBe(0)
  })

  it('BMI above 40 clamps to 100', () => {
    expect(getBmiBarPosition(50)).toBe(100)
  })

  it('null/zero → 0', () => {
    expect(getBmiBarPosition(null)).toBe(0)
    expect(getBmiBarPosition(0)).toBe(0)
  })
})

describe('Women BMI route coverage', () => {
  it('typical female BMI 22.0 → normal', () => {
    const bmi = calcBmi(60, 165, 'metric')
    expect(bmi).toBeCloseTo(22.0, 0)
    expect(getBmiCategory(bmi).label).toBe('bmi.normal')
  })

  it('BMI 17.5 in underweight range', () => {
    const bmi = calcBmi(45, 160, 'metric')
    expect(bmi).toBeCloseTo(17.6, 0)
    expect(getBmiCategory(bmi).label).toBe('bmi.underweight')
  })
})

describe('Men BMI route coverage', () => {
  it('typical male with high muscle mass BMI 27 → overweight category', () => {
    const bmi = calcBmi(90, 182, 'metric')
    expect(bmi).toBeCloseTo(27.2, 0)
    expect(getBmiCategory(bmi).label).toBe('bmi.overweight')
  })

  it('BMI 32 → obese', () => {
    const bmi = calcBmi(100, 177, 'metric')
    expect(bmi).toBeCloseTo(31.9, 0)
    expect(getBmiCategory(bmi).label).toBe('bmi.obese')
  })
})
