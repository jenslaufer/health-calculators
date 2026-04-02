import { test, expect } from '@playwright/test'

test.describe('VO2 Max Blog Article DE (VO2 Max berechnen)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/vo2max-berechnen')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/VO2 Max berechnen/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /VO2 Max berechnen/i })).toBeVisible()
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/health-calculators\/de\/vo2max-rechner$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })
})

test.describe('VO2 Max Blog Article EN (VO2 Max Calculator)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/calculate-vo2max')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/VO2 Max Calculator/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /VO2 Max Calculator/i })).toBeVisible()
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Calculate for free now/i }).click()
    await expect(page).toHaveURL(/\/health-calculators\/en\/vo2max-calculator$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles-en')
    await expect(section).toBeVisible()
  })
})
