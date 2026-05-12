import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/pearl-index-rechner/')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Pearl-Index Rechner/)
})

test('renders mandatory medical disclaimer', async ({ page }) => {
  const disclaimer = page.getByTestId('medical-disclaimer')
  await expect(disclaimer).toBeVisible()
  await expect(disclaimer).toContainText('ärztliche Verhütungsberatung')
})

test('shows H1 with calculator title', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1, name: 'Pearl-Index Rechner' })).toBeVisible()
})

test('default values 100 women / 12 months / 1 pregnancy → PI 1,00', async ({ page }) => {
  await page.getByTestId('women').fill('100')
  await page.getByTestId('months').fill('12')
  await page.getByTestId('pregnancies').fill('1')

  const result = page.getByTestId('pearl-index-result')
  await expect(result).toBeVisible()
  await expect(result).toHaveText('1,00')
})

test('3 pregnancies / 100 women / 12 months → PI 3,00', async ({ page }) => {
  await page.getByTestId('women').fill('100')
  await page.getByTestId('months').fill('12')
  await page.getByTestId('pregnancies').fill('3')

  const result = page.getByTestId('pearl-index-result')
  await expect(result).toHaveText('3,00')

  const category = page.getByTestId('pearl-index-category')
  await expect(category).toHaveText('Sicher')
})

test('0 pregnancies → PI 0,00 sehr sicher', async ({ page }) => {
  await page.getByTestId('women').fill('100')
  await page.getByTestId('months').fill('12')
  await page.getByTestId('pregnancies').fill('0')

  const result = page.getByTestId('pearl-index-result')
  await expect(result).toHaveText('0,00')

  await expect(page.getByTestId('pearl-index-category')).toHaveText('Sehr sicher')
})

test('reference table renders all methods', async ({ page }) => {
  const table = page.getByTestId('reference-table')
  await expect(table).toBeVisible()
  const rows = page.getByTestId('reference-row')
  await expect(rows).toHaveCount(17)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
