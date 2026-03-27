import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('blog/blutdruck-richtig-messen')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Blutdruck richtig messen/)
})

test('has correct heading', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Blutdruck richtig messen')
})

test('has content sections', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Was bedeuten die Blutdruckwerte?' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'So misst du deinen Blutdruck richtig' })).toBeVisible()
})

test('links to calculator', async ({ page }) => {
  const ctaLink = page.getByRole('link', { name: 'Jetzt kostenlos berechnen →' })
  await expect(ctaLink).toBeVisible()
  await expect(ctaLink).toHaveAttribute('href', /\/blutdruck-rechner/)
})

test('has related articles section', async ({ page }) => {
  const section = page.getByTestId('related-articles')
  await expect(section).toBeVisible()
})

test('back link navigates to blog', async ({ page }) => {
  await page.getByRole('link', { name: '← Blog' }).click()
  await expect(page).toHaveURL(/\/blog\/?$/)
})
