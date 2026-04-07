import { test, expect } from '@playwright/test'

test.describe('Ovulation Blog Article (Eisprung berechnen)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/eisprung-berechnen')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Eisprung berechnen/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Eisprung berechnen/i })).toBeVisible()
    await expect(page.getByText('fruchtbaren Tage').first()).toBeVisible()
  })

  test('link to ovulation calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/de\/eisprung-rechner$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })
})
