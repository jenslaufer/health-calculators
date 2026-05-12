import { describe, it, expect } from 'vitest'
import {
  classifyFerritin,
  classifyTsat,
  classifyHemoglobin,
  calcSymptomScore,
  symptomBand,
  calcIronDeficiency,
  TOTAL_SYMPTOM_POINTS,
} from '../utils/ironDeficiency.js'

// Iron deficiency screening combines four signals:
//   1) Ferritin (ng/mL): <15 severe, <30 moderate, <100 mild, else none
//   2) TSAT (%):         <16 moderate, <20 mild, else none
//   3) Hemoglobin (g/dL) WHO cutoffs by sex (women 12/11/8, men 13/11/8)
//   4) Symptom score (10 weighted symptoms, max 13 points)
// Final category = max(ferritin, tsat, hb, symptom).

describe('classifyFerritin', () => {
  it('150 ng/mL → none', () => {
    expect(classifyFerritin(150)).toBe('none')
  })
  it('60 ng/mL → mild', () => {
    expect(classifyFerritin(60)).toBe('mild')
  })
  it('20 ng/mL → moderate', () => {
    expect(classifyFerritin(20)).toBe('moderate')
  })
  it('10 ng/mL → severe', () => {
    expect(classifyFerritin(10)).toBe('severe')
  })
  it('returns null for invalid input', () => {
    expect(classifyFerritin(null)).toBeNull()
    expect(classifyFerritin(0)).toBeNull()
    expect(classifyFerritin(-5)).toBeNull()
    expect(classifyFerritin('abc')).toBeNull()
  })
})

describe('classifyTsat', () => {
  it('25% → none', () => {
    expect(classifyTsat(25)).toBe('none')
  })
  it('18% → mild', () => {
    expect(classifyTsat(18)).toBe('mild')
  })
  it('10% → moderate', () => {
    expect(classifyTsat(10)).toBe('moderate')
  })
  it('returns null for invalid', () => {
    expect(classifyTsat(null)).toBeNull()
    expect(classifyTsat(-1)).toBeNull()
  })
  it('0% → moderate (legal lower bound)', () => {
    expect(classifyTsat(0)).toBe('moderate')
  })
})

describe('classifyHemoglobin', () => {
  it('woman 13 → none', () => {
    expect(classifyHemoglobin(13, 'female')).toBe('none')
  })
  it('woman 11.5 → mild', () => {
    expect(classifyHemoglobin(11.5, 'female')).toBe('mild')
  })
  it('man 12.5 → mild (below male 13 cutoff)', () => {
    expect(classifyHemoglobin(12.5, 'male')).toBe('mild')
  })
  it('woman 9 → moderate', () => {
    expect(classifyHemoglobin(9, 'female')).toBe('moderate')
  })
  it('woman 7 → severe', () => {
    expect(classifyHemoglobin(7, 'female')).toBe('severe')
  })
  it('returns null for invalid Hb', () => {
    expect(classifyHemoglobin(null, 'female')).toBeNull()
    expect(classifyHemoglobin(13, 'other')).toBeNull()
  })
})

describe('Symptom score', () => {
  it('no symptoms → 0', () => {
    expect(calcSymptomScore({})).toBe(0)
  })
  it('fatigue → 1', () => {
    expect(calcSymptomScore({ fatigue: true })).toBe(1)
  })
  it('restless legs → 2', () => {
    expect(calcSymptomScore({ restlessLegs: true })).toBe(2)
  })
  it('pica → 2', () => {
    expect(calcSymptomScore({ pica: true })).toBe(2)
  })
  it('shortness of breath → 2', () => {
    expect(calcSymptomScore({ shortnessOfBreath: true })).toBe(2)
  })
  it('all symptoms → 13', () => {
    const all = {
      fatigue: true, pallor: true, shortnessOfBreath: true, hairLoss: true,
      brittleNails: true, restlessLegs: true, pica: true, coldHandsFeet: true,
      headache: true, poorConcentration: true,
    }
    expect(calcSymptomScore(all)).toBe(13)
    expect(TOTAL_SYMPTOM_POINTS).toBe(13)
  })
  it('ignores unknown flags', () => {
    expect(calcSymptomScore({ fatigue: true, unknown: true })).toBe(1)
  })
})

describe('symptomBand', () => {
  it('0 → none', () => {
    expect(symptomBand(0)).toBe('none')
  })
  it('2 → mild', () => {
    expect(symptomBand(2)).toBe('mild')
  })
  it('5 → moderate', () => {
    expect(symptomBand(5)).toBe('moderate')
  })
  it('8 → severe', () => {
    expect(symptomBand(8)).toBe('severe')
  })
})

describe('calcIronDeficiency integration', () => {
  it('returns null without sex', () => {
    expect(calcIronDeficiency({ ferritin: 50, sex: null })).toBeNull()
  })

  it('healthy adult: ferritin 120, tsat 30, no symptoms → none', () => {
    const r = calcIronDeficiency({
      ferritin: 120, tsat: 30, hemoglobin: 14, sex: 'female', symptoms: {},
    })
    expect(r.category).toBe('none')
    expect(r.ferritinCategory).toBe('none')
    expect(r.tsatCategory).toBe('none')
    expect(r.hbCategory).toBe('none')
    expect(r.symptomScore).toBe(0)
  })

  it('latent iron deficiency: ferritin 20, normal Hb → moderate via ferritin', () => {
    const r = calcIronDeficiency({
      ferritin: 20, tsat: 22, hemoglobin: 13, sex: 'female', symptoms: {},
    })
    expect(r.ferritinCategory).toBe('moderate')
    expect(r.category).toBe('moderate')
  })

  it('iron-deficiency anemia: ferritin 10, Hb 10 → severe (ferritin drives)', () => {
    const r = calcIronDeficiency({
      ferritin: 10, tsat: 12, hemoglobin: 10, sex: 'female',
      symptoms: { fatigue: true, pallor: true },
    })
    expect(r.ferritinCategory).toBe('severe')
    expect(r.category).toBe('severe')
  })

  it('symptom-only screening: 4 symptoms → moderate via symptoms', () => {
    const r = calcIronDeficiency({
      ferritin: 120, tsat: 30, sex: 'female',
      symptoms: { fatigue: true, restlessLegs: true, pica: true },
    })
    // 1 + 2 + 2 = 5 → moderate
    expect(r.symptomScore).toBe(5)
    expect(r.symptomCategory).toBe('moderate')
    expect(r.category).toBe('moderate')
  })

  it('low TSAT with normal ferritin → mild via tsat', () => {
    const r = calcIronDeficiency({
      ferritin: 120, tsat: 18, sex: 'male', symptoms: {},
    })
    expect(r.tsatCategory).toBe('mild')
    expect(r.category).toBe('mild')
  })

  it('omitted markers fall back to remaining signals', () => {
    const r = calcIronDeficiency({
      sex: 'female',
      symptoms: { restlessLegs: true, pica: true, fatigue: true, shortnessOfBreath: true },
    })
    // 2 + 2 + 1 + 2 = 7 → severe by symptoms alone
    expect(r.ferritinCategory).toBeNull()
    expect(r.tsatCategory).toBeNull()
    expect(r.hbCategory).toBeNull()
    expect(r.symptomScore).toBe(7)
    expect(r.category).toBe('severe')
  })

  it('any one severe signal wins', () => {
    const r = calcIronDeficiency({
      ferritin: 150, tsat: 30, hemoglobin: 7, sex: 'male', symptoms: {},
    })
    expect(r.hbCategory).toBe('severe')
    expect(r.category).toBe('severe')
  })
})
