import { test, expect } from '@playwright/test'

test.describe('Protein Need Blog Article (Eiweißbedarf berechnen)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/eiweissbedarf-berechnen')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Eiweißbedarf berechnen/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Eiweißbedarf berechnen/i })).toBeVisible()
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/de\/eiweissbedarf-rechner$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })
})

test.describe('Protein Need Blog Article EN', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/protein-requirements-guide')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Protein Requirements/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Protein Requirements/i })).toBeVisible()
  })

  test('link to calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Calculate for free now/i }).click()
    await expect(page).toHaveURL(/\/en\/protein-need-calculator$/)
  })
})
