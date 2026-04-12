import { describe, it, expect } from 'vitest'

// Mirror the calculation logic from BloodSugarConverter.vue

const FACTOR = 18.018

function mgToMmol(mg) {
  return mg / FACTOR
}

function mmolToMg(mmol) {
  return mmol * FACTOR
}

function getFastingCategory(mg) {
  if (mg < 100) return 'normal'
  if (mg < 126) return 'prediabetes'
  return 'diabetes'
}

function getPostprandialCategory(mg) {
  if (mg < 140) return 'normal'
  if (mg < 200) return 'prediabetes'
  return 'diabetes'
}

// ---- Unit conversion ----

describe('mgToMmol', () => {
  it('95 mg/dL → ~5.27 mmol/L', () => {
    expect(mgToMmol(95)).toBeCloseTo(5.27, 1)
  })

  it('100 mg/dL → ~5.55 mmol/L', () => {
    expect(mgToMmol(100)).toBeCloseTo(5.55, 1)
  })

  it('126 mg/dL → ~6.99 mmol/L', () => {
    expect(mgToMmol(126)).toBeCloseTo(6.99, 1)
  })

  it('140 mg/dL → ~7.77 mmol/L', () => {
    expect(mgToMmol(140)).toBeCloseTo(7.77, 1)
  })

  it('200 mg/dL → ~11.10 mmol/L', () => {
    expect(mgToMmol(200)).toBeCloseTo(11.10, 1)
  })
})

describe('mmolToMg', () => {
  it('5.6 mmol/L → ~101 mg/dL', () => {
    expect(mmolToMg(5.6)).toBeCloseTo(100.9, 0)
  })

  it('7.0 mmol/L → ~126.1 mg/dL', () => {
    expect(mmolToMg(7.0)).toBeCloseTo(126.1, 0)
  })

  it('7.8 mmol/L → ~140.5 mg/dL', () => {
    expect(mmolToMg(7.8)).toBeCloseTo(140.5, 0)
  })

  it('roundtrip: 95 mg/dL → mmol → mg/dL', () => {
    expect(mmolToMg(mgToMmol(95))).toBeCloseTo(95, 5)
  })

  it('roundtrip: 200 mg/dL → mmol → mg/dL', () => {
    expect(mmolToMg(mgToMmol(200))).toBeCloseTo(200, 5)
  })
})

// ---- Fasting classification ----

describe('getFastingCategory', () => {
  it('70 mg/dL → normal', () => {
    expect(getFastingCategory(70)).toBe('normal')
  })

  it('99 mg/dL → normal (upper boundary)', () => {
    expect(getFastingCategory(99)).toBe('normal')
  })

  it('100 mg/dL → prediabetes (lower boundary)', () => {
    expect(getFastingCategory(100)).toBe('prediabetes')
  })

  it('115 mg/dL → prediabetes', () => {
    expect(getFastingCategory(115)).toBe('prediabetes')
  })

  it('125 mg/dL → prediabetes (upper boundary)', () => {
    expect(getFastingCategory(125)).toBe('prediabetes')
  })

  it('126 mg/dL → diabetes (lower boundary)', () => {
    expect(getFastingCategory(126)).toBe('diabetes')
  })

  it('200 mg/dL → diabetes', () => {
    expect(getFastingCategory(200)).toBe('diabetes')
  })
})

// ---- Postprandial classification ----

describe('getPostprandialCategory', () => {
  it('100 mg/dL → normal', () => {
    expect(getPostprandialCategory(100)).toBe('normal')
  })

  it('139 mg/dL → normal (upper boundary)', () => {
    expect(getPostprandialCategory(139)).toBe('normal')
  })

  it('140 mg/dL → prediabetes (lower boundary)', () => {
    expect(getPostprandialCategory(140)).toBe('prediabetes')
  })

  it('170 mg/dL → prediabetes', () => {
    expect(getPostprandialCategory(170)).toBe('prediabetes')
  })

  it('199 mg/dL → prediabetes (upper boundary)', () => {
    expect(getPostprandialCategory(199)).toBe('prediabetes')
  })

  it('200 mg/dL → diabetes (lower boundary)', () => {
    expect(getPostprandialCategory(200)).toBe('diabetes')
  })

  it('350 mg/dL → diabetes', () => {
    expect(getPostprandialCategory(350)).toBe('diabetes')
  })
})

// ---- Combined: mmol/L input classification ----

describe('mmol/L input → fasting classification', () => {
  it('5.5 mmol/L → normal fasting', () => {
    expect(getFastingCategory(mmolToMg(5.5))).toBe('normal')
  })

  it('5.6 mmol/L → prediabetes fasting (lower boundary)', () => {
    expect(getFastingCategory(mmolToMg(5.6))).toBe('prediabetes')
  })

  it('7.0 mmol/L → diabetes fasting (lower boundary)', () => {
    expect(getFastingCategory(mmolToMg(7.0))).toBe('diabetes')
  })
})

describe('mmol/L input → postprandial classification', () => {
  it('7.7 mmol/L → normal postprandial', () => {
    expect(getPostprandialCategory(mmolToMg(7.7))).toBe('normal')
  })

  it('7.8 mmol/L → prediabetes postprandial (lower boundary)', () => {
    expect(getPostprandialCategory(mmolToMg(7.8))).toBe('prediabetes')
  })

  it('11.2 mmol/L → diabetes postprandial', () => {
    expect(getPostprandialCategory(mmolToMg(11.2))).toBe('diabetes')
  })
})
