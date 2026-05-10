import { describe, it, expect } from 'vitest'
import {
  addDays,
  calcOvulationDay,
  calcFertilityWindow,
  getDayLabel,
  daysBetween,
  conceptionProbability,
} from '../utils/fertilityWindow.js'

function d(s) {
  return new Date(s + 'T00:00:00')
}

describe('addDays', () => {
  it('adds positive days correctly', () => {
    expect(addDays(d('2026-03-01'), 14)).toEqual(d('2026-03-15'))
  })

  it('handles month boundary', () => {
    expect(addDays(d('2026-02-25'), 7)).toEqual(d('2026-03-04'))
  })

  it('handles negative days', () => {
    expect(addDays(d('2026-03-15'), -5)).toEqual(d('2026-03-10'))
  })

  it('returns null for invalid input', () => {
    expect(addDays(null, 5)).toBeNull()
    expect(addDays('not a date', 5)).toBeNull()
  })
})

describe('calcOvulationDay', () => {
  it('28-day cycle → ovulation on day 14 after LMP', () => {
    // LMP 2026-03-01, cycle 28 → ovulation = 2026-03-01 + 14 = 2026-03-15
    expect(calcOvulationDay(d('2026-03-01'), 28)).toEqual(d('2026-03-15'))
  })

  it('32-day cycle → ovulation on day 18 after LMP', () => {
    // 32 - 14 = 18
    expect(calcOvulationDay(d('2026-03-01'), 32)).toEqual(d('2026-03-19'))
  })

  it('21-day cycle → ovulation on day 7 after LMP', () => {
    expect(calcOvulationDay(d('2026-03-01'), 21)).toEqual(d('2026-03-08'))
  })

  it('returns null for cycle out of range', () => {
    expect(calcOvulationDay(d('2026-03-01'), 20)).toBeNull()
    expect(calcOvulationDay(d('2026-03-01'), 46)).toBeNull()
  })

  it('returns null for invalid LMP', () => {
    expect(calcOvulationDay(null, 28)).toBeNull()
    expect(calcOvulationDay(d('invalid'), 28)).toBeNull()
  })
})

describe('calcFertilityWindow', () => {
  it('28-day cycle starting 2026-03-01 → ovulation 2026-03-15', () => {
    const w = calcFertilityWindow(d('2026-03-01'), 28)
    expect(w.ovulation).toEqual(d('2026-03-15'))
  })

  it('expanded window is 10 days wide (O-7 to O+2)', () => {
    const w = calcFertilityWindow(d('2026-03-01'), 28)
    expect(w.expandedStart).toEqual(d('2026-03-08'))
    expect(w.expandedEnd).toEqual(d('2026-03-17'))
  })

  it('core window is 7 days (O-5 to O+1)', () => {
    const w = calcFertilityWindow(d('2026-03-01'), 28)
    expect(w.coreStart).toEqual(d('2026-03-10'))
    expect(w.coreEnd).toEqual(d('2026-03-16'))
  })

  it('peak fertility is 3 days (O-2 to O)', () => {
    const w = calcFertilityWindow(d('2026-03-01'), 28)
    expect(w.peakStart).toEqual(d('2026-03-13'))
    expect(w.peakEnd).toEqual(d('2026-03-15'))
  })

  it('LH surge runs from O-1 to ovulation', () => {
    const w = calcFertilityWindow(d('2026-03-01'), 28)
    expect(w.lhSurgeStart).toEqual(d('2026-03-14'))
    expect(w.lhSurgeEnd).toEqual(d('2026-03-15'))
  })

  it('predicts next period start', () => {
    const w = calcFertilityWindow(d('2026-03-01'), 28)
    expect(w.nextPeriod).toEqual(d('2026-03-29'))
  })

  it('returns null for invalid inputs', () => {
    expect(calcFertilityWindow(null, 28)).toBeNull()
    expect(calcFertilityWindow(d('2026-03-01'), 200)).toBeNull()
  })
})

describe('getDayLabel', () => {
  const w = calcFertilityWindow(d('2026-03-01'), 28) // ovulation = 2026-03-15

  it('labels ovulation day', () => {
    expect(getDayLabel(d('2026-03-15'), w)).toBe('ovulation')
  })

  it('labels peak fertility days', () => {
    expect(getDayLabel(d('2026-03-13'), w)).toBe('peak')
    expect(getDayLabel(d('2026-03-14'), w)).toBe('lhSurge')
  })

  it('labels core window days', () => {
    expect(getDayLabel(d('2026-03-11'), w)).toBe('core')
    expect(getDayLabel(d('2026-03-16'), w)).toBe('core')
  })

  it('labels expanded window edges', () => {
    expect(getDayLabel(d('2026-03-08'), w)).toBe('expanded')
    expect(getDayLabel(d('2026-03-17'), w)).toBe('expanded')
  })

  it('returns null for non-fertile days', () => {
    expect(getDayLabel(d('2026-03-01'), w)).toBeNull()
    expect(getDayLabel(d('2026-03-25'), w)).toBeNull()
  })
})

describe('daysBetween', () => {
  it('counts forward days', () => {
    expect(daysBetween(d('2026-03-01'), d('2026-03-15'))).toBe(14)
  })

  it('counts backward days as negative', () => {
    expect(daysBetween(d('2026-03-15'), d('2026-03-01'))).toBe(-14)
  })

  it('zero for same day', () => {
    expect(daysBetween(d('2026-03-15'), d('2026-03-15'))).toBe(0)
  })

  it('returns null for invalid input', () => {
    expect(daysBetween(null, d('2026-03-15'))).toBeNull()
  })
})

describe('conceptionProbability', () => {
  it('peaks on ovulation day (~33%)', () => {
    expect(conceptionProbability(0)).toBeCloseTo(0.33, 2)
  })

  it('day -1 is high (~31%)', () => {
    expect(conceptionProbability(-1)).toBeCloseTo(0.31, 2)
  })

  it('day -2 is high (~27%)', () => {
    expect(conceptionProbability(-2)).toBeCloseTo(0.27, 2)
  })

  it('drops sharply after ovulation', () => {
    expect(conceptionProbability(1)).toBeCloseTo(0.10, 2)
    expect(conceptionProbability(2)).toBe(0)
  })

  it('zero outside fertile window', () => {
    expect(conceptionProbability(-7)).toBe(0)
    expect(conceptionProbability(5)).toBe(0)
  })
})
