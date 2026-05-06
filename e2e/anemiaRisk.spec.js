import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/anaemie-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Anämie-Risiko-Rechner/)
})

test('woman with Hb 13.5 and no symptoms → no risk', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('hemoglobin').fill('13.5')
  await expect(page.getByTestId('result-status')).toHaveText('Kein Risiko')
})

test('woman with Hb 11.5 (mild) → mild', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('hemoglobin').fill('11.5')
  await expect(page.getByTestId('result-status')).toHaveText('Leicht')
})

test('woman with Hb 9.5 (moderate) → moderate', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('hemoglobin').fill('9.5')
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('woman with Hb 7 (severe) → severe', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('hemoglobin').fill('7')
  await expect(page.getByTestId('result-status')).toHaveText('Schwer')
})

test('symptom-only screening: 4 symptoms (fatigue+pallor+SOB) → moderate', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('hemoglobin').fill('13')
  await page.getByTestId('checkbox-fatigue').check()
  await page.getByTestId('checkbox-pallor').check()
  await page.getByTestId('checkbox-shortnessOfBreath').check()
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('imperial unit toggle (g/L) works', async ({ page }) => {
  await page.getByRole('button', { name: 'g/L', exact: true }).click()
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('hemoglobin').fill('135') // 13.5 g/dL
  await expect(page.getByTestId('result-status')).toHaveText('Kein Risiko')
})

test('symptom score reflects checked symptoms', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('hemoglobin').fill('13')
  await page.getByTestId('checkbox-fatigue').check()
  await page.getByTestId('checkbox-shortnessOfBreath').check()
  await expect(page.getByTestId('symptom-score')).toContainText('3')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
