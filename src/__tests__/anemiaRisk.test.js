import { describe, it, expect } from 'vitest'
import {
  classifyHemoglobin,
  calcSymptomScore,
  classifyAnemia,
  calcAnemiaRisk,
} from '../utils/anemiaRisk.js'

// Anemia risk screening combines:
// 1) Hemoglobin (g/dL) measured against WHO sex-specific cutoffs:
//    Women  : <12.0 anemia, <11.0 moderate, <8.0 severe
//    Men    : <13.0 anemia, <11.0 moderate, <8.0 severe
//    None when Hb is at or above the sex-specific normal cutoff.
// 2) Clinical symptom score (additive points):
//    fatigue (1), pallor (1), shortnessOfBreath (2), dizziness (1),
//    coldHandsFeet (1), headache (1), rapidHeartbeat (2),
//    brittleNails (1), restlessLegs (1), pica (2)
// 3) Final risk = max(Hb category, symptom-band):
//    score 0    → none
//    score 1–3  → mild
//    score 4–6  → moderate
//    score ≥ 7  → severe

describe('Hemoglobin classification', () => {
  it('woman with Hb 13.5 g/dL → none', () => {
    expect(classifyHemoglobin(13.5, 'female')).toBe('none')
  })

  it('woman with Hb 11.5 g/dL → mild', () => {
    expect(classifyHemoglobin(11.5, 'female')).toBe('mild')
  })

  it('woman with Hb 9.0 g/dL → moderate', () => {
    expect(classifyHemoglobin(9.0, 'female')).toBe('moderate')
  })

  it('woman with Hb 7.0 g/dL → severe', () => {
    expect(classifyHemoglobin(7.0, 'female')).toBe('severe')
  })

  it('man with Hb 14.0 g/dL → none', () => {
    expect(classifyHemoglobin(14.0, 'male')).toBe('none')
  })

  it('man with Hb 12.5 g/dL → mild (below 13.0 male cutoff)', () => {
    expect(classifyHemoglobin(12.5, 'male')).toBe('mild')
  })

  it('returns null for invalid hb', () => {
    expect(classifyHemoglobin(null, 'female')).toBeNull()
    expect(classifyHemoglobin(-1, 'female')).toBeNull()
    expect(classifyHemoglobin(0, 'female')).toBeNull()
  })

  it('returns null for unknown sex', () => {
    expect(classifyHemoglobin(12, 'other')).toBeNull()
  })
})

describe('Symptom score', () => {
  it('no symptoms → 0', () => {
    expect(calcSymptomScore({})).toBe(0)
  })

  it('fatigue alone → 1', () => {
    expect(calcSymptomScore({ fatigue: true })).toBe(1)
  })

  it('shortnessOfBreath alone → 2', () => {
    expect(calcSymptomScore({ shortnessOfBreath: true })).toBe(2)
  })

  it('pica alone → 2', () => {
    expect(calcSymptomScore({ pica: true })).toBe(2)
  })

  it('all symptoms → 13', () => {
    expect(
      calcSymptomScore({
        fatigue: true,
        pallor: true,
        shortnessOfBreath: true,
        dizziness: true,
        coldHandsFeet: true,
        headache: true,
        rapidHeartbeat: true,
        brittleNails: true,
        restlessLegs: true,
        pica: true,
      }),
    ).toBe(13)
  })

  it('ignores unknown flags', () => {
    expect(calcSymptomScore({ fatigue: true, foo: true })).toBe(1)
  })
})

describe('Anemia classification', () => {
  it('Hb none + score 0 → none', () => {
    expect(classifyAnemia('none', 0)).toBe('none')
  })

  it('Hb none + score 2 → mild', () => {
    expect(classifyAnemia('none', 2)).toBe('mild')
  })

  it('Hb mild + score 0 → mild', () => {
    expect(classifyAnemia('mild', 0)).toBe('mild')
  })

  it('Hb none + score 5 → moderate', () => {
    expect(classifyAnemia('none', 5)).toBe('moderate')
  })

  it('Hb moderate + score 1 → moderate', () => {
    expect(classifyAnemia('moderate', 1)).toBe('moderate')
  })

  it('Hb none + score 7 → severe', () => {
    expect(classifyAnemia('none', 7)).toBe('severe')
  })

  it('Hb severe overrides low score → severe', () => {
    expect(classifyAnemia('severe', 0)).toBe('severe')
  })

  it('takes the higher of two estimates', () => {
    expect(classifyAnemia('mild', 5)).toBe('moderate')
  })
})

describe('calcAnemiaRisk integration', () => {
  it('returns null without sex', () => {
    expect(calcAnemiaRisk({ hemoglobin: 13, sex: null, symptoms: {} })).toBeNull()
  })

  it('healthy man: Hb 14.5, no symptoms → none', () => {
    const r = calcAnemiaRisk({ hemoglobin: 14.5, sex: 'male', symptoms: {} })
    expect(r.category).toBe('none')
    expect(r.symptomScore).toBe(0)
    expect(r.hbCategory).toBe('none')
  })

  it('woman with normal Hb but 3 symptoms → mild via symptoms', () => {
    const r = calcAnemiaRisk({
      hemoglobin: 13,
      sex: 'female',
      symptoms: { fatigue: true, pallor: true, dizziness: true },
    })
    expect(r.category).toBe('mild')
    expect(r.symptomScore).toBe(3)
    expect(r.hbCategory).toBe('none')
  })

  it('woman with Hb 9.5 (moderate) + mild symptoms → moderate', () => {
    const r = calcAnemiaRisk({
      hemoglobin: 9.5,
      sex: 'female',
      symptoms: { fatigue: true },
    })
    expect(r.category).toBe('moderate')
    expect(r.hbCategory).toBe('moderate')
  })

  it('man with severe Hb 7 → severe regardless of symptoms', () => {
    const r = calcAnemiaRisk({ hemoglobin: 7, sex: 'male', symptoms: {} })
    expect(r.category).toBe('severe')
    expect(r.hbCategory).toBe('severe')
  })

  it('symptom-only screening when Hb omitted', () => {
    const r = calcAnemiaRisk({
      hemoglobin: null,
      sex: 'female',
      symptoms: { fatigue: true, pallor: true, shortnessOfBreath: true, pica: true },
    })
    // 1 + 1 + 2 + 2 = 6 → moderate by symptom band
    expect(r.symptomScore).toBe(6)
    expect(r.category).toBe('moderate')
    expect(r.hbCategory).toBeNull()
  })

  it('exposes WHO cutoff used for the given sex', () => {
    expect(calcAnemiaRisk({ hemoglobin: 13.2, sex: 'female', symptoms: {} }).cutoff).toBe(12)
    expect(calcAnemiaRisk({ hemoglobin: 14.2, sex: 'male', symptoms: {} }).cutoff).toBe(13)
  })
})
