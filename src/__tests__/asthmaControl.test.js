import { describe, it, expect } from 'vitest'
import {
  ACT_QUESTIONS,
  calcActScore,
  classifyAct,
  evaluateAct,
} from '../utils/asthmaControl.js'

// ACT — Asthma Control Test (Nathan et al., J Allergy Clin Immunol, 2004)
// 5 questions, each scored 1–5, total 5–25.
//   25      : well controlled (perfect)
//   20–24   : well controlled
//   16–19   : not well controlled
//    5–15   : poorly controlled

describe('ACT_QUESTIONS', () => {
  it('exposes 5 question keys', () => {
    expect(ACT_QUESTIONS).toHaveLength(5)
  })

  it('uses canonical keys', () => {
    expect(ACT_QUESTIONS).toEqual([
      'activityLimitation',
      'shortnessOfBreath',
      'nightSymptoms',
      'rescueInhalerUse',
      'selfRating',
    ])
  })
})

describe('calcActScore', () => {
  it('all 5s → total 25', () => {
    const r = calcActScore({
      activityLimitation: 5, shortnessOfBreath: 5, nightSymptoms: 5,
      rescueInhalerUse: 5, selfRating: 5,
    })
    expect(r).toBe(25)
  })

  it('all 1s → total 5', () => {
    const r = calcActScore({
      activityLimitation: 1, shortnessOfBreath: 1, nightSymptoms: 1,
      rescueInhalerUse: 1, selfRating: 1,
    })
    expect(r).toBe(5)
  })

  it('mixed answers sum correctly: 4+3+5+2+4 → 18', () => {
    const r = calcActScore({
      activityLimitation: 4, shortnessOfBreath: 3, nightSymptoms: 5,
      rescueInhalerUse: 2, selfRating: 4,
    })
    expect(r).toBe(18)
  })

  it('returns null on missing answer', () => {
    expect(calcActScore({
      activityLimitation: 4, shortnessOfBreath: 3, nightSymptoms: 5,
      rescueInhalerUse: 2,
    })).toBe(null)
  })

  it('returns null on out-of-range value (0)', () => {
    expect(calcActScore({
      activityLimitation: 0, shortnessOfBreath: 3, nightSymptoms: 5,
      rescueInhalerUse: 2, selfRating: 4,
    })).toBe(null)
  })

  it('returns null on out-of-range value (6)', () => {
    expect(calcActScore({
      activityLimitation: 6, shortnessOfBreath: 3, nightSymptoms: 5,
      rescueInhalerUse: 2, selfRating: 4,
    })).toBe(null)
  })

  it('returns null on null/undefined input', () => {
    expect(calcActScore(null)).toBe(null)
    expect(calcActScore(undefined)).toBe(null)
  })

  it('returns null on non-integer (4.5)', () => {
    expect(calcActScore({
      activityLimitation: 4.5, shortnessOfBreath: 3, nightSymptoms: 5,
      rescueInhalerUse: 2, selfRating: 4,
    })).toBe(null)
  })
})

describe('classifyAct', () => {
  it('25 → wellControlled', () => {
    expect(classifyAct(25)).toBe('wellControlled')
  })

  it('20 → wellControlled (boundary)', () => {
    expect(classifyAct(20)).toBe('wellControlled')
  })

  it('19 → notWellControlled (boundary)', () => {
    expect(classifyAct(19)).toBe('notWellControlled')
  })

  it('16 → notWellControlled (boundary)', () => {
    expect(classifyAct(16)).toBe('notWellControlled')
  })

  it('15 → poorlyControlled (boundary)', () => {
    expect(classifyAct(15)).toBe('poorlyControlled')
  })

  it('5 → poorlyControlled (minimum)', () => {
    expect(classifyAct(5)).toBe('poorlyControlled')
  })

  it('returns null for out-of-range or invalid', () => {
    expect(classifyAct(4)).toBe(null)
    expect(classifyAct(26)).toBe(null)
    expect(classifyAct(null)).toBe(null)
    expect(classifyAct('20')).toBe(null)
  })
})

describe('evaluateAct (one-shot)', () => {
  it('all 5 → score 25, wellControlled', () => {
    const r = evaluateAct({
      activityLimitation: 5, shortnessOfBreath: 5, nightSymptoms: 5,
      rescueInhalerUse: 5, selfRating: 5,
    })
    expect(r.score).toBe(25)
    expect(r.category).toBe('wellControlled')
  })

  it('typical not-controlled scenario: 3+2+3+4+5 → 17, notWellControlled', () => {
    const r = evaluateAct({
      activityLimitation: 3, shortnessOfBreath: 2, nightSymptoms: 3,
      rescueInhalerUse: 4, selfRating: 5,
    })
    expect(r.score).toBe(17)
    expect(r.category).toBe('notWellControlled')
  })

  it('poorly controlled: 1+1+2+1+2 → 7, poorlyControlled', () => {
    const r = evaluateAct({
      activityLimitation: 1, shortnessOfBreath: 1, nightSymptoms: 2,
      rescueInhalerUse: 1, selfRating: 2,
    })
    expect(r.score).toBe(7)
    expect(r.category).toBe('poorlyControlled')
  })

  it('returns null on incomplete answers', () => {
    expect(evaluateAct({ activityLimitation: 5 })).toBe(null)
  })

  it('returns null on null input', () => {
    expect(evaluateAct(null)).toBe(null)
  })
})
