import { test, expect } from '@playwright/test'

test.describe('Pregnancy Due Date Blog Article', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/geburtstermin-berechnen')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Geburtstermin berechnen/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Geburtstermin berechnen/i })).toBeVisible()
    await expect(page.getByText('Naegele-Regel').first()).toBeVisible()
    await expect(page.getByText('Trimester').first()).toBeVisible()
  })

  test('link to pregnancy calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/health-calculators\/de\/schwangerschafts-rechner$/)
  })

  test('blog banner link back to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })
})
