import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/prostatakrebs-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Prostatakrebs/)
})

test('low risk: PSA 1.0, age 50, no family history', async ({ page }) => {
  await page.getByTestId('psa').fill('1.0')
  await page.getByTestId('age').fill('50')
  await page.getByTestId('family-no').click()

  const score = page.getByTestId('result-score')
  await expect(score).toBeVisible()

  const category = page.getByTestId('result-category')
  await expect(category).toHaveText('Niedrig')
})

test('moderate risk: PSA 5.0, age 60, no family history', async ({ page }) => {
  await page.getByTestId('psa').fill('5.0')
  await page.getByTestId('age').fill('60')
  await page.getByTestId('family-no').click()

  const category = page.getByTestId('result-category')
  await expect(category).toHaveText('Moderat')
})

test('high risk: PSA 12, age 65', async ({ page }) => {
  await page.getByTestId('psa').fill('12')
  await page.getByTestId('age').fill('65')
  await page.getByTestId('family-no').click()

  const category = page.getByTestId('result-category')
  await expect(category).toHaveText('Hoch')

  const biopsy = page.getByTestId('biopsy-status')
  await expect(biopsy).toContainText('Biopsie empfohlen')
})

test('very high risk: PSA 25, age 70', async ({ page }) => {
  await page.getByTestId('psa').fill('25')
  await page.getByTestId('age').fill('70')
  await page.getByTestId('family-yes').click()

  const category = page.getByTestId('result-category')
  await expect(category).toHaveText('Sehr hoch')
})

test('family history shifts borderline result up one band', async ({ page }) => {
  await page.getByTestId('psa').fill('3.0')
  await page.getByTestId('age').fill('55')
  await page.getByTestId('family-no').click()
  await expect(page.getByTestId('result-category')).toHaveText('Niedrig')

  await page.getByTestId('family-yes').click()
  await expect(page.getByTestId('result-category')).toHaveText('Moderat')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
