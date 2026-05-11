// Pearl Index — contraceptive method effectiveness measure.
// Formula: PI = (unintended pregnancies × 1200) / (women × months)
// 1200 = 100 women × 12 months (one woman-year basis).
//
// Sources for reference values:
//   - Pille (kombinierte orale Kontrazeptiva): 0,1–0,9 (perfect) / 6–9 (typical) — BZgA
//   - Kondom: 2 (perfect) / 12–15 (typical) — Trussell 2011 / BZgA
//   - Hormonspirale (LNG-IUS): 0,16 — Trussell / DGGG
//   - Kupferspirale (Cu-IUD): 0,3–0,8 — Trussell / DGGG
//   - Diaphragma mit Spermizid: 1–20 — BZgA
//   - NFP (symptothermal, korrekt angewendet): 0,4–2,3 — Frank-Herrmann et al. 2007
//   - Kalendermethode allein: 9–40 — BZgA / Trussell
//   - Coitus interruptus: 4–28 — BZgA

export function calcPearlIndex(pregnancies, women, months) {
  if (!Number.isFinite(pregnancies) || !Number.isFinite(women) || !Number.isFinite(months)) return null
  if (pregnancies < 0 || women <= 0 || months <= 0) return null
  return (pregnancies * 1200) / (women * months)
}

export const referenceMethods = [
  { key: 'pillCombined', perfect: 0.3, typical: 9 },
  { key: 'pillMini', perfect: 0.3, typical: 9 },
  { key: 'iudHormonal', perfect: 0.2, typical: 0.2 },
  { key: 'iudCopper', perfect: 0.6, typical: 0.8 },
  { key: 'implant', perfect: 0.05, typical: 0.05 },
  { key: 'depot', perfect: 0.2, typical: 6 },
  { key: 'patch', perfect: 0.3, typical: 9 },
  { key: 'ring', perfect: 0.3, typical: 9 },
  { key: 'condomMale', perfect: 2, typical: 15 },
  { key: 'condomFemale', perfect: 5, typical: 21 },
  { key: 'diaphragm', perfect: 6, typical: 12 },
  { key: 'nfpSymptothermal', perfect: 0.4, typical: 2.3 },
  { key: 'nfpCalendar', perfect: 5, typical: 24 },
  { key: 'withdrawal', perfect: 4, typical: 22 },
  { key: 'sterilizationFemale', perfect: 0.5, typical: 0.5 },
  { key: 'sterilizationMale', perfect: 0.15, typical: 0.15 },
  { key: 'noMethod', perfect: 85, typical: 85 },
]

export function classifyPearlIndex(pi) {
  if (pi === null || pi === undefined || !Number.isFinite(pi)) return null
  if (pi < 1) return 'verySafe'
  if (pi < 5) return 'safe'
  if (pi < 10) return 'moderate'
  if (pi < 25) return 'lowSafety'
  return 'unsafe'
}
