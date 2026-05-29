import { describe, it, expect } from 'vitest'
import {
  calcLdl,
  calcLdlMgdl,
  calcLdlMmol,
  isFriedewaldInvalid,
  getAtpBand,
  ldlToMgdl,
  roundLdl,
  bandColor,
  bandBg,
} from '../utils/ldlFriedewald.js'

describe('Friedewald formula — mg/dL', () => {
  it('200 − 50 − 150/5 = 120', () => {
    expect(calcLdlMgdl(200, 50, 150)).toBe(120)
  })

  it('integer rounding via roundLdl: 200 − 45 − 170/5 = 121 → 121', () => {
    const ldl = calcLdlMgdl(200, 45, 170)
    expect(roundLdl(ldl)).toBe(121)
  })

  it('rounds non-integer LDL to nearest integer (180 − 40 − 175/5 = 105)', () => {
    expect(roundLdl(calcLdlMgdl(180, 40, 175))).toBe(105)
  })

  it('returns null for missing inputs', () => {
    expect(calcLdlMgdl(null, 50, 150)).toBeNull()
    expect(calcLdlMgdl(200, null, 150)).toBeNull()
    expect(calcLdlMgdl(200, 50, null)).toBeNull()
  })
})

describe('Friedewald formula — mmol/L', () => {
  it('5.17 − 1.30 − 1.70/2.2 ≈ 3.10', () => {
    // 5.17 − 1.30 − 0.7727… = 3.0972…
    expect(calcLdlMmol(5.17, 1.30, 1.70)).toBeCloseTo(3.097, 2)
  })

  it('wrapper picks mmol path on unit=mmol', () => {
    const ldl = calcLdl({ total: 5.17, hdl: 1.30, trig: 1.70, unit: 'mmol' })
    expect(ldl).toBeCloseTo(3.097, 2)
  })

  it('wrapper picks mg path on default unit', () => {
    expect(calcLdl({ total: 200, hdl: 50, trig: 150 })).toBe(120)
  })
})

describe('Friedewald validity — TG threshold', () => {
  it('TG ≥ 400 mg/dL → invalid', () => {
    expect(isFriedewaldInvalid(400, 'mg')).toBe(true)
    expect(isFriedewaldInvalid(450, 'mg')).toBe(true)
  })

  it('TG < 400 mg/dL → valid', () => {
    expect(isFriedewaldInvalid(399, 'mg')).toBe(false)
    expect(isFriedewaldInvalid(150, 'mg')).toBe(false)
  })

  it('TG ≥ 4.5 mmol/L → invalid', () => {
    expect(isFriedewaldInvalid(4.5, 'mmol')).toBe(true)
    expect(isFriedewaldInvalid(5.0, 'mmol')).toBe(true)
  })

  it('TG < 4.5 mmol/L → valid', () => {
    expect(isFriedewaldInvalid(4.49, 'mmol')).toBe(false)
    expect(isFriedewaldInvalid(1.7, 'mmol')).toBe(false)
  })

  it('null/undefined trig → not invalid (no warning)', () => {
    expect(isFriedewaldInvalid(null, 'mg')).toBe(false)
  })
})

describe('ATP III bands — all five categories', () => {
  it('< 100 mg/dL → optimal', () => {
    expect(getAtpBand(99)).toBe('optimal')
    expect(getAtpBand(50)).toBe('optimal')
  })

  it('100 – 129 mg/dL → near optimal', () => {
    expect(getAtpBand(100)).toBe('nearOptimal')
    expect(getAtpBand(115)).toBe('nearOptimal')
    expect(getAtpBand(129)).toBe('nearOptimal')
  })

  it('130 – 159 mg/dL → borderline high', () => {
    expect(getAtpBand(130)).toBe('borderline')
    expect(getAtpBand(150)).toBe('borderline')
    expect(getAtpBand(159)).toBe('borderline')
  })

  it('160 – 189 mg/dL → high', () => {
    expect(getAtpBand(160)).toBe('high')
    expect(getAtpBand(175)).toBe('high')
    expect(getAtpBand(189)).toBe('high')
  })

  it('≥ 190 mg/dL → very high', () => {
    expect(getAtpBand(190)).toBe('veryHigh')
    expect(getAtpBand(250)).toBe('veryHigh')
  })

  it('returns null for invalid input', () => {
    expect(getAtpBand(null)).toBeNull()
    expect(getAtpBand(NaN)).toBeNull()
  })
})

describe('mmol/L LDL → mg/dL conversion (for ATP banding)', () => {
  it('converts 3.10 mmol/L ≈ 120 mg/dL', () => {
    expect(ldlToMgdl(3.10, 'mmol')).toBeCloseTo(119.88, 1)
  })

  it('passes through mg/dL value unchanged', () => {
    expect(ldlToMgdl(120, 'mg')).toBe(120)
  })

  it('returns null for missing input', () => {
    expect(ldlToMgdl(null, 'mg')).toBeNull()
  })
})

describe('end-to-end clinical scenarios', () => {
  it('mg/dL: Total=180 HDL=50 TG=100 → LDL=110 (near optimal)', () => {
    const ldl = calcLdl({ total: 180, hdl: 50, trig: 100 })
    expect(ldl).toBe(110)
    expect(getAtpBand(ldlToMgdl(ldl, 'mg'))).toBe('nearOptimal')
  })

  it('mg/dL: Total=240 HDL=40 TG=150 → LDL=170 (high)', () => {
    const ldl = calcLdl({ total: 240, hdl: 40, trig: 150 })
    expect(ldl).toBe(170)
    expect(getAtpBand(ldl)).toBe('high')
  })

  it('mmol/L scenario: Total=6.20 HDL=1.04 TG=1.70 → LDL ≈ 4.39 mmol/L ≈ 170 mg/dL → high', () => {
    const ldl = calcLdl({ total: 6.20, hdl: 1.04, trig: 1.70, unit: 'mmol' })
    expect(ldl).toBeCloseTo(4.387, 2)
    expect(getAtpBand(ldlToMgdl(ldl, 'mmol'))).toBe('high')
  })

  it('TG = 400 mg/dL triggers invalid → UI should warn (formula still computes)', () => {
    expect(isFriedewaldInvalid(400, 'mg')).toBe(true)
    // Formula remains mathematically defined, but UI should display warning.
    expect(calcLdl({ total: 250, hdl: 40, trig: 400 })).toBe(130)
  })
})

describe('style helpers', () => {
  it('returns distinct colors per band', () => {
    expect(bandColor('optimal')).toMatch(/text-/)
    expect(bandColor('veryHigh')).toMatch(/text-/)
    expect(bandColor('optimal')).not.toBe(bandColor('veryHigh'))
  })

  it('returns distinct backgrounds per band', () => {
    expect(bandBg('optimal')).toMatch(/bg-/)
    expect(bandBg('veryHigh')).toMatch(/bg-/)
  })
})
