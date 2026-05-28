import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/mittlerer-arterieller-druck-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/MAP-Rechner/)
})

test('normal MAP: 120/80 → ~93 mmHg, normal band', async ({ page }) => {
  await page.getByTestId('systolic-input').fill('120')
  await page.getByTestId('diastolic-input').fill('80')

  await expect(page.getByTestId('map-value')).toHaveText('93.3')
  await expect(page.getByTestId('category')).toHaveText('Normal')
  await expect(page.getByTestId('category')).toHaveClass(/text-emerald/)
})

test('low MAP: 80/50 → ~60 mmHg, low band', async ({ page }) => {
  await page.getByTestId('systolic-input').fill('80')
  await page.getByTestId('diastolic-input').fill('50')

  await expect(page.getByTestId('map-value')).toHaveText('60.0')
  await expect(page.getByTestId('category')).toHaveText('Niedrig')
  await expect(page.getByTestId('category')).toHaveClass(/text-amber/)
})

test('high MAP: 180/110 → ~133 mmHg, high band', async ({ page }) => {
  await page.getByTestId('systolic-input').fill('180')
  await page.getByTestId('diastolic-input').fill('110')

  await expect(page.getByTestId('map-value')).toHaveText('133.3')
  await expect(page.getByTestId('category')).toHaveText('Hoch')
  await expect(page.getByTestId('category')).toHaveClass(/text-red/)
})

test('shows older adults note in result card', async ({ page }) => {
  await page.getByTestId('systolic-input').fill('120')
  await page.getByTestId('diastolic-input').fill('80')

  await expect(page.getByTestId('older-adults-note')).toBeVisible()
})

test('no result without inputs', async ({ page }) => {
  await expect(page.getByTestId('result-card')).toHaveCount(0)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
