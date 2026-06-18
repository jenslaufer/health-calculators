import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, dirname, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = join(__dirname, '../dist')

const ROBOTS_META_RE = /<meta\b[^>]*\bname\s*=\s*["']robots["'][^>]*>/gi
const NOT_FOUND_TITLE_RE = /<title[^>]*>[^<]*Page not found[^<]*<\/title>/i

function hasNoindex(html) {
  const matches = html.match(ROBOTS_META_RE)
  if (!matches) return false
  return matches.some(tag => /content\s*=\s*["'][^"']*noindex/i.test(tag))
}

function isNotFoundPage(relPath, html) {
  const normalized = relPath.split(sep).join('/')
  if (normalized === '404.html') return true
  return NOT_FOUND_TITLE_RE.test(html)
}

function walkHtml(dir) {
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walkHtml(full))
    else if (entry.name.endsWith('.html')) files.push(full)
  }
  return files
}

export function scanDistForNoindex(distDir) {
  const files = walkHtml(distDir)
  const offenders = []
  let notFoundHasNoindex = false
  let notFoundFound = false

  for (const file of files) {
    const rel = relative(distDir, file)
    const html = readFileSync(file, 'utf-8')
    const isNotFound = isNotFoundPage(rel, html)
    const noindex = hasNoindex(html)

    if (isNotFound) {
      notFoundFound = true
      if (noindex) notFoundHasNoindex = true
    } else if (noindex) {
      offenders.push(file)
    }
  }

  const ok = offenders.length === 0 && notFoundFound && notFoundHasNoindex
  return { offenders, notFoundHasNoindex, notFoundFound, totalPages: files.length, ok }
}

if (process.argv[1]?.endsWith('verify-noindex.js')) {
  const result = scanDistForNoindex(DIST_DIR)
  if (result.offenders.length > 0) {
    console.error(`verify-noindex: FAIL — ${result.offenders.length} non-404 page(s) carry noindex:`)
    for (const f of result.offenders) console.error(`  ${f}`)
    process.exit(1)
  }
  if (!result.notFoundFound || !result.notFoundHasNoindex) {
    console.error('verify-noindex: FAIL — 404 page is missing its noindex meta')
    process.exit(1)
  }
  console.log(`verify-noindex: ${result.totalPages} pages OK, 404 noindex present`)
}
