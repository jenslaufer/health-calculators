import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/ffmi-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/FFMI-Rechner/)
})

test('male 80 kg, 180 cm, 15% body fat → FFMI ~20.99 (aboveAverage)', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('height').fill('180')
  await page.getByTestId('bodyFat').fill('15')

  const result = page.getByTestId('ffmi-result')
  await expect(result).toBeVisible()
  const ffmi = parseFloat(await result.textContent())
  expect(ffmi).toBeGreaterThan(20.8)
  expect(ffmi).toBeLessThan(21.2)

  await expect(page.getByTestId('result-status')).toHaveText('Überdurchschnittlich')
})

test('female 60 kg, 165 cm, 25% body fat → FFMI 16.5 (aboveAverage)', async ({ page }) => {
  await page.getByTestId('sex-female').click()
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('height').fill('165')
  await page.getByTestId('bodyFat').fill('25')

  const result = page.getByTestId('ffmi-result')
  await expect(result).toBeVisible()
  const ffmi = parseFloat(await result.textContent())
  expect(ffmi).toBeGreaterThan(16.3)
  expect(ffmi).toBeLessThan(16.7)
})

test('fat-free mass output appears', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('height').fill('180')
  await page.getByTestId('bodyFat').fill('15')

  await expect(page.getByTestId('ffm-result')).toBeVisible()
  await expect(page.getByTestId('ffm-result')).toContainText('68')
})

test('normalized FFMI output appears', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('height').fill('180')
  await page.getByTestId('bodyFat').fill('15')

  await expect(page.getByTestId('normalized-ffmi')).toBeVisible()
})

test('extreme FFMI > 28 male → physiologically unlikely', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('120')
  await page.getByTestId('height').fill('175')
  await page.getByTestId('bodyFat').fill('5')

  await expect(page.getByTestId('result-status')).toHaveText('Physiologisch unwahrscheinlich')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
