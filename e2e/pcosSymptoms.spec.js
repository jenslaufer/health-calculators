import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/pcos-symptome-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/PCOS-Symptome/)
})

test('no symptoms selected → no result card visible', async ({ page }) => {
  await expect(page.getByTestId('result-score')).toHaveCount(0)
})

test('one ovulatory symptom → moderate category', async ({ page }) => {
  await page.getByTestId('irregularCycles-yes').click()
  await expect(page.getByTestId('result-score')).toBeVisible()
  await expect(page.getByTestId('result-category')).toHaveText('Moderat')
})

test('two Rotterdam criteria → high category and evaluation recommended', async ({ page }) => {
  await page.getByTestId('irregularCycles-yes').click()
  await page.getByTestId('hirsutism-yes').click()
  await expect(page.getByTestId('result-category')).toHaveText('Hoch')
  const status = page.getByTestId('evaluation-status')
  await expect(status).toBeVisible()
  await expect(status).toContainText(/Abklärung empfohlen/i)
})

test('symptom count updates as toggles change', async ({ page }) => {
  await page.getByTestId('irregularCycles-yes').click()
  await page.getByTestId('acne-yes').click()
  await page.getByTestId('weightGain-yes').click()
  await expect(page.getByTestId('symptom-count')).toContainText('3 / 9')
})

test('rotterdam criteria card lists both detected groups', async ({ page }) => {
  await page.getByTestId('missedPeriods-yes').click()
  await page.getByTestId('hairLoss-yes').click()
  const card = page.getByTestId('rotterdam-criteria')
  await expect(card).toContainText('Zyklusstörung')
  await expect(card).toContainText('Hyperandrogene')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
