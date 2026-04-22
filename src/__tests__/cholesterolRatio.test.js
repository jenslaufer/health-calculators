import { describe, it, expect } from 'vitest'

const CHOL_FACTOR = 38.67
const TRIG_FACTOR = 88.57

function toMgDl(value, unit, type = 'chol') {
  if (unit === 'mmol') return value * (type === 'trig' ? TRIG_FACTOR : CHOL_FACTOR)
  return value
}

function calcFriedewaldLdl(total, hdl, trig) {
  if (trig >= 400) return null
  return total - hdl - trig / 5
}

function classifyTotalHdl(ratio) {
  if (!isFinite(ratio) || ratio <= 0) return 'invalid'
  if (ratio < 3.5) return 'optimal'
  if (ratio <= 5.0) return 'moderate'
  return 'high'
}

function calcCholesterolRatios(total, hdl, ldl, trig, unit = 'mg') {
  const totalMg = toMgDl(total, unit)
  const hdlMg = toMgDl(hdl, unit)
  const trigMg = toMgDl(trig, unit, 'trig')
  let ldlMg = ldl !== null ? toMgDl(ldl, unit) : null

  if (!hdlMg || hdlMg === 0) {
    return { classification: 'invalid', warnings: ['HDL cannot be 0'] }
  }

  const warnings = []
  if (totalMg < 100 || totalMg > 400) warnings.push('total-range')
  if (hdlMg < 20 || hdlMg > 120) warnings.push('hdl-range')
  if (ldlMg !== null && (ldlMg < 30 || ldlMg > 300)) warnings.push('ldl-range')
  if (trigMg < 30 || trigMg > 1000) warnings.push('trig-range')

  let ldlFriedewald = false
  if (ldlMg === null) {
    if (trigMg < 400) {
      ldlMg = calcFriedewaldLdl(totalMg, hdlMg, trigMg)
      ldlFriedewald = true
    } else {
      warnings.push('trig-too-high-for-ldl')
    }
  }

  const totalHdl = totalMg / hdlMg
  const ldlHdl = ldlMg !== null ? ldlMg / hdlMg : null
  const trigHdl = trigMg / hdlMg

  return {
    totalHdl,
    ldlHdl,
    trigHdl,
    ldlFriedewald,
    classification: classifyTotalHdl(totalHdl),
    warnings,
  }
}

describe('Cholesterol ratio calculations', () => {
  it('TC1: Total=150, HDL=50, LDL=80, Trig=100 → Total/HDL=3.0, LDL/HDL=1.6, optimal', () => {
    const r = calcCholesterolRatios(150, 50, 80, 100)
    expect(r.totalHdl).toBeCloseTo(3.0, 1)
    expect(r.ldlHdl).toBeCloseTo(1.6, 1)
    expect(r.classification).toBe('optimal')
  })

  it('TC2: Total=220, HDL=40, LDL=150, Trig=150 → Total/HDL=5.5, high', () => {
    const r = calcCholesterolRatios(220, 40, 150, 150)
    expect(r.totalHdl).toBeCloseTo(5.5, 1)
    expect(r.classification).toBe('high')
  })

  it('TC3: Friedewald fallback — Total=190, HDL=50, LDL=null, Trig=150 → LDL=110, LDL/HDL=2.2 (optimal), Total/HDL=3.8 (moderate)', () => {
    const r = calcCholesterolRatios(190, 50, null, 150)
    expect(r.ldlFriedewald).toBe(true)
    expect(r.ldlHdl).toBeCloseTo(2.2, 1)
    // LDL/HDL 2.2 < 2.5 → optimal; Total/HDL 3.8 → moderate
    expect(r.ldlHdl).toBeLessThan(2.5)
    expect(r.classification).toBe('moderate')
  })

  it('TC4: Trig>=400 → no Friedewald, ldlHdl=null, warning present', () => {
    const r = calcCholesterolRatios(250, 40, null, 450)
    expect(r.ldlHdl).toBeNull()
    expect(r.warnings).toContain('trig-too-high-for-ldl')
  })

  it('TC5: mmol/L input equivalent of TC1 → optimal', () => {
    // 3.88 mmol/L * 38.67 ≈ 150 mg/dL, 1.29 * 38.67 ≈ 50, 2.07 * 38.67 ≈ 80, 1.13 * 88.57 ≈ 100
    const r = calcCholesterolRatios(3.88, 1.29, 2.07, 1.13, 'mmol')
    expect(r.totalHdl).toBeCloseTo(3.0, 0)
    expect(r.classification).toBe('optimal')
  })

  it('TC6: HDL=0 → division guard, classification=invalid', () => {
    const r = calcCholesterolRatios(200, 0, 100, 100)
    expect(r.classification).toBe('invalid')
    expect(r.warnings).toContain('HDL cannot be 0')
  })

  it('TC7: moderate range — Total=175, HDL=40 → Total/HDL=4.375, moderate', () => {
    const r = calcCholesterolRatios(175, 40, 100, 100)
    expect(r.totalHdl).toBeCloseTo(4.375, 2)
    expect(r.classification).toBe('moderate')
  })
})

describe('Friedewald LDL calculation', () => {
  it('LDL = Total − HDL − Trig/5', () => {
    expect(calcFriedewaldLdl(190, 50, 150)).toBeCloseTo(110, 1)
  })

  it('returns null if Trig >= 400', () => {
    expect(calcFriedewaldLdl(250, 40, 450)).toBeNull()
  })
})

describe('Total/HDL classification thresholds', () => {
  it('ratio < 3.5 → optimal', () => expect(classifyTotalHdl(3.4)).toBe('optimal'))
  it('ratio 3.5 → moderate', () => expect(classifyTotalHdl(3.5)).toBe('moderate'))
  it('ratio 5.0 → moderate', () => expect(classifyTotalHdl(5.0)).toBe('moderate'))
  it('ratio > 5.0 → high', () => expect(classifyTotalHdl(5.1)).toBe('high'))
  it('ratio = 0 → invalid', () => expect(classifyTotalHdl(0)).toBe('invalid'))
})
