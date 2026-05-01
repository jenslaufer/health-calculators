import { describe, it, expect } from 'vitest'
import { calcIief5Score, classifyIief5, calcIief5Result } from '../utils/erectileDysfunction.js'

describe('IIEF-5 score calculation', () => {
  it('all 5s → 25 (no ED)', () => {
    expect(calcIief5Score([5, 5, 5, 5, 5])).toBe(25)
  })

  it('all 1s → 5 (severe ED)', () => {
    expect(calcIief5Score([1, 1, 1, 1, 1])).toBe(5)
  })

  it('mixed answers → correct sum', () => {
    expect(calcIief5Score([4, 3, 5, 2, 4])).toBe(18)
  })

  it('returns null when any answer missing (null)', () => {
    expect(calcIief5Score([5, null, 5, 5, 5])).toBeNull()
  })

  it('returns null when fewer than 5 answers', () => {
    expect(calcIief5Score([5, 5, 5, 5])).toBeNull()
  })

  it('returns null for out-of-range values (0 or 6)', () => {
    expect(calcIief5Score([0, 5, 5, 5, 5])).toBeNull()
    expect(calcIief5Score([5, 6, 5, 5, 5])).toBeNull()
  })
})

describe('IIEF-5 severity classification', () => {
  it('25 → noEd', () => {
    expect(classifyIief5(25)).toBe('noEd')
  })

  it('22 → noEd (lower bound)', () => {
    expect(classifyIief5(22)).toBe('noEd')
  })

  it('21 → mild', () => {
    expect(classifyIief5(21)).toBe('mild')
  })

  it('17 → mild (lower bound)', () => {
    expect(classifyIief5(17)).toBe('mild')
  })

  it('16 → mildModerate', () => {
    expect(classifyIief5(16)).toBe('mildModerate')
  })

  it('12 → mildModerate (lower bound)', () => {
    expect(classifyIief5(12)).toBe('mildModerate')
  })

  it('11 → moderate', () => {
    expect(classifyIief5(11)).toBe('moderate')
  })

  it('8 → moderate (lower bound)', () => {
    expect(classifyIief5(8)).toBe('moderate')
  })

  it('7 → severe', () => {
    expect(classifyIief5(7)).toBe('severe')
  })

  it('5 → severe (lower bound)', () => {
    expect(classifyIief5(5)).toBe('severe')
  })

  it('out-of-range or null → null', () => {
    expect(classifyIief5(null)).toBeNull()
    expect(classifyIief5(4)).toBeNull()
    expect(classifyIief5(26)).toBeNull()
  })
})

describe('IIEF-5 combined result', () => {
  it('all 5s → score 25, noEd, hasEd=false', () => {
    const r = calcIief5Result([5, 5, 5, 5, 5])
    expect(r.score).toBe(25)
    expect(r.severity).toBe('noEd')
    expect(r.hasEd).toBe(false)
  })

  it('all 3s → score 15, mildModerate, hasEd=true', () => {
    const r = calcIief5Result([3, 3, 3, 3, 3])
    expect(r.score).toBe(15)
    expect(r.severity).toBe('mildModerate')
    expect(r.hasEd).toBe(true)
  })

  it('all 1s → score 5, severe, hasEd=true', () => {
    const r = calcIief5Result([1, 1, 1, 1, 1])
    expect(r.score).toBe(5)
    expect(r.severity).toBe('severe')
    expect(r.hasEd).toBe(true)
  })

  it('returns null when answers incomplete', () => {
    expect(calcIief5Result([5, 5, null, 5, 5])).toBeNull()
  })
})
