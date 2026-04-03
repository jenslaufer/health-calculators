    import { describe, it, expect } from 'vitest'
    import { readFileSync } from 'fs'
    import { resolve } from 'path'

    const BASE_URL = 'https://healthcalculator.app'
    const publicDir = resolve(import.meta.dirname, '..', 'public')

    describe('404.html', () => {
  it('exists in public/', () => {
    const content = readFileSync(resolve(publicDir, '404.html'), 'utf-8')
    expect(content).toBeTruthy()
  })

  it('contains the app shell', () => {
    const content = readFileSync(resolve(publicDir, '404.html'), 'utf-8')
    expect(content).toContain('<div id="app"></div>')
    expect(content).toContain('<script type="module"')
  })
})

    describe('sitemap.xml', () => {
  const xml = readFileSync(resolve(publicDir, 'sitemap.xml'), 'utf-8')

  it('is valid XML with urlset root', () => {
    expect(xml).toContain('<?xml version="1.0"')
    expect(xml).toContain('<urlset')
    expect(xml).toContain('</urlset>')
  })

  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])

  it('contains the home page', () => {
    expect(urls).toContain(`${BASE_URL}/`)
  })

  // German calculator routes from routeMap
  const deCalculatorSlugs = [
    'bmi-rechner', 'wasser-rechner', 'koerperfett-rechner',
    'herzfrequenz-zonen', 'idealgewicht-rechner', 'makro-rechner',
    'schlafzyklen-rechner', 'tdee-rechner', 'schwangerschafts-rechner',
    'blutdruck-rechner', 'kaloriendefizit-rechner', 'taille-hueft-verhaeltnis',
    'eisprung-rechner',
    'protein-rechner',
    'bmr-rechner',
    'kalorienverbrauch',
    'intervallfasten-rechner',
    'vo2max-rechner',
    'lauftempo-rechner',
    'eiweissbedarf-rechner',
  ]

  const enCalculatorSlugs = [
    'bmi-calculator', 'water-intake-calculator', 'body-fat-calculator',
    'heart-rate-zones', 'ideal-weight-calculator', 'macro-calculator',
    'sleep-cycle-calculator', 'tdee-calculator', 'pregnancy-calculator',
    'blood-pressure-calculator', 'calorie-deficit-calculator',
    'waist-hip-ratio-calculator', 'ovulation-calculator',
    'protein-calculator', 'bmr-calculator',
    'calories-burned',
    'intermittent-fasting-calculator',
    'vo2max-calculator',
    'running-pace-calculator',
    'protein-need-calculator',
  ]

  it('contains all German calculator routes', () => {
    for (const slug of deCalculatorSlugs) {
      expect(urls, `missing /de/${slug}`).toContain(`${BASE_URL}/de/${slug}`)
    }
  })

  it('contains all English calculator routes', () => {
    for (const slug of enCalculatorSlugs) {
      expect(urls, `missing /en/${slug}`).toContain(`${BASE_URL}/en/${slug}`)
    }
  })

  it('contains both blog index pages', () => {
    expect(urls).toContain(`${BASE_URL}/de/blog`)
    expect(urls).toContain(`${BASE_URL}/en/blog`)
  })

  // German blog slugs from articles.js
  const deBlogSlugs = [
    'bmi-berechnen', 'idealgewicht-berechnen', 'koerperfett-berechnen',
    'tdee-berechnen', 'makronaehrstoffe-berechnen', 'wasserbedarf-berechnen',
    'schlafzyklen-berechnen', 'geburtstermin-berechnen', 'kaloriendefizit-berechnen',
    'herzfrequenz-zonen-berechnen', 'taille-hueft-verhaeltnis-berechnen',
    'blutdruck-richtig-messen', 'eisprung-berechnen',
    'proteinbedarf-berechnen', 'grundumsatz-berechnen',
    'kalorienverbrauch-berechnen',
    'intervallfasten-rechner',
    'vo2max-berechnen',
    'lauftempo-berechnen',
    'eiweissbedarf-berechnen',
  ]

  const enBlogSlugs = [
    'calculate-bmi', 'calculate-ideal-weight', 'calculate-body-fat',
    'calculate-tdee', 'calculate-macros', 'calculate-water-intake',
    'calculate-sleep-cycles', 'calculate-due-date', 'calculate-calorie-deficit',
    'calculate-heart-rate-zones', 'calculate-waist-hip-ratio',
    'measure-blood-pressure', 'calculate-ovulation',
    'protein-intake-guide', 'calculate-bmr',
    'calculate-calories-burned',
    'intermittent-fasting-calculator',
    'calculate-vo2max',
    'calculate-running-pace',
    'protein-requirements-guide',
  ]

  it('contains all German blog article URLs', () => {
    for (const slug of deBlogSlugs) {
      expect(urls, `missing /de/blog/${slug}`).toContain(`${BASE_URL}/de/blog/${slug}`)
    }
  })

  it('contains all English blog article URLs', () => {
    for (const slug of enBlogSlugs) {
      expect(urls, `missing /en/blog/${slug}`).toContain(`${BASE_URL}/en/blog/${slug}`)
    }
  })

  // 1 home + 22 de calcs + 22 en calcs + 2 blog indexes + 22 de articles + 22 en articles = 91
  it('contains exactly 91 URLs', () => {
    expect(urls).toHaveLength(91)
  })
})
