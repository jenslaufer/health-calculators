import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/baby-trinkmenge-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Baby-Trinkmenge-Rechner/)
})

test('5 kg and 2 months shows expected daily and per-feeding amount', async ({ page }) => {
  await page.getByTestId('input-age').fill('2')
  await page.getByTestId('input-weight').fill('5')

  await expect(page.getByTestId('result-daily-ml')).toContainText('750')
  await expect(page.getByTestId('result-per-feeding-ml')).toContainText('107')
  await expect(page.getByTestId('result-feedings')).toHaveText('7')
})

test('imperial toggle calculates and shows results', async ({ page }) => {
  await page.getByTestId('unit-imperial').click()
  await page.getByTestId('input-age').fill('2')
  await page.getByTestId('input-weight').fill('11')

  await expect(page.getByTestId('result-daily-ml')).toBeVisible()
  await expect(page.getByTestId('result-per-feeding-ml')).toBeVisible()
  await expect(page.getByTestId('result-feedings')).toHaveText('7')
})

test('shows age warning for implausible age', async ({ page }) => {
  await page.getByTestId('input-age').fill('25')
  await expect(page.getByTestId('warning-age')).toBeVisible()
})

test('shows weight warning for implausible weight', async ({ page }) => {
  await page.getByTestId('input-age').fill('2')
  await page.getByTestId('input-weight').fill('0.5')
  await expect(page.getByTestId('warning-weight')).toBeVisible()
})

test('shows capped note when daily amount reaches cap', async ({ page }) => {
  await page.getByTestId('input-age').fill('2')
  await page.getByTestId('input-weight').fill('10')

  await expect(page.getByTestId('result-daily-ml')).toContainText('960')
  await expect(page.getByTestId('note-capped')).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
