import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/herzinsuffizienz-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Herzinsuffizienz/)
})

test('young healthy female → low risk', async ({ page }) => {
  await page.getByTestId('sex-female').click()
  await page.getByTestId('age').fill('30')
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('height').fill('170')

  await expect(page.getByTestId('risk-score')).toBeVisible()
  await expect(page.getByTestId('result-status')).toHaveText(/Niedrig/)
})

test('older male with multiple risk factors → very high', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age').fill('72')
  await page.getByTestId('weight').fill('95')
  await page.getByTestId('height').fill('175')
  await page.getByTestId('hypertension').check()
  await page.getByTestId('diabetes').check()
  await page.getByTestId('cad').check()
  await page.getByTestId('prior-mi').check()
  await page.getByTestId('smoker').check()

  await expect(page.getByTestId('risk-score')).toBeVisible()
  await expect(page.getByTestId('result-status')).toHaveText(/Sehr hoch/)
})

test('shows BMI display when weight and height entered', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age').fill('50')
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('height').fill('180')

  await expect(page.getByTestId('bmi-display')).toBeVisible()
})

test('toggling imperial unit accepts pounds', async ({ page }) => {
  await page.getByTestId('unit-imperial').click()
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age').fill('45')
  await page.getByTestId('weight').fill('176')
  await page.getByTestId('height').fill('69')

  await expect(page.getByTestId('risk-score')).toBeVisible()
  await expect(page.getByTestId('bmi-display')).toBeVisible()
})

test('shows ten-year risk percentage', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age').fill('60')
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('height').fill('175')
  await page.getByTestId('hypertension').check()

  await expect(page.getByTestId('ten-year-risk')).toBeVisible()
})

test('back link returns to home', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
