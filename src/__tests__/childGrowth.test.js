import { describe, it, expect } from 'vitest'
import {
  interpolateLMS,
  lmsZscore,
  normalCDF,
  calcPercentile,
  percentileCategory,
  BOYS_WEIGHT,
  GIRLS_WEIGHT,
  BOYS_HEIGHT,
  GIRLS_HEIGHT,
  BOYS_BMI,
  GIRLS_BMI,
  BOYS_HC,
  GIRLS_HC,
} from '../data/whoGrowth.js'

// ─── normalCDF ────────────────────────────────────────────────────────────────

describe('normalCDF', () => {
  it('returns 0.5 for z=0', () => {
    expect(normalCDF(0)).toBeCloseTo(0.5, 4)
  })

  it('returns ~0.841 for z=1', () => {
    expect(normalCDF(1)).toBeCloseTo(0.8413, 3)
  })

  it('returns ~0.159 for z=-1', () => {
    expect(normalCDF(-1)).toBeCloseTo(0.1587, 3)
  })

  it('returns ~0.977 for z=2', () => {
    expect(normalCDF(2)).toBeCloseTo(0.9772, 3)
  })

  it('returns ~0.023 for z=-2', () => {
    expect(normalCDF(-2)).toBeCloseTo(0.0228, 3)
  })

  it('returns ~0.999 for z=3', () => {
    expect(normalCDF(3)).toBeCloseTo(0.9987, 3)
  })
})

// ─── lmsZscore ────────────────────────────────────────────────────────────────

describe('lmsZscore', () => {
  it('returns 0 when x equals M', () => {
    expect(lmsZscore(10, 1, 10, 0.1)).toBeCloseTo(0, 6)
  })

  it('returns positive score when x > M', () => {
    expect(lmsZscore(12, 1, 10, 0.1)).toBeGreaterThan(0)
  })

  it('returns negative score when x < M', () => {
    expect(lmsZscore(8, 1, 10, 0.1)).toBeLessThan(0)
  })

  it('handles L ≈ 0 using log formula', () => {
    // When L is near zero, uses ln(x/M)/S
    const z = lmsZscore(10, 0, 10, 0.1)
    expect(z).toBeCloseTo(0, 6)
  })

  it('computes known z-score for L≠0', () => {
    // x=M gives z=0 always
    const z = lmsZscore(9.6479, 0.0749, 9.6479, 0.09736)
    expect(z).toBeCloseTo(0, 4)
  })
})

// ─── interpolateLMS ───────────────────────────────────────────────────────────

describe('interpolateLMS', () => {
  it('returns exact values at table endpoints', () => {
    const result = interpolateLMS(BOYS_WEIGHT, 0)
    expect(result).not.toBeNull()
    expect(result[1]).toBeCloseTo(3.3464, 3) // M at birth
  })

  it('returns exact values at a middle table point', () => {
    const result = interpolateLMS(BOYS_WEIGHT, 12)
    expect(result).not.toBeNull()
    expect(result[1]).toBeCloseTo(9.6479, 3)
  })

  it('interpolates between two adjacent monthly points', () => {
    const at6 = interpolateLMS(BOYS_WEIGHT, 6)
    const at7 = interpolateLMS(BOYS_WEIGHT, 7)
    const at6_5 = interpolateLMS(BOYS_WEIGHT, 6.5)
    expect(at6_5[1]).toBeCloseTo((at6[1] + at7[1]) / 2, 3)
  })

  it('returns null for age below table minimum', () => {
    expect(interpolateLMS(BOYS_WEIGHT, -1)).toBeNull()
  })

  it('returns null for age beyond table maximum', () => {
    expect(interpolateLMS(BOYS_WEIGHT, 200)).toBeNull()
  })

  it('handles last table entry', () => {
    const result = interpolateLMS(BOYS_WEIGHT, 120)
    expect(result).not.toBeNull()
    expect(result[1]).toBeCloseTo(23.9113, 3)
  })
})

// ─── calcPercentile ───────────────────────────────────────────────────────────

