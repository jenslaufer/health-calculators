import { describe, it, expect } from 'vitest'
import {
  GAD7_QUESTIONS,
  calcGad7Score,
  classifyGad7,
  needsEvaluation,
  evaluateGad7,
} from '../utils/gad7.js'

// GAD-7 — Generalized Anxiety Disorder 7-item scale (Spitzer et al., Arch Intern Med, 2006)
// 7 questions, each scored 0–3, total 0–21.
//    0– 4 : Minimal
//    5– 9 : Mild
//   10–14 : Moderate
//   15–21 : Severe
// needsEvaluation: score >= 10

const FULL = (v) => ({
  feelingNervous: v,
  cantStopWorrying: v,
  worryingTooMuch: v,
  troubleRelaxing: v,
  restless: v,
  irritable: v,
  afraidSomethingAwful: v,
})

describe('GAD7_QUESTIONS', () => {
  it('exposes 7 question keys', () => {
    expect(GAD7_QUESTIONS).toHaveLength(7)
  })

  it('uses canonical keys in order', () => {
    expect(GAD7_QUESTIONS).toEqual([
      'feelingNervous',
      'cantStopWorrying',
      'worryingTooMuch',
      'troubleRelaxing',
      'restless',
      'irritable',
      'afraidSomethingAwful',
    ])
  })
})

describe('calcGad7Score', () => {
  it('all zeros → 0', () => {
    expect(calcGad7Score(FULL(0))).toBe(0)
  })

  it('all threes → 21', () => {
    expect(calcGad7Score(FULL(3))).toBe(21)
  })

  it('mixed answers sum: 1+2+0+3+1+2+1 → 10', () => {
    expect(calcGad7Score({
      feelingNervous: 1, cantStopWorrying: 2, worryingTooMuch: 0,
      troubleRelaxing: 3, restless: 1, irritable: 2, afraidSomethingAwful: 1,
    })).toBe(10)
  })

  it('returns null on missing answer', () => {
    const a = FULL(1)
    delete a.irritable
    expect(calcGad7Score(a)).toBe(null)
  })

  it('returns null on out-of-range value (-1)', () => {
    expect(calcGad7Score({ ...FULL(1), feelingNervous: -1 })).toBe(null)
  })

  it('returns null on out-of-range value (4)', () => {
    expect(calcGad7Score({ ...FULL(1), feelingNervous: 4 })).toBe(null)
  })

  it('returns null on non-integer (1.5)', () => {
    expect(calcGad7Score({ ...FULL(1), feelingNervous: 1.5 })).toBe(null)
  })

  it('returns null on null/undefined input', () => {
    expect(calcGad7Score(null)).toBe(null)
    expect(calcGad7Score(undefined)).toBe(null)
  })
})

describe('classifyGad7 — verbatim severity bands', () => {
  it('0 → Minimal', () => { expect(classifyGad7(0)).toBe('Minimal') })
  it('4 → Minimal (upper boundary)', () => { expect(classifyGad7(4)).toBe('Minimal') })
  it('5 → Mild (lower boundary)', () => { expect(classifyGad7(5)).toBe('Mild') })
  it('9 → Mild (upper boundary)', () => { expect(classifyGad7(9)).toBe('Mild') })
  it('10 → Moderate (lower boundary)', () => { expect(classifyGad7(10)).toBe('Moderate') })
  it('14 → Moderate (upper boundary)', () => { expect(classifyGad7(14)).toBe('Moderate') })
  it('15 → Severe (lower boundary)', () => { expect(classifyGad7(15)).toBe('Severe') })
  it('21 → Severe (maximum)', () => { expect(classifyGad7(21)).toBe('Severe') })

  it('returns null for out-of-range or invalid', () => {
    expect(classifyGad7(-1)).toBe(null)
    expect(classifyGad7(22)).toBe(null)
    expect(classifyGad7(null)).toBe(null)
    expect(classifyGad7('10')).toBe(null)
  })
})

describe('needsEvaluation — cutoff at 10', () => {
  it('9 → false', () => { expect(needsEvaluation(9)).toBe(false) })
  it('10 → true (cutoff)', () => { expect(needsEvaluation(10)).toBe(true) })
  it('14 → true', () => { expect(needsEvaluation(14)).toBe(true) })
  it('21 → true', () => { expect(needsEvaluation(21)).toBe(true) })
  it('0 → false', () => { expect(needsEvaluation(0)).toBe(false) })
  it('non-number → false', () => {
    expect(needsEvaluation(null)).toBe(false)
    expect(needsEvaluation('10')).toBe(false)
  })
})

describe('evaluateGad7 (one-shot)', () => {
  it('all 0 → score 0, Minimal, no evaluation', () => {
    const r = evaluateGad7(FULL(0))
    expect(r).toEqual({ score: 0, band: 'Minimal', needsEvaluation: false })
  })

  it('all 3 → score 21, Severe, needsEvaluation', () => {
    const r = evaluateGad7(FULL(3))
    expect(r).toEqual({ score: 21, band: 'Severe', needsEvaluation: true })
  })

  it('mixed answers → score 10, Moderate, needsEvaluation', () => {
    const r = evaluateGad7({
      feelingNervous: 1, cantStopWorrying: 2, worryingTooMuch: 0,
      troubleRelaxing: 3, restless: 1, irritable: 2, afraidSomethingAwful: 1,
    })
    expect(r).toEqual({ score: 10, band: 'Moderate', needsEvaluation: true })
  })

  it('score 9 → Mild, no evaluation (just below cutoff)', () => {
    const r = evaluateGad7({
      feelingNervous: 2, cantStopWorrying: 2, worryingTooMuch: 1,
      troubleRelaxing: 1, restless: 1, irritable: 1, afraidSomethingAwful: 1,
    })
    expect(r.score).toBe(9)
    expect(r.band).toBe('Mild')
    expect(r.needsEvaluation).toBe(false)
  })

  it('score 5 → Mild (boundary)', () => {
    const r = evaluateGad7({
      feelingNervous: 1, cantStopWorrying: 1, worryingTooMuch: 1,
      troubleRelaxing: 1, restless: 1, irritable: 0, afraidSomethingAwful: 0,
    })
    expect(r.score).toBe(5)
    expect(r.band).toBe('Mild')
  })

  it('score 14 → Moderate (upper boundary)', () => {
    const r = evaluateGad7({
      feelingNervous: 2, cantStopWorrying: 2, worryingTooMuch: 2,
      troubleRelaxing: 2, restless: 2, irritable: 2, afraidSomethingAwful: 2,
    })
    expect(r.score).toBe(14)
    expect(r.band).toBe('Moderate')
    expect(r.needsEvaluation).toBe(true)
  })

  it('score 15 → Severe (lower boundary)', () => {
    const r = evaluateGad7({
      feelingNervous: 3, cantStopWorrying: 3, worryingTooMuch: 2,
      troubleRelaxing: 2, restless: 2, irritable: 2, afraidSomethingAwful: 1,
    })
    expect(r.score).toBe(15)
    expect(r.band).toBe('Severe')
  })

  it('returns null on incomplete answers', () => {
    expect(evaluateGad7({ feelingNervous: 1 })).toBe(null)
  })

  it('returns null on null input', () => {
    expect(evaluateGad7(null)).toBe(null)
  })
})
