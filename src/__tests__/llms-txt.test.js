import { describe, it, expect, beforeAll } from 'vitest'
import { join } from 'node:path'
import { discoverMetas, generateLlmsTxt } from '../../scripts/generate-llms-txt.js'

const META_DIR = join(import.meta.dirname, '../pages')
const BASE_URL = 'https://healthcalculator.app'

describe('generateLlmsTxt', () => {
  let txt
  let metas

  beforeAll(() => {
    metas = discoverMetas(META_DIR)
    txt = generateLlmsTxt(metas, BASE_URL, META_DIR)
  })

  it('starts with title', () => {
    expect(txt).toMatch(/^# Health Calculators/)
  })

  it('has a tagline starting with >', () => {
    expect(txt).toContain('> ')
  })

  it('has Calculators section', () => {
    expect(txt).toContain('## Calculators')
  })

  it('has Blog section', () => {
    expect(txt).toContain('## Blog')
  })

  it('includes EN calculator URLs for all 30 calculators', () => {
    for (const meta of metas) {
      expect(txt, `missing EN URL for ${meta.key}`).toContain(`${BASE_URL}/en/${meta.slugs.en}`)
    }
  })

  it('includes DE calculator URLs for all 30 calculators', () => {
    for (const meta of metas) {
      expect(txt, `missing DE URL for ${meta.key}`).toContain(`${BASE_URL}/de/${meta.slugs.de}`)
    }
  })

  it('includes EN blog URLs for all 30 articles', () => {
    for (const meta of metas) {
      expect(txt, `missing EN blog URL for ${meta.key}`).toContain(`${BASE_URL}/en/blog/${meta.blog.en.slug}`)
    }
  })

  it('includes DE blog URLs for all 30 articles', () => {
    for (const meta of metas) {
      expect(txt, `missing DE blog URL for ${meta.key}`).toContain(`${BASE_URL}/de/blog/${meta.blog.de.slug}`)
    }
  })

  it('uses - [Title](URL): Description link format', () => {
    expect(txt).toMatch(/- \[.+\]\(https:\/\/healthcalculator\.app\/en\/bmi-calculator\): .+/)
  })

  it('every link line has a non-empty description', () => {
    const lines = txt.split('\n').filter(l => l.startsWith('- ['))
    for (const line of lines) {
      expect(line, `missing description in: ${line}`).toMatch(/\): .+$/)
    }
  })

  it('generates 136 links (34 calcs × 2 locales + 34 blogs × 2 locales)', () => {
    const links = txt.split('\n').filter(l => l.startsWith('- ['))
    expect(links).toHaveLength(136)
  })

  it('blog titles do not contain "| Health Calculators" suffix', () => {
    const lines = txt.split('\n').filter(l => l.startsWith('- ['))
    for (const line of lines) {
      expect(line).not.toContain('| Health Calculators')
    }
  })
})
