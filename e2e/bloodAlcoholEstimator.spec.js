import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/blutalkohol-schaetzer')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Blutalkohol-Schätzer/)
})

test('male 80kg, 1 drink, 0 hours → ~0.026 %', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('drinks').fill('1')
  await page.getByTestId('hours').fill('0')

  const result = page.getByTestId('bac-result')
  await expect(result).toBeVisible()
  const bac = parseFloat(await result.textContent())
  expect(bac).toBeGreaterThanOrEqual(0.020)
  expect(bac).toBeLessThanOrEqual(0.035)
})

test('female 60kg, 3 drinks, 0 hours → ~0.127 %', async ({ page }) => {
  await page.getByTestId('sex-female').click()
  await page.getByTestId('weight').fill('60')
  await page.getByTestId('drinks').fill('3')
  await page.getByTestId('hours').fill('0')

  const result = page.getByTestId('bac-result')
  await expect(result).toBeVisible()
  const bac = parseFloat(await result.textContent())
  expect(bac).toBeGreaterThanOrEqual(0.115)
  expect(bac).toBeLessThanOrEqual(0.140)
})

test('imperial unit toggle converts weight correctly', async ({ page }) => {
  await page.getByTestId('unit-imperial').click()
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('176')
  await page.getByTestId('drinks').fill('4')
  await page.getByTestId('hours').fill('1')

  const result = page.getByTestId('bac-result')
  await expect(result).toBeVisible()
  const bac = parseFloat(await result.textContent())
  // 176 lb ≈ 79.8 kg → ~0.088 %
  expect(bac).toBeGreaterThanOrEqual(0.075)
  expect(bac).toBeLessThanOrEqual(0.100)
})

test('shows time until sober', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('drinks').fill('4')
  await page.getByTestId('hours').fill('0')

  const soberTime = page.getByTestId('time-until-sober')
  await expect(soberTime).toBeVisible()
})

test('shows legal limit comparison block', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('drinks').fill('4')
  await page.getByTestId('hours').fill('0')

  await expect(page.getByTestId('legal-limit')).toBeVisible()
})

test('shows promille alongside BAC', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('drinks').fill('4')
  await page.getByTestId('hours').fill('0')

  const promille = page.getByTestId('promille-result')
  await expect(promille).toBeVisible()
  const value = parseFloat(await promille.textContent())
  expect(value).toBeGreaterThan(0.5)
})

test('after enough hours BAC is 0', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('weight').fill('80')
  await page.getByTestId('drinks').fill('1')
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
