import { test, expect } from '@playwright/test'

test.describe('BMR Blog Article (Grundumsatz berechnen)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/grundumsatz-berechnen')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Grundumsatz berechnen/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Grundumsatz berechnen/i })).toBeVisible()
    await expect(page.getByText('Mifflin-St Jeor').first()).toBeVisible()
  })

  test('has key headings', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Mifflin-St Jeor/i }).first()).toBeVisible()
    await expect(page.getByRole('heading', { name: /Harris-Benedict/i }).first()).toBeVisible()
  })

  test('link to BMR calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/de\/bmr-rechner$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })

  test('structured data contains BlogPosting schema', async ({ page }) => {
    const jsonLd = await page.locator('script[data-head="jsonld"]').textContent()
    const data = JSON.parse(jsonLd)
    expect(data['@type']).toBe('Article')
    expect(data.headline).toContain('Grundumsatz')
  })
})

test.describe('BMR Blog Article EN (Calculate BMR)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/calculate-bmr')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Calculate BMR/i)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Calculate BMR/i })).toBeVisible()
    await expect(page.getByText('Mifflin-St Jeor').first()).toBeVisible()
  })

  test('has key headings', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Mifflin-St Jeor/i }).first()).toBeVisible()
    await expect(page.getByRole('heading', { name: /Harris-Benedict/i }).first()).toBeVisible()
  })

  test('link to BMR calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Calculate for free now/i }).click()
    await expect(page).toHaveURL(/\/en\/bmr-calculator$/)
  })

  test('back link to blog is visible', async ({ page }) => {
    await expect(page.locator('a[href="/en/blog"]').first()).toBeVisible()
  })

  test('related articles section exists', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })

  test('structured data contains Article schema', async ({ page }) => {
    const jsonLd = await page.locator('script[data-head="jsonld"]').textContent()
    const data = JSON.parse(jsonLd)
    expect(data['@type']).toBe('Article')
    expect(data.headline).toContain('Calculate BMR')
  })

  test('contains English text', async ({ page }) => {
    const body = await page.locator('article').textContent()
    expect(body).toContain('read')
    expect(body).not.toContain('Lesezeit')
  })
})
