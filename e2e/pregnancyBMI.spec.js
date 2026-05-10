import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/bmi-schwangerschaft-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/BMI-Rechner Schwangerschaft/)
})

test('60 kg / 165 cm → BMI ~22 (Normalgewicht)', async ({ page }) => {
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('height').fill('165')

  const result = page.getByTestId('bmi-result')
  await expect(result).toBeVisible()
  const bmi = parseFloat(await result.textContent())
  expect(bmi).toBeGreaterThanOrEqual(21.5)
  expect(bmi).toBeLessThanOrEqual(22.5)

  await expect(page.getByTestId('bmi-category')).toHaveText('Normalgewicht')
})

test('50 kg / 170 cm → underweight', async ({ page }) => {
  await page.getByTestId('weight').fill('50')
  await page.getByTestId('height').fill('170')

  await expect(page.getByTestId('bmi-category')).toHaveText('Untergewicht')
})

test('80 kg / 170 cm → overweight', async ({ page }) => {
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('height').fill('170')

  await expect(page.getByTestId('bmi-category')).toHaveText('Übergewicht')
})

test('100 kg / 170 cm → obese, gain range 5–9 kg', async ({ page }) => {
  await page.getByTestId('weight').fill('100')
  await page.getByTestId('height').fill('170')

  await expect(page.getByTestId('bmi-category')).toHaveText('Adipositas')
  await expect(page.getByTestId('gain-range')).toContainText('5')
  await expect(page.getByTestId('gain-range')).toContainText('9')
})

test('twins toggle changes recommendation for normal BMI', async ({ page }) => {
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('height').fill('165')

  // singleton normal: 11.5–16
  await expect(page.getByTestId('gain-range')).toContainText('11.5')

  await page.getByTestId('btn-twins').click()

  // twins normal: 17–25
  await expect(page.getByTestId('gain-range')).toContainText('17')
  await expect(page.getByTestId('gain-range')).toContainText('25')
})

test('imperial unit toggle works', async ({ page }) => {
  await page.getByTestId('unit-imperial').click()
  await page.getByTestId('weight').fill('143')
  await page.getByTestId('height').fill('65')

  // 143 lbs = ~64.8 kg; 65 in = ~165.1 cm; BMI ≈ 23.8
  const result = page.getByTestId('bmi-result')
  await expect(result).toBeVisible()
  const bmi = parseFloat(await result.textContent())
  expect(bmi).toBeGreaterThanOrEqual(23)
  expect(bmi).toBeLessThanOrEqual(25)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
