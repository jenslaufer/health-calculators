import { describe, it, expect } from 'vitest'
import {
  CAT_QUESTIONS,
  calcCatScore,
  classifyCat,
  classifyMmrc,
  classifyGold,
  evaluateCopd,
} from '../utils/copdAssessment.js'

// CAT — 8 items, each 0–5, total 0–40 (Jones et al., 2009)
//   <10 low, 10–20 medium, 21–30 high, 31–40 very high
// mMRC — grade 0–4 (Bestall, 1999); ≤1 low symptoms, ≥2 high
// GOLD 2023 ABE: E if ≥2 moderate OR ≥1 hosp; B if symptoms; else A.

describe('CAT_QUESTIONS', () => {
  it('exposes 8 question keys', () => {
    expect(CAT_QUESTIONS).toHaveLength(8)
  })
})

describe('calcCatScore', () => {
  it('all 0s → 0', () => {
    const a = {}
    for (const q of CAT_QUESTIONS) a[q] = 0
    expect(calcCatScore(a)).toBe(0)
  })

  it('all 5s → 40', () => {
    const a = {}
    for (const q of CAT_QUESTIONS) a[q] = 5
    expect(calcCatScore(a)).toBe(40)
  })

  it('mixed values sum correctly', () => {
    const a = {
      cough: 1, phlegm: 2, chestTightness: 3, breathlessness: 2,
      activityLimitation: 4, leavingHome: 3, sleep: 1, energy: 2,
    }
    expect(calcCatScore(a)).toBe(18)
  })

  it('returns null on missing answer', () => {
    const a = {}
    for (const q of CAT_QUESTIONS) a[q] = 1
    delete a.energy
    expect(calcCatScore(a)).toBe(null)
  })

  it('returns null on out-of-range value (-1 or 6)', () => {
    const a = {}
    for (const q of CAT_QUESTIONS) a[q] = 1
    a.cough = -1
    expect(calcCatScore(a)).toBe(null)
    a.cough = 6
    expect(calcCatScore(a)).toBe(null)
  })

  it('returns null on null/undefined input', () => {
    expect(calcCatScore(null)).toBe(null)
    expect(calcCatScore(undefined)).toBe(null)
  })
})

describe('classifyCat', () => {
  it('boundaries map correctly', () => {
    expect(classifyCat(0)).toBe('low')
    expect(classifyCat(9)).toBe('low')
    expect(classifyCat(10)).toBe('medium')
    expect(classifyCat(20)).toBe('medium')
    expect(classifyCat(21)).toBe('high')
    expect(classifyCat(30)).toBe('high')
    expect(classifyCat(31)).toBe('veryHigh')
    expect(classifyCat(40)).toBe('veryHigh')
  })

  it('returns null on invalid', () => {
    expect(classifyCat(-1)).toBe(null)
    expect(classifyCat(41)).toBe(null)
    expect(classifyCat(null)).toBe(null)
    expect(classifyCat('20')).toBe(null)
  })
})

describe('classifyMmrc', () => {
  it('grades 0–1 → lowSymptoms', () => {
    expect(classifyMmrc(0)).toBe('lowSymptoms')
    expect(classifyMmrc(1)).toBe('lowSymptoms')
  })

  it('grades 2–4 → highSymptoms', () => {
    expect(classifyMmrc(2)).toBe('highSymptoms')
    expect(classifyMmrc(3)).toBe('highSymptoms')
    expect(classifyMmrc(4)).toBe('highSymptoms')
  })

  it('returns null on invalid', () => {
    expect(classifyMmrc(-1)).toBe(null)
    expect(classifyMmrc(5)).toBe(null)
    expect(classifyMmrc(null)).toBe(null)
  })
})

describe('classifyGold', () => {
  it('group E when ≥2 moderate exacerbations', () => {
    expect(classifyGold({ mmrc: 0, catScore: 0, moderateCount: 2, hospitalized: false })).toBe('E')
  })

  it('group E when hospitalized', () => {
    expect(classifyGold({ mmrc: 0, catScore: 0, moderateCount: 0, hospitalized: true })).toBe('E')
  })

  it('group A — low symptoms, low risk', () => {
    expect(classifyGold({ mmrc: 1, catScore: 9, moderateCount: 1, hospitalized: false })).toBe('A')
  })

  it('group B — high symptoms (mMRC), low risk', () => {
    expect(classifyGold({ mmrc: 2, catScore: 5, moderateCount: 0, hospitalized: false })).toBe('B')
  })

  it('group B — high symptoms (CAT ≥ 10), low risk', () => {
    expect(classifyGold({ mmrc: 0, catScore: 15, moderateCount: 1, hospitalized: false })).toBe('B')
  })

  it('group A boundary: mMRC 1 + CAT 9 + 1 moderate', () => {
    expect(classifyGold({ mmrc: 1, catScore: 9, moderateCount: 1, hospitalized: false })).toBe('A')
  })

  it('returns null on invalid input', () => {
    expect(classifyGold(null)).toBe(null)
    expect(classifyGold({})).toBe(null)
    expect(classifyGold({ mmrc: 5, catScore: 10, moderateCount: 0, hospitalized: false })).toBe(null)
  })
})

describe('evaluateCopd', () => {
  it('combines fields and returns structured result (group A)', () => {
    const a = {}
    for (const q of CAT_QUESTIONS) a[q] = 1
    const r = evaluateCopd({ catAnswers: a, mmrc: 0, moderateCount: 0, hospitalized: false })
    expect(r).toMatchObject({
      catScore: 8,
      catCategory: 'low',
      mmrc: 0,
      mmrcCategory: 'lowSymptoms',
      moderateCount: 0,
      hospitalized: false,
      goldGroup: 'A',
    })
  })

  it('group E with high CAT and 2 moderate exacerbations', () => {
    const a = {}
    for (const q of CAT_QUESTIONS) a[q] = 4
    const r = evaluateCopd({ catAnswers: a, mmrc: 3, moderateCount: 2, hospitalized: false })
    expect(r.catScore).toBe(32)
    expect(r.catCategory).toBe('veryHigh')
    expect(r.mmrcCategory).toBe('highSymptoms')
    expect(r.goldGroup).toBe('E')
  })

  it('returns null on incomplete CAT answers', () => {
    const a = {}
    for (const q of CAT_QUESTIONS) a[q] = 2
    delete a.energy
    expect(evaluateCopd({ catAnswers: a, mmrc: 1, moderateCount: 0, hospitalized: false })).toBe(null)
  })

  it('returns null on invalid mmrc', () => {
    const a = {}
    for (const q of CAT_QUESTIONS) a[q] = 0
    expect(evaluateCopd({ catAnswers: a, mmrc: 9, moderateCount: 0, hospitalized: false })).toBe(null)
  })

  it('returns null on null input', () => {
    expect(evaluateCopd(null)).toBe(null)
  })
})
