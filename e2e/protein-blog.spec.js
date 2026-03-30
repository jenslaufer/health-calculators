import { test, expect } from '@playwright/test'

test.describe('Protein Blog Article (Proteinbedarf berechnen)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/proteinbedarf-berechnen')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Proteinbedarf berechnen/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Proteinbedarf berechnen/i })).toBeVisible()
    await expect(page.getByText('Protein').first()).toBeVisible()
  })

  test('link to protein calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/health-calculators\/de\/protein-rechner$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })
})
