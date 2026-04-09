import { describe, it, expect } from 'vitest'

// Mirror the calculation logic from HbA1cConverter.vue

function hba1cToEagMg(hba1c) {
  return 28.7 * hba1c - 46.7
}

function mgToMmol(mg) {
  return mg / 18.015
}

function mmolToMg(mmol) {
  return mmol * 18.015
}

function eagMgToHba1c(eagMg) {
  return (eagMg + 46.7) / 28.7
}

function getRiskCategory(hba1c) {
  if (hba1c < 5.7) return 'normal'
  if (hba1c < 6.5) return 'prediabetes'
  return 'diabetes'
}

// ---- HbA1c → eAG (mg/dL) ----

describe('hba1cToEagMg', () => {
  it('HbA1c 6.5% → eAG ~140 mg/dL', () => {
    expect(hba1cToEagMg(6.5)).toBeCloseTo(139.85, 1)
  })

  it('HbA1c 5.0% → eAG ~96.8 mg/dL', () => {
    expect(hba1cToEagMg(5.0)).toBeCloseTo(96.8, 1)
  })

  it('HbA1c 7.0% → eAG ~154.2 mg/dL', () => {
    expect(hba1cToEagMg(7.0)).toBeCloseTo(154.2, 0)
  })

  it('HbA1c 5.7% → eAG ~117 mg/dL (prediabetes lower boundary)', () => {
    expect(hba1cToEagMg(5.7)).toBeCloseTo(116.89, 1)
  })

  it('HbA1c 4.0% → eAG ~68 mg/dL (low end)', () => {
    expect(hba1cToEagMg(4.0)).toBeCloseTo(68.1, 1)
  })

  it('HbA1c 12.0% → eAG ~297.7 mg/dL (high diabetes)', () => {
    expect(hba1cToEagMg(12.0)).toBeCloseTo(297.7, 0)
  })
})

// ---- Unit conversion ----

describe('mgToMmol', () => {
  it('140 mg/dL → ~7.77 mmol/L', () => {
    expect(mgToMmol(140)).toBeCloseTo(7.77, 1)
  })

  it('97 mg/dL → ~5.38 mmol/L', () => {
    expect(mgToMmol(97)).toBeCloseTo(5.38, 1)
  })

  it('154 mg/dL → ~8.55 mmol/L', () => {
    expect(mgToMmol(154)).toBeCloseTo(8.55, 1)
  })
})

describe('mmolToMg', () => {
  it('7.77 mmol/L → ~140 mg/dL', () => {
    expect(mmolToMg(7.77)).toBeCloseTo(139.9, 0)
  })

  it('roundtrip: 140 mg/dL → mmol → mg/dL', () => {
    expect(mmolToMg(mgToMmol(140))).toBeCloseTo(140, 5)
  })
})

// ---- Glucose → HbA1c ----

describe('eagMgToHba1c', () => {
  it('eAG 140 mg/dL → HbA1c ~6.5%', () => {
    expect(eagMgToHba1c(140)).toBeCloseTo(6.5, 1)
  })

  it('eAG 97 mg/dL → HbA1c ~5.0%', () => {
    expect(eagMgToHba1c(97)).toBeCloseTo(5.0, 0)
  })

  it('roundtrip: HbA1c 7.0 → eAG → HbA1c', () => {
    const eag = hba1cToEagMg(7.0)
    expect(eagMgToHba1c(eag)).toBeCloseTo(7.0, 5)
  })

  it('roundtrip: HbA1c 5.5 → eAG → HbA1c', () => {
    const eag = hba1cToEagMg(5.5)
    expect(eagMgToHba1c(eag)).toBeCloseTo(5.5, 5)
  })
})

// ---- Risk categories (ADA boundaries) ----

describe('getRiskCategory', () => {
  it('4.0% → normal', () => {
    expect(getRiskCategory(4.0)).toBe('normal')
  })

  it('5.6% → normal', () => {
    expect(getRiskCategory(5.6)).toBe('normal')
  })

  it('5.7% → prediabetes (lower boundary)', () => {
    expect(getRiskCategory(5.7)).toBe('prediabetes')
  })

  it('6.0% → prediabetes', () => {
    expect(getRiskCategory(6.0)).toBe('prediabetes')
  })

  it('6.4% → prediabetes (upper boundary)', () => {
    expect(getRiskCategory(6.4)).toBe('prediabetes')
  })

  it('6.5% → diabetes (lower boundary)', () => {
    expect(getRiskCategory(6.5)).toBe('diabetes')
  })

  it('7.0% → diabetes', () => {
    expect(getRiskCategory(7.0)).toBe('diabetes')
  })

  it('9.0% → diabetes', () => {
    expect(getRiskCategory(9.0)).toBe('diabetes')
  })

  it('12.0% → diabetes (high value)', () => {
    expect(getRiskCategory(12.0)).toBe('diabetes')
  })
})

// ---- Combined: glucose (mmol/L) → HbA1c ----

describe('mmol/L glucose to HbA1c roundtrip', () => {
  it('7.77 mmol/L → HbA1c ~6.5%', () => {
    const mg = mmolToMg(7.77)
    expect(eagMgToHba1c(mg)).toBeCloseTo(6.5, 0)
  })

  it('5.4 mmol/L → HbA1c ~normal range', () => {
    const mg = mmolToMg(5.4)
    const hba1c = eagMgToHba1c(mg)
    expect(getRiskCategory(hba1c)).toBe('normal')
  })
})
