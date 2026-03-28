import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/blog/taille-hueft-verhaeltnis-berechnen')
})

test('blog article loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Taille-Hüft-Verhältnis/)
})

test('article has back link to blog', async ({ page }) => {
  const backLink = page.locator('a', { hasText: '← Blog' })
  await expect(backLink).toBeVisible()
})

test('article links to WHR calculator', async ({ page }) => {
  const calcLink = page.locator('a[href="/health-calculators/de/taille-hueft-verhaeltnis"]')
  await expect(calcLink.first()).toBeVisible()
})

test('article links to related calculators (BMI, Body Fat)', async ({ page }) => {
  const bmiLink = page.locator('a[href="/health-calculators/de/blog/bmi-berechnen"]')
  await expect(bmiLink.first()).toBeVisible()

  const bodyFatLink = page.locator('a[href="/health-calculators/de/blog/koerperfett-berechnen"]')
  await expect(bodyFatLink.first()).toBeVisible()
})

test('article has related articles section', async ({ page }) => {
  const section = page.getByTestId('related-articles')
  await expect(section).toBeVisible()
})

test('article contains WHO threshold information', async ({ page }) => {
  await expect(page.locator('text=> 0,90').first()).toBeVisible()
  await expect(page.locator('text=> 0,85').first()).toBeVisible()
})
