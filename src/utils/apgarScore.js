// APGAR score for newborn assessment.
//
// Apgar V (1953) — five clinical signs scored 0/1/2 each, summed (0–10):
//   A — Appearance     : skin color
//                        0 = blue/pale all over, 1 = body pink + extremities blue, 2 = pink all over
//   P — Pulse          : heart rate
//                        0 = absent, 1 = < 100 bpm, 2 = ≥ 100 bpm
//   G — Grimace        : reflex irritability
//                        0 = no response, 1 = grimace, 2 = cry / cough / sneeze
//   A — Activity       : muscle tone
//                        0 = limp, 1 = some flexion, 2 = active motion
//   R — Respiration    : breathing effort
//                        0 = absent, 1 = slow / irregular, 2 = good crying
//
// Total score classification (per AAP / WHO):
//   7–10 : reassuring     (normal)
//   4–6  : moderate       (some assistance / oxygen typically needed)
//   0–3  : critical       (immediate resuscitation)
//
// Apgar is taken at 1 and 5 minutes; a 5-minute score < 7 typically
// triggers further measurements at 10, 15, 20 minutes.

export const APGAR_COMPONENTS = ['appearance', 'pulse', 'grimace', 'activity', 'respiration']

function isValidComponent(v) {
  return v === 0 || v === 1 || v === 2
}

export function calcApgarScore(scores) {
  if (!scores || typeof scores !== 'object') return null
  let total = 0
  for (const c of APGAR_COMPONENTS) {
    if (!isValidComponent(scores[c])) return null
    total += scores[c]
  }
  return total
}

export function classifyApgar(total) {
  if (typeof total !== 'number' || !Number.isFinite(total)) return null
  if (total < 0 || total > 10) return null
  if (total >= 7) return 'reassuring'
  if (total >= 4) return 'moderate'
  return 'critical'
}

export function evaluateApgar({ oneMinute, fiveMinute } = {}) {
  const oneMinuteTotal = calcApgarScore(oneMinute)
  const fiveMinuteTotal = calcApgarScore(fiveMinute)
  return {
    oneMinute: {
      total: oneMinuteTotal,
      category: oneMinuteTotal !== null ? classifyApgar(oneMinuteTotal) : null,
    },
    fiveMinute: {
      total: fiveMinuteTotal,
      category: fiveMinuteTotal !== null ? classifyApgar(fiveMinuteTotal) : null,
    },
    needsExtended: fiveMinuteTotal !== null && fiveMinuteTotal < 7,
  }
}
