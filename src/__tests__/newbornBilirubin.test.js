import { describe, it, expect } from 'vitest'
import {
  toMgDl,
  getPercentileThresholds,
  classifyBilirubinZone,
  evaluateBilirubin,
  BILIRUBIN_AGE_RANGE,
} from '../utils/newbornBilirubin.js'

// Bhutani nomogram (Pediatrics 1999) — risk stratification of TSB
// in the first 168 hours of life for newborns ≥ 35 weeks gestational age.
//   ≥ 95th percentile     → high risk
//   76th–94th percentile  → high intermediate
//   40th–75th percentile  → low intermediate
//   < 40th percentile     → low risk

describe('toMgDl unit conversion', () => {
  it('passes mg/dL through unchanged', () => {
    expect(toMgDl(10.0, 'mg/dL')).toBe(10.0)
  })

  it('converts µmol/L to mg/dL (171 µmol/L → 10.0 mg/dL)', () => {
    expect(toMgDl(171, 'umol/L')).toBeCloseTo(10.0, 2)
  })

  it('accepts zero as a valid value', () => {
    expect(toMgDl(0, 'mg/dL')).toBe(0)
  })

  it('returns null for negative or invalid values', () => {
    expect(toMgDl(-1, 'mg/dL')).toBeNull()
    expect(toMgDl(null, 'mg/dL')).toBeNull()
    expect(toMgDl('5', 'mg/dL')).toBeNull()
  })

  it('returns null for unknown unit', () => {
    expect(toMgDl(10, 'mmol/L')).toBeNull()
  })
})

describe('getPercentileThresholds', () => {
  it('returns thresholds at sampled hour 24h (p40=4.0, p75=6.0, p95=8.0)', () => {
    const t = getPercentileThresholds(24)
    expect(t.p40).toBeCloseTo(4.0, 2)
    expect(t.p75).toBeCloseTo(6.0, 2)
    expect(t.p95).toBeCloseTo(8.0, 2)
  })

  it('returns thresholds at sampled hour 72h (p95=14.0)', () => {
    const t = getPercentileThresholds(72)
    expect(t.p95).toBeCloseTo(14.0, 2)
  })

  it('linearly interpolates between sampled hours (e.g. 30h)', () => {
    // 24h: p95=8.0, 36h: p95=9.5 → at 30h: 8.75
    const t = getPercentileThresholds(30)
    expect(t.p95).toBeCloseTo(8.75, 2)
  })

  it('returns null for ages outside [12, 168] hours', () => {
    expect(getPercentileThresholds(11)).toBeNull()
    expect(getPercentileThresholds(169)).toBeNull()
  })

  it('returns null for invalid age', () => {
    expect(getPercentileThresholds(null)).toBeNull()
    expect(getPercentileThresholds(NaN)).toBeNull()
  })
})

describe('classifyBilirubinZone', () => {
  it('TSB 5.0 at 24h → lowIntermediate (above p40=4.0, below p75=6.0)', () => {
    expect(classifyBilirubinZone(5.0, 24)).toBe('lowIntermediate')
  })

  it('TSB 3.0 at 24h → lowRisk (below p40=4.0)', () => {
    expect(classifyBilirubinZone(3.0, 24)).toBe('lowRisk')
  })

  it('TSB 7.0 at 24h → highIntermediate (between p75=6.0 and p95=8.0)', () => {
    expect(classifyBilirubinZone(7.0, 24)).toBe('highIntermediate')
  })

  it('TSB 8.5 at 24h → highRisk (above p95=8.0)', () => {
    expect(classifyBilirubinZone(8.5, 24)).toBe('highRisk')
  })

  it('TSB exactly at p95 → highRisk (boundary)', () => {
    expect(classifyBilirubinZone(8.0, 24)).toBe('highRisk')
  })

  it('TSB at 72h (p40=8.0, p75=10.0, p95=14.0) → mid range', () => {
    expect(classifyBilirubinZone(7.5, 72)).toBe('lowRisk')
    expect(classifyBilirubinZone(9.0, 72)).toBe('lowIntermediate')
    expect(classifyBilirubinZone(11.0, 72)).toBe('highIntermediate')
    expect(classifyBilirubinZone(15.0, 72)).toBe('highRisk')
  })

  it('returns null for invalid TSB or age', () => {
    expect(classifyBilirubinZone(null, 24)).toBeNull()
    expect(classifyBilirubinZone(-1, 24)).toBeNull()
    expect(classifyBilirubinZone(5, 5)).toBeNull()
    expect(classifyBilirubinZone(5, 200)).toBeNull()
  })
})

describe('evaluateBilirubin (combined)', () => {
  it('low-risk newborn (TSB 3.0 mg/dL at 24h)', () => {
    const r = evaluateBilirubin({ tsb: 3.0, tsbUnit: 'mg/dL', ageHours: 24 })
    expect(r.zone).toBe('lowRisk')
    expect(r.tsbMgDl).toBe(3.0)
    expect(r.ageHours).toBe(24)
    expect(r.thresholds.p95).toBeCloseTo(8.0, 2)
  })

  it('high-risk newborn (TSB 16 mg/dL at 60h)', () => {
    const r = evaluateBilirubin({ tsb: 16, tsbUnit: 'mg/dL', ageHours: 60 })
    expect(r.zone).toBe('highRisk')
  })

  it('SI units (TSB 137 µmol/L = ~8.0 mg/dL at 24h → highRisk)', () => {
    const r = evaluateBilirubin({ tsb: 137, tsbUnit: 'umol/L', ageHours: 24 })
    expect(r.tsbMgDl).toBeCloseTo(8.01, 1)
    expect(r.zone).toBe('highRisk')
  })

  it('returns null on invalid input', () => {
    expect(evaluateBilirubin({ tsb: -1, tsbUnit: 'mg/dL', ageHours: 24 })).toBeNull()
    expect(evaluateBilirubin({ tsb: 5, tsbUnit: 'mg/dL', ageHours: 5 })).toBeNull()
    expect(evaluateBilirubin({})).toBeNull()
  })
})

describe('BILIRUBIN_AGE_RANGE', () => {
  it('exposes the supported age range', () => {
    expect(BILIRUBIN_AGE_RANGE.min).toBe(12)
    expect(BILIRUBIN_AGE_RANGE.max).toBe(168)
  })
})
