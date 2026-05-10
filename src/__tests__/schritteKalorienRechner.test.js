import { describe, it, expect } from 'vitest'
import {
  calcCalories,
  calcDistanceKm,
  classifyActivity,
  defaultStrideCm,
  calcStepsResult,
} from '../utils/schritteKalorienRechner.js'

describe('calcCalories', () => {
  it('10000 steps at 70 kg → ~400 kcal', () => {
    expect(calcCalories(10000, 70)).toBeCloseTo(400, 1)
  })

  it('10000 steps at 80 kg → ~457 kcal (scales with weight)', () => {
    // 10000 × 0.04 × (80/70) = 400 × 1.142857 = 457.14
    expect(calcCalories(10000, 80)).toBeCloseTo(457.14, 1)
  })

  it('5000 steps at 70 kg → 200 kcal', () => {
    expect(calcCalories(5000, 70)).toBeCloseTo(200, 1)
  })

  it('returns 0 for zero or negative steps', () => {
    expect(calcCalories(0, 70)).toBe(0)
    expect(calcCalories(-100, 70)).toBe(0)
  })

  it('returns 0 for zero or negative weight', () => {
    expect(calcCalories(10000, 0)).toBe(0)
    expect(calcCalories(10000, -1)).toBe(0)
  })

  it('returns 0 for null inputs', () => {
    expect(calcCalories(null, 70)).toBe(0)
    expect(calcCalories(10000, null)).toBe(0)
  })
})

describe('calcDistanceKm', () => {
  it('10000 steps at 75 cm stride = 7.5 km', () => {
    expect(calcDistanceKm(10000, 75)).toBeCloseTo(7.5, 2)
  })

  it('5000 steps at 70 cm stride = 3.5 km', () => {
    expect(calcDistanceKm(5000, 70)).toBeCloseTo(3.5, 2)
  })

  it('12000 steps at 80 cm stride = 9.6 km', () => {
    expect(calcDistanceKm(12000, 80)).toBeCloseTo(9.6, 2)
  })

  it('returns 0 for invalid inputs', () => {
    expect(calcDistanceKm(0, 75)).toBe(0)
    expect(calcDistanceKm(10000, 0)).toBe(0)
    expect(calcDistanceKm(null, 75)).toBe(0)
  })
})

describe('classifyActivity', () => {
  it('4000 steps → sedentary', () => {
    expect(classifyActivity(4000)).toBe('sedentary')
  })

  it('6000 steps → low', () => {
    expect(classifyActivity(6000)).toBe('low')
  })

  it('8000 steps → moderate', () => {
    expect(classifyActivity(8000)).toBe('moderate')
  })

  it('11000 steps → active', () => {
    expect(classifyActivity(11000)).toBe('active')
  })

  it('13000 steps → veryActive', () => {
    expect(classifyActivity(13000)).toBe('veryActive')
  })

  it('boundary 5000 → low', () => {
    expect(classifyActivity(5000)).toBe('low')
  })

  it('boundary 10000 → active', () => {
    expect(classifyActivity(10000)).toBe('active')
  })

  it('zero or null → sedentary', () => {
    expect(classifyActivity(0)).toBe('sedentary')
    expect(classifyActivity(null)).toBe('sedentary')
  })
})

describe('defaultStrideCm', () => {
  it('returns 75 cm without height', () => {
    expect(defaultStrideCm(null)).toBe(75)
    expect(defaultStrideCm(0)).toBe(75)
  })

  it('returns ~0.43 × height when provided', () => {
    expect(defaultStrideCm(180)).toBeCloseTo(77.4, 1)
    expect(defaultStrideCm(165)).toBeCloseTo(70.95, 1)
  })
})

describe('calcStepsResult', () => {
  it('10000 steps, 80 kg, 75 cm → ~457 kcal, 7.5 km, active', () => {
    const r = calcStepsResult(10000, 80, 75)
    expect(r.calories).toBeCloseTo(457.14, 1)
    expect(r.distanceKm).toBeCloseTo(7.5, 2)
    expect(r.activity).toBe('active')
  })

  it('7500 steps, 60 kg, 70 cm → ~257 kcal, 5.25 km, moderate', () => {
    const r = calcStepsResult(7500, 60, 70)
    // 7500 × 0.04 × (60/70) = 300 × 0.857 = 257.14
    expect(r.calories).toBeCloseTo(257.14, 1)
    expect(r.distanceKm).toBeCloseTo(5.25, 2)
    expect(r.activity).toBe('moderate')
  })
})
