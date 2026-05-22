import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { articles } from '../data/articles.js'
import { articlesEn } from '../data/articles-en.js'
import { blogComponentsDe, blogComponentsEn, calculatorMetas } from '../discovery.js'
import routes from '../routes.js'

const DE_BLOG = resolve(__dirname, '../pages/blog/VitaminDMangel.vue')
const EN_BLOG = resolve(__dirname, '../pages/blog/en/VitaminDDeficiency.vue')

const deSrc = readFileSync(DE_BLOG, 'utf8')
const enSrc = readFileSync(EN_BLOG, 'utf8')

describe('Vitamin D deficiency blog — DE content', () => {
  it('contains the required structural sections', () => {
    expect(deSrc).toMatch(/Vitamin-D-Mangel: Symptome, Test, IE pro Tag richtig dosieren/)
    expect(deSrc).toMatch(/Welche Rolle spielt Vitamin D im Körper\?/)
    expect(deSrc).toMatch(/Symptome eines Vitamin-D-Mangels/)
    expect(deSrc).toMatch(/Wer hat ein erhöhtes Mangelrisiko\?/)
    expect(deSrc).toMatch(/Bluttest: 25-OH-D richtig interpretieren/)
    expect(deSrc).toMatch(/Supplementierung: IE pro Tag richtig wählen/)
    expect(deSrc).toMatch(/D3 vs\. D2/)
    expect(deSrc).toMatch(/Lebensmittel mit Vitamin D/)
    expect(deSrc).toMatch(/Sicherheitsobergrenze und Überdosierung/)
  })

  it('opens with a medical disclaimer above the intro', () => {
    const disclaimerIdx = deSrc.indexOf('Medizinischer Hinweis')
    const introIdx = deSrc.indexOf('weit verbreitet')
    expect(disclaimerIdx).toBeGreaterThan(-1)
    expect(introIdx).toBeGreaterThan(-1)
    expect(disclaimerIdx).toBeLessThan(introIdx)
  })

  it('declares Article, MedicalWebPage and FAQPage structured data', () => {
    expect(deSrc).toMatch(/'@type':\s*'Article'/)
    expect(deSrc).toMatch(/'@type':\s*'MedicalWebPage'/)
    expect(deSrc).toMatch(/'@type':\s*'FAQPage'/)
  })

  it('links to the existing vitamin D, osteoporosis and corrected calcium calculators', () => {
    expect(deSrc).toMatch(/localePath\('vitaminD'\)/)
    expect(deSrc).toMatch(/localePath\('osteoporosisRisk'\)/)
    expect(deSrc).toMatch(/localePath\('correctedCalcium'\)/)
  })

  it('cross-links to the existing vitamin D blog (synthesis background)', () => {
    expect(deSrc).toMatch(/localeBlogPath\('vitamin-d-berechnen'\)/)
  })
})

describe('Vitamin D deficiency blog — EN content', () => {
  it('contains the required structural sections', () => {
    expect(enSrc).toMatch(/Vitamin D Deficiency: Symptoms, Testing, How Much IU You Need/)
    expect(enSrc).toMatch(/The role of vitamin D in the body/)
    expect(enSrc).toMatch(/Symptoms of vitamin D deficiency/)
    expect(enSrc).toMatch(/Who is at higher risk\?/)
    expect(enSrc).toMatch(/Blood test: interpreting 25-OH-D/)
    expect(enSrc).toMatch(/Supplementation: choosing the right IU per day/)
    expect(enSrc).toMatch(/D3 vs\. D2/)
    expect(enSrc).toMatch(/Food sources of vitamin D/)
    expect(enSrc).toMatch(/Upper limit and overdose/)
  })

  it('opens with a medical disclaimer above the intro', () => {
    const disclaimerIdx = enSrc.indexOf('Medical disclaimer')
    const introIdx = enSrc.indexOf('common in higher-latitude')
    expect(disclaimerIdx).toBeGreaterThan(-1)
    expect(introIdx).toBeGreaterThan(-1)
    expect(disclaimerIdx).toBeLessThan(introIdx)
  })

  it('declares Article, MedicalWebPage and FAQPage structured data', () => {
    expect(enSrc).toMatch(/'@type':\s*'Article'/)
    expect(enSrc).toMatch(/'@type':\s*'MedicalWebPage'/)
    expect(enSrc).toMatch(/'@type':\s*'FAQPage'/)
  })

  it('links to the existing vitamin D, osteoporosis and corrected calcium calculators', () => {
    expect(enSrc).toMatch(/localePath\('vitaminD'\)/)
    expect(enSrc).toMatch(/localePath\('osteoporosisRisk'\)/)
    expect(enSrc).toMatch(/localePath\('correctedCalcium'\)/)
  })

  it('cross-links to the existing vitamin D blog (synthesis background)', () => {
    expect(enSrc).toMatch(/localeBlogPath\('vitamin-d-calculator'\)/)
  })
})

describe('Vitamin D deficiency blog — registration', () => {
  it('is registered in articles.js with calculatorKey vitaminDDeficiency and existing related slugs', () => {
    const article = articles.find(a => a.slug === 'vitamin-d-mangel')
    expect(article).toBeTruthy()
    expect(article.calculatorKey).toBe('vitaminDDeficiency')
    for (const related of article.related) {
      expect(articles.find(a => a.slug === related), `related not found in articles.js: ${related}`).toBeTruthy()
    }
  })

  it('is registered in articles-en.js with calculatorKey vitaminDDeficiency and existing related slugs', () => {
    const article = articlesEn.find(a => a.slug === 'vitamin-d-deficiency')
    expect(article).toBeTruthy()
    expect(article.calculatorKey).toBe('vitaminDDeficiency')
    for (const related of article.related) {
      expect(articlesEn.find(a => a.slug === related), `related not found in articles-en.js: ${related}`).toBeTruthy()
    }
  })

  it('is registered in blog discovery for both locales', () => {
    expect(blogComponentsDe['vitamin-d-mangel']).toBeDefined()
    expect(blogComponentsEn['vitamin-d-deficiency']).toBeDefined()
  })

  it('vitaminDDeficiency does not appear as a calculator', () => {
    const calcKeys = calculatorMetas.map(m => m.key)
    expect(calcKeys).not.toContain('vitaminDDeficiency')
  })

  it('exposes blog routes for both locales and a DE old-blog redirect', () => {
    expect(routes.find(r => r.path === '/de/blog/vitamin-d-mangel/')).toBeDefined()
    expect(routes.find(r => r.path === '/en/blog/vitamin-d-deficiency/')).toBeDefined()
    expect(routes.find(r => r.path === '/blog/vitamin-d-mangel')?.redirect).toBe('/de/blog/vitamin-d-mangel/')
  })
})
