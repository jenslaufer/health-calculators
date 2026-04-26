import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

const pagesDir = path.resolve(__dirname, '../pages')
const metaFiles = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.meta.js'))

describe('every calculator View with a blog renders BlogArticleLink', () => {
  for (const f of metaFiles) {
    const metaSrc = fs.readFileSync(path.join(pagesDir, f), 'utf8')
    if (!/\bblog\s*:\s*\{/.test(metaSrc)) continue
    const compMatch = metaSrc.match(/import\s+Component\s+from\s+['"]\.\/([^'"]+)['"]/)
    if (!compMatch) continue
    const viewPath = path.join(pagesDir, compMatch[1])
    const viewSrc = fs.readFileSync(viewPath, 'utf8')
    it(`${compMatch[1]}: imports BlogArticleLink`, () => {
      expect(viewSrc).toMatch(/from\s+['"]\.\.\/components\/BlogArticleLink\.vue['"]/)
    })
    it(`${compMatch[1]}: renders <BlogArticleLink>`, () => {
      expect(viewSrc).toMatch(/<BlogArticleLink\b/)
    })
    it(`${compMatch[1]}: no longer references BlogBanner`, () => {
      expect(viewSrc).not.toMatch(/\bBlogBanner\b/)
    })
  }
})
