import { describe, it, expect } from 'vitest'
import deProtein from '../locales/calculators/de/protein.json'
import deProteinNeed from '../locales/calculators/de/proteinNeed.json'
import enProtein from '../locales/calculators/en/protein.json'
import enProteinNeed from '../locales/calculators/en/proteinNeed.json'

describe('SEO title uniqueness', () => {
  it('de protein and proteinNeed meta titles are distinct', () => {
    expect(deProtein.protein.meta.title).not.toBe(deProteinNeed.proteinNeed.meta.title)
  })

  it('en protein and proteinNeed meta titles are distinct', () => {
    expect(enProtein.protein.meta.title).not.toBe(enProteinNeed.proteinNeed.meta.title)
  })
})
