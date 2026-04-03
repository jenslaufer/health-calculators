import { describe, it, expect } from 'vitest'

// Pure calculation functions — extracted from RunningPaceCalculator.vue to be testable

const DISTANCES = {
  '5k': 5,
  '10k': 10,
  'half': 21.0975,
  'marathon': 42.195,
}

const KM_TO_MI = 1.60934

function calcPaceFromTime(totalSeconds, distanceKm) {
  if (!totalSeconds || totalSeconds <= 0 || !distanceKm || distanceKm <= 0) return null
  return totalSeconds / distanceKm // seconds per km
}

function calcTimeFromPace(paceSecondsPerKm, distanceKm) {
  if (!paceSecondsPerKm || paceSecondsPerKm <= 0 || !distanceKm || distanceKm <= 0) return null
  return paceSecondsPerKm * distanceKm // total seconds
}

function paceToMinPerKm(paceSeconds) {
  if (!paceSeconds || paceSeconds <= 0) return null
  const mins = Math.floor(paceSeconds / 60)
  const secs = Math.round(paceSeconds % 60)
  return { mins, secs, display: `${mins}:${String(secs).padStart(2, '0')}` }
}

function paceToMinPerMi(paceSecondsPerKm) {
  if (!paceSecondsPerKm || paceSecondsPerKm <= 0) return null
  const paceSecPerMi = paceSecondsPerKm * KM_TO_MI
  const mins = Math.floor(paceSecPerMi / 60)
  const secs = Math.round(paceSecPerMi % 60)
  return { mins, secs, display: `${mins}:${String(secs).padStart(2, '0')}` }
}

function formatTime(totalSeconds) {
  if (!totalSeconds || totalSeconds <= 0) return null
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = Math.round(totalSeconds % 60)
  return { h, m, s }
}

function generateSplits(distanceKm, paceSecondsPerKm, unit) {
  if (!distanceKm || !paceSecondsPerKm) return []
  const splitDistance = unit === 'mi' ? KM_TO_MI : 1
  const numFullSplits = Math.floor(distanceKm / splitDistance)
  const remainder = distanceKm % splitDistance
  const splits = []
  let cumTime = 0
  for (let i = 1; i <= numFullSplits; i++) {
    const splitTime = paceSecondsPerKm * splitDistance
    cumTime += splitTime
    splits.push({ km: i, splitTime, cumTime })
  }
  if (remainder > 0.01) {
    const splitTime = paceSecondsPerKm * remainder
    cumTime += splitTime
    splits.push({ km: numFullSplits + 1, splitTime, cumTime, partial: remainder })
  }
  return splits
}

function generateNegativeSplitPlan(distanceKm, paceSecondsPerKm) {
  if (!distanceKm || !paceSecondsPerKm) return null
  const halfDistance = distanceKm / 2
  // First half: 2.5% slower, second half: 2.5% faster
  const firstHalfPace = paceSecondsPerKm * 1.025
  const secondHalfPace = paceSecondsPerKm * 0.975
  const firstHalfTime = firstHalfPace * halfDistance
  const secondHalfTime = secondHalfPace * halfDistance
  return { firstHalfPace, secondHalfPace, firstHalfTime, secondHalfTime }
}

describe('Pace calculation from time and distance', () => {
  it('5K in 25:00 → 5:00 min/km', () => {
    const pace = calcPaceFromTime(25 * 60, 5)
    expect(pace).toBe(300) // 300 seconds = 5:00 min/km
  })

  it('10K in 50:00 → 5:00 min/km', () => {
    const pace = calcPaceFromTime(50 * 60, 10)
    expect(pace).toBe(300)
  })

  it('Marathon in 3:30:00 → ~4:58 min/km', () => {
    const pace = calcPaceFromTime(3 * 3600 + 30 * 60, 42.195)
    expect(pace).toBeGreaterThanOrEqual(296)
    expect(pace).toBeLessThanOrEqual(300)
  })

  it('Half marathon in 1:45:00 → ~4:58 min/km', () => {
    const pace = calcPaceFromTime(1 * 3600 + 45 * 60, 21.0975)
    expect(pace).toBeGreaterThanOrEqual(296)
    expect(pace).toBeLessThanOrEqual(300)
  })

  it('returns null for zero or negative inputs', () => {
    expect(calcPaceFromTime(0, 5)).toBeNull()
    expect(calcPaceFromTime(1500, 0)).toBeNull()
    expect(calcPaceFromTime(-100, 5)).toBeNull()
    expect(calcPaceFromTime(1500, -5)).toBeNull()
  })
})

