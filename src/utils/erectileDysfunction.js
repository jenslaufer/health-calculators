// IIEF-5 (Sexual Health Inventory for Men, SHIM) — Rosen et al. 1999.
// Validated 5-question short form of the International Index of Erectile Function.
// Each question scored 1–5. Total range: 5–25. Lower = more severe ED.
//
// Severity bands (Cappelleri & Rosen 2005):
//   22–25  no ED
//   17–21  mild
//   12–16  mild–moderate
//    8–11  moderate
//    5–7   severe

function isValidAnswer(a) {
  return Number.isInteger(a) && a >= 1 && a <= 5
}

export function calcIief5Score(answers) {
  if (!Array.isArray(answers) || answers.length !== 5) return null
  if (!answers.every(isValidAnswer)) return null
  return answers.reduce((sum, a) => sum + a, 0)
}

export function classifyIief5(score) {
  if (!Number.isFinite(score) || score < 5 || score > 25) return null
  if (score >= 22) return 'noEd'
  if (score >= 17) return 'mild'
  if (score >= 12) return 'mildModerate'
  if (score >= 8) return 'moderate'
  return 'severe'
}

export function calcIief5Result(answers) {
  const score = calcIief5Score(answers)
  if (score === null) return null
  const severity = classifyIief5(score)
  return {
    score,
    severity,
    hasEd: severity !== 'noEd',
  }
}
