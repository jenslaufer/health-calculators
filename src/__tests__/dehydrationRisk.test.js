import { describe, it, expect } from 'vitest'
import {
  calcFluidDeficit,
  calcSymptomScore,
  classifyDehydration,
  calcDehydrationRisk,
} from '../utils/dehydrationRisk.js'

// Dehydration severity assessment combines:
// 1) Fluid balance: actual fluid intake (ml) vs daily requirement (35 ml/kg body weight, IOM/EFSA reference).
// 2) Clinical symptom score (modified from WHO/CDC clinical signs of dehydration).
//
// Symptom flags (each adds points):
//   thirst (1), darkUrine (1), dryMouth (1), fatigue (1),
//   headache (1), dizziness (2), rapidHeartbeat (2), confusion (3)
//
// Categories combine deficit % + symptom score:
//   none      < 1 % deficit AND symptom score 0
//   mild      1–3 % deficit OR symptom score 1–2
//   moderate  3–6 % deficit OR symptom score 3–5
//   severe    > 6 % deficit OR symptom score ≥ 6 OR confusion present

describe('Fluid deficit calculation', () => {
  it('80 kg adult drinking 2800 ml meets requirement → 0 % deficit', () => {
    // requirement: 80 * 35 = 2800 ml
    expect(calcFluidDeficit(80, 2800)).toBeCloseTo(0, 1)
  })

  it('80 kg adult drinking 1400 ml → 50 % deficit', () => {
    // 1 - 1400/2800 = 0.5 → 50%
    expect(calcFluidDeficit(80, 1400)).toBeCloseTo(50, 1)
  })

  it('70 kg adult drinking 0 ml → 100 % deficit', () => {
    expect(calcFluidDeficit(70, 0)).toBeCloseTo(100, 1)
  })

  it('over-hydration returns 0 (clamped)', () => {
    expect(calcFluidDeficit(60, 5000)).toBe(0)
  })

  it('returns null for invalid weight', () => {
    expect(calcFluidDeficit(0, 1000)).toBeNull()
    expect(calcFluidDeficit(-10, 1000)).toBeNull()
    expect(calcFluidDeficit(null, 1000)).toBeNull()
  })

  it('returns null for invalid intake', () => {
    expect(calcFluidDeficit(70, null)).toBeNull()
    expect(calcFluidDeficit(70, -100)).toBeNull()
  })
})

describe('Symptom score', () => {
  it('no symptoms → 0', () => {
    expect(calcSymptomScore({})).toBe(0)
  })

  it('thirst alone → 1', () => {
    expect(calcSymptomScore({ thirst: true })).toBe(1)
  })

  it('confusion alone → 3', () => {
    expect(calcSymptomScore({ confusion: true })).toBe(3)
  })

  it('dizziness + rapidHeartbeat → 4', () => {
    expect(calcSymptomScore({ dizziness: true, rapidHeartbeat: true })).toBe(4)
  })

  it('all symptoms → 12', () => {
    expect(calcSymptomScore({
      thirst: true, darkUrine: true, dryMouth: true, fatigue: true,
      headache: true, dizziness: true, rapidHeartbeat: true, confusion: true,
    })).toBe(12)
  })

  it('ignores unknown flags', () => {
    expect(calcSymptomScore({ thirst: true, foo: true })).toBe(1)
  })
})

describe('Dehydration classification', () => {
  it('0 % deficit, 0 symptoms → none', () => {
    expect(classifyDehydration(0, 0, false)).toBe('none')
  })

  it('2 % deficit alone → mild', () => {
    expect(classifyDehydration(2, 0, false)).toBe('mild')
  })

  it('symptom score 2 alone → mild', () => {
    expect(classifyDehydration(0, 2, false)).toBe('mild')
  })

  it('4 % deficit → moderate', () => {
    expect(classifyDehydration(4, 0, false)).toBe('moderate')
  })

  it('symptom score 4 → moderate', () => {
    expect(classifyDehydration(0, 4, false)).toBe('moderate')
  })

  it('7 % deficit → severe', () => {
    expect(classifyDehydration(7, 0, false)).toBe('severe')
  })

  it('symptom score ≥ 6 → severe', () => {
    expect(classifyDehydration(0, 6, false)).toBe('severe')
  })

  it('confusion present → always severe', () => {
    expect(classifyDehydration(0, 3, true)).toBe('severe')
  })

  it('returns highest severity from deficit and symptoms', () => {
    // 2 % (mild) + symptom score 4 (moderate) → moderate
    expect(classifyDehydration(2, 4, false)).toBe('moderate')
  })
})

describe('calcDehydrationRisk integration', () => {
  it('returns null for invalid input', () => {
    expect(calcDehydrationRisk({ weightKg: null, intakeMl: 1000, symptoms: {} })).toBeNull()
    expect(calcDehydrationRisk({ weightKg: 70, intakeMl: -1, symptoms: {} })).toBeNull()
  })

  it('healthy adult: 70 kg, 2450 ml, no symptoms → none', () => {
    const r = calcDehydrationRisk({ weightKg: 70, intakeMl: 2450, symptoms: {} })
    expect(r.category).toBe('none')
    expect(r.deficitPct).toBeCloseTo(0, 1)
    expect(r.symptomScore).toBe(0)
    expect(r.requirementMl).toBe(2450)
  })

  it('mild dehydration: 70 kg, 2000 ml, thirst only', () => {
    // requirement 2450, deficit ~18% → severe by deficit alone — adjust
    // Using 2300 ml: deficit = (1 - 2300/2450)*100 ≈ 6.1 → severe
    // Use 2400 ml: deficit ≈ 2.0 → mild
    const r = calcDehydrationRisk({ weightKg: 70, intakeMl: 2400, symptoms: { thirst: true } })
    expect(r.category).toBe('mild')
    expect(r.deficitPct).toBeGreaterThan(0)
    expect(r.deficitPct).toBeLessThan(3)
    expect(r.symptomScore).toBe(1)
  })

  it('moderate dehydration: large deficit alone', () => {
    // 80 kg → 2800 ml needed; 2700 ml → ~3.6 % → moderate
    const r = calcDehydrationRisk({ weightKg: 80, intakeMl: 2700, symptoms: {} })
    expect(r.category).toBe('moderate')
  })

  it('severe dehydration: confusion always severe regardless of intake', () => {
    const r = calcDehydrationRisk({
      weightKg: 70, intakeMl: 2450, symptoms: { confusion: true },
    })
    expect(r.category).toBe('severe')
  })

  it('returns recommended ml deficit to drink to close gap', () => {
    // 70 kg → 2450 ml needed; 1450 → recommend 1000
    const r = calcDehydrationRisk({ weightKg: 70, intakeMl: 1450, symptoms: {} })
    expect(r.deficitMl).toBe(1000)
  })

  it('over-hydration → deficitMl = 0', () => {
    const r = calcDehydrationRisk({ weightKg: 70, intakeMl: 4000, symptoms: {} })
    expect(r.deficitMl).toBe(0)
  })
})
