import { describe, it, expect } from 'vitest'
import { calcPearlIndex, classifyPearlIndex, referenceMethods } from '../utils/pearlIndexRechner.js'

describe('calcPearlIndex', () => {
  it('1 pregnancy / 100 women / 12 months = 1.0', () => {
    expect(calcPearlIndex(1, 100, 12)).toBeCloseTo(1.0, 5)
  })

  it('0 pregnancies → 0', () => {
    expect(calcPearlIndex(0, 100, 12)).toBe(0)
  })

  it('3 pregnancies / 50 women / 24 months = 3.0', () => {
    // (3 × 1200) / (50 × 24) = 3600 / 1200 = 3
    expect(calcPearlIndex(3, 50, 24)).toBeCloseTo(3.0, 5)
  })

  it('2 pregnancies / 200 women / 6 months = 2.0', () => {
    // (2 × 1200) / (200 × 6) = 2400 / 1200 = 2
    expect(calcPearlIndex(2, 200, 6)).toBeCloseTo(2.0, 5)
  })

  it('matches Pille typical PI: 9 pregnancies / 100 women / 12 months = 9', () => {
    expect(calcPearlIndex(9, 100, 12)).toBeCloseTo(9, 5)
  })

  it('returns null for invalid women count', () => {
    expect(calcPearlIndex(1, 0, 12)).toBeNull()
    expect(calcPearlIndex(1, -10, 12)).toBeNull()
  })

  it('returns null for invalid months', () => {
    expect(calcPearlIndex(1, 100, 0)).toBeNull()
    expect(calcPearlIndex(1, 100, -3)).toBeNull()
  })

  it('returns null for negative pregnancies', () => {
    expect(calcPearlIndex(-1, 100, 12)).toBeNull()
  })

  it('returns null for null inputs', () => {
    expect(calcPearlIndex(null, 100, 12)).toBeNull()
    expect(calcPearlIndex(1, null, 12)).toBeNull()
    expect(calcPearlIndex(1, 100, null)).toBeNull()
  })

  it('returns null for NaN', () => {
    expect(calcPearlIndex(NaN, 100, 12)).toBeNull()
  })
})

describe('classifyPearlIndex', () => {
  it('PI < 1 → verySafe', () => {
    expect(classifyPearlIndex(0.1)).toBe('verySafe')
    expect(classifyPearlIndex(0.9)).toBe('verySafe')
  })

  it('1 ≤ PI < 5 → safe', () => {
    expect(classifyPearlIndex(1)).toBe('safe')
    expect(classifyPearlIndex(4.9)).toBe('safe')
  })

  it('5 ≤ PI < 10 → moderate', () => {
    expect(classifyPearlIndex(5)).toBe('moderate')
    expect(classifyPearlIndex(9)).toBe('moderate')
  })

  it('10 ≤ PI < 25 → lowSafety', () => {
    expect(classifyPearlIndex(10)).toBe('lowSafety')
    expect(classifyPearlIndex(24)).toBe('lowSafety')
  })

  it('PI ≥ 25 → unsafe', () => {
    expect(classifyPearlIndex(25)).toBe('unsafe')
    expect(classifyPearlIndex(85)).toBe('unsafe')
  })

  it('returns null for invalid input', () => {
    expect(classifyPearlIndex(null)).toBeNull()
    expect(classifyPearlIndex(NaN)).toBeNull()
  })
})

describe('referenceMethods', () => {
  it('contains key contraceptive methods', () => {
    const keys = referenceMethods.map(m => m.key)
    expect(keys).toContain('pillCombined')
    expect(keys).toContain('condomMale')
    expect(keys).toContain('iudCopper')
    expect(keys).toContain('iudHormonal')
    expect(keys).toContain('diaphragm')
    expect(keys).toContain('nfpSymptothermal')
  })

  it('every entry has perfect and typical values', () => {
    for (const m of referenceMethods) {
      expect(typeof m.perfect).toBe('number')
      expect(typeof m.typical).toBe('number')
      expect(m.typical).toBeGreaterThanOrEqual(m.perfect)
    }
  })
})
