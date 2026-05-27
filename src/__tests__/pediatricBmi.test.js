import { describe, it, expect } from 'vitest'
import {
  calcBmi,
  convertWeightToKg,
  convertHeightToCm,
  calcBmiPercentile,
  getCategory,
  LMS_BOYS,
  LMS_GIRLS,
} from '../utils/pediatricBmi.js'

describe('calcBmi', () => {
  it('calculates BMI from kg and cm', () => {
    expect(calcBmi(30, 130)).toBeCloseTo(17.75, 1)
  })
  it('returns null for invalid inputs', () => {
    expect(calcBmi(0, 130)).toBeNull()
    expect(calcBmi(30, 0)).toBeNull()
    expect(calcBmi(null, 130)).toBeNull()
    expect(calcBmi(30, null)).toBeNull()
    expect(calcBmi(NaN, 130)).toBeNull()
  })
})

describe('unit conversion', () => {
  it('converts pounds to kg (imperial)', () => {
    expect(convertWeightToKg(100, 'imperial')).toBeCloseTo(45.36, 1)
  })
  it('converts inches to cm (imperial)', () => {
    expect(convertHeightToCm(50, 'imperial')).toBeCloseTo(127.0, 1)
  })
  it('returns same value for metric', () => {
    expect(convertWeightToKg(30, 'metric')).toBe(30)
    expect(convertHeightToCm(130, 'metric')).toBe(130)
  })
  it('returns null for invalid input', () => {
    expect(convertWeightToKg(0, 'metric')).toBeNull()
    expect(convertHeightToCm(-5, 'metric')).toBeNull()
    expect(convertWeightToKg(null, 'metric')).toBeNull()
  })
  it('end-to-end imperial flow yields same BMI as metric', () => {
    const wKg = convertWeightToKg(66, 'imperial')   // ≈ 29.94 kg
    const hCm = convertHeightToCm(51, 'imperial')   // ≈ 129.54 cm
    const bmiImperial = calcBmi(wKg, hCm)
    const bmiMetric = calcBmi(29.94, 129.54)
    expect(Math.abs(bmiImperial - bmiMetric)).toBeLessThan(0.05)
  })
})

describe('calcBmiPercentile - boundary ages', () => {
  it('handles boys at age 2 (lower boundary)', () => {
    const p = calcBmiPercentile(16.57, 2, 'male')
    expect(p).not.toBeNull()
    expect(p).toBeGreaterThan(40)
    expect(p).toBeLessThan(60)
  })
  it('handles girls at age 20 (upper boundary)', () => {
    const p = calcBmiPercentile(21.18, 20, 'female')
    expect(p).not.toBeNull()
    expect(p).toBeGreaterThan(40)
    expect(p).toBeLessThan(60)
  })
  it('handles boys at age 20 (upper boundary)', () => {
    const p = calcBmiPercentile(19.63, 20, 'male')
    expect(p).not.toBeNull()
    expect(p).toBeGreaterThan(40)
    expect(p).toBeLessThan(60)
  })
  it('handles girls at age 2 (lower boundary)', () => {
    const p = calcBmiPercentile(16.14, 2, 'female')
    expect(p).not.toBeNull()
    expect(p).toBeGreaterThan(40)
    expect(p).toBeLessThan(60)
  })
  it('returns null for age below 2', () => {
    expect(calcBmiPercentile(16, 1, 'male')).toBeNull()
  })
  it('returns null for age above 20', () => {
    expect(calcBmiPercentile(20, 21, 'male')).toBeNull()
  })
  it('returns null for invalid bmi', () => {
    expect(calcBmiPercentile(0, 10, 'male')).toBeNull()
    expect(calcBmiPercentile(null, 10, 'male')).toBeNull()
  })
})

describe('getCategory boundary edges', () => {
  it('classifies underweight strictly below 5th percentile', () => {
    expect(getCategory(3)).toBe('underweight')
    expect(getCategory(4.99)).toBe('underweight')
  })
  it('classifies healthy at exactly 5th percentile', () => {
    expect(getCategory(5)).toBe('healthy')
    expect(getCategory(50)).toBe('healthy')
    expect(getCategory(84.99)).toBe('healthy')
  })
  it('classifies overweight at 85th percentile', () => {
    expect(getCategory(85)).toBe('overweight')
    expect(getCategory(94.99)).toBe('overweight')
  })
  it('classifies obesity at 95th percentile and above', () => {
    expect(getCategory(95)).toBe('obesity')
    expect(getCategory(99)).toBe('obesity')
  })
  it('returns null for null/invalid input', () => {
    expect(getCategory(null)).toBeNull()
    expect(getCategory(undefined)).toBeNull()
    expect(getCategory(NaN)).toBeNull()
  })
})

describe('CDC LMS tables', () => {
  it('boys table covers 2–20 years', () => {
    expect(LMS_BOYS[0][0]).toBe(2)
    expect(LMS_BOYS[LMS_BOYS.length - 1][0]).toBe(20)
  })
  it('girls table covers 2–20 years', () => {
    expect(LMS_GIRLS[0][0]).toBe(2)
    expect(LMS_GIRLS[LMS_GIRLS.length - 1][0]).toBe(20)
  })
  it('LMS tables produce different percentiles for boys vs girls at age 10', () => {
    const boyPct = calcBmiPercentile(17, 10, 'male')
    const girlPct = calcBmiPercentile(17, 10, 'female')
    expect(boyPct).not.toBe(girlPct)
  })
})

describe('percentile-to-category integration', () => {
  it('produces obesity category for very high BMI', () => {
    const p = calcBmiPercentile(28, 10, 'male')
    expect(getCategory(p)).toBe('obesity')
  })
  it('produces underweight category for very low BMI', () => {
    const p = calcBmiPercentile(12, 10, 'male')
    expect(getCategory(p)).toBe('underweight')
  })
  it('produces healthy category for median BMI', () => {
    const p = calcBmiPercentile(16.03, 10, 'male')
    expect(getCategory(p)).toBe('healthy')
  })
})
