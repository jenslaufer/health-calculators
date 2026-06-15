import { describe, it, expect } from 'vitest'
import {
  PHQ9_QUESTIONS,
  calcPhq9Score,
  classifyPhq9,
  needsEvaluation,
  item9Flag,
  evaluatePhq9,
} from '../utils/phq9.js'

// PHQ-9 — Patient Health Questionnaire 9-item depression scale (Kroenke, Spitzer & Williams, J Gen Intern Med, 2001)
// 9 questions, each scored 0–3, total 0–27.
//    0– 4 : Minimal
//    5– 9 : Mild
//   10–14 : Moderate
//   15–19 : ModeratelySevere
//   20–27 : Severe
// needsEvaluation: score >= 10
// item9Flag: item 9 (self-harm) answer >= 1 — independent of the total score

// Build an answers object from an array of 9 values in canonical item order.
const fromArray = (vals) =>
  Object.fromEntries(PHQ9_QUESTIONS.map((q, i) => [q, vals[i]]))

const FULL = (v) => fromArray(Array(9).fill(v))

describe('PHQ9_QUESTIONS', () => {
  it('exposes 9 question keys', () => {
    expect(PHQ9_QUESTIONS).toHaveLength(9)
  })

  it('uses canonical keys in item order (1..9)', () => {
    expect(PHQ9_QUESTIONS).toEqual([
      'littleInterest',
      'feelingDown',
      'sleepTrouble',
      'tiredLowEnergy',
      'appetiteProblems',
      'feelingBadAboutSelf',
      'troubleConcentrating',
      'movingSlowlyOrRestless',
      'selfHarmThoughts',
    ])
  })
})

describe('calcPhq9Score', () => {
  it('all zeros → 0', () => {
    expect(calcPhq9Score(FULL(0))).toBe(0)
  })

  it('all threes → 27', () => {
    expect(calcPhq9Score(FULL(3))).toBe(27)
  })

  it('mixed answers [2,2,2,1,1,1,1,0,0] → 10', () => {
    expect(calcPhq9Score(fromArray([2, 2, 2, 1, 1, 1, 1, 0, 0]))).toBe(10)
  })

  it('returns null on missing answer', () => {
    const a = FULL(1)
    delete a.troubleConcentrating
    expect(calcPhq9Score(a)).toBe(null)
  })

  it('returns null on out-of-range value (-1)', () => {
    expect(calcPhq9Score({ ...FULL(1), littleInterest: -1 })).toBe(null)
  })

  it('returns null on out-of-range value (4)', () => {
    expect(calcPhq9Score({ ...FULL(1), littleInterest: 4 })).toBe(null)
  })

  it('returns null on non-integer (1.5)', () => {
    expect(calcPhq9Score({ ...FULL(1), littleInterest: 1.5 })).toBe(null)
  })

  it('returns null on null/undefined input', () => {
    expect(calcPhq9Score(null)).toBe(null)
    expect(calcPhq9Score(undefined)).toBe(null)
  })
})

describe('classifyPhq9 — verbatim 5-band severity scale', () => {
  it('0 → Minimal', () => { expect(classifyPhq9(0)).toBe('Minimal') })
  it('4 → Minimal (upper boundary)', () => { expect(classifyPhq9(4)).toBe('Minimal') })
  it('5 → Mild (lower boundary)', () => { expect(classifyPhq9(5)).toBe('Mild') })
  it('9 → Mild (upper boundary)', () => { expect(classifyPhq9(9)).toBe('Mild') })
  it('10 → Moderate (lower boundary)', () => { expect(classifyPhq9(10)).toBe('Moderate') })
  it('14 → Moderate (upper boundary)', () => { expect(classifyPhq9(14)).toBe('Moderate') })
  it('15 → ModeratelySevere (lower boundary)', () => { expect(classifyPhq9(15)).toBe('ModeratelySevere') })
  it('19 → ModeratelySevere (upper boundary)', () => { expect(classifyPhq9(19)).toBe('ModeratelySevere') })
  it('20 → Severe (lower boundary)', () => { expect(classifyPhq9(20)).toBe('Severe') })
  it('27 → Severe (maximum)', () => { expect(classifyPhq9(27)).toBe('Severe') })

  it('returns null for out-of-range or invalid', () => {
    expect(classifyPhq9(-1)).toBe(null)
    expect(classifyPhq9(28)).toBe(null)
    expect(classifyPhq9(null)).toBe(null)
    expect(classifyPhq9('10')).toBe(null)
  })
})

