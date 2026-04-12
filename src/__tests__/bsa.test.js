import { describe, it, expect } from 'vitest'

// Pure BSA formula functions — mirrored from BsaCalculator.vue
function dubois(h, w) {
  return 0.007184 * Math.pow(h, 0.725) * Math.pow(w, 0.425)
}

function mosteller(h, w) {
  return Math.sqrt((h * w) / 3600)
}

function haycock(h, w) {
  return 0.024265 * Math.pow(h, 0.3964) * Math.pow(w, 0.5378)
}

function boyd(h, w) {
  const wg = w * 1000
  return 0.0003207 * Math.pow(h, 0.3) * Math.pow(wg, 0.7285 - 0.0188 * Math.log10(wg))
}

// Unit conversion helpers
function lbsToKg(lbs) { return lbs * 0.453592 }
function ftInToCm(ft, inches) { return (ft * 12 + inches) * 2.54 }

describe('Du Bois formula', () => {
  it('170 cm, 70 kg → ~1.81 m²', () => {
    const bsa = dubois(170, 70)
    expect(bsa).toBeGreaterThanOrEqual(1.78)
    expect(bsa).toBeLessThanOrEqual(1.84)
  })

  it('180 cm, 80 kg → ~1.98 m²', () => {
    const bsa = dubois(180, 80)
    expect(bsa).toBeGreaterThanOrEqual(1.95)
    expect(bsa).toBeLessThanOrEqual(2.02)
  })

  it('160 cm, 60 kg → ~1.62 m²', () => {
    const bsa = dubois(160, 60)
    expect(bsa).toBeGreaterThanOrEqual(1.58)
    expect(bsa).toBeLessThanOrEqual(1.66)
  })

  it('50 cm, 3.5 kg (newborn) → ~0.21 m²', () => {
    const bsa = dubois(50, 3.5)
    expect(bsa).toBeGreaterThanOrEqual(0.18)
    expect(bsa).toBeLessThanOrEqual(0.24)
  })
})

describe('Mosteller formula', () => {
  it('170 cm, 70 kg → ~1.82 m²', () => {
    const bsa = mosteller(170, 70)
    expect(bsa).toBeCloseTo(Math.sqrt((170 * 70) / 3600), 4)
    expect(bsa).toBeGreaterThanOrEqual(1.79)
    expect(bsa).toBeLessThanOrEqual(1.85)
  })

  it('180 cm, 80 kg → ~2.00 m²', () => {
    const bsa = mosteller(180, 80)
    expect(bsa).toBeGreaterThanOrEqual(1.97)
    expect(bsa).toBeLessThanOrEqual(2.03)
  })

  it('160 cm, 60 kg → ~1.63 m²', () => {
    const bsa = mosteller(160, 60)
    expect(bsa).toBeGreaterThanOrEqual(1.60)
    expect(bsa).toBeLessThanOrEqual(1.66)
  })

  it('result equals sqrt(h*w/3600)', () => {
    expect(mosteller(175, 75)).toBeCloseTo(Math.sqrt((175 * 75) / 3600), 6)
  })
})

describe('Haycock formula', () => {
  it('170 cm, 70 kg → ~1.82 m²', () => {
    const bsa = haycock(170, 70)
    expect(bsa).toBeGreaterThanOrEqual(1.79)
    expect(bsa).toBeLessThanOrEqual(1.86)
  })

  it('130 cm, 30 kg (child) → ~1.04 m²', () => {
    const bsa = haycock(130, 30)
    expect(bsa).toBeGreaterThanOrEqual(0.98)
    expect(bsa).toBeLessThanOrEqual(1.10)
  })

  it('180 cm, 80 kg → ~1.99 m²', () => {
    const bsa = haycock(180, 80)
    expect(bsa).toBeGreaterThanOrEqual(1.96)
    expect(bsa).toBeLessThanOrEqual(2.03)
  })
})

describe('Boyd formula', () => {
  it('170 cm, 70 kg → ~1.82 m²', () => {
    const bsa = boyd(170, 70)
    expect(bsa).toBeGreaterThanOrEqual(1.78)
    expect(bsa).toBeLessThanOrEqual(1.86)
  })

  it('180 cm, 80 kg → ~1.99 m²', () => {
    const bsa = boyd(180, 80)
    expect(bsa).toBeGreaterThanOrEqual(1.95)
    expect(bsa).toBeLessThanOrEqual(2.03)
  })
})

describe('formula consistency', () => {
  it('all four formulas agree within 5% for average adult', () => {
    const h = 170, w = 70
    const results = [dubois(h, w), mosteller(h, w), haycock(h, w), boyd(h, w)]
    const min = Math.min(...results)
    const max = Math.max(...results)
    expect((max - min) / min).toBeLessThan(0.05)
  })

  it('all four formulas agree within 5% for large adult', () => {
    const h = 190, w = 100
    const results = [dubois(h, w), mosteller(h, w), haycock(h, w), boyd(h, w)]
    const min = Math.min(...results)
    const max = Math.max(...results)
    expect((max - min) / min).toBeLessThan(0.05)
  })
})

describe('unit conversions', () => {
  it('5 ft 7 in → 170.18 cm', () => {
    expect(ftInToCm(5, 7)).toBeCloseTo(170.18, 1)
  })

  it('6 ft 0 in → 182.88 cm', () => {
    expect(ftInToCm(6, 0)).toBeCloseTo(182.88, 1)
  })

  it('154 lbs → ~69.85 kg', () => {
    expect(lbsToKg(154)).toBeCloseTo(69.85, 1)
  })

  it('BSA same in metric and after imperial conversion (170cm/70kg)', () => {
    const h = 170
    const w = 70
    const hImperial = ftInToCm(5, 6.93) // ~170cm
    const wImperial = lbsToKg(154.3)   // ~70kg
    expect(dubois(h, w)).toBeCloseTo(dubois(hImperial, wImperial), 1)
  })
})

describe('BSA normal range context', () => {
  it('average male (178 cm, 78 kg) has BSA ~1.97 m²', () => {
    const bsa = mosteller(178, 78)
    expect(bsa).toBeGreaterThanOrEqual(1.9)
    expect(bsa).toBeLessThanOrEqual(2.1)
  })

  it('average female (163 cm, 62 kg) has BSA ~1.65 m²', () => {
    const bsa = mosteller(163, 62)
    expect(bsa).toBeGreaterThanOrEqual(1.5)
    expect(bsa).toBeLessThanOrEqual(1.8)
  })
})
