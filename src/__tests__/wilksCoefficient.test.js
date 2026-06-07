import { describe, it, expect } from 'vitest'
import {
  calcWilks,
  getWilksBand,
  kgFromLb,
  lbFromKg,
  bandColor,
  bandBg,
} from '../utils/wilksCoefficient.js'

describe('IPF 2020 Wilks coefficient — male', () => {
  it('returns null when inputs missing', () => {
    expect(calcWilks({ bodyweightKg: null, totalKg: 500, sex: 'male' })).toBeNull()
    expect(calcWilks({ bodyweightKg: 80, totalKg: null, sex: 'male' })).toBeNull()
    expect(calcWilks({ bodyweightKg: 80, totalKg: 500, sex: null })).toBeNull()
  })

  it('returns an integer score', () => {
    const r = calcWilks({ bodyweightKg: 80, totalKg: 500, sex: 'male' })
    expect(r).not.toBeNull()
    expect(Number.isInteger(r)).toBe(true)
  })

  it('male 83 kg / 600 kg total → elite tier', () => {
    const r = calcWilks({ bodyweightKg: 83, totalKg: 600, sex: 'male' })
    expect(r).toBeGreaterThan(400)
    expect(r).toBeLessThan(500)
  })

  it('male 93 kg / 700 kg total → elite tier', () => {
    const r = calcWilks({ bodyweightKg: 93, totalKg: 700, sex: 'male' })
    expect(r).toBeGreaterThan(430)
    expect(r).toBeLessThan(540)
  })

  it('male 100 kg / 200 kg total → novice (~115)', () => {
    const r = calcWilks({ bodyweightKg: 100, totalKg: 200, sex: 'male' })
    expect(r).toBeGreaterThanOrEqual(100)
    expect(r).toBeLessThan(200)
  })
})

describe('IPF 2020 Wilks coefficient — female', () => {
  it('female 60 kg / 300 kg total → roughly advanced range', () => {
    const r = calcWilks({ bodyweightKg: 60, totalKg: 300, sex: 'female' })
    expect(r).toBeGreaterThan(280)
    expect(r).toBeLessThan(400)
  })

  it('female and male yield different scores for the same input', () => {
    const m = calcWilks({ bodyweightKg: 70, totalKg: 400, sex: 'male' })
    const f = calcWilks({ bodyweightKg: 70, totalKg: 400, sex: 'female' })
    expect(m).not.toBe(f)
  })
})

describe('Strength bands', () => {
  it('< 100 → untrained', () => {
    expect(getWilksBand(0)).toBe('untrained')
    expect(getWilksBand(50)).toBe('untrained')
    expect(getWilksBand(99)).toBe('untrained')
  })

  it('100–199 → novice', () => {
    expect(getWilksBand(100)).toBe('novice')
    expect(getWilksBand(150)).toBe('novice')
    expect(getWilksBand(199)).toBe('novice')
  })

  it('200–299 → intermediate', () => {
    expect(getWilksBand(200)).toBe('intermediate')
    expect(getWilksBand(250)).toBe('intermediate')
    expect(getWilksBand(299)).toBe('intermediate')
  })

  it('300–399 → advanced', () => {
    expect(getWilksBand(300)).toBe('advanced')
    expect(getWilksBand(350)).toBe('advanced')
    expect(getWilksBand(399)).toBe('advanced')
  })

  it('>= 400 → elite', () => {
    expect(getWilksBand(400)).toBe('elite')
    expect(getWilksBand(550)).toBe('elite')
  })

  it('returns null for invalid input', () => {
    expect(getWilksBand(null)).toBeNull()
    expect(getWilksBand(NaN)).toBeNull()
  })
})

describe('Unit conversion kg ↔ lb', () => {
  it('converts 220.46 lb to ~100 kg', () => {
    expect(kgFromLb(220.46)).toBeCloseTo(100, 1)
  })

  it('converts 100 kg to ~220.46 lb', () => {
    expect(lbFromKg(100)).toBeCloseTo(220.46, 1)
  })

  it('Wilks score is identical whether inputs are converted from lb or used as kg', () => {
    const fromKg = calcWilks({ bodyweightKg: 80, totalKg: 500, sex: 'male' })
    const bwLb = lbFromKg(80)
    const totalLb = lbFromKg(500)
    const fromLb = calcWilks({
      bodyweightKg: kgFromLb(bwLb),
      totalKg: kgFromLb(totalLb),
      sex: 'male',
    })
    expect(fromLb).toBe(fromKg)
  })
})

describe('Edge cases', () => {
  it('very light male bodyweight (40 kg) returns a finite score', () => {
    const r = calcWilks({ bodyweightKg: 40, totalKg: 200, sex: 'male' })
    expect(r).not.toBeNull()
    expect(Number.isFinite(r)).toBe(true)
    expect(r).toBeGreaterThan(0)
  })

  it('very heavy male bodyweight (180 kg) returns a finite score', () => {
    const r = calcWilks({ bodyweightKg: 180, totalKg: 800, sex: 'male' })
    expect(r).not.toBeNull()
    expect(Number.isFinite(r)).toBe(true)
    expect(r).toBeGreaterThan(0)
  })

  it('very light female bodyweight (40 kg) returns a finite score', () => {
    const r = calcWilks({ bodyweightKg: 40, totalKg: 200, sex: 'female' })
    expect(r).not.toBeNull()
    expect(Number.isFinite(r)).toBe(true)
  })

  it('very heavy female bodyweight (160 kg) returns a finite score', () => {
    const r = calcWilks({ bodyweightKg: 160, totalKg: 600, sex: 'female' })
    expect(r).not.toBeNull()
    expect(Number.isFinite(r)).toBe(true)
  })

  it('Wilks score scales with total at fixed bodyweight', () => {
    const low = calcWilks({ bodyweightKg: 80, totalKg: 300, sex: 'male' })
    const high = calcWilks({ bodyweightKg: 80, totalKg: 600, sex: 'male' })
    expect(high).toBeGreaterThan(low)
  })

  it('returns null for invalid sex', () => {
    expect(calcWilks({ bodyweightKg: 80, totalKg: 500, sex: 'other' })).toBeNull()
  })
})

describe('Style helpers', () => {
  it('bandColor returns distinct classes per band', () => {
    expect(bandColor('untrained')).toMatch(/text-/)
    expect(bandColor('elite')).toMatch(/text-/)
    expect(bandColor('elite')).not.toBe(bandColor('untrained'))
  })

  it('bandBg returns distinct bg classes per band', () => {
    expect(bandBg('elite')).toMatch(/bg-/)
    expect(bandBg('novice')).toMatch(/bg-/)
  })
})
