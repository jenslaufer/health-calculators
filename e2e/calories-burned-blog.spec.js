import { test, expect } from '@playwright/test'

test.describe('Calories Burned Blog Article DE (Kalorienverbrauch berechnen)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/kalorienverbrauch-berechnen')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Kalorienverbrauch berechnen/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Kalorienverbrauch berechnen/i })).toBeVisible()
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/health-calculators\/de\/kalorienverbrauch$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })
})

test.describe('Calories Burned Blog Article EN (Calculate Calories Burned)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/calculate-calories-burned')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Calculate Calories Burned/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Calculate Calories Burned/i })).toBeVisible()
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Calculate for free now/i }).click()
    await expect(page).toHaveURL(/\/health-calculators\/en\/calories-burned$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles-en')
    await expect(section).toBeVisible()
  })
})
