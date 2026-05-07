import { describe, it, expect } from 'vitest'
import {
  calcCorrectedCalciumMgDl,
  calcCorrectedCalciumMmol,
  getInterpretationMgDl,
  getInterpretationMmol,
  isPlausibleMgDl,
  correctedCalcium,
  toConventional,
  fromConventional,
} from '../utils/correctedCalcium.js'

// ---- Conventional-unit formula (mg/dL, g/dL) ----

describe('calcCorrectedCalciumMgDl', () => {
  it('albumin at normal 4.0 → corrected = total (no shift)', () => {
    expect(calcCorrectedCalciumMgDl(9.0, 4.0)).toBeCloseTo(9.0, 5)
  })

  it('low albumin 2.0 raises corrected calcium by 1.6', () => {
    // 8.0 + 0.8 * (4 - 2) = 9.6
    expect(calcCorrectedCalciumMgDl(8.0, 2.0)).toBeCloseTo(9.6, 5)
  })

  it('hypoalbuminemia masks normal calcium: total 7.5, albumin 2.5 → 8.7', () => {
    expect(calcCorrectedCalciumMgDl(7.5, 2.5)).toBeCloseTo(8.7, 5)
  })

  it('high albumin 5.0 lowers corrected calcium', () => {
    expect(calcCorrectedCalciumMgDl(10.0, 5.0)).toBeCloseTo(9.2, 5)
  })

  it('severe hypoalbuminemia: total 6.5, albumin 1.5 → 8.5 (lower-normal boundary)', () => {
    expect(calcCorrectedCalciumMgDl(6.5, 1.5)).toBeCloseTo(8.5, 5)
  })
})

// ---- SI-unit formula (mmol/L, g/L) ----

describe('calcCorrectedCalciumMmol', () => {
  it('albumin at normal 40 → corrected = total', () => {
    expect(calcCorrectedCalciumMmol(2.30, 40)).toBeCloseTo(2.30, 5)
  })

  it('low albumin 20 g/L → corrected raises by 0.4 mmol/L', () => {
    // 2.0 + 0.02 * (40 - 20) = 2.4
    expect(calcCorrectedCalciumMmol(2.0, 20)).toBeCloseTo(2.4, 5)
  })

  it('hypoalbuminemia 25 g/L: total 1.9 → 2.2', () => {
    expect(calcCorrectedCalciumMmol(1.9, 25)).toBeCloseTo(2.2, 5)
  })

  it('high albumin 50 lowers corrected calcium', () => {
    expect(calcCorrectedCalciumMmol(2.5, 50)).toBeCloseTo(2.3, 5)
  })
})

// ---- Interpretation ----

describe('getInterpretationMgDl', () => {
  it('8.4 mg/dL → hypocalcemia', () => {
    expect(getInterpretationMgDl(8.4)).toBe('hypocalcemia')
  })

  it('8.5 mg/dL → normal (lower boundary)', () => {
    expect(getInterpretationMgDl(8.5)).toBe('normal')
  })

  it('9.5 mg/dL → normal', () => {
    expect(getInterpretationMgDl(9.5)).toBe('normal')
  })

  it('10.2 mg/dL → normal (upper boundary)', () => {
    expect(getInterpretationMgDl(10.2)).toBe('normal')
  })

  it('10.3 mg/dL → hypercalcemia', () => {
    expect(getInterpretationMgDl(10.3)).toBe('hypercalcemia')
  })

  it('12.0 mg/dL → hypercalcemia', () => {
    expect(getInterpretationMgDl(12.0)).toBe('hypercalcemia')
  })
})

describe('getInterpretationMmol', () => {
  it('2.10 mmol/L → hypocalcemia', () => {
    expect(getInterpretationMmol(2.10)).toBe('hypocalcemia')
  })

  it('2.12 mmol/L → normal (lower boundary)', () => {
    expect(getInterpretationMmol(2.12)).toBe('normal')
  })

  it('2.55 mmol/L → normal (upper boundary)', () => {
    expect(getInterpretationMmol(2.55)).toBe('normal')
  })

  it('2.60 mmol/L → hypercalcemia', () => {
    expect(getInterpretationMmol(2.60)).toBe('hypercalcemia')
  })
})

// ---- Plausibility ----

describe('isPlausibleMgDl', () => {
  it('total 9.0, albumin 4.0 → plausible', () => {
    expect(isPlausibleMgDl(9.0, 4.0)).toBe(true)
  })

  it('total 4.9 (too low) → not plausible', () => {
    expect(isPlausibleMgDl(4.9, 4.0)).toBe(false)
  })

  it('total 15.1 (too high) → not plausible', () => {
    expect(isPlausibleMgDl(15.1, 4.0)).toBe(false)
  })

  it('albumin 0.9 (too low) → not plausible', () => {
    expect(isPlausibleMgDl(9.0, 0.9)).toBe(false)
  })

  it('albumin 6.1 (too high) → not plausible', () => {
    expect(isPlausibleMgDl(9.0, 6.1)).toBe(false)
  })

  it('boundary total 5 → plausible', () => {
    expect(isPlausibleMgDl(5, 4)).toBe(true)
  })

  it('boundary total 15 → plausible', () => {
    expect(isPlausibleMgDl(15, 4)).toBe(true)
  })
})

