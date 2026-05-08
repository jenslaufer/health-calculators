import { describe, it, expect } from 'vitest'
import {
  toKg,
  toMgDl,
  classifyCrCl,
  calcCreatinineClearance,
  evaluateCreatinineClearance,
} from '../utils/creatinineClearance.js'

// Cockcroft-Gault formula:
//   CrCl = ((140 - age) × weight_kg) / (72 × Scr_mg/dL) × (0.85 if female)

describe('toKg unit conversion', () => {
  it('passes kg through unchanged', () => {
    expect(toKg(80, 'kg')).toBe(80)
  })

  it('converts pounds to kg (176 lbs → ~79.83 kg)', () => {
    expect(toKg(176, 'lbs')).toBeCloseTo(79.83, 1)
  })

  it('returns null for invalid value', () => {
    expect(toKg(0, 'kg')).toBe(null)
    expect(toKg(-1, 'kg')).toBe(null)
    expect(toKg(null, 'kg')).toBe(null)
  })

  it('returns null for unknown unit', () => {
    expect(toKg(80, 'stones')).toBe(null)
  })
})

describe('toMgDl unit conversion', () => {
  it('passes mg/dL through unchanged', () => {
    expect(toMgDl(1.0, 'mg/dL')).toBe(1.0)
  })

  it('converts µmol/L to mg/dL (88.4 µmol/L → 1.0 mg/dL)', () => {
    expect(toMgDl(88.4, 'umol/L')).toBeCloseTo(1.0, 3)
  })

  it('returns null for invalid value', () => {
    expect(toMgDl(0, 'mg/dL')).toBe(null)
    expect(toMgDl(-0.5, 'mg/dL')).toBe(null)
    expect(toMgDl(null, 'mg/dL')).toBe(null)
  })
})

describe('calcCreatinineClearance — Cockcroft-Gault', () => {
  it('40-year-old man, 80 kg, Scr 1.0 mg/dL → ~111.1 mL/min', () => {
    // ((140 - 40) * 80) / (72 * 1.0) = 8000 / 72 = 111.11
    const crcl = calcCreatinineClearance({
      age: 40, weight: 80, weightUnit: 'kg',
      creatinine: 1.0, creatinineUnit: 'mg/dL', sex: 'male',
    })
    expect(crcl).toBeCloseTo(111.11, 1)
  })

  it('40-year-old woman, 65 kg, Scr 0.9 mg/dL → ~81.9 mL/min (×0.85)', () => {
    // ((140 - 40) * 65) / (72 * 0.9) * 0.85 = 6500/64.8 * 0.85 = 100.31 * 0.85 = 85.26
    const crcl = calcCreatinineClearance({
      age: 40, weight: 65, weightUnit: 'kg',
      creatinine: 0.9, creatinineUnit: 'mg/dL', sex: 'female',
    })
    expect(crcl).toBeCloseTo(85.26, 1)
  })

  it('70-year-old man, 70 kg, Scr 1.3 mg/dL → ~52.4 mL/min (mild–moderate CKD)', () => {
    // ((140 - 70) * 70) / (72 * 1.3) = 4900 / 93.6 = 52.35
    const crcl = calcCreatinineClearance({
      age: 70, weight: 70, weightUnit: 'kg',
      creatinine: 1.3, creatinineUnit: 'mg/dL', sex: 'male',
    })
    expect(crcl).toBeCloseTo(52.35, 1)
  })

  it('imperial: 40-year man, 176 lbs, 1.0 mg/dL → ~110.9 mL/min', () => {
    // 176 lbs = 79.83 kg → ((140-40)*79.83)/72 = 110.88
    const crcl = calcCreatinineClearance({
      age: 40, weight: 176, weightUnit: 'lbs',
      creatinine: 1.0, creatinineUnit: 'mg/dL', sex: 'male',
    })
    expect(crcl).toBeCloseTo(110.88, 1)
  })

  it('SI units: 40-year man, 80 kg, Scr 88.4 µmol/L → ~111.1 mL/min', () => {
    // 88.4 µmol/L = 1.0 mg/dL
    const crcl = calcCreatinineClearance({
      age: 40, weight: 80, weightUnit: 'kg',
      creatinine: 88.4, creatinineUnit: 'umol/L', sex: 'male',
    })
    expect(crcl).toBeCloseTo(111.11, 1)
  })

  it('returns null on invalid age', () => {
    expect(calcCreatinineClearance({
      age: 0, weight: 80, weightUnit: 'kg',
      creatinine: 1.0, creatinineUnit: 'mg/dL', sex: 'male',
    })).toBe(null)
    expect(calcCreatinineClearance({
      age: 200, weight: 80, weightUnit: 'kg',
      creatinine: 1.0, creatinineUnit: 'mg/dL', sex: 'male',
    })).toBe(null)
  })

  it('returns null on invalid weight, creatinine, or sex', () => {
    expect(calcCreatinineClearance({
      age: 40, weight: -1, weightUnit: 'kg',
      creatinine: 1.0, creatinineUnit: 'mg/dL', sex: 'male',
    })).toBe(null)
    expect(calcCreatinineClearance({
      age: 40, weight: 80, weightUnit: 'kg',
      creatinine: 0, creatinineUnit: 'mg/dL', sex: 'male',
    })).toBe(null)
    expect(calcCreatinineClearance({
      age: 40, weight: 80, weightUnit: 'kg',
      creatinine: 1.0, creatinineUnit: 'mg/dL', sex: 'other',
    })).toBe(null)
  })

  it('returns null on missing fields', () => {
    expect(calcCreatinineClearance({})).toBe(null)
    expect(calcCreatinineClearance({ age: 40 })).toBe(null)
  })
})

