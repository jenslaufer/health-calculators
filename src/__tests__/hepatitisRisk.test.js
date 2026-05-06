import { describe, it, expect } from 'vitest'
import {
  calcExposureScore,
  classifyHepatitisRisk,
  hbvVaccinated,
  calcHepatitisRisk,
} from '../utils/hepatitisRisk.js'

// Hepatitis (B/C) risk screening based on CDC/USPSTF exposure factors.
// Each exposure carries a weight; the total exposure score maps to bands.
//
// Exposure weights:
//   injectionDrugUse           : 4 (CDC: highest priority screening)
//   bornHighPrevalenceCountry  : 3
//   hivPositive                : 3
//   hemodialysis               : 3
//   transfusionBefore1992      : 3
//   motherInfected             : 3 (vertical transmission)
//   incarceration              : 2
//   needlestickExposure        : 2
//   unregulatedTattooPiercing  : 2
//   multipleSexualPartners     : 2
//   sharedRazorsToothbrush     : 1
//   travelEndemicArea          : 1
//   chronicLiverDisease        : 1
//
// Bands:
//   0       → none
//   1–3     → low
//   4–7     → moderate
//   ≥ 8     → high
//
// Vaccination status (Hep B): if `hbvVaccinated` is true AND no current
// active exposures (only historic), the band drops by one level (but not
// below `low` if any factor present, never below none if zero factors).

describe('Exposure score', () => {
  it('no exposures → 0', () => {
    expect(calcExposureScore({})).toBe(0)
  })

  it('only travelEndemicArea → 1', () => {
    expect(calcExposureScore({ travelEndemicArea: true })).toBe(1)
  })

  it('injectionDrugUse alone → 4', () => {
    expect(calcExposureScore({ injectionDrugUse: true })).toBe(4)
  })

  it('all factors set → 30', () => {
    expect(
      calcExposureScore({
        injectionDrugUse: true,
        bornHighPrevalenceCountry: true,
        hivPositive: true,
        hemodialysis: true,
        transfusionBefore1992: true,
        motherInfected: true,
        incarceration: true,
        needlestickExposure: true,
        unregulatedTattooPiercing: true,
        multipleSexualPartners: true,
        sharedRazorsToothbrush: true,
        travelEndemicArea: true,
        chronicLiverDisease: true,
      }),
    ).toBe(30)
  })

  it('ignores unknown flags', () => {
    expect(calcExposureScore({ travelEndemicArea: true, foo: true })).toBe(1)
  })

  it('combination needlestick + multipleSexualPartners → 4', () => {
    expect(
      calcExposureScore({ needlestickExposure: true, multipleSexualPartners: true }),
    ).toBe(4)
  })
})

describe('Hepatitis risk classification', () => {
  it('score 0 → none', () => {
    expect(classifyHepatitisRisk(0)).toBe('none')
  })

  it('score 1 → low', () => {
    expect(classifyHepatitisRisk(1)).toBe('low')
  })

  it('score 3 → low (boundary)', () => {
    expect(classifyHepatitisRisk(3)).toBe('low')
  })

  it('score 4 → moderate', () => {
    expect(classifyHepatitisRisk(4)).toBe('moderate')
  })

  it('score 7 → moderate (boundary)', () => {
    expect(classifyHepatitisRisk(7)).toBe('moderate')
  })

  it('score 8 → high', () => {
    expect(classifyHepatitisRisk(8)).toBe('high')
  })
})

describe('HBV vaccination effect', () => {
  it('vaccinated + score 1 → none', () => {
    expect(hbvVaccinated(1, true)).toBe('none')
  })

  it('vaccinated + score 5 → low (drops one band)', () => {
    expect(hbvVaccinated(5, true)).toBe('low')
  })

  it('vaccinated + score 9 → moderate (drops one band)', () => {
    expect(hbvVaccinated(9, true)).toBe('moderate')
  })

  it('not vaccinated + score 5 → moderate (no change)', () => {
    expect(hbvVaccinated(5, false)).toBe('moderate')
  })
})

describe('calcHepatitisRisk integration', () => {
  it('returns null without exposures object', () => {
    expect(calcHepatitisRisk(null)).toBeNull()
  })

  it('no exposures, not vaccinated → none, score 0', () => {
    const r = calcHepatitisRisk({ exposures: {}, hbvVaccinated: false })
    expect(r.category).toBe('none')
    expect(r.score).toBe(0)
  })

  it('IDU only → moderate (score 4)', () => {
    const r = calcHepatitisRisk({
      exposures: { injectionDrugUse: true },
      hbvVaccinated: false,
    })
    expect(r.score).toBe(4)
    expect(r.category).toBe('moderate')
  })

  it('IDU + HIV+ + needlestick → high (4+3+2=9)', () => {
    const r = calcHepatitisRisk({
      exposures: { injectionDrugUse: true, hivPositive: true, needlestickExposure: true },
      hbvVaccinated: false,
    })
    expect(r.score).toBe(9)
    expect(r.category).toBe('high')
  })

  it('Vaccinated downgrades from high → moderate', () => {
    const r = calcHepatitisRisk({
      exposures: { injectionDrugUse: true, hivPositive: true, needlestickExposure: true },
      hbvVaccinated: true,
    })
    expect(r.score).toBe(9)
    expect(r.category).toBe('moderate')
  })

  it('exposes screening recommendation flag for moderate or high', () => {
    const moderate = calcHepatitisRisk({
      exposures: { injectionDrugUse: true },
      hbvVaccinated: false,
    })
    expect(moderate.screeningRecommended).toBe(true)
    const none = calcHepatitisRisk({ exposures: {}, hbvVaccinated: false })
    expect(none.screeningRecommended).toBe(false)
  })

  it('counts the number of selected exposures', () => {
    const r = calcHepatitisRisk({
      exposures: { travelEndemicArea: true, sharedRazorsToothbrush: true },
      hbvVaccinated: false,
    })
    expect(r.exposureCount).toBe(2)
    expect(r.score).toBe(2)
    expect(r.category).toBe('low')
  })
})
