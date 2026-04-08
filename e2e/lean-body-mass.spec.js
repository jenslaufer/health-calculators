import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/magermasse-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Magermasse/)
})

test('male is selected by default', async ({ page }) => {
  const maleBtn = page.getByRole('button', { name: 'Mann', exact: true })
  await expect(maleBtn).toHaveClass(/bg-stone-900/)
})

test('metric and imperial unit switching works', async ({ page }) => {
  await page.getByRole('button', { name: 'Imperial' }).click()
  const weightLabel = page.getByLabel(/Gewicht/i)
  await expect(weightLabel).toBeVisible()
})

test('male 80kg, 180cm → LBM ~60 kg', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Gewicht/i).fill('80')
  await page.getByLabel(/Größe/i).fill('180')

  const result = page.getByTestId('lbm-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const lbm = parseFloat(text)
  expect(lbm).toBeGreaterThanOrEqual(55)
  expect(lbm).toBeLessThanOrEqual(66)
})

test('female 60kg, 165cm → LBM ~44 kg', async ({ page }) => {
  await page.getByRole('button', { name: 'Frau' }).click()
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Gewicht/i).fill('60')
  await page.getByLabel(/Größe/i).fill('165')

  const result = page.getByTestId('lbm-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const lbm = parseFloat(text)
  expect(lbm).toBeGreaterThanOrEqual(40)
  expect(lbm).toBeLessThanOrEqual(48)
})

test('formula comparison table shows three results', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByLabel(/Gewicht/i).fill('80')
  await page.getByLabel(/Größe/i).fill('180')

  await expect(page.getByTestId('boer-result')).toBeVisible()
  await expect(page.getByTestId('james-result')).toBeVisible()
  await expect(page.getByTestId('hume-result')).toBeVisible()
})

test('fat mass and lean percentage are shown', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByLabel(/Gewicht/i).fill('80')
  await page.getByLabel(/Größe/i).fill('180')

  await expect(page.getByTestId('fat-mass')).toBeVisible()
  await expect(page.getByTestId('lean-percent')).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
