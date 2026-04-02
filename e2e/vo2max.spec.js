import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/vo2max-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/VO2 Max/)
})

test('Cooper Test: 2400m → VO2max ~42', async ({ page }) => {
  await page.getByRole('button', { name: 'Cooper-Test' }).click()
  await page.getByTestId('distance').fill('2400')

  const result = page.getByTestId('vo2max-result')
  await expect(result).toBeVisible()
  const vo2 = parseFloat(await result.textContent())
  expect(vo2).toBeGreaterThanOrEqual(40)
  expect(vo2).toBeLessThanOrEqual(45)
})

test('Cooper Test: 3000m → VO2max ~56', async ({ page }) => {
  await page.getByRole('button', { name: 'Cooper-Test' }).click()
  await page.getByTestId('distance').fill('3000')

  const result = page.getByTestId('vo2max-result')
  await expect(result).toBeVisible()
  const vo2 = parseFloat(await result.textContent())
  expect(vo2).toBeGreaterThanOrEqual(53)
  expect(vo2).toBeLessThanOrEqual(58)
})

test('fitness category is shown for Cooper Test', async ({ page }) => {
  await page.getByRole('button', { name: 'Cooper-Test' }).click()
  await page.getByTestId('distance').fill('2400')
  await page.getByTestId('age').fill('30')
  await page.getByRole('button', { name: 'Mann', exact: true }).click()

  const category = page.getByTestId('fitness-category')
  await expect(category).toBeVisible()
})

test('direct entry shows result', async ({ page }) => {
  await page.getByRole('button', { name: /Direkteingabe/i }).click()
  await page.getByTestId('vo2max-direct').fill('45')
  await page.getByTestId('age').fill('30')
  await page.getByRole('button', { name: 'Mann', exact: true }).click()

  const category = page.getByTestId('fitness-category')
  await expect(category).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/health-calculators\/de\/?$/)
})
