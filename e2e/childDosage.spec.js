import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/kinder-dosierung-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Kinder-Dosierungsrechner/)
})

test('paracetamol 20 kg × 15 mg/kg → 300 mg, 12.5 mL', async ({ page }) => {
  await page.getByTestId('drug-paracetamol').click()
  await page.getByTestId('input-weight').fill('20')
  await page.getByTestId('input-mg-per-kg').fill('15')
  await page.getByTestId('input-concentration').fill('24')

  await expect(page.getByTestId('result-dose-mg')).toHaveText('300 mg')
  await expect(page.getByTestId('result-dose-ml')).toHaveText('12.5 mL')
})

test('paracetamol 20 kg max daily → 1200 mg', async ({ page }) => {
  await page.getByTestId('drug-paracetamol').click()
  await page.getByTestId('input-weight').fill('20')
  await page.getByTestId('input-mg-per-kg').fill('15')

  await expect(page.getByTestId('result-daily-mg')).toHaveText('1200 mg')
})

test('ibuprofen 15 kg × 10 mg/kg → 150 mg', async ({ page }) => {
  await page.getByTestId('drug-ibuprofen').click()
  await page.getByTestId('input-weight').fill('15')
  await page.getByTestId('input-mg-per-kg').fill('10')

  await expect(page.getByTestId('result-dose-mg')).toHaveText('150 mg')
})

test('overdose warning shown when mg/kg exceeds max', async ({ page }) => {
  await page.getByTestId('drug-paracetamol').click()
  await page.getByTestId('input-weight').fill('20')
  await page.getByTestId('input-mg-per-kg').fill('25')

  const warning = page.getByTestId('result-warning')
  await expect(warning).toBeVisible()
  await expect(warning).toContainText('Überdosierung')
})

test('shows disclaimer', async ({ page }) => {
  await expect(page.getByTestId('disclaimer')).toBeVisible()
})

test('back link navigates home', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
