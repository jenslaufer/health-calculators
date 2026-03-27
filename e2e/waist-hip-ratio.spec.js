import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('waist-hip-ratio')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Waist-to-Hip Ratio Calculator — WHO Risk Assessment')
})

test('male selected by default', async ({ page }) => {
  const maleBtn = page.getByRole('button', { name: 'Male', exact: true })
  await expect(maleBtn).toHaveClass(/bg-stone-900/)
})

test('male waist 90cm, hip 100cm → WHR 0.90', async ({ page }) => {
  await page.getByRole('button', { name: 'Male', exact: true }).click()
  await page.getByLabel(/waist/i).fill('90')
  await page.getByLabel(/hip/i).fill('100')

  const result = page.getByTestId('whr-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const whr = parseFloat(text)
  expect(whr).toBeCloseTo(0.90, 1)
})

test('female waist 75cm, hip 100cm → WHR 0.75', async ({ page }) => {
  await page.getByRole('button', { name: 'Female' }).click()
  await page.getByLabel(/waist/i).fill('75')
  await page.getByLabel(/hip/i).fill('100')

  const result = page.getByTestId('whr-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const whr = parseFloat(text)
  expect(whr).toBeCloseTo(0.75, 1)
})

test('male WHR > 0.90 shows high risk', async ({ page }) => {
  await page.getByRole('button', { name: 'Male', exact: true }).click()
  await page.getByLabel(/waist/i).fill('100')
  await page.getByLabel(/hip/i).fill('100')

  const category = page.getByTestId('whr-category')
  await expect(category).toBeVisible()
  await expect(category).toHaveText('High Risk')
})

test('female WHR > 0.85 shows high risk', async ({ page }) => {
  await page.getByRole('button', { name: 'Female' }).click()
  await page.getByLabel(/waist/i).fill('90')
  await page.getByLabel(/hip/i).fill('100')

  const category = page.getByTestId('whr-category')
  await expect(category).toBeVisible()
  await expect(category).toHaveText('High Risk')
})

test('male WHR <= 0.90 shows low or moderate risk', async ({ page }) => {
  await page.getByRole('button', { name: 'Male', exact: true }).click()
  await page.getByLabel(/waist/i).fill('80')
  await page.getByLabel(/hip/i).fill('100')

  const category = page.getByTestId('whr-category')
  await expect(category).toBeVisible()
  const text = await category.textContent()
  expect(['Low Risk', 'Moderate Risk']).toContain(text)
})

test('female WHR <= 0.80 shows low risk', async ({ page }) => {
  await page.getByRole('button', { name: 'Female' }).click()
  await page.getByLabel(/waist/i).fill('75')
  await page.getByLabel(/hip/i).fill('100')

  const category = page.getByTestId('whr-category')
  await expect(category).toBeVisible()
  await expect(category).toHaveText('Low Risk')
})

test('risk category uses color coding', async ({ page }) => {
  await page.getByRole('button', { name: 'Male', exact: true }).click()
  await page.getByLabel(/waist/i).fill('100')
  await page.getByLabel(/hip/i).fill('100')

  const category = page.getByTestId('whr-category')
  await expect(category).toHaveClass(/text-red/)
})

test('back link navigates to home page', async ({ page }) => {
  await page.locator('a', { hasText: '← All Calculators' }).click()
  await expect(page).toHaveURL(/\/health-calculators\/$/)
})
