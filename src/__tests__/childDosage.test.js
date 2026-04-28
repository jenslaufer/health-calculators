import { describe, it, expect } from 'vitest'

// Pure paediatric dosing functions — extracted to be testable.
// Weight-based dosing: dose_mg = weight_kg * mg_per_kg

const DRUGS = {
  paracetamol: {
    singleMin: 10, singleMax: 15, dailyMax: 60, absoluteDailyMaxMg: 4000,
    minWeightKg: 4,
  },
  ibuprofen: {
    singleMin: 7, singleMax: 10, dailyMax: 30, absoluteDailyMaxMg: 2400,
    minWeightKg: 5,
  },
  amoxicillin: {
    singleMin: 7, singleMax: 15, dailyMax: 90, absoluteDailyMaxMg: 4000,
    minWeightKg: 3,
  },
}

function calcSingleDoseMg(weightKg, mgPerKg) {
  if (!weightKg || weightKg <= 0 || !mgPerKg || mgPerKg <= 0) return 0
  return weightKg * mgPerKg
}

function calcMaxDailyMg(weightKg, drugKey) {
  const drug = DRUGS[drugKey]
  if (!drug || !weightKg || weightKg <= 0) return 0
  return Math.min(weightKg * drug.dailyMax, drug.absoluteDailyMaxMg)
}

function calcVolumeMl(doseMg, concentrationMgPerMl) {
  if (!doseMg || doseMg <= 0 || !concentrationMgPerMl || concentrationMgPerMl <= 0) return null
  return doseMg / concentrationMgPerMl
}

function getWarnings(weightKg, drugKey, mgPerKg) {
  const warnings = []
  const drug = DRUGS[drugKey]
  if (!weightKg || weightKg <= 0) return warnings
  if (weightKg < 3) warnings.push('weightTooLow')
  if (weightKg > 80) warnings.push('weightTooHigh')
  if (drug && weightKg < drug.minWeightKg) warnings.push('belowMinWeight')
  if (drug && mgPerKg && mgPerKg > drug.singleMax) warnings.push('overdose')
  return warnings
}

describe('Paracetamol single dose', () => {
  it('15 mg/kg × 20 kg → 300 mg', () => {
    expect(calcSingleDoseMg(20, 15)).toBe(300)
  })

  it('10 mg/kg × 10 kg → 100 mg', () => {
    expect(calcSingleDoseMg(10, 10)).toBe(100)
  })

  it('returns 0 for zero weight', () => {
    expect(calcSingleDoseMg(0, 15)).toBe(0)
  })

  it('returns 0 for null mg/kg', () => {
    expect(calcSingleDoseMg(20, null)).toBe(0)
  })
})

describe('Paracetamol max daily', () => {
  it('60 mg/kg × 20 kg → 1200 mg', () => {
    expect(calcMaxDailyMg(20, 'paracetamol')).toBe(1200)
  })

  it('caps at 4000 mg adult ceiling for very large patient', () => {
    expect(calcMaxDailyMg(100, 'paracetamol')).toBe(4000)
  })
})

describe('Ibuprofen single dose', () => {
  it('10 mg/kg × 15 kg → 150 mg', () => {
    expect(calcSingleDoseMg(15, 10)).toBe(150)
  })

  it('7 mg/kg × 12 kg → 84 mg', () => {
    expect(calcSingleDoseMg(12, 7)).toBe(84)
  })
})

describe('Ibuprofen max daily', () => {
  it('30 mg/kg × 15 kg → 450 mg', () => {
    expect(calcMaxDailyMg(15, 'ibuprofen')).toBe(450)
  })

  it('caps at 2400 mg adult ceiling', () => {
    expect(calcMaxDailyMg(100, 'ibuprofen')).toBe(2400)
  })
})

describe('Volume from concentration', () => {
  it('300 mg at 24 mg/mL → 12.5 mL', () => {
    expect(calcVolumeMl(300, 24)).toBeCloseTo(12.5, 2)
  })

  it('150 mg at 20 mg/mL → 7.5 mL', () => {
    expect(calcVolumeMl(150, 20)).toBeCloseTo(7.5, 2)
  })

  it('returns null for missing concentration', () => {
    expect(calcVolumeMl(300, null)).toBeNull()
  })

  it('returns null for zero dose', () => {
    expect(calcVolumeMl(0, 24)).toBeNull()
  })
})

describe('Plausibility warnings', () => {
  it('weight < 3 kg flags weightTooLow', () => {
    expect(getWarnings(2.5, 'paracetamol', 15)).toContain('weightTooLow')
  })

  it('weight > 80 kg flags weightTooHigh', () => {
    expect(getWarnings(85, 'paracetamol', 15)).toContain('weightTooHigh')
  })

  it('20 kg child with 15 mg/kg paracetamol → no warnings', () => {
    expect(getWarnings(20, 'paracetamol', 15)).toEqual([])
  })

  it('Ibuprofen at 4 kg flags belowMinWeight', () => {
    expect(getWarnings(4, 'ibuprofen', 10)).toContain('belowMinWeight')
  })
})

describe('Overdose guard', () => {
  it('paracetamol > 15 mg/kg flags overdose', () => {
    expect(getWarnings(20, 'paracetamol', 25)).toContain('overdose')
  })

  it('ibuprofen > 10 mg/kg flags overdose', () => {
    expect(getWarnings(20, 'ibuprofen', 15)).toContain('overdose')
  })

  it('paracetamol at 15 mg/kg → no overdose flag', () => {
    expect(getWarnings(20, 'paracetamol', 15)).not.toContain('overdose')
  })
})
