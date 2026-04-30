import { describe, it, expect } from 'vitest'

const MGDL_PER_MMOL_CHOL = 38.67
const MGDL_PER_MMOL_TRIG = 88.57

function toMgDl(value, unit, kind = 'cholesterol') {
  if (value === null || value === undefined || value === '') return null
  const num = Number(value)
  if (!Number.isFinite(num)) return null
  if (unit === 'mmol') {
    const factor = kind === 'triglycerides' ? MGDL_PER_MMOL_TRIG : MGDL_PER_MMOL_CHOL
    return num * factor
  }
  return num
}

function friedewaldLdl(total, hdl, trig) {
  if (total == null || hdl == null || trig == null) return null
  if (trig >= 400) return null
  return total - hdl - trig / 5
}

function plausibilityWarnings(total, hdl, ldl, trig) {
  const w = []
  if (total != null && (total < 100 || total > 400)) w.push('totalOutOfRange')
  if (hdl != null && (hdl < 20 || hdl > 120)) w.push('hdlOutOfRange')
  if (ldl != null && (ldl < 30 || ldl > 300)) w.push('ldlOutOfRange')
  if (trig != null && (trig < 30 || trig > 1000)) w.push('trigOutOfRange')
  return w
}

function calcRatios({ total, hdl, ldl, trig, unit = 'mg' }) {
  const t = toMgDl(total, unit, 'cholesterol')
  const h = toMgDl(hdl, unit, 'cholesterol')
  let l = toMgDl(ldl, unit, 'cholesterol')
  const tr = toMgDl(trig, unit, 'triglycerides')

  const warnings = []
  if (h === 0) {
    return {
      totalHdl: null, ldlHdl: null, trigHdl: null,
      ldl: null, classification: 'invalid',
      warnings: ['hdlZero'],
    }
  }

  let friedewaldUsed = false
  let friedewaldSkipped = false
  if (l == null && t != null && h != null && tr != null) {
    if (tr < 400) {
      l = friedewaldLdl(t, h, tr)
      friedewaldUsed = true
    } else {
      friedewaldSkipped = true
      warnings.push('friedewaldSkipped')
    }
  }

  const totalHdl = (t != null && h) ? t / h : null
  const ldlHdl = (l != null && h) ? l / h : null
  const trigHdl = (tr != null && h) ? tr / h : null

  let classification = null
  if (totalHdl != null) {
    if (totalHdl < 3.5) classification = 'optimal'
    else if (totalHdl <= 5.0) classification = 'moderate'
    else classification = 'high'
  }

  warnings.push(...plausibilityWarnings(t, h, l, tr))

  return {
    totalHdl, ldlHdl, trigHdl, ldl: l,
    classification,
    friedewaldUsed,
    friedewaldSkipped,
    warnings,
  }
}

describe('Unit conversion mmol/L → mg/dL', () => {
  it('converts cholesterol mmol → mg/dL', () => {
    expect(toMgDl(5.17, 'mmol', 'cholesterol')).toBeCloseTo(199.92, 1)
  })

  it('converts triglycerides mmol → mg/dL', () => {
    expect(toMgDl(1.1, 'mmol', 'triglycerides')).toBeCloseTo(97.43, 1)
  })

  it('passes through mg/dL unchanged', () => {
    expect(toMgDl(150, 'mg', 'cholesterol')).toBe(150)
  })
})

describe('Friedewald LDL fallback', () => {
  it('190 - 50 - 150/5 = 110', () => {
    expect(friedewaldLdl(190, 50, 150)).toBe(110)
  })

  it('returns null when triglycerides ≥ 400', () => {
    expect(friedewaldLdl(250, 40, 450)).toBe(null)
  })
})

describe('Cholesterol ratio classification', () => {
  it('Test 1: Total=150, HDL=50, LDL=80, Trig=100 → optimal (3.0)', () => {
    const r = calcRatios({ total: 150, hdl: 50, ldl: 80, trig: 100 })
    expect(r.totalHdl).toBeCloseTo(3.0, 2)
    expect(r.ldlHdl).toBeCloseTo(1.6, 2)
    expect(r.classification).toBe('optimal')
  })

  it('Test 2: Total=220, HDL=40, LDL=150, Trig=150 → high (5.5)', () => {
    const r = calcRatios({ total: 220, hdl: 40, ldl: 150, trig: 150 })
    expect(r.totalHdl).toBeCloseTo(5.5, 2)
    expect(r.classification).toBe('high')
  })

  it('Test 3: Friedewald fallback — Total=160, HDL=50, LDL null, Trig=150 → LDL=80, optimal', () => {
    const r = calcRatios({ total: 160, hdl: 50, ldl: null, trig: 150 })
    expect(r.friedewaldUsed).toBe(true)
    expect(r.ldl).toBe(80)
    expect(r.ldlHdl).toBeCloseTo(1.6, 2)
    expect(r.classification).toBe('optimal')
  })

  it('Test 4: Friedewald skipped when Trig ≥ 400 — warning present', () => {
    const r = calcRatios({ total: 250, hdl: 40, ldl: null, trig: 450 })
    expect(r.friedewaldSkipped).toBe(true)
    expect(r.ldlHdl).toBe(null)
    expect(r.warnings).toContain('friedewaldSkipped')
  })

  it('Test 5: mmol/L input — 3.88 / 1.30 ≈ 3.0 → optimal', () => {
    const r = calcRatios({ total: 3.88, hdl: 1.30, ldl: 2.07, trig: 1.13, unit: 'mmol' })
    expect(r.classification).toBe('optimal')
    expect(r.totalHdl).toBeCloseTo(3.0, 1)
  })

  it('Test 6: HDL=0 → invalid with hdlZero warning', () => {
    const r = calcRatios({ total: 200, hdl: 0, ldl: 120, trig: 150 })
    expect(r.classification).toBe('invalid')
    expect(r.warnings).toContain('hdlZero')
  })

  it('moderate band: ratio between 3.5 and 5.0', () => {
    const r = calcRatios({ total: 200, hdl: 50, ldl: 130, trig: 150 })
    expect(r.totalHdl).toBeCloseTo(4.0, 1)
    expect(r.classification).toBe('moderate')
  })
})

describe('Plausibility warnings', () => {
  it('flags out-of-range total cholesterol', () => {
    const w = plausibilityWarnings(80, 50, 100, 100)
    expect(w).toContain('totalOutOfRange')
  })

  it('flags out-of-range HDL', () => {
    const w = plausibilityWarnings(200, 15, 100, 100)
    expect(w).toContain('hdlOutOfRange')
  })

  it('no warnings for plausible values', () => {
    expect(plausibilityWarnings(200, 50, 130, 150)).toEqual([])
  })
})
