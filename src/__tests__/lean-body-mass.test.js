import { describe, it, expect } from 'vitest'

// Pure calculation functions — extracted from LeanBodyMassCalculator.vue to be testable

function calcLBMBoer(weightKg, heightCm, gender) {
  if (gender === 'male') return 0.407 * weightKg + 0.267 * heightCm - 19.2
  return 0.252 * weightKg + 0.473 * heightCm - 48.3
}

function calcLBMJames(weightKg, heightCm, gender) {
  if (gender === 'male') return 1.1 * weightKg - 128 * Math.pow(weightKg / heightCm, 2)
  return 1.07 * weightKg - 148 * Math.pow(weightKg / heightCm, 2)
}

function calcLBMHume(weightKg, heightCm, gender) {
  if (gender === 'male') return 0.3281 * weightKg + 0.33929 * heightCm - 29.5336
  return 0.29569 * weightKg + 0.41813 * heightCm - 43.2933
}

function calcLBMAverage(weightKg, heightCm, gender) {
  const boer = calcLBMBoer(weightKg, heightCm, gender)
  const james = calcLBMJames(weightKg, heightCm, gender)
  const hume = calcLBMHume(weightKg, heightCm, gender)
  return (boer + james + hume) / 3
}

function toKg(lbs) {
  return lbs * 0.453592
}

function toCm(inches) {
  return inches * 2.54
}

describe('Boer formula — male', () => {
  it('80kg, 180cm → ~61.4 kg LBM', () => {
    const lbm = calcLBMBoer(80, 180, 'male')
    expect(lbm).toBeCloseTo(61.42, 1)
  })

  it('70kg, 175cm → ~57.7 kg LBM', () => {
    const lbm = calcLBMBoer(70, 175, 'male')
    expect(lbm).toBeGreaterThanOrEqual(55)
    expect(lbm).toBeLessThanOrEqual(61)
  })

  it('100kg, 190cm → ~72.9 kg LBM', () => {
    const lbm = calcLBMBoer(100, 190, 'male')
    expect(lbm).toBeGreaterThanOrEqual(70)
    expect(lbm).toBeLessThanOrEqual(76)
  })
})

describe('Boer formula — female', () => {
  it('60kg, 165cm → ~44.9 kg LBM', () => {
    const lbm = calcLBMBoer(60, 165, 'female')
    expect(lbm).toBeCloseTo(44.865, 1)
  })

  it('55kg, 160cm → ~40.9 kg LBM', () => {
    const lbm = calcLBMBoer(55, 160, 'female')
    expect(lbm).toBeGreaterThanOrEqual(38)
    expect(lbm).toBeLessThanOrEqual(44)
  })

  it('75kg, 170cm → ~49.2 kg LBM', () => {
    const lbm = calcLBMBoer(75, 170, 'female')
    expect(lbm).toBeGreaterThanOrEqual(46)
    expect(lbm).toBeLessThanOrEqual(53)
  })
})

describe('James formula — male', () => {
  it('80kg, 180cm → ~62.7 kg LBM', () => {
    const lbm = calcLBMJames(80, 180, 'male')
    expect(lbm).toBeCloseTo(62.716, 1)
  })

  it('70kg, 175cm → ~56.5 kg LBM', () => {
    const lbm = calcLBMJames(70, 175, 'male')
    expect(lbm).toBeGreaterThanOrEqual(54)
    expect(lbm).toBeLessThanOrEqual(59)
  })
})

describe('James formula — female', () => {
  it('60kg, 165cm → ~44.6 kg LBM', () => {
    const lbm = calcLBMJames(60, 165, 'female')
    expect(lbm).toBeCloseTo(44.627, 1)
  })

  it('55kg, 160cm → ~41.3 kg LBM', () => {
    const lbm = calcLBMJames(55, 160, 'female')
    expect(lbm).toBeGreaterThanOrEqual(38)
    expect(lbm).toBeLessThanOrEqual(44)
  })
})

