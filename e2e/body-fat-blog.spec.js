import { test, expect } from '@playwright/test'

test.describe('Blog: Körperfettanteil berechnen (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/koerperfett-berechnen')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Körperfettanteil berechnen/)
  })

  test('has correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Körperfettanteil berechnen')
  })

  test('has content sections', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /U\.S\. Navy/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Kategorien/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /BMI/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Fazit/i })).toBeVisible()
  })

  test('links to calculator', async ({ page }) => {
    const ctaLink = page.locator('a[href="/de/koerperfett-rechner"]')
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

test.describe('Blog: Calculate Body Fat (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/calculate-body-fat')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Body Fat Percentage/)
  })

  test('has correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Body Fat Percentage')
  })

  test('has content sections', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /U\.S\. Navy/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Categories/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /BMI/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Conclusion/i })).toBeVisible()
  })

  test('links to calculator', async ({ page }) => {
    const ctaLink = page.locator('a[href="/en/body-fat-calculator"]')
    await expect(ctaLink.first()).toBeVisible()
  })

  test('has related articles section', async ({ page }) => {
    const section = page.getByTestId('related-articles')
    await expect(section).toBeVisible()
  })

  test('back link navigates to blog home', async ({ page }) => {
    await page.getByText('← Blog').click()
    await expect(page).toHaveURL(/\/en\/blog$/)
  })
})
