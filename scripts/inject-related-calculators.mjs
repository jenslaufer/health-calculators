import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const pagesDir = '/workspace/repo/src/pages'
const metaFiles = readdirSync(pagesDir).filter(f => f.endsWith('.meta.js'))

let patchedCount = 0
let skippedBlogOnly = 0
let skippedNoBlogArticleLink = 0
let skippedAlreadyPatched = 0
let skippedNoComponent = 0

for (const metaFile of metaFiles) {
  const metaContent = readFileSync(join(pagesDir, metaFile), 'utf8')

  // Skip blogOnly
  if (metaContent.includes('blogOnly: true')) {
    skippedBlogOnly++
    continue
  }

  // Extract key
  const keyMatch = metaContent.match(/key:\s*['"]([^'"]+)['"]/)
  if (!keyMatch) continue
  const key = keyMatch[1]

  // Extract component filename
  const componentMatch = metaContent.match(/import Component from '\.\/([^']+\.vue)'/)
  if (!componentMatch) {
    skippedNoComponent++
    continue
  }
  const vueFile = join(pagesDir, componentMatch[1])

  let vueContent = readFileSync(vueFile, 'utf8')

  // Skip if already patched
  if (vueContent.includes('RelatedCalculators')) {
    skippedAlreadyPatched++
    continue
  }

  // Skip if no BlogArticleLink (can't determine placement)
  if (!vueContent.includes('<BlogArticleLink')) {
    skippedNoBlogArticleLink++
    continue
  }

  // Insert import after the last import line
  const importMatches = [...vueContent.matchAll(/^import .+$/mg)]
  const lastImport = importMatches[importMatches.length - 1]
  if (lastImport !== undefined) {
    const lastImportEnd = vueContent.indexOf('\n', lastImport.index) + 1
    vueContent = vueContent.slice(0, lastImportEnd) +
      `import RelatedCalculators from '../components/RelatedCalculators.vue'\n` +
      vueContent.slice(lastImportEnd)
  }

  // Add component before BlogArticleLink
  vueContent = vueContent.replace(
    /(\s*)(<BlogArticleLink)/,
    `$1<RelatedCalculators calc-key="${key}" class="mt-8" />\n$1$2`
  )

  writeFileSync(vueFile, vueContent)
  console.log(`Patched: ${componentMatch[1]} with calc-key="${key}"`)
  patchedCount++
}

console.log(`\nSummary:`)
console.log(`  Patched: ${patchedCount}`)
console.log(`  Skipped (blogOnly): ${skippedBlogOnly}`)
console.log(`  Skipped (already patched): ${skippedAlreadyPatched}`)
console.log(`  Skipped (no BlogArticleLink): ${skippedNoBlogArticleLink}`)
console.log(`  Skipped (no component): ${skippedNoComponent}`)
