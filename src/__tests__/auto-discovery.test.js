import { describe, it, expect } from 'vitest'
import {
  calculatorMetas,
  calculatorComponents,
  routeMap,
  blogComponentsDe,
  blogComponentsEn,
  calculatorGroups,
} from '../discovery.js'
import { de, en } from '../locales/index.js'
import routes from '../routes.js'

const EXPECTED_KEYS = [
  'bmi', 'water', 'bodyFat', 'heartRate', 'idealWeight', 'macro',
  'sleep', 'tdee', 'pregnancy', 'bloodPressure', 'calorieDeficit',
  'waistHipRatio', 'ovulation', 'protein', 'bmr', 'caloriesBurned',
  'intermittentFasting', 'vo2Max', 'oneRepMax', 'runningPace', 'keto',
  'period', 'bac', 'proteinNeed', 'caffeine',
  'leanBodyMass', 'pregnancyWeightGain', 'hba1c', 'bloodSugar', 'bsa',
]

const EXPECTED_ROUTE_MAP = {
  bmi: { de: 'bmi-rechner', en: 'bmi-calculator' },
  water: { de: 'wasser-rechner', en: 'water-intake-calculator' },
  bodyFat: { de: 'koerperfett-rechner', en: 'body-fat-calculator' },
  heartRate: { de: 'herzfrequenz-zonen', en: 'heart-rate-zones' },
  idealWeight: { de: 'idealgewicht-rechner', en: 'ideal-weight-calculator' },
  macro: { de: 'makro-rechner', en: 'macro-calculator' },
  sleep: { de: 'schlafzyklen-rechner', en: 'sleep-cycle-calculator' },
  tdee: { de: 'tdee-rechner', en: 'tdee-calculator' },
  pregnancy: { de: 'schwangerschafts-rechner', en: 'pregnancy-calculator' },
  bloodPressure: { de: 'blutdruck-rechner', en: 'blood-pressure-calculator' },
  calorieDeficit: { de: 'kaloriendefizit-rechner', en: 'calorie-deficit-calculator' },
  waistHipRatio: { de: 'taille-hueft-verhaeltnis', en: 'waist-hip-ratio-calculator' },
  ovulation: { de: 'eisprung-rechner', en: 'ovulation-calculator' },
  protein: { de: 'protein-rechner', en: 'protein-calculator' },
  bmr: { de: 'bmr-rechner', en: 'bmr-calculator' },
  caloriesBurned: { de: 'kalorienverbrauch', en: 'calories-burned' },
  intermittentFasting: { de: 'intervallfasten-rechner', en: 'intermittent-fasting-calculator' },
  vo2Max: { de: 'vo2max-rechner', en: 'vo2max-calculator' },
  oneRepMax: { de: 'one-rep-max-rechner', en: 'one-rep-max-calculator' },
  runningPace: { de: 'lauftempo-rechner', en: 'running-pace-calculator' },
  keto: { de: 'keto-rechner', en: 'keto-calculator' },
  period: { de: 'zyklusrechner', en: 'period-calculator' },
  bac: { de: 'promillerechner', en: 'blood-alcohol-calculator' },
  proteinNeed: { de: 'eiweissbedarf-rechner', en: 'protein-need-calculator' },
  caffeine: { de: 'koffein-rechner', en: 'caffeine-calculator' },
  leanBodyMass: { de: 'magermasse-rechner', en: 'lean-body-mass-calculator' },
  pregnancyWeightGain: { de: 'gewichtszunahme-schwangerschaft', en: 'pregnancy-weight-gain-calculator' },
  hba1c: { de: 'hba1c-konverter', en: 'hba1c-converter' },
  bloodSugar: { de: 'blutzucker-umrechner', en: 'blood-sugar-converter' },
  bsa: { de: 'koerperoberflaeche-rechner', en: 'body-surface-area-calculator' },
}

