// Simplified Gail model — 5-year breast cancer risk estimate.
// References: Gail JM et al. JNCI 1989; Costantino JP et al. JNCI 1999;
// NCI Breast Cancer Risk Assessment Tool (BCRAT).
// This is an estimate — not a clinical decision tool.

const BASELINE_INCIDENCE_5Y = {
  35: 0.0044, 40: 0.0073, 45: 0.0114, 50: 0.0166,
  55: 0.0203, 60: 0.0245, 65: 0.0287, 70: 0.0314,
  75: 0.0322, 80: 0.0301,
}

function baselineFiveYearRisk(age) {
  if (!age || age < 35 || age > 85) return null
  const ages = Object.keys(BASELINE_INCIDENCE_5Y).map(Number).sort((a, b) => a - b)
  let lower = ages[0]
  for (const a of ages) if (a <= age) lower = a
  return BASELINE_INCIDENCE_5Y[lower]
}

function rrMenarche(ageAtMenarche) {
  if (!ageAtMenarche) return 1.0
  if (ageAtMenarche < 12) return 1.21
  if (ageAtMenarche <= 13) return 1.10
  return 1.00
}

function rrBiopsies(n) {
  if (!n || n <= 0) return 1.00
  if (n === 1) return 1.70
  return 2.88
}

function rrAtypicalHyperplasia(hasAH, biopsies) {
  if (!biopsies || biopsies <= 0) return 1.0
  if (hasAH === true) return 1.82
  if (hasAH === false) return 0.93
  return 1.0
}

const FIRST_BIRTH_MATRIX = {
  '<20':         [1.00, 2.61, 6.80],
  '20-24':       [1.24, 2.68, 5.78],
  '25-29':       [1.55, 2.76, 4.91],
  '>=30':        [1.93, 2.83, 4.17],
  'nulliparous': [1.93, 2.83, 4.17],
}

function rrFamilyAndFirstBirth(firstDegreeRelatives, ageAtFirstBirth, nulliparous) {
  const relKey = firstDegreeRelatives >= 2 ? 2 : (firstDegreeRelatives === 1 ? 1 : 0)
  let bracket = 'nulliparous'
  if (!nulliparous && ageAtFirstBirth != null) {
    if (ageAtFirstBirth < 20) bracket = '<20'
    else if (ageAtFirstBirth < 25) bracket = '20-24'
    else if (ageAtFirstBirth < 30) bracket = '25-29'
    else bracket = '>=30'
  }
  return FIRST_BIRTH_MATRIX[bracket][relKey]
}

export function calcRelativeRisk(inputs) {
  return rrMenarche(inputs.ageAtMenarche)
    * rrBiopsies(inputs.biopsies)
    * rrAtypicalHyperplasia(inputs.atypicalHyperplasia, inputs.biopsies)
    * rrFamilyAndFirstBirth(
        Number(inputs.firstDegreeRelatives) || 0,
        inputs.ageAtFirstBirth,
        inputs.nulliparous,
      )
}

export function calcBreastCancerRisk(inputs) {
  const baseline = baselineFiveYearRisk(inputs.age)
  if (baseline === null) return null
  const rr = calcRelativeRisk(inputs)
  const fiveYearRisk = Math.min(baseline * rr, 0.99)
  return {
    fiveYearRisk,
    averageFiveYearRisk: baseline,
    relativeRisk: rr,
    elevated: fiveYearRisk > 0.0166,
  }
}

export function riskCategory(fiveYearRisk) {
  if (fiveYearRisk == null) return null
  if (fiveYearRisk < 0.012) return 'low'
  if (fiveYearRisk < 0.0166) return 'average'
  if (fiveYearRisk < 0.030) return 'elevated'
  return 'high'
}
