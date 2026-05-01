import { describe, it, expect } from 'vitest'
import { calcAgeAdjustedPsaThreshold, calcProstateRisk } from '../utils/prostateRisk.js'

// Age-adjusted PSA upper-limit reference (Oesterling et al., JAMA 1993):
//  40-49 → 2.5 ng/mL
//  50-59 → 3.5 ng/mL
//  60-69 → 4.5 ng/mL
//  70-79 → 6.5 ng/mL

describe('Age-adjusted PSA threshold', () => {
  it('returns 2.5 for age 45', () => {
    expect(calcAgeAdjustedPsaThreshold(45)).toBe(2.5)
  })
  it('returns 3.5 for age 55', () => {
    expect(calcAgeAdjustedPsaThreshold(55)).toBe(3.5)
  })
  it('returns 4.5 for age 65', () => {
    expect(calcAgeAdjustedPsaThreshold(65)).toBe(4.5)
  })
  it('returns 6.5 for age 75', () => {
    expect(calcAgeAdjustedPsaThreshold(75)).toBe(6.5)
  })
  it('uses 40-49 threshold for younger ages (clamped)', () => {
    expect(calcAgeAdjustedPsaThreshold(35)).toBe(2.5)
  })
  it('uses 70-79 threshold for older ages (clamped)', () => {
    expect(calcAgeAdjustedPsaThreshold(85)).toBe(6.5)
  })
})

describe('Prostate cancer risk classification', () => {
  it('low risk: PSA 1.0, age 50, no family history', () => {
    const r = calcProstateRisk({ psa: 1.0, age: 50, familyHistory: false })
    expect(r.category).toBe('low')
    expect(r.threshold).toBe(3.5)
    expect(r.score).toBeGreaterThan(0)
  })

  it('moderate risk: PSA 5.0, age 60, no family history (gray zone 4-10)', () => {
    const r = calcProstateRisk({ psa: 5.0, age: 60, familyHistory: false })
    expect(r.category).toBe('moderate')
    expect(r.threshold).toBe(4.5)
  })

  it('high risk: PSA 12, age 65, no family history', () => {
    const r = calcProstateRisk({ psa: 12, age: 65, familyHistory: false })
    expect(r.category).toBe('high')
  })

  it('very high risk: PSA 25, age 70, family history positive', () => {
    const r = calcProstateRisk({ psa: 25, age: 70, familyHistory: true })
    expect(r.category).toBe('veryHigh')
  })

  it('family history elevates a borderline score by one band', () => {
    const noFam = calcProstateRisk({ psa: 3.0, age: 55, familyHistory: false })
    const withFam = calcProstateRisk({ psa: 3.0, age: 55, familyHistory: true })
    // PSA 3.0 with age 55 (threshold 3.5) is below threshold → low
    // With family history, risk raised to moderate
    expect(noFam.category).toBe('low')
    expect(withFam.category).toBe('moderate')
  })

  it('returns null for invalid PSA', () => {
    expect(calcProstateRisk({ psa: null, age: 60, familyHistory: false })).toBeNull()
    expect(calcProstateRisk({ psa: -1, age: 60, familyHistory: false })).toBeNull()
  })

  it('returns null for invalid age', () => {
    expect(calcProstateRisk({ psa: 4, age: null, familyHistory: false })).toBeNull()
    expect(calcProstateRisk({ psa: 4, age: 0, familyHistory: false })).toBeNull()
  })

  it('produces a numeric score that scales with PSA', () => {
    const low = calcProstateRisk({ psa: 1.0, age: 60, familyHistory: false })
    const high = calcProstateRisk({ psa: 15, age: 60, familyHistory: false })
    expect(high.score).toBeGreaterThan(low.score)
  })

  it('flags PSA above 10 as biopsy-recommended', () => {
    const r = calcProstateRisk({ psa: 11, age: 65, familyHistory: false })
    expect(r.biopsyRecommended).toBe(true)
  })

  it('does not flag PSA below threshold as biopsy-recommended', () => {
    const r = calcProstateRisk({ psa: 1.5, age: 60, familyHistory: false })
    expect(r.biopsyRecommended).toBe(false)
  })
})