const EXPECTED_BLOG_SLUGS_DE = [
  'bmi-berechnen', 'tdee-berechnen', 'schlafzyklen-berechnen',
  'herzfrequenz-zonen-berechnen', 'koerperfett-berechnen',
  'makronaehrstoffe-berechnen', 'wasserbedarf-berechnen',
  'idealgewicht-berechnen', 'geburtstermin-berechnen',
  'blutdruck-richtig-messen', 'kaloriendefizit-berechnen',
  'taille-hueft-verhaeltnis-berechnen', 'eisprung-berechnen',
  'proteinbedarf-berechnen', 'grundumsatz-berechnen',
  'kalorienverbrauch-berechnen', 'intervallfasten-rechner',
  'vo2max-berechnen', 'one-rep-max-berechnen',
  'lauftempo-berechnen', 'keto-rechner',
  'zyklusrechner-guide', 'promille-berechnen',
  'eiweissbedarf-berechnen',
  'koffein-rechner-schlafen',
  'magermasse-berechnen',
  'gewichtszunahme-schwangerschaft-berechnen',
  'hba1c-umrechnen',
  'blutzucker-umrechnen',
  'koerperoberflaeche-berechnen',
]

const EXPECTED_BLOG_SLUGS_EN = [
  'calculate-bmi', 'calculate-tdee', 'calculate-sleep-cycles',
  'calculate-heart-rate-zones', 'calculate-body-fat',
  'calculate-macros', 'calculate-water-intake',
  'calculate-ideal-weight', 'calculate-due-date',
  'measure-blood-pressure', 'calculate-calorie-deficit',
  'calculate-waist-hip-ratio', 'calculate-ovulation',
  'protein-intake-guide', 'calculate-bmr',
  'calculate-calories-burned', 'intermittent-fasting-calculator',
  'calculate-vo2max', 'calculate-one-rep-max',
  'calculate-running-pace', 'keto-calculator-guide',
  'period-calculator-guide', 'blood-alcohol-calculator',
  'protein-requirements-guide',
  'caffeine-calculator-sleep-guide',
  'calculate-lean-body-mass',
  'pregnancy-weight-gain-guide',
  'hba1c-converter-guide',
  'blood-sugar-converter-guide',
  'body-surface-area-calculator',
]

describe('calculator discovery', () => {
  it('discovers all 30 calculators', () => {
    expect(calculatorMetas).toHaveLength(30)
    const keys = calculatorMetas.map(m => m.key)
    for (const key of EXPECTED_KEYS) {
      expect(keys).toContain(key)
    }
  })

  it('builds calculatorComponents map for all 30 keys', () => {
    expect(Object.keys(calculatorComponents)).toHaveLength(30)
    for (const key of EXPECTED_KEYS) {
      expect(calculatorComponents[key]).toBeDefined()
    }
  })

  it('generates complete routeMap matching previous values', () => {
    expect(routeMap.home).toEqual({ de: '', en: '' })
    expect(routeMap.blog).toEqual({ de: 'blog', en: 'blog' })
    for (const [key, expected] of Object.entries(EXPECTED_ROUTE_MAP)) {
      expect(routeMap[key]).toEqual(expected)
    }
  })

  it('routeMap is bidirectional — every de slug is unique, every en slug is unique', () => {
    const deSlugs = EXPECTED_KEYS.map(k => routeMap[k].de)
    const enSlugs = EXPECTED_KEYS.map(k => routeMap[k].en)
    expect(new Set(deSlugs).size).toBe(deSlugs.length)
    expect(new Set(enSlugs).size).toBe(enSlugs.length)
  })
})

describe('blog component discovery', () => {
  it('discovers all 30 German blog components', () => {
    expect(Object.keys(blogComponentsDe)).toHaveLength(30)
    for (const slug of EXPECTED_BLOG_SLUGS_DE) {
      expect(blogComponentsDe[slug]).toBeDefined()
    }
  })

  it('discovers all 30 English blog components', () => {
    expect(Object.keys(blogComponentsEn)).toHaveLength(30)
    for (const slug of EXPECTED_BLOG_SLUGS_EN) {
      expect(blogComponentsEn[slug]).toBeDefined()
    }
  })
})

