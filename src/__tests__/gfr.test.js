import { describe, it, expect } from 'vitest'

// CKD-EPI 2021 equation (race-free)
// eGFR = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^(−1.200) × 0.9938^Age × 1.012 [if female]
// Female: κ = 0.7, α = −0.241
// Male:   κ = 0.9, α = −0.302
// Scr in mg/dL
function ckdEpi2021(scrMgDl, age, isFemale) {
  const kappa = isFemale ? 0.7 : 0.9
  const alpha = isFemale ? -0.241 : -0.302
  const ratio = scrMgDl / kappa
  const sexFactor = isFemale ? 1.012 : 1.0
  return (
    142 *
    Math.pow(Math.min(ratio, 1), alpha) *
    Math.pow(Math.max(ratio, 1), -1.2) *
    Math.pow(0.9938, age) *
    sexFactor
  )
}

// Unit conversion
const UMOL_TO_MG = 1 / 88.42

function umolToMg(umol) {
  return umol * UMOL_TO_MG
}

function mgToUmol(mg) {
  return mg * 88.42
}

// CKD stage classification
function ckdStage(egfr) {
  if (egfr >= 90) return 'G1'
  if (egfr >= 60) return 'G2'
  if (egfr >= 45) return 'G3a'
  if (egfr >= 30) return 'G3b'
  if (egfr >= 15) return 'G4'
  return 'G5'
}

// -------------------------------------------------------------------
// CKD-EPI 2021 reference values (published by Inker et al. 2021 NEJM)
// -------------------------------------------------------------------

describe('CKD-EPI 2021 — published reference values', () => {
  // Reference: Inker LA et al. N Engl J Med 2021;385:1737-1749
  // Male, 50y, Scr 1.0 mg/dL (above kappa 0.9) → eGFR ≈ 91.7
  it('male, 50y, 1.0 mg/dL → ~92 mL/min/1.73m²', () => {
    const result = ckdEpi2021(1.0, 50, false)
    expect(result).toBeGreaterThanOrEqual(89)
    expect(result).toBeLessThanOrEqual(95)
  })

  // Female, 50y, Scr 0.8 mg/dL (above kappa 0.7) → eGFR ≈ 90.5
  it('female, 50y, 0.8 mg/dL → ~90 mL/min/1.73m²', () => {
    const result = ckdEpi2021(0.8, 50, true)
    expect(result).toBeGreaterThanOrEqual(86)
    expect(result).toBeLessThanOrEqual(95)
  })

  // Male, 65y, Scr 1.5 mg/dL → eGFR ≈ 51.4
  it('male, 65y, 1.5 mg/dL → ~51 mL/min/1.73m²', () => {
    const result = ckdEpi2021(1.5, 65, false)
    expect(result).toBeGreaterThanOrEqual(48)
    expect(result).toBeLessThanOrEqual(55)
  })

  // Female, 70y, Scr 2.0 mg/dL → eGFR ≈ 26.7
  it('female, 70y, 2.0 mg/dL → ~27 mL/min/1.73m²', () => {
    const result = ckdEpi2021(2.0, 70, true)
    expect(result).toBeGreaterThanOrEqual(24)
    expect(result).toBeLessThanOrEqual(30)
  })

  // Male, 40y, Scr 0.9 mg/dL (exactly at kappa = 0.9) → eGFR ≈ 110.7
  it('male, 40y, 0.9 mg/dL (at kappa) → ~111 mL/min/1.73m²', () => {
    const result = ckdEpi2021(0.9, 40, false)
    expect(result).toBeGreaterThanOrEqual(108)
    expect(result).toBeLessThanOrEqual(114)
  })

  // Female, 30y, Scr 0.7 mg/dL (exactly at kappa = 0.7) → eGFR ≈ 119.3
  it('female, 30y, 0.7 mg/dL (at kappa) → ~119 mL/min/1.73m²', () => {
    const result = ckdEpi2021(0.7, 30, true)
    expect(result).toBeGreaterThanOrEqual(116)
    expect(result).toBeLessThanOrEqual(123)
  })
})

describe('CKD-EPI 2021 — sex factor', () => {
  it('sex factor 1.012 elevates female eGFR relative to no-factor baseline', () => {
    // The 1.012 factor is always applied for female — verify by comparing with manual calculation without it
    const kappa = 0.7, alpha = -0.241
    const scr = 1.0, age = 50
    const ratio = scr / kappa
    const base = 142 * Math.pow(Math.min(ratio, 1), alpha) * Math.pow(Math.max(ratio, 1), -1.2) * Math.pow(0.9938, age)
    const withSexFactor = base * 1.012
    expect(withSexFactor).toBeCloseTo(ckdEpi2021(scr, age, true), 5)
    expect(withSexFactor).toBeGreaterThan(base)
  })

  it('for same creatinine above normal range, female eGFR is lower than male (reflects worse relative function)', () => {
    // At 2.0 mg/dL (well above both thresholds), female eGFR < male: relative impairment is greater for female
    const male = ckdEpi2021(2.0, 50, false)
    const female = ckdEpi2021(2.0, 50, true)
    expect(female).toBeLessThan(male)
  })
})

describe('CKD-EPI 2021 — age effect', () => {
  it('eGFR decreases with age for same creatinine and sex', () => {
    const young = ckdEpi2021(1.0, 30, false)
    const old = ckdEpi2021(1.0, 70, false)
    expect(young).toBeGreaterThan(old)
  })

  it('factor 0.9938^age reduces eGFR progressively', () => {
    const age30 = ckdEpi2021(1.0, 30, false)
    const age60 = ckdEpi2021(1.0, 60, false)
    const age90 = ckdEpi2021(1.0, 90, false)
    expect(age30).toBeGreaterThan(age60)
    expect(age60).toBeGreaterThan(age90)
  })
})

