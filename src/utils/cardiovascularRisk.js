// 10-year cardiovascular disease risk based on the D'Agostino general CVD
// Framingham model (Circulation 2008;117:743-753). Inputs: age, sex,
// total cholesterol, HDL, systolic blood pressure (treated/untreated),
// smoking, diabetes. Output: percentage 10-year risk + category.
//
// Coefficients (β) and survival baseline S0(10) reproduced from the original
// paper, Tables 2-3.

const COEFFS = {
  male: {
    lnAge: 3.06117,
    lnTotChol: 1.12370,
    lnHdl: -0.93263,
    lnSbpUntreated: 1.93303,
    lnSbpTreated: 1.99881,
    smoker: 0.65451,
    diabetic: 0.57367,
    meanLP: 23.9802,
    s0: 0.88936,
  },
  female: {
    lnAge: 2.32888,
    lnTotChol: 1.20904,
    lnHdl: -0.70833,
    lnSbpUntreated: 2.76157,
    lnSbpTreated: 2.82263,
    smoker: 0.52873,
    diabetic: 0.69154,
    meanLP: 26.1931,
    s0: 0.95012,
  },
}

// 1 mmol/L cholesterol = 38.67 mg/dL
const MMOL_TO_MGDL = 38.67

export function classifyRisk(percent) {
  if (percent == null || !Number.isFinite(percent)) return null
  if (percent < 5) return 'low'
  if (percent < 7.5) return 'borderline'
  if (percent < 20) return 'intermediate'
  return 'high'
}

export function calcCardiovascularRisk(input) {
  if (!input || typeof input !== 'object') return null
  const {
    age, sex, totalChol, hdl, systolicBP,
    treated = false, smoker = false, diabetic = false,
    cholUnit = 'mgdl',
  } = input

  if (!Number.isFinite(age) || age < 30 || age > 79) return null
  if (sex !== 'male' && sex !== 'female') return null
  if (!Number.isFinite(totalChol) || totalChol <= 0) return null
  if (!Number.isFinite(hdl) || hdl <= 0) return null
  if (!Number.isFinite(systolicBP) || systolicBP <= 0) return null

  const tc = cholUnit === 'mmol' ? totalChol * MMOL_TO_MGDL : totalChol
  const hd = cholUnit === 'mmol' ? hdl * MMOL_TO_MGDL : hdl

  const c = COEFFS[sex]
  const lp =
    c.lnAge * Math.log(age) +
    c.lnTotChol * Math.log(tc) +
    c.lnHdl * Math.log(hd) +
    (treated ? c.lnSbpTreated : c.lnSbpUntreated) * Math.log(systolicBP) +
    (smoker ? c.smoker : 0) +
    (diabetic ? c.diabetic : 0)

  const risk = (1 - Math.pow(c.s0, Math.exp(lp - c.meanLP))) * 100
  const clamped = Math.max(0, Math.min(99, risk))

  return {
    risk: Number(clamped.toFixed(1)),
    category: classifyRisk(clamped),
    heartAge: estimateHeartAge(clamped, sex),
  }
}

// Heart age = age of someone with optimal risk factors who has the same risk.
// Reverse-solved against a reference profile (TC 180, HDL 50, SBP 110, no
// smoke/diabetes/treatment) to give an intuitive comparator.
function estimateHeartAge(percentRisk, sex) {
  if (percentRisk == null) return null
  const c = COEFFS[sex]
  const tc = 180
  const hd = 50
  const sbp = 110
  const baseline =
    c.lnTotChol * Math.log(tc) +
    c.lnHdl * Math.log(hd) +
    c.lnSbpUntreated * Math.log(sbp)

  // Solve: risk = 1 - s0^exp(lnAge*β + baseline - meanLP)
  // → ln(1 - r) = exp(...) * ln(s0)
  // → exp(...) = ln(1 - r) / ln(s0)
  // → lnAge*β + baseline - meanLP = ln(ln(1 - r) / ln(s0))
  // → age = exp((ln(...) - baseline + meanLP) / β)
  const r = percentRisk / 100
  if (r <= 0 || r >= 1) return null
  const inner = Math.log(1 - r) / Math.log(c.s0)
  if (inner <= 0) return null
  const lnAge = (Math.log(inner) - baseline + c.meanLP) / c.lnAge
  const age = Math.round(Math.exp(lnAge))
  if (!Number.isFinite(age) || age < 30 || age > 95) return null
  return age
}
