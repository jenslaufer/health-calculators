import { describe, it, expect } from 'vitest'
import {
  calcPmsSymptom,
  PSST_CORE_ITEMS,
  PSST_OTHER_ITEMS,
  PSST_IMPAIRMENT_ITEMS,
} from '../utils/pmsSymptom.js'

function emptyScores() {
  return Object.fromEntries(
    [...PSST_CORE_ITEMS, ...PSST_OTHER_ITEMS, ...PSST_IMPAIRMENT_ITEMS].map(k => [k, 0])
  )
}

describe('PMS symptom screening — empty input', () => {
  it('no input returns category none', () => {
    const result = calcPmsSymptom({})
    expect(result.category).toBe('none')
    expect(result.symptomTotal).toBe(0)
    expect(result.impairmentTotal).toBe(0)
    expect(result.evaluationRecommended).toBe(false)
  })

  it('all zeros returns category none', () => {
    const result = calcPmsSymptom(emptyScores())
    expect(result.category).toBe('none')
  })
})

describe('PMS symptom screening — mild category', () => {
  it('one mild symptom → mild', () => {
    const scores = emptyScores()
    scores.fatigue = 1
    const result = calcPmsSymptom(scores)
    expect(result.category).toBe('mild')
    expect(result.evaluationRecommended).toBe(false)
  })

  it('moderate symptom but no impairment → mild', () => {
    const scores = emptyScores()
    scores.anger = 2
    scores.fatigue = 2
    scores.insomnia = 2
    scores.overeating = 2
    scores.concentration = 2
    const result = calcPmsSymptom(scores)
    expect(result.category).toBe('mild')
  })
})

describe('PMS symptom screening — moderate/severe PMS', () => {
  it('1 core moderate + 4 other moderate + 1 impairment moderate → moderate/severe PMS', () => {
    const scores = emptyScores()
    scores.anger = 2
    scores.fatigue = 2
    scores.insomnia = 2
    scores.overeating = 2
    scores.concentration = 2
    scores.workEfficiency = 2
    const result = calcPmsSymptom(scores)
    expect(result.category).toBe('moderateSevere')
    expect(result.evaluationRecommended).toBe(true)
  })

  it('all core mod/severe + 4 other mod + impairment severe → still moderate/severe (not PMDD since no core severe)', () => {
    const scores = emptyScores()
    scores.anger = 2
    scores.anxiety = 2
    scores.tearful = 2
    scores.depressed = 2
    scores.fatigue = 2
    scores.insomnia = 2
    scores.overeating = 2
    scores.concentration = 2
    scores.workEfficiency = 3
    const result = calcPmsSymptom(scores)
    expect(result.category).toBe('moderateSevere')
  })
})

describe('PMS symptom screening — PMDD', () => {
  it('1 core severe + 4 additional moderate + 1 impairment severe → PMDD', () => {
    const scores = emptyScores()
    scores.depressed = 3
    scores.fatigue = 2
    scores.insomnia = 2
    scores.overeating = 2
    scores.concentration = 2
    scores.workEfficiency = 3
    const result = calcPmsSymptom(scores)
    expect(result.category).toBe('pmdd')
    expect(result.evaluationRecommended).toBe(true)
  })

  it('all core severe + many other severe + impairment severe → PMDD', () => {
    const scores = emptyScores()
    for (const k of PSST_CORE_ITEMS) scores[k] = 3
    for (const k of PSST_OTHER_ITEMS) scores[k] = 3
    for (const k of PSST_IMPAIRMENT_ITEMS) scores[k] = 3
    const result = calcPmsSymptom(scores)
    expect(result.category).toBe('pmdd')
    expect(result.symptomTotal).toBe(14 * 3)
    expect(result.impairmentTotal).toBe(5 * 3)
  })

  it('core severe but no impairment → moderate/severe (not PMDD)', () => {
    const scores = emptyScores()
    scores.anger = 3
    scores.fatigue = 2
    scores.insomnia = 2
    scores.overeating = 2
    scores.concentration = 2
    scores.workEfficiency = 2
    const result = calcPmsSymptom(scores)
    expect(result.category).toBe('moderateSevere')
  })
})

describe('PMS symptom screening — input validation', () => {
  it('clamps out-of-range values', () => {
    const scores = emptyScores()
    scores.anger = 99
    scores.fatigue = -5
    const result = calcPmsSymptom(scores)
    expect(result.scores.anger).toBe(3)
    expect(result.scores.fatigue).toBe(0)
  })

  it('handles non-numeric input', () => {
    const result = calcPmsSymptom({ anger: 'high', fatigue: null })
    expect(result.scores.anger).toBe(0)
    expect(result.scores.fatigue).toBe(0)
  })
})
