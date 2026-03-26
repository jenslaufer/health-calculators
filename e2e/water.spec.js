import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('water')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Water Intake Calculator — Daily Hydration Needs')
})

test('70kg sedentary temperate shows ~2.3L', async ({ page }) => {
  await page.getByRole('button', { name: 'Metric' }).click()
  await page.getByLabel(/Weight \(kg\)/i).fill('70')
  await page.getByLabel(/Activity/i).selectOption({ label: 'Sedentary' })
  await page.getByLabel(/Climate/i).selectOption({ label: 'Temperate' })

  const liters = await page.getByTestId('liters').textContent()
  expect(parseFloat(liters)).toBeCloseTo(2.3, 0)
  expect(Math.abs(parseFloat(liters) - 2.3)).toBeLessThanOrEqual(0.2)
})

test('70kg very active hot climate shows ~3.6L', async ({ page }) => {
  await page.getByRole('button', { name: 'Metric' }).click()
  await page.getByLabel(/Weight \(kg\)/i).fill('70')
  await page.getByLabel(/Activity/i).selectOption({ label: 'Very active' })
  await page.getByLabel(/Climate/i).selectOption({ label: 'Hot / Humid' })

  const liters = await page.getByTestId('liters').textContent()
  expect(Math.abs(parseFloat(liters) - 3.6)).toBeLessThanOrEqual(0.3)
})

test('glass count equals liters divided by 0.25 rounded', async ({ page }) => {
  await page.getByRole('button', { name: 'Metric' }).click()
  await page.getByLabel(/Weight \(kg\)/i).fill('70')
  await page.getByLabel(/Activity/i).selectOption({ label: 'Sedentary' })
  await page.getByLabel(/Climate/i).selectOption({ label: 'Temperate' })

  const liters = parseFloat(await page.getByTestId('liters').textContent())
  const glasses = parseInt(await page.getByTestId('glasses').textContent(), 10)
  expect(glasses).toBe(Math.round(liters / 0.25))
})

test('switching to imperial shows oz in result', async ({ page }) => {
  await page.getByRole('button', { name: 'Metric' }).click()
  await page.getByLabel(/Weight \(kg\)/i).fill('70')

  await page.getByRole('button', { name: 'Imperial' }).click()

  await expect(page.getByTestId('oz')).toBeVisible()
  const oz = parseFloat(await page.getByTestId('oz').textContent())
  expect(oz).toBeGreaterThan(0)
})

test('changing activity level updates result', async ({ page }) => {
  await page.getByRole('button', { name: 'Metric' }).click()
  await page.getByLabel(/Weight \(kg\)/i).fill('70')
  await page.getByLabel(/Climate/i).selectOption({ label: 'Temperate' })

  await page.getByLabel(/Activity/i).selectOption({ label: 'Sedentary' })
  const sedentaryLiters = parseFloat(await page.getByTestId('liters').textContent())

  await page.getByLabel(/Activity/i).selectOption({ label: 'Extremely active' })
  const extremeLiters = parseFloat(await page.getByTestId('liters').textContent())

  expect(extremeLiters).toBeGreaterThan(sedentaryLiters)
})

test('changing climate updates result', async ({ page }) => {
  await page.getByRole('button', { name: 'Metric' }).click()
  await page.getByLabel(/Weight \(kg\)/i).fill('70')
  await page.getByLabel(/Activity/i).selectOption({ label: 'Sedentary' })

  await page.getByLabel(/Climate/i).selectOption({ label: 'Temperate' })
  const temperateLiters = parseFloat(await page.getByTestId('liters').textContent())

  await page.getByLabel(/Climate/i).selectOption({ label: 'Hot / Humid' })
  const hotLiters = parseFloat(await page.getByTestId('liters').textContent())

  expect(hotLiters).toBeGreaterThan(temperateLiters)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← All Calculators' }).click()
  await expect(page).toHaveURL(/\/health-calculators\/$/)
})
