import { describe, it, expect } from 'vitest'
import { calcCardiovascularRisk, classifyRisk } from '../utils/cardiovascularRisk.js'

// 10-year cardiovascular risk based on D'Agostino's Framingham general CVD model
// (Circulation 2008). Inputs: age, sex, total cholesterol, HDL, systolic BP,
// BP treatment, smoking, diabetes. Output: percentage risk + category.

describe('Framingham CVD risk — input validation', () => {
  it('returns null for missing required inputs', () => {
    expect(calcCardiovascularRisk({})).toBeNull()
    expect(calcCardiovascularRisk({ age: 50, sex: 'male' })).toBeNull()
  })

  it('returns null for out-of-range age (model validated 30-79)', () => {
    const base = {
      sex: 'male', totalChol: 200, hdl: 50,
      systolicBP: 120, treated: false, smoker: false, diabetic: false,
    }
    expect(calcCardiovascularRisk({ ...base, age: 25 })).toBeNull()
    expect(calcCardiovascularRisk({ ...base, age: 85 })).toBeNull()
  })

  it('returns null for non-positive cholesterol or BP', () => {
    const base = {
      age: 50, sex: 'male', totalChol: 200, hdl: 50,
      systolicBP: 120, treated: false, smoker: false, diabetic: false,
    }
    expect(calcCardiovascularRisk({ ...base, totalChol: 0 })).toBeNull()
    expect(calcCardiovascularRisk({ ...base, hdl: -1 })).toBeNull()
    expect(calcCardiovascularRisk({ ...base, systolicBP: 0 })).toBeNull()
  })
})

describe('Framingham CVD risk — male profiles', () => {
  it('low risk: 40 y/o male, healthy values → <5 %', () => {
    const r = calcCardiovascularRisk({
      age: 40, sex: 'male', totalChol: 180, hdl: 60,
      systolicBP: 110, treated: false, smoker: false, diabetic: false,
    })
    expect(r.risk).toBeGreaterThan(0)
    expect(r.risk).toBeLessThan(5)
    expect(r.category).toBe('low')
  })

  it('high risk: 65 y/o male smoker, hypertension, diabetes → >20 %', () => {
    const r = calcCardiovascularRisk({
      age: 65, sex: 'male', totalChol: 260, hdl: 35,
      systolicBP: 160, treated: true, smoker: true, diabetic: true,
    })
    expect(r.risk).toBeGreaterThan(20)
    expect(r.category).toBe('high')
  })

  it('intermediate risk: 55 y/o male moderate values', () => {
    const r = calcCardiovascularRisk({
      age: 55, sex: 'male', totalChol: 220, hdl: 45,
      systolicBP: 135, treated: false, smoker: false, diabetic: false,
    })
    expect(r.risk).toBeGreaterThan(7.5)
    expect(r.risk).toBeLessThan(20)
    expect(r.category).toBe('intermediate')
  })
})

describe('Framingham CVD risk — female profiles', () => {
  it('low risk: 40 y/o female, healthy values → <5 %', () => {
    const r = calcCardiovascularRisk({
      age: 40, sex: 'female', totalChol: 180, hdl: 65,
      systolicBP: 110, treated: false, smoker: false, diabetic: false,
    })
    expect(r.risk).toBeLessThan(5)
    expect(r.category).toBe('low')
  })

  it('high risk: 70 y/o female smoker with hypertension and diabetes', () => {
    const r = calcCardiovascularRisk({
      age: 70, sex: 'female', totalChol: 260, hdl: 35,
      systolicBP: 165, treated: true, smoker: true, diabetic: true,
    })
    expect(r.risk).toBeGreaterThan(20)
    expect(r.category).toBe('high')
  })

  it('women have lower risk than men with identical inputs', () => {
    const base = {
      age: 55, totalChol: 220, hdl: 45,
      systolicBP: 140, treated: false, smoker: true, diabetic: false,
    }
    const male = calcCardiovascularRisk({ ...base, sex: 'male' })
    const female = calcCardiovascularRisk({ ...base, sex: 'female' })
    expect(female.risk).toBeLessThan(male.risk)
  })
})

describe('Framingham CVD risk — risk factor effects', () => {
  const base = {
    age: 55, sex: 'male', totalChol: 200, hdl: 50,
    systolicBP: 130, treated: false, smoker: false, diabetic: false,
  }

  it('smoking increases risk', () => {
    const noSmoke = calcCardiovascularRisk(base)
    const smoke = calcCardiovascularRisk({ ...base, smoker: true })
    expect(smoke.risk).toBeGreaterThan(noSmoke.risk)
  })

  it('diabetes increases risk', () => {
    const noDm = calcCardiovascularRisk(base)
    const dm = calcCardiovascularRisk({ ...base, diabetic: true })
    expect(dm.risk).toBeGreaterThan(noDm.risk)
  })

  it('higher SBP increases risk', () => {
    const lowBp = calcCardiovascularRisk({ ...base, systolicBP: 110 })
    const highBp = calcCardiovascularRisk({ ...base, systolicBP: 170 })
    expect(highBp.risk).toBeGreaterThan(lowBp.risk)
  })

  it('higher HDL decreases risk', () => {
    const lowHdl = calcCardiovascularRisk({ ...base, hdl: 30 })
    const highHdl = calcCardiovascularRisk({ ...base, hdl: 75 })
    expect(highHdl.risk).toBeLessThan(lowHdl.risk)
  })

  it('treated BP at the same SBP is slightly higher risk than untreated', () => {
    const untreated = calcCardiovascularRisk({ ...base, systolicBP: 150, treated: false })
    const treated = calcCardiovascularRisk({ ...base, systolicBP: 150, treated: true })
    expect(treated.risk).toBeGreaterThan(untreated.risk)
  })
})

describe('Cholesterol unit conversion', () => {
  it('mmol/L input gives same result as equivalent mg/dL input', () => {
    // 200 mg/dL ≈ 5.17 mmol/L  (factor 38.67)
    const mg = calcCardiovascularRisk({
      age: 50, sex: 'male', totalChol: 200, hdl: 50,
      systolicBP: 120, treated: false, smoker: false, diabetic: false,
      cholUnit: 'mgdl',
    })
    const mmol = calcCardiovascularRisk({
      age: 50, sex: 'male', totalChol: 5.17, hdl: 1.29,
      systolicBP: 120, treated: false, smoker: false, diabetic: false,
      cholUnit: 'mmol',
    })
    expect(Math.abs(mg.risk - mmol.risk)).toBeLessThan(0.5)
  })
})

describe('Risk categorisation thresholds', () => {
  it('classifies <5 % as low', () => {
    expect(classifyRisk(2)).toBe('low')
    expect(classifyRisk(4.9)).toBe('low')
  })
  it('classifies 5-7.5 % as borderline', () => {
    expect(classifyRisk(5)).toBe('borderline')
    expect(classifyRisk(7.4)).toBe('borderline')
  })
  it('classifies 7.5-20 % as intermediate', () => {
    expect(classifyRisk(7.5)).toBe('intermediate')
    expect(classifyRisk(19.9)).toBe('intermediate')
  })
  it('classifies ≥20 % as high', () => {
    expect(classifyRisk(20)).toBe('high')
    expect(classifyRisk(35)).toBe('high')
  })
})
