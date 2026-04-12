import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const publicDir = resolve(import.meta.dirname, '..', 'public')

describe('404.html', () => {
  const content = readFileSync(resolve(publicDir, '404.html'), 'utf-8')

  it('exists in public/', () => {
    expect(content).toBeTruthy()
  })

  it('contains the app shell', () => {
    expect(content).toContain('<div id="app"></div>')
    expect(content).toContain('<script type="module"')
  })

  it('has noindex robots meta', () => {
    expect(content).toContain('noindex')
  })

  it('does not have a canonical tag', () => {
    expect(content).not.toContain('rel="canonical"')
  })
})
