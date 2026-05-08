import { describe, it, expect } from 'vitest'
import {
  calcDailyAmountMl,
  feedingsPerDay,
  calcPerFeedingMl,
  babyFeedingAmount,
  mlToOz,
  lbToKg,
  isPlausibleAge,
  isPlausibleWeightKg,
} from '../utils/babyFeedingAmount.js'

// Pediatric reference: ~150 ml of formula per kg of body weight per day
// during the first ~6 months. After 6 months, complementary foods reduce
// milk needs to ~120 ml/kg/day. Daily intake capped at 960 ml (~32 oz).

describe('calcDailyAmountMl', () => {
  it('newborn 3 kg, 0 months → 450 ml/day (3 × 150)', () => {
    expect(calcDailyAmountMl(3, 0)).toBeCloseTo(450, 1)
  })

  it('infant 5 kg, 2 months → 750 ml/day', () => {
    expect(calcDailyAmountMl(5, 2)).toBeCloseTo(750, 1)
  })

  it('infant 6 kg, 4 months → 900 ml/day', () => {
    expect(calcDailyAmountMl(6, 4)).toBeCloseTo(900, 1)
  })

  it('caps at 960 ml/day for large infants under 6 months', () => {
    // 8 kg × 150 = 1200 → capped at 960
    expect(calcDailyAmountMl(8, 4)).toBe(960)
  })

  it('after 6 months uses 120 ml/kg/day', () => {
    // 8 kg × 120 = 960
    expect(calcDailyAmountMl(8, 7)).toBeCloseTo(960, 1)
  })

  it('after 6 months also capped at 960', () => {
    // 9 kg × 120 = 1080 → capped at 960
    expect(calcDailyAmountMl(9, 8)).toBe(960)
  })

  it('returns null for missing/invalid weight', () => {
    expect(calcDailyAmountMl(null, 2)).toBeNull()
    expect(calcDailyAmountMl(0, 2)).toBeNull()
    expect(calcDailyAmountMl(-1, 2)).toBeNull()
  })

  it('returns null for invalid age', () => {
    expect(calcDailyAmountMl(5, null)).toBeNull()
    expect(calcDailyAmountMl(5, -1)).toBeNull()
  })
})

describe('feedingsPerDay', () => {
  it('newborn (0 months) → 8 feedings', () => {
    expect(feedingsPerDay(0)).toBe(8)
  })

  it('1 month → 7 feedings', () => {
    expect(feedingsPerDay(1)).toBe(7)
  })

  it('3 months → 6 feedings', () => {
    expect(feedingsPerDay(3)).toBe(6)
  })

  it('5 months → 5 feedings', () => {
    expect(feedingsPerDay(5)).toBe(5)
  })

  it('7 months → 4 feedings', () => {
    expect(feedingsPerDay(7)).toBe(4)
  })

  it('10 months → 3 feedings', () => {
    expect(feedingsPerDay(10)).toBe(3)
  })
})

describe('calcPerFeedingMl', () => {
  it('newborn 3 kg → 450/8 = ~56 ml per feeding', () => {
    expect(calcPerFeedingMl(3, 0)).toBeCloseTo(56.25, 1)
  })

  it('5 kg, 2 months → 750/7 = ~107 ml per feeding', () => {
    expect(calcPerFeedingMl(5, 2)).toBeCloseTo(107.14, 1)
  })

  it('returns null when daily is null', () => {
    expect(calcPerFeedingMl(null, 2)).toBeNull()
  })
})

describe('unit conversions', () => {
  it('30 ml ≈ 1.014 oz', () => {
    expect(mlToOz(30)).toBeCloseTo(1.014, 2)
  })

  it('10 lb → 4.536 kg', () => {
    expect(lbToKg(10)).toBeCloseTo(4.536, 2)
  })
})

describe('plausibility checks', () => {
  it('rejects age < 0 or > 24 months', () => {
    expect(isPlausibleAge(-1)).toBe(false)
    expect(isPlausibleAge(25)).toBe(false)
    expect(isPlausibleAge(0)).toBe(true)
    expect(isPlausibleAge(12)).toBe(true)
  })

  it('rejects implausible weights', () => {
    expect(isPlausibleWeightKg(0)).toBe(false)
    expect(isPlausibleWeightKg(0.5)).toBe(false)
    expect(isPlausibleWeightKg(20)).toBe(false)
    expect(isPlausibleWeightKg(3.5)).toBe(true)
    expect(isPlausibleWeightKg(8)).toBe(true)
  })
})

describe('babyFeedingAmount (one-shot helper)', () => {
  it('returns null on invalid input', () => {
    expect(babyFeedingAmount({ weightKg: null, ageMonths: 2 })).toBeNull()
    expect(babyFeedingAmount({ weightKg: 5, ageMonths: -1 })).toBeNull()
  })

  it('returns full result for 5 kg, 2 months', () => {
    const r = babyFeedingAmount({ weightKg: 5, ageMonths: 2 })
    expect(r).not.toBeNull()
    expect(r.dailyMl).toBeCloseTo(750, 1)
    expect(r.feedings).toBe(7)
    expect(r.perFeedingMl).toBeCloseTo(107.14, 1)
  })

  it('respects 6-month threshold', () => {
    const r = babyFeedingAmount({ weightKg: 7, ageMonths: 7 })
    expect(r.dailyMl).toBeCloseTo(840, 1)
    expect(r.feedings).toBe(4)
    expect(r.perFeedingMl).toBeCloseTo(210, 1)
  })
})
