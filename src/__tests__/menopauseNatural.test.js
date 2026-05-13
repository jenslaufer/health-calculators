import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { articles } from '../data/articles.js'
import { articlesEn } from '../data/articles-en.js'
import { blogComponentsDe, blogComponentsEn, calculatorMetas } from '../discovery.js'
import routes from '../routes.js'

const DE_BLOG = resolve(__dirname, '../pages/blog/MenopauseNatuerlich.vue')
const EN_BLOG = resolve(__dirname, '../pages/blog/en/MenopauseNaturalRelief.vue')

const deSrc = readFileSync(DE_BLOG, 'utf8')
const enSrc = readFileSync(EN_BLOG, 'utf8')

describe('Menopause natural relief blog — DE content', () => {
  it('contains the required structural sections', () => {
    expect(deSrc).toMatch(/Menopause natürlich begleiten: Symptomlinderung und wann zum Arzt/)
    expect(deSrc).toMatch(/Perimenopause, Menopause, Postmenopause/)
    expect(deSrc).toMatch(/Die häufigsten Symptome/)
    expect(deSrc).toMatch(/Natürliche Linderung/)
    expect(deSrc).toMatch(/Ernährung: Phytoöstrogene/)
    expect(deSrc).toMatch(/Bewegung: Krafttraining/)
    expect(deSrc).toMatch(/Schlafhygiene/)
    expect(deSrc).toMatch(/Stressreduktion und Atemtechnik/)
    expect(deSrc).toMatch(/Warnzeichen — wann zur Ärztin oder zum Arzt/)
    expect(deSrc).toMatch(/HRT — die Hormontherapie im Überblick/)
    expect(deSrc).toMatch(/Langzeitrisiken — Knochen und Herz/)
  })

  it('opens with a medical disclaimer above the intro', () => {
    const disclaimerIdx = deSrc.indexOf('Medizinischer Hinweis')
    const introIdx = deSrc.indexOf('hormoneller Übergang')
    expect(disclaimerIdx).toBeGreaterThan(-1)
    expect(introIdx).toBeGreaterThan(-1)
    expect(disclaimerIdx).toBeLessThan(introIdx)
  })

  it('declares Article, MedicalWebPage and FAQPage structured data', () => {
    expect(deSrc).toMatch(/'@type':\s*'Article'/)
    expect(deSrc).toMatch(/'@type':\s*'MedicalWebPage'/)
    expect(deSrc).toMatch(/'@type':\s*'FAQPage'/)
  })

  it('links to the existing menopause, BMI, osteoporosis and cardiovascular calculators', () => {
    expect(deSrc).toMatch(/localePath\('menopauseSymptom'\)/)
    expect(deSrc).toMatch(/localePath\('bmi'\)/)
    expect(deSrc).toMatch(/localePath\('osteoporosisRisk'\)/)
    expect(deSrc).toMatch(/localePath\('cardiovascularRisk'\)/)
  })
})

describe('Menopause natural relief blog — EN content', () => {
  it('contains the required structural sections', () => {
    expect(enSrc).toMatch(/Menopause — Natural Symptom Relief and When to See a Doctor/)
    expect(enSrc).toMatch(/Perimenopause, menopause, postmenopause/)
    expect(enSrc).toMatch(/The most common symptoms/)
    expect(enSrc).toMatch(/Natural relief/)
    expect(enSrc).toMatch(/Diet: phytoestrogens/)
    expect(enSrc).toMatch(/Exercise: strength training/)
    expect(enSrc).toMatch(/Sleep hygiene/)
    expect(enSrc).toMatch(/Stress reduction and breathing/)
    expect(enSrc).toMatch(/Red flags — when to see a doctor/)
    expect(enSrc).toMatch(/HRT — hormone therapy in brief/)
    expect(enSrc).toMatch(/Long-term risks — bone and heart/)
  })

  it('opens with a medical disclaimer above the intro', () => {
    const disclaimerIdx = enSrc.indexOf('Medical disclaimer')
    const introIdx = enSrc.indexOf('hormonal transition')
    expect(disclaimerIdx).toBeGreaterThan(-1)
    expect(introIdx).toBeGreaterThan(-1)
    expect(disclaimerIdx).toBeLessThan(introIdx)
  })

  it('declares Article, MedicalWebPage and FAQPage structured data', () => {
    expect(enSrc).toMatch(/'@type':\s*'Article'/)
    expect(enSrc).toMatch(/'@type':\s*'MedicalWebPage'/)
    expect(enSrc).toMatch(/'@type':\s*'FAQPage'/)
  })

  it('links to the existing menopause, BMI, osteoporosis and cardiovascular calculators', () => {
    expect(enSrc).toMatch(/localePath\('menopauseSymptom'\)/)
    expect(enSrc).toMatch(/localePath\('bmi'\)/)
    expect(enSrc).toMatch(/localePath\('osteoporosisRisk'\)/)
    expect(enSrc).toMatch(/localePath\('cardiovascularRisk'\)/)
  })
})

describe('Menopause natural relief blog — registration', () => {
  it('is registered in articles.js with calculatorKey menopauseNatural and existing related slugs', () => {
    const article = articles.find(a => a.slug === 'menopause-natuerlich-begleiten')
    expect(article).toBeTruthy()
    expect(article.calculatorKey).toBe('menopauseNatural')
    for (const related of article.related) {
      expect(articles.find(a => a.slug === related), `related not found in articles.js: ${related}`).toBeTruthy()
    }
  })

  it('is registered in articles-en.js with calculatorKey menopauseNatural and existing related slugs', () => {
    const article = articlesEn.find(a => a.slug === 'menopause-natural-relief')
    expect(article).toBeTruthy()
    expect(article.calculatorKey).toBe('menopauseNatural')
    for (const related of article.related) {
      expect(articlesEn.find(a => a.slug === related), `related not found in articles-en.js: ${related}`).toBeTruthy()
    }
  })

  it('is registered in blog discovery for both locales', () => {
    expect(blogComponentsDe['menopause-natuerlich-begleiten']).toBeDefined()
    expect(blogComponentsEn['menopause-natural-relief']).toBeDefined()
  })

  it('menopauseNatural does not appear as a calculator', () => {
    const calcKeys = calculatorMetas.map(m => m.key)
    expect(calcKeys).not.toContain('menopauseNatural')
  })

  it('exposes blog routes for both locales and a DE old-blog redirect', () => {
    expect(routes.find(r => r.path === '/de/blog/menopause-natuerlich-begleiten')).toBeDefined()
    expect(routes.find(r => r.path === '/en/blog/menopause-natural-relief')).toBeDefined()
    expect(routes.find(r => r.path === '/blog/menopause-natuerlich-begleiten')?.redirect).toBe('/de/blog/menopause-natuerlich-begleiten')
  })
})
