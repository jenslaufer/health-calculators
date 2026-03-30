import { test, expect } from '@playwright/test'

test.describe('SEO fallback files', () => {
  test('sitemap.xml is accessible and valid XML', async ({ page }) => {
    const response = await page.goto('sitemap.xml')
    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('<?xml version="1.0"')
    expect(text).toContain('<urlset')
    expect(text).toContain('<loc>')
  })

  test('404.html serves the app shell', async ({ page }) => {
    const response = await page.goto('404.html')
    expect(response.status()).toBe(200)
    const content = await page.content()
    expect(content).toContain('<div id="app"></div>')
  })
})
