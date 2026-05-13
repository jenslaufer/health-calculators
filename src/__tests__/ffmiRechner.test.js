import { describe, it, expect } from 'vitest'
import {
  calcFFM,
  calcFFMI,
  calcNormalizedFFMI,
  classifyFFMI,
  calcFFMIResult,
} from '../utils/ffmiRechner.js'

// FFMI = Fettfreie-Masse-Index (Fat-Free Mass Index).
//   FFM (kg)  = weight × (1 - bodyFat% / 100)
//   FFMI      = FFM / heightM²
//   normFFMI  = FFMI + 6.1 × (1.80 - heightM)        (Kouri et al., 1995)
// Classification thresholds by sex (Kouri 1995, normalized FFMI), 5 buckets:
//   Male:   <18 belowAverage, 18–20 average, 20–25 aboveAverage, 25–28 top1, >28 unlikelyNatural
//   Female: <13 belowAverage, 13–15 average, 15–19 aboveAverage, 19–22 top1, >22 unlikelyNatural

describe('calcFFM (fat-free mass in kg)', () => {
  it('80 kg at 15% body fat → 68 kg', () => {
    expect(calcFFM(80, 15)).toBeCloseTo(68, 5)
  })
  it('60 kg at 25% body fat → 45 kg', () => {
    expect(calcFFM(60, 25)).toBeCloseTo(45, 5)
  })
  it('returns null for invalid inputs', () => {
    expect(calcFFM(null, 15)).toBeNull()
    expect(calcFFM(80, null)).toBeNull()
    expect(calcFFM(0, 15)).toBeNull()
    expect(calcFFM(80, -5)).toBeNull()
    expect(calcFFM(80, 100)).toBeNull()
  })
})

describe('calcFFMI', () => {
  it('80 kg, 180 cm, 15% body fat → 20.99', () => {
    // FFM = 68, height = 1.80 → 68 / 3.24 = 20.99
    expect(calcFFMI(80, 180, 15)).toBeCloseTo(20.99, 1)
  })
  it('60 kg, 165 cm, 25% body fat → 16.53', () => {
    // FFM = 45, h = 1.65 → 45 / 2.7225 = 16.53
    expect(calcFFMI(60, 165, 25)).toBeCloseTo(16.53, 1)
  })
  it('100 kg, 190 cm, 10% body fat → 24.93', () => {
    // FFM = 90, h = 1.90 → 90 / 3.61 = 24.93
    expect(calcFFMI(100, 190, 10)).toBeCloseTo(24.93, 1)
  })
  it('returns null for invalid inputs', () => {
    expect(calcFFMI(null, 180, 15)).toBeNull()
    expect(calcFFMI(80, null, 15)).toBeNull()
    expect(calcFFMI(80, 180, null)).toBeNull()
    expect(calcFFMI(80, 0, 15)).toBeNull()
  })
})

describe('calcNormalizedFFMI', () => {
  it('unchanged at exactly 1.80 m height', () => {
    // FFMI 20.99 at 180 cm → normalized = 20.99
    const ffmi = calcFFMI(80, 180, 15)
    const norm = calcNormalizedFFMI(ffmi, 180)
    expect(norm).toBeCloseTo(ffmi, 5)
  })
  it('adjusts upward for shorter person', () => {
    // 1.65 m: norm = ffmi + 6.1*(1.80 - 1.65) = ffmi + 0.915
    const ffmi = 18
    expect(calcNormalizedFFMI(ffmi, 165)).toBeCloseTo(18.915, 3)
  })
  it('adjusts downward for taller person', () => {
    // 1.90 m: norm = ffmi + 6.1*(1.80 - 1.90) = ffmi - 0.61
    const ffmi = 24
    expect(calcNormalizedFFMI(ffmi, 190)).toBeCloseTo(23.39, 3)
  })
  it('returns null for invalid', () => {
    expect(calcNormalizedFFMI(null, 180)).toBeNull()
    expect(calcNormalizedFFMI(20, null)).toBeNull()
    expect(calcNormalizedFFMI(20, 0)).toBeNull()
  })
})

describe('classifyFFMI — male thresholds', () => {
  it('17 → belowAverage', () => {
    expect(classifyFFMI(17, 'male')).toBe('belowAverage')
  })
  it('19 → average', () => {
    expect(classifyFFMI(19, 'male')).toBe('average')
  })
  it('21 → aboveAverage', () => {
    expect(classifyFFMI(21, 'male')).toBe('aboveAverage')
  })
  it('23 → aboveAverage', () => {
    expect(classifyFFMI(23, 'male')).toBe('aboveAverage')
  })
  it('26 → top1', () => {
    expect(classifyFFMI(26, 'male')).toBe('top1')
  })
  it('30 → unlikelyNatural', () => {
    expect(classifyFFMI(30, 'male')).toBe('unlikelyNatural')
  })
})

describe('classifyFFMI — female thresholds', () => {
  it('12 → belowAverage', () => {
    expect(classifyFFMI(12, 'female')).toBe('belowAverage')
  })
  it('14 → average', () => {
    expect(classifyFFMI(14, 'female')).toBe('average')
  })
  it('16 → aboveAverage', () => {
    expect(classifyFFMI(16, 'female')).toBe('aboveAverage')
  })
  it('18 → aboveAverage', () => {
    expect(classifyFFMI(18, 'female')).toBe('aboveAverage')
  })
  it('20 → top1', () => {
    expect(classifyFFMI(20, 'female')).toBe('top1')
  })
  it('24 → unlikelyNatural', () => {
    expect(classifyFFMI(24, 'female')).toBe('unlikelyNatural')
  })
  it('returns null for unknown sex', () => {
    expect(classifyFFMI(20, 'other')).toBeNull()
  })
})

describe('calcFFMIResult integration', () => {
  it('80 kg, 180 cm, 15% BF, male → average', () => {
    const r = calcFFMIResult({ weightKg: 80, heightCm: 180, bodyFatPct: 15, sex: 'male' })
    expect(r.ffm).toBeCloseTo(68, 1)
    expect(r.ffmi).toBeCloseTo(20.99, 1)
    expect(r.normalizedFFMI).toBeCloseTo(20.99, 1)
    // 20.99 falls in 20–25 (aboveAverage) bucket for male
    expect(r.category).toBe('aboveAverage')
  })
  it('returns null when sex missing', () => {
    expect(calcFFMIResult({ weightKg: 80, heightCm: 180, bodyFatPct: 15 })).toBeNull()
  })
  it('returns null when inputs missing', () => {
    expect(calcFFMIResult({ heightCm: 180, bodyFatPct: 15, sex: 'male' })).toBeNull()
  })
  it('classifies on normalized FFMI, not raw FFMI', () => {
    // Short person: raw FFMI 17, height 1.65 → norm 17.915 (still belowAverage for male)
    // Tall person same FFM:
    const tall = calcFFMIResult({ weightKg: 75, heightCm: 195, bodyFatPct: 15, sex: 'male' })
    // FFM = 63.75, h = 1.95 → ffmi = 16.77, norm = 16.77 + 6.1*(-0.15) = 15.85
    expect(tall.ffmi).toBeGreaterThan(tall.normalizedFFMI)
  })
})
