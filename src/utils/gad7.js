// GAD-7 — Generalized Anxiety Disorder 7-item scale (Spitzer RL et al., Arch Intern Med, 2006).
//
// Seven questions about the past 2 weeks, each scored 0–3, total 0–21:
//   1. Feeling nervous, anxious or on edge
//   2. Not being able to stop or control worrying
//   3. Worrying too much about different things
//   4. Trouble relaxing
//   5. Being so restless that it's hard to sit still
//   6. Becoming easily annoyed or irritable
//   7. Feeling afraid as if something awful might happen
//
// Severity band (Spitzer 2006):
//    0– 4 : Minimal
//    5– 9 : Mild
//   10–14 : Moderate
//   15–21 : Severe
//
// Cutoff: a score ≥ 10 warrants further clinical evaluation.

export const GAD7_QUESTIONS = [
  'feelingNervous',
  'cantStopWorrying',
  'worryingTooMuch',
  'troubleRelaxing',
  'restless',
  'irritable',
  'afraidSomethingAwful',
]

function isValidAnswer(v) {
  return Number.isInteger(v) && v >= 0 && v <= 3
}

export function calcGad7Score(answers) {
  if (!answers || typeof answers !== 'object') return null
  let total = 0
  for (const q of GAD7_QUESTIONS) {
    if (!isValidAnswer(answers[q])) return null
    total += answers[q]
  }
  return total
}

export function classifyGad7(total) {
  if (typeof total !== 'number' || !Number.isFinite(total)) return null
  if (total < 0 || total > 21) return null
  if (total <= 4) return 'Minimal'
  if (total <= 9) return 'Mild'
  if (total <= 14) return 'Moderate'
  return 'Severe'
}

export function needsEvaluation(total) {
  return typeof total === 'number' && Number.isFinite(total) && total >= 10
}

export function evaluateGad7(answers) {
  const score = calcGad7Score(answers)
  if (score === null) return null
  return {
    score,
    band: classifyGad7(score),
    needsEvaluation: needsEvaluation(score),
  }
}