describe('calculator groups', () => {
  it('has 4 groups in correct order', () => {
    expect(calculatorGroups).toHaveLength(4)
    expect(calculatorGroups[0].key).toBe('bodyComposition')
    expect(calculatorGroups[1].key).toBe('nutritionEnergy')
    expect(calculatorGroups[2].key).toBe('fitnessRecovery')
    expect(calculatorGroups[3].key).toBe('pregnancy')
  })

  it('groups contain all 30 calculators with no duplicates', () => {
    const allKeys = calculatorGroups.flatMap(g => g.calculators)
    expect(allKeys).toHaveLength(30)
    expect(new Set(allKeys).size).toBe(30)
    for (const key of EXPECTED_KEYS) {
      expect(allKeys).toContain(key)
    }
  })

  it('bodyComposition group has correct calculators in order', () => {
    expect(calculatorGroups[0].calculators).toEqual([
      'bmi', 'bodyFat', 'idealWeight', 'waistHipRatio', 'leanBodyMass', 'bsa',
    ])
  })

  it('nutritionEnergy group has correct calculators in order', () => {
    expect(calculatorGroups[1].calculators).toEqual([
      'bmr', 'tdee', 'macro', 'water', 'calorieDeficit',
      'protein', 'caloriesBurned', 'proteinNeed', 'caffeine', 'intermittentFasting', 'keto',
    ])
  })

  it('fitnessRecovery group has correct calculators in order', () => {
    expect(calculatorGroups[2].calculators).toEqual([
      'heartRate', 'sleep', 'bloodPressure', 'vo2Max', 'oneRepMax', 'runningPace', 'bac', 'hba1c', 'bloodSugar',
    ])
  })

  it('pregnancy group has correct calculators in order', () => {
    expect(calculatorGroups[3].calculators).toEqual([
      'pregnancy', 'ovulation', 'pregnancyWeightGain', 'period',
    ])
  })
})

describe('i18n completeness', () => {
  it('has all calculator top-level keys in German', () => {
    for (const key of EXPECTED_KEYS) {
      expect(de[key], `missing de.${key}`).toBeDefined()
      expect(de[key].meta?.title, `missing de.${key}.meta.title`).toBeTruthy()
    }
  })

  it('has all calculator top-level keys in English', () => {
    for (const key of EXPECTED_KEYS) {
      expect(en[key], `missing en.${key}`).toBeDefined()
      expect(en[key].meta?.title, `missing en.${key}.meta.title`).toBeTruthy()
    }
  })

  it('has home.calculators entries for all calculators in both languages', () => {
    for (const key of EXPECTED_KEYS) {
      expect(de.home.calculators[key]?.name, `missing de home.calculators.${key}.name`).toBeTruthy()
      expect(de.home.calculators[key]?.description, `missing de home.calculators.${key}.description`).toBeTruthy()
      expect(en.home.calculators[key]?.name, `missing en home.calculators.${key}.name`).toBeTruthy()
      expect(en.home.calculators[key]?.description, `missing en home.calculators.${key}.description`).toBeTruthy()
    }
  })

  it('retains shared keys (common, nav, footer, home.groups)', () => {
    expect(de.common).toBeDefined()
    expect(de.nav).toBeDefined()
    expect(de.footer).toBeDefined()
    expect(de.home.groups).toBeDefined()
    expect(en.common).toBeDefined()
    expect(en.nav).toBeDefined()
    expect(en.footer).toBeDefined()
    expect(en.home.groups).toBeDefined()
  })
})

describe('SSG routes', () => {
  it('generates exactly 187 routes', () => {
    expect(routes).toHaveLength(187)
  })

  it('has locale routes for all calculators in both languages', () => {
    for (const key of EXPECTED_KEYS) {
      const dePath = `/de/${EXPECTED_ROUTE_MAP[key].de}`
      const enPath = `/en/${EXPECTED_ROUTE_MAP[key].en}`
      expect(routes.find(r => r.path === dePath), `missing route ${dePath}`).toBeDefined()
      expect(routes.find(r => r.path === enPath), `missing route ${enPath}`).toBeDefined()
    }
  })

  it('has blog routes for all articles in both languages', () => {
    for (const slug of EXPECTED_BLOG_SLUGS_DE) {
      expect(routes.find(r => r.path === `/de/blog/${slug}`), `missing de blog ${slug}`).toBeDefined()
    }
    for (const slug of EXPECTED_BLOG_SLUGS_EN) {
      expect(routes.find(r => r.path === `/en/blog/${slug}`), `missing en blog ${slug}`).toBeDefined()
    }
  })

  it('has redirect routes for old paths', () => {
    expect(routes.find(r => r.path === '/')?.redirect).toBe('/de/')
    expect(routes.find(r => r.path === '/bmi')?.redirect).toBe('/de/bmi-rechner')
    expect(routes.find(r => r.path === '/blog')?.redirect).toBe('/de/blog')
  })

  it('has old blog redirects', () => {
    for (const slug of EXPECTED_BLOG_SLUGS_DE) {
      expect(routes.find(r => r.path === `/blog/${slug}`)?.redirect).toBe(`/de/blog/${slug}`)
    }
  })
})
