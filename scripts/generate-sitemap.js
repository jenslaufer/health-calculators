import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE_URL = 'https://healthcalculator.app'
const META_DIR = join(__dirname, '../src/pages')
const OUTPUT = join(__dirname, '../dist/sitemap.xml')

/**
 * Parse a meta file with regex — avoids importing Vue components.
 * Extracts key, slugs (de/en), and blog slugs (de/en).
 */
function parseMeta(source) {
  const key = source.match(/key:\s*'([^']+)'/)?.[1]

  const slugsMatch = source.match(/slugs:\s*\{\s*de:\s*'([^']+)',\s*en:\s*'([^']+)'\s*\}/)
  const slugs = slugsMatch ? { de: slugsMatch[1], en: slugsMatch[2] } : null

  // blog block: find blog: { ... } section, then extract de and en slug within it
  const blogBlock = source.match(/blog:\s*\{([\s\S]*)\},?\s*\}[\s]*$/)?.[1] ?? ''
  const blogDeSlug = blogBlock.match(/de:\s*\{[^}]*slug:\s*'([^']+)'/)?.[1]
  const blogEnSlug = blogBlock.match(/en:\s*\{[^}]*slug:\s*'([^']+)'/)?.[1]
  const blog = blogDeSlug && blogEnSlug
    ? { de: { slug: blogDeSlug }, en: { slug: blogEnSlug } }
    : null

  return key && slugs && blog ? { key, slugs, blog } : null
}

export function discoverMetas(metaDir) {
  return readdirSync(metaDir)
    .filter(f => f.endsWith('.meta.js'))
    .map(f => parseMeta(readFileSync(join(metaDir, f), 'utf-8')))
    .filter(Boolean)
}

export function discoverBlogSlugs(metas) {
  return {
    de: metas.map(m => m.blog.de.slug),
    en: metas.map(m => m.blog.en.slug),
  }
}

function urlEntry(loc, alternates, priority = '0.8') {
  let xml = `  <url>\n    <loc>${loc}</loc>\n`
  if (alternates) {
    for (const [lang, href] of Object.entries(alternates)) {
      xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>\n`
    }
  }
  xml += `    <priority>${priority}</priority>\n`
  xml += `  </url>\n`
  return xml
}

export function generateSitemap(metas, baseUrl = BASE_URL) {
  const { de: blogDeSlugs, en: blogEnSlugs } = discoverBlogSlugs(metas)

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'

  // Home pages
  const homeAlts = { de: `${baseUrl}/de`, en: `${baseUrl}/en` }
  xml += urlEntry(`${baseUrl}/de`, homeAlts, '1.0')
  xml += urlEntry(`${baseUrl}/en`, homeAlts, '1.0')

  // Calculator pages
  for (const meta of metas) {
    const alts = {
      de: `${baseUrl}/de/${meta.slugs.de}`,
      en: `${baseUrl}/en/${meta.slugs.en}`,
    }
    xml += urlEntry(alts.de, alts)
    xml += urlEntry(alts.en, alts)
  }

  // Blog index pages
  const blogAlts = { de: `${baseUrl}/de/blog`, en: `${baseUrl}/en/blog` }
  xml += urlEntry(`${baseUrl}/de/blog`, blogAlts)
  xml += urlEntry(`${baseUrl}/en/blog`, blogAlts)

  // Blog article pages — pair de/en by index (same order from metas)
  for (let i = 0; i < blogDeSlugs.length; i++) {
    const deSlug = blogDeSlugs[i]
    const enSlug = blogEnSlugs[i]
    const alts = {
      de: `${baseUrl}/de/blog/${deSlug}`,
      en: `${baseUrl}/en/blog/${enSlug}`,
    }
    xml += urlEntry(alts.de, alts)
    xml += urlEntry(alts.en, alts)
  }

  xml += '</urlset>\n'
  return xml
}

if (process.argv[1]?.endsWith('generate-sitemap.js')) {
  const metas = discoverMetas(META_DIR)
  const xml = generateSitemap(metas)
  writeFileSync(OUTPUT, xml)
  const urlCount = (xml.match(/<url>/g) || []).length
  console.log(`Sitemap generated: ${urlCount} URLs → ${OUTPUT}`)
}
