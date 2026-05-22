import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { articles } from '../data/articles.js'
import { articlesEn } from '../data/articles-en.js'
import { blogComponentsDe, blogComponentsEn, calculatorMetas } from '../discovery.js'
import routes from '../routes.js'

const DE_BLOG = resolve(__dirname, '../pages/blog/DiabetesTyp2Vorbeugen.vue')
const EN_BLOG = resolve(__dirname, '../pages/blog/en/PreventType2Diabetes.vue')

const deSrc = readFileSync(DE_BLOG, 'utf8')
const enSrc = readFileSync(EN_BLOG, 'utf8')

describe('Diabetes prevention blog — DE content', () => {
  it('contains the required structural sections (T2D, prediabetes, 5 strategies)', () => {
    expect(deSrc).toMatch(/Typ-2-Diabetes vorbeugen: 5 evidenzbasierte Strategien/)
    expect(deSrc).toMatch(/Was ist Typ-2-Diabetes\?/)
    expect(deSrc).toMatch(/Prädiabetes-Phase/)
    expect(deSrc).toMatch(/Strategie 1: Gewicht reduzieren/)
    expect(deSrc).toMatch(/Strategie 2: Bewegung/)
    expect(deSrc).toMatch(/Strategie 3: Ernährung/)
    expect(deSrc).toMatch(/Strategie 4: Schlaf/)
    expect(deSrc).toMatch(/Strategie 5: Stress/)
  })

  it('opens with a medical disclaimer above the intro', () => {
    const disclaimerIdx = deSrc.indexOf('Medizinischer Hinweis')
    const introIdx = deSrc.indexOf('häufigsten chronischen Erkrankungen')
    expect(disclaimerIdx).toBeGreaterThan(-1)
    expect(introIdx).toBeGreaterThan(-1)
    expect(disclaimerIdx).toBeLessThan(introIdx)
  })

  it('declares Article, MedicalWebPage and FAQPage structured data', () => {
    expect(deSrc).toMatch(/'@type':\s*'Article'/)
    expect(deSrc).toMatch(/'@type':\s*'MedicalWebPage'/)
    expect(deSrc).toMatch(/'@type':\s*'FAQPage'/)
  })

  it('cites the landmark prevention studies (DPP, Finnish DPS, PREDIMED)', () => {
    expect(deSrc).toMatch(/Diabetes Prevention Program/)
    expect(deSrc).toMatch(/Finnish Diabetes Prevention Study|DPS/)
    expect(deSrc).toMatch(/PREDIMED/)
  })

  it('links to existing calculators (diabetesRisk, hba1c, bmi)', () => {
    expect(deSrc).toMatch(/localePath\('diabetesRisk'\)/)
    expect(deSrc).toMatch(/localePath\('hba1c'\)/)
    expect(deSrc).toMatch(/localePath\('bmi'\)/)
  })
})

describe('Diabetes prevention blog — EN content', () => {
  it('contains the required structural sections (T2D, prediabetes, 5 strategies)', () => {
    expect(enSrc).toMatch(/Prevent Type 2 Diabetes: 5 Evidence-Based Strategies/)
    expect(enSrc).toMatch(/What is type 2 diabetes\?/)
    expect(enSrc).toMatch(/prediabetes stage/)
    expect(enSrc).toMatch(/Strategy 1: Lose weight/)
    expect(enSrc).toMatch(/Strategy 2: Move/)
    expect(enSrc).toMatch(/Strategy 3: Diet/)
    expect(enSrc).toMatch(/Strategy 4: Sleep/)
    expect(enSrc).toMatch(/Strategy 5: Manage stress/)
  })

  it('opens with a medical disclaimer above the intro', () => {
    const disclaimerIdx = enSrc.indexOf('Medical disclaimer')
    const introIdx = enSrc.indexOf('most common chronic diseases')
    expect(disclaimerIdx).toBeGreaterThan(-1)
    expect(introIdx).toBeGreaterThan(-1)
    expect(disclaimerIdx).toBeLessThan(introIdx)
  })

  it('declares Article, MedicalWebPage and FAQPage structured data', () => {
    expect(enSrc).toMatch(/'@type':\s*'Article'/)
    expect(enSrc).toMatch(/'@type':\s*'MedicalWebPage'/)
    expect(enSrc).toMatch(/'@type':\s*'FAQPage'/)
  })

  it('cites the landmark prevention studies (DPP, Finnish DPS, PREDIMED)', () => {
    expect(enSrc).toMatch(/Diabetes Prevention Program/)
    expect(enSrc).toMatch(/Finnish Diabetes Prevention Study|DPS/)
    expect(enSrc).toMatch(/PREDIMED/)
  })

  it('links to existing calculators (diabetesRisk, hba1c, bmi)', () => {
    expect(enSrc).toMatch(/localePath\('diabetesRisk'\)/)
    expect(enSrc).toMatch(/localePath\('hba1c'\)/)
    expect(enSrc).toMatch(/localePath\('bmi'\)/)
  })
})

describe('Diabetes prevention blog — registration', () => {
  it('is registered in articles.js with calculatorKey diabetesPrevention and existing related slugs', () => {
    const article = articles.find(a => a.slug === 'diabetes-typ-2-vorbeugen')
    expect(article).toBeTruthy()
    expect(article.calculatorKey).toBe('diabetesPrevention')
    for (const related of article.related) {
      expect(articles.find(a => a.slug === related), `related not found in articles.js: ${related}`).toBeTruthy()
    }
  })

  it('is registered in articles-en.js with calculatorKey diabetesPrevention and existing related slugs', () => {
    const article = articlesEn.find(a => a.slug === 'prevent-type-2-diabetes')
    expect(article).toBeTruthy()
    expect(article.calculatorKey).toBe('diabetesPrevention')
    for (const related of article.related) {
      expect(articlesEn.find(a => a.slug === related), `related not found in articles-en.js: ${related}`).toBeTruthy()
    }
  })

  it('is registered in blog discovery for both locales', () => {
    expect(blogComponentsDe['diabetes-typ-2-vorbeugen']).toBeDefined()
    expect(blogComponentsEn['prevent-type-2-diabetes']).toBeDefined()
  })

  it('diabetesPrevention does not appear as a calculator', () => {
    const calcKeys = calculatorMetas.map(m => m.key)
    expect(calcKeys).not.toContain('diabetesPrevention')
  })

  it('exposes blog routes for both locales and a DE old-blog redirect', () => {
    expect(routes.find(r => r.path === '/de/blog/diabetes-typ-2-vorbeugen/')).toBeDefined()
    expect(routes.find(r => r.path === '/en/blog/prevent-type-2-diabetes/')).toBeDefined()
    expect(routes.find(r => r.path === '/blog/diabetes-typ-2-vorbeugen')?.redirect).toBe('/de/blog/diabetes-typ-2-vorbeugen/')
  })
})
