import { describe, it, expect } from 'vitest'

// Mirror the calculation logic from AnionGapCalculator.vue

function calcAg(na, cl, hco3) {
  return na - (cl + hco3)
}

function calcCorrectedAg(ag, albumin) {
  return ag + 2.5 * (4.0 - albumin)
}

function getInterpretation(ag) {
  if (ag < 8) return 'low'
  if (ag <= 12) return 'normal'
  if (ag <= 20) return 'mild'
  return 'high'
}

function isPlausible(na, cl, hco3) {
  if (na < 120 || na > 160) return false
  if (cl < 80 || cl > 120) return false
  if (hco3 < 5 || hco3 > 40) return false
  return true
}

// ---- Basic AG calculation ----

describe('calcAg', () => {
  it('140 - (102 + 24) = 14', () => {
    expect(calcAg(140, 102, 24)).toBe(14)
  })

  it('138 - (100 + 28) = 10 (normal)', () => {
    expect(calcAg(138, 100, 28)).toBe(10)
  })

  it('145 - (105 + 15) = 25 (high)', () => {
    expect(calcAg(145, 105, 15)).toBe(25)
  })

  it('130 - (115 + 20) = -5 (very low, edge case)', () => {
    expect(calcAg(130, 115, 20)).toBe(-5)
  })

  it('Na 140, Cl 100, HCO3 32 → AG 8 (lower boundary of normal)', () => {
    expect(calcAg(140, 100, 32)).toBe(8)
  })

  it('Na 140, Cl 100, HCO3 28 → AG 12 (upper boundary of normal)', () => {
    expect(calcAg(140, 100, 28)).toBe(12)
  })

  it('Na 140, Cl 100, HCO3 27 → AG 13 (lower boundary of mild)', () => {
    expect(calcAg(140, 100, 27)).toBe(13)
  })

  it('Na 140, Cl 100, HCO3 19 → AG 21 (lower boundary of high)', () => {
    expect(calcAg(140, 100, 19)).toBe(21)
  })
})

// ---- Albumin correction ----

describe('calcCorrectedAg', () => {
  it('AG 10, albumin 4.0 → corrected 10 (no change)', () => {
    expect(calcCorrectedAg(10, 4.0)).toBeCloseTo(10, 5)
  })

  it('AG 10, albumin 2.0 → corrected 15', () => {
    expect(calcCorrectedAg(10, 2.0)).toBeCloseTo(15, 5)
  })

  it('AG 8, albumin 2.0 → corrected 13', () => {
    expect(calcCorrectedAg(8, 2.0)).toBeCloseTo(13, 5)
  })

  it('AG 12, albumin 3.0 → corrected 14.5', () => {
    expect(calcCorrectedAg(12, 3.0)).toBeCloseTo(14.5, 5)
  })

  it('AG 20, albumin 1.0 → corrected 27.5 (high, severe hypoalbuminemia)', () => {
    expect(calcCorrectedAg(20, 1.0)).toBeCloseTo(27.5, 5)
  })

  it('AG 10, albumin 5.0 → corrected 7.5 (albumin above normal)', () => {
    expect(calcCorrectedAg(10, 5.0)).toBeCloseTo(7.5, 5)
  })
})

// ---- Interpretation ----

describe('getInterpretation', () => {
  it('AG 5 → low', () => {
    expect(getInterpretation(5)).toBe('low')
  })

  it('AG 7 → low (upper boundary)', () => {
    expect(getInterpretation(7)).toBe('low')
  })

  it('AG 7.9 → low', () => {
    expect(getInterpretation(7.9)).toBe('low')
  })

  it('AG 8 → normal (lower boundary)', () => {
    expect(getInterpretation(8)).toBe('normal')
  })

  it('AG 10 → normal', () => {
    expect(getInterpretation(10)).toBe('normal')
  })

  it('AG 12 → normal (upper boundary)', () => {
    expect(getInterpretation(12)).toBe('normal')
  })

  it('AG 13 → mild (lower boundary)', () => {
    expect(getInterpretation(13)).toBe('mild')
  })

  it('AG 16 → mild', () => {
    expect(getInterpretation(16)).toBe('mild')
  })

  it('AG 20 → mild (upper boundary)', () => {
    expect(getInterpretation(20)).toBe('mild')
  })

  it('AG 21 → high (lower boundary)', () => {
    expect(getInterpretation(21)).toBe('high')
  })

  it('AG 30 → high', () => {
    expect(getInterpretation(30)).toBe('high')
  })
})

// ---- Plausibility checks ----

describe('isPlausible', () => {
  it('Na 140, Cl 102, HCO3 24 → plausible', () => {
    expect(isPlausible(140, 102, 24)).toBe(true)
  })

  it('Na 119 → not plausible (Na too low)', () => {
    expect(isPlausible(119, 102, 24)).toBe(false)
  })

  it('Na 161 → not plausible (Na too high)', () => {
    expect(isPlausible(161, 102, 24)).toBe(false)
  })

  it('Na 120 → plausible (lower boundary)', () => {
    expect(isPlausible(120, 102, 24)).toBe(true)
  })

  it('Na 160 → plausible (upper boundary)', () => {
    expect(isPlausible(160, 102, 24)).toBe(true)
  })

  it('Cl 79 → not plausible (Cl too low)', () => {
    expect(isPlausible(140, 79, 24)).toBe(false)
  })

  it('Cl 121 → not plausible (Cl too high)', () => {
    expect(isPlausible(140, 121, 24)).toBe(false)
  })

  it('HCO3 4 → not plausible (HCO3 too low)', () => {
    expect(isPlausible(140, 102, 4)).toBe(false)
  })

  it('HCO3 41 → not plausible (HCO3 too high)', () => {
    expect(isPlausible(140, 102, 41)).toBe(false)
  })

  it('HCO3 5 → plausible (lower boundary)', () => {
    expect(isPlausible(140, 102, 5)).toBe(true)
  })

  it('HCO3 40 → plausible (upper boundary)', () => {
    expect(isPlausible(140, 102, 40)).toBe(true)
  })
})

// ---- Combined: real clinical scenarios ----

describe('Clinical scenarios', () => {
  it('DKA: Na 135, Cl 95, HCO3 10 → AG 30, high, MUDPILES', () => {
    const ag = calcAg(135, 95, 10)
    expect(ag).toBe(30)
    expect(getInterpretation(ag)).toBe('high')
  })

  it('Normal patient: Na 140, Cl 104, HCO3 26 → AG 10, normal', () => {
    const ag = calcAg(140, 104, 26)
    expect(ag).toBe(10)
    expect(getInterpretation(ag)).toBe('normal')
  })

  it('Hypoalbuminemia masking high AG: AG 10, albumin 2.0 → corrected 15 (mild)', () => {
    const ag = 10
    const corrected = calcCorrectedAg(ag, 2.0)
    expect(getInterpretation(ag)).toBe('normal')
    expect(getInterpretation(corrected)).toBe('mild')
  })

  it('Lactic acidosis: Na 142, Cl 100, HCO3 12 → AG 30, high', () => {
    const ag = calcAg(142, 100, 12)
    expect(ag).toBe(30)
    expect(getInterpretation(ag)).toBe('high')
  })
})
