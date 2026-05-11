import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/kopfumfang-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Kopfumfang/)
})

test('boy at 0 months, 34.5cm → near 50th percentile', async ({ page }) => {
  await page.getByTestId('sex-male').check()
  await page.getByTestId('age-years').fill('0')
  await page.getByTestId('head-circ').fill('34.5')

  const result = page.getByTestId('hc-percentile')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const pct = parseFloat(text.replace('%', ''))
  expect(pct).toBeGreaterThan(40)
  expect(pct).toBeLessThan(60)
})

test('girl at 12 months, 44.48cm → normal category', async ({ page }) => {
  await page.getByTestId('sex-female').check()
  await page.getByTestId('age-years').fill('1')
  await page.getByTestId('age-months').selectOption('0')
  await page.getByTestId('head-circ').fill('44.48')

  const status = page.getByTestId('result-status')
  await expect(status).toBeVisible()
  await expect(status).toHaveText(/Normal/i)
})

test('boy at 6 months, 40cm → low category', async ({ page }) => {
  await page.getByTestId('sex-male').check()
  await page.getByTestId('age-years').fill('0')
  await page.getByTestId('age-months').selectOption('6')
  await page.getByTestId('head-circ').fill('40')

  const result = page.getByTestId('hc-percentile')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const pct = parseFloat(text.replace('%', ''))
  expect(pct).toBeLessThan(15)
})

test('inches unit toggle works', async ({ page }) => {
  await page.getByTestId('sex-male').check()
  await page.getByTestId('age-years').fill('1')
  await page.getByTestId('age-months').selectOption('0')
  await page.getByTestId('head-unit').selectOption('in')
  // 18 inches ≈ 45.72 cm — near 50th percentile for 12mo male (median 45.89)
  await page.getByTestId('head-circ').fill('18')

  const result = page.getByTestId('hc-percentile')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const pct = parseFloat(text.replace('%', ''))
  expect(pct).toBeGreaterThan(20)
  expect(pct).toBeLessThan(70)
})

test('age over 36 months shows out-of-range warning', async ({ page }) => {
  await page.getByTestId('sex-male').check()
  await page.getByTestId('age-years').fill('4')
  await page.getByTestId('head-circ').fill('50')

  await expect(page.getByTestId('out-of-range')).toBeVisible()
  await expect(page.getByTestId('hc-percentile')).toHaveCount(0)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
