// Auto-discovery module: discovers calculators from *.meta.js files via Vite glob imports.
// New calculators only need to add their own meta.js file — no shared files to edit.

const metaModules = import.meta.glob('./pages/*.meta.js', { eager: true })

const allMetas = Object.values(metaModules).map(m => m.default)

// Sort by groupOrder, then by order within group
export const calculatorMetas = allMetas.sort((a, b) =>
  a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.order - b.order
)

// { key: component } map for route generation
export const calculatorComponents = Object.fromEntries(
  calculatorMetas.map(m => [m.key, m.component])
)

// { key: { de, en } } map for locale-aware routing
export const routeMap = {
  home: { de: '', en: '' },
  ...Object.fromEntries(calculatorMetas.map(m => [m.key, m.slugs])),
  blog: { de: 'blog', en: 'blog' },
}

// { slug: component } maps for blog routes (calculators without blog are skipped)
export const blogComponentsDe = Object.fromEntries(
  calculatorMetas
    .filter(m => m.blog?.de)
    .map(m => [m.blog.de.slug, m.blog.de.component])
)

export const blogComponentsEn = Object.fromEntries(
  calculatorMetas
    .filter(m => m.blog?.en)
    .map(m => [m.blog.en.slug, m.blog.en.component])
)

// Old redirect paths for backwards compatibility (only for calculators that define one)
export const oldRedirects = calculatorMetas
  .filter(m => m.oldRedirect)
  .map(m => ({
    path: m.oldRedirect,
    redirect: `/de/${m.slugs.de}`,
  }))

// Calculator groups for Home page, derived from meta ordering
const groupMap = new Map()
for (const m of calculatorMetas) {
  if (!groupMap.has(m.group)) {
    groupMap.set(m.group, [])
  }
  groupMap.get(m.group).push(m.key)
}

export const calculatorGroups = [...groupMap.entries()].map(([key, calculators]) => ({
  key,
  calculators,
}))

export const keyToGroup = Object.fromEntries(
  calculatorMetas.map(m => [m.key, m.group])
)
