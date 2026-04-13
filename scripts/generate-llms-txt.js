import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE_URL = 'https://healthcalculator.app'
const META_DIR = join(__dirname, '../src/pages')
const OUTPUT = join(__dirname, '../dist/llms.txt')

function parseMeta(source) {
  const key = source.match(/key:\s*'([^']+)'/)?.[1]

  const slugsMatch = source.match(/slugs:\s*\{\s*de:\s*'([^']+)',\s*en:\s*'([^']+)'\s*\}/)
  const slugs = slugsMatch ? { de: slugsMatch[1], en: slugsMatch[2] } : null

  const blogBlock = source.match(/blog:\s*\{([\s\S]*)\},?\s*\}[\s]*$/)?.[1] ?? ''
  const blogDeSlug = blogBlock.match(/de:\s*\{[^}]*slug:\s*'([^']+)'/)?.[1]
  const blogEnSlug = blogBlock.match(/en:\s*\{[^}]*slug:\s*'([^']+)'/)?.[1]

  const blogDeFile = source.match(/import BlogDe from '(\.\/blog\/[^']+\.vue)'/)?.[1]
  const blogEnFile = source.match(/import BlogEn from '(\.\/blog\/(?:en\/)?[^']+\.vue)'/)?.[1]

  const blog = blogDeSlug && blogEnSlug ? {
    de: { slug: blogDeSlug, file: blogDeFile },
    en: { slug: blogEnSlug, file: blogEnFile },
  } : null

  return key && slugs && blog ? { key, slugs, blog } : null
}

export function discoverMetas(metaDir = META_DIR) {
  return readdirSync(metaDir)
    .filter(f => f.endsWith('.meta.js'))
    .map(f => parseMeta(readFileSync(join(metaDir, f), 'utf-8')))
    .filter(Boolean)
}

function loadLocale(key, locale, metaDir) {
  const localesDir = join(metaDir, '../locales/calculators')
  const filePath = join(localesDir, locale, `${key}.json`)
  try {
    const data = JSON.parse(readFileSync(filePath, 'utf-8'))
    const rawTitle = data[key]?.meta?.title ?? key
    return {
      title: rawTitle.replace(/ \| Health Calculators$/, ''),
      description: data[key]?.meta?.description ?? '',
    }
  } catch {
    return { title: key, description: '' }
  }
}

function extractStr(source, key) {
  const sq = source.match(new RegExp(`${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'`))
  if (sq) return sq[1].replace(/\\'/g, "'")
  const dq = source.match(new RegExp(`${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`))
  if (dq) return dq[1].replace(/\\"/g, '"')
  return ''
}

function parseBlogComponent(relPath, metaDir) {
  const absPath = join(metaDir, relPath.replace('./', ''))
  try {
    const source = readFileSync(absPath, 'utf-8')
    const title = extractStr(source, 'title').replace(/ \| Health Calculators$/, '')
    const description = extractStr(source, 'description')
    return { title, description }
  } catch {
    return { title: '', description: '' }
  }
}

export function generateLlmsTxt(metas, baseUrl = BASE_URL, metaDir = META_DIR) {
  let txt = '# Health Calculators\n\n'
  txt += '> Free, science-backed health calculators for BMI, BMR, body fat, calories, macros, and more. Available in English and German.\n\n'

  txt += '## Calculators\n\n'
  for (const meta of metas) {
    const en = loadLocale(meta.key, 'en', metaDir)
    const de = loadLocale(meta.key, 'de', metaDir)
    txt += `- [${en.title}](${baseUrl}/en/${meta.slugs.en}): ${en.description}\n`
    txt += `- [${de.title}](${baseUrl}/de/${meta.slugs.de}): ${de.description}\n`
  }

  txt += '\n## Blog\n\n'
  for (const meta of metas) {
    const enBlog = meta.blog.en.file ? parseBlogComponent(meta.blog.en.file, metaDir) : { title: '', description: '' }
    const deBlog = meta.blog.de.file ? parseBlogComponent(meta.blog.de.file, metaDir) : { title: '', description: '' }
    if (enBlog.title) txt += `- [${enBlog.title}](${baseUrl}/en/blog/${meta.blog.en.slug}): ${enBlog.description}\n`
    if (deBlog.title) txt += `- [${deBlog.title}](${baseUrl}/de/blog/${meta.blog.de.slug}): ${deBlog.description}\n`
  }

  return txt
}

if (process.argv[1]?.endsWith('generate-llms-txt.js')) {
  const metas = discoverMetas()
  const content = generateLlmsTxt(metas)
  writeFileSync(OUTPUT, content)
  const linkCount = content.split('\n').filter(l => l.startsWith('- [')).length
  console.log(`llms.txt generated: ${linkCount} links → ${OUTPUT}`)
}