describe('Time calculation from pace and distance', () => {
  it('5:00 min/km for 5K → 25:00', () => {
    const time = calcTimeFromPace(300, 5)
    expect(time).toBe(1500)
  })

  it('5:00 min/km for marathon → 3:30:58', () => {
    const time = calcTimeFromPace(300, 42.195)
    expect(time).toBeCloseTo(42.195 * 300, 0)
  })

  it('returns null for invalid inputs', () => {
    expect(calcTimeFromPace(0, 5)).toBeNull()
    expect(calcTimeFromPace(300, 0)).toBeNull()
  })
})

describe('Pace formatting', () => {
  it('300 seconds → 5:00 min/km', () => {
    const result = paceToMinPerKm(300)
    expect(result.mins).toBe(5)
    expect(result.secs).toBe(0)
    expect(result.display).toBe('5:00')
  })

  it('330 seconds → 5:30 min/km', () => {
    const result = paceToMinPerKm(330)
    expect(result.mins).toBe(5)
    expect(result.secs).toBe(30)
    expect(result.display).toBe('5:30')
  })

  it('300 sec/km → ~8:03 min/mi', () => {
    const result = paceToMinPerMi(300)
    expect(result.mins).toBe(8)
    expect(result.secs).toBeGreaterThanOrEqual(2)
    expect(result.secs).toBeLessThanOrEqual(4)
  })

  it('returns null for invalid input', () => {
    expect(paceToMinPerKm(0)).toBeNull()
    expect(paceToMinPerMi(-1)).toBeNull()
  })
})

describe('Time formatting', () => {
  it('1500 seconds → 0h 25m 0s', () => {
    const result = formatTime(1500)
    expect(result.h).toBe(0)
    expect(result.m).toBe(25)
    expect(result.s).toBe(0)
  })

  it('12658 seconds → 3h 30m 58s', () => {
    const result = formatTime(12658)
    expect(result.h).toBe(3)
    expect(result.m).toBe(30)
    expect(result.s).toBe(58)
  })

  it('returns null for invalid input', () => {
    expect(formatTime(0)).toBeNull()
    expect(formatTime(-100)).toBeNull()
  })
})

describe('Splits generation', () => {
  it('generates 5 splits for 5K at 5:00/km', () => {
    const splits = generateSplits(5, 300, 'km')
    expect(splits).toHaveLength(5)
    expect(splits[0].splitTime).toBe(300)
    expect(splits[0].cumTime).toBe(300)
    expect(splits[4].cumTime).toBe(1500)
  })

  it('generates partial last split for half marathon', () => {
    const splits = generateSplits(21.0975, 300, 'km')
    expect(splits).toHaveLength(22) // 21 full + 1 partial
    expect(splits[21].partial).toBeCloseTo(0.0975, 3)
  })

  it('generates mile splits', () => {
    const splits = generateSplits(5, 300, 'mi')
    const numFullMiles = Math.floor(5 / KM_TO_MI)
    expect(splits.length).toBeGreaterThanOrEqual(numFullMiles)
  })

  it('returns empty for invalid inputs', () => {
    expect(generateSplits(0, 300, 'km')).toEqual([])
    expect(generateSplits(5, null, 'km')).toEqual([])
  })
})

describe('Negative split plan', () => {
  it('generates plan with first half slower and second half faster', () => {
    const plan = generateNegativeSplitPlan(42.195, 300)
    expect(plan.firstHalfPace).toBeGreaterThan(300)
    expect(plan.secondHalfPace).toBeLessThan(300)
  })

  it('total time matches even pace within 1 second', () => {
    const plan = generateNegativeSplitPlan(42.195, 300)
    const evenTime = 300 * 42.195
    const splitTime = plan.firstHalfTime + plan.secondHalfTime
    expect(Math.abs(evenTime - splitTime)).toBeLessThan(1)
  })

  it('second half is ~5% faster than first half', () => {
    const plan = generateNegativeSplitPlan(10, 300)
    const diff = plan.firstHalfPace - plan.secondHalfPace
    const avgPace = (plan.firstHalfPace + plan.secondHalfPace) / 2
    const pctDiff = (diff / avgPace) * 100
    expect(pctDiff).toBeCloseTo(5, 0)
  })

  it('returns null for invalid inputs', () => {
    expect(generateNegativeSplitPlan(0, 300)).toBeNull()
    expect(generateNegativeSplitPlan(10, null)).toBeNull()
  })
})

describe('Distance constants', () => {
  it('5K = 5 km', () => expect(DISTANCES['5k']).toBe(5))
  it('10K = 10 km', () => expect(DISTANCES['10k']).toBe(10))
  it('Half marathon = 21.0975 km', () => expect(DISTANCES['half']).toBe(21.0975))
  it('Marathon = 42.195 km', () => expect(DISTANCES['marathon']).toBe(42.195))
})
