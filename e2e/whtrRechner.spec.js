import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/whtr-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/WHtR-Rechner/)
})

test('Taille 85 / Größe 175, Alter 35 → 0.486 low', async ({ page }) => {
  await page.getByTestId('waist-input').fill('85')
  await page.getByTestId('height-input').fill('175')
  await page.getByTestId('age-input').fill('35')

  const result = page.getByTestId('whtr-result')
  await expect(result).toBeVisible()
  expect(parseFloat(await result.textContent())).toBeCloseTo(0.486, 2)

  await expect(page.getByTestId('whtr-zone')).toHaveText(/Niedriges Risiko/)
})

test('Taille 92 / Größe 175, Alter 35 → moderate', async ({ page }) => {
  await page.getByTestId('waist-input').fill('92')
  await page.getByTestId('height-input').fill('175')
  await page.getByTestId('age-input').fill('35')

  await expect(page.getByTestId('whtr-zone')).toHaveText(/Erhöhtes Risiko/)
})

test('Taille 110 / Größe 170, Alter 35 → high risk', async ({ page }) => {
  await page.getByTestId('waist-input').fill('110')
  await page.getByTestId('height-input').fill('170')
  await page.getByTestId('age-input').fill('35')

  await expect(page.getByTestId('whtr-zone')).toHaveText(/Sehr hohes Risiko/)
})

test('age over 50 shifts thresholds (95cm waist / 175cm at age 60 still low)', async ({ page }) => {
  await page.getByTestId('waist-input').fill('95')
  await page.getByTestId('height-input').fill('175')
  await page.getByTestId('age-input').fill('60')

  await expect(page.getByTestId('whtr-zone')).toHaveText(/Niedriges Risiko/)
})

test('result hidden until both values entered', async ({ page }) => {
  await expect(page.getByTestId('whtr-result')).toHaveCount(0)
  await page.getByTestId('waist-input').fill('85')
  await expect(page.getByTestId('whtr-result')).toHaveCount(0)
})

test('back link navigates to home', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})

test('trailing-slash canonical URL resolves', async ({ page }) => {
  const response = await page.goto('/de/whtr-rechner/')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/WHtR-Rechner/)
})
