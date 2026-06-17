import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = join(__dirname, '../dist')

// Internal links pointing at /de or /en (optionally with a path), no #fragment or ?query.
const LINK_RE = /href="(\/(?:de|en)(?:\/[^"#?]*)?)"/g
// Paths ending in a file extension are real files, not routes — leave them alone.
const FILE_EXT_RE = /\.(xml|png|svg|jpe?g|webp|json|webmanifest|pdf|css|js|gif|avif|ico|txt)$/i

/**
 * Rewrite slash-less internal /de|/en links to trailing-slash form.
 * Idempotent: already-slashed links, file-extension paths, fragments,
 * queries, and external links are left untouched.
 */
export function normalizeInternalLinks(html) {
  return html.replace(LINK_RE, (match, url) => {
    if (url.endsWith('/')) return match
    if (FILE_EXT_RE.test(url)) return match
    return `href="${url}/"`
  })
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

if (process.argv[1]?.endsWith('normalize-internal-links.js')) {
  const files = walkHtml(DIST_DIR)
  let changed = 0
  for (const file of files) {
    const src = readFileSync(file, 'utf-8')
    const out = normalizeInternalLinks(src)
    if (out !== src) {
      writeFileSync(file, out)
      changed++
    }
  }
  console.log(`Normalized internal links: ${changed}/${files.length} files updated`)
}
