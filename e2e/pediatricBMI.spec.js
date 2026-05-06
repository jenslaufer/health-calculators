import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/kinder-bmi-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Kinder-BMI-Rechner/)
})

test('boy 8 yr, 130 cm, 28 kg → result visible', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age-years').fill('8')
  await page.getByTestId('age-months').fill('0')
  await page.getByTestId('height').fill('130')
  await page.getByTestId('weight').fill('28')

  const bmi = page.getByTestId('bmi-result')
  await expect(bmi).toBeVisible()
  const bmiValue = parseFloat(await bmi.textContent())
  expect(bmiValue).toBeGreaterThan(16)
  expect(bmiValue).toBeLessThan(17)

  await expect(page.getByTestId('percentile-result')).toBeVisible()
  await expect(page.getByTestId('category-result')).toBeVisible()
})

test('girl 10 yr, 140 cm, 50 kg → obesity', async ({ page }) => {
  await page.getByTestId('sex-female').click()
  await page.getByTestId('age-years').fill('10')
  await page.getByTestId('age-months').fill('0')
  await page.getByTestId('height').fill('140')
  await page.getByTestId('weight').fill('50')

  await expect(page.getByTestId('category-name')).toHaveText('Adipositas')
})

test('boy 5 yr, 110 cm, 14 kg → underweight', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age-years').fill('5')
  await page.getByTestId('age-months').fill('0')
  await page.getByTestId('height').fill('110')
  await page.getByTestId('weight').fill('14')

  await expect(page.getByTestId('category-name')).toHaveText('Untergewicht')
})

test('imperial unit toggle works', async ({ page }) => {
  await page.getByTestId('unit-imperial').click()
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age-years').fill('8')
  await page.getByTestId('age-months').fill('0')
  // 130 cm ≈ 51.2 in, 28 kg ≈ 61.7 lb
  await page.getByTestId('height').fill('51.2')
  await page.getByTestId('weight').fill('61.7')

  const bmi = page.getByTestId('bmi-result')
  await expect(bmi).toBeVisible()
  const bmiValue = parseFloat(await bmi.textContent())
  expect(bmiValue).toBeGreaterThan(15)
  expect(bmiValue).toBeLessThan(18)
})

test('no result before inputs are filled', async ({ page }) => {
  await expect(page.getByTestId('bmi-result')).toHaveCount(0)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
