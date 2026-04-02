import { describe, it, expect } from 'vitest'

// Pure calculation functions — extracted to be testable

const PROTOCOLS = {
  '16:8': { fastHours: 16, eatHours: 8 },
  '18:6': { fastHours: 18, eatHours: 6 },
  '20:4': { fastHours: 20, eatHours: 4 },
  'OMAD': { fastHours: 23, eatHours: 1 },
}

function parseTime(timeStr) {
  const [h, m] = timeStr.split(':').map(Number)
  return h * 60 + m
}

function formatTime(totalMinutes) {
  const wrapped = ((totalMinutes % 1440) + 1440) % 1440
  return String(Math.floor(wrapped / 60)).padStart(2, '0') + ':' + String(wrapped % 60).padStart(2, '0')
}

function calcFromLastMeal(lastMealTime, protocol) {
  const { fastHours, eatHours } = PROTOCOLS[protocol]
  const lastMealMin = parseTime(lastMealTime)
  const fastingStart = lastMealMin
  const fastingEnd = lastMealMin + fastHours * 60
  const eatingStart = fastingEnd
  const eatingEnd = eatingStart + eatHours * 60
  return {
    fastingStart: formatTime(fastingStart),
    fastingEnd: formatTime(fastingEnd),
    eatingStart: formatTime(eatingStart),
    eatingEnd: formatTime(eatingEnd),
    fastHours,
    eatHours,
  }
}

function calcFromFirstMeal(firstMealTime, protocol) {
  const { fastHours, eatHours } = PROTOCOLS[protocol]
  const firstMealMin = parseTime(firstMealTime)
  const eatingStart = firstMealMin
  const eatingEnd = firstMealMin + eatHours * 60
  const fastingStart = eatingEnd
  const fastingEnd = fastingStart + fastHours * 60
  return {
    eatingStart: formatTime(eatingStart),
    eatingEnd: formatTime(eatingEnd),
    fastingStart: formatTime(fastingStart),
    fastingEnd: formatTime(fastingEnd),
    fastHours,
    eatHours,
  }
}

describe('Protocol definitions', () => {
  it('16:8 has 16 fasting hours and 8 eating hours', () => {
    expect(PROTOCOLS['16:8']).toEqual({ fastHours: 16, eatHours: 8 })
  })

  it('18:6 has 18 fasting hours and 6 eating hours', () => {
    expect(PROTOCOLS['18:6']).toEqual({ fastHours: 18, eatHours: 6 })
  })

  it('20:4 has 20 fasting hours and 4 eating hours', () => {
    expect(PROTOCOLS['20:4']).toEqual({ fastHours: 20, eatHours: 4 })
  })

  it('OMAD has 23 fasting hours and 1 eating hour', () => {
    expect(PROTOCOLS['OMAD']).toEqual({ fastHours: 23, eatHours: 1 })
  })

  it('all protocols sum to 24 hours', () => {
    for (const [name, p] of Object.entries(PROTOCOLS)) {
      expect(p.fastHours + p.eatHours, `${name} should sum to 24`).toBe(24)
    }
  })
})

describe('Time parsing and formatting', () => {
  it('parses 00:00 as 0 minutes', () => {
    expect(parseTime('00:00')).toBe(0)
  })

  it('parses 12:30 as 750 minutes', () => {
    expect(parseTime('12:30')).toBe(750)
  })

  it('parses 23:59 as 1439 minutes', () => {
    expect(parseTime('23:59')).toBe(1439)
  })

  it('formats 0 minutes as 00:00', () => {
    expect(formatTime(0)).toBe('00:00')
  })

  it('formats 750 minutes as 12:30', () => {
    expect(formatTime(750)).toBe('12:30')
  })

  it('wraps past midnight (1500 min = 01:00)', () => {
    expect(formatTime(1500)).toBe('01:00')
  })

  it('handles negative minutes by wrapping', () => {
    expect(formatTime(-60)).toBe('23:00')
  })
})

describe('Calculate from last meal time', () => {
  it('16:8 with last meal at 20:00 — eating starts at 12:00 next day', () => {
    const result = calcFromLastMeal('20:00', '16:8')
    expect(result.fastingStart).toBe('20:00')
    expect(result.fastingEnd).toBe('12:00')
    expect(result.eatingStart).toBe('12:00')
    expect(result.eatingEnd).toBe('20:00')
    expect(result.fastHours).toBe(16)
    expect(result.eatHours).toBe(8)
  })

  it('18:6 with last meal at 18:00 — eating starts at 12:00', () => {
    const result = calcFromLastMeal('18:00', '18:6')
    expect(result.fastingStart).toBe('18:00')
    expect(result.fastingEnd).toBe('12:00')
    expect(result.eatingStart).toBe('12:00')
    expect(result.eatingEnd).toBe('18:00')
  })

  it('20:4 with last meal at 19:00 — eating starts at 15:00', () => {
    const result = calcFromLastMeal('19:00', '20:4')
    expect(result.eatingStart).toBe('15:00')
    expect(result.eatingEnd).toBe('19:00')
  })

  it('OMAD with last meal at 18:00 — eating starts at 17:00', () => {
    const result = calcFromLastMeal('18:00', 'OMAD')
    expect(result.eatingStart).toBe('17:00')
    expect(result.eatingEnd).toBe('18:00')
  })
})

describe('Calculate from first meal time', () => {
  it('16:8 with first meal at 12:00 — eating ends at 20:00', () => {
    const result = calcFromFirstMeal('12:00', '16:8')
    expect(result.eatingStart).toBe('12:00')
    expect(result.eatingEnd).toBe('20:00')
    expect(result.fastingStart).toBe('20:00')
    expect(result.fastingEnd).toBe('12:00')
  })

  it('18:6 with first meal at 13:00 — eating ends at 19:00', () => {
    const result = calcFromFirstMeal('13:00', '18:6')
    expect(result.eatingStart).toBe('13:00')
    expect(result.eatingEnd).toBe('19:00')
    expect(result.fastingStart).toBe('19:00')
    expect(result.fastingEnd).toBe('13:00')
  })

  it('20:4 with first meal at 14:00 — eating ends at 18:00', () => {
    const result = calcFromFirstMeal('14:00', '20:4')
    expect(result.eatingStart).toBe('14:00')
    expect(result.eatingEnd).toBe('18:00')
  })

  it('OMAD with first meal at 18:00 — eating ends at 19:00', () => {
    const result = calcFromFirstMeal('18:00', 'OMAD')
    expect(result.eatingStart).toBe('18:00')
    expect(result.eatingEnd).toBe('19:00')
  })
})

describe('Edge cases', () => {
  it('last meal at midnight wraps correctly', () => {
    const result = calcFromLastMeal('00:00', '16:8')
    expect(result.fastingEnd).toBe('16:00')
    expect(result.eatingEnd).toBe('00:00')
  })

  it('first meal at 06:00 with 16:8 — eating ends at 14:00', () => {
    const result = calcFromFirstMeal('06:00', '16:8')
    expect(result.eatingEnd).toBe('14:00')
    expect(result.fastingStart).toBe('14:00')
    expect(result.fastingEnd).toBe('06:00')
  })

  it('late last meal with OMAD wraps past midnight', () => {
    const result = calcFromLastMeal('23:00', 'OMAD')
    expect(result.fastingEnd).toBe('22:00')
    expect(result.eatingEnd).toBe('23:00')
  })
})
