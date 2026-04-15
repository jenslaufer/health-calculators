import { describe, it, expect, beforeAll } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { generateSitemap, discoverMetas, discoverBlogSlugs } from '../../scripts/generate-sitemap.js'

const META_DIR = join(import.meta.dirname, '../pages')
const BASE_URL = 'https://healthcalculator.app'

const EXPECTED_KEYS = [
  'bmi', 'water', 'bodyFat', 'heartRate', 'idealWeight', 'macro',
  'sleep', 'tdee', 'pregnancy', 'bloodPressure', 'calorieDeficit',
  'waistHipRatio', 'ovulation', 'protein', 'bmr', 'caloriesBurned',
  'intermittentFasting', 'vo2Max', 'oneRepMax', 'runningPace', 'keto',
  'period', 'bac', 'proteinNeed', 'caffeine',
  'leanBodyMass', 'pregnancyWeightGain', 'hba1c', 'bloodSugar', 'bsa', 'gfr',
  'dueDate', 'smokingCost', 'childGrowth', 'lifeExpectancy',
]

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
  'gfr-rechner',
  'geburtsterminrechner',
  'rauchen-kosten-rechner',
  'wachstumsperzentile-kinder',
  'lebenserwartung-berechnen',
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
  'gfr-calculator-kidney-function',
  'due-date-calculator',
  'smoking-cost-calculator',
  'child-growth-percentile-chart',
  'life-expectancy-calculator',
]

describe('discoverMetas', () => {
  it('discovers all 35 calculator meta files', () => {
    const metas = discoverMetas(META_DIR)
    expect(metas).toHaveLength(35)
  })

  it('discovers all expected calculator keys', () => {
    const metas = discoverMetas(META_DIR)
    const keys = metas.map(m => m.key)
    for (const key of EXPECTED_KEYS) {
      expect(keys, `missing key: ${key}`).toContain(key)
    }
  })

  it('each meta has de and en slugs', () => {
    const metas = discoverMetas(META_DIR)
    for (const meta of metas) {
      expect(meta.slugs.de, `missing de slug for ${meta.key}`).toBeTruthy()
      expect(meta.slugs.en, `missing en slug for ${meta.key}`).toBeTruthy()
    }
  })

  it('each meta has de and en blog slugs', () => {
    const metas = discoverMetas(META_DIR)
    for (const meta of metas) {
      expect(meta.blog.de.slug, `missing blog de slug for ${meta.key}`).toBeTruthy()
      expect(meta.blog.en.slug, `missing blog en slug for ${meta.key}`).toBeTruthy()
    }
  })

  it('includes the 4 previously missing calculators', () => {
    const metas = discoverMetas(META_DIR)
    const keys = metas.map(m => m.key)
    expect(keys).toContain('caffeine')
    expect(keys).toContain('hba1c')
    expect(keys).toContain('leanBodyMass')
    expect(keys).toContain('pregnancyWeightGain')
  })
})

describe('discoverBlogSlugs', () => {
  it('returns all 35 DE blog slugs', () => {
    const metas = discoverMetas(META_DIR)
    const { de } = discoverBlogSlugs(metas)
    expect(de).toHaveLength(35)
    for (const slug of EXPECTED_BLOG_SLUGS_DE) {
      expect(de, `missing de blog slug: ${slug}`).toContain(slug)
    }
  })

  it('returns all 35 EN blog slugs', () => {
    const metas = discoverMetas(META_DIR)
    const { en } = discoverBlogSlugs(metas)
    expect(en).toHaveLength(35)
    for (const slug of EXPECTED_BLOG_SLUGS_EN) {
      expect(en, `missing en blog slug: ${slug}`).toContain(slug)
    }
  })
})

describe('generateSitemap', () => {
  let xml

  beforeAll(() => {
    const metas = discoverMetas(META_DIR)
    xml = generateSitemap(metas, BASE_URL)
  })

  it('is valid XML with urlset root', () => {
    expect(xml).toMatch(/^<\?xml/)
    expect(xml).toContain('<urlset')
    expect(xml).toContain('</urlset>')
  })

  it('includes home pages for both locales', () => {
    expect(xml).toContain(`<loc>${BASE_URL}/de/</loc>`)
    expect(xml).toContain(`<loc>${BASE_URL}/en/</loc>`)
  })

  it('includes all calculator URLs for both locales', () => {
    const metas = discoverMetas(META_DIR)
    for (const meta of metas) {
      expect(xml, `missing de URL for ${meta.key}`).toContain(`<loc>${BASE_URL}/de/${meta.slugs.de}/</loc>`)
      expect(xml, `missing en URL for ${meta.key}`).toContain(`<loc>${BASE_URL}/en/${meta.slugs.en}/</loc>`)
    }
  })

  it('includes blog index for both locales', () => {
    expect(xml).toContain(`<loc>${BASE_URL}/de/blog/</loc>`)
    expect(xml).toContain(`<loc>${BASE_URL}/en/blog/</loc>`)
  })

  it('includes all blog article URLs for both locales', () => {
    for (const slug of EXPECTED_BLOG_SLUGS_DE) {
      expect(xml, `missing de blog URL: ${slug}`).toContain(`<loc>${BASE_URL}/de/blog/${slug}/</loc>`)
    }
    for (const slug of EXPECTED_BLOG_SLUGS_EN) {
      expect(xml, `missing en blog URL: ${slug}`).toContain(`<loc>${BASE_URL}/en/blog/${slug}/</loc>`)
    }
  })

  it('includes xhtml:link hreflang alternates for calculator pairs', () => {
    expect(xml).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"')
    expect(xml).toContain('rel="alternate"')
    expect(xml).toContain('hreflang="de"')
    expect(xml).toContain('hreflang="en"')
  })

  it('hreflang alternates link calculator de/en pairs correctly', () => {
    const metas = discoverMetas(META_DIR)
    // Pick bmi as a known example
    const bmi = metas.find(m => m.key === 'bmi')
    expect(xml).toContain(`hreflang="de" href="${BASE_URL}/de/${bmi.slugs.de}/"`)
    expect(xml).toContain(`hreflang="en" href="${BASE_URL}/en/${bmi.slugs.en}/"`)
  })

  it('hreflang alternates link home pages', () => {
    expect(xml).toContain(`hreflang="de" href="${BASE_URL}/de/"`)
    expect(xml).toContain(`hreflang="en" href="${BASE_URL}/en/"`)
  })

  it('generates correct total URL count (2 home + 70 calcs + 2 blog index + 70 blog articles = 144)', () => {
    const urlCount = (xml.match(/<url>/g) || []).length
    expect(urlCount).toBe(144)
  })

  it('every <loc> URL ends with a trailing slash', () => {
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
    expect(locs.length).toBeGreaterThan(0)
    for (const loc of locs) {
      expect(loc, `URL missing trailing slash: ${loc}`).toMatch(/\/$/)
    }
  })

  it('every hreflang href URL ends with a trailing slash', () => {
    const hrefs = [...xml.matchAll(/href="([^"]+)"/g)].map(m => m[1])
    expect(hrefs.length).toBeGreaterThan(0)
    for (const href of hrefs) {
      expect(href, `hreflang href missing trailing slash: ${href}`).toMatch(/\/$/)
    }
  })
})
