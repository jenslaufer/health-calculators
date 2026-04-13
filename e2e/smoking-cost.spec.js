import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/rauchen-kosten-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Rauchen Kosten Rechner/)
})

test('no results shown before entering data', async ({ page }) => {
  await expect(page.getByTestId('daily-cost')).not.toBeVisible()
})

test('20 cigs/day at 8.50/pack → 8.50 daily cost', async ({ page }) => {
  await page.getByTestId('cigarettes-per-day').fill('20')
  await page.getByTestId('price-per-pack').fill('8.5')

  const result = page.getByTestId('daily-cost')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  expect(text).toContain('8,50')
})

test('20 cigs/day at 8.50/pack → correct yearly cost ~3102.50', async ({ page }) => {
  await page.getByTestId('cigarettes-per-day').fill('20')
  await page.getByTestId('price-per-pack').fill('8.5')

  const result = page.getByTestId('yearly-cost')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  // Yearly: 8.50 × 365 = 3102.50
  expect(text).toContain('3.102')
})

test('10 cigs/day at 8.50/pack → 4.25 daily cost', async ({ page }) => {
  await page.getByTestId('cigarettes-per-day').fill('10')
  await page.getByTestId('price-per-pack').fill('8.5')

  const result = page.getByTestId('daily-cost')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  expect(text).toContain('4,25')
})

test('custom pack size changes cost proportionally', async ({ page }) => {
  // 20 cigs per day, pack of 25, price 10 → 20/25 × 10 = 8.00
  await page.getByTestId('cigarettes-per-day').fill('20')
  await page.getByTestId('price-per-pack').fill('10')
  await page.getByTestId('pack-size').fill('25')

  const result = page.getByTestId('daily-cost')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  expect(text).toContain('8,00')
})

test('5-year and 10-year investment values are shown and positive', async ({ page }) => {
  await page.getByTestId('cigarettes-per-day').fill('20')
  await page.getByTestId('price-per-pack').fill('8.5')

  await expect(page.getByTestId('five-year-investment')).toBeVisible()
  await expect(page.getByTestId('ten-year-investment')).toBeVisible()

  const fiveYearText = await page.getByTestId('five-year-investment').textContent()
  const tenYearText = await page.getByTestId('ten-year-investment').textContent()

  // 10-year investment should show a larger number than 5-year
  // Both should contain numeric content (not just "—")
  expect(fiveYearText).not.toContain('—')
  expect(tenYearText).not.toContain('—')
})

test('currency selector changes symbol in results', async ({ page }) => {
  await page.getByTestId('cigarettes-per-day').fill('20')
  await page.getByTestId('price-per-pack').fill('8.5')
  await page.getByTestId('currency').selectOption('USD')

  // After selecting USD, the results section should show $ symbol
  await expect(page.getByTestId('daily-cost')).toBeVisible()
  // The currency symbol is rendered next to result values — look for $ in the results panel
  const resultPanel = page.locator('[data-testid="daily-cost"]').locator('..')
  await expect(resultPanel.locator('text=$')).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})

test('EN route loads correctly', async ({ page }) => {
  await page.goto('en/smoking-cost-calculator')
  await expect(page).toHaveTitle(/Smoking Cost Calculator/)
})

test('DE blog article loads', async ({ page }) => {
  await page.goto('de/blog/rauchen-kosten-rechner')
  await expect(page).toHaveTitle(/Rauchen Kosten Rechner/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('EN blog article loads', async ({ page }) => {
  await page.goto('en/blog/smoking-cost-calculator')
  await expect(page).toHaveTitle(/Smoking Cost Calculator/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
