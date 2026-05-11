import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/fruchtbares-fenster-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Fruchtbares Fenster/)
})

test('shows ovulation date for 28-day cycle starting 2026-03-01', async ({ page }) => {
  await page.getByTestId('lmp').fill('2026-03-01')
  await page.getByTestId('cycle-length').fill('28')

  const ovulationDate = page.getByTestId('ovulation-date')
  await expect(ovulationDate).toBeVisible()
  await expect(ovulationDate).toContainText('März')
  await expect(ovulationDate).toContainText('15')
})

test('shows expanded 10-day window', async ({ page }) => {
  await page.getByTestId('lmp').fill('2026-03-01')
  await page.getByTestId('cycle-length').fill('28')

  const expanded = page.getByTestId('expanded-window')
  await expect(expanded).toBeVisible()
})

test('shows LH surge window', async ({ page }) => {
  await page.getByTestId('lmp').fill('2026-03-01')
  await page.getByTestId('cycle-length').fill('28')

  const lh = page.getByTestId('lh-surge')
  await expect(lh).toBeVisible()
})

test('shows peak fertility window', async ({ page }) => {
  await page.getByTestId('lmp').fill('2026-03-01')
  await page.getByTestId('cycle-length').fill('28')

  const peak = page.getByTestId('peak-window')
  await expect(peak).toBeVisible()
})

test('shows next period prediction', async ({ page }) => {
  await page.getByTestId('lmp').fill('2026-03-01')
  await page.getByTestId('cycle-length').fill('28')

  const next = page.getByTestId('next-period')
  await expect(next).toBeVisible()
})

test('shows daily forecast table with 10 rows', async ({ page }) => {
  await page.getByTestId('lmp').fill('2026-03-01')
  await page.getByTestId('cycle-length').fill('28')

  const rows = page.getByTestId('forecast-row')
  await expect(rows).toHaveCount(10)
})

test('longer cycle shifts ovulation later', async ({ page }) => {
  await page.getByTestId('lmp').fill('2026-03-01')
  await page.getByTestId('cycle-length').fill('32')

  const ovulationDate = page.getByTestId('ovulation-date')
  await expect(ovulationDate).toContainText('19')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
