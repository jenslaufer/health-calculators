import { test, expect } from '@playwright/test'

test.describe('Blog: Kaloriendefizit berechnen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/kaloriendefizit-berechnen')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Kaloriendefizit berechnen/)
  })

  test('has correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Kaloriendefizit berechnen')
  })

  test('has content sections', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /7\.700-kcal/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Mifflin-St Jeor/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Sicheres Defizit/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Fazit/i })).toBeVisible()
  })

  test('links to calculator', async ({ page }) => {
    const ctaLink = page.locator('a[href="/de/kaloriendefizit-rechner"]')
    await expect(ctaLink.first()).toBeVisible()
  })

  test('has related articles section', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })

  test('back link navigates to blog home', async ({ page }) => {
    await page.getByText('← Blog').click()
    await expect(page).toHaveURL(/\/de\/blog$/)
  })
})
