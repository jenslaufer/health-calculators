import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/promillerechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Promillerechner/)
})

test('male 80kg, 1 beer (500ml 5%), 0 hours → ~0.37‰', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('drink-volume-0').fill('500')
  await page.getByTestId('drink-alcohol-0').fill('5')
  await page.getByTestId('hours').fill('0')

  const result = page.getByTestId('bac-result')
  await expect(result).toBeVisible()
  const bac = parseFloat(await result.textContent())
  expect(bac).toBeGreaterThanOrEqual(0.3)
  expect(bac).toBeLessThanOrEqual(0.5)
})

test('female 60kg, 1 beer (500ml 5%), 0 hours → ~0.61‰', async ({ page }) => {
  await page.getByRole('button', { name: 'Frau' }).click()
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('drink-volume-0').fill('500')
  await page.getByTestId('drink-alcohol-0').fill('5')
  await page.getByTestId('hours').fill('0')

  const result = page.getByTestId('bac-result')
  await expect(result).toBeVisible()
  const bac = parseFloat(await result.textContent())
  expect(bac).toBeGreaterThanOrEqual(0.5)
  expect(bac).toBeLessThanOrEqual(0.7)
})

test('shows time until sober', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('drink-volume-0').fill('500')
  await page.getByTestId('drink-alcohol-0').fill('5')
  await page.getByTestId('hours').fill('0')

  const soberTime = page.getByTestId('time-until-sober')
  await expect(soberTime).toBeVisible()
})

test('shows legal limit comparison', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('drink-volume-0').fill('500')
  await page.getByTestId('drink-alcohol-0').fill('5')
  await page.getByTestId('hours').fill('0')

  const legalLimit = page.getByTestId('legal-limit')
  await expect(legalLimit).toBeVisible()
})

test('after enough hours BAC is 0', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('drink-volume-0').fill('500')
  await page.getByTestId('drink-alcohol-0').fill('5')
  await page.getByTestId('hours').fill('10')

  const result = page.getByTestId('bac-result')
  await expect(result).toBeVisible()
  const bac = parseFloat(await result.textContent())
  expect(bac).toBe(0)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