// ---- Unit conversion ----

describe('toConventional / fromConventional', () => {
  it('SI 2.5 mmol/L ≈ 10.02 mg/dL', () => {
    const r = toConventional(2.5, 40, 'si')
    expect(r.totalCa).toBeCloseTo(10.02, 1)
    expect(r.albumin).toBeCloseTo(4.0, 5)
  })

  it('conventional pass-through is identity', () => {
    const r = toConventional(9.0, 4.0, 'conventional')
    expect(r.totalCa).toBe(9.0)
    expect(r.albumin).toBe(4.0)
  })

  it('fromConventional roundtrip in SI', () => {
    const mmol = fromConventional(10.02, 'si')
    expect(mmol).toBeCloseTo(2.5, 2)
  })
})

// ---- correctedCalcium one-shot ----

describe('correctedCalcium', () => {
  it('returns null on missing albumin', () => {
    expect(correctedCalcium({ totalCa: 9, albumin: null })).toBe(null)
  })

  it('returns null on missing total', () => {
    expect(correctedCalcium({ totalCa: undefined, albumin: 4 })).toBe(null)
  })

  it('returns null on zero albumin', () => {
    expect(correctedCalcium({ totalCa: 9, albumin: 0 })).toBe(null)
  })

  it('hypoalbuminemia conventional: total 8, albumin 2 → corrected 9.6, delta 1.6, normal', () => {
    const r = correctedCalcium({ totalCa: 8, albumin: 2, unit: 'conventional' })
    expect(r.corrected).toBeCloseTo(9.6, 5)
    expect(r.delta).toBeCloseTo(1.6, 5)
    expect(r.interpretation).toBe('normal')
    expect(r.unit).toBe('conventional')
  })

  it('hypocalcemia conventional: total 7, albumin 4 → corrected 7, hypocalcemia', () => {
    const r = correctedCalcium({ totalCa: 7, albumin: 4 })
    expect(r.corrected).toBeCloseTo(7, 5)
    expect(r.interpretation).toBe('hypocalcemia')
  })

  it('hypercalcemia conventional: total 11.5, albumin 4 → 11.5, hypercalcemia', () => {
    const r = correctedCalcium({ totalCa: 11.5, albumin: 4 })
    expect(r.corrected).toBeCloseTo(11.5, 5)
    expect(r.interpretation).toBe('hypercalcemia')
  })

  it('SI hypoalbuminemia: total 2.0, albumin 20 → corrected 2.4, normal', () => {
    const r = correctedCalcium({ totalCa: 2.0, albumin: 20, unit: 'si' })
    expect(r.corrected).toBeCloseTo(2.4, 5)
    expect(r.interpretation).toBe('normal')
    expect(r.unit).toBe('si')
  })

  it('SI hypercalcemia: total 2.7, albumin 40 → 2.7, hypercalcemia', () => {
    const r = correctedCalcium({ totalCa: 2.7, albumin: 40, unit: 'si' })
    expect(r.interpretation).toBe('hypercalcemia')
  })
})

// ---- Cross-unit consistency ----

describe('cross-unit consistency', () => {
  it('SI 2.0/20 ≈ conventional 8.016/2.0 ≈ same interpretation (normal)', () => {
    const conv = correctedCalcium({ totalCa: 8.016, albumin: 2.0 })
    const si = correctedCalcium({ totalCa: 2.0, albumin: 20, unit: 'si' })
    expect(conv.interpretation).toBe('normal')
    expect(si.interpretation).toBe('normal')
  })
})

// ---- Clinical scenarios ----

describe('clinical scenarios', () => {
  it('cirrhosis: total 8.0, albumin 2.5 → corrected 9.2 (normal range, masking)', () => {
    const r = correctedCalcium({ totalCa: 8.0, albumin: 2.5 })
    expect(r.corrected).toBeCloseTo(9.2, 5)
    expect(r.interpretation).toBe('normal')
  })

  it('primary hyperparathyroidism: total 11.0, albumin 4.2 → still hypercalcemia after correction', () => {
    const r = correctedCalcium({ totalCa: 11.0, albumin: 4.2 })
    // 11 + 0.8 * (4 - 4.2) = 10.84
    expect(r.corrected).toBeCloseTo(10.84, 5)
    expect(r.interpretation).toBe('hypercalcemia')
  })
})
