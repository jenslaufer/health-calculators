import { describe, it, expect } from 'vitest'
import {
  calcBMI,
  bmiPercentile,
  classifyPediatricBMI,
  evaluatePediatricBMI,
  MIN_AGE_MONTHS,
  MAX_AGE_MONTHS,
} from '../utils/pediatricBMI.js'

// Pediatric BMI percentile (2–20 years) per WHO BMI-for-age LMS.
// CDC weight-status categories:
//   < 5th         → underweight
//   5th – < 85th  → healthy
//   85th – < 95th → overweight
//   ≥ 95th        → obesity

describe('age range constants', () => {
  it('covers 2 to 20 years (24–240 months)', () => {
    expect(MIN_AGE_MONTHS).toBe(24)
    expect(MAX_AGE_MONTHS).toBe(240)
  })
})

describe('calcBMI', () => {
  it('20 kg, 100 cm → BMI 20', () => {
    expect(calcBMI(20, 100)).toBeCloseTo(20, 2)
  })

  it('30 kg, 130 cm → BMI ~17.75', () => {
    expect(calcBMI(30, 130)).toBeCloseTo(17.75, 1)
  })

  it('60 kg, 165 cm → BMI ~22.04', () => {
    expect(calcBMI(60, 165)).toBeCloseTo(22.04, 1)
  })

  it('returns null for zero or negative weight', () => {
    expect(calcBMI(0, 130)).toBeNull()
    expect(calcBMI(-10, 130)).toBeNull()
  })

  it('returns null for zero or negative height', () => {
    expect(calcBMI(30, 0)).toBeNull()
    expect(calcBMI(30, -100)).toBeNull()
  })

  it('returns null for non-finite inputs', () => {
    expect(calcBMI(null, 130)).toBeNull()
    expect(calcBMI(30, null)).toBeNull()
    expect(calcBMI(NaN, 130)).toBeNull()
  })
})

describe('bmiPercentile', () => {
  it('boy aged 60 months at BMI 15.085 → ~50th percentile (median)', () => {
    const p = bmiPercentile(60, 'male', 15.085)
    expect(p).toBeGreaterThan(45)
    expect(p).toBeLessThan(55)
  })

  it('girl aged 60 months at BMI 14.86 → ~50th percentile (median)', () => {
    const p = bmiPercentile(60, 'female', 14.8602)
    expect(p).toBeGreaterThan(45)
    expect(p).toBeLessThan(55)
  })

  it('boy aged 120 months at BMI 22 → high percentile (>90)', () => {
    const p = bmiPercentile(120, 'male', 22)
    expect(p).toBeGreaterThan(90)
  })

  it('girl aged 120 months at BMI 13 → low percentile (<10)', () => {
    const p = bmiPercentile(120, 'female', 13)
    expect(p).toBeLessThan(10)
  })

  it('returns null below MIN age', () => {
    expect(bmiPercentile(12, 'male', 16)).toBeNull()
  })

  it('returns null above MAX age', () => {
    expect(bmiPercentile(300, 'male', 22)).toBeNull()
  })

  it('returns null for invalid sex', () => {
    expect(bmiPercentile(60, 'other', 16)).toBeNull()
  })

  it('returns null for non-positive BMI', () => {
    expect(bmiPercentile(60, 'male', 0)).toBeNull()
    expect(bmiPercentile(60, 'male', -5)).toBeNull()
  })
})

describe('classifyPediatricBMI', () => {
  it('< 5 → underweight', () => {
    expect(classifyPediatricBMI(2)).toBe('underweight')
    expect(classifyPediatricBMI(4.99)).toBe('underweight')
  })

  it('5 to < 85 → healthy', () => {
    expect(classifyPediatricBMI(5)).toBe('healthy')
    expect(classifyPediatricBMI(50)).toBe('healthy')
    expect(classifyPediatricBMI(84.99)).toBe('healthy')
  })

  it('85 to < 95 → overweight', () => {
    expect(classifyPediatricBMI(85)).toBe('overweight')
    expect(classifyPediatricBMI(94.99)).toBe('overweight')
  })

  it('>= 95 → obesity', () => {
    expect(classifyPediatricBMI(95)).toBe('obesity')
    expect(classifyPediatricBMI(99)).toBe('obesity')
  })

  it('returns null for invalid input', () => {
    expect(classifyPediatricBMI(null)).toBeNull()
    expect(classifyPediatricBMI(-1)).toBeNull()
    expect(classifyPediatricBMI(101)).toBeNull()
    expect(classifyPediatricBMI('high')).toBeNull()
  })
})

describe('evaluatePediatricBMI', () => {
  it('boy, 8 yr (96 mo), 130 cm, 28 kg → healthy/overweight zone', () => {
    const r = evaluatePediatricBMI({
      ageMonths: 96, sex: 'male', heightCm: 130, weightKg: 28,
    })
    expect(r.bmi).toBeCloseTo(16.57, 1)
    expect(r.percentile).not.toBeNull()
    expect(['healthy', 'overweight']).toContain(r.category)
  })

  it('girl, 10 yr (120 mo), 140 cm, 50 kg → high BMI ~ obesity', () => {
    const r = evaluatePediatricBMI({
      ageMonths: 120, sex: 'female', heightCm: 140, weightKg: 50,
    })
    expect(r.bmi).toBeCloseTo(25.51, 1)
    expect(r.percentile).toBeGreaterThan(95)
    expect(r.category).toBe('obesity')
  })

  it('boy, 5 yr (60 mo), 110 cm, 14 kg → low BMI underweight', () => {
    const r = evaluatePediatricBMI({
      ageMonths: 60, sex: 'male', heightCm: 110, weightKg: 14,
    })
    expect(r.bmi).toBeCloseTo(11.57, 1)
    expect(r.percentile).toBeLessThan(5)
    expect(r.category).toBe('underweight')
  })

  it('returns nulls for missing inputs', () => {
    const r = evaluatePediatricBMI({ ageMonths: null, sex: 'male', heightCm: 120, weightKg: 25 })
    expect(r.bmi).toBeNull()
    expect(r.percentile).toBeNull()
    expect(r.category).toBeNull()
  })

  it('returns nulls when age out of range', () => {
    const r = evaluatePediatricBMI({ ageMonths: 12, sex: 'male', heightCm: 80, weightKg: 12 })
    expect(r.percentile).toBeNull()
    expect(r.category).toBeNull()
  })

  it('returns nulls for invalid sex', () => {
    const r = evaluatePediatricBMI({ ageMonths: 96, sex: 'unknown', heightCm: 130, weightKg: 28 })
    expect(r.percentile).toBeNull()
    expect(r.category).toBeNull()
  })

  it('handles undefined input gracefully', () => {
    const r = evaluatePediatricBMI()
    expect(r.bmi).toBeNull()
    expect(r.percentile).toBeNull()
    expect(r.category).toBeNull()
  })
})
