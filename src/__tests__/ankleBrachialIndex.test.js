import { describe, it, expect } from 'vitest'
import {
  calcAbi,
  getAbiBand,
  bandColor,
  bandBg,
  formatAbi,
} from '../utils/ankleBrachialIndex.js'

describe('ABI formula', () => {
  it('uses higher brachial pressure as denominator', () => {
    const r = calcAbi({ leftArm: 130, rightArm: 140, leftAnkle: 140, rightAnkle: 140 })
    // brachial = max(130, 140) = 140
    expect(r.brachial).toBe(140)
    expect(r.left).toBeCloseTo(1.0, 3)
    expect(r.right).toBeCloseTo(1.0, 3)
  })

  it('returns null for missing inputs', () => {
    expect(calcAbi({ leftArm: 120, rightArm: 120, leftAnkle: 120, rightAnkle: null })).toBeNull()
    expect(calcAbi({ leftArm: null, rightArm: 120, leftAnkle: 120, rightAnkle: 120 })).toBeNull()
  })

  it('overall ABI is the lower of left and right per ACC/AHA', () => {
    // Asymmetric: left ankle low, right ankle normal
    const r = calcAbi({ leftArm: 140, rightArm: 140, leftAnkle: 100, rightAnkle: 140 })
    expect(r.left).toBeCloseTo(100 / 140, 3) // ≈ 0.714
    expect(r.right).toBeCloseTo(1.0, 3)
    expect(r.overall).toBeCloseTo(100 / 140, 3)
  })

  it('identical arms vs differing arms — picks max for denominator', () => {
    const identical = calcAbi({ leftArm: 140, rightArm: 140, leftAnkle: 140, rightAnkle: 140 })
    const differing = calcAbi({ leftArm: 120, rightArm: 140, leftAnkle: 140, rightAnkle: 140 })
    expect(identical.overall).toBeCloseTo(1.0, 3)
    expect(differing.overall).toBeCloseTo(1.0, 3)
    expect(differing.brachial).toBe(140)
  })
})

describe('ABI bands — all six categories', () => {
  it('≤ 0.5 → severely reduced', () => {
    expect(getAbiBand(0.5)).toBe('severe')
    expect(getAbiBand(0.3)).toBe('severe')
  })

  it('0.5 – 0.79 → moderate', () => {
    expect(getAbiBand(0.51)).toBe('moderate')
    expect(getAbiBand(0.7)).toBe('moderate')
    expect(getAbiBand(0.79)).toBe('moderate')
  })

  it('0.8 – 0.89 → mild', () => {
    expect(getAbiBand(0.8)).toBe('mild')
    expect(getAbiBand(0.85)).toBe('mild')
    expect(getAbiBand(0.89)).toBe('mild')
  })

  it('0.9 – 0.99 → borderline', () => {
    expect(getAbiBand(0.9)).toBe('borderline')
    expect(getAbiBand(0.95)).toBe('borderline')
    expect(getAbiBand(0.99)).toBe('borderline')
  })

  it('1.0 – 1.4 → normal', () => {
    expect(getAbiBand(1.0)).toBe('normal')
    expect(getAbiBand(1.2)).toBe('normal')
    expect(getAbiBand(1.4)).toBe('normal')
  })

  it('> 1.4 → non-compressible', () => {
    expect(getAbiBand(1.41)).toBe('nonCompressible')
    expect(getAbiBand(1.6)).toBe('nonCompressible')
  })

  it('returns null for invalid input', () => {
    expect(getAbiBand(null)).toBeNull()
    expect(getAbiBand(NaN)).toBeNull()
  })
})

describe('asymmetric left/right scenarios', () => {
  it('PAD on left, healthy right — overall ABI flags left disease', () => {
    const r = calcAbi({ leftArm: 130, rightArm: 135, leftAnkle: 90, rightAnkle: 140 })
    expect(getAbiBand(r.left)).toBe('moderate') // 90/135 ≈ 0.667
    expect(getAbiBand(r.right)).toBe('normal') // 140/135 ≈ 1.037
    expect(getAbiBand(r.overall)).toBe('moderate')
  })

  it('severe PAD on right, mild on left → overall = severe right', () => {
    const r = calcAbi({ leftArm: 140, rightArm: 140, leftAnkle: 115, rightAnkle: 65 })
    // left 115/140 ≈ 0.821 (mild), right 65/140 ≈ 0.464 (severe)
    expect(getAbiBand(r.left)).toBe('mild')
    expect(getAbiBand(r.right)).toBe('severe')
    expect(getAbiBand(r.overall)).toBe('severe')
  })
})

describe('end-to-end clinical scenarios', () => {
  it('normal example: arms 130/130, ankles 140/140 → 1.077 normal', () => {
    const r = calcAbi({ leftArm: 130, rightArm: 130, leftAnkle: 140, rightAnkle: 140 })
    expect(r.overall).toBeCloseTo(1.077, 2)
    expect(getAbiBand(r.overall)).toBe('normal')
  })

  it('non-compressible: diabetic with calcified vessels — ankle 220, arm 140 → 1.57 → non-compressible', () => {
    const r = calcAbi({ leftArm: 140, rightArm: 140, leftAnkle: 220, rightAnkle: 220 })
    expect(r.overall).toBeCloseTo(1.571, 2)
    expect(getAbiBand(r.overall)).toBe('nonCompressible')
  })
})

describe('style helpers', () => {
  it('returns distinct colors per band', () => {
    expect(bandColor('normal')).toMatch(/text-/)
    expect(bandColor('severe')).toMatch(/text-/)
    expect(bandColor('normal')).not.toBe(bandColor('severe'))
  })

  it('returns distinct backgrounds per band', () => {
    expect(bandBg('normal')).toMatch(/bg-/)
    expect(bandBg('nonCompressible')).toMatch(/bg-/)
  })
})

describe('formatAbi', () => {
  it('formats to 2 decimals', () => {
    expect(formatAbi(1.077)).toBe('1.08')
    expect(formatAbi(0.5)).toBe('0.50')
  })
  it('returns em-dash for null', () => {
    expect(formatAbi(null)).toBe('—')
  })
})
