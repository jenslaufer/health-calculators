import { describe, it, expect } from 'vitest'
import {
  calcHomaIr,
  calcHomaIrConventional,
  calcHomaIrSi,
  getRiskBand,
  mgdlToMmol,
  mmolToMgdl,
  pmolToMicroU,
  microUToPmol,
  bandColor,
  bandBg,
} from '../utils/homaIr.js'

describe('calcHomaIrConventional — formula', () => {
  it('calculates (insulin × glucose) / 405', () => {
    // 5 µU/mL × 90 mg/dL / 405 = 450/405 ≈ 1.111
    expect(calcHomaIrConventional(5, 90)).toBeCloseTo(1.111, 2)
  })

  it('returns 2.0 at the resistance boundary (10 × 81 / 405)', () => {
    expect(calcHomaIrConventional(10, 81)).toBeCloseTo(2.0, 5)
  })
})

describe('calcHomaIrSi — formula', () => {
  it('calculates (insulin × glucose mmol) / 22.5', () => {
    // 5 µU/mL × 5 mmol/L / 22.5 = 25/22.5 ≈ 1.111
    expect(calcHomaIrSi(5, 5)).toBeCloseTo(1.111, 2)
  })

  it('conventional and SI agree after glucose conversion (within 1%)', () => {
    // 90 mg/dL ≈ 4.9949 mmol/L (factor 18.0182 vs 405/22.5 = 18 exactly)
    const mmol = mgdlToMmol(90)
    expect(calcHomaIrSi(5, mmol)).toBeCloseTo(calcHomaIrConventional(5, 90), 1)
  })
})

describe('calcHomaIr — wrapper handles units', () => {
  it('defaults to mg/dL + µU/mL', () => {
    expect(calcHomaIr({ glucose: 90, insulin: 5 })).toBeCloseTo(1.111, 2)
  })

  it('handles mmol/L glucose input', () => {
    const mmol = mgdlToMmol(90)
    expect(calcHomaIr({ glucose: mmol, insulin: 5, glucoseUnit: 'mmol' })).toBeCloseTo(1.111, 2)
  })

  it('handles pmol/L insulin input', () => {
    // 5 µU/mL ≈ 34.725 pmol/L
    const pmol = microUToPmol(5)
    expect(calcHomaIr({ glucose: 90, insulin: pmol, insulinUnit: 'pmol' })).toBeCloseTo(1.111, 2)
  })

  it('handles BOTH units in SI: mmol/L + pmol/L', () => {
    const mmol = mgdlToMmol(90)
    const pmol = microUToPmol(5)
    expect(
      calcHomaIr({ glucose: mmol, insulin: pmol, glucoseUnit: 'mmol', insulinUnit: 'pmol' }),
    ).toBeCloseTo(1.111, 2)
  })

  it('returns null for missing inputs', () => {
    expect(calcHomaIr({ glucose: null, insulin: 5 })).toBeNull()
    expect(calcHomaIr({ glucose: 90, insulin: null })).toBeNull()
  })

  it('returns null for non-positive values', () => {
    expect(calcHomaIr({ glucose: 0, insulin: 5 })).toBeNull()
    expect(calcHomaIr({ glucose: 90, insulin: -1 })).toBeNull()
  })

  it('returns null for NaN values', () => {
    expect(calcHomaIr({ glucose: NaN, insulin: 5 })).toBeNull()
    expect(calcHomaIr({ glucose: 90, insulin: NaN })).toBeNull()
  })
})

describe('unit conversions', () => {
  it('converts mg/dL → mmol/L using factor ~18', () => {
    expect(mgdlToMmol(90)).toBeCloseTo(4.99, 1)
    expect(mgdlToMmol(180)).toBeCloseTo(9.99, 1)
  })

  it('converts mmol/L → mg/dL (roundtrip)', () => {
    expect(mmolToMgdl(mgdlToMmol(100))).toBeCloseTo(100, 5)
  })

  it('converts pmol/L → µU/mL using factor ~6.945', () => {
    expect(pmolToMicroU(69.45)).toBeCloseTo(10, 2)
  })

  it('converts µU/mL → pmol/L (roundtrip)', () => {
    expect(microUToPmol(pmolToMicroU(60))).toBeCloseTo(60, 5)
  })

  it('returns null for invalid conversion inputs', () => {
    expect(mgdlToMmol(null)).toBeNull()
    expect(mmolToMgdl(undefined)).toBeNull()
    expect(pmolToMicroU(NaN)).toBeNull()
    expect(microUToPmol(null)).toBeNull()
  })
})

