// @vitest-environment node
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EN_BLOG_DIR = path.resolve(__dirname, '../pages/blog/en')

// Recursively collect every *.vue file under src/pages/blog/en/.
function collectVueFiles(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...collectVueFiles(full))
    else if (entry.isFile() && entry.name.endsWith('.vue')) out.push(full)
  }
  return out
}

// The German component. RelatedArticlesEn legitimately contains "RelatedArticles"
// as a substring, so we match only the precise DE tokens:
//   - the DE import path: components/RelatedArticles.vue
//   - the DE component tag: <RelatedArticles NOT followed by "En"
const DE_IMPORT_PATH = /components\/RelatedArticles\.vue/
const DE_COMPONENT_TAG = /<RelatedArticles(?!En)/

describe('EN blog pages must use the English RelatedArticlesEn component', () => {
  const files = collectVueFiles(EN_BLOG_DIR)

  it('finds EN blog pages to check', () => {
    expect(files.length).toBeGreaterThan(0)
  })

  it('no EN blog page imports or uses the German RelatedArticles component', () => {
    const offenders = files
      .filter((file) => {
        const src = fs.readFileSync(file, 'utf8')
        return DE_IMPORT_PATH.test(src) || DE_COMPONENT_TAG.test(src)
      })
      .map((file) => path.relative(EN_BLOG_DIR, file))

    expect(
      offenders,
      `These EN blog pages still reference the German RelatedArticles component ` +
        `instead of RelatedArticlesEn:\n  ${offenders.join('\n  ')}`,
    ).toEqual([])
  })
})
