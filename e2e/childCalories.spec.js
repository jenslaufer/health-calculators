import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/kinder-kalorienbedarf-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Kinder-Kalorienbedarf-Rechner/)
})

test('5y boy 18 kg 110 cm low active shows ~1465 kcal', async ({ page }) => {
  await page.getByTestId('input-age').fill('5')
  await page.getByTestId('input-sex').selectOption('boy')
  await page.getByTestId('input-weight').fill('18')
  await page.getByTestId('input-height').fill('110')
  await page.getByTestId('input-activity').selectOption('low_active')

  await expect(page.getByTestId('result-kcal')).toContainText('1465')
})

test('12y girl 40 kg 150 cm very active shows ~2600 kcal', async ({ page }) => {
  await page.getByTestId('input-age').fill('12')
  await page.getByTestId('input-sex').selectOption('girl')
  await page.getByTestId('input-weight').fill('40')
  await page.getByTestId('input-height').fill('150')
  await page.getByTestId('input-activity').selectOption('very_active')

  await expect(page.getByTestId('result-kcal')).toContainText('2600')
})

test('imperial toggle calculates result', async ({ page }) => {
  await page.getByTestId('unit-imperial').click()
  await page.getByTestId('input-age').fill('10')
  await page.getByTestId('input-sex').selectOption('boy')
  await page.getByTestId('input-weight').fill('70')
  await page.getByTestId('input-height').fill('54')
  await page.getByTestId('input-activity').selectOption('active')

  await expect(page.getByTestId('result-kcal')).toBeVisible()
})

test('toddler age (2y) shows fixed IOM value without weight/height', async ({ page }) => {
  await page.getByTestId('input-age').fill('2')
  await page.getByTestId('input-sex').selectOption('boy')

  await expect(page.getByTestId('note-toddler')).toBeVisible()
  await expect(page.getByTestId('result-kcal')).toContainText('1046')
})

test('shows age warning for implausible age', async ({ page }) => {
  await page.getByTestId('input-age').fill('19')
  await expect(page.getByTestId('warning-age')).toBeVisible()
})

test('shows weight warning for implausible weight', async ({ page }) => {
  await page.getByTestId('input-age').fill('10')
  await page.getByTestId('input-weight').fill('200')
  await page.getByTestId('input-height').fill('140')
  await expect(page.getByTestId('warning-weight')).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
