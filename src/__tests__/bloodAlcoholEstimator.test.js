import { describe, it, expect } from 'vitest'
import { estimateBac, timeUntilSober, classifyImpairment } from '../utils/bloodAlcoholEstimator.js'

// Quick BAC estimator using US standard drinks (14 g pure alcohol per drink)
// and the Widmark formula. Output is in % BAC (g/dL) — US convention.
//
//   BAC (%) = (drinks × 14 g) / (weight × r) × 100 / 1000 − 0.015 × hours
//   r = 0.68 for male, 0.55 for female (Widmark constants)
//   Elimination ~ 0.015 % per hour
//
// Inputs:
//   standardDrinks: number of US standard drinks
//   weightKg: body weight in kg
//   sex: 'male' | 'female'
//   hours: hours since first drink

describe('estimateBac', () => {
  it('returns 0 for zero drinks', () => {
    expect(estimateBac({ standardDrinks: 0, weightKg: 80, sex: 'male', hours: 0 })).toBe(0)
  })

  it('1 drink, 80 kg male, 0 hours → ~0.026 %', () => {
    // 14 / (80 * 0.68) = 0.2574 g/kg → /10 → 0.02574 %
    const bac = estimateBac({ standardDrinks: 1, weightKg: 80, sex: 'male', hours: 0 })
    expect(bac).toBeCloseTo(0.0257, 3)
  })

  it('4 drinks, 80 kg male, 1 hour → ~0.088 %', () => {
    // 56 / (80 * 0.68) / 10 = 0.1029 → 0.1029 - 0.015 = 0.0879
    const bac = estimateBac({ standardDrinks: 4, weightKg: 80, sex: 'male', hours: 1 })
    expect(bac).toBeCloseTo(0.0879, 3)
  })

  it('3 drinks, 60 kg female, 0 hours → ~0.127 %', () => {
    // 42 / (60 * 0.55) / 10 = 0.1273
    const bac = estimateBac({ standardDrinks: 3, weightKg: 60, sex: 'female', hours: 0 })
    expect(bac).toBeCloseTo(0.1273, 3)
  })

  it('clamps to 0 once enough hours have passed', () => {
    const bac = estimateBac({ standardDrinks: 1, weightKg: 80, sex: 'male', hours: 10 })
    expect(bac).toBe(0)
  })

  it('returns null for invalid weight', () => {
    expect(estimateBac({ standardDrinks: 2, weightKg: 0, sex: 'male', hours: 0 })).toBeNull()
    expect(estimateBac({ standardDrinks: 2, weightKg: -10, sex: 'male', hours: 0 })).toBeNull()
    expect(estimateBac({ standardDrinks: 2, weightKg: null, sex: 'male', hours: 0 })).toBeNull()
  })

  it('returns null for invalid sex', () => {
    expect(estimateBac({ standardDrinks: 2, weightKg: 80, sex: 'other', hours: 0 })).toBeNull()
  })

  it('returns null for negative drinks', () => {
    expect(estimateBac({ standardDrinks: -1, weightKg: 80, sex: 'male', hours: 0 })).toBeNull()
  })

  it('treats missing hours as 0', () => {
    const bac = estimateBac({ standardDrinks: 2, weightKg: 80, sex: 'male' })
    // 28 / (80 * 0.68) / 10 = 0.0515
    expect(bac).toBeCloseTo(0.0515, 3)
  })
})

describe('timeUntilSober', () => {
  it('0.08 % BAC → ~5.33 hours to fully sober', () => {
    expect(timeUntilSober(0.08)).toBeCloseTo(5.333, 2)
  })

  it('0.03 % BAC → 2 hours', () => {
    expect(timeUntilSober(0.03)).toBeCloseTo(2, 2)
  })

  it('returns 0 for zero BAC', () => {
    expect(timeUntilSober(0)).toBe(0)
  })

  it('returns 0 for negative or null BAC', () => {
    expect(timeUntilSober(-0.05)).toBe(0)
    expect(timeUntilSober(null)).toBe(0)
  })
})

describe('classifyImpairment', () => {
  it('0 → sober', () => {
    expect(classifyImpairment(0)).toBe('sober')
  })

  it('0.02 → minimal', () => {
    expect(classifyImpairment(0.02)).toBe('minimal')
  })

  it('0.05 → mild (below US legal limit)', () => {
    expect(classifyImpairment(0.05)).toBe('mild')
  })

  it('0.08 → legal limit reached', () => {
    expect(classifyImpairment(0.08)).toBe('legal')
  })

  it('0.15 → significant', () => {
    expect(classifyImpairment(0.15)).toBe('significant')
  })

  it('0.30 → dangerous', () => {
    expect(classifyImpairment(0.30)).toBe('dangerous')
  })

  it('returns null for null input', () => {
    expect(classifyImpairment(null)).toBeNull()
  })
})
