import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/schritte-kalorien-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Schritte-Kalorien-Rechner/)
})

test('10000 steps × 80 kg → ~457 kcal & 7.5 km, active level', async ({ page }) => {
  await page.getByTestId('steps').fill('10000')
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('stride').fill('75')

  const kcal = page.getByTestId('kcal-result')
  const km = page.getByTestId('km-result')
  await expect(kcal).toBeVisible()
  await expect(km).toBeVisible()

  const kcalValue = parseFloat(await kcal.textContent())
  expect(kcalValue).toBeGreaterThanOrEqual(450)
  expect(kcalValue).toBeLessThanOrEqual(465)

  const kmValue = parseFloat(await km.textContent())
  expect(kmValue).toBeCloseTo(7.5, 1)

  await expect(page.getByTestId('result-status')).toHaveText(/Aktiv/)
})

test('4000 steps classified as sedentär', async ({ page }) => {
  await page.getByTestId('steps').fill('4000')
  await page.getByTestId('weight').fill('70')

  await expect(page.getByTestId('result-status')).toHaveText(/Sedentär/)
})

test('8000 steps classified as moderat aktiv', async ({ page }) => {
  await page.getByTestId('steps').fill('8000')
  await page.getByTestId('weight').fill('70')

  await expect(page.getByTestId('result-status')).toHaveText(/Moderat aktiv/)
})

test('falls back to 75 cm stride when stride is empty', async ({ page }) => {
  await page.getByTestId('steps').fill('10000')
  await page.getByTestId('weight').fill('70')

  const km = page.getByTestId('km-result')
  await expect(km).toBeVisible()
  const kmValue = parseFloat(await km.textContent())
  expect(kmValue).toBeCloseTo(7.5, 1)
})

test('hint shows when inputs are missing', async ({ page }) => {
  const hint = page.getByTestId('incomplete-hint')
  await expect(hint).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
