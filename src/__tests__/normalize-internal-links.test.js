import { describe, it, expect } from 'vitest'
import { normalizeInternalLinks } from '../../scripts/normalize-internal-links.js'

describe('normalizeInternalLinks', () => {
  it('appends a trailing slash to slash-less /de and /en links', () => {
    expect(normalizeInternalLinks('<a href="/de">')).toBe('<a href="/de/">')
    expect(normalizeInternalLinks('<a href="/en">')).toBe('<a href="/en/">')
    expect(normalizeInternalLinks('<a href="/de/blog/foo">')).toBe('<a href="/de/blog/foo/">')
    expect(normalizeInternalLinks('<a href="/en/bmi">')).toBe('<a href="/en/bmi/">')
  })

  it('is idempotent — already-slashed links stay untouched', () => {
    const html = '<a href="/de/"><a href="/en/blog/foo/">'
    expect(normalizeInternalLinks(html)).toBe(html)
    expect(normalizeInternalLinks(normalizeInternalLinks('<a href="/de/bmi">')))
      .toBe('<a href="/de/bmi/">')
  })

  it('skips file-extension paths', () => {
    const html = [
      '<a href="/de/sitemap.xml">',
      '<a href="/en/image.png">',
      '<a href="/de/doc.pdf">',
      '<a href="/en/app.webmanifest">',
      '<a href="/de/icon.svg">',
    ].join('')
    expect(normalizeInternalLinks(html)).toBe(html)
  })

  it('skips links with a fragment or query', () => {
    const html = '<a href="/de/blog#section"><a href="/en/bmi?ref=1">'
    expect(normalizeInternalLinks(html)).toBe(html)
  })

  it('leaves external and non-/de|/en links untouched', () => {
    const html = [
      '<a href="https://example.com/de">',
      '<a href="/fr/page">',
      '<a href="/about">',
      '<a href="mailto:x@y.com">',
    ].join('')
    expect(normalizeInternalLinks(html)).toBe(html)
  })

  it('normalizes multiple links in one document', () => {
    const html = '<a href="/de/a"> text <a href="/en/b/"> more <a href="/de/c">'
    expect(normalizeInternalLinks(html))
      .toBe('<a href="/de/a/"> text <a href="/en/b/"> more <a href="/de/c/">')
  })
})