describe('needsEvaluation — cutoff at 10', () => {
  it('9 → false', () => { expect(needsEvaluation(9)).toBe(false) })
  it('10 → true (cutoff)', () => { expect(needsEvaluation(10)).toBe(true) })
  it('19 → true', () => { expect(needsEvaluation(19)).toBe(true) })
  it('27 → true', () => { expect(needsEvaluation(27)).toBe(true) })
  it('0 → false', () => { expect(needsEvaluation(0)).toBe(false) })
  it('non-number → false', () => {
    expect(needsEvaluation(null)).toBe(false)
    expect(needsEvaluation('10')).toBe(false)
  })
})

describe('item9Flag — self-harm safety flag, independent of total', () => {
  it('item 9 = 0 → false', () => {
    expect(item9Flag(FULL(0))).toBe(false)
  })
  it('item 9 = 1 → true', () => {
    expect(item9Flag(fromArray([0, 0, 0, 0, 0, 0, 0, 0, 1]))).toBe(true)
  })
  it('item 9 = 2 with otherwise-zero answers → true (low total, flag still fires)', () => {
    expect(item9Flag(fromArray([0, 0, 0, 0, 0, 0, 0, 0, 2]))).toBe(true)
  })
  it('item 9 = 3 → true', () => {
    expect(item9Flag(fromArray([0, 0, 0, 0, 0, 0, 0, 0, 3]))).toBe(true)
  })
  it('all 1 → true (item 9 = 1)', () => {
    expect(item9Flag(FULL(1))).toBe(true)
  })
  it('invalid/missing item 9 → false', () => {
    expect(item9Flag({})).toBe(false)
    expect(item9Flag(null)).toBe(false)
  })
})

describe('evaluatePhq9 — six worked examples from issue #286', () => {
  it('all 0 → score 0, Minimal, no evaluation, no item-9 flag', () => {
    expect(evaluatePhq9(FULL(0))).toEqual({
      score: 0, band: 'Minimal', needsEvaluation: false, item9Flag: false,
    })
  })

  it('all 1 → score 9, Mild, no evaluation, item-9 flag TRUE', () => {
    expect(evaluatePhq9(FULL(1))).toEqual({
      score: 9, band: 'Mild', needsEvaluation: false, item9Flag: true,
    })
  })

  it('all 3 → score 27, Severe, needsEvaluation, item-9 flag', () => {
    expect(evaluatePhq9(FULL(3))).toEqual({
      score: 27, band: 'Severe', needsEvaluation: true, item9Flag: true,
    })
  })

  it('[2,2,2,1,1,1,1,0,0] → score 10, Moderate, needsEvaluation, no item-9 flag', () => {
    expect(evaluatePhq9(fromArray([2, 2, 2, 1, 1, 1, 1, 0, 0]))).toEqual({
      score: 10, band: 'Moderate', needsEvaluation: true, item9Flag: false,
    })
  })

  it('[3,3,3,2,2,2,2,2,0] → score 19, ModeratelySevere, needsEvaluation, no item-9 flag', () => {
    expect(evaluatePhq9(fromArray([3, 3, 3, 2, 2, 2, 2, 2, 0]))).toEqual({
      score: 19, band: 'ModeratelySevere', needsEvaluation: true, item9Flag: false,
    })
  })

  it('[0,0,0,0,0,0,0,0,2] → score 2, Minimal, no evaluation, item-9 flag TRUE (critical case)', () => {
    expect(evaluatePhq9(fromArray([0, 0, 0, 0, 0, 0, 0, 0, 2]))).toEqual({
      score: 2, band: 'Minimal', needsEvaluation: false, item9Flag: true,
    })
  })

  it('returns null on incomplete answers', () => {
    expect(evaluatePhq9({ littleInterest: 1 })).toBe(null)
  })

  it('returns null on null input', () => {
    expect(evaluatePhq9(null)).toBe(null)
  })
})
