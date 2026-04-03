import { describe, it, expect } from 'vitest'

// Pure calculation functions — extracted to be testable
function addDays(date, days) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function calcOvulationDate(lmpDate, cycleLength) {
  return addDays(lmpDate, cycleLength - 14)
}

function calcFertileWindow(ovulationDate) {
  return { start: addDays(ovulationDate, -5), end: ovulationDate }
}

function calcPeriodEnd(periodStart, periodDuration) {
  return addDays(periodStart, periodDuration - 1)
}

function calcPredictedCycles(lmpDate, cycleLength, periodDuration, count = 6) {
  const cycles = []
  for (let i = 1; i <= count; i++) {
    const periodStart = addDays(lmpDate, cycleLength * i)
    const periodEnd = calcPeriodEnd(periodStart, periodDuration)
    const ovulation = calcOvulationDate(periodStart, cycleLength)
    const fertile = calcFertileWindow(ovulation)
    cycles.push({ periodStart, periodEnd, ovulationDate: ovulation, fertileStart: fertile.start, fertileEnd: fertile.end })
  }
  return cycles
}

function calcCyclePhase(cycleDay, cycleLength, periodDuration) {
  if (cycleDay <= periodDuration) return 'menstrual'
  const ovDay = cycleLength - 14
  if (cycleDay < ovDay - 5) return 'follicular'
  if (cycleDay <= ovDay) return 'ovulation'
  return 'luteal'
}

function fmt(d) {
  return d.toISOString().slice(0, 10)
}

describe('Period prediction', () => {
  it('predicts next period start for 28-day cycle', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 28, 5, 1)
    expect(fmt(cycles[0].periodStart)).toBe('2026-03-29')
  })

  it('predicts period end based on duration', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 28, 5, 1)
    expect(fmt(cycles[0].periodEnd)).toBe('2026-04-02')
  })

  it('predicts 6 cycles by default', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 28, 5, 6)
    expect(cycles).toHaveLength(6)
    expect(fmt(cycles[0].periodStart)).toBe('2026-03-29')
    expect(fmt(cycles[1].periodStart)).toBe('2026-04-26')
    expect(fmt(cycles[2].periodStart)).toBe('2026-05-24')
    expect(fmt(cycles[3].periodStart)).toBe('2026-06-21')
    expect(fmt(cycles[4].periodStart)).toBe('2026-07-19')
    expect(fmt(cycles[5].periodStart)).toBe('2026-08-16')
  })

  it('works with 21-day cycle', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 21, 4, 1)
    expect(fmt(cycles[0].periodStart)).toBe('2026-03-22')
    expect(fmt(cycles[0].periodEnd)).toBe('2026-03-25')
  })

  it('works with 35-day cycle', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 35, 7, 1)
    expect(fmt(cycles[0].periodStart)).toBe('2026-04-05')
    expect(fmt(cycles[0].periodEnd)).toBe('2026-04-11')
  })
})

describe('Ovulation date for predicted cycles', () => {
  it('calculates ovulation for each predicted cycle', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 28, 5, 3)
    expect(fmt(cycles[0].ovulationDate)).toBe('2026-04-12')
    expect(fmt(cycles[1].ovulationDate)).toBe('2026-05-10')
    expect(fmt(cycles[2].ovulationDate)).toBe('2026-06-07')
  })
})

describe('Fertile window for predicted cycles', () => {
  it('fertile window is 5 days before ovulation to ovulation day', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 28, 5, 1)
    expect(fmt(cycles[0].fertileStart)).toBe('2026-04-07')
    expect(fmt(cycles[0].fertileEnd)).toBe('2026-04-12')
  })

  it('fertile window spans 6 days', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 28, 5, 1)
    const days = (cycles[0].fertileEnd - cycles[0].fertileStart) / (1000 * 60 * 60 * 24)
    expect(days).toBe(5) // 5 days between start and end = 6 calendar days inclusive
  })
})

describe('Cycle phase calculation', () => {
  it('menstrual phase during period days', () => {
    expect(calcCyclePhase(1, 28, 5)).toBe('menstrual')
    expect(calcCyclePhase(5, 28, 5)).toBe('menstrual')
  })

  it('follicular phase after period before fertile window', () => {
    expect(calcCyclePhase(6, 28, 5)).toBe('follicular')
    expect(calcCyclePhase(8, 28, 5)).toBe('follicular')
  })

  it('ovulation phase during fertile window', () => {
    // ovulation day = 28 - 14 = 14, fertile starts at day 9
    expect(calcCyclePhase(9, 28, 5)).toBe('ovulation')
    expect(calcCyclePhase(14, 28, 5)).toBe('ovulation')
  })

  it('luteal phase after ovulation', () => {
    expect(calcCyclePhase(15, 28, 5)).toBe('luteal')
    expect(calcCyclePhase(28, 28, 5)).toBe('luteal')
  })

  it('phases adjust to 35-day cycle', () => {
    // ovulation day = 35 - 14 = 21
    expect(calcCyclePhase(7, 35, 7)).toBe('menstrual')
    expect(calcCyclePhase(8, 35, 7)).toBe('follicular')
    expect(calcCyclePhase(16, 35, 7)).toBe('ovulation')
    expect(calcCyclePhase(22, 35, 7)).toBe('luteal')
  })
})

describe('Edge cases', () => {
  it('handles today as LMP date', () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const cycles = calcPredictedCycles(today, 28, 5, 1)
    const expected = addDays(today, 28)
    expect(fmt(cycles[0].periodStart)).toBe(fmt(expected))
  })

  it('period duration of 3 days', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 28, 3, 1)
    expect(fmt(cycles[0].periodEnd)).toBe('2026-03-31')
  })

  it('period duration of 7 days', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 28, 7, 1)
    expect(fmt(cycles[0].periodEnd)).toBe('2026-04-04')
  })

  it('minimum cycle length (21) with minimum period (3)', () => {
    const lmp = new Date('2026-03-01T00:00:00')
    const cycles = calcPredictedCycles(lmp, 21, 3, 1)
    expect(fmt(cycles[0].periodStart)).toBe('2026-03-22')
    expect(fmt(cycles[0].periodEnd)).toBe('2026-03-24')
  })
})
