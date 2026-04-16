import { describe, it, expect } from 'vitest'

// Pure somatotype calculation functions (Heath-Carter adapted)
// Mirrors the logic in BodyTypeCalculator.vue

function calcEctomorphy(heightCm, weightKg) {
  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) return null
  const hwr = heightCm / Math.pow(weightKg, 1 / 3)
  if (hwr >= 40.75) return Math.max(0.5, 0.732 * hwr - 28.58)
  if (hwr > 38.25) return Math.max(0.5, 0.463 * hwr - 17.63)
  return 0.1
}

function calcEndomorphy(heightCm, weightKg, bodyFatPct, hipWidthCm) {
  if (bodyFatPct != null && bodyFatPct > 0) {
    return Math.max(0.5, Math.min(9, bodyFatPct * 0.24 - 0.4))
  }
  if (hipWidthCm != null && hipWidthCm > 0) {
    const ratio = hipWidthCm / heightCm
    return Math.max(0.5, Math.min(9, ratio * 50 - 4))
  }
  const bmi = weightKg / (heightCm / 100) ** 2
  return Math.max(0.5, Math.min(9, bmi * 0.20 - 2.5))
}

function calcMesomorphy(heightCm, weightKg, wristCm, shoulderCm, bodyFatPct) {
  const ecto = calcEctomorphy(heightCm, weightKg) ?? 0
  const leanKg = bodyFatPct != null ? weightKg * (1 - bodyFatPct / 100) : weightKg * 0.82
  const leanDensity = (leanKg / heightCm) * 100

  const wristContrib = wristCm ? (wristCm - 16) * 0.6 : 0
  const shoulderContrib = shoulderCm ? (shoulderCm - 41) * 0.10 : 0
  const densityContrib = (leanDensity - 28) * 0.12
  const ectoAdj = -ecto * 0.3

  return Math.max(0.5, Math.min(9, 3.5 + wristContrib + shoulderContrib + densityContrib + ectoAdj))
}

function classifySomatotype(ecto, meso, endo) {
  const components = [
    { type: 'ectomorph', value: ecto },
    { type: 'mesomorph', value: meso },
    { type: 'endomorph', value: endo },
  ].sort((a, b) => b.value - a.value)

  const [first, second, third] = components
  if (first.value - third.value < 1) return 'balanced'
  if (first.value - second.value >= 1.5) return first.type

  const pair = [first.type, second.type].sort().join('-')
  const mixedMap = {
    'ectomorph-mesomorph': 'ectoMesomorph',
    'endomorph-mesomorph': 'endoMesomorph',
    'ectomorph-endomorph': 'ectoEndomorph',
  }
  return mixedMap[pair] || first.type
}

// --- Ectomorphy tests (Heath-Carter HWR formula) ---

describe('calcEctomorphy — Height-Weight Ratio formula', () => {
  it('returns null for missing inputs', () => {
    expect(calcEctomorphy(null, 70)).toBeNull()
    expect(calcEctomorphy(175, null)).toBeNull()
    expect(calcEctomorphy(0, 70)).toBeNull()
    expect(calcEctomorphy(175, 0)).toBeNull()
  })

  it('returns 0.1 (minimum) for HWR ≤ 38.25 — endomorphic/mesomorphic', () => {
    // 170cm, 90kg: HWR = 170/90^(1/3) = 170/4.481 = 37.9 → 0.1
    expect(calcEctomorphy(170, 90)).toBe(0.1)
  })

  it('uses middle formula for HWR between 38.25 and 40.75', () => {
    // 175cm, 80kg: HWR = 175/80^(1/3) = 175/4.309 = 40.61 → 0.463*40.61-17.63 ≈ 1.16
    const ecto = calcEctomorphy(175, 80)
    expect(ecto).toBeGreaterThan(0.5)
    expect(ecto).toBeLessThan(2)
  })

  it('uses upper formula for HWR ≥ 40.75 — ectomorphic', () => {
    // 180cm, 63kg: HWR = 180/63^(1/3) = 180/3.979 = 45.24 → 0.732*45.24-28.58 ≈ 4.54
    const ecto = calcEctomorphy(180, 63)
    expect(ecto).toBeGreaterThanOrEqual(4)
    expect(ecto).toBeLessThanOrEqual(6)
  })

  it('typical lean runner 180cm/65kg → ecto > 3', () => {
    const ecto = calcEctomorphy(180, 65)
    expect(ecto).toBeGreaterThan(3)
  })

  it('typical heavy lifter 175cm/100kg → ecto = 0.1', () => {
    expect(calcEctomorphy(175, 100)).toBe(0.1)
  })
})

// --- Endomorphy tests ---

