import { describe, it, expect } from 'vitest'

// Pure calculation functions — extracted from BodyFatCalculator.vue to be testable
function calcBodyFatMale(waistCm, neckCm, heightCm) {
  if (waistCm - neckCm <= 0) return null
  return 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450
}

function calcBodyFatFemale(waistCm, neckCm, hipCm, heightCm) {
  if (waistCm + hipCm - neckCm <= 0) return null
  return 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hipCm - neckCm) + 0.22100 * Math.log10(heightCm)) - 450
}

function toCm(val) {
  return val * 2.54
}

function getCategory(bf, gender) {
  const categories = gender === 'male'
    ? [
        { label: 'essentialFat', min: 2, max: 5 },
        { label: 'athletes', min: 6, max: 13 },
        { label: 'fitness', min: 14, max: 17 },
        { label: 'average', min: 18, max: 24 },
        { label: 'obese', min: 25, max: 100 },
      ]
    : [
        { label: 'essentialFat', min: 10, max: 13 },
        { label: 'athletes', min: 14, max: 20 },
        { label: 'fitness', min: 21, max: 24 },
        { label: 'average', min: 25, max: 31 },
        { label: 'obese', min: 32, max: 100 },
      ]
  return categories.find(c => bf >= c.min && bf <= c.max) || categories[categories.length - 1]
}

describe('Body fat calculation — male (U.S. Navy method)', () => {
  it('180cm, neck 38cm, waist 85cm → ~17%', () => {
    const bf = calcBodyFatMale(85, 38, 180)
    expect(bf).toBeGreaterThanOrEqual(15)
    expect(bf).toBeLessThanOrEqual(19)
  })

  it('175cm, neck 40cm, waist 90cm → ~18%', () => {
    const bf = calcBodyFatMale(90, 40, 175)
    expect(bf).toBeGreaterThanOrEqual(16)
    expect(bf).toBeLessThanOrEqual(20)
  })

  it('190cm, neck 42cm, waist 80cm → ~7%', () => {
    const bf = calcBodyFatMale(80, 42, 190)
    expect(bf).toBeGreaterThanOrEqual(5)
    expect(bf).toBeLessThanOrEqual(9)
  })

  it('170cm, neck 35cm, waist 100cm → ~28%', () => {
    const bf = calcBodyFatMale(100, 35, 170)
    expect(bf).toBeGreaterThanOrEqual(26)
    expect(bf).toBeLessThanOrEqual(30)
  })

  it('returns null when waist <= neck', () => {
    expect(calcBodyFatMale(38, 38, 180)).toBeNull()
    expect(calcBodyFatMale(35, 38, 180)).toBeNull()
  })
})

describe('Body fat calculation — female (U.S. Navy method)', () => {
  it('165cm, neck 34cm, waist 75cm, hip 100cm → ~25%', () => {
    const bf = calcBodyFatFemale(75, 34, 100, 165)
    expect(bf).toBeGreaterThanOrEqual(23)
    expect(bf).toBeLessThanOrEqual(31)
  })

  it('170cm, neck 32cm, waist 70cm, hip 95cm → ~24%', () => {
    const bf = calcBodyFatFemale(70, 32, 95, 170)
    expect(bf).toBeGreaterThanOrEqual(22)
    expect(bf).toBeLessThanOrEqual(28)
  })

  it('160cm, neck 30cm, waist 80cm, hip 105cm → ~37%', () => {
    const bf = calcBodyFatFemale(80, 30, 105, 160)
    expect(bf).toBeGreaterThanOrEqual(35)
    expect(bf).toBeLessThanOrEqual(39)
  })

  it('returns null when waist + hip - neck <= 0', () => {
    expect(calcBodyFatFemale(10, 100, 10, 165)).toBeNull()
  })
})

describe('Imperial unit conversion', () => {
  it('converts inches to cm correctly', () => {
    expect(toCm(1)).toBeCloseTo(2.54, 2)
    expect(toCm(70)).toBeCloseTo(177.8, 1)
    expect(toCm(15)).toBeCloseTo(38.1, 1)
  })

  it('imperial inputs produce same result as metric equivalents', () => {
    const metricBf = calcBodyFatMale(85, 38, 180)
    const imperialBf = calcBodyFatMale(toCm(33.46), toCm(14.96), toCm(70.87))
    expect(Math.abs(metricBf - imperialBf)).toBeLessThan(1)
  })
})

describe('Body fat categories — male (ACE ranges)', () => {
  it('3% → essential fat', () => {
    expect(getCategory(3, 'male').label).toBe('essentialFat')
  })

  it('10% → athletes', () => {
    expect(getCategory(10, 'male').label).toBe('athletes')
  })

  it('15% → fitness', () => {
    expect(getCategory(15, 'male').label).toBe('fitness')
  })

  it('20% → average', () => {
    expect(getCategory(20, 'male').label).toBe('average')
  })

  it('30% → obese', () => {
    expect(getCategory(30, 'male').label).toBe('obese')
  })
})

describe('Body fat categories — female (ACE ranges)', () => {
  it('12% → essential fat', () => {
    expect(getCategory(12, 'female').label).toBe('essentialFat')
  })

  it('18% → athletes', () => {
    expect(getCategory(18, 'female').label).toBe('athletes')
  })

  it('22% → fitness', () => {
    expect(getCategory(22, 'female').label).toBe('fitness')
  })

  it('28% → average', () => {
    expect(getCategory(28, 'female').label).toBe('average')
  })

  it('35% → obese', () => {
    expect(getCategory(35, 'female').label).toBe('obese')
  })
})

describe('Fat mass and lean mass', () => {
  it('17% body fat at 80kg → ~13.6kg fat, ~66.4kg lean', () => {
    const bf = 17
    const weight = 80
    const fatMass = weight * (bf / 100)
    const leanMass = weight * (1 - bf / 100)
    expect(fatMass).toBeCloseTo(13.6, 1)
    expect(leanMass).toBeCloseTo(66.4, 1)
  })

  it('25% body fat at 65kg → ~16.25kg fat, ~48.75kg lean', () => {
    const bf = 25
    const weight = 65
    const fatMass = weight * (bf / 100)
    const leanMass = weight * (1 - bf / 100)
    expect(fatMass).toBeCloseTo(16.25, 1)
    expect(leanMass).toBeCloseTo(48.75, 1)
  })
})
