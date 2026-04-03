import {
  calculatorComponents,
  routeMap,
  blogComponentsDe,
  blogComponentsEn,
  oldRedirects,
} from './discovery.js'
import Home from './pages/Home.vue'
import BlogHome from './pages/BlogHome.vue'
import BlogHomeEn from './pages/BlogHomeEn.vue'

const blogComponentsByLocale = {
  de: blogComponentsDe,
  en: blogComponentsEn,
}

const blogHomeByLocale = {
  de: BlogHome,
  en: BlogHomeEn,
}

function createLocaleRoutes(locale) {
  const prefix = `/${locale}`
  const routes = [
    {
      path: `${prefix}/`,
      component: Home,
      meta: { routeKey: 'home', locale },
    },
  ]

  for (const [key, component] of Object.entries(calculatorComponents)) {
    routes.push({
      path: `${prefix}/${routeMap[key][locale]}`,
      component,
      meta: { routeKey: key, locale },
    })
  }

  routes.push({
    path: `${prefix}/blog`,
    component: blogHomeByLocale[locale],
    meta: { routeKey: 'blog', locale },
  })

  for (const [slug, component] of Object.entries(blogComponentsByLocale[locale])) {
    routes.push({
      path: `${prefix}/blog/${slug}`,
      component,
      meta: { routeKey: 'blogArticle', locale, slug },
    })
  }

  return routes
}

const blogSlugs = Object.keys(blogComponentsDe)
const oldBlogRedirects = blogSlugs.map(slug => ({
  path: `/blog/${slug}`,
  redirect: `/de/blog/${slug}`,
}))

const routes = [
  { path: '/', redirect: '/de/' },
  ...createLocaleRoutes('de'),
  ...createLocaleRoutes('en'),
  ...oldRedirects,
  { path: '/blog', redirect: '/de/blog' },
  ...oldBlogRedirects,
]

export default routes