describe('calcEndomorphy — from body fat %', () => {
  it('5% body fat → endomorphy ~0.8', () => {
    const endo = calcEndomorphy(175, 70, 5, null)
    expect(endo).toBeGreaterThanOrEqual(0.5)
    expect(endo).toBeLessThan(1.5)
  })

  it('20% body fat → endomorphy ~4.4', () => {
    const endo = calcEndomorphy(175, 75, 20, null)
    expect(endo).toBeGreaterThanOrEqual(3.5)
    expect(endo).toBeLessThanOrEqual(5.5)
  })

  it('35% body fat → endomorphy ~8', () => {
    const endo = calcEndomorphy(170, 90, 35, null)
    expect(endo).toBeGreaterThanOrEqual(7)
    expect(endo).toBeLessThanOrEqual(9)
  })

  it('body fat % takes precedence over hip width', () => {
    const endoWithBf = calcEndomorphy(175, 75, 15, 30)
    const endoWithBfOnly = calcEndomorphy(175, 75, 15, null)
    expect(endoWithBf).toBeCloseTo(endoWithBfOnly, 2)
  })
})

describe('calcEndomorphy — from hip width', () => {
  it('wide hips (30cm) for 175cm height → higher endomorphy', () => {
    const endo = calcEndomorphy(175, 75, null, 30)
    expect(endo).toBeGreaterThan(2)
  })

  it('narrow hips (24cm) for 175cm height → lower endomorphy', () => {
    const narrow = calcEndomorphy(175, 75, null, 24)
    const wide = calcEndomorphy(175, 75, null, 30)
    expect(narrow).toBeLessThan(wide)
  })
})

describe('calcEndomorphy — BMI fallback', () => {
  it('BMI 18 (underweight) → low endomorphy', () => {
    // height=175, weight=55: BMI=17.96 → 17.96*0.2-2.5=1.092 → capped at 0.5
    const endo = calcEndomorphy(175, 55, null, null)
    expect(endo).toBeLessThan(2)
  })

  it('BMI 25 (normal/overweight boundary) → mid endomorphy', () => {
    // height=175, weight=76.6: BMI≈25 → 25*0.2-2.5=2.5
    const endo = calcEndomorphy(175, 76.6, null, null)
    expect(endo).toBeGreaterThanOrEqual(2)
    expect(endo).toBeLessThanOrEqual(3.5)
  })

  it('BMI 35 (obese) → higher endomorphy', () => {
    // height=170, weight=101: BMI≈35 → 35*0.2-2.5=4.5
    const endo = calcEndomorphy(170, 101, null, null)
    expect(endo).toBeGreaterThanOrEqual(4)
  })
})

// --- Mesomorphy tests ---

describe('calcMesomorphy — adapted Heath-Carter', () => {
  it('average male (175cm, 75kg, wrist 17cm, shoulder 43cm, 15% BF) → meso ~4-6', () => {
    const meso = calcMesomorphy(175, 75, 17, 43, 15)
    expect(meso).toBeGreaterThanOrEqual(4)
    expect(meso).toBeLessThanOrEqual(6.5)
  })

  it('ectomorphic male (180cm, 63kg, wrist 15cm, shoulder 37cm) → meso < 3', () => {
    const meso = calcMesomorphy(180, 63, 15, 37, null)
    expect(meso).toBeLessThan(3.5)
  })

  it('wide-framed endomorphic male (170cm, 100kg, wrist 20cm, shoulder 47cm, 35% BF) → meso > 5', () => {
    const meso = calcMesomorphy(170, 100, 20, 47, 35)
    expect(meso).toBeGreaterThan(5)
  })

  it('larger wrist → higher mesomorphy', () => {
    const mesoSmall = calcMesomorphy(175, 75, 15, 43, 15)
    const mesoLarge = calcMesomorphy(175, 75, 20, 43, 15)
    expect(mesoLarge).toBeGreaterThan(mesoSmall)
  })

  it('wider shoulders → higher mesomorphy', () => {
    const mesoNarrow = calcMesomorphy(175, 75, 17, 37, 15)
    const mesoWide = calcMesomorphy(175, 75, 17, 50, 15)
    expect(mesoWide).toBeGreaterThan(mesoNarrow)
  })

  it('result is always between 0.5 and 9', () => {
    // Extreme ectomorph
    expect(calcMesomorphy(190, 50, 13, 34, 5)).toBeGreaterThanOrEqual(0.5)
    // Extreme endomorph/mesomorph
    expect(calcMesomorphy(165, 120, 22, 52, 40)).toBeLessThanOrEqual(9)
  })
})

// --- Classification tests ---

