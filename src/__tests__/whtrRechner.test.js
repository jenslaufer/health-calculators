import { describe, it, expect } from 'vitest'
import { calcWhtr, getWhtrRiskZone } from '../utils/whtrRechner.js'

describe('WHtR formula (waist / height)', () => {
  it('Taille 85 / Größe 175 ≈ 0.486', () => {
    expect(calcWhtr(85, 175)).toBeCloseTo(0.486, 3)
  })

  it('Taille 70 / Größe 165 ≈ 0.424', () => {
    expect(calcWhtr(70, 165)).toBeCloseTo(0.424, 3)
  })

  it('Taille 100 / Größe 180 ≈ 0.556', () => {
    expect(calcWhtr(100, 180)).toBeCloseTo(0.556, 3)
  })

  it('returns null for missing waist', () => {
    expect(calcWhtr(null, 175)).toBeNull()
  })

  it('returns null for missing height', () => {
    expect(calcWhtr(85, null)).toBeNull()
  })

  it('returns null for zero height (no division by zero)', () => {
    expect(calcWhtr(85, 0)).toBeNull()
  })

  it('returns null for negative inputs', () => {
    expect(calcWhtr(-85, 175)).toBeNull()
    expect(calcWhtr(85, -175)).toBeNull()
  })
})

describe('WHtR risk zones (Ashwell 2012, age-bracketed)', () => {
  describe('adults under 40', () => {
    it('< 0.40 → underweight (slim)', () => {
      expect(getWhtrRiskZone(0.39, 30)).toBe('slim')
    })

    it('0.40–0.49 → low (healthy)', () => {
      expect(getWhtrRiskZone(0.45, 30)).toBe('low')
    })

    it('0.50–0.54 → moderate (consider action)', () => {
      expect(getWhtrRiskZone(0.52, 30)).toBe('moderate')
    })

    it('0.55–0.59 → increased', () => {
      expect(getWhtrRiskZone(0.57, 30)).toBe('increased')
    })

    it('≥ 0.60 → high', () => {
      expect(getWhtrRiskZone(0.65, 30)).toBe('high')
    })
  })

  describe('adults 40–50', () => {
    // Ashwell adds +0.01 per decade above 40 to the boundary 0.50
    it('0.50 at age 45 → low (boundary shifts up by 0.005)', () => {
      expect(getWhtrRiskZone(0.50, 45)).toBe('low')
    })

    it('0.55 at age 45 → moderate', () => {
      expect(getWhtrRiskZone(0.55, 45)).toBe('moderate')
    })

    it('0.60 at age 45 → increased', () => {
      expect(getWhtrRiskZone(0.60, 45)).toBe('increased')
    })
  })

  describe('adults over 50', () => {
    it('0.54 at age 60 → low (boundary shifts up by 0.05)', () => {
      expect(getWhtrRiskZone(0.54, 60)).toBe('low')
    })

    it('0.58 at age 60 → moderate', () => {
      expect(getWhtrRiskZone(0.58, 60)).toBe('moderate')
    })

    it('0.66 at age 60 → high', () => {
      expect(getWhtrRiskZone(0.66, 60)).toBe('high')
    })
  })

  it('returns null for missing inputs', () => {
    expect(getWhtrRiskZone(null, 30)).toBeNull()
    expect(getWhtrRiskZone(0.5, null)).toBeNull()
  })
})
