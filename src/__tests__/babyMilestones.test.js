import { describe, it, expect } from 'vitest'
import {
  BRACKETS,
  isValidAgeMonths,
  findBracket,
  ageFromBirthDate,
  getMilestones,
  getExpectedSize,
} from '../utils/babyMilestones.js'

// CDC "Learn the Signs. Act Early." milestone framework (revised 2022)
// Eight checkpoints between 0 and 24 months: 2, 4, 6, 9, 12, 15, 18, 24.

describe('BRACKETS', () => {
  it('exposes the 8 CDC checkpoints in ascending order', () => {
    expect(BRACKETS).toEqual([2, 4, 6, 9, 12, 15, 18, 24])
  })
})

describe('isValidAgeMonths', () => {
  it('accepts 0 (newborn)', () => {
    expect(isValidAgeMonths(0)).toBe(true)
  })

  it('accepts 24 (upper milestone bound)', () => {
    expect(isValidAgeMonths(24)).toBe(true)
  })

  it('accepts 36 (upper hard bound)', () => {
    expect(isValidAgeMonths(36)).toBe(true)
  })

  it('rejects negative', () => {
    expect(isValidAgeMonths(-1)).toBe(false)
  })

  it('rejects > 36', () => {
    expect(isValidAgeMonths(37)).toBe(false)
  })

  it('rejects non-numbers, NaN, Infinity', () => {
    expect(isValidAgeMonths(null)).toBe(false)
    expect(isValidAgeMonths('5')).toBe(false)
    expect(isValidAgeMonths(NaN)).toBe(false)
    expect(isValidAgeMonths(Infinity)).toBe(false)
  })
})

describe('findBracket', () => {
  it('age < 2 returns 2 (closest available)', () => {
    expect(findBracket(0)).toBe(2)
    expect(findBracket(1)).toBe(2)
  })

  it('age 2 returns 2 (boundary)', () => {
    expect(findBracket(2)).toBe(2)
  })

  it('age 3 returns 2 (below next bracket)', () => {
    expect(findBracket(3)).toBe(2)
  })

  it('age 4 returns 4 (boundary)', () => {
    expect(findBracket(4)).toBe(4)
  })

  it('age 8 returns 6 (between 6 and 9)', () => {
    expect(findBracket(8)).toBe(6)
  })

  it('age 12 returns 12 (boundary)', () => {
    expect(findBracket(12)).toBe(12)
  })

  it('age 17 returns 15 (between 15 and 18)', () => {
    expect(findBracket(17)).toBe(15)
  })

  it('age 24 returns 24 (final boundary)', () => {
    expect(findBracket(24)).toBe(24)
  })

  it('age 30 returns 24 (above last bracket clamps to last)', () => {
    expect(findBracket(30)).toBe(24)
  })

  it('returns null on invalid input', () => {
    expect(findBracket(-1)).toBe(null)
    expect(findBracket(null)).toBe(null)
    expect(findBracket('abc')).toBe(null)
  })
})

describe('ageFromBirthDate', () => {
  it('birth = today returns ~0 months', () => {
    const today = '2026-05-07'
    const r = ageFromBirthDate(today, today)
    expect(r).toBeCloseTo(0, 1)
  })

  it('birth 6 months ago returns ~6 months', () => {
    const r = ageFromBirthDate('2025-11-07', '2026-05-07')
    expect(r).toBeGreaterThan(5.8)
    expect(r).toBeLessThan(6.2)
  })

  it('birth 12 months ago returns ~12 months', () => {
    const r = ageFromBirthDate('2025-05-07', '2026-05-07')
    expect(r).toBeGreaterThan(11.8)
    expect(r).toBeLessThan(12.2)
  })

  it('returns null on missing birthDate', () => {
    expect(ageFromBirthDate(null)).toBe(null)
    expect(ageFromBirthDate('')).toBe(null)
  })

  it('returns null on invalid date string', () => {
    expect(ageFromBirthDate('not-a-date', '2026-05-07')).toBe(null)
  })

  it('returns null when birth is in the future', () => {
    expect(ageFromBirthDate('2026-12-01', '2026-05-07')).toBe(null)
  })
})

describe('getMilestones', () => {
  it('returns milestone object with all 4 domains and warnings for valid age', () => {
    const r = getMilestones(6)
    expect(r).not.toBe(null)
    expect(r.bracket).toBe(6)
    expect(Array.isArray(r.motor)).toBe(true)
    expect(Array.isArray(r.language)).toBe(true)
    expect(Array.isArray(r.social)).toBe(true)
    expect(Array.isArray(r.cognitive)).toBe(true)
    expect(Array.isArray(r.warnings)).toBe(true)
    expect(r.motor.length).toBeGreaterThan(0)
    expect(r.warnings.length).toBeGreaterThan(0)
  })

  it('uses correct bracket for age between checkpoints', () => {
    const r = getMilestones(8)
    expect(r.bracket).toBe(6)
  })

  it('returns 2-month milestones for newborn', () => {
    const r = getMilestones(0)
    expect(r.bracket).toBe(2)
    expect(r.motor).toContain('liftHeadProne')
  })

  it('returns 24-month milestones at upper boundary', () => {
    const r = getMilestones(24)
    expect(r.bracket).toBe(24)
    expect(r.language).toContain('twoWordPhrases')
  })

  it('returns null on invalid age', () => {
    expect(getMilestones(-1)).toBe(null)
    expect(getMilestones(null)).toBe(null)
  })

  it('every bracket has all 4 domains populated', () => {
    for (const b of BRACKETS) {
      const r = getMilestones(b)
      expect(r.motor.length, `${b}mo motor`).toBeGreaterThan(0)
      expect(r.language.length, `${b}mo language`).toBeGreaterThan(0)
      expect(r.social.length, `${b}mo social`).toBeGreaterThan(0)
      expect(r.cognitive.length, `${b}mo cognitive`).toBeGreaterThan(0)
      expect(r.warnings.length, `${b}mo warnings`).toBeGreaterThan(0)
    }
  })

  it('returned arrays are independent copies (not mutation-prone)', () => {
    const r1 = getMilestones(12)
    r1.motor.push('mutation')
    const r2 = getMilestones(12)
    expect(r2.motor).not.toContain('mutation')
  })
})

describe('getExpectedSize', () => {
  it('returns plausible newborn weight & length', () => {
    const r = getExpectedSize(0)
    expect(r.weightKg).toBeGreaterThan(2.5)
    expect(r.weightKg).toBeLessThan(4.5)
    expect(r.lengthCm).toBeGreaterThan(45)
    expect(r.lengthCm).toBeLessThan(55)
    expect(r.referenceAgeMonths).toBe(0)
  })

  it('returns plausible 12-month weight & length', () => {
    const r = getExpectedSize(12)
    expect(r.weightKg).toBeGreaterThan(8)
    expect(r.weightKg).toBeLessThan(11)
    expect(r.lengthCm).toBeGreaterThan(70)
    expect(r.lengthCm).toBeLessThan(80)
  })

  it('returns plausible 24-month weight & length', () => {
    const r = getExpectedSize(24)
    expect(r.weightKg).toBeGreaterThan(10)
    expect(r.weightKg).toBeLessThan(14)
    expect(r.lengthCm).toBeGreaterThan(80)
    expect(r.lengthCm).toBeLessThan(95)
  })

  it('snaps to nearest reference age', () => {
    const r = getExpectedSize(13)
    expect([12, 15]).toContain(r.referenceAgeMonths)
  })

  it('returns null on invalid input', () => {
    expect(getExpectedSize(-1)).toBe(null)
    expect(getExpectedSize(null)).toBe(null)
  })
})
