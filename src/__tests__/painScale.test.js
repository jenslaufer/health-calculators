import { describe, it, expect } from 'vitest'
import {
  classifyPain,
  vasToNrs,
  nrsToVas,
  evaluatePainScore,
} from '../utils/painScale.js'

// Pain scales:
//   NRS  — Numeric Rating Scale, 0–10 integer.
//   VAS  — Visual Analog Scale, 0–100 mm continuous.
//   Wong-Baker FACES — 0, 2, 4, 6, 8, 10 (six-point scale).
//
// Standard categorical bands (Serlin et al. 1995, adopted by IASP / WHO):
//   0      → none
//   1–3    → mild
//   4–6    → moderate
//   7–10   → severe

describe('classifyPain — categorical bands on a 0–10 scale', () => {
  it('0 → none', () => {
    expect(classifyPain(0)).toBe('none')
  })

  it('1 → mild (lower bound)', () => {
    expect(classifyPain(1)).toBe('mild')
  })

  it('3 → mild (upper bound)', () => {
    expect(classifyPain(3)).toBe('mild')
  })

  it('4 → moderate (lower bound)', () => {
    expect(classifyPain(4)).toBe('moderate')
  })

  it('6 → moderate (upper bound)', () => {
    expect(classifyPain(6)).toBe('moderate')
  })

  it('7 → severe (lower bound)', () => {
    expect(classifyPain(7)).toBe('severe')
  })

  it('10 → severe (upper bound)', () => {
    expect(classifyPain(10)).toBe('severe')
  })

  it('decimal values are accepted (VAS conversion)', () => {
    expect(classifyPain(3.4)).toBe('mild')
    expect(classifyPain(6.5)).toBe('moderate')
  })

  it('returns null for invalid input', () => {
    expect(classifyPain(null)).toBe(null)
    expect(classifyPain(-1)).toBe(null)
    expect(classifyPain(11)).toBe(null)
    expect(classifyPain('5')).toBe(null)
    expect(classifyPain(NaN)).toBe(null)
  })
})

describe('vasToNrs — VAS (0–100 mm) → NRS (0–10)', () => {
  it('0 mm → 0', () => {
    expect(vasToNrs(0)).toBe(0)
  })

  it('50 mm → 5', () => {
    expect(vasToNrs(50)).toBe(5)
  })

  it('100 mm → 10', () => {
    expect(vasToNrs(100)).toBe(10)
  })

  it('33 mm → 3.3', () => {
    expect(vasToNrs(33)).toBeCloseTo(3.3, 2)
  })

  it('returns null for invalid input', () => {
    expect(vasToNrs(-1)).toBe(null)
    expect(vasToNrs(101)).toBe(null)
    expect(vasToNrs(null)).toBe(null)
    expect(vasToNrs('50')).toBe(null)
  })
})

describe('nrsToVas — NRS (0–10) → VAS (0–100 mm)', () => {
  it('0 → 0 mm', () => {
    expect(nrsToVas(0)).toBe(0)
  })

  it('5 → 50 mm', () => {
    expect(nrsToVas(5)).toBe(50)
  })

  it('10 → 100 mm', () => {
    expect(nrsToVas(10)).toBe(100)
  })

  it('returns null for invalid input', () => {
    expect(nrsToVas(-1)).toBe(null)
    expect(nrsToVas(11)).toBe(null)
    expect(nrsToVas(null)).toBe(null)
  })
})

describe('evaluatePainScore — combined pipeline', () => {
  it('NRS 7 → severe, vas 70', () => {
    const r = evaluatePainScore({ scale: 'nrs', value: 7 })
    expect(r.score).toBe(7)
    expect(r.category).toBe('severe')
    expect(r.vas).toBe(70)
  })

  it('VAS 25 mm → mild, score 2.5', () => {
    const r = evaluatePainScore({ scale: 'vas', value: 25 })
    expect(r.score).toBeCloseTo(2.5, 2)
    expect(r.category).toBe('mild')
    expect(r.vas).toBe(25)
  })

  it('Wong-Baker 6 → moderate', () => {
    const r = evaluatePainScore({ scale: 'wongBaker', value: 6 })
    expect(r.score).toBe(6)
    expect(r.category).toBe('moderate')
    expect(r.vas).toBe(60)
  })

  it('Wong-Baker rejects odd values', () => {
    expect(evaluatePainScore({ scale: 'wongBaker', value: 5 })).toBe(null)
    expect(evaluatePainScore({ scale: 'wongBaker', value: 3 })).toBe(null)
  })

  it('NRS rejects non-integer values', () => {
    expect(evaluatePainScore({ scale: 'nrs', value: 4.5 })).toBe(null)
  })

  it('returns null for unknown scale', () => {
    expect(evaluatePainScore({ scale: 'mystery', value: 5 })).toBe(null)
  })

  it('returns null for missing value', () => {
    expect(evaluatePainScore({ scale: 'nrs' })).toBe(null)
    expect(evaluatePainScore({})).toBe(null)
  })

  it('returns null for value outside scale range', () => {
    expect(evaluatePainScore({ scale: 'nrs', value: 12 })).toBe(null)
    expect(evaluatePainScore({ scale: 'vas', value: 110 })).toBe(null)
    expect(evaluatePainScore({ scale: 'wongBaker', value: 12 })).toBe(null)
  })
})
