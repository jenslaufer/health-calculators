import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/dehydrations-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Dehydrations-Risiko-Rechner/)
})

test('70 kg adult drinking 2450 ml, no symptoms → no risk', async ({ page }) => {
  await page.getByTestId('weight').fill('70')
  await page.getByTestId('intake').fill('2450')
  await expect(page.getByTestId('result-status')).toHaveText('Kein Risiko')
})

test('70 kg adult drinking 2400 ml + thirst → mild', async ({ page }) => {
  await page.getByTestId('weight').fill('70')
  await page.getByTestId('intake').fill('2400')
  await page.getByTestId('checkbox-thirst').check()
  await expect(page.getByTestId('result-status')).toHaveText('Leicht')
})

test('80 kg adult drinking 2700 ml → moderate (3.6 % deficit)', async ({ page }) => {
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('intake').fill('2700')
  await expect(page.getByTestId('result-status')).toHaveText('Moderat')
})

test('confusion symptom → severe', async ({ page }) => {
  await page.getByTestId('weight').fill('70')
  await page.getByTestId('intake').fill('2450')
  await page.getByTestId('checkbox-confusion').check()
  await expect(page.getByTestId('result-status')).toHaveText('Schwer')
})

test('shows recommended replacement amount', async ({ page }) => {
  await page.getByTestId('weight').fill('70')
  await page.getByTestId('intake').fill('1450')
  await expect(page.getByTestId('recommended-deficit')).toBeVisible()
  await expect(page.getByTestId('recommended-deficit')).toContainText('1000')
})

test('symptom score reflects checked symptoms', async ({ page }) => {
  await page.getByTestId('weight').fill('70')
  await page.getByTestId('intake').fill('2450')
  await page.getByTestId('checkbox-dizziness').check()
  await page.getByTestId('checkbox-rapidHeartbeat').check()
  await expect(page.getByTestId('symptom-score')).toContainText('4')
})

test('imperial unit toggle works', async ({ page }) => {
  await page.getByRole('button', { name: 'Imperial', exact: true }).click()
  await page.getByTestId('weight').fill('154') // ≈ 70 kg
  await page.getByTestId('intake').fill('83') // ≈ 2454 ml
  await expect(page.getByTestId('result-status')).toHaveText('Kein Risiko')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
