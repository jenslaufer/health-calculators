import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/koerperoberflaeche-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Körperoberfläche/)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})

test('metric mode — 170 cm, 70 kg → BSA ~1.82 m²', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByTestId('input-height-cm').fill('170')
  await page.getByTestId('input-weight-kg').fill('70')

  const result = page.getByTestId('bsa-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const bsa = parseFloat(text)
  expect(bsa).toBeGreaterThanOrEqual(1.75)
  expect(bsa).toBeLessThanOrEqual(1.90)
})

test('imperial mode — 5 ft 7 in, 154 lbs → BSA ~1.81 m²', async ({ page }) => {
  await page.getByRole('button', { name: 'Imperial' }).click()
  await page.getByTestId('input-height-ft').fill('5')
  await page.getByTestId('input-height-in').fill('7')
  await page.getByTestId('input-weight-lbs').fill('154')

  const result = page.getByTestId('bsa-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const bsa = parseFloat(text)
  expect(bsa).toBeGreaterThanOrEqual(1.75)
  expect(bsa).toBeLessThanOrEqual(1.90)
})

test('formula selector switches active formula', async ({ page }) => {
  await page.getByTestId('input-height-cm').fill('170')
  await page.getByTestId('input-weight-kg').fill('70')

  await page.getByTestId('btn-formula-mosteller').click()
  await expect(page.getByTestId('btn-formula-mosteller')).toHaveClass(/bg-stone-900/)
  await expect(page.getByTestId('btn-formula-dubois')).not.toHaveClass(/bg-stone-900/)
})

test('formula comparison table shows all four formulas', async ({ page }) => {
  await page.getByTestId('input-height-cm').fill('170')
  await page.getByTestId('input-weight-kg').fill('70')

  await expect(page.getByText('Du Bois (1916)')).toBeVisible()
  await expect(page.getByText('Mosteller (1987)')).toBeVisible()
  await expect(page.getByText('Haycock (1978)')).toBeVisible()
  await expect(page.getByText('Boyd (1935)')).toBeVisible()
})

test('no result shown without inputs', async ({ page }) => {
  await expect(page.getByTestId('bsa-result')).not.toBeVisible()
})
