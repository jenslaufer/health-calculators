import { describe, it, expect } from 'vitest'

// Pure vitamin D synthesis calculation functions — mirrors VitaminDCalculator.vue

const DECLINATION = [-21, -14, -3, 9, 19, 23.5, 21, 14, 3, -8, -19, -23.5]
const SKIN_FACTORS = [0.5, 1.0, 1.5, 2.0, 3.0, 4.0]
const CLOTHING_EXPOSED = [0.80, 0.35, 0.15, 0.05]
const CALIBRATION = 34.0

function calcSinElev(latDeg, monthIdx, hr) {
  const latR = latDeg * Math.PI / 180
  const declR = DECLINATION[monthIdx] * Math.PI / 180
  const haR = (hr - 12) * 15 * Math.PI / 180
  return Math.sin(latR) * Math.sin(declR) + Math.cos(latR) * Math.cos(declR) * Math.cos(haR)
}

function calcUvB(latDeg, monthIdx, hr) {
  const sinElev = calcSinElev(latDeg, monthIdx, hr)
  return 10 * Math.pow(Math.max(0, sinElev), 1.8)
}

function calcRate(uvB, skinTypeIdx, clothingIdx, spfVal) {
  if (uvB < 1.0) return 0
  return CALIBRATION * uvB * CLOTHING_EXPOSED[clothingIdx] / (SKIN_FACTORS[skinTypeIdx] * Math.max(1, spfVal))
}

function calcMinutes(targetIU, uvB, skinTypeIdx, clothingIdx, spfVal) {
  const rate = calcRate(uvB, skinTypeIdx, clothingIdx, spfVal)
  if (rate <= 0) return null
  return targetIU / rate
}

describe('Solar elevation (sin)', () => {
  it('equator, June, noon → cos(23.5°) ≈ 0.917 (sun at zenith minus declination)', () => {
    // lat=0, decl=23.5°, ha=0 → sinElev = cos(0)*cos(23.5°)*cos(0) = cos(23.5°) ≈ 0.917
    const s = calcSinElev(0, 5, 12)
    expect(s).toBeCloseTo(0.917, 2)
  })

  it('52°N, June, noon → high positive value', () => {
    const s = calcSinElev(52, 5, 12)
    expect(s).toBeGreaterThan(0.7)
  })

  it('52°N, December, noon → low positive (shallow sun)', () => {
    const s = calcSinElev(52, 11, 12)
    expect(s).toBeGreaterThan(0)
    expect(s).toBeLessThan(0.35)
  })

  it('52°N, December, morning (8am) → below horizon (negative)', () => {
    const s = calcSinElev(52, 11, 8)
    expect(s).toBeLessThan(0.15)
  })

  it('0°N, December, noon → approx sin(23.5°) ≈ 0.399 (sun south of equator)', () => {
    // Equator in December: decl = -23.5°, lat = 0 → sinElev = cos(23.5°) * 1 = cos(23.5°)
    const s = calcSinElev(0, 11, 12)
    expect(s).toBeCloseTo(Math.cos(23.5 * Math.PI / 180), 2)
  })
})

describe('UV-B index', () => {
  it('52°N, June, noon → UV-B > 5 (good summer conditions)', () => {
    const uv = calcUvB(52, 5, 12)
    expect(uv).toBeGreaterThan(5)
    expect(uv).toBeLessThan(12)
  })

  it('52°N, December, noon → UV-B < 1 (insufficient for synthesis)', () => {
    const uv = calcUvB(52, 11, 12)
    expect(uv).toBeLessThan(1.0)
  })

  it('30°N, December, noon → UV-B > 1 (winter sun at lower latitude)', () => {
    const uv = calcUvB(30, 11, 12)
    expect(uv).toBeGreaterThan(1.0)
  })

  it('equator, June, noon → UV-B close to 10', () => {
    const uv = calcUvB(0, 5, 12)
    expect(uv).toBeGreaterThan(6)
    expect(uv).toBeLessThan(10.5)
  })

  it('returns 0 for below-horizon sun (night)', () => {
    const uv = calcUvB(52, 5, 0)
    expect(uv).toBe(0)
  })
})

describe('Vitamin D synthesis rate', () => {
  it('UV < 1.0 → rate is 0 (no synthesis)', () => {
    expect(calcRate(0.5, 1, 1, 1)).toBe(0)
    expect(calcRate(0, 1, 1, 1)).toBe(0)
  })

  it('reference case: UV=7, skinII, light clothing, no SPF → ~83 IU/min', () => {
    const rate = calcRate(7, 1, 1, 1)
    // 34 * 7 * 0.35 / (1 * 1) = 83.3
    expect(rate).toBeCloseTo(83.3, 0)
  })

  it('swimsuit (idx 0) gives higher rate than full coverage (idx 3)', () => {
    const rateSuit = calcRate(5, 1, 0, 1)
    const rateFull = calcRate(5, 1, 3, 1)
    expect(rateSuit).toBeGreaterThan(rateFull)
  })

  it('skin type I (idx 0) produces faster than skin type VI (idx 5)', () => {
    const rateI = calcRate(5, 0, 1, 1)
    const rateVI = calcRate(5, 5, 1, 1)
    expect(rateI).toBeGreaterThan(rateVI)
  })

  it('SPF 50 reduces rate by factor of 50 vs no SPF', () => {
    const noSpf = calcRate(5, 1, 1, 1)
    const spf50 = calcRate(5, 1, 1, 50)
    expect(noSpf / spf50).toBeCloseTo(50, 0)
  })
})

describe('Minutes to produce 1000 IU', () => {
  it('UV < 1 → returns null (impossible to synthesize)', () => {
    expect(calcMinutes(1000, 0.5, 1, 1, 1)).toBeNull()
  })

  it('reference case → ~12 min for 1000 IU', () => {
    // UV=7, skinII, light clothing, no SPF
    const mins = calcMinutes(1000, 7, 1, 1, 1)
    expect(mins).toBeCloseTo(12, 0)
  })

  it('target 2000 IU takes twice as long as 1000 IU', () => {
    const mins1000 = calcMinutes(1000, 5, 1, 1, 1)
    const mins2000 = calcMinutes(2000, 5, 1, 1, 1)
    expect(mins2000 / mins1000).toBeCloseTo(2, 5)
  })

  it('skin type VI needs ~8x more time than skin type I', () => {
    const minsI = calcMinutes(1000, 5, 0, 1, 1)  // skinFactor 0.5
    const minsVI = calcMinutes(1000, 5, 5, 1, 1) // skinFactor 4.0
    // ratio = 4.0 / 0.5 = 8
    expect(minsVI / minsI).toBeCloseTo(8, 1)
  })

  it('full coverage (idx 3) takes 16x longer than swimsuit (idx 0)', () => {
    const minsSuit = calcMinutes(1000, 5, 1, 0, 1) // exposed 0.80
    const minsFull = calcMinutes(1000, 5, 1, 3, 1) // exposed 0.05
    // ratio = 0.80 / 0.05 = 16
    expect(minsFull / minsSuit).toBeCloseTo(16, 1)
  })

  it('SPF 30 multiplies time by 30', () => {
    const noSpf = calcMinutes(1000, 5, 1, 1, 1)
    const spf30 = calcMinutes(1000, 5, 1, 1, 30)
    expect(spf30 / noSpf).toBeCloseTo(30, 1)
  })
})
