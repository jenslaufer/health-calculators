import { describe, it, expect } from 'vitest'
import {
  calcBmi,
  getBmiCategory,
  getRecommendedGain,
  lbsToKg,
  inchesToCm,
} from '../utils/pregnancyBMI.js'

describe('Pregnancy BMI calculation', () => {
  it('60 kg / 165 cm → ~22.04 (normal)', () => {
    expect(calcBmi(60, 165)).toBeCloseTo(22.04, 2)
  })

  it('50 kg / 170 cm → ~17.30 (underweight)', () => {
    expect(calcBmi(50, 170)).toBeCloseTo(17.30, 1)
  })

  it('80 kg / 170 cm → ~27.68 (overweight)', () => {
    expect(calcBmi(80, 170)).toBeCloseTo(27.68, 1)
  })

  it('100 kg / 170 cm → ~34.6 (obese)', () => {
    expect(calcBmi(100, 170)).toBeCloseTo(34.6, 1)
  })

  it('returns null for missing weight', () => {
    expect(calcBmi(null, 170)).toBeNull()
  })

  it('returns null for missing height', () => {
    expect(calcBmi(70, null)).toBeNull()
  })

  it('returns null for zero or negative input', () => {
    expect(calcBmi(0, 170)).toBeNull()
    expect(calcBmi(70, 0)).toBeNull()
    expect(calcBmi(-10, 170)).toBeNull()
  })
})

describe('Pregnancy BMI category (WHO / IOM 2009)', () => {
  it('< 18.5 → underweight', () => {
    expect(getBmiCategory(17)).toBe('underweight')
    expect(getBmiCategory(18.4)).toBe('underweight')
  })

  it('18.5–24.9 → normal', () => {
    expect(getBmiCategory(18.5)).toBe('normal')
    expect(getBmiCategory(22)).toBe('normal')
    expect(getBmiCategory(24.9)).toBe('normal')
  })

  it('25–29.9 → overweight', () => {
    expect(getBmiCategory(25)).toBe('overweight')
    expect(getBmiCategory(29.9)).toBe('overweight')
  })

  it('≥ 30 → obese', () => {
    expect(getBmiCategory(30)).toBe('obese')
    expect(getBmiCategory(40)).toBe('obese')
  })

  it('returns null for invalid input', () => {
    expect(getBmiCategory(null)).toBeNull()
    expect(getBmiCategory(0)).toBeNull()
    expect(getBmiCategory(-5)).toBeNull()
  })
})

describe('IOM 2009 recommended weight gain by category', () => {
  it('singleton underweight → 12.5–18 kg', () => {
    expect(getRecommendedGain('underweight')).toEqual({ min: 12.5, max: 18 })
  })

  it('singleton normal → 11.5–16 kg', () => {
    expect(getRecommendedGain('normal')).toEqual({ min: 11.5, max: 16 })
  })

  it('singleton overweight → 7–11.5 kg', () => {
    expect(getRecommendedGain('overweight')).toEqual({ min: 7, max: 11.5 })
  })

  it('singleton obese → 5–9 kg', () => {
    expect(getRecommendedGain('obese')).toEqual({ min: 5, max: 9 })
  })

  it('twins normal → 17–25 kg', () => {
    expect(getRecommendedGain('normal', true)).toEqual({ min: 17, max: 25 })
  })

  it('twins obese → 11–19 kg', () => {
    expect(getRecommendedGain('obese', true)).toEqual({ min: 11, max: 19 })
  })

  it('returns null for missing category', () => {
    expect(getRecommendedGain(null)).toBeNull()
  })
})

describe('Imperial unit conversion', () => {
  it('150 lbs → ~68.04 kg', () => {
    expect(lbsToKg(150)).toBeCloseTo(68.04, 1)
  })

  it('66 inches → 167.64 cm', () => {
    expect(inchesToCm(66)).toBeCloseTo(167.64, 2)
  })

  it('returns null for zero or negative input', () => {
    expect(lbsToKg(0)).toBeNull()
    expect(inchesToCm(-1)).toBeNull()
  })
})
