import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/hepatitis-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Hepatitis-Risiko-Rechner/)
})

test('no factors → no risk', async ({ page }) => {
  await expect(page.getByTestId('result-status')).toHaveText('Kein Risiko')
})

test('single low-weight factor (tattoo) → low risk', async ({ page }) => {
  await page.getByTestId('checkbox-tattooPiercingUnsterile').check()
  await expect(page.getByTestId('result-status')).toHaveText('Niedrig')
})

test('IDU alone (4 pts) → moderate', async ({ page }) => {
  await page.getByTestId('checkbox-injectionDrugUse').check()
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('IDU + transfusion + HIV (9 pts) → high', async ({ page }) => {
  await page.getByTestId('checkbox-injectionDrugUse').check()
  await page.getByTestId('checkbox-transfusionBefore1992').check()
  await page.getByTestId('checkbox-hivPositive').check()
  await expect(page.getByTestId('result-status')).toHaveText('Hoch')
})

test('HBV vaccination subtracts 2 from score', async ({ page }) => {
  await page.getByTestId('checkbox-birthCohort1945to1965').check()
  await page.getByTestId('checkbox-hivPositive').check()
  // 2+2 = 4 → moderate without vaccine
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
  await page.getByTestId('checkbox-hbvVaccinated').check()
  // 4-2 = 2 → low with vaccine
  await expect(page.getByTestId('result-status')).toHaveText('Niedrig')
})

test('risk score reflects checked factors', async ({ page }) => {
  await page.getByTestId('checkbox-injectionDrugUse').check()
  await page.getByTestId('checkbox-tattooPiercingUnsterile').check()
  await expect(page.getByTestId('risk-score')).toContainText('5')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
