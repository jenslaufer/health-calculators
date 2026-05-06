import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/osteoporose-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Osteoporose-Risiko-Rechner/)
})

test('healthy 45-year-old man → low risk (score 0)', async ({ page }) => {
  await page.getByTestId('age').fill('45')
  await page.getByTestId('sex').selectOption('male')
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('height').fill('180')
  await expect(page.getByTestId('result-status')).toHaveText('Niedrig')
  await expect(page.getByTestId('score')).toContainText('0')
})

test('70-year-old woman with normal BMI → moderate', async ({ page }) => {
  await page.getByTestId('age').fill('70')
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('weight').fill('65')
  await page.getByTestId('height').fill('168')
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('high risk: elderly woman with previous fracture and low BMI', async ({ page }) => {
  await page.getByTestId('age').fill('80')
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('weight').fill('45')
  await page.getByTestId('height').fill('156')
  await page.getByTestId('checkbox-previousFracture').check()
  await expect(page.getByTestId('result-status')).toHaveText('Hoch')
})

test('imperial unit toggle converts weight and height', async ({ page }) => {
  await page.getByRole('button', { name: 'imperial', exact: true }).click()
  await page.getByTestId('age').fill('45')
  await page.getByTestId('sex').selectOption('male')
  await page.getByTestId('weight').fill('176') // ≈ 80 kg
  await page.getByTestId('height').fill('71')  // ≈ 180 cm
  await expect(page.getByTestId('result-status')).toHaveText('Niedrig')
})

test('checking risk factors increases score', async ({ page }) => {
  await page.getByTestId('age').fill('60')
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('weight').fill('65')
  await page.getByTestId('height').fill('168')
  // age 60 = 1, female = 1 → 2
  await expect(page.getByTestId('score')).toContainText('2')
  await page.getByTestId('checkbox-previousFracture').check()
  // +3 → 5
  await expect(page.getByTestId('score')).toContainText('5')
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('T-score osteoporosis adds 3 points', async ({ page }) => {
  await page.getByTestId('age').fill('60')
  await page.getByTestId('sex').selectOption('male')
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('height').fill('180')
  // baseline: 1
  await expect(page.getByTestId('score')).toContainText('1')
  await page.getByTestId('t-score').fill('-2.8')
  // +3 → 4
  await expect(page.getByTestId('score')).toContainText('4')
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
