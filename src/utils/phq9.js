// PHQ-9 — Patient Health Questionnaire 9-item depression scale (Kroenke, Spitzer & Williams, J Gen Intern Med, 2001).
//
// Nine questions about the past 2 weeks, each scored 0–3, total 0–27:
//   1. Little interest or pleasure in doing things
//   2. Feeling down, depressed, or hopeless
//   3. Trouble falling or staying asleep, or sleeping too much
//   4. Feeling tired or having little energy
//   5. Poor appetite or overeating
//   6. Feeling bad about yourself — or that you are a failure
//   7. Trouble concentrating on things
//   8. Moving or speaking so slowly that others could notice — or the opposite, restlessness
//   9. Thoughts that you would be better off dead, or of hurting yourself
//
// Severity bands (Kroenke 2001):
//    0– 4 : Minimal
//    5– 9 : Mild
//   10–14 : Moderate
//   15–19 : ModeratelySevere
//   20–27 : Severe
//
// Cutoff: a score ≥ 10 warrants further clinical evaluation.
// Item-9 safety flag: any answer ≥ 1 on item 9 (self-harm) fires a crisis note,
// INDEPENDENT of the total score — a low total with a positive item 9 is the critical case.

export const PHQ9_QUESTIONS = [
  'littleInterest',
  'feelingDown',
  'sleepTrouble',
  'tiredLowEnergy',
  'appetiteProblems',
  'feelingBadAboutSelf',
  'troubleConcentrating',
  'movingSlowlyOrRestless',
  'selfHarmThoughts',
]

// Item 9 — the self-harm item that drives the safety flag.
const ITEM_9 = 'selfHarmThoughts'

function isValidAnswer(v) {
  return Number.isInteger(v) && v >= 0 && v <= 3
}

export function calcPhq9Score(answers) {
  if (!answers || typeof answers !== 'object') return null
  let total = 0
  for (const q of PHQ9_QUESTIONS) {
    if (!isValidAnswer(answers[q])) return null
    total += answers[q]
  }
  return total
}

export function classifyPhq9(total) {
  if (typeof total !== 'number' || !Number.isFinite(total)) return null
  if (total < 0 || total > 27) return null
  if (total <= 4) return 'Minimal'
  if (total <= 9) return 'Mild'
  if (total <= 14) return 'Moderate'
  if (total <= 19) return 'ModeratelySevere'
  return 'Severe'
}

export function needsEvaluation(total) {
  return typeof total === 'number' && Number.isFinite(total) && total >= 10
}

// Fires whenever item 9 (self-harm) is answered ≥ 1 — independent of the total score.
export function item9Flag(answers) {
  if (!answers || typeof answers !== 'object') return false
  return Number.isInteger(answers[ITEM_9]) && answers[ITEM_9] >= 1
}

export function evaluatePhq9(answers) {
  const score = calcPhq9Score(answers)
  if (score === null) return null
  return {
    score,
    band: classifyPhq9(score),
    needsEvaluation: needsEvaluation(score),
    item9Flag: item9Flag(answers),
  }
}
