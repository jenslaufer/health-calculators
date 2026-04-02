import { describe, it, expect } from 'vitest'

// 1RM formulas
function epley(weight, reps) {
  if (reps === 1) return weight
  return weight * (1 + reps / 30)
}

function brzycki(weight, reps) {
  if (reps === 1) return weight
  return weight * (36 / (37 - reps))
}

function lombardi(weight, reps) {
  return weight * Math.pow(reps, 0.10)
}

function oconner(weight, reps) {
  return weight * (1 + reps * 0.025)
}

function convertLbsToKg(lbs) {
  return lbs * 0.453592
}

function convertKgToLbs(kg) {
  return kg / 0.453592
}

function percentageOf1RM(oneRepMax, percentage) {
  return Math.round(oneRepMax * percentage / 100)
}

describe('Epley formula', () => {
  it('100 kg x 5 reps = 117 kg', () => {
    expect(Math.round(epley(100, 5))).toBe(117)
  })

  it('80 kg x 10 reps = 107 kg', () => {
    expect(Math.round(epley(80, 10))).toBe(107)
  })

  it('1 rep returns the weight itself', () => {
    expect(epley(100, 1)).toBe(100)
  })

  it('60 kg x 8 reps = 76 kg', () => {
    expect(Math.round(epley(60, 8))).toBe(76)
  })

  it('140 kg x 3 reps = 154 kg', () => {
    expect(Math.round(epley(140, 3))).toBe(154)
  })
})

describe('Brzycki formula', () => {
  it('100 kg x 5 reps = 113 kg', () => {
    expect(Math.round(brzycki(100, 5))).toBe(113)
  })

  it('80 kg x 10 reps = 107 kg', () => {
    expect(Math.round(brzycki(80, 10))).toBe(107)
  })

  it('1 rep returns the weight itself', () => {
    expect(brzycki(100, 1)).toBe(100)
  })

  it('60 kg x 6 reps = 70 kg', () => {
    expect(Math.round(brzycki(60, 6))).toBe(70)
  })
})

describe('Lombardi formula', () => {
  it('100 kg x 5 reps = 117 kg', () => {
    expect(Math.round(lombardi(100, 5))).toBe(117)
  })

  it('80 kg x 10 reps = 101 kg', () => {
    expect(Math.round(lombardi(80, 10))).toBe(101)
  })

  it('1 rep returns the weight itself', () => {
    expect(Math.round(lombardi(100, 1))).toBe(100)
  })
})

describe("O'Conner formula", () => {
  it('100 kg x 5 reps = 113 kg', () => {
    expect(Math.round(oconner(100, 5))).toBe(113)
  })

  it('80 kg x 10 reps = 100 kg', () => {
    expect(Math.round(oconner(80, 10))).toBe(100)
  })

  it('1 rep = weight * 1.025', () => {
    expect(Math.round(oconner(100, 1))).toBe(102)
  })
})

describe('Weight conversion', () => {
  it('converts 225 lbs to ~102 kg', () => {
    expect(Math.round(convertLbsToKg(225))).toBe(102)
  })

  it('converts 100 kg to ~220 lbs', () => {
    expect(Math.round(convertKgToLbs(100))).toBe(220)
  })
})

describe('Percentage chart', () => {
  it('95% of 100 kg = 95 kg', () => {
    expect(percentageOf1RM(100, 95)).toBe(95)
  })

  it('80% of 120 kg = 96 kg', () => {
    expect(percentageOf1RM(120, 80)).toBe(96)
  })

  it('50% of 200 kg = 100 kg', () => {
    expect(percentageOf1RM(200, 50)).toBe(100)
  })
})

describe('Formula comparison', () => {
  it('all formulas return higher 1RM for more reps at same weight', () => {
    const w = 100
    const lowReps = 3
    const highReps = 10

    expect(epley(w, highReps)).toBeGreaterThan(epley(w, lowReps))
    expect(brzycki(w, highReps)).toBeGreaterThan(brzycki(w, lowReps))
    expect(lombardi(w, highReps)).toBeGreaterThan(lombardi(w, lowReps))
    expect(oconner(w, highReps)).toBeGreaterThan(oconner(w, lowReps))
  })

  it('all formulas agree closely for 5 reps at 100 kg (110-120 range)', () => {
    const results = [epley(100, 5), brzycki(100, 5), lombardi(100, 5), oconner(100, 5)]
    results.forEach(r => {
      expect(r).toBeGreaterThan(110)
      expect(r).toBeLessThan(120)
    })
  })
})

describe('Edge cases', () => {
  it('very heavy weight, low reps', () => {
    expect(Math.round(epley(300, 2))).toBe(320)
  })

  it('light weight, high reps', () => {
    expect(Math.round(epley(20, 15))).toBe(30)
  })

  it('lbs conversion with Epley calculation', () => {
    const weightKg = convertLbsToKg(225)
    const result = epley(weightKg, 5)
    expect(Math.round(result)).toBe(119)
  })
})
