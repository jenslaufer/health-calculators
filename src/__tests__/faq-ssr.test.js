import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const DIST = join(import.meta.dirname, '../../dist')

const SAMPLE_PAGES = [
  'de/bmi-rechner',
  'en/bmi-calculator',
  'de/bmr-rechner',
  'de/tdee-rechner',
  'de/wasser-rechner',
  'de/schwangerschafts-rechner',
  'de/eisprung-rechner',
  'de/kaloriendefizit-rechner',
  'de/taille-hueft-verhaeltnis',
  'de/koerperfett-rechner',
  'de/gfr-rechner',
  'de/hba1c-konverter',
  'de/promillerechner',
  'de/lauftempo-rechner',
  'de/vo2max-rechner',
  'de/keto-rechner',
  'de/makro-rechner',
  'de/intervallfasten-rechner',
  'de/zyklusrechner',
  'de/blutzucker-umrechner',
  'de/idealgewicht-rechner',
]

const distExists = existsSync(DIST)

describe.skipIf(!distExists)('FAQPage JSON-LD in SSR build output', () => {
  for (const page of SAMPLE_PAGES) {
    it(`emits FAQPage JSON-LD inline in dist/${page}/index.html`, () => {
      const file = join(DIST, page, 'index.html')
      expect(existsSync(file), `missing built file: ${file}`).toBe(true)
      const html = readFileSync(file, 'utf8')

      const faqMatch = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) || []
      const faqEntries = faqMatch.filter(s => s.includes('FAQPage'))
      expect(faqEntries.length, `no FAQPage JSON-LD found in ${page}`).toBeGreaterThanOrEqual(1)

      const inner = faqEntries[0].replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '')
      const json = inner.replace(/\\u003c/g, '<')
      const data = JSON.parse(json)
      expect(data['@context']).toBe('https://schema.org')
      expect(data['@type']).toBe('FAQPage')
      expect(Array.isArray(data.mainEntity)).toBe(true)
      expect(data.mainEntity.length).toBeGreaterThanOrEqual(5)
      expect(data.mainEntity.length).toBeLessThanOrEqual(7)
      for (const entry of data.mainEntity) {
        expect(entry['@type']).toBe('Question')
        expect(entry.acceptedAnswer['@type']).toBe('Answer')
        expect(entry.acceptedAnswer.text.length).toBeGreaterThan(20)
      }
    })
  }

  it('renders the FAQ section visibly (data-testid present)', () => {
    const html = readFileSync(join(DIST, 'de/bmi-rechner/index.html'), 'utf8')
    expect(html).toContain('data-testid="calculator-faq"')
    expect(html).toMatch(/<details/)
    expect(html).toMatch(/<summary/)
  })
})

if (!distExists) {
  describe('FAQPage JSON-LD in SSR build output', () => {
    it.skip('skipped — run `npm run build` first to enable SSR verification', () => {})
  })
}