describe('CKD-EPI 2021 — creatinine effect', () => {
  it('eGFR decreases as creatinine increases', () => {
    const low = ckdEpi2021(0.8, 50, false)
    const mid = ckdEpi2021(1.5, 50, false)
    const high = ckdEpi2021(5.0, 50, false)
    expect(low).toBeGreaterThan(mid)
    expect(mid).toBeGreaterThan(high)
  })
})

describe('CKD-EPI 2021 — edge cases', () => {
  it('very high creatinine (10 mg/dL) returns a very low eGFR', () => {
    const result = ckdEpi2021(10.0, 60, false)
    expect(result).toBeLessThan(10)
    expect(result).toBeGreaterThan(0)
  })

  it('very low creatinine (0.3 mg/dL) returns a high eGFR', () => {
    const result = ckdEpi2021(0.3, 40, false)
    expect(result).toBeGreaterThan(120)
  })

  it('very old patient (90y) with normal creatinine returns reduced eGFR', () => {
    const result = ckdEpi2021(1.0, 90, false)
    expect(result).toBeLessThan(80)
    expect(result).toBeGreaterThan(20)
  })

  it('young patient (18y) with normal creatinine returns normal/high eGFR', () => {
    const result = ckdEpi2021(0.9, 18, false)
    expect(result).toBeGreaterThan(100)
  })
})

// -------------------------------------------------------------------
// Unit conversion: µmol/L ↔ mg/dL
// -------------------------------------------------------------------

describe('creatinine unit conversion', () => {
  it('88.42 µmol/L → 1.0 mg/dL', () => {
    expect(umolToMg(88.42)).toBeCloseTo(1.0, 3)
  })

  it('1.0 mg/dL → 88.42 µmol/L', () => {
    expect(mgToUmol(1.0)).toBeCloseTo(88.42, 2)
  })

  it('conversion is reciprocal', () => {
    const original = 1.5
    expect(umolToMg(mgToUmol(original))).toBeCloseTo(original, 5)
  })

  it('eGFR is the same regardless of input unit', () => {
    const scrMg = 1.2
    const scrUmol = mgToUmol(scrMg)
    const egfrFromMg = ckdEpi2021(scrMg, 55, false)
    const egfrFromUmol = ckdEpi2021(umolToMg(scrUmol), 55, false)
    expect(egfrFromMg).toBeCloseTo(egfrFromUmol, 5)
  })

  it('106 µmol/L → ~1.2 mg/dL (upper normal male)', () => {
    expect(umolToMg(106)).toBeCloseTo(1.2, 1)
  })

  it('44 µmol/L → ~0.5 mg/dL (lower normal female)', () => {
    expect(umolToMg(44)).toBeCloseTo(0.5, 1)
  })
})

// -------------------------------------------------------------------
// CKD stage classification
// -------------------------------------------------------------------

describe('CKD stage classification', () => {
  it('eGFR ≥ 90 → G1', () => {
    expect(ckdStage(105)).toBe('G1')
    expect(ckdStage(90)).toBe('G1')
  })

  it('eGFR 60–89 → G2', () => {
    expect(ckdStage(75)).toBe('G2')
    expect(ckdStage(60)).toBe('G2')
    expect(ckdStage(89)).toBe('G2')
  })

  it('eGFR 45–59 → G3a', () => {
    expect(ckdStage(52)).toBe('G3a')
    expect(ckdStage(45)).toBe('G3a')
    expect(ckdStage(59)).toBe('G3a')
  })

  it('eGFR 30–44 → G3b', () => {
    expect(ckdStage(37)).toBe('G3b')
    expect(ckdStage(30)).toBe('G3b')
    expect(ckdStage(44)).toBe('G3b')
  })

  it('eGFR 15–29 → G4', () => {
    expect(ckdStage(22)).toBe('G4')
    expect(ckdStage(15)).toBe('G4')
    expect(ckdStage(29)).toBe('G4')
  })

  it('eGFR < 15 → G5', () => {
    expect(ckdStage(10)).toBe('G5')
    expect(ckdStage(14.9)).toBe('G5')
    expect(ckdStage(1)).toBe('G5')
  })

  it('boundary: 89.9 → G2, 90.0 → G1', () => {
    expect(ckdStage(89.9)).toBe('G2')
    expect(ckdStage(90.0)).toBe('G1')
  })

  it('boundary: 59.9 → G3a, 60.0 → G2', () => {
    expect(ckdStage(59.9)).toBe('G3a')
    expect(ckdStage(60.0)).toBe('G2')
  })

  it('boundary: 14.9 → G5, 15.0 → G4', () => {
    expect(ckdStage(14.9)).toBe('G5')
    expect(ckdStage(15.0)).toBe('G4')
  })
})

// -------------------------------------------------------------------
// Real-world clinical scenarios
// -------------------------------------------------------------------

describe('clinical scenarios', () => {
  it('healthy young male → G1', () => {
    const egfr = ckdEpi2021(0.9, 25, false)
    expect(ckdStage(egfr)).toBe('G1')
  })

  it('elderly with mildly elevated creatinine → G2 or G3a', () => {
    const egfr = ckdEpi2021(1.4, 75, false)
    const stage = ckdStage(egfr)
    expect(['G2', 'G3a']).toContain(stage)
  })

  it('diabetic nephropathy scenario (creatinine 2.5, age 60) → G4', () => {
    const egfr = ckdEpi2021(2.5, 60, false)
    expect(ckdStage(egfr)).toBe('G4')
  })

  it('end-stage kidney disease (creatinine 8.0) → G5', () => {
    const egfr = ckdEpi2021(8.0, 55, false)
    expect(ckdStage(egfr)).toBe('G5')
  })
})
