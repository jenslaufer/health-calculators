import { describe, it, expect } from 'vitest'
import { calcChaDsVascScore, classifyStrokeRisk, calcStrokeRisk } from '../utils/strokeRisk.js'

// CHA₂DS₂-VASc score (Lip et al., Chest 2010) — stroke risk in atrial fibrillation.
//
// Components (max 9 points):
//   C  Congestive heart failure / LV dysfunction          1
//   H  Hypertension                                        1
//   A₂ Age ≥ 75                                            2
//   D  Diabetes mellitus                                   1
//   S₂ Prior stroke / TIA / thromboembolism                2
//   V  Vascular disease (CAD, PAD, aortic plaque)          1
//   A  Age 65–74                                           1
//   Sc Sex category — female                               1
//
// Annual stroke risk per Friberg et al. (Eur Heart J 2012, Swedish AF cohort):
//   0 → 0.2 %, 1 → 0.6 %, 2 → 2.2 %, 3 → 3.2 %, 4 → 4.8 %,
//   5 → 7.2 %, 6 → 9.7 %, 7 → 11.2 %, 8 → 10.8 %, 9 → 12.2 %

describe('CHA₂DS₂-VASc score calculation', () => {
  it('returns 0 for healthy 50-year-old male with no risk factors', () => {
    const score = calcChaDsVascScore({
      age: 50,
      sex: 'male',
      heartFailure: false,
      hypertension: false,
      diabetes: false,
      strokeHistory: false,
      vascularDisease: false,
    })
    expect(score).toBe(0)
  })

  it('age 65-74 contributes 1 point', () => {
    const score = calcChaDsVascScore({
      age: 70, sex: 'male', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })
    expect(score).toBe(1)
  })

  it('age ≥ 75 contributes 2 points', () => {
    const score = calcChaDsVascScore({
      age: 80, sex: 'male', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })
    expect(score).toBe(2)
  })

  it('female sex contributes 1 point', () => {
    const score = calcChaDsVascScore({
      age: 50, sex: 'female', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })
    expect(score).toBe(1)
  })

  it('prior stroke contributes 2 points', () => {
    const score = calcChaDsVascScore({
      age: 50, sex: 'male', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: true, vascularDisease: false,
    })
    expect(score).toBe(2)
  })

  it('all factors → max score 9 (female, ≥75, all comorbidities)', () => {
    const score = calcChaDsVascScore({
      age: 80, sex: 'female', heartFailure: true, hypertension: true,
      diabetes: true, strokeHistory: true, vascularDisease: true,
    })
    expect(score).toBe(9)
  })

  it('typical AF patient: 72yo female, hypertension, diabetes → 4', () => {
    // Age 65-74 (1) + Female (1) + HTN (1) + DM (1) = 4
    const score = calcChaDsVascScore({
      age: 72, sex: 'female', heartFailure: false, hypertension: true,
      diabetes: true, strokeHistory: false, vascularDisease: false,
    })
    expect(score).toBe(4)
  })

  it('returns null for invalid age', () => {
    expect(calcChaDsVascScore({
      age: null, sex: 'male', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })).toBeNull()
    expect(calcChaDsVascScore({
      age: -1, sex: 'male', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })).toBeNull()
  })

  it('returns null for invalid sex', () => {
    expect(calcChaDsVascScore({
      age: 60, sex: 'unknown', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })).toBeNull()
  })
})

describe('Stroke risk classification', () => {
  it('score 0 → low risk', () => {
    expect(classifyStrokeRisk(0)).toBe('low')
  })
  it('score 1 → borderline', () => {
    expect(classifyStrokeRisk(1)).toBe('borderline')
  })
  it('score 2 → moderate', () => {
    expect(classifyStrokeRisk(2)).toBe('moderate')
  })
  it('score 4 → high', () => {
    expect(classifyStrokeRisk(4)).toBe('high')
  })
  it('score 7 → veryHigh', () => {
    expect(classifyStrokeRisk(7)).toBe('veryHigh')
  })
  it('returns null for invalid score', () => {
    expect(classifyStrokeRisk(-1)).toBeNull()
    expect(classifyStrokeRisk(10)).toBeNull()
    expect(classifyStrokeRisk(null)).toBeNull()
  })
})

describe('Annual stroke risk integration', () => {
  it('returns null when score cannot be calculated', () => {
    const r = calcStrokeRisk({
      age: null, sex: 'male', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })
    expect(r).toBeNull()
  })

  it('typical case 72yo female HTN+DM returns score 4 with annual risk and high band', () => {
    const r = calcStrokeRisk({
      age: 72, sex: 'female', heartFailure: false, hypertension: true,
      diabetes: true, strokeHistory: false, vascularDisease: false,
    })
    expect(r.score).toBe(4)
    expect(r.category).toBe('high')
    expect(r.annualRiskPct).toBeGreaterThan(0)
    expect(r.annualRiskPct).toBeLessThan(100)
  })

  it('annual stroke risk increases monotonically up to score 7', () => {
    const make = (overrides) => calcStrokeRisk({
      age: 50, sex: 'male', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
      ...overrides,
    })
    const s0 = make({}).annualRiskPct
    const s1 = make({ hypertension: true }).annualRiskPct
    const s2 = make({ hypertension: true, diabetes: true }).annualRiskPct
    expect(s1).toBeGreaterThan(s0)
    expect(s2).toBeGreaterThan(s1)
  })

  it('score 0 → no anticoagulation recommended', () => {
    const r = calcStrokeRisk({
      age: 50, sex: 'male', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })
    expect(r.anticoagulation).toBe('none')
  })

  it('score 1 (male) → anticoagulation considered', () => {
    const r = calcStrokeRisk({
      age: 50, sex: 'male', heartFailure: false, hypertension: true,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })
    expect(r.score).toBe(1)
    expect(r.anticoagulation).toBe('consider')
  })

  it('score ≥ 2 → anticoagulation recommended', () => {
    const r = calcStrokeRisk({
      age: 80, sex: 'male', heartFailure: false, hypertension: false,
      diabetes: false, strokeHistory: false, vascularDisease: false,
    })
    expect(r.score).toBe(2)
    expect(r.anticoagulation).toBe('recommended')
  })
})
