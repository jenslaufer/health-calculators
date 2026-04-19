import { describe, it, expect } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import CalculatorFAQ from '../components/CalculatorFAQ.vue'

const sampleQuestions = [
  { q: 'Was bedeutet ein BMI von 23?', a: 'Ein BMI von 23 liegt im Normalbereich (18,5–24,9) laut WHO-Klassifikation.' },
  { q: 'Wie wird der BMI berechnet?', a: 'BMI = Gewicht (kg) / Körpergröße (m)². Quelle: DGE.' },
  { q: 'Ist der BMI für alle aussagekräftig?', a: 'Der BMI berücksichtigt weder Muskelmasse noch Körperbau. Athleten können einen erhöhten BMI haben.' },
]

async function renderFaq(props = { questions: sampleQuestions, title: 'Häufige Fragen' }) {
  const app = createSSRApp({ render: () => h(CalculatorFAQ, props) })
  return renderToString(app)
}

describe('CalculatorFAQ', () => {
  it('renders a semantic <section> with an <h2> heading', async () => {
    const html = await renderFaq()
    expect(html).toMatch(/<section[^>]*data-testid="calculator-faq"/)
    expect(html).toMatch(/<h2[^>]*>Häufige Fragen<\/h2>/)
  })

  it('renders each question inside a <details><summary> block', async () => {
    const html = await renderFaq()
    const detailsCount = (html.match(/<details/g) || []).length
    expect(detailsCount).toBe(sampleQuestions.length)
    for (const { q } of sampleQuestions) {
      expect(html).toContain(`<summary`)
      expect(html).toContain(q)
    }
  })

  it('renders each answer text in the rendered HTML', async () => {
    const html = await renderFaq()
    for (const { a } of sampleQuestions) {
      expect(html).toContain(a)
    }
  })

  it('emits an inline <script type="application/ld+json"> with FAQPage schema', async () => {
    const html = await renderFaq()
    const scriptMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
    expect(scriptMatch, 'no JSON-LD script tag found in SSR output').not.toBeNull()
    const data = JSON.parse(scriptMatch[1])
    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('FAQPage')
    expect(Array.isArray(data.mainEntity)).toBe(true)
    expect(data.mainEntity).toHaveLength(sampleQuestions.length)
  })

  it('builds mainEntity entries with Question + acceptedAnswer Answer', async () => {
    const html = await renderFaq()
    const scriptMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
    const data = JSON.parse(scriptMatch[1])
    for (let i = 0; i < sampleQuestions.length; i++) {
      const entry = data.mainEntity[i]
      expect(entry['@type']).toBe('Question')
      expect(entry.name).toBe(sampleQuestions[i].q)
      expect(entry.acceptedAnswer['@type']).toBe('Answer')
      expect(entry.acceptedAnswer.text).toBe(sampleQuestions[i].a)
    }
  })

  it('renders nothing when questions prop is empty', async () => {
    const html = await renderFaq({ questions: [], title: '' })
    expect(html).toBe('<!---->')
  })

  it('escapes HTML in question and answer to prevent XSS', async () => {
    const html = await renderFaq({
      questions: [{ q: '<script>alert(1)</script>', a: 'safe' }],
      title: 't',
    })
    expect(html).not.toContain('<script>alert(1)</script>')
    expect(html).toContain('&lt;script&gt;')
  })
})
