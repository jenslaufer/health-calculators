import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/hepatitis-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Hepatitis-Risiko-Rechner/)
})

test('no exposures → no risk', async ({ page }) => {
  await expect(page.getByTestId('result-status')).toHaveText('Kein Risiko')
})

test('travel only → low', async ({ page }) => {
  await page.getByTestId('checkbox-travelEndemicArea').check()
  await expect(page.getByTestId('result-status')).toHaveText('Niedrig')
})

test('IDU only → moderate', async ({ page }) => {
  await page.getByTestId('checkbox-injectionDrugUse').check()
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('IDU + HIV+ + needlestick → high', async ({ page }) => {
  await page.getByTestId('checkbox-injectionDrugUse').check()
  await page.getByTestId('checkbox-hivPositive').check()
  await page.getByTestId('checkbox-needlestickExposure').check()
  await expect(page.getByTestId('result-status')).toHaveText('Hoch')
})

test('vaccination downgrades risk by one band', async ({ page }) => {
  await page.getByTestId('checkbox-injectionDrugUse').check()
  await page.getByTestId('checkbox-hivPositive').check()
  await page.getByTestId('checkbox-needlestickExposure').check()
  await expect(page.getByTestId('result-status')).toHaveText('Hoch')
  await page.getByTestId('checkbox-hbvVaccinated').check()
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('exposure score is shown', async ({ page }) => {
  await page.getByTestId('checkbox-injectionDrugUse').check()
  await expect(page.getByTestId('exposure-score')).toContainText('4')
})

test('screening callout appears for moderate or higher', async ({ page }) => {
  await page.getByTestId('checkbox-injectionDrugUse').check()
  await expect(page.getByTestId('screening')).toBeVisible()
})

test('back link to home page is rendered', async ({ page }) => {
  const back = page.getByRole('link', { name: '← Alle Rechner' })
  await expect(back).toBeVisible()
  await expect(back).toHaveAttribute('href', '/de/')
})
