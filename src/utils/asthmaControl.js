// ACT — Asthma Control Test (Nathan RA et al., J Allergy Clin Immunol, 2004).
//
// Five questions about the past 4 weeks, each scored 1–5, total 5–25:
//   1. Activity limitation
//   2. Shortness of breath frequency
//   3. Night-time / early-morning symptoms
//   4. Rescue inhaler / SABA use
//   5. Self-rated control
//
// Score classification (Nathan 2004; GINA 2024):
//   25       : well controlled (perfect)
//   20–24    : well controlled
//   16–19    : not well controlled
//    5–15    : poorly controlled

export const ACT_QUESTIONS = [
  'activityLimitation',
  'shortnessOfBreath',
  'nightSymptoms',
  'rescueInhalerUse',
  'selfRating',
]

function isValidAnswer(v) {
  return Number.isInteger(v) && v >= 1 && v <= 5
}

export function calcActScore(answers) {
  if (!answers || typeof answers !== 'object') return null
  let total = 0
  for (const q of ACT_QUESTIONS) {
    if (!isValidAnswer(answers[q])) return null
    total += answers[q]
  }
  return total
}

export function classifyAct(total) {
  if (typeof total !== 'number' || !Number.isFinite(total)) return null
  if (total < 5 || total > 25) return null
  if (total >= 20) return 'wellControlled'
  if (total >= 16) return 'notWellControlled'
  return 'poorlyControlled'
}

export function evaluateAct(answers) {
  const score = calcActScore(answers)
  if (score === null) return null
  return { score, category: classifyAct(score) }
}
