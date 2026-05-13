import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/brustkrebs-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Brustkrebs-Risiko-Rechner/)
})

test('low-risk 40-year-old shows ~baseline 5-year risk', async ({ page }) => {
  await page.getByTestId('age').fill('40')
  await page.getByTestId('menarche').selectOption('14+')
  await page.getByTestId('first-birth').selectOption('<20')
  await page.getByTestId('relatives').selectOption('0')
  await page.getByTestId('biopsies').selectOption('0')
  await page.getByTestId('ah-no').click()

  const result = page.getByTestId('five-year-risk')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const num = parseFloat(text.replace('%', '').trim())
  expect(num).toBeGreaterThan(0.5)
  expect(num).toBeLessThan(1.2)
})

test('high-risk profile flags elevated', async ({ page }) => {
  await page.getByTestId('age').fill('55')
  await page.getByTestId('menarche').selectOption('<12')
  await page.getByTestId('first-birth').selectOption('nulliparous')
  await page.getByTestId('relatives').selectOption('2')
  await page.getByTestId('biopsies').selectOption('2')
  await page.getByTestId('ah-yes').click()

  await expect(page.getByTestId('elevated-hint')).toBeVisible()
  await expect(page.getByTestId('risk-category')).toBeVisible()
})

test('shows relative risk and average for age', async ({ page }) => {
  await page.getByTestId('age').fill('50')
  await page.getByTestId('menarche').selectOption('12-13')
  await page.getByTestId('first-birth').selectOption('25-29')
  await page.getByTestId('relatives').selectOption('1')
  await page.getByTestId('biopsies').selectOption('0')
  await page.getByTestId('ah-no').click()

  await expect(page.getByTestId('relative-risk')).toBeVisible()
  await expect(page.getByTestId('average-risk')).toBeVisible()
})

test('no result shown without age', async ({ page }) => {
  await expect(page.getByTestId('five-year-risk')).toHaveCount(0)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
