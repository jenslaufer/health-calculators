import { describe, it, expect } from 'vitest'

// Cooper Test: VO2max = (distance_m - 504.9) / 44.73
function calcVo2maxCooper(distanceM) {
  if (!distanceM || distanceM <= 0) return null
  return (distanceM - 504.9) / 44.73
}

// Rockport Walk Test: VO2max = 132.853 - 0.0769*weight_lbs - 0.3877*age + 6.315*gender - 3.2649*time_min - 0.1565*hr
// gender: 1 = male, 0 = female
function calcVo2maxRockport(weightKg, age, gender, timeMin, hr) {
  if (!weightKg || !age || !timeMin || !hr) return null
  const weightLbs = weightKg * 2.20462
  const genderVal = gender === 'male' ? 1 : 0
  return 132.853 - 0.0769 * weightLbs - 0.3877 * age + 6.315 * genderVal - 3.2649 * timeMin - 0.1565 * hr
}

// Fitness categories by age and gender
function getFitnessCategory(vo2max, age, gender) {
  const tables = {
    male: [
      { maxAge: 29, ranges: [{ label: 'superior', min: 49 }, { label: 'excellent', min: 44 }, { label: 'good', min: 39 }, { label: 'fair', min: 34 }, { label: 'poor', min: 0 }] },
      { maxAge: 39, ranges: [{ label: 'superior', min: 47 }, { label: 'excellent', min: 42 }, { label: 'good', min: 37 }, { label: 'fair', min: 32 }, { label: 'poor', min: 0 }] },
      { maxAge: 49, ranges: [{ label: 'superior', min: 43 }, { label: 'excellent', min: 38 }, { label: 'good', min: 34 }, { label: 'fair', min: 29 }, { label: 'poor', min: 0 }] },
      { maxAge: 59, ranges: [{ label: 'superior', min: 39 }, { label: 'excellent', min: 34 }, { label: 'good', min: 30 }, { label: 'fair', min: 25 }, { label: 'poor', min: 0 }] },
      { maxAge: 999, ranges: [{ label: 'superior', min: 36 }, { label: 'excellent', min: 31 }, { label: 'good', min: 27 }, { label: 'fair', min: 22 }, { label: 'poor', min: 0 }] },
    ],
    female: [
      { maxAge: 29, ranges: [{ label: 'superior', min: 42 }, { label: 'excellent', min: 37 }, { label: 'good', min: 33 }, { label: 'fair', min: 28 }, { label: 'poor', min: 0 }] },
      { maxAge: 39, ranges: [{ label: 'superior', min: 40 }, { label: 'excellent', min: 35 }, { label: 'good', min: 31 }, { label: 'fair', min: 26 }, { label: 'poor', min: 0 }] },
      { maxAge: 49, ranges: [{ label: 'superior', min: 37 }, { label: 'excellent', min: 32 }, { label: 'good', min: 28 }, { label: 'fair', min: 23 }, { label: 'poor', min: 0 }] },
      { maxAge: 59, ranges: [{ label: 'superior', min: 33 }, { label: 'excellent', min: 28 }, { label: 'good', min: 24 }, { label: 'fair', min: 20 }, { label: 'poor', min: 0 }] },
      { maxAge: 999, ranges: [{ label: 'superior', min: 30 }, { label: 'excellent', min: 25 }, { label: 'good', min: 21 }, { label: 'fair', min: 17 }, { label: 'poor', min: 0 }] },
    ],
  }
  const ageGroup = tables[gender].find(g => age <= g.maxAge) || tables[gender][tables[gender].length - 1]
  return ageGroup.ranges.find(r => vo2max >= r.min) || ageGroup.ranges[ageGroup.ranges.length - 1]
}