describe('getRiskBand — clinical bands', () => {
  it('< 1.5 → normal', () => {
    expect(getRiskBand(0.5)).toBe('normal')
    expect(getRiskBand(1.0)).toBe('normal')
    expect(getRiskBand(1.49)).toBe('normal')
  })

  it('1.5 – 1.99 → mild insulin resistance', () => {
    expect(getRiskBand(1.5)).toBe('mild')
    expect(getRiskBand(1.75)).toBe('mild')
    expect(getRiskBand(1.99)).toBe('mild')
  })

  it('2.0 – 2.89 → insulin resistance', () => {
    expect(getRiskBand(2.0)).toBe('resistance')
    expect(getRiskBand(2.5)).toBe('resistance')
    expect(getRiskBand(2.89)).toBe('resistance')
  })

  it('≥ 2.9 → severe', () => {
    expect(getRiskBand(2.9)).toBe('severe')
    expect(getRiskBand(5)).toBe('severe')
    expect(getRiskBand(10)).toBe('severe')
  })

  it('returns null for invalid input', () => {
    expect(getRiskBand(null)).toBeNull()
    expect(getRiskBand(NaN)).toBeNull()
  })
})

describe('end-to-end clinical scenarios — all four bands', () => {
  it('healthy fasting (4 µU/mL × 85 mg/dL) → normal', () => {
    const v = calcHomaIr({ glucose: 85, insulin: 4 })
    expect(v).toBeCloseTo(0.84, 1)
    expect(getRiskBand(v)).toBe('normal')
  })

  it('borderline (8 µU/mL × 90 mg/dL) → mild', () => {
    const v = calcHomaIr({ glucose: 90, insulin: 8 })
    expect(v).toBeCloseTo(1.78, 1)
    expect(getRiskBand(v)).toBe('mild')
  })

  it('insulin resistance (12 µU/mL × 95 mg/dL) → resistance', () => {
    const v = calcHomaIr({ glucose: 95, insulin: 12 })
    expect(v).toBeCloseTo(2.81, 1)
    expect(getRiskBand(v)).toBe('resistance')
  })

  it('severe (20 µU/mL × 110 mg/dL) → severe', () => {
    const v = calcHomaIr({ glucose: 110, insulin: 20 })
    expect(v).toBeCloseTo(5.43, 1)
    expect(getRiskBand(v)).toBe('severe')
  })
})

describe('integer rounding behavior', () => {
  it('preserves precision for integer-valued inputs', () => {
    // 10 × 90 / 405 = 900/405 = 2.222...
    expect(calcHomaIrConventional(10, 90)).toBeCloseTo(2.222, 2)
  })

  it('rounding to one decimal stays within band boundaries', () => {
    const v = calcHomaIrConventional(7, 90) // 630/405 = 1.555...
    expect(Number(v.toFixed(1))).toBe(1.6)
    expect(getRiskBand(v)).toBe('mild')
  })

  it('result rounded to 2 decimals matches expected for 12 × 100', () => {
    const v = calcHomaIrConventional(12, 100) // 1200/405 = 2.962...
    expect(Number(v.toFixed(2))).toBe(2.96)
    expect(getRiskBand(v)).toBe('severe')
  })
})

describe('SI vs conventional equivalence (boundary crosscheck)', () => {
  it('mmol/L × µU/mL using divisor 22.5 matches mg/dL path', () => {
    // 10 µU/mL × 5 mmol/L / 22.5 = 50/22.5 ≈ 2.222
    expect(calcHomaIrSi(10, 5)).toBeCloseTo(2.222, 2)
    // 5 mmol/L → 90.09 mg/dL → 10 × 90.09 / 405 ≈ 2.224 (tiny rounding)
    const mg = mmolToMgdl(5)
    expect(calcHomaIrConventional(10, mg)).toBeCloseTo(2.224, 2)
  })

  it('pmol/L insulin path agrees with µU/mL path', () => {
    // 34.725 pmol/L ≈ 5 µU/mL  → with glucose 90 → 1.111
    expect(calcHomaIr({ glucose: 90, insulin: 34.725, insulinUnit: 'pmol' })).toBeCloseTo(1.111, 2)
  })
})

describe('style helpers', () => {
  it('returns distinct colors per band', () => {
    expect(bandColor('normal')).toMatch(/text-/)
    expect(bandColor('mild')).toMatch(/text-/)
    expect(bandColor('resistance')).toMatch(/text-/)
    expect(bandColor('severe')).toMatch(/text-/)
    expect(bandColor('normal')).not.toBe(bandColor('severe'))
  })

  it('returns distinct backgrounds per band', () => {
    expect(bandBg('normal')).toMatch(/bg-/)
    expect(bandBg('severe')).toMatch(/bg-/)
  })
})
