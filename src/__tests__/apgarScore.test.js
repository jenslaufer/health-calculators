import { describe, it, expect } from 'vitest'
import {
  calcApgarScore,
  classifyApgar,
  evaluateApgar,
  APGAR_COMPONENTS,
} from '../utils/apgarScore.js'

// APGAR (Apgar V, 1953) — newborn assessment scoring 5 components 0/1/2 each:
//   appearance, pulse, grimace, activity, respiration → total 0–10
// Categories:
//   7–10  reassuring (normal)
//   4–6   moderate (intervention often needed)
//   0–3   critical (immediate resuscitation)

const ALL_TWOS = {
  appearance: 2, pulse: 2, grimace: 2, activity: 2, respiration: 2,
}
const ALL_ZEROS = {
  appearance: 0, pulse: 0, grimace: 0, activity: 0, respiration: 0,
}
const MIXED_FIVE = {
  appearance: 1, pulse: 1, grimace: 1, activity: 1, respiration: 1,
}

describe('APGAR_COMPONENTS', () => {
  it('exposes the 5 component names in standard order', () => {
    expect(APGAR_COMPONENTS).toEqual(['appearance', 'pulse', 'grimace', 'activity', 'respiration'])
  })
})

describe('calcApgarScore', () => {
  it('all 2s → 10', () => {
    expect(calcApgarScore(ALL_TWOS)).toBe(10)
  })

  it('all 0s → 0', () => {
    expect(calcApgarScore(ALL_ZEROS)).toBe(0)
  })

  it('all 1s → 5', () => {
    expect(calcApgarScore(MIXED_FIVE)).toBe(5)
  })

  it('mixed values sum correctly', () => {
    expect(calcApgarScore({ appearance: 2, pulse: 2, grimace: 1, activity: 2, respiration: 1 })).toBe(8)
  })

  it('returns null when a component is missing', () => {
    expect(calcApgarScore({ appearance: 2, pulse: 2, grimace: 2, activity: 2 })).toBeNull()
  })

  it('returns null when a component is out of range', () => {
    expect(calcApgarScore({ ...ALL_TWOS, pulse: 3 })).toBeNull()
    expect(calcApgarScore({ ...ALL_TWOS, pulse: -1 })).toBeNull()
  })

  it('returns null for non-object input', () => {
    expect(calcApgarScore(null)).toBeNull()
    expect(calcApgarScore(undefined)).toBeNull()
  })
})

describe('classifyApgar', () => {
  it('10 → reassuring', () => {
    expect(classifyApgar(10)).toBe('reassuring')
  })

  it('7 → reassuring (boundary)', () => {
    expect(classifyApgar(7)).toBe('reassuring')
  })

  it('6 → moderate', () => {
    expect(classifyApgar(6)).toBe('moderate')
  })

  it('4 → moderate (boundary)', () => {
    expect(classifyApgar(4)).toBe('moderate')
  })

  it('3 → critical', () => {
    expect(classifyApgar(3)).toBe('critical')
  })

  it('0 → critical', () => {
    expect(classifyApgar(0)).toBe('critical')
  })

  it('returns null for invalid input', () => {
    expect(classifyApgar(null)).toBeNull()
    expect(classifyApgar(-1)).toBeNull()
    expect(classifyApgar(11)).toBeNull()
    expect(classifyApgar('5')).toBeNull()
  })
})

describe('evaluateApgar', () => {
  it('healthy newborn (1min=9, 5min=10) → reassuring + reassuring, no extended', () => {
    const r = evaluateApgar({
      oneMinute: { ...ALL_TWOS, appearance: 1 },
      fiveMinute: ALL_TWOS,
    })
    expect(r.oneMinute.total).toBe(9)
    expect(r.oneMinute.category).toBe('reassuring')
    expect(r.fiveMinute.total).toBe(10)
    expect(r.fiveMinute.category).toBe('reassuring')
    expect(r.needsExtended).toBe(false)
  })

  it('depressed newborn (1min=4, 5min=6) → moderate + moderate, needs extended', () => {
    const r = evaluateApgar({
      oneMinute: { appearance: 1, pulse: 1, grimace: 0, activity: 1, respiration: 1 },
      fiveMinute: { appearance: 2, pulse: 1, grimace: 1, activity: 1, respiration: 1 },
    })
    expect(r.oneMinute.total).toBe(4)
    expect(r.oneMinute.category).toBe('moderate')
    expect(r.fiveMinute.total).toBe(6)
    expect(r.fiveMinute.category).toBe('moderate')
    expect(r.needsExtended).toBe(true)
  })

  it('critical newborn (1min=2, 5min=3) → both critical, needs extended', () => {
    const r = evaluateApgar({
      oneMinute: { appearance: 1, pulse: 1, grimace: 0, activity: 0, respiration: 0 },
      fiveMinute: { appearance: 1, pulse: 1, grimace: 1, activity: 0, respiration: 0 },
    })
    expect(r.oneMinute.category).toBe('critical')
    expect(r.fiveMinute.category).toBe('critical')
    expect(r.needsExtended).toBe(true)
  })

  it('5-minute score of 7 → reassuring, no extended needed', () => {
    const r = evaluateApgar({
      oneMinute: { ...ALL_TWOS, appearance: 1 },
      fiveMinute: { appearance: 1, pulse: 2, grimace: 1, activity: 1, respiration: 2 },
    })
    expect(r.fiveMinute.total).toBe(7)
    expect(r.fiveMinute.category).toBe('reassuring')
    expect(r.needsExtended).toBe(false)
  })

  it('returns nulls when scores incomplete', () => {
    const r = evaluateApgar({ oneMinute: {}, fiveMinute: {} })
    expect(r.oneMinute.total).toBeNull()
    expect(r.oneMinute.category).toBeNull()
    expect(r.fiveMinute.total).toBeNull()
    expect(r.needsExtended).toBe(false)
  })

  it('handles partial input (only 1-min scored)', () => {
    const r = evaluateApgar({
      oneMinute: ALL_TWOS,
      fiveMinute: { appearance: 2 },
    })
    expect(r.oneMinute.total).toBe(10)
    expect(r.fiveMinute.total).toBeNull()
  })
})
