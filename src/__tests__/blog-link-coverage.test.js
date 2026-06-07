import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { articles } from '../data/articles.js'
import { articlesEn } from '../data/articles-en.js'

const pagesDir = path.resolve(__dirname, '../pages')
const metaFiles = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.meta.js'))

describe('blog article coverage', () => {
  for (const f of metaFiles) {
    const src = fs.readFileSync(path.join(pagesDir, f), 'utf8')
    const keyMatch = src.match(/key\s*:\s*['"]([^'"]+)['"]/)
    const calculatorKey = keyMatch && keyMatch[1]
    const hasBlogBlock = /\bblog\s*:\s*\{/.test(src)
    const hasComponent = /import Component from/.test(src)

    if (!hasComponent) continue

    it(`${calculatorKey}: has blog block in meta.js`, () => {
      expect(hasBlogBlock, `${f} has a component but no blog block — add a blog: {} entry`).toBe(true)
    })

    if (!hasBlogBlock) continue

    it(`${calculatorKey}: has DE article in articles.js`, () => {
      expect(articles.find((a) => a.calculatorKey === calculatorKey)).toBeTruthy()
    })
    it(`${calculatorKey}: has EN article in articles-en.js`, () => {
      expect(articlesEn.find((a) => a.calculatorKey === calculatorKey)).toBeTruthy()
    })
  }
})
