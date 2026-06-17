import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const FILE_EXTENSIONS = new Set([
  '.xml', '.png', '.svg', '.jpg', '.jpeg', '.gif', '.webp', '.ico',
  '.json', '.pdf', '.webmanifest', '.css', '.js', '.mjs', '.ts',
  '.woff', '.woff2', '.ttf', '.map', '.txt', '.csv',
])

// Matches href="..." or src="..." where the value starts with /de or /en (not preceded by http(s)://)
const LINK_RE = /(?<=(?:href|src)=")\/(?:de|en)(\/[^"]*)?(?=")/g

function hasFileExtension(path) {
  // Extract the path segment before any # or ?
  const pathPart = path.split(/[#?]/)[0]
  const lastSegment = pathPart.split('/').pop()
  const dotIndex = lastSegment.lastIndexOf('.')
  if (dotIndex === -1) return false
  const ext = lastSegment.slice(dotIndex)
  return FILE_EXTENSIONS.has(ext)
}

export function normalizeInternalLinks(html) {
  return html.replace(LINK_RE, (match) => {
    // match is the path value e.g. /de/bmi or /de/blog/post#section
    // split into path, separator (#/?), and rest
    const sepIndex = match.search(/[#?]/)
    const pathPart = sepIndex === -1 ? match : match.slice(0, sepIndex)
    const rest = sepIndex === -1 ? '' : match.slice(sepIndex)

    // Skip if already has trailing slash
    if (pathPart.endsWith('/')) return match

    // Skip if path ends with a known file extension
    if (hasFileExtension(pathPart)) return match

    return pathPart + '/' + rest
  })
}

function walkHtmlFiles(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...walkHtmlFiles(full))
    } else if (entry.endsWith('.html')) {
      results.push(full)
    }
  }
  return results
}

if (process.argv[1]?.endsWith('normalize-internal-links.js')) {
  const distDir = join(__dirname, '../dist')
  const files = walkHtmlFiles(distDir)
  let changedCount = 0
  for (const file of files) {
    const original = readFileSync(file, 'utf-8')
    const normalized = normalizeInternalLinks(original)
    if (normalized !== original) {
      writeFileSync(file, normalized)
      changedCount++
    }
  }
  console.log(`normalize-internal-links: ${changedCount} of ${files.length} HTML files updated`)
}
