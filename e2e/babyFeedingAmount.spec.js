import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/baby-trinkmenge-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Baby Trinkmenge Rechner/)
})

test('shows H1 heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Baby Trinkmenge Rechner', exact: true })).toBeVisible()
})

test('term infant 3 months, 5kg metric → ~750 ml/day, 6 feedings', async ({ page }) => {
  await page.getByTestId('input-age').fill('3')
  await page.getByTestId('input-weight').fill('5')

  const card = page.getByTestId('result-card')
  await expect(card).toBeVisible()

  const daily = await page.getByTestId('result-daily-ml').textContent()
  expect(parseInt(daily.replace(/\D/g, ''), 10)).toBe(750)

  const perFeeding = await page.getByTestId('result-per-feeding-ml').textContent()
  expect(parseInt(perFeeding.replace(/\D/g, ''), 10)).toBe(125)
})

test('imperial unit toggle uses lbs', async ({ page }) => {
  await page.getByTestId('unit-imperial').click()
  await page.getByTestId('input-age').fill('3')
  await page.getByTestId('input-weight').fill('11')

  const card = page.getByTestId('result-card')
  await expect(card).toBeVisible()

  const daily = await page.getByTestId('result-daily-ml').textContent()
  // 11 lb ≈ 4.989 kg → ~748 ml/day
  const dailyMl = parseInt(daily.replace(/\D/g, ''), 10)
  expect(dailyMl).toBeGreaterThanOrEqual(700)
  expect(dailyMl).toBeLessThanOrEqual(770)
})

test('6-month-old uses lower ml/kg (~120)', async ({ page }) => {
  await page.getByTestId('input-age').fill('6')
  await page.getByTestId('input-weight').fill('8')

  const daily = await page.getByTestId('result-daily-ml').textContent()
  const dailyMl = parseInt(daily.replace(/\D/g, ''), 10)
  // 8 kg × 120 ml/kg = 960
  expect(dailyMl).toBe(960)
})

test('shows stage badge for newborn', async ({ page }) => {
  await page.getByTestId('input-age').fill('0')
  await page.getByTestId('input-weight').fill('3.5')

  const stage = page.getByTestId('result-stage')
  await expect(stage).toBeVisible()
  await expect(stage).toContainText(/Neugeborenes/)
})

test('no result shown without inputs', async ({ page }) => {
  await expect(page.getByTestId('result-card')).toHaveCount(0)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
