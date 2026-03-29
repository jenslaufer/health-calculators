import { describe, it, expect } from 'vitest'

// Pure calculation functions — extracted to be testable
function calcOvulationDate(lmpDate, cycleLength) {
  const d = new Date(lmpDate)
  d.setDate(d.getDate() + (cycleLength - 14))
  return d
}

function calcFertileWindow(ovulationDate) {
  const start = new Date(ovulationDate)
  start.setDate(start.getDate() - 5)
  const end = new Date(ovulationDate)
  end.setDate(end.getDate() + 1)
  return { start, end }
}

function calcNextCycles(lmpDate, cycleLength, count = 3) {
  const cycles = []
  for (let i = 1; i <= count; i++) {
    const nextLmp = new Date(lmpDate)
    nextLmp.setDate(nextLmp.getDate() + cycleLength * i)
    const ovulation = calcOvulationDate(nextLmp, cycleLength)
    cycles.push({ periodStart: nextLmp, ovulationDate: ovulation })
  }
  return cycles
}

function fmt(d) {
  return d.toISOString().slice(0, 10)
}

describe('Ovulation date calculation', () => {
  it('28-day cycle: ovulation on day 14', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const ovulation = calcOvulationDate(lmp, 28)
    expect(fmt(ovulation)).toBe('2026-03-15')
  })

  it('21-day cycle: ovulation on day 7', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const ovulation = calcOvulationDate(lmp, 21)
    expect(fmt(ovulation)).toBe('2026-03-08')
  })

  it('35-day cycle: ovulation on day 21', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const ovulation = calcOvulationDate(lmp, 35)
    expect(fmt(ovulation)).toBe('2026-03-22')
  })
})

describe('Fertile window', () => {
  it('spans 5 days before to 1 day after ovulation', () => {
    const ovulation = new Date('2026-03-15T00:00:00')
    const { start, end } = calcFertileWindow(ovulation)
    expect(fmt(start)).toBe('2026-03-10')
    expect(fmt(end)).toBe('2026-03-16')
  })

  it('works for early-cycle ovulation (day 7)', () => {
    const ovulation = new Date('2026-03-08T00:00:00')
    const { start, end } = calcFertileWindow(ovulation)
    expect(fmt(start)).toBe('2026-03-03')
    expect(fmt(end)).toBe('2026-03-09')
  })

  it('window is always 7 days total', () => {
    const ovulation = new Date('2026-03-22T00:00:00')
    const { start, end } = calcFertileWindow(ovulation)
    const days = (end - start) / (1000 * 60 * 60 * 24)
    expect(days).toBe(6) // 6 days between start and end = 7 calendar days inclusive
  })
})

describe('Next cycle predictions', () => {
  it('predicts 3 cycles with correct period starts', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcNextCycles(lmp, 28, 3)
    expect(cycles).toHaveLength(3)
    expect(fmt(cycles[0].periodStart)).toBe('2026-03-29')
    expect(fmt(cycles[1].periodStart)).toBe('2026-04-26')
    expect(fmt(cycles[2].periodStart)).toBe('2026-05-24')
  })

  it('predicts ovulation dates for each cycle', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcNextCycles(lmp, 28, 3)
    expect(fmt(cycles[0].ovulationDate)).toBe('2026-04-12')
    expect(fmt(cycles[1].ovulationDate)).toBe('2026-05-10')
    expect(fmt(cycles[2].ovulationDate)).toBe('2026-06-07')
  })

  it('works with 21-day cycle', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcNextCycles(lmp, 21, 3)
    expect(fmt(cycles[0].periodStart)).toBe('2026-03-22')
    expect(fmt(cycles[0].ovulationDate)).toBe('2026-03-29')
  })

  it('works with 35-day cycle', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcNextCycles(lmp, 35, 3)
    expect(fmt(cycles[0].periodStart)).toBe('2026-04-05')
    expect(fmt(cycles[0].ovulationDate)).toBe('2026-04-26')
  })
})

describe('Edge cases', () => {
  it('handles today as LMP date', () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const ovulation = calcOvulationDate(today, 28)
    const expected = new Date(today)
    expected.setDate(expected.getDate() + 14)
    expect(fmt(ovulation)).toBe(fmt(expected))
  })

  it('handles past dates', () => {
    const lmp = new Date('2025-01-01T00:00:00')
    const ovulation = calcOvulationDate(lmp, 28)
    expect(fmt(ovulation)).toBe('2025-01-15')
  })

  it('cycle length at minimum (21)', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const ovulation = calcOvulationDate(lmp, 21)
    expect(fmt(ovulation)).toBe('2026-03-08') // day 7
  })

  it('cycle length at maximum (35)', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const ovulation = calcOvulationDate(lmp, 35)
    expect(fmt(ovulation)).toBe('2026-03-22') // day 21
  })
})
