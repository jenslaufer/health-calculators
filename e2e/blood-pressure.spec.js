import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('blutdruck-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Blutdruck-Rechner/)
})

test('normal blood pressure: 115/75', async ({ page }) => {
  await page.getByLabel(/Systolisch/i).fill('115')
  await page.getByLabel(/Diastolisch/i).fill('75')

  await expect(page.getByTestId('category')).toHaveText('Normal')
  await expect(page.getByTestId('category')).toHaveClass(/text-green/)
})

test('elevated blood pressure: 125/78', async ({ page }) => {
  await page.getByLabel(/Systolisch/i).fill('125')
  await page.getByLabel(/Diastolisch/i).fill('78')

  await expect(page.getByTestId('category')).toHaveText('Erhöht')
  await expect(page.getByTestId('category')).toHaveClass(/text-yellow/)
})

test('hypertension stage 1: 135/85', async ({ page }) => {
  await page.getByLabel(/Systolisch/i).fill('135')
  await page.getByLabel(/Diastolisch/i).fill('85')

  await expect(page.getByTestId('category')).toHaveText('Bluthochdruck Grad 1')
  await expect(page.getByTestId('category')).toHaveClass(/text-orange/)
})

test('hypertension stage 2: 145/95', async ({ page }) => {
  await page.getByLabel(/Systolisch/i).fill('145')
  await page.getByLabel(/Diastolisch/i).fill('95')

  await expect(page.getByTestId('category')).toHaveText('Bluthochdruck Grad 2')
  await expect(page.getByTestId('category')).toHaveClass(/text-red-500/)
})

test('hypertensive crisis: 185/125', async ({ page }) => {
  await page.getByLabel(/Systolisch/i).fill('185')
  await page.getByLabel(/Diastolisch/i).fill('125')

  await expect(page.getByTestId('category')).toHaveText('Hypertensive Krise')
  await expect(page.getByTestId('category')).toHaveClass(/text-red-700/)
})

test('shows health recommendations', async ({ page }) => {
  await page.getByLabel(/Systolisch/i).fill('145')
  await page.getByLabel(/Diastolisch/i).fill('95')

  await expect(page.getByTestId('recommendation')).toBeVisible()
})

test('diastolic determines higher category', async ({ page }) => {
  await page.getByLabel(/Systolisch/i).fill('115')
  await page.getByLabel(/Diastolisch/i).fill('85')

  await expect(page.getByTestId('category')).toHaveText('Bluthochdruck Grad 1')
})

test('shows systolic and diastolic values in result', async ({ page }) => {
  await page.getByLabel(/Systolisch/i).fill('120')
  await page.getByLabel(/Diastolisch/i).fill('80')

  await expect(page.getByTestId('systolic-value')).toHaveText('120')
  await expect(page.getByTestId('diastolic-value')).toHaveText('80')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/health-calculators\/$/)
})
