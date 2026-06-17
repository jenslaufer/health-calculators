import { describe, it, expect } from 'vitest'
import { normalizeInternalLinks } from '../../scripts/normalize-internal-links.js'

describe('normalizeInternalLinks', () => {
  it('adds trailing slash to /de/... href without one', () => {
    const input = '<a href="/de/bmi">BMI</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/bmi/">BMI</a>')
  })

  it('adds trailing slash to /en/... href without one', () => {
    const input = '<a href="/en/bmi">BMI</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/en/bmi/">BMI</a>')
  })

  it('adds trailing slash to /de/... src without one', () => {
    const input = '<img src="/de/image-path">'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<img src="/de/image-path/">')
  })

  it('is idempotent — already has trailing slash stays unchanged', () => {
    const input = '<a href="/de/bmi/">BMI</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/bmi/">BMI</a>')
  })

  it('is idempotent on double run', () => {
    const input = '<a href="/de/bmi/">BMI</a>'
    const output = normalizeInternalLinks(normalizeInternalLinks(input))
    expect(output).toBe('<a href="/de/bmi/">BMI</a>')
  })

  it('skips .xml file extension', () => {
    const input = '<a href="/de/sitemap.xml">Sitemap</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/sitemap.xml">Sitemap</a>')
  })

  it('skips .png file extension', () => {
    const input = '<a href="/de/image.png">Img</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/image.png">Img</a>')
  })

  it('skips .svg file extension', () => {
    const input = '<a href="/de/icon.svg">Icon</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/icon.svg">Icon</a>')
  })

  it('skips .json file extension', () => {
    const input = '<a href="/de/data.json">Data</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/data.json">Data</a>')
  })

  it('skips .pdf file extension', () => {
    const input = '<a href="/de/doc.pdf">PDF</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/doc.pdf">PDF</a>')
  })

  it('skips .webmanifest file extension', () => {
    const input = '<a href="/de/app.webmanifest">Manifest</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/app.webmanifest">Manifest</a>')
  })

  it('skips .css file extension', () => {
    const input = '<link href="/de/style.css">'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<link href="/de/style.css">')
  })

  it('skips .js file extension', () => {
    const input = '<script src="/de/bundle.js"></script>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<script src="/de/bundle.js"></script>')
  })

  it('skips .ico file extension', () => {
    const input = '<link href="/de/favicon.ico">'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<link href="/de/favicon.ico">')
  })

  it('skips .woff file extension', () => {
    const input = '<link href="/de/font.woff">'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<link href="/de/font.woff">')
  })

  it('skips .woff2 file extension', () => {
    const input = '<link href="/de/font.woff2">'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<link href="/de/font.woff2">')
  })

  it('skips .ttf file extension', () => {
    const input = '<link href="/de/font.ttf">'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<link href="/de/font.ttf">')
  })

  it('skips .map file extension', () => {
    const input = '<script src="/de/bundle.js.map"></script>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<script src="/de/bundle.js.map"></script>')
  })

  it('skips fragment-only links (#)', () => {
    const input = '<a href="#">Top</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="#">Top</a>')
  })

  it('skips links starting with query string (?)', () => {
    const input = '<a href="?q=1">Search</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="?q=1">Search</a>')
  })

  it('skips external http:// links', () => {
    const input = '<a href="http://example.com/de/page">Link</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="http://example.com/de/page">Link</a>')
  })

  it('skips external https:// links', () => {
    const input = '<a href="https://example.com/en/page">Link</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="https://example.com/en/page">Link</a>')
  })

  it('leaves /api/... links untouched', () => {
    const input = '<a href="/api/data">API</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/api/data">API</a>')
  })

  it('leaves /assets/... links untouched', () => {
    const input = '<a href="/assets/image.png">Asset</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/assets/image.png">Asset</a>')
  })

  it('adds trailing slash before hash fragment in /de/ link', () => {
    const input = '<a href="/de/blog/post#section">Post</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/blog/post/#section">Post</a>')
  })

  it('adds trailing slash before query string in /de/ link', () => {
    const input = '<a href="/de/blog/post?q=1">Post</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/blog/post/?q=1">Post</a>')
  })

  it('adds trailing slash before hash fragment in /en/ link', () => {
    const input = '<a href="/en/blog/post#section">Post</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/en/blog/post/#section">Post</a>')
  })

  it('adds trailing slash before query string in /en/ link', () => {
    const input = '<a href="/en/blog/post?q=1">Post</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/en/blog/post/?q=1">Post</a>')
  })

  it('handles multiple links in one HTML string', () => {
    const input = '<a href="/de/bmi">BMI</a><a href="/en/bmi">BMI</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/bmi/">BMI</a><a href="/en/bmi/">BMI</a>')
  })

  it('normalizes nested /de/blog/slug path correctly', () => {
    const input = '<a href="/de/blog/bmi-artikel">Artikel</a>'
    const output = normalizeInternalLinks(input)
    expect(output).toBe('<a href="/de/blog/bmi-artikel/">Artikel</a>')
  })
})