describe('calcPercentile — boys weight-for-age', () => {
  it('median boy at 12 months (~9.65 kg) → ~50th percentile', () => {
    const p = calcPercentile(BOYS_WEIGHT, 12, 9.6479)
    expect(p).toBeCloseTo(50, 1)
  })

  it('heavy boy at 12 months → above 50th', () => {
    const p = calcPercentile(BOYS_WEIGHT, 12, 11.5)
    expect(p).toBeGreaterThan(85)
  })

  it('light boy at 12 months → below 50th', () => {
    const p = calcPercentile(BOYS_WEIGHT, 12, 7.5)
    expect(p).toBeLessThan(15)
  })

  it('returns null for age outside table range', () => {
    expect(calcPercentile(BOYS_WEIGHT, 150, 20)).toBeNull()
  })

  it('returns null for zero or negative value', () => {
    expect(calcPercentile(BOYS_WEIGHT, 12, 0)).toBeNull()
    expect(calcPercentile(BOYS_WEIGHT, 12, -1)).toBeNull()
  })

  it('result is clamped to (0.1, 99.9)', () => {
    const p = calcPercentile(BOYS_WEIGHT, 12, 30)
    expect(p).toBeLessThanOrEqual(99.9)
    const q = calcPercentile(BOYS_WEIGHT, 12, 1)
    expect(q).toBeGreaterThanOrEqual(0.1)
  })
})

describe('calcPercentile — girls height-for-age', () => {
  it('median girl at 24 months (~86.4 cm) → ~50th percentile', () => {
    const p = calcPercentile(GIRLS_HEIGHT, 24, 86.4153)
    expect(p).toBeCloseTo(50, 1)
  })

  it('tall girl at 60 months → above 50th', () => {
    const p = calcPercentile(GIRLS_HEIGHT, 60, 115)
    expect(p).toBeGreaterThan(85)
  })
})

describe('calcPercentile — boys BMI-for-age', () => {
  it('median BMI at 24 months (~16.4) → ~50th percentile', () => {
    const p = calcPercentile(BOYS_BMI, 24, 16.392)
    expect(p).toBeCloseTo(50, 1)
  })

  it('returns null for age below 24 months', () => {
    expect(calcPercentile(BOYS_BMI, 20, 16)).toBeNull()
  })
})

describe('calcPercentile — boys head circumference', () => {
  it('median head at 12 months (~45.9 cm) → ~50th percentile', () => {
    const p = calcPercentile(BOYS_HC, 12, 45.8921)
    expect(p).toBeCloseTo(50, 1)
  })

  it('returns null for age > 36 months (outside table)', () => {
    expect(calcPercentile(BOYS_HC, 40, 49)).toBeNull()
  })
})

// ─── percentileCategory ───────────────────────────────────────────────────────

describe('percentileCategory', () => {
  it('< 3 → veryLow', () => {
    expect(percentileCategory(2)).toBe('veryLow')
    expect(percentileCategory(0.5)).toBe('veryLow')
  })

  it('3–14.9 → low', () => {
    expect(percentileCategory(3)).toBe('low')
    expect(percentileCategory(14.9)).toBe('low')
  })

  it('15–85 → normal', () => {
    expect(percentileCategory(15)).toBe('normal')
    expect(percentileCategory(50)).toBe('normal')
    expect(percentileCategory(85)).toBe('normal')
  })

  it('85.1–97 → high', () => {
    expect(percentileCategory(85.1)).toBe('high')
    expect(percentileCategory(97)).toBe('high')
  })

  it('> 97 → veryHigh', () => {
    expect(percentileCategory(97.1)).toBe('veryHigh')
    expect(percentileCategory(99)).toBe('veryHigh')
  })

  it('null input → null', () => {
    expect(percentileCategory(null)).toBeNull()
    expect(percentileCategory(undefined)).toBeNull()
  })
})

// ─── Cross-sex consistency ────────────────────────────────────────────────────

describe('boys vs girls at same age and measurement', () => {
  it('boys weight-for-age > girls weight-for-age at same weight (boys heavier median)', () => {
    // Boys median at 12m is ~9.65, girls ~9.29
    // At weight=9.5, boys percentile < girls percentile (9.5 is closer to boys median)
    const boyP = calcPercentile(BOYS_WEIGHT, 12, 9.5)
    const girlP = calcPercentile(GIRLS_WEIGHT, 12, 9.5)
    // Boys median (9.6479) > girls median (9.2893), so 9.5 kg is below boys median and above girls median
    expect(boyP).toBeLessThan(50)
    expect(girlP).toBeGreaterThan(50)
  })
})
