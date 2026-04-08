import { test, expect } from '@playwright/test'

test.describe('Caffeine Blog Article (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/koffein-rechner-schlafen')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Koffein/i)
  })

  test('h1 is visible and contains Koffein', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Koffein')
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/de\/koffein-rechner$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })

  test('article contains German text (no English "read")', async ({ page }) => {
    const body = await page.locator('article').textContent()
    expect(body).toContain('Lesezeit')
    expect(body).not.toContain('min read')
  })
})

test.describe('Caffeine Blog Article (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/caffeine-calculator-sleep-guide')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Caffeine/i)
  })

  test('h1 is visible and contains Caffeine', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Caffeine')
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Calculate for free now/i }).click()
    await expect(page).toHaveURL(/\/en\/caffeine-calculator$/)
  })

  test('back link goes to English blog', async ({ page }) => {
    const backLink = page.locator('a[href="/en/blog"]').first()
    await expect(backLink).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })

  test('article contains English text (no German "Lesezeit")', async ({ page }) => {
    const body = await page.locator('article').textContent()
    expect(body).toContain('read')
    expect(body).not.toContain('Lesezeit')
  })
})
