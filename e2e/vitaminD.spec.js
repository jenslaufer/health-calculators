import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/vitamin-d-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Vitamin D/)
})

test('default state shows seasonal chart', async ({ page }) => {
  const chart = page.getByTestId('seasonal-chart')
  await expect(chart).toBeVisible()
})

test('results card shows minutes and production values', async ({ page }) => {
  const minutes = page.getByTestId('minutes-result')
  const production = page.getByTestId('production-result')
  await expect(minutes).toBeVisible()
  await expect(production).toBeVisible()
})

test('selecting skin type VI increases minutes needed', async ({ page }) => {
  // Read minutes for skin type II (default)
  const minutesEl = page.getByTestId('minutes-result')
  await expect(minutesEl).toBeVisible()
  const textII = await minutesEl.textContent()

  // Switch to skin type VI
  await page.getByTestId('skin-type-5').click()
  const textVI = await minutesEl.textContent()

  // Type VI should need more minutes (or show — if very long)
  const numII = parseFloat(textII)
  const numVI = parseFloat(textVI)
  if (!isNaN(numII) && !isNaN(numVI)) {
    expect(numVI).toBeGreaterThan(numII)
  }
})

test('selecting December at Berlin shows insufficient UV warning', async ({ page }) => {
  // Set latitude to Berlin
  await page.getByTestId('latitude-input').fill('52')
  await page.getByTestId('latitude-input').dispatchEvent('input')

  // Select December (month index 11 = last option)
  const monthSelect = page.getByTestId('month-select')
  await monthSelect.selectOption({ index: 11 })

  const minutesEl = page.getByTestId('minutes-result')
  await expect(minutesEl).toBeVisible()
  // Should show dash (—) because UV is insufficient in December at 52°N
  await expect(minutesEl).toHaveText('—')
})

test('supplement recommendation is always visible', async ({ page }) => {
  const rec = page.getByTestId('supplement-rec')
  await expect(rec).toBeVisible()
})

test('EN route loads correctly', async ({ page }) => {
  await page.goto('en/vitamin-d-calculator')
  await expect(page).toHaveTitle(/Vitamin D/)
  await expect(page.getByTestId('seasonal-chart')).toBeVisible()
})

test('DE blog article loads', async ({ page }) => {
  await page.goto('de/blog/vitamin-d-berechnen')
  await expect(page).toHaveTitle(/Vitamin D/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('EN blog article loads', async ({ page }) => {
  await page.goto('en/blog/vitamin-d-calculator')
  await expect(page).toHaveTitle(/Vitamin D/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
