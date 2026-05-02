import { describe, it, expect } from 'vitest'
import {
  calcNorwoodScore,
  classifyNorwood,
  calcMalePatternResult,
  NORWOOD_STAGES,
} from '../utils/malePattern.js'

describe('Norwood score calculation', () => {
  it('all 1s → 4 (no loss)', () => {
    expect(calcNorwoodScore([1, 1, 1, 1])).toBe(4)
  })

  it('all 5s → 20 (most severe)', () => {
    expect(calcNorwoodScore([5, 5, 5, 5])).toBe(20)
  })

  it('mixed answers → correct sum', () => {
    expect(calcNorwoodScore([3, 4, 2, 5])).toBe(14)
  })

  it('returns null when any answer is null', () => {
    expect(calcNorwoodScore([3, null, 3, 3])).toBeNull()
  })

  it('returns null when fewer than 4 answers', () => {
    expect(calcNorwoodScore([3, 3, 3])).toBeNull()
  })

  it('returns null for out-of-range values', () => {
    expect(calcNorwoodScore([0, 3, 3, 3])).toBeNull()
    expect(calcNorwoodScore([3, 6, 3, 3])).toBeNull()
  })

  it('returns null when input is not an array', () => {
    expect(calcNorwoodScore(null)).toBeNull()
    expect(calcNorwoodScore('1234')).toBeNull()
  })
})

describe('Norwood stage classification', () => {
  it('4 → stage 1 (no loss)', () => {
    expect(classifyNorwood(4)).toBe('1')
  })

  it('5 → stage 1 (upper bound)', () => {
    expect(classifyNorwood(5)).toBe('1')
  })

  it('6 → stage 2 (mature hairline)', () => {
    expect(classifyNorwood(6)).toBe('2')
  })

  it('7 → stage 2 (upper bound)', () => {
    expect(classifyNorwood(7)).toBe('2')
  })

  it('9 → stage 3', () => {
    expect(classifyNorwood(9)).toBe('3')
  })

  it('11 → stage 3v', () => {
    expect(classifyNorwood(11)).toBe('3v')
  })

  it('13 → stage 4', () => {
    expect(classifyNorwood(13)).toBe('4')
  })

  it('15 → stage 5', () => {
    expect(classifyNorwood(15)).toBe('5')
  })

  it('17 → stage 6', () => {
    expect(classifyNorwood(17)).toBe('6')
  })

  it('20 → stage 7 (most severe)', () => {
    expect(classifyNorwood(20)).toBe('7')
  })

  it('out-of-range or null → null', () => {
    expect(classifyNorwood(null)).toBeNull()
    expect(classifyNorwood(3)).toBeNull()
    expect(classifyNorwood(21)).toBeNull()
  })
})

describe('Norwood combined result', () => {
  it('all 1s → score 4, stage 1, no loss', () => {
    const r = calcMalePatternResult([1, 1, 1, 1])
    expect(r.score).toBe(4)
    expect(r.stage).toBe('1')
    expect(r.hasLoss).toBe(false)
    expect(r.isAdvanced).toBe(false)
  })

  it('mid-range → moderate stage', () => {
    const r = calcMalePatternResult([3, 3, 3, 3])
    expect(r.score).toBe(12)
    expect(r.stage).toBe('4')
    expect(r.hasLoss).toBe(true)
    expect(r.isAdvanced).toBe(true)
  })

  it('all 5s → score 20, stage 7, advanced', () => {
    const r = calcMalePatternResult([5, 5, 5, 5])
    expect(r.score).toBe(20)
    expect(r.stage).toBe('7')
    expect(r.hasLoss).toBe(true)
    expect(r.isAdvanced).toBe(true)
  })

  it('returns null when answers incomplete', () => {
    expect(calcMalePatternResult([5, 5, null, 5])).toBeNull()
  })

  it('exposes 8 Norwood stages in order', () => {
    expect(NORWOOD_STAGES).toEqual(['1', '2', '3', '3v', '4', '5', '6', '7'])
  })
})