describe('Cooper Test — VO2max calculation', () => {
  it('2400m → ~42.4 ml/kg/min', () => {
    const vo2 = calcVo2maxCooper(2400)
    expect(vo2).toBeCloseTo(42.35, 0)
  })

  it('3000m → ~55.8 ml/kg/min', () => {
    const vo2 = calcVo2maxCooper(3000)
    expect(vo2).toBeCloseTo(55.78, 0)
  })

  it('1800m → ~28.9 ml/kg/min', () => {
    const vo2 = calcVo2maxCooper(1800)
    expect(vo2).toBeCloseTo(28.93, 0)
  })

  it('returns null for 0 or negative distance', () => {
    expect(calcVo2maxCooper(0)).toBeNull()
    expect(calcVo2maxCooper(-100)).toBeNull()
  })

  it('returns null for null input', () => {
    expect(calcVo2maxCooper(null)).toBeNull()
  })
})

describe('Rockport Walk Test — VO2max calculation', () => {
  it('male, 80kg, age 30, 15min, HR 140 → reasonable VO2max', () => {
    const vo2 = calcVo2maxRockport(80, 30, 'male', 15, 140)
    expect(vo2).toBeGreaterThan(20)
    expect(vo2).toBeLessThan(60)
  })

  it('female, 65kg, age 35, 16min, HR 150 → lower than male equivalent', () => {
    const vo2Female = calcVo2maxRockport(65, 35, 'female', 16, 150)
    const vo2Male = calcVo2maxRockport(65, 35, 'male', 16, 150)
    expect(vo2Female).toBeLessThan(vo2Male)
  })

  it('higher weight → lower VO2max', () => {
    const light = calcVo2maxRockport(60, 30, 'male', 15, 140)
    const heavy = calcVo2maxRockport(100, 30, 'male', 15, 140)
    expect(heavy).toBeLessThan(light)
  })

  it('faster time → higher VO2max', () => {
    const fast = calcVo2maxRockport(80, 30, 'male', 12, 140)
    const slow = calcVo2maxRockport(80, 30, 'male', 18, 140)
    expect(fast).toBeGreaterThan(slow)
  })

  it('returns null for missing inputs', () => {
    expect(calcVo2maxRockport(null, 30, 'male', 15, 140)).toBeNull()
    expect(calcVo2maxRockport(80, null, 'male', 15, 140)).toBeNull()
    expect(calcVo2maxRockport(80, 30, 'male', null, 140)).toBeNull()
    expect(calcVo2maxRockport(80, 30, 'male', 15, null)).toBeNull()
  })
})

describe('Fitness categories — male', () => {
  it('VO2max 50 at age 25 → superior', () => {
    expect(getFitnessCategory(50, 25, 'male').label).toBe('superior')
  })

  it('VO2max 45 at age 25 → excellent', () => {
    expect(getFitnessCategory(45, 25, 'male').label).toBe('excellent')
  })

  it('VO2max 40 at age 25 → good', () => {
    expect(getFitnessCategory(40, 25, 'male').label).toBe('good')
  })

  it('VO2max 35 at age 25 → fair', () => {
    expect(getFitnessCategory(35, 25, 'male').label).toBe('fair')
  })

  it('VO2max 25 at age 25 → poor', () => {
    expect(getFitnessCategory(25, 25, 'male').label).toBe('poor')
  })

  it('VO2max 38 at age 45 → excellent for 40–49 group', () => {
    expect(getFitnessCategory(38, 45, 'male').label).toBe('excellent')
  })

  it('VO2max 30 at age 55 → good for 50–59 group', () => {
    expect(getFitnessCategory(30, 55, 'male').label).toBe('good')
  })
})

describe('Fitness categories — female', () => {
  it('VO2max 43 at age 25 → superior', () => {
    expect(getFitnessCategory(43, 25, 'female').label).toBe('superior')
  })

  it('VO2max 34 at age 25 → good', () => {
    expect(getFitnessCategory(34, 25, 'female').label).toBe('good')
  })

  it('VO2max 20 at age 25 → poor', () => {
    expect(getFitnessCategory(20, 25, 'female').label).toBe('poor')
  })

  it('VO2max 32 at age 45 → excellent for 40–49 group', () => {
    expect(getFitnessCategory(32, 45, 'female').label).toBe('excellent')
  })
})
