import { describe, it, expect } from 'vitest'
import routes from '../routes.js'

describe('routes.js exports', () => {
  it('exports a valid routes array', () => {
    expect(Array.isArray(routes)).toBe(true)
    expect(routes.length).toBeGreaterThan(0)
  })

  it('contains both de and en locale routes', () => {
    const dePaths = routes.filter(r => r.path?.startsWith('/de/'))
    const enPaths = routes.filter(r => r.path?.startsWith('/en/'))
    expect(dePaths.length).toBeGreaterThan(0)
    expect(enPaths.length).toBeGreaterThan(0)
  })

  it('has locale meta on all locale routes', () => {
    const localeRoutes = routes.filter(r => r.path?.startsWith('/de/') || r.path?.startsWith('/en/'))
    for (const route of localeRoutes) {
      expect(route.meta?.locale).toMatch(/^(de|en)$/)
    }
  })

  it('does not use window.location in any beforeEnter', () => {
    for (const route of routes) {
      if (route.beforeEnter) {
        const src = route.beforeEnter.toString()
        expect(src).not.toContain('window.location')
      }
    }
  })

  it('contains redirect routes for old paths', () => {
    const redirectRoutes = routes.filter(r => r.redirect)
    expect(redirectRoutes.length).toBeGreaterThan(0)
    const rootRedirect = routes.find(r => r.path === '/')
    expect(rootRedirect?.redirect).toBe('/de/')
  })

  it('has no routes with undefined or empty path', () => {
    for (const route of routes) {
      expect(route.path).toBeDefined()
      expect(typeof route.path).toBe('string')
      expect(route.path.length).toBeGreaterThan(0)
    }
  })

  it('root redirect goes to /de/ with no competing undefined-path routes', () => {
    const undefinedPathRoutes = routes.filter(r => r.path === undefined || r.path === '')
    expect(undefinedPathRoutes).toHaveLength(0)
    const rootRoute = routes.find(r => r.path === '/')
    expect(rootRoute?.redirect).toBe('/de/')
  })
})
