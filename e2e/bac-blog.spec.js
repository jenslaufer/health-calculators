import { test, expect } from '@playwright/test'

test.describe('BAC Blog Article DE (Promille berechnen)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/promille-berechnen')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Promille berechnen/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Promille berechnen/i })).toBeVisible()
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/de\/promillerechner$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })
})

test.describe('BAC Blog Article EN (Blood Alcohol Calculator)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/blood-alcohol-calculator')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Blood Alcohol Calculator/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Blood Alcohol Calculator/i })).toBeVisible()
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Calculate for free/i }).click()
    await expect(page).toHaveURL(/\/en\/blood-alcohol-calculator$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })
})
