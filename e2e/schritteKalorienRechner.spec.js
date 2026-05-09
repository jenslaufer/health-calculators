import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/schritte-kalorien-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Schritte-Kalorien Rechner/)
})

test('10000 steps at 70 kg → ~400 kcal', async ({ page }) => {
  await page.getByTestId('steps').fill('10000')
  await page.getByTestId('weight').fill('70')

  const result = page.getByTestId('calories-result')
  await expect(result).toBeVisible()
  const kcal = parseInt(await result.textContent(), 10)
  expect(kcal).toBeGreaterThanOrEqual(395)
  expect(kcal).toBeLessThanOrEqual(405)
})

test('10000 steps at 80 kg → ~457 kcal', async ({ page }) => {
  await page.getByTestId('steps').fill('10000')
  await page.getByTestId('weight').fill('80')

  const result = page.getByTestId('calories-result')
  const kcal = parseInt(await result.textContent(), 10)
  expect(kcal).toBeGreaterThanOrEqual(450)
  expect(kcal).toBeLessThanOrEqual(465)
})

test('shows distance for default 75 cm stride', async ({ page }) => {
  await page.getByTestId('steps').fill('10000')
  await page.getByTestId('weight').fill('70')

  const dist = page.getByTestId('distance-result')
  await expect(dist).toBeVisible()
  const text = await dist.textContent()
  expect(text).toMatch(/7[.,]50/)
})

test('shows activity level "aktiv" for 10000 steps', async ({ page }) => {
  await page.getByTestId('steps').fill('10000')
  await page.getByTestId('weight').fill('70')

  const activity = page.getByTestId('activity-result')
  await expect(activity).toHaveText('aktiv')
})

test('shows "moderat" for 8000 steps', async ({ page }) => {
  await page.getByTestId('steps').fill('8000')
  await page.getByTestId('weight').fill('70')

  const activity = page.getByTestId('activity-result')
  await expect(activity).toHaveText('moderat')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
