import { test, expect } from '@playwright/test'

test.describe('Root path / behavior', () => {
  test('/ redirects to /en/', async ({ page }) => {
    const response = await page.goto('/')
    await expect(page).toHaveURL(/\/en\/?$/)
    expect(response?.status()).toBeLessThan(400)
  })

  test('/ does not serve wrong calculator content', async ({ page }) => {
    await page.goto('/')
    const h1 = await page.locator('h1').textContent()
    expect(h1).not.toMatch(/Eiwei/)
    expect(h1).not.toMatch(/Protein/)
  })

  test('/en/ has 40+ internal calculator links', async ({ page }) => {
    await page.goto('en/')
    const links = page.locator('a[href*="/en/"]')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(40)
  })

  test('/de/ has 40+ internal calculator links', async ({ page }) => {
    await page.goto('de/')
    const links = page.locator('a[href*="/de/"]')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(40)
  })
})
