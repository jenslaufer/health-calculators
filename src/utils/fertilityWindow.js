// Fertility Window — expanded fertility window with LH surge and peak fertility.
// Based on LMP (last menstrual period) + cycle length.
//
// Sperm survive up to 5 days in cervical mucus. Egg viable ~12–24 h after ovulation.
// LH surge occurs 24–36 h before ovulation.
//
// Phases (relative to estimated ovulation day O):
//   - expanded fertility window: O-7 … O+2 (10 days, conservative)
//   - core fertility window:     O-5 … O+1 (7 days, classic 6-day window + safety buffer)
//   - peak fertility:            O-2 … O   (3 days, highest conception probability)
//   - LH surge:                  O-1 … O   (24–36 h before ovulation)
//   - egg viable:                O    … O+1
//   - ovulation day:             O = LMP + cycleLength - 14
//
// Pure date math — no side effects.

export function addDays(date, days) {
  if (!(date instanceof Date) || isNaN(date)) return null
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

export function calcOvulationDay(lmpDate, cycleLength) {
  if (!(lmpDate instanceof Date) || isNaN(lmpDate)) return null
  if (!cycleLength || cycleLength < 21 || cycleLength > 45) return null
  return addDays(lmpDate, cycleLength - 14)
}

export function calcFertilityWindow(lmpDate, cycleLength) {
  const ovulation = calcOvulationDay(lmpDate, cycleLength)
  if (!ovulation) return null
  return {
    ovulation,
    expandedStart: addDays(ovulation, -7),
    expandedEnd: addDays(ovulation, 2),
    coreStart: addDays(ovulation, -5),
    coreEnd: addDays(ovulation, 1),
    peakStart: addDays(ovulation, -2),
    peakEnd: ovulation,
    lhSurgeStart: addDays(ovulation, -1),
    lhSurgeEnd: ovulation,
    eggViableStart: ovulation,
    eggViableEnd: addDays(ovulation, 1),
    nextPeriod: addDays(lmpDate, cycleLength),
  }
}

export function getDayLabel(date, window) {
  if (!date || !window) return null
  const t = startOfDay(date).getTime()
  const ov = startOfDay(window.ovulation).getTime()
  if (t === ov) return 'ovulation'
  if (t >= startOfDay(window.lhSurgeStart).getTime() && t <= startOfDay(window.lhSurgeEnd).getTime()) return 'lhSurge'
  if (t >= startOfDay(window.peakStart).getTime() && t <= startOfDay(window.peakEnd).getTime()) return 'peak'
  if (t >= startOfDay(window.coreStart).getTime() && t <= startOfDay(window.coreEnd).getTime()) return 'core'
  if (t >= startOfDay(window.expandedStart).getTime() && t <= startOfDay(window.expandedEnd).getTime()) return 'expanded'
  return null
}

function startOfDay(date) {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d
}

export function daysBetween(a, b) {
  if (!a || !b) return null
  const ms = startOfDay(b).getTime() - startOfDay(a).getTime()
  return Math.round(ms / 86400000)
}

export function conceptionProbability(daysBeforeOvulation) {
  // Approximate per-cycle conception probability by timing of intercourse
  // relative to ovulation (Wilcox et al. 1995, simplified).
  const table = {
    [-5]: 0.10,
    [-4]: 0.16,
    [-3]: 0.14,
    [-2]: 0.27,
    [-1]: 0.31,
    [0]: 0.33,
    [1]: 0.10,
  }
  return table[daysBeforeOvulation] ?? 0
}
