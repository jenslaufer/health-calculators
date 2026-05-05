import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/schilddruesen-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Schilddrüsen-Rechner/)
})

test('TSH 2.0, fT4 1.2, fT3 3.0 → euthyroid', async ({ page }) => {
  await page.getByTestId('tsh').fill('2.0')
  await page.getByTestId('t4').fill('1.2')
  await page.getByTestId('t3').fill('3.0')

  const status = page.getByTestId('result-status')
  await expect(status).toBeVisible()
  await expect(status).toHaveText(/Euthyreote/)
})

test('TSH 8.0 + low T4 → primary hypothyroidism', async ({ page }) => {
  await page.getByTestId('tsh').fill('8.0')
  await page.getByTestId('t4').fill('0.6')

  const status = page.getByTestId('result-status')
  await expect(status).toBeVisible()
  await expect(status).toHaveText(/Primäre Hypothyreose/)
})

test('TSH 0.1 + high T4 → primary hyperthyroidism', async ({ page }) => {
  await page.getByTestId('tsh').fill('0.1')
  await page.getByTestId('t4').fill('2.5')

  const status = page.getByTestId('result-status')
  await expect(status).toBeVisible()
  await expect(status).toHaveText(/Primäre Hyperthyreose/)
})

test('high TSH + normal T4 → subclinical hypothyroidism', async ({ page }) => {
  await page.getByTestId('tsh').fill('6.0')
  await page.getByTestId('t4').fill('1.2')

  const status = page.getByTestId('result-status')
  await expect(status).toHaveText(/Subklinische Hypothyreose/)
})

test('T4 unit toggle to pmol/L still produces result', async ({ page }) => {
  await page.getByTestId('tsh').fill('2.0')
  await page.getByTestId('t4-unit-pmol').click()
  await page.getByTestId('t4').fill('15.4')

  const status = page.getByTestId('result-status')
  await expect(status).toBeVisible()
})

test('reset clears all inputs', async ({ page }) => {
  await page.getByTestId('tsh').fill('2.0')
  await page.getByTestId('t4').fill('1.2')

  await page.getByRole('button', { name: /Zurücksetzen/ }).click()

  await expect(page.getByTestId('tsh')).toHaveValue('')
  await expect(page.getByTestId('t4')).toHaveValue('')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