describe('classifyCrCl — KDIGO-aligned categories', () => {
  it('111 → normal (≥ 90)', () => {
    expect(classifyCrCl(111)).toBe('normal')
  })

  it('90 → normal (boundary)', () => {
    expect(classifyCrCl(90)).toBe('normal')
  })

  it('60 → mild (boundary)', () => {
    expect(classifyCrCl(60)).toBe('mild')
  })

  it('59 → mild downward of normal', () => {
    expect(classifyCrCl(59)).toBe('moderate')
  })

  it('30 → moderate (boundary)', () => {
    expect(classifyCrCl(30)).toBe('moderate')
  })

  it('29 → severe', () => {
    expect(classifyCrCl(29)).toBe('severe')
  })

  it('15 → severe (boundary)', () => {
    expect(classifyCrCl(15)).toBe('severe')
  })

  it('14 → kidneyFailure', () => {
    expect(classifyCrCl(14)).toBe('kidneyFailure')
  })

  it('returns null on invalid input', () => {
    expect(classifyCrCl(null)).toBe(null)
    expect(classifyCrCl(-5)).toBe(null)
    expect(classifyCrCl('60')).toBe(null)
  })
})

describe('evaluateCreatinineClearance — combined', () => {
  it('healthy adult → normal category', () => {
    const r = evaluateCreatinineClearance({
      age: 30, weight: 75, weightUnit: 'kg',
      creatinine: 0.9, creatinineUnit: 'mg/dL', sex: 'male',
    })
    expect(r.crcl).toBeGreaterThan(100)
    expect(r.category).toBe('normal')
  })

  it('elderly with elevated creatinine → moderate category', () => {
    const r = evaluateCreatinineClearance({
      age: 75, weight: 60, weightUnit: 'kg',
      creatinine: 1.6, creatinineUnit: 'mg/dL', sex: 'female',
    })
    // ((140-75)*60)/(72*1.6) * 0.85 = 3900/115.2 * 0.85 ≈ 28.78
    expect(r.crcl).toBeCloseTo(28.78, 1)
    expect(r.category).toBe('severe')
  })

  it('returns null on invalid input', () => {
    expect(evaluateCreatinineClearance({})).toBe(null)
  })
})
