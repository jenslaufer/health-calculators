import { describe, it, expect } from 'vitest'
import {
  calcEER,
  childCalories,
  isPlausibleAge,
  isPlausibleWeightKg,
  isPlausibleHeightCm,
  lbToKg,
  inToCm,
  ftInToCm,
  PA,
} from '../utils/childCalories.js'

// Reference: Institute of Medicine (IOM) DRI for Energy (2002/2005).
// EER (Estimated Energy Requirement) for children ages 3–18.

describe('calcEER — boys', () => {
  it('5y boy, 18 kg, 110 cm, low active → ~1366 kcal', () => {
    // 88.5 − 61.9·5 + 1.13·(26.7·18 + 903·1.10) + 20
    // = 88.5 − 309.5 + 1.13·(480.6 + 993.3) + 20
    // = 88.5 − 309.5 + 1.13·1473.9 + 20
    // = 88.5 − 309.5 + 1665.51 + 20 = 1464.51
    expect(calcEER({ age: 5, sex: 'boy', weightKg: 18, heightCm: 110, activity: 'low_active' })).toBeCloseTo(1464.5, 0)
  })

  it('10y boy, 32 kg, 138 cm, active → ~2049 kcal', () => {
    // 88.5 − 61.9·10 + 1.26·(26.7·32 + 903·1.38) + 25
    // = 88.5 − 619 + 1.26·(854.4 + 1246.14) + 25
    // = 88.5 − 619 + 1.26·2100.54 + 25 = 2141.18
    const v = calcEER({ age: 10, sex: 'boy', weightKg: 32, heightCm: 138, activity: 'active' })
    expect(v).toBeCloseTo(2141.18, 0)
  })

  it('15y boy, 60 kg, 170 cm, sedentary → ~2484 kcal', () => {
    // 88.5 − 61.9·15 + 1.0·(26.7·60 + 903·1.70) + 25
    // = 88.5 − 928.5 + 1602 + 1535.1 + 25 = 2322.1
    const v = calcEER({ age: 15, sex: 'boy', weightKg: 60, heightCm: 170, activity: 'sedentary' })
    expect(v).toBeCloseTo(2322.1, 0)
  })
})

describe('calcEER — girls', () => {
  it('5y girl, 18 kg, 110 cm, low active → ~1389 kcal', () => {
    // 135.3 − 30.8·5 + 1.16·(10·18 + 934·1.10) + 20
    // = 135.3 − 154 + 1.16·(180 + 1027.4) + 20
    // = 135.3 − 154 + 1.16·1207.4 + 20 = 1401.88
    const v = calcEER({ age: 5, sex: 'girl', weightKg: 18, heightCm: 110, activity: 'low_active' })
    expect(v).toBeCloseTo(1401.88, 0)
  })

  it('12y girl, 40 kg, 150 cm, very active → ~2412 kcal', () => {
    // 135.3 − 30.8·12 + 1.56·(10·40 + 934·1.50) + 25
    // = 135.3 − 369.6 + 1.56·(400 + 1401) + 25
    // = 135.3 − 369.6 + 1.56·1801 + 25 = 2600.26
    const v = calcEER({ age: 12, sex: 'girl', weightKg: 40, heightCm: 150, activity: 'very_active' })
    expect(v).toBeCloseTo(2600.26, 0)
  })

  it('17y girl, 55 kg, 165 cm, sedentary → ~1969 kcal', () => {
    // 135.3 − 30.8·17 + 1.0·(10·55 + 934·1.65) + 25
    // = 135.3 − 523.6 + 550 + 1541.1 + 25 = 1727.8
    const v = calcEER({ age: 17, sex: 'girl', weightKg: 55, heightCm: 165, activity: 'sedentary' })
    expect(v).toBeCloseTo(1727.8, 0)
  })
})

describe('toddler fixed values (ages 1–2)', () => {
  it('1y boy → 948 kcal regardless of weight/height', () => {
    expect(calcEER({ age: 1, sex: 'boy', weightKg: 10, heightCm: 75, activity: 'sedentary' })).toBe(948)
  })

  it('2y girl → 992 kcal regardless of activity', () => {
    expect(calcEER({ age: 2, sex: 'girl', weightKg: 12, heightCm: 85, activity: 'active' })).toBe(992)
  })
})

describe('input validation', () => {
  it('returns null for invalid age (< 1 or > 18)', () => {
    expect(calcEER({ age: 0.5, sex: 'boy', weightKg: 10, heightCm: 75, activity: 'sedentary' })).toBeNull()
    expect(calcEER({ age: 19, sex: 'boy', weightKg: 60, heightCm: 175, activity: 'sedentary' })).toBeNull()
  })

  it('returns null for invalid sex', () => {
    expect(calcEER({ age: 10, sex: 'unknown', weightKg: 30, heightCm: 140, activity: 'active' })).toBeNull()
  })

  it('returns null for invalid activity', () => {
    expect(calcEER({ age: 10, sex: 'boy', weightKg: 30, heightCm: 140, activity: 'extreme' })).toBeNull()
  })

  it('returns null for missing weight or height (ages ≥ 3)', () => {
    expect(calcEER({ age: 5, sex: 'boy', weightKg: null, heightCm: 110, activity: 'active' })).toBeNull()
    expect(calcEER({ age: 5, sex: 'boy', weightKg: 18, heightCm: null, activity: 'active' })).toBeNull()
  })
})

describe('plausibility helpers', () => {
  it('isPlausibleAge accepts 1–18', () => {
    expect(isPlausibleAge(1)).toBe(true)
    expect(isPlausibleAge(18)).toBe(true)
    expect(isPlausibleAge(0)).toBe(false)
    expect(isPlausibleAge(19)).toBe(false)
  })

  it('isPlausibleWeightKg rejects extremes', () => {
    expect(isPlausibleWeightKg(4)).toBe(false)
    expect(isPlausibleWeightKg(151)).toBe(false)
    expect(isPlausibleWeightKg(20)).toBe(true)
  })

  it('isPlausibleHeightCm rejects extremes', () => {
    expect(isPlausibleHeightCm(50)).toBe(false)
    expect(isPlausibleHeightCm(221)).toBe(false)
    expect(isPlausibleHeightCm(120)).toBe(true)
  })
})

describe('unit conversions', () => {
  it('lbToKg: 22 lb ≈ 9.98 kg', () => {
    expect(lbToKg(22)).toBeCloseTo(9.979, 2)
  })

  it('inToCm: 43 in ≈ 109.22 cm', () => {
    expect(inToCm(43)).toBeCloseTo(109.22, 2)
  })

  it('ftInToCm: 4 ft 6 in ≈ 137.16 cm', () => {
    expect(ftInToCm(4, 6)).toBeCloseTo(137.16, 2)
  })
})

describe('PA coefficients match IOM', () => {
  it('boy active = 1.26', () => {
    expect(PA.boy.active).toBe(1.26)
  })

  it('girl very_active = 1.56', () => {
    expect(PA.girl.very_active).toBe(1.56)
  })
})

describe('childCalories one-shot helper', () => {
  it('returns rounded integer kcal', () => {
    const r = childCalories({ age: 5, sex: 'boy', weightKg: 18, heightCm: 110, activity: 'low_active' })
    expect(r).not.toBeNull()
    expect(r.dailyKcal).toBe(1465)
    expect(r.activity).toBe('low_active')
    expect(r.sex).toBe('boy')
    expect(r.age).toBe(5)
  })

  it('returns null on invalid input', () => {
    expect(childCalories({ age: 0, sex: 'boy', weightKg: 10, heightCm: 75, activity: 'active' })).toBeNull()
  })
})
