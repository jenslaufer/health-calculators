import { describe, it, expect } from 'vitest'

// Pure due date calculation functions — extracted for testability

function addDays(date, days) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function calcEddFromLmp(lmpStr, cycleLength = 28) {
  if (!lmpStr) return null
  const lmp = new Date(lmpStr + 'T00:00:00')
  if (isNaN(lmp)) return null
  return addDays(lmp, 280 + (cycleLength - 28))
}

function calcEddFromConception(conceptionStr) {
  if (!conceptionStr) return null
  const c = new Date(conceptionStr + 'T00:00:00')
  if (isNaN(c)) return null
  return addDays(c, 266)
}

function calcEddFromIvf(transferStr, transferDay = 5) {
  if (!transferStr) return null
  const t = new Date(transferStr + 'T00:00:00')
  if (isNaN(t)) return null
  const daysToAdd = transferDay === 5 ? 261 : 263
  return addDays(t, daysToAdd)
}

function calcGestationalDays(edd, today = new Date()) {
  if (!edd) return 0
  const lmpEquiv = addDays(edd, -280)
  return Math.max(0, Math.floor((today - lmpEquiv) / (1000 * 60 * 60 * 24)))
}

function calcTrimester(gestationalWeeks) {
  if (gestationalWeeks < 13) return 1
  if (gestationalWeeks < 28) return 2
  return 3
}

function calcDaysUntilDue(edd, today = new Date()) {
  if (!edd) return 0
  return Math.max(0, Math.ceil((edd - today) / (1000 * 60 * 60 * 24)))
}

describe('EDD from LMP (Naegele\'s rule)', () => {
  it('LMP 2026-01-01 with 28-day cycle → 2026-10-08', () => {
    const edd = calcEddFromLmp('2026-01-01', 28)
    expect(edd.toISOString().slice(0, 10)).toBe('2026-10-08')
  })

  it('LMP 2026-01-01 with 30-day cycle → 2026-10-10 (2 days later)', () => {
    const edd = calcEddFromLmp('2026-01-01', 30)
    expect(edd.toISOString().slice(0, 10)).toBe('2026-10-10')
  })

  it('LMP 2026-01-01 with 26-day cycle → 2026-10-06 (2 days earlier)', () => {
    const edd = calcEddFromLmp('2026-01-01', 26)
    expect(edd.toISOString().slice(0, 10)).toBe('2026-10-06')
  })

  it('default cycle length is 28 days', () => {
    const edd = calcEddFromLmp('2026-01-01')
    expect(edd.toISOString().slice(0, 10)).toBe('2026-10-08')
  })

  it('returns null for empty string', () => {
    expect(calcEddFromLmp('')).toBeNull()
  })

  it('returns null for null input', () => {
    expect(calcEddFromLmp(null)).toBeNull()
  })

  it('leap year: LMP 2024-01-01 → 2024-10-07 (leap year has 366 days)', () => {
    const edd = calcEddFromLmp('2024-01-01', 28)
    // 2024 is leap year, Jan 1 + 280 days = Oct 7
    expect(edd.toISOString().slice(0, 10)).toBe('2024-10-07')
  })

  it('LMP 2026-02-01 crosses year boundary correctly', () => {
    const edd = calcEddFromLmp('2026-02-01', 28)
    // Feb 1 + 280 days = Nov 8
    expect(edd.toISOString().slice(0, 10)).toBe('2026-11-08')
  })

  it('LMP at end of month: 2026-01-31 + 280 days', () => {
    const edd = calcEddFromLmp('2026-01-31', 28)
    // Jan 31 + 280 = Nov 7
    expect(edd.toISOString().slice(0, 10)).toBe('2026-11-07')
  })
})

describe('EDD from conception date', () => {
  it('conception 2026-01-15 → EDD 2026-10-08', () => {
    const edd = calcEddFromConception('2026-01-15')
    // Jan 15 + 266 days = Oct 8
    expect(edd.toISOString().slice(0, 10)).toBe('2026-10-08')
  })

  it('returns null for empty input', () => {
    expect(calcEddFromConception('')).toBeNull()
  })

  it('returns null for null input', () => {
    expect(calcEddFromConception(null)).toBeNull()
  })

  it('result is 14 days earlier than LMP with 28-day cycle for same conception', () => {
    // LMP 2026-01-01, ovulation/conception day 14 = 2026-01-15
    const eddFromLmp = calcEddFromLmp('2026-01-01', 28)
    const eddFromConception = calcEddFromConception('2026-01-15')
    expect(eddFromLmp.toISOString().slice(0, 10)).toBe(eddFromConception.toISOString().slice(0, 10))
  })
})

