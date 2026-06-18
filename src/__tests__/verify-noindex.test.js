import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtempSync, rmSync, mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { scanDistForNoindex } from '../../scripts/verify-noindex.js'

const realPage = (title = 'BMI Calculator') => `<!doctype html>
<html><head><title>${title}</title>
<meta name="robots" content="index, follow" />
</head><body>ok</body></html>`

const notFoundPage = () => `<!doctype html>
<html><head><title>Page not found — Health Calculators</title>
<meta name="robots" content="noindex" />
</head><body>404</body></html>`

const noindexRealPage = () => `<!doctype html>
<html><head><title>Some Calculator</title>
<meta name="robots" content="noindex, follow" />
</head><body>oops</body></html>`

let dir
beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), 'verify-noindex-'))
})
afterEach(() => {
  rmSync(dir, { recursive: true, force: true })
})

const write = (rel, html) => {
  const full = join(dir, rel)
  mkdirSync(join(full, '..'), { recursive: true })
  writeFileSync(full, html)
}

describe('scanDistForNoindex', () => {
  it('passes on a clean tree: real pages indexable, 404 noindex present', () => {
    write('index.html', realPage('Home'))
    write('de/bmi/index.html', realPage('BMI'))
    write('en/bmi/index.html', realPage('BMI EN'))
    write('404.html', notFoundPage())

    const r = scanDistForNoindex(dir)
    expect(r.offenders).toEqual([])
    expect(r.notFoundHasNoindex).toBe(true)
    expect(r.ok).toBe(true)
    expect(r.totalPages).toBeGreaterThanOrEqual(4)
  })

  it('flags a real (non-404) page that carries noindex', () => {
    write('index.html', realPage('Home'))
    write('de/bmi/index.html', noindexRealPage())
    write('404.html', notFoundPage())

    const r = scanDistForNoindex(dir)
    expect(r.ok).toBe(false)
    expect(r.offenders.some(p => p.endsWith('de/bmi/index.html'))).toBe(true)
  })

  it('fails when the 404 page is missing its noindex', () => {
    write('index.html', realPage('Home'))
    write('404.html', realPage('Page not found — Health Calculators'))

    const r = scanDistForNoindex(dir)
    expect(r.notFoundHasNoindex).toBe(false)
    expect(r.ok).toBe(false)
  })

  it('treats pages whose title contains "Page not found" as the 404 catch-all', () => {
    write('index.html', realPage('Home'))
    write('404.html', notFoundPage())
    // SPA-style catch-all rendered at a non-/404 path
    write('de/missing/index.html', notFoundPage())

    const r = scanDistForNoindex(dir)
    expect(r.offenders).toEqual([])
    expect(r.ok).toBe(true)
  })

  it('matches noindex case-insensitively and tolerates attribute order', () => {
    write('index.html', realPage('Home'))
    write('404.html', notFoundPage())
    write('de/x/index.html', `<html><head><title>X</title>
<META CONTENT="NoIndex, follow" NAME="robots"></head><body></body></html>`)

    const r = scanDistForNoindex(dir)
    expect(r.ok).toBe(false)
    expect(r.offenders.some(p => p.endsWith('de/x/index.html'))).toBe(true)
  })
})
