import { describe, it, expect } from 'vitest'

// Drink database — caffeine content per unit
const DRINKS = {
  coffee: { mgPerUnit: 95 },
  espresso: { mgPerUnit: 63 },
  doubleEspresso: { mgPerUnit: 126 },
  blackTea: { mgPerUnit: 47 },
  greenTea: { mgPerUnit: 28 },
  energyDrink: { mgPerUnit: 80 },
  cola: { mgPerUnit: 34 },
}

// Caffeine half-life: 5 hours
const HALF_LIFE_HOURS = 5

// Calculates remaining caffeine from a single dose
function calcCaffeineRemaining(doseMg, consumedAt, now) {
  const hoursElapsed = (now - consumedAt) / (1000 * 60 * 60)
  if (hoursElapsed < 0) return doseMg // future time: full dose still incoming
  return doseMg * Math.pow(0.5, hoursElapsed / HALF_LIFE_HOURS)
}

// Total caffeine currently in system from all drinks
function calcTotalCaffeine(drinks, now) {
  return drinks.reduce((sum, drink) => {
    const db = DRINKS[drink.type]
    if (!db) return sum
    const doseMg = db.mgPerUnit * drink.quantity
    return sum + calcCaffeineRemaining(doseMg, drink.consumedAt, now)
  }, 0)
}

// Estimates when caffeine drops below threshold (default 100mg)
function calcSleepTime(totalMg, now, threshold = 100) {
  if (totalMg <= threshold) return now
  // totalMg * (0.5 ^ (h/5)) = threshold  =>  h = -5 * log2(threshold / totalMg)
  const hoursToSafe = -HALF_LIFE_HOURS * Math.log2(threshold / totalMg)
  return new Date(now.getTime() + hoursToSafe * 60 * 60 * 1000)
}

// Daily caffeine intake (ignoring decay)
function calcDailyIntake(drinks) {
  return drinks.reduce((sum, drink) => {
    const db = DRINKS[drink.type]
    if (!db) return sum
    return sum + db.mgPerUnit * drink.quantity
  }, 0)
}

describe('Drink database', () => {
  it('coffee has 95 mg per cup', () => {
    expect(DRINKS.coffee.mgPerUnit).toBe(95)
  })

  it('espresso has 63 mg per shot', () => {
    expect(DRINKS.espresso.mgPerUnit).toBe(63)
  })

  it('double espresso has 126 mg', () => {
    expect(DRINKS.doubleEspresso.mgPerUnit).toBe(126)
  })

  it('black tea has 47 mg per cup', () => {
    expect(DRINKS.blackTea.mgPerUnit).toBe(47)
  })

  it('green tea has 28 mg per cup', () => {
    expect(DRINKS.greenTea.mgPerUnit).toBe(28)
  })

  it('energy drink has 80 mg per can', () => {
    expect(DRINKS.energyDrink.mgPerUnit).toBe(80)
  })

  it('cola has 34 mg per 330ml serving', () => {
    expect(DRINKS.cola.mgPerUnit).toBe(34)
  })

  it('double espresso is exactly 2x espresso', () => {
    expect(DRINKS.doubleEspresso.mgPerUnit).toBe(DRINKS.espresso.mgPerUnit * 2)
  })
})

describe('Caffeine half-life decay', () => {
  const now = new Date('2026-01-01T12:00:00')

  it('returns full dose immediately after consumption', () => {
    const remaining = calcCaffeineRemaining(95, now, now)
    expect(remaining).toBeCloseTo(95)
  })

  it('halves the dose after 5 hours', () => {
    const fiveHoursAgo = new Date(now.getTime() - 5 * 60 * 60 * 1000)
    const remaining = calcCaffeineRemaining(100, fiveHoursAgo, now)
    expect(remaining).toBeCloseTo(50)
  })

  it('quarters the dose after 10 hours', () => {
    const tenHoursAgo = new Date(now.getTime() - 10 * 60 * 60 * 1000)
    const remaining = calcCaffeineRemaining(100, tenHoursAgo, now)
    expect(remaining).toBeCloseTo(25)
  })

  it('returns full dose for future consumption time', () => {
    const inOneHour = new Date(now.getTime() + 60 * 60 * 1000)
    const remaining = calcCaffeineRemaining(95, inOneHour, now)
    expect(remaining).toBe(95)
  })

  it('decreases monotonically over time', () => {
    const dose = 200
    const levels = [0, 2, 4, 6, 8].map(h => {
      const consumedAt = new Date(now.getTime() - h * 60 * 60 * 1000)
      return calcCaffeineRemaining(dose, consumedAt, now)
    })
    for (let i = 1; i < levels.length; i++) {
      expect(levels[i]).toBeLessThan(levels[i - 1])
    }
  })
})