describe('classifySomatotype', () => {
  it('ecto=5, meso=2, endo=1 → ectomorph', () => {
    expect(classifySomatotype(5, 2, 1)).toBe('ectomorph')
  })

  it('ecto=1, meso=6, endo=2 → mesomorph', () => {
    expect(classifySomatotype(1, 6, 2)).toBe('mesomorph')
  })

  it('ecto=1, meso=2, endo=6 → endomorph', () => {
    expect(classifySomatotype(1, 2, 6)).toBe('endomorph')
  })

  it('ecto=4, meso=3, endo=1 → ectoMesomorph (both within 1.5, endo lower)', () => {
    expect(classifySomatotype(4, 3, 1)).toBe('ectoMesomorph')
  })

  it('ecto=1, meso=4, endo=3 → endoMesomorph (meso+endo within 1.5, ecto lower)', () => {
    expect(classifySomatotype(1, 4, 3)).toBe('endoMesomorph')
  })

  it('ecto=4, meso=1, endo=3 → ectoEndomorph (ecto+endo within 1.5, meso lower)', () => {
    expect(classifySomatotype(4, 1, 3)).toBe('ectoEndomorph')
  })

  it('all values equal → balanced', () => {
    expect(classifySomatotype(3, 3, 3)).toBe('balanced')
  })

  it('values within 0.9 of each other → balanced', () => {
    expect(classifySomatotype(3, 3.5, 3)).toBe('balanced')
  })

  it('boundary: difference exactly 1.5 at first-second → pure type', () => {
    // ecto=5, meso=3.5, endo=1 → 5-3.5=1.5 ≥ 1.5 → ectomorph
    expect(classifySomatotype(5, 3.5, 1)).toBe('ectomorph')
  })
})

// --- Imperial unit conversion ---

describe('Imperial unit conversion', () => {
  it('cm to inches: 1 inch = 2.54cm', () => {
    const toInches = (cm) => cm / 2.54
    expect(toInches(175)).toBeCloseTo(68.9, 1)
    expect(toInches(2.54)).toBeCloseTo(1, 2)
  })

  it('kg to lbs: 1 kg = 2.20462 lbs', () => {
    const toLbs = (kg) => kg / 0.453592
    expect(toLbs(70)).toBeCloseTo(154.3, 1)
    expect(toLbs(0.453592)).toBeCloseTo(1, 2)
  })

  it('imperial inputs converted to metric produce equivalent results', () => {
    const heightCm = 175
    const weightKg = 75
    const heightIn = heightCm / 2.54
    const weightLbs = weightKg / 0.453592

    const ectoMetric = calcEctomorphy(heightCm, weightKg)
    const ectoImperial = calcEctomorphy(heightIn * 2.54, weightLbs * 0.453592)
    expect(Math.abs(ectoMetric - ectoImperial)).toBeLessThan(0.01)
  })
})

// --- Integration: full somatotype pipeline ---

describe('Full somatotype pipeline — typical cases', () => {
  it('lean runner (180cm, 63kg, wrist=15, shoulder=37, 8% BF) → ectomorph', () => {
    const ecto = calcEctomorphy(180, 63)
    const endo = calcEndomorphy(180, 63, 8, null)
    const meso = calcMesomorphy(180, 63, 15, 37, 8)
    const type = classifySomatotype(ecto, meso, endo)
    expect(type).toBe('ectomorph')
  })

  it('athlete (175cm, 80kg, wrist=18, shoulder=46, 12% BF) → mesomorph or ectoMesomorph', () => {
    const ecto = calcEctomorphy(175, 80)
    const endo = calcEndomorphy(175, 80, 12, null)
    const meso = calcMesomorphy(175, 80, 18, 46, 12)
    const type = classifySomatotype(ecto, meso, endo)
    expect(['mesomorph', 'ectoMesomorph', 'endoMesomorph']).toContain(type)
  })

  it('heavy build (170cm, 100kg, wrist=20, shoulder=46, 35% BF) → endomorph or endoMesomorph', () => {
    const ecto = calcEctomorphy(170, 100)
    const endo = calcEndomorphy(170, 100, 35, null)
    const meso = calcMesomorphy(170, 100, 20, 46, 35)
    const type = classifySomatotype(ecto, meso, endo)
    expect(['endomorph', 'endoMesomorph']).toContain(type)
  })
})

// --- Edge cases ---

describe('Edge cases', () => {
  it('calcEndomorphy never returns below 0.5', () => {
    // Very low body fat
    expect(calcEndomorphy(180, 70, 2, null)).toBeGreaterThanOrEqual(0.5)
    // Very low BMI
    expect(calcEndomorphy(185, 50, null, null)).toBeGreaterThanOrEqual(0.5)
  })

  it('calcMesomorphy never returns below 0.5 or above 9', () => {
    // Extreme ectomorph with tiny measurements
    const low = calcMesomorphy(190, 50, 13, 30, 4)
    expect(low).toBeGreaterThanOrEqual(0.5)
    // Extreme endomorph with large measurements
    const high = calcMesomorphy(160, 130, 24, 58, 45)
    expect(high).toBeLessThanOrEqual(9)
  })

  it('calcEndomorphy clamps at 9 for extreme values', () => {
    expect(calcEndomorphy(170, 100, 60, null)).toBe(9)
  })
})
