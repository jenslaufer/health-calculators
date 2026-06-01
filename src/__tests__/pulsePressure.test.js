import { describe, it, expect } from 'vitest'
import {
  calcPulsePressure,
  getPulsePressureBand,
  getAgeContext,
  bandColor,
  bandBg,
  formatPp,
} from '../utils/pulsePressure.js'

describe('Pulse Pressure formula', () => {
  it('PP = SBP − DBP', () => {
    expect(calcPulsePressure(120, 80)).toBe(40)
    expect(calcPulsePressure(140, 70)).toBe(70)
    expect(calcPulsePressure(110, 75)).toBe(35)
  })

  it('returns null when inputs are missing or invalid', () => {
    expect(calcPulsePressure(null, 80)).toBeNull()
    expect(calcPulsePressure(120, null)).toBeNull()
    expect(calcPulsePressure('', '')).toBeNull()
    expect(calcPulsePressure(0, 0)).toBeNull()
    expect(calcPulsePressure(-1, 50)).toBeNull()
  })

  it('returns null if DBP exceeds SBP (physiologically impossible)', () => {
    expect(calcPulsePressure(80, 120)).toBeNull()
  })

  it('SBP = DBP edge case returns 0 pulse pressure', () => {
    expect(calcPulsePressure(100, 100)).toBe(0)
  })
})

describe('Pulse Pressure bands — all three categories', () => {
  it('< 40 → narrow (heart-failure / aortic-stenosis flag)', () => {
    expect(getPulsePressureBand(30)).toBe('narrow')
    expect(getPulsePressureBand(39)).toBe('narrow')
    expect(getPulsePressureBand(20)).toBe('narrow')
  })

  it('40 – 60 → normal', () => {
    expect(getPulsePressureBand(40)).toBe('normal')
    expect(getPulsePressureBand(50)).toBe('normal')
    expect(getPulsePressureBand(60)).toBe('normal')
  })

  it('> 60 → wide (arterial-stiffness / aortic-regurgitation flag)', () => {
    expect(getPulsePressureBand(61)).toBe('wide')
    expect(getPulsePressureBand(80)).toBe('wide')
    expect(getPulsePressureBand(100)).toBe('wide')
  })

  it('returns null for invalid input', () => {
    expect(getPulsePressureBand(null)).toBeNull()
    expect(getPulsePressureBand(NaN)).toBeNull()
  })
})

describe('narrow-warning trigger (< 40)', () => {
  it('SBP 110, DBP 80 → PP 30 → narrow', () => {
    const pp = calcPulsePressure(110, 80)
    expect(pp).toBe(30)
    expect(getPulsePressureBand(pp)).toBe('narrow')
  })

  it('very low BP 90/65 → PP 25 → narrow', () => {
    const pp = calcPulsePressure(90, 65)
    expect(pp).toBe(25)
    expect(getPulsePressureBand(pp)).toBe('narrow')
  })
})

describe('wide-warning trigger (> 60)', () => {
  it('SBP 160, DBP 80 → PP 80 → wide', () => {
    const pp = calcPulsePressure(160, 80)
    expect(pp).toBe(80)
    expect(getPulsePressureBand(pp)).toBe('wide')
  })

  it('very high BP 180/90 → PP 90 → wide', () => {
    const pp = calcPulsePressure(180, 90)
    expect(pp).toBe(90)
    expect(getPulsePressureBand(pp)).toBe('wide')
  })
})

describe('SBP = DBP edge case', () => {
  it('100/100 → PP 0 → narrow band', () => {
    const pp = calcPulsePressure(100, 100)
    expect(pp).toBe(0)
    expect(getPulsePressureBand(pp)).toBe('narrow')
  })
})

describe('age context output', () => {
  it('< 40 → young', () => {
    expect(getAgeContext(20)).toBe('young')
    expect(getAgeContext(39)).toBe('young')
  })

  it('40 – 59 → middle', () => {
    expect(getAgeContext(40)).toBe('middle')
    expect(getAgeContext(50)).toBe('middle')
    expect(getAgeContext(59)).toBe('middle')
  })

  it('60+ → older', () => {
    expect(getAgeContext(60)).toBe('older')
    expect(getAgeContext(75)).toBe('older')
  })

  it('returns null for missing age', () => {
    expect(getAgeContext(null)).toBeNull()
    expect(getAgeContext('')).toBeNull()
  })
})

describe('style helpers', () => {
  it('returns distinct colors per band', () => {
    expect(bandColor('narrow')).toMatch(/text-/)
    expect(bandColor('normal')).toMatch(/text-/)
    expect(bandColor('wide')).toMatch(/text-/)
    expect(bandColor('narrow')).not.toBe(bandColor('normal'))
    expect(bandColor('wide')).not.toBe(bandColor('normal'))
  })

  it('returns distinct backgrounds per band', () => {
    expect(bandBg('narrow')).toMatch(/bg-/)
    expect(bandBg('normal')).toMatch(/bg-/)
    expect(bandBg('wide')).toMatch(/bg-/)
  })
})

describe('formatPp', () => {
  it('formats as integer mmHg', () => {
    expect(formatPp(40)).toBe('40')
    expect(formatPp(60)).toBe('60')
    expect(formatPp(75.4)).toBe('75')
  })
  it('returns em-dash for null', () => {
    expect(formatPp(null)).toBe('—')
  })
})
