import { describe, it, expect } from 'vitest'
import {
  getBpThresholds,
  classifyPediatricBp,
  PEDIATRIC_BP_AGE_RANGE,
} from '../utils/pediatricBloodPressure.js'

// AAP 2017 simplified screening BP cutoffs (Flynn et al., Pediatrics 2017).
// Children 1–12 y use sex- and age-specific 90th/95th percentile thresholds
// (5th height percentile, conservative — maximises sensitivity).
// Adolescents ≥ 13 y use AHA adult thresholds: 120/80, 130/80, 140/90.

describe('getBpThresholds', () => {
  it('returns thresholds for boy aged 5 (SBP p90=103, p95=108)', () => {
    const t = getBpThresholds(5, 'male')
    expect(t.sbpP90).toBe(103)
    expect(t.sbpP95).toBe(108)
    expect(t.dbpP90).toBe(63)
    expect(t.dbpP95).toBe(67)
  })

  it('returns thresholds for girl aged 10 (SBP p90=109, p95=113)', () => {
    const t = getBpThresholds(10, 'female')
    expect(t.sbpP90).toBe(109)
    expect(t.sbpP95).toBe(113)
    expect(t.dbpP90).toBe(72)
    expect(t.dbpP95).toBe(76)
  })

  it('uses AHA adult thresholds for age ≥ 13', () => {
    const t = getBpThresholds(13, 'male')
    expect(t.sbpP90).toBe(120)
    expect(t.sbpP95).toBe(130)
    expect(t.dbpP90).toBe(80)
    expect(t.dbpP95).toBe(80)
  })

  it('floors fractional ages to integer table row', () => {
    const a = getBpThresholds(5, 'male')
    const b = getBpThresholds(5.7, 'male')
    expect(b).toEqual(a)
  })

  it('returns null for age out of range', () => {
    expect(getBpThresholds(0, 'male')).toBeNull()
    expect(getBpThresholds(18, 'male')).toBeNull()
  })

  it('returns null for invalid sex', () => {
    expect(getBpThresholds(5, 'other')).toBeNull()
    expect(getBpThresholds(5, null)).toBeNull()
  })
})

describe('classifyPediatricBp — children 1–12', () => {
  it('boy 5y, 95/55 → normal (both below p90)', () => {
    const r = classifyPediatricBp({ ageYears: 5, sex: 'male', sbp: 95, dbp: 55 })
    expect(r.category).toBe('normal')
  })

  it('boy 5y, 105/55 → elevated (SBP ≥ p90=103, < p95=108)', () => {
    const r = classifyPediatricBp({ ageYears: 5, sex: 'male', sbp: 105, dbp: 55 })
    expect(r.category).toBe('elevated')
    expect(r.sbpCategory).toBe('elevated')
  })

  it('boy 5y, 110/55 → stage1 (SBP ≥ p95=108, < p95+12=120)', () => {
    const r = classifyPediatricBp({ ageYears: 5, sex: 'male', sbp: 110, dbp: 55 })
    expect(r.category).toBe('stage1')
  })

  it('boy 5y, 122/55 → stage2 (SBP ≥ p95+12=120)', () => {
    const r = classifyPediatricBp({ ageYears: 5, sex: 'male', sbp: 122, dbp: 55 })
    expect(r.category).toBe('stage2')
  })

  it('worst component wins (SBP normal, DBP stage1)', () => {
    // girl 9y: dbpP95=75 → 76 should be stage1
    const r = classifyPediatricBp({ ageYears: 9, sex: 'female', sbp: 100, dbp: 76 })
    expect(r.dbpCategory).toBe('stage1')
    expect(r.category).toBe('stage1')
  })
})

describe('classifyPediatricBp — adolescents ≥ 13 (AHA adult)', () => {
  it('age 13, 115/75 → normal', () => {
    const r = classifyPediatricBp({ ageYears: 13, sex: 'male', sbp: 115, dbp: 75 })
    expect(r.category).toBe('normal')
  })

  it('age 13, 125/75 → elevated (SBP 120–129)', () => {
    const r = classifyPediatricBp({ ageYears: 13, sex: 'male', sbp: 125, dbp: 75 })
    expect(r.category).toBe('elevated')
  })

  it('age 15, 135/82 → stage1', () => {
    const r = classifyPediatricBp({ ageYears: 15, sex: 'female', sbp: 135, dbp: 82 })
    expect(r.category).toBe('stage1')
  })

  it('age 17, 145/95 → stage2', () => {
    const r = classifyPediatricBp({ ageYears: 17, sex: 'male', sbp: 145, dbp: 95 })
    expect(r.category).toBe('stage2')
  })
})

describe('classifyPediatricBp — invalid input', () => {
  it('returns null for missing values', () => {
    expect(classifyPediatricBp({ ageYears: 5, sex: 'male', sbp: null, dbp: 60 })).toBeNull()
    expect(classifyPediatricBp({ ageYears: 5, sex: 'male', sbp: 100, dbp: null })).toBeNull()
    expect(classifyPediatricBp({})).toBeNull()
  })

  it('returns null when SBP ≤ DBP (sanity)', () => {
    expect(classifyPediatricBp({ ageYears: 5, sex: 'male', sbp: 60, dbp: 70 })).toBeNull()
  })

  it('returns null for negative or zero values', () => {
    expect(classifyPediatricBp({ ageYears: 5, sex: 'male', sbp: -10, dbp: 60 })).toBeNull()
    expect(classifyPediatricBp({ ageYears: 5, sex: 'male', sbp: 100, dbp: 0 })).toBeNull()
  })

  it('returns null for invalid age range', () => {
    expect(classifyPediatricBp({ ageYears: 0, sex: 'male', sbp: 100, dbp: 60 })).toBeNull()
    expect(classifyPediatricBp({ ageYears: 18, sex: 'male', sbp: 100, dbp: 60 })).toBeNull()
  })
})

describe('PEDIATRIC_BP_AGE_RANGE', () => {
  it('exposes the supported age range (1–17)', () => {
    expect(PEDIATRIC_BP_AGE_RANGE.min).toBe(1)
    expect(PEDIATRIC_BP_AGE_RANGE.max).toBe(17)
  })
})
