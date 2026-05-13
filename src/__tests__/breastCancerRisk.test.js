import { describe, it, expect } from 'vitest'
import {
  calcBreastCancerRisk,
  calcRelativeRisk,
  riskCategory,
} from '../utils/breastCancerRisk.js'

// Simplified Gail-style breast cancer risk model
// Reference values derived from Gail JM et al. (1989) and Costantino JP et al. (1999)

describe('calcRelativeRisk', () => {
  it('low-risk baseline profile returns RR = 1.0', () => {
    const rr = calcRelativeRisk({
      ageAtMenarche: 14,
      biopsies: 0,
      atypicalHyperplasia: false,
      firstDegreeRelatives: 0,
      ageAtFirstBirth: 18,
      nulliparous: false,
    })
    expect(rr).toBeCloseTo(1.0, 3)
  })

  it('early menarche (<12) increases RR', () => {
    const rr = calcRelativeRisk({
      ageAtMenarche: 11,
      biopsies: 0,
      atypicalHyperplasia: false,
      firstDegreeRelatives: 0,
      ageAtFirstBirth: 18,
      nulliparous: false,
    })
    expect(rr).toBeCloseTo(1.21, 2)
  })

  it('one biopsy without AH increases RR', () => {
    const rr = calcRelativeRisk({
      ageAtMenarche: 14,
      biopsies: 1,
      atypicalHyperplasia: false,
      firstDegreeRelatives: 0,
      ageAtFirstBirth: 18,
      nulliparous: false,
    })
    // 1.70 * 0.93 = 1.581
    expect(rr).toBeCloseTo(1.581, 2)
  })

  it('atypical hyperplasia multiplies risk by 1.82 when biopsy present', () => {
    const rr = calcRelativeRisk({
      ageAtMenarche: 14,
      biopsies: 1,
      atypicalHyperplasia: true,
      firstDegreeRelatives: 0,
      ageAtFirstBirth: 18,
      nulliparous: false,
    })
    // 1.70 * 1.82 = 3.094
    expect(rr).toBeCloseTo(3.094, 2)
  })

  it('two or more first-degree relatives doubles risk substantially', () => {
    const rr = calcRelativeRisk({
      ageAtMenarche: 14,
      biopsies: 0,
      atypicalHyperplasia: false,
      firstDegreeRelatives: 2,
      ageAtFirstBirth: 18,
      nulliparous: false,
    })
    expect(rr).toBeGreaterThan(5)
  })

  it('nulliparous + one relative > age-20 birth + one relative', () => {
    const rrNullipar = calcRelativeRisk({
      ageAtMenarche: 14, biopsies: 0, atypicalHyperplasia: false,
      firstDegreeRelatives: 1, nulliparous: true,
    })
    const rrYoung = calcRelativeRisk({
      ageAtMenarche: 14, biopsies: 0, atypicalHyperplasia: false,
      firstDegreeRelatives: 1, ageAtFirstBirth: 19,
    })
    expect(rrNullipar).toBeGreaterThan(rrYoung)
  })
})

describe('calcBreastCancerRisk', () => {
  it('returns null for invalid age', () => {
    expect(calcBreastCancerRisk({ age: null })).toBeNull()
    expect(calcBreastCancerRisk({ age: 20 })).toBeNull()
    expect(calcBreastCancerRisk({ age: 100 })).toBeNull()
  })

  it('low-risk 40-year-old returns ~baseline 5-year risk', () => {
    const result = calcBreastCancerRisk({
      age: 40, ageAtMenarche: 14, biopsies: 0,
      atypicalHyperplasia: false, firstDegreeRelatives: 0,
      ageAtFirstBirth: 18,
    })
    expect(result.fiveYearRisk).toBeCloseTo(result.averageFiveYearRisk, 3)
    expect(result.relativeRisk).toBeCloseTo(1.0, 2)
  })

  it('high-risk profile increases 5-year risk', () => {
    const low = calcBreastCancerRisk({
      age: 50, ageAtMenarche: 14, biopsies: 0,
      atypicalHyperplasia: false, firstDegreeRelatives: 0,
      ageAtFirstBirth: 22,
    })
    const high = calcBreastCancerRisk({
      age: 50, ageAtMenarche: 11, biopsies: 2,
      atypicalHyperplasia: true, firstDegreeRelatives: 2,
      nulliparous: true,
    })
    expect(high.fiveYearRisk).toBeGreaterThan(low.fiveYearRisk * 3)
  })

  it('flags elevated when 5-year risk exceeds 1.66%', () => {
    const result = calcBreastCancerRisk({
      age: 60, ageAtMenarche: 11, biopsies: 2,
      atypicalHyperplasia: true, firstDegreeRelatives: 2,
      nulliparous: true,
    })
    expect(result.elevated).toBe(true)
  })

  it('caps 5-year risk at 0.99', () => {
    const result = calcBreastCancerRisk({
      age: 75, ageAtMenarche: 10, biopsies: 5,
      atypicalHyperplasia: true, firstDegreeRelatives: 2,
      nulliparous: true,
    })
    expect(result.fiveYearRisk).toBeLessThanOrEqual(0.99)
  })

  it('5-year risk increases with age for same profile', () => {
    const young = calcBreastCancerRisk({
      age: 40, ageAtMenarche: 14, biopsies: 0,
      atypicalHyperplasia: false, firstDegreeRelatives: 0,
      ageAtFirstBirth: 22,
    })
    const old = calcBreastCancerRisk({
      age: 65, ageAtMenarche: 14, biopsies: 0,
      atypicalHyperplasia: false, firstDegreeRelatives: 0,
      ageAtFirstBirth: 22,
    })
    expect(old.fiveYearRisk).toBeGreaterThan(young.fiveYearRisk)
  })
})

describe('riskCategory', () => {
  it('classifies values into low/average/elevated/high', () => {
    expect(riskCategory(0.005)).toBe('low')
    expect(riskCategory(0.014)).toBe('average')
    expect(riskCategory(0.020)).toBe('elevated')
    expect(riskCategory(0.060)).toBe('high')
  })

  it('returns null for null input', () => {
    expect(riskCategory(null)).toBeNull()
  })
})