describe('Total caffeine calculation', () => {
  const now = new Date('2026-01-01T14:00:00')

  it('sums caffeine from multiple drinks consumed now', () => {
    const drinks = [
      { type: 'coffee', quantity: 1, consumedAt: now },
      { type: 'espresso', quantity: 1, consumedAt: now },
    ]
    const total = calcTotalCaffeine(drinks, now)
    expect(total).toBeCloseTo(95 + 63)
  })

  it('accounts for decay in past drinks', () => {
    const fiveHoursAgo = new Date(now.getTime() - 5 * 60 * 60 * 1000)
    const drinks = [{ type: 'coffee', quantity: 1, consumedAt: fiveHoursAgo }]
    const total = calcTotalCaffeine(drinks, now)
    expect(total).toBeCloseTo(47.5) // 95 / 2
  })

  it('multiplies by quantity', () => {
    const drinks = [{ type: 'coffee', quantity: 3, consumedAt: now }]
    const total = calcTotalCaffeine(drinks, now)
    expect(total).toBeCloseTo(285)
  })

  it('returns 0 for empty drink list', () => {
    expect(calcTotalCaffeine([], now)).toBe(0)
  })

  it('ignores unknown drink types', () => {
    const drinks = [{ type: 'unknown', quantity: 1, consumedAt: now }]
    expect(calcTotalCaffeine(drinks, now)).toBe(0)
  })
})

describe('Sleep time estimation', () => {
  const now = new Date('2026-01-01T14:00:00')

  it('returns now if already below threshold', () => {
    const sleepTime = calcSleepTime(80, now)
    expect(sleepTime.getTime()).toBe(now.getTime())
  })

  it('returns now if exactly at threshold', () => {
    const sleepTime = calcSleepTime(100, now)
    expect(sleepTime.getTime()).toBe(now.getTime())
  })

  it('estimates correct hours when at 200mg (needs to drop to 100mg = one half-life)', () => {
    const sleepTime = calcSleepTime(200, now)
    const hoursAhead = (sleepTime.getTime() - now.getTime()) / (1000 * 60 * 60)
    expect(hoursAhead).toBeCloseTo(5) // one half-life
  })

  it('estimates correct hours when at 400mg (needs two half-lives = 10 hours)', () => {
    const sleepTime = calcSleepTime(400, now)
    const hoursAhead = (sleepTime.getTime() - now.getTime()) / (1000 * 60 * 60)
    expect(hoursAhead).toBeCloseTo(10)
  })

  it('safe sleep time is later for higher caffeine levels', () => {
    const sleep200 = calcSleepTime(200, now)
    const sleep300 = calcSleepTime(300, now)
    expect(sleep300.getTime()).toBeGreaterThan(sleep200.getTime())
  })
})

describe('Daily intake calculation', () => {
  it('calculates total mg from daily drinks', () => {
    const drinks = [
      { type: 'coffee', quantity: 2 },
      { type: 'espresso', quantity: 1 },
    ]
    const total = calcDailyIntake(drinks)
    expect(total).toBe(2 * 95 + 63)
  })

  it('returns 0 for no drinks', () => {
    expect(calcDailyIntake([])).toBe(0)
  })

  it('FDA limit is 400mg — 4 coffees (380mg) is within limit', () => {
    const drinks = [{ type: 'coffee', quantity: 4 }]
    const total = calcDailyIntake(drinks)
    expect(total).toBe(380)
    expect(total).toBeLessThan(400)
  })

  it('5 coffees (475mg) exceeds FDA limit', () => {
    const drinks = [{ type: 'coffee', quantity: 5 }]
    const total = calcDailyIntake(drinks)
    expect(total).toBe(475)
    expect(total).toBeGreaterThan(400)
  })
})