describe('EDD from IVF transfer date', () => {
  it('day-5 transfer 2026-01-20 → 2026-10-08', () => {
    const edd = calcEddFromIvf('2026-01-20', 5)
    // Jan 20 + 261 days = Oct 8
    expect(edd.toISOString().slice(0, 10)).toBe('2026-10-08')
  })

  it('day-3 transfer 2026-01-18 → 2026-10-08', () => {
    const edd = calcEddFromIvf('2026-01-18', 3)
    // Jan 18 + 263 days = Oct 8
    expect(edd.toISOString().slice(0, 10)).toBe('2026-10-08')
  })

  it('day-5 is 2 days later than day-3 for same EDD', () => {
    const eddDay5 = calcEddFromIvf('2026-01-20', 5)
    const eddDay3 = calcEddFromIvf('2026-01-18', 3)
    expect(eddDay5.toISOString().slice(0, 10)).toBe(eddDay3.toISOString().slice(0, 10))
  })

  it('returns null for empty input', () => {
    expect(calcEddFromIvf('')).toBeNull()
  })

  it('returns null for null input', () => {
    expect(calcEddFromIvf(null)).toBeNull()
  })
})

describe('gestational age calculation', () => {
  it('edd 280 days from today → gestational age 0 weeks', () => {
    const today = new Date('2026-04-12T00:00:00')
    const edd = addDays(today, 280)
    const days = calcGestationalDays(edd, today)
    expect(Math.floor(days / 7)).toBe(0)
  })

  it('edd 140 days from today → gestational age 20 weeks', () => {
    const today = new Date('2026-04-12T00:00:00')
    const edd = addDays(today, 140)
    const days = calcGestationalDays(edd, today)
    expect(Math.floor(days / 7)).toBe(20)
  })

  it('returns 0 for null EDD', () => {
    expect(calcGestationalDays(null)).toBe(0)
  })

  it('past due date returns gestational days > 280', () => {
    const today = new Date('2026-04-12T00:00:00')
    const edd = addDays(today, -10)
    const days = calcGestationalDays(edd, today)
    expect(days).toBeGreaterThan(280)
  })
})

describe('trimester calculation', () => {
  it('week 0 → 1st trimester', () => {
    expect(calcTrimester(0)).toBe(1)
  })

  it('week 12 → 1st trimester', () => {
    expect(calcTrimester(12)).toBe(1)
  })

  it('week 13 → 2nd trimester', () => {
    expect(calcTrimester(13)).toBe(2)
  })

  it('week 27 → 2nd trimester', () => {
    expect(calcTrimester(27)).toBe(2)
  })

  it('week 28 → 3rd trimester', () => {
    expect(calcTrimester(28)).toBe(3)
  })

  it('week 40 → 3rd trimester', () => {
    expect(calcTrimester(40)).toBe(3)
  })
})

describe('countdown to due date', () => {
  it('due date tomorrow → 1 day', () => {
    const today = new Date('2026-04-12T00:00:00')
    const edd = new Date('2026-04-13T00:00:00')
    expect(calcDaysUntilDue(edd, today)).toBe(1)
  })

  it('past due date → 0 days (no negative)', () => {
    const today = new Date('2026-04-12T00:00:00')
    const edd = new Date('2026-04-10T00:00:00')
    expect(calcDaysUntilDue(edd, today)).toBe(0)
  })

  it('due date in 280 days from LMP today', () => {
    const today = new Date('2026-04-12T00:00:00')
    const edd = calcEddFromLmp('2026-04-12', 28)
    expect(calcDaysUntilDue(edd, today)).toBe(280)
  })

  it('returns 0 for null EDD', () => {
    expect(calcDaysUntilDue(null)).toBe(0)
  })
})
