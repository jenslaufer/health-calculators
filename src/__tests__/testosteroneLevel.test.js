import { describe, it, expect } from 'vitest'
import {
  calcFreeTestosterone,
  classifyTotalTestosterone,
  classifyFreeTestosterone,
  calcTestosteroneStatus,
} from '../utils/testosteroneLevel.js'

// Free testosterone uses the Vermeulen equation (the de-facto reference for
// non-mass-spectrometry estimation). All inputs in SI / nmol/L for total T,
// nmol/L for SHBG, g/L for albumin. Output: nmol/L (free) and pmol/L convenience.
//
// Reference adult male ranges (Vermeulen / Endocrine Society):
//   Total testosterone: 8.6 – 29.0 nmol/L
//   Free testosterone: 0.20 – 0.62 nmol/L (≈ 200 – 620 pmol/L)

describe('Free testosterone (Vermeulen)', () => {
  it('computes a plausible value for total 18, SHBG 30, albumin 43', () => {
    const r = calcFreeTestosterone({ totalT: 18, shbg: 30, albumin: 43 })
    // Expected ≈ 0.36 nmol/L based on Vermeulen — must be within physiological range.
    expect(r).toBeGreaterThan(0.25)
    expect(r).toBeLessThan(0.55)
  })

  it('decreases when SHBG rises (more T bound)', () => {
    const low = calcFreeTestosterone({ totalT: 18, shbg: 30, albumin: 43 })
    const high = calcFreeTestosterone({ totalT: 18, shbg: 70, albumin: 43 })
    expect(high).toBeLessThan(low)
  })

  it('increases when total testosterone rises', () => {
    const lowT = calcFreeTestosterone({ totalT: 10, shbg: 30, albumin: 43 })
    const highT = calcFreeTestosterone({ totalT: 25, shbg: 30, albumin: 43 })
    expect(highT).toBeGreaterThan(lowT)
  })

  it('returns null for missing or invalid inputs', () => {
    expect(calcFreeTestosterone({ totalT: null, shbg: 30, albumin: 43 })).toBeNull()
    expect(calcFreeTestosterone({ totalT: 18, shbg: 0, albumin: 43 })).toBeNull()
    expect(calcFreeTestosterone({ totalT: 18, shbg: 30, albumin: -1 })).toBeNull()
  })

  it('uses default albumin of 43 g/L when not provided', () => {
    const explicit = calcFreeTestosterone({ totalT: 18, shbg: 30, albumin: 43 })
    const fallback = calcFreeTestosterone({ totalT: 18, shbg: 30 })
    expect(fallback).toBeCloseTo(explicit, 3)
  })
})

describe('Total testosterone classification (adult male)', () => {
  it('flags 5 nmol/L as low', () => {
    expect(classifyTotalTestosterone(5)).toBe('low')
  })
  it('flags 8 nmol/L as borderline', () => {
    expect(classifyTotalTestosterone(8)).toBe('borderline')
  })
  it('flags 15 nmol/L as normal', () => {
    expect(classifyTotalTestosterone(15)).toBe('normal')
  })
  it('flags 35 nmol/L as high', () => {
    expect(classifyTotalTestosterone(35)).toBe('high')
  })
  it('returns null for invalid input', () => {
    expect(classifyTotalTestosterone(null)).toBeNull()
    expect(classifyTotalTestosterone(-1)).toBeNull()
  })
})

describe('Free testosterone classification (adult male)', () => {
  it('flags 0.10 nmol/L as low', () => {
    expect(classifyFreeTestosterone(0.10)).toBe('low')
  })
  it('flags 0.40 nmol/L as normal', () => {
    expect(classifyFreeTestosterone(0.40)).toBe('normal')
  })
  it('flags 0.80 nmol/L as high', () => {
    expect(classifyFreeTestosterone(0.80)).toBe('high')
  })
  it('returns null for invalid input', () => {
    expect(classifyFreeTestosterone(null)).toBeNull()
  })
})

describe('Combined testosterone status', () => {
  it('returns total + free + classifications', () => {
    const r = calcTestosteroneStatus({ totalT: 18, shbg: 30, albumin: 43 })
    expect(r).not.toBeNull()
    expect(r.totalT).toBe(18)
    expect(r.freeT).toBeGreaterThan(0)
    expect(r.freeTpmol).toBeGreaterThan(0)
    expect(r.totalCategory).toBe('normal')
    expect(r.freeCategory).toBe('normal')
  })

  it('flags hypogonadism when total < 8', () => {
    const r = calcTestosteroneStatus({ totalT: 6, shbg: 30, albumin: 43 })
    expect(r.totalCategory).toBe('low')
    expect(r.hypogonadism).toBe(true)
  })

  it('returns null when any required input is missing', () => {
    expect(calcTestosteroneStatus({ totalT: null, shbg: 30 })).toBeNull()
    expect(calcTestosteroneStatus({ totalT: 18, shbg: null })).toBeNull()
  })

  it('accepts ng/dL total testosterone via unit conversion', () => {
    // 519 ng/dL × 0.0347 ≈ 18.0 nmol/L
    const a = calcTestosteroneStatus({ totalT: 18, shbg: 30, albumin: 43 })
    const b = calcTestosteroneStatus({ totalT: 519, totalUnit: 'ng/dL', shbg: 30, albumin: 43 })
    expect(b.totalT).toBeCloseTo(a.totalT, 0)
    expect(b.freeT).toBeCloseTo(a.freeT, 2)
  })
})
