import { describe, it, expect } from 'vitest'
import {
  calcHeartFailureRisk,
  classifyHeartFailureRisk,
  riskPercentForScore,
  calcBmi,
} from '../utils/heartFailureRisk.js'

// Heart failure risk score — points-based screen built from age, sex, BMI,
// hypertension, diabetes, CAD, prior heart attack, smoking, inactivity, CKD.
// Score → 10-year heart failure risk and category (low/moderate/high/veryHigh).

describe('Heart failure risk — input validation', () => {
  it('returns null for missing or invalid inputs', () => {
    expect(calcHeartFailureRisk({})).toBeNull()
    expect(calcHeartFailureRisk({ age: 50 })).toBeNull()
    expect(calcHeartFailureRisk(null)).toBeNull()
  })

  it('returns null for out-of-range age', () => {
    expect(calcHeartFailureRisk({ age: 10, sex: 'male' })).toBeNull()
    expect(calcHeartFailureRisk({ age: 105, sex: 'male' })).toBeNull()
  })

  it('returns null for invalid sex', () => {
    expect(calcHeartFailureRisk({ age: 50, sex: 'other' })).toBeNull()
  })
})

describe('Heart failure risk — low risk profiles', () => {
  it('young healthy female → low risk', () => {
    const r = calcHeartFailureRisk({
      age: 30, sex: 'female', bmi: 22,
    })
    expect(r.score).toBeLessThanOrEqual(3)
    expect(r.category).toBe('low')
    expect(r.tenYearRiskPct).toBeLessThan(10)
  })

  it('40 y/o male, no risk factors → low/moderate', () => {
    const r = calcHeartFailureRisk({
      age: 40, sex: 'male', bmi: 24,
    })
    expect(r.score).toBeLessThanOrEqual(4)
    expect(['low', 'moderate']).toContain(r.category)
  })
})

describe('Heart failure risk — high risk profiles', () => {
  it('70 y/o male with hypertension, diabetes, CAD, MI history → veryHigh', () => {
    const r = calcHeartFailureRisk({
      age: 70, sex: 'male', bmi: 32,
      hypertension: true, diabetes: true,
      coronaryArteryDisease: true, priorHeartAttack: true,
      smoker: true, inactive: true, ckd: true,
    })
    expect(r.score).toBeGreaterThan(12)
    expect(r.category).toBe('veryHigh')
    expect(r.tenYearRiskPct).toBeGreaterThanOrEqual(30)
  })

  it('65 y/o female with hypertension and diabetes → high', () => {
    const r = calcHeartFailureRisk({
      age: 65, sex: 'female', bmi: 28,
      hypertension: true, diabetes: true,
    })
    expect(r.score).toBeGreaterThanOrEqual(8)
    expect(['high', 'veryHigh']).toContain(r.category)
  })
})

describe('Heart failure risk — risk factor effects', () => {
  const base = { age: 55, sex: 'male', bmi: 24 }

  it('hypertension increases score', () => {
    const without = calcHeartFailureRisk(base)
    const withHt = calcHeartFailureRisk({ ...base, hypertension: true })
    expect(withHt.score).toBeGreaterThan(without.score)
  })

  it('diabetes increases score', () => {
    const without = calcHeartFailureRisk(base)
    const withDm = calcHeartFailureRisk({ ...base, diabetes: true })
    expect(withDm.score).toBeGreaterThan(without.score)
  })

  it('prior heart attack adds more than smoking', () => {
    const mi = calcHeartFailureRisk({ ...base, priorHeartAttack: true })
    const smoke = calcHeartFailureRisk({ ...base, smoker: true })
    expect(mi.score).toBeGreaterThan(smoke.score)
  })

  it('obesity (BMI ≥ 30) scores higher than overweight (BMI 25–30)', () => {
    const obese = calcHeartFailureRisk({ ...base, bmi: 32 })
    const over = calcHeartFailureRisk({ ...base, bmi: 27 })
    expect(obese.score).toBeGreaterThan(over.score)
  })

  it('men score higher than women with otherwise identical inputs', () => {
    const male = calcHeartFailureRisk({ ...base, sex: 'male' })
    const female = calcHeartFailureRisk({ ...base, sex: 'female' })
    expect(male.score).toBeGreaterThan(female.score)
  })

  it('older age dominates the score', () => {
    const young = calcHeartFailureRisk({ ...base, age: 35 })
    const old = calcHeartFailureRisk({ ...base, age: 78 })
    expect(old.score - young.score).toBeGreaterThanOrEqual(7)
  })
})

describe('Risk classification thresholds', () => {
  it('classifies ≤3 as low', () => {
    expect(classifyHeartFailureRisk(0)).toBe('low')
    expect(classifyHeartFailureRisk(3)).toBe('low')
  })
  it('classifies 4–7 as moderate', () => {
    expect(classifyHeartFailureRisk(4)).toBe('moderate')
    expect(classifyHeartFailureRisk(7)).toBe('moderate')
  })
  it('classifies 8–12 as high', () => {
    expect(classifyHeartFailureRisk(8)).toBe('high')
    expect(classifyHeartFailureRisk(12)).toBe('high')
  })
  it('classifies >12 as veryHigh', () => {
    expect(classifyHeartFailureRisk(13)).toBe('veryHigh')
    expect(classifyHeartFailureRisk(20)).toBe('veryHigh')
  })
  it('returns null for invalid score', () => {
    expect(classifyHeartFailureRisk(-1)).toBeNull()
    expect(classifyHeartFailureRisk(NaN)).toBeNull()
  })
})

describe('Risk percent mapping', () => {
  it('low scores → low risk percent', () => {
    expect(riskPercentForScore(0)).toBeLessThan(5)
    expect(riskPercentForScore(2)).toBeLessThan(10)
  })
  it('high scores → high risk percent', () => {
    expect(riskPercentForScore(12)).toBeGreaterThanOrEqual(20)
    expect(riskPercentForScore(20)).toBeGreaterThanOrEqual(40)
  })
  it('returns null for invalid score', () => {
    expect(riskPercentForScore(-1)).toBeNull()
  })
})

describe('BMI helper', () => {
  it('70kg, 175cm → ~22.86', () => {
    expect(calcBmi({ weightKg: 70, heightCm: 175 })).toBeCloseTo(22.86, 1)
  })
  it('returns null for invalid input', () => {
    expect(calcBmi({ weightKg: 0, heightCm: 175 })).toBeNull()
    expect(calcBmi({ weightKg: 70, heightCm: 0 })).toBeNull()
  })
})
