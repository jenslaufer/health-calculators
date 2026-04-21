import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/bmi-rechner-frauen')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/BMI Rechner Frauen/)
})

test('H1 contains BMI Rechner Frauen', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'BMI Rechner Frauen', level: 1 })).toBeVisible()
})

test('calculates BMI for 165cm, 60kg → ~22.0', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByTestId('height-input').fill('165')
  await page.getByTestId('weight-input').fill('60')

  const result = page.getByTestId('bmi-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const bmi = parseFloat(text)
  expect(bmi).toBeGreaterThanOrEqual(21)
  expect(bmi).toBeLessThanOrEqual(23)
})

test('category shows Normalgewicht for BMI ~22', async ({ page }) => {
  await page.getByTestId('height-input').fill('165')
  await page.getByTestId('weight-input').fill('60')

  await expect(page.getByTestId('bmi-category')).toHaveText('Normalgewicht')
})

test('category shows Untergewicht for BMI < 18.5', async ({ page }) => {
  await page.getByTestId('height-input').fill('170')
  await page.getByTestId('weight-input').fill('50')

  await expect(page.getByTestId('bmi-category')).toHaveText('Untergewicht')
})

test('category shows Übergewicht for BMI 25–29.9', async ({ page }) => {
  await page.getByTestId('height-input').fill('165')
  await page.getByTestId('weight-input').fill('75')

  await expect(page.getByTestId('bmi-category')).toHaveText('Übergewicht')
})

test('DGE classification table is visible', async ({ page }) => {
  await expect(page.getByTestId('bmi-categories-table')).toBeVisible()
})

test('link to main BMI calculator is present', async ({ page }) => {
  await expect(page.getByTestId('link-bmi')).toBeVisible()
})

test('link to Taille-Hüft-Verhältnis is present', async ({ page }) => {
  await expect(page.getByTestId('link-whr')).toBeVisible()
})

test('link to Körperfett-Rechner is present', async ({ page }) => {
  await expect(page.getByTestId('link-bodyfat')).toBeVisible()
})

test('FAQ section is visible', async ({ page }) => {
  await expect(page.getByTestId('calculator-faq')).toBeVisible()
})

test('back link navigates to home', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})

test('screenshot', async ({ page }) => {
  await page.getByTestId('height-input').fill('165')
  await page.getByTestId('weight-input').fill('60')
  await expect(page).toHaveScreenshot('bmi-frauen.png', { fullPage: true })
})
