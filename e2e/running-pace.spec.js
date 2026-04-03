import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/lauftempo-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Lauftempo-Rechner/)
})

test('10K in 50:00 → pace 5:00 min/km', async ({ page }) => {
  await page.getByRole('button', { name: '10 km' }).click()
  await page.getByRole('button', { name: 'Zielzeit' }).click()
  await page.getByTestId('hours').fill('0')
  await page.getByTestId('minutes').fill('50')
  await page.getByTestId('seconds').fill('0')

  const paceKm = page.getByTestId('pace-per-km')
  await expect(paceKm).toBeVisible()
  await expect(paceKm).toHaveText('5:00')
})

test('10K in 50:00 → pace ~8:03 min/mi', async ({ page }) => {
  await page.getByRole('button', { name: '10 km' }).click()
  await page.getByTestId('minutes').fill('50')

  const paceMi = page.getByTestId('pace-per-mi')
  await expect(paceMi).toBeVisible()
  const text = await paceMi.textContent()
  expect(text).toMatch(/8:0[2-4]/)
})

test('5K in 25:00 → finish time 25:00', async ({ page }) => {
  await page.getByRole('button', { name: '5 km' }).click()
  await page.getByTestId('minutes').fill('25')

  const finishTime = page.getByTestId('finish-time')
  await expect(finishTime).toBeVisible()
  await expect(finishTime).toHaveText('25:00')
})

test('pace mode: 5:00 min/km for marathon → ~3:30:58', async ({ page }) => {
  await page.getByRole('button', { name: 'Marathon' }).click()
  await page.getByRole('button', { name: 'Pace' }).click()
  await page.getByTestId('pace-min').fill('5')
  await page.getByTestId('pace-sec').fill('0')

  const finishTime = page.getByTestId('finish-time')
  await expect(finishTime).toBeVisible()
  const text = await finishTime.textContent()
  expect(text).toMatch(/3:3[01]/)
})

test('speed is displayed correctly', async ({ page }) => {
  await page.getByRole('button', { name: '10 km' }).click()
  await page.getByTestId('minutes').fill('50')

  const speed = page.getByTestId('speed')
  await expect(speed).toBeVisible()
  await expect(speed).toHaveText('12.0')
})

test('negative split plan is shown', async ({ page }) => {
  await page.getByRole('button', { name: '10 km' }).click()
  await page.getByTestId('minutes').fill('50')

  const negativeSplit = page.getByTestId('negative-split')
  await expect(negativeSplit).toBeVisible()
})

test('splits table is shown with correct number of rows', async ({ page }) => {
  await page.getByRole('button', { name: '5 km' }).click()
  await page.getByTestId('minutes').fill('25')

  const splitsTable = page.getByTestId('splits-table')
  await expect(splitsTable).toBeVisible()
  const rows = splitsTable.locator('tbody tr')
  await expect(rows).toHaveCount(5)
})

test('switching to mile splits works', async ({ page }) => {
  await page.getByRole('button', { name: '10 km' }).click()
  await page.getByTestId('minutes').fill('50')

  const splitsTable = page.getByTestId('splits-table')
  await expect(splitsTable).toBeVisible()

  await splitsTable.getByRole('button', { name: 'mi' }).click()
  const rows = splitsTable.locator('tbody tr')
  const count = await rows.count()
  expect(count).toBeGreaterThanOrEqual(6)
  expect(count).toBeLessThanOrEqual(7)
})

test('custom distance works', async ({ page }) => {
  await page.getByRole('button', { name: 'Eigene' }).click()
  await page.getByTestId('custom-distance').fill('15')
  await page.getByTestId('minutes').fill('75')

  const paceKm = page.getByTestId('pace-per-km')
  await expect(paceKm).toBeVisible()
  await expect(paceKm).toHaveText('5:00')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: /Alle Rechner/ }).click()
  await expect(page).toHaveURL(/\/health-calculators\/de\/?$/)
})
