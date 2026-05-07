import { describe, it, expect } from 'vitest'
import {
  calcDailyAmountMl,
  calcPerFeedingMl,
  getFeedingsPerDay,
  getStageByAgeMonths,
  babyFeedingAmount,
  LB_TO_KG,
  OZ_TO_ML,
} from '../utils/babyFeedingAmount.js'

// Reference (commonly cited paediatric guideline, e.g. AAP / WHO):
// Term infants <6 months on formula or expressed milk need roughly
// ~150 ml of milk per kg of body weight per day. Per-feeding amount =
// daily amount / number of feedings appropriate to age.

describe('calcDailyAmountMl (per kg body weight)', () => {
  it('term newborn 3kg → ~450 ml/day at 150 ml/kg', () => {
    expect(calcDailyAmountMl(3)).toBeCloseTo(450, 0)
  })

  it('4kg infant → ~600 ml/day', () => {
    expect(calcDailyAmountMl(4)).toBeCloseTo(600, 0)
  })

  it('5kg infant → ~750 ml/day', () => {
    expect(calcDailyAmountMl(5)).toBeCloseTo(750, 0)
  })

  it('returns 0 for zero/negative/null weight', () => {
    expect(calcDailyAmountMl(0)).toBe(0)
    expect(calcDailyAmountMl(-2)).toBe(0)
    expect(calcDailyAmountMl(null)).toBe(0)
  })
})

describe('getFeedingsPerDay (by age)', () => {
  it('newborn (0 months) → 8 feedings', () => {
    expect(getFeedingsPerDay(0)).toBe(8)
  })

  it('1 month → 7 feedings', () => {
    expect(getFeedingsPerDay(1)).toBe(7)
  })

  it('3 months → 6 feedings', () => {
    expect(getFeedingsPerDay(3)).toBe(6)
  })

  it('6 months → 5 feedings', () => {
    expect(getFeedingsPerDay(6)).toBe(5)
  })

  it('12 months → 4 feedings', () => {
    expect(getFeedingsPerDay(12)).toBe(4)
  })
})

describe('calcPerFeedingMl', () => {
  it('600 ml/day with 6 feedings → 100 ml per feeding', () => {
    expect(calcPerFeedingMl(600, 6)).toBeCloseTo(100, 1)
  })

  it('450 ml/day with 8 feedings → ~56 ml per feeding', () => {
    expect(calcPerFeedingMl(450, 8)).toBeCloseTo(56.25, 1)
  })

  it('returns 0 if either input is zero/null', () => {
    expect(calcPerFeedingMl(0, 6)).toBe(0)
    expect(calcPerFeedingMl(600, 0)).toBe(0)
    expect(calcPerFeedingMl(null, 6)).toBe(0)
  })
})

describe('getStageByAgeMonths', () => {
  it('0–1 month → newborn', () => {
    expect(getStageByAgeMonths(0)).toBe('newborn')
    expect(getStageByAgeMonths(1)).toBe('newborn')
  })

  it('2–3 months → earlyInfant', () => {
    expect(getStageByAgeMonths(2)).toBe('earlyInfant')
    expect(getStageByAgeMonths(3)).toBe('earlyInfant')
  })

  it('4–5 months → midInfant', () => {
    expect(getStageByAgeMonths(4)).toBe('midInfant')
    expect(getStageByAgeMonths(5)).toBe('midInfant')
  })

  it('6–11 months → solidsIntro', () => {
    expect(getStageByAgeMonths(6)).toBe('solidsIntro')
    expect(getStageByAgeMonths(11)).toBe('solidsIntro')
  })

  it('12+ months → toddler', () => {
    expect(getStageByAgeMonths(12)).toBe('toddler')
    expect(getStageByAgeMonths(18)).toBe('toddler')
  })
})

describe('babyFeedingAmount (full result)', () => {
  it('term 0-month-old, 3.5kg in metric', () => {
    const r = babyFeedingAmount({ ageMonths: 0, weight: 3.5, unit: 'metric' })
    expect(r.dailyMl).toBeCloseTo(525, 0)
    expect(r.feedings).toBe(8)
    expect(r.perFeedingMl).toBeCloseTo(65.6, 1)
    expect(r.stage).toBe('newborn')
  })

  it('imperial input: 11 lbs (~5kg) → ~750 ml/day', () => {
    const r = babyFeedingAmount({ ageMonths: 3, weight: 11, unit: 'imperial' })
    // 11 lbs = 4.989 kg; daily ≈ 4.989 * 150 ≈ 748.4 ml
    expect(r.dailyMl).toBeCloseTo(748.4, 0)
    expect(r.feedings).toBe(6)
    expect(r.dailyOz).toBeCloseTo(r.dailyMl / OZ_TO_ML, 1)
  })

  it('returns null if weight missing', () => {
    expect(babyFeedingAmount({ ageMonths: 2, weight: null })).toBeNull()
  })

  it('returns null if ageMonths missing', () => {
    expect(babyFeedingAmount({ ageMonths: null, weight: 4 })).toBeNull()
  })

  it('caps ml/kg lower for 6+ months when solids are introduced', () => {
    // At 6+ months solids cover part of nutrition; expect lower ml/kg
    const young = babyFeedingAmount({ ageMonths: 2, weight: 5, unit: 'metric' })
    const older = babyFeedingAmount({ ageMonths: 8, weight: 8, unit: 'metric' })
    // ml/kg should drop: young ~150 ml/kg, older ≤ 120 ml/kg
    expect(young.mlPerKg).toBeGreaterThan(older.mlPerKg)
  })
})

describe('unit conversions', () => {
  it('LB_TO_KG ≈ 0.4536', () => {
    expect(LB_TO_KG).toBeCloseTo(0.4536, 3)
  })

  it('OZ_TO_ML ≈ 29.5735 (US fl oz)', () => {
    expect(OZ_TO_ML).toBeCloseTo(29.5735, 3)
  })
})
