import { describe, it, expect } from 'vitest'
import {
  headCircumferencePercentile,
  headCircumferenceCategory,
  totalMonths,
  isAgeInRange,
  inchesToCm,
  cmToInches,
  HC_MIN_MONTHS,
  HC_MAX_MONTHS,
} from '../utils/headCircumference.js'

describe('totalMonths', () => {
  it('converts years + months', () => {
    expect(totalMonths(1, 6)).toBe(18)
  })

  it('handles 0 inputs', () => {
    expect(totalMonths(0, 0)).toBe(0)
  })

  it('handles null inputs', () => {
    expect(totalMonths(null, null)).toBe(0)
  })

  it('handles years only', () => {
    expect(totalMonths(2, 0)).toBe(24)
  })
})

describe('isAgeInRange', () => {
  it('accepts 0 months', () => {
    expect(isAgeInRange(0)).toBe(true)
  })

  it('accepts 36 months', () => {
    expect(isAgeInRange(36)).toBe(true)
  })

  it('rejects > 36 months', () => {
    expect(isAgeInRange(37)).toBe(false)
  })

  it('rejects negative months', () => {
    expect(isAgeInRange(-1)).toBe(false)
  })

  it('exports correct range constants', () => {
    expect(HC_MIN_MONTHS).toBe(0)
    expect(HC_MAX_MONTHS).toBe(36)
  })
})

describe('inchesToCm / cmToInches', () => {
  it('converts inches to cm', () => {
    expect(inchesToCm(18)).toBeCloseTo(45.72, 2)
  })

  it('converts cm to inches', () => {
    expect(cmToInches(45.72)).toBeCloseTo(18, 2)
  })

  it('returns null for invalid input', () => {
    expect(inchesToCm(0)).toBeNull()
    expect(inchesToCm(null)).toBeNull()
    expect(inchesToCm('')).toBeNull()
    expect(cmToInches(-5)).toBeNull()
  })
})

describe('headCircumferencePercentile', () => {
  it('boy at 0 months, 34.5cm → near 50th percentile (median 34.46cm)', () => {
    const p = headCircumferencePercentile({ sex: 'male', ageMonths: 0, headCm: 34.5 })
    expect(p).not.toBeNull()
    expect(p).toBeGreaterThan(40)
    expect(p).toBeLessThan(60)
  })

  it('girl at 12 months, 44.5cm → near 50th percentile (median 44.48cm)', () => {
    const p = headCircumferencePercentile({ sex: 'female', ageMonths: 12, headCm: 44.48 })
    expect(p).not.toBeNull()
    expect(p).toBeGreaterThan(40)
    expect(p).toBeLessThan(60)
  })

  it('boy at 6 months, well below median (40cm) → low percentile', () => {
    const p = headCircumferencePercentile({ sex: 'male', ageMonths: 6, headCm: 40 })
    expect(p).not.toBeNull()
    expect(p).toBeLessThan(15)
  })

  it('boy at 6 months, well above median (47cm) → high percentile', () => {
    const p = headCircumferencePercentile({ sex: 'male', ageMonths: 6, headCm: 47 })
    expect(p).not.toBeNull()
    expect(p).toBeGreaterThan(95)
  })

  it('returns null when age > 36 months', () => {
    expect(headCircumferencePercentile({ sex: 'male', ageMonths: 48, headCm: 50 })).toBeNull()
  })

  it('returns null when headCm is 0 or null', () => {
    expect(headCircumferencePercentile({ sex: 'male', ageMonths: 12, headCm: 0 })).toBeNull()
    expect(headCircumferencePercentile({ sex: 'male', ageMonths: 12, headCm: null })).toBeNull()
  })

  it('returns null for invalid sex', () => {
    expect(headCircumferencePercentile({ sex: 'other', ageMonths: 12, headCm: 45 })).toBeNull()
  })

  it('girl at 24 months, near upper-normal (~48cm) → high but ≤ 97', () => {
    const p = headCircumferencePercentile({ sex: 'female', ageMonths: 24, headCm: 48 })
    expect(p).not.toBeNull()
    expect(p).toBeGreaterThan(80)
    expect(p).toBeLessThan(98)
  })

  it('interpolates between table rows (boy at 27 months)', () => {
    const p = headCircumferencePercentile({ sex: 'male', ageMonths: 27, headCm: 49 })
    expect(p).not.toBeNull()
    expect(p).toBeGreaterThan(50)
    expect(p).toBeLessThan(99)
  })
})

describe('headCircumferenceCategory', () => {
  it('< 3 → veryLow', () => {
    expect(headCircumferenceCategory(2)).toBe('veryLow')
  })

  it('3–15 → low', () => {
    expect(headCircumferenceCategory(10)).toBe('low')
  })

  it('15–85 → normal', () => {
    expect(headCircumferenceCategory(50)).toBe('normal')
  })

  it('85–97 → high', () => {
    expect(headCircumferenceCategory(90)).toBe('high')
  })

  it('> 97 → veryHigh', () => {
    expect(headCircumferenceCategory(98)).toBe('veryHigh')
  })

  it('null in → null out', () => {
    expect(headCircumferenceCategory(null)).toBeNull()
  })
})
