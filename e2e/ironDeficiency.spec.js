import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/eisenmangel-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Eisenmangel-Rechner/)
})

test('healthy adult: ferritin 120 + TSAT 28 + no symptoms → no risk', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('ferritin').fill('120')
  await page.getByTestId('tsat').fill('28')
  await page.getByTestId('hemoglobin').fill('13.5')
  await expect(page.getByTestId('result-status')).toHaveText('Kein Risiko')
})

test('latent iron deficiency: ferritin 20 → moderate via ferritin', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('ferritin').fill('20')
  await page.getByTestId('tsat').fill('22')
  await page.getByTestId('hemoglobin').fill('13')
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('severe: ferritin 10 + low Hb → severe', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('ferritin').fill('10')
  await page.getByTestId('tsat').fill('12')
  await page.getByTestId('hemoglobin').fill('10')
  await expect(page.getByTestId('result-status')).toHaveText('Schwer')
})

test('low TSAT alone → mild', async ({ page }) => {
  await page.getByTestId('sex').selectOption('male')
  await page.getByTestId('ferritin').fill('120')
  await page.getByTestId('tsat').fill('18')
  await page.getByTestId('hemoglobin').fill('14')
  await expect(page.getByTestId('result-status')).toHaveText('Leicht')
})

test('symptom-only screening: 5 symptom points → moderate', async ({ page }) => {
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('ferritin').fill('120')
  await page.getByTestId('tsat').fill('25')
  await page.getByTestId('hemoglobin').fill('13')
  await page.getByTestId('checkbox-fatigue').check()
  await page.getByTestId('checkbox-restlessLegs').check()
  await page.getByTestId('checkbox-pica').check()
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
  await expect(page.getByTestId('symptom-score')).toContainText('5')
})

test('imperial unit toggle (g/L for Hb) works', async ({ page }) => {
  await page.getByRole('button', { name: 'µg/L · g/L', exact: true }).click()
  await page.getByTestId('sex').selectOption('female')
  await page.getByTestId('ferritin').fill('120')
  await page.getByTestId('tsat').fill('28')
  await page.getByTestId('hemoglobin').fill('135') // 13.5 g/dL
  await expect(page.getByTestId('result-status')).toHaveText('Kein Risiko')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
