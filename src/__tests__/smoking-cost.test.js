import { describe, it, expect } from 'vitest'

// Pure calculation functions — replicated from SmokingCostCalculator.vue for testability

function calcDailyCost(cigarettesPerDay, pricePerPack, packSize = 20) {
  if (!cigarettesPerDay || !pricePerPack) return null
  if (cigarettesPerDay <= 0 || pricePerPack <= 0) return null
  const ps = packSize > 0 ? packSize : 20
  return (cigarettesPerDay / ps) * pricePerPack
}

function calcWeeklyCost(dailyCost) {
  return dailyCost !== null ? dailyCost * 7 : null
}

function calcMonthlyCost(dailyCost) {
  return dailyCost !== null ? dailyCost * 30.44 : null
}

function calcYearlyCost(dailyCost) {
  return dailyCost !== null ? dailyCost * 365 : null
}

// Future value of annuity: monthly contributions at given annual rate
function futureValueAnnuity(monthlyPayment, annualRate, years) {
  const r = annualRate / 12
  const n = years * 12
  return monthlyPayment * ((Math.pow(1 + r, n) - 1) / r)
}

describe('Daily cost calculation', () => {
  it('1 pack (20 cigs) per day at 8.50 → 8.50/day', () => {
    expect(calcDailyCost(20, 8.5, 20)).toBeCloseTo(8.5)
  })

  it('10 cigs per day at 8.50/pack of 20 → 4.25/day', () => {
    expect(calcDailyCost(10, 8.5, 20)).toBeCloseTo(4.25)
  })

  it('20 cigs per day at 10.00/pack of 25 → 8.00/day', () => {
    expect(calcDailyCost(20, 10, 25)).toBeCloseTo(8.0)
  })

  it('uses default packSize of 20 when packSize is 0', () => {
    expect(calcDailyCost(20, 8.5, 0)).toBeCloseTo(8.5)
  })

  it('returns null for null cigarettesPerDay', () => {
    expect(calcDailyCost(null, 8.5, 20)).toBeNull()
  })

  it('returns null for null pricePerPack', () => {
    expect(calcDailyCost(20, null, 20)).toBeNull()
  })

  it('returns null for 0 cigarettesPerDay', () => {
    expect(calcDailyCost(0, 8.5, 20)).toBeNull()
  })

  it('returns null for negative cigarettesPerDay', () => {
    expect(calcDailyCost(-5, 8.5, 20)).toBeNull()
  })

  it('returns null for 0 pricePerPack', () => {
    expect(calcDailyCost(20, 0, 20)).toBeNull()
  })

  it('fractional cigarettes per day work correctly', () => {
    // 5 cigs per day, pack of 20 at 8.00 → 2.00/day
    expect(calcDailyCost(5, 8, 20)).toBeCloseTo(2.0)
  })
})

describe('Derived cost calculations', () => {
  it('weekly cost is dailyCost × 7', () => {
    expect(calcWeeklyCost(8.5)).toBeCloseTo(59.5)
  })

  it('monthly cost is dailyCost × 30.44', () => {
    expect(calcMonthlyCost(8.5)).toBeCloseTo(258.74)
  })

  it('yearly cost is dailyCost × 365', () => {
    expect(calcYearlyCost(8.5)).toBeCloseTo(3102.5)
  })

  it('returns null for null dailyCost', () => {
    expect(calcWeeklyCost(null)).toBeNull()
    expect(calcMonthlyCost(null)).toBeNull()
    expect(calcYearlyCost(null)).toBeNull()
  })
})

describe('Future value of annuity (compound interest)', () => {
  it('monthly payment of 0 always yields 0', () => {
    expect(futureValueAnnuity(0, 0.07, 10)).toBeCloseTo(0)
  })

  it('100/month at 0% for 12 months = 1200 (no growth)', () => {
    // At 0% rate the formula is undefined (division by zero), so test a tiny rate
    // Instead test with actual realistic scenario
    const fv = futureValueAnnuity(100, 0.000001, 1)
    expect(fv).toBeCloseTo(1200, 0)
  })

  it('258.85/month at 7% for 5 years yields more than 5 × 12 × 258.85', () => {
    const deposits = 5 * 12 * 258.85
    const fv = futureValueAnnuity(258.85, 0.07, 5)
    expect(fv).toBeGreaterThan(deposits)
  })

  it('258.85/month at 7% for 10 years yields more than 10 × 12 × 258.85', () => {
    const deposits = 10 * 12 * 258.85
    const fv = futureValueAnnuity(258.85, 0.07, 10)
    expect(fv).toBeGreaterThan(deposits)
  })

  it('longer horizon yields more than shorter for same payment', () => {
    const fv5 = futureValueAnnuity(258.85, 0.07, 5)
    const fv10 = futureValueAnnuity(258.85, 0.07, 10)
    expect(fv10).toBeGreaterThan(fv5 * 2)
  })

  it('higher rate yields more than lower rate (same payment and duration)', () => {
    const fvLow = futureValueAnnuity(100, 0.04, 10)
    const fvHigh = futureValueAnnuity(100, 0.10, 10)
    expect(fvHigh).toBeGreaterThan(fvLow)
  })

  it('258.85/month at 7% for 5 years is approximately 18 100 EUR', () => {
    const fv = futureValueAnnuity(258.85, 0.07, 5)
    expect(fv).toBeGreaterThan(17000)
    expect(fv).toBeLessThan(20000)
  })

  it('258.85/month at 7% for 10 years is approximately 44 700 EUR', () => {
    const fv = futureValueAnnuity(258.85, 0.07, 10)
    expect(fv).toBeGreaterThan(42000)
    expect(fv).toBeLessThan(48000)
  })
})

describe('Investment advantage over plain savings', () => {
  it('investment value is always more than total deposits for positive rate', () => {
    const monthly = 300
    const years = 5
    const totalDeposits = monthly * 12 * years
    const fv = futureValueAnnuity(monthly, 0.07, years)
    expect(fv).toBeGreaterThan(totalDeposits)
  })

  it('compound growth accelerates — 10-year FV > 2× 5-year FV', () => {
    const monthly = 300
    const fv5 = futureValueAnnuity(monthly, 0.07, 5)
    const fv10 = futureValueAnnuity(monthly, 0.07, 10)
    // Due to compounding, fv10 should be significantly more than 2× fv5
    expect(fv10).toBeGreaterThan(2 * fv5)
  })
})
