import { test, expect } from '@playwright/test'

test.describe('Ovulation Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/eisprung-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Eisprung-Rechner/)
  })

  test('entering LMP date shows ovulation date result', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-03-01')
    await expect(page.getByTestId('ovulation-date')).toBeVisible()
  })

  test('ovulation date is cycle length - 14 days after LMP (28-day cycle)', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-03-01')
    const text = await page.getByTestId('ovulation-date').textContent()
    expect(text).toMatch(/15.*März.*2026|15.*Mar.*2026/)
  })

  test('fertile window is displayed', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-03-01')
    await expect(page.getByTestId('fertile-window')).toBeVisible()
  })

  test('cycle length adjustment works: 21-day cycle', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-03-01')
    await page.getByLabel(/Zykluslänge/i).fill('21')
    const text = await page.getByTestId('ovulation-date').textContent()
    expect(text).toMatch(/8.*März.*2026|8.*Mar.*2026/)
  })

  test('next 3 predicted cycles are shown', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-03-01')
    const predictions = page.getByTestId('next-cycle')
    await expect(predictions.first()).toBeVisible()
    expect(await predictions.count()).toBe(3)
  })

  test('cycle timeline is visible', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-03-01')
    await expect(page.getByTestId('cycle-timeline')).toBeVisible()
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/health-calculators\/de\/?$/)
  })
})
