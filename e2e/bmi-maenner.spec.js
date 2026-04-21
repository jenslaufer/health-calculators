import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/bmi-rechner-maenner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/BMI Rechner Männer/)
})

test('H1 contains BMI Rechner Männer', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'BMI Rechner Männer', level: 1 })).toBeVisible()
})

test('calculates BMI for 180cm, 80kg → ~24.7', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByTestId('height-input').fill('180')
  await page.getByTestId('weight-input').fill('80')

  const result = page.getByTestId('bmi-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const bmi = parseFloat(text)
  expect(bmi).toBeGreaterThanOrEqual(24)
  expect(bmi).toBeLessThanOrEqual(25.5)
})

test('category shows Normalgewicht for BMI ~24.7', async ({ page }) => {
  await page.getByTestId('height-input').fill('180')
  await page.getByTestId('weight-input').fill('80')

  await expect(page.getByTestId('bmi-category')).toHaveText('Normalgewicht')
})

test('category shows Übergewicht for BMI 25–29.9', async ({ page }) => {
  await page.getByTestId('height-input').fill('175')
  await page.getByTestId('weight-input').fill('85')

  await expect(page.getByTestId('bmi-category')).toHaveText('Übergewicht')
})

test('category shows Adipositas for BMI >= 30', async ({ page }) => {
  await page.getByTestId('height-input').fill('175')
  await page.getByTestId('weight-input').fill('100')

  await expect(page.getByTestId('bmi-category')).toHaveText('Adipositas')
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
  await page.getByTestId('height-input').fill('180')
  await page.getByTestId('weight-input').fill('80')
  await expect(page).toHaveScreenshot('bmi-maenner.png', { fullPage: true })
})