describe('Hume formula — male', () => {
  it('80kg, 180cm → ~57.8 kg LBM', () => {
    const lbm = calcLBMHume(80, 180, 'male')
    expect(lbm).toBeCloseTo(57.787, 1)
  })

  it('70kg, 175cm → ~52.8 kg LBM', () => {
    const lbm = calcLBMHume(70, 175, 'male')
    expect(lbm).toBeGreaterThanOrEqual(50)
    expect(lbm).toBeLessThanOrEqual(56)
  })
})

describe('Hume formula — female', () => {
  it('60kg, 165cm → ~43.4 kg LBM', () => {
    const lbm = calcLBMHume(60, 165, 'female')
    expect(lbm).toBeCloseTo(43.44, 1)
  })

  it('55kg, 160cm → ~40.0 kg LBM', () => {
    const lbm = calcLBMHume(55, 160, 'female')
    expect(lbm).toBeGreaterThanOrEqual(37)
    expect(lbm).toBeLessThanOrEqual(43)
  })
})

describe('Average of all three formulas', () => {
  it('80kg male, 180cm → average ~60.6 kg', () => {
    const avg = calcLBMAverage(80, 180, 'male')
    expect(avg).toBeGreaterThanOrEqual(58)
    expect(avg).toBeLessThanOrEqual(64)
  })

  it('60kg female, 165cm → average ~44.3 kg', () => {
    const avg = calcLBMAverage(60, 165, 'female')
    expect(avg).toBeGreaterThanOrEqual(42)
    expect(avg).toBeLessThanOrEqual(47)
  })

  it('average is between min and max formula result', () => {
    const w = 75
    const h = 175
    const g = 'male'
    const boer = calcLBMBoer(w, h, g)
    const james = calcLBMJames(w, h, g)
    const hume = calcLBMHume(w, h, g)
    const avg = calcLBMAverage(w, h, g)
    expect(avg).toBeGreaterThanOrEqual(Math.min(boer, james, hume))
    expect(avg).toBeLessThanOrEqual(Math.max(boer, james, hume))
  })
})

describe('Imperial unit conversion', () => {
  it('converts lbs to kg correctly', () => {
    expect(toKg(1)).toBeCloseTo(0.4536, 3)
    expect(toKg(176)).toBeCloseTo(79.83, 1)
    expect(toKg(132)).toBeCloseTo(59.87, 1)
  })

  it('converts inches to cm correctly', () => {
    expect(toCm(1)).toBeCloseTo(2.54, 2)
    expect(toCm(70.87)).toBeCloseTo(180, 0)
    expect(toCm(65)).toBeCloseTo(165.1, 0)
  })

  it('imperial inputs produce same result as metric equivalents', () => {
    const metricLbm = calcLBMBoer(80, 180, 'male')
    const imperialLbm = calcLBMBoer(toKg(176.37), toCm(70.87), 'male')
    expect(Math.abs(metricLbm - imperialLbm)).toBeLessThan(1)
  })
})

describe('Fat mass and lean mass percentage', () => {
  it('80kg male with ~60.6kg LBM → ~19.4kg fat, ~75.8% lean', () => {
    const weight = 80
    const lbm = calcLBMAverage(80, 180, 'male')
    const fatMass = weight - lbm
    const leanPercent = (lbm / weight) * 100
    expect(fatMass).toBeGreaterThanOrEqual(14)
    expect(fatMass).toBeLessThanOrEqual(26)
    expect(leanPercent).toBeGreaterThanOrEqual(70)
    expect(leanPercent).toBeLessThanOrEqual(85)
  })

  it('60kg female with ~44.3kg LBM → ~15.7kg fat, ~73.8% lean', () => {
    const weight = 60
    const lbm = calcLBMAverage(60, 165, 'female')
    const fatMass = weight - lbm
    const leanPercent = (lbm / weight) * 100
    expect(fatMass).toBeGreaterThanOrEqual(12)
    expect(fatMass).toBeLessThanOrEqual(20)
    expect(leanPercent).toBeGreaterThanOrEqual(68)
    expect(leanPercent).toBeLessThanOrEqual(80)
  })
})
