import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/testosteron-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Testosteron/)
})

test('normal values: total 18, SHBG 30, albumin 43 → normal', async ({ page }) => {
  await page.getByTestId('total-t').fill('18')
  await page.getByTestId('shbg').fill('30')
  await page.getByTestId('albumin').fill('43')

  await expect(page.getByTestId('result-total')).toBeVisible()
  await expect(page.getByTestId('result-total-category')).toHaveText('Normal')
  await expect(page.getByTestId('result-free-category')).toHaveText('Normal')
  await expect(page.getByTestId('hypogonadism-status')).toContainText('Normalbereich')
})

test('low total testosterone: total 6 → low + hypogonadism flag', async ({ page }) => {
  await page.getByTestId('total-t').fill('6')
  await page.getByTestId('shbg').fill('30')
  await page.getByTestId('albumin').fill('43')

  await expect(page.getByTestId('result-total-category')).toHaveText('Niedrig')
  await expect(page.getByTestId('hypogonadism-status')).toContainText('Hypogonadismus')
})

test('high SHBG lowers free testosterone', async ({ page }) => {
  await page.getByTestId('total-t').fill('18')
  await page.getByTestId('shbg').fill('80')
  await page.getByTestId('albumin').fill('43')

  const free = page.getByTestId('result-free')
  await expect(free).toBeVisible()
  const value = parseInt(await free.textContent(), 10)
  expect(value).toBeLessThan(300)
})

test('ng/dL unit conversion produces same result as nmol/L', async ({ page }) => {
  await page.getByTestId('total-t').fill('18')
  await page.getByTestId('shbg').fill('30')
  await page.getByTestId('albumin').fill('43')
  const nmolFree = parseInt(await page.getByTestId('result-free').textContent(), 10)

  await page.getByTestId('unit-ngdl').click()
  await page.getByTestId('total-t').fill('519')
  const ngdlFree = parseInt(await page.getByTestId('result-free').textContent(), 10)

  expect(Math.abs(ngdlFree - nmolFree)).toBeLessThan(20)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
