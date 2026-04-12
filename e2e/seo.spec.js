import { test, expect } from '@playwright/test'

test.describe('SEO fallback files', () => {
  test('404.html serves the app shell with rendered content', async ({ page }) => {
    const response = await page.goto('404.html')
    expect(response.status()).toBe(200)
    const content = await page.content()
    expect(content).toContain('<div id="app"')
    expect(content).toContain('<nav')
    expect(content).toContain('<main')
  })

  test('404.html has noindex meta tag', async ({ page }) => {
    await page.goto('404.html')
    const robotsMeta = await page.getAttribute('meta[name="robots"]', 'content')
    expect(robotsMeta).toContain('noindex')
  })

  test('unknown route renders NotFound page with noindex', async ({ page }) => {
    await page.goto('/nonexistent-page-xyz')
    await expect(page.locator('text=404')).toBeVisible()
    await expect(page.locator('text=Page not found')).toBeVisible()
  })
})
