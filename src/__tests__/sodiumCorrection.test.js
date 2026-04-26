import { describe, it, expect } from 'vitest'

// Pure sodium-correction logic — mirrors SodiumCorrectionCalculator.vue

const MMOL_PER_MGDL_GLUCOSE = 18.0182

function toMgDl(glucose, unit) {
  if (glucose === null || glucose === undefined) return null
  return unit === 'mmol' ? glucose * MMOL_PER_MGDL_GLUCOSE : glucose
}

function correctedSodiumHillier(measuredNa, glucoseMgDl) {
  if (measuredNa === null || glucoseMgDl === null) return null
  return measuredNa + 2.4 * ((glucoseMgDl - 100) / 100)
}

function correctedSodiumKatz(measuredNa, glucoseMgDl) {
  if (measuredNa === null || glucoseMgDl === null) return null
  return measuredNa + 1.6 * ((glucoseMgDl - 100) / 100)
}

function classifySodium(na) {
  if (na === null) return null
  if (na < 135) return 'hyponatremia'
  if (na > 145) return 'hypernatremia'
  return 'normal'
}

describe('Glucose unit conversion', () => {
  it('100 mg/dL stays 100 mg/dL', () => {
    expect(toMgDl(100, 'mgdl')).toBeCloseTo(100, 5)
  })

  it('5.55 mmol/L → ~100 mg/dL', () => {
    expect(toMgDl(5.55, 'mmol')).toBeCloseTo(100, 0)
  })

  it('22.2 mmol/L → ~400 mg/dL', () => {
    expect(toMgDl(22.2, 'mmol')).toBeCloseTo(400, 0)
  })
})

describe('Hillier corrected sodium (preferred)', () => {
  it('Na 140, glucose 100 → 140 (no correction needed)', () => {
    expect(correctedSodiumHillier(140, 100)).toBeCloseTo(140, 5)
  })

  it('Na 135, glucose 400 → ~142.2 (+7.2 mEq/L)', () => {
    expect(correctedSodiumHillier(135, 400)).toBeCloseTo(142.2, 2)
  })

  it('Na 130, glucose 600 → ~142.0 (+12.0 mEq/L)', () => {
    expect(correctedSodiumHillier(130, 600)).toBeCloseTo(142.0, 2)
  })

  it('Na 138, glucose 50 (hypoglycemia) → ~136.8 (negative correction)', () => {
    expect(correctedSodiumHillier(138, 50)).toBeCloseTo(136.8, 2)
  })

  it('Na 140, glucose 200 → ~142.4', () => {
    expect(correctedSodiumHillier(140, 200)).toBeCloseTo(142.4, 2)
  })

  it('handles mmol/L glucose input via conversion (Na 135, gluc 22.2 mmol/L ≈ 400 mg/dL → ~142.2)', () => {
    const mgdl = toMgDl(22.2, 'mmol')
    expect(correctedSodiumHillier(135, mgdl)).toBeCloseTo(142.2, 1)
  })
})

describe('Katz corrected sodium (legacy)', () => {
  it('Na 135, glucose 400 → ~139.8 (+4.8 mEq/L)', () => {
    expect(correctedSodiumKatz(135, 400)).toBeCloseTo(139.8, 2)
  })

  it('Na 140, glucose 100 → 140', () => {
    expect(correctedSodiumKatz(140, 100)).toBeCloseTo(140, 5)
  })

  it('Na 130, glucose 600 → ~138 (+8.0 mEq/L)', () => {
    expect(correctedSodiumKatz(130, 600)).toBeCloseTo(138, 2)
  })
})

describe('Sodium classification', () => {
  it('134 → hyponatremia', () => {
    expect(classifySodium(134)).toBe('hyponatremia')
  })

  it('135 → normal (lower boundary)', () => {
    expect(classifySodium(135)).toBe('normal')
  })

  it('140 → normal', () => {
    expect(classifySodium(140)).toBe('normal')
  })

  it('145 → normal (upper boundary)', () => {
    expect(classifySodium(145)).toBe('normal')
  })

  it('146 → hypernatremia', () => {
    expect(classifySodium(146)).toBe('hypernatremia')
  })

  it('120 → hyponatremia (severe)', () => {
    expect(classifySodium(120)).toBe('hyponatremia')
  })

  it('160 → hypernatremia (severe)', () => {
    expect(classifySodium(160)).toBe('hypernatremia')
  })
})

describe('Clinical scenarios', () => {
  it('DKA: measured Na 130, glucose 600 → corrected ~142 (normal)', () => {
    const corrected = correctedSodiumHillier(130, 600)
    expect(corrected).toBeCloseTo(142.0, 1)
    expect(classifySodium(130)).toBe('hyponatremia')
    expect(classifySodium(corrected)).toBe('normal')
  })

  it('Pseudohyponatremia masked: Na 132, glucose 500 → corrected ~141.6 (normal)', () => {
    const corrected = correctedSodiumHillier(132, 500)
    expect(corrected).toBeCloseTo(141.6, 1)
    expect(classifySodium(corrected)).toBe('normal')
  })

  it('Eunatremia: Na 140 with normal glucose 90 → corrected 139.76', () => {
    const corrected = correctedSodiumHillier(140, 90)
    expect(corrected).toBeCloseTo(139.76, 2)
    expect(classifySodium(corrected)).toBe('normal')
  })
})
