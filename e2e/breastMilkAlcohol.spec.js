import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/alkohol-stillen-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Alkohol.*Stillen/)
})

test('60kg, 1 wine (150ml 12%), 0 hours → ~0.44‰', async ({ page }) => {
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('drink-volume-0').fill('150')
  await page.getByTestId('drink-alcohol-0').fill('12')
  await page.getByTestId('hours').fill('0')

  const result = page.getByTestId('milk-bac-result')
  await expect(result).toBeVisible()
  const bac = parseFloat((await result.textContent()).replace(',', '.'))
  expect(bac).toBeGreaterThanOrEqual(0.35)
  expect(bac).toBeLessThanOrEqual(0.5)
})

test('shows time until safe', async ({ page }) => {
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('drink-volume-0').fill('150')
  await page.getByTestId('drink-alcohol-0').fill('12')
  await page.getByTestId('hours').fill('0')

  const safe = page.getByTestId('time-until-safe')
  await expect(safe).toBeVisible()
})

test('after enough hours milk is alcohol-free', async ({ page }) => {
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('drink-volume-0').fill('150')
  await page.getByTestId('drink-alcohol-0').fill('12')
  await page.getByTestId('hours').fill('10')

  const result = page.getByTestId('milk-bac-result')
  await expect(result).toBeVisible()
  const bac = parseFloat((await result.textContent()).replace(',', '.'))
  expect(bac).toBe(0)
})

test('milk status shows alcohol-free after enough elapsed time', async ({ page }) => {
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('drink-volume-0').fill('150')
  await page.getByTestId('drink-alcohol-0').fill('12')
  await page.getByTestId('hours').fill('10')

  const status = page.getByTestId('milk-status')
  await expect(status).toBeVisible()
  await expect(status).toHaveText(/alkoholfrei/i)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
