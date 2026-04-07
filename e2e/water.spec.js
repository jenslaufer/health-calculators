import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/wasser-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Wasserbedarf-Rechner/)
})

test('70kg sedentary temperate shows ~2.3L', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Gewicht \(kg\)/i).fill('70')
  await page.getByLabel(/Aktivität/i).selectOption({ value: 'sedentary' })
  await page.getByLabel(/Klima/i).selectOption({ value: 'temperate' })

  const liters = await page.getByTestId('liters').textContent()
  expect(parseFloat(liters)).toBeCloseTo(2.3, 0)
  expect(Math.abs(parseFloat(liters) - 2.3)).toBeLessThanOrEqual(0.2)
})

test('70kg very active hot climate shows ~3.6L', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Gewicht \(kg\)/i).fill('70')
  await page.getByLabel(/Aktivität/i).selectOption({ value: 'very' })
  await page.getByLabel(/Klima/i).selectOption({ value: 'hot' })

  const liters = await page.getByTestId('liters').textContent()
  expect(Math.abs(parseFloat(liters) - 3.6)).toBeLessThanOrEqual(0.3)
})

test('glass count equals liters divided by 0.25 rounded', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Gewicht \(kg\)/i).fill('70')
  await page.getByLabel(/Aktivität/i).selectOption({ value: 'sedentary' })
  await page.getByLabel(/Klima/i).selectOption({ value: 'temperate' })

  const liters = parseFloat(await page.getByTestId('liters').textContent())
  const glasses = parseInt(await page.getByTestId('glasses').textContent(), 10)
  expect(glasses).toBe(Math.round(liters / 0.25))
})

test('switching to imperial shows oz in result', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Gewicht \(kg\)/i).fill('70')

  await page.getByRole('button', { name: 'Imperial' }).click()

  await expect(page.getByTestId('oz')).toBeVisible()
  const oz = parseFloat(await page.getByTestId('oz').textContent())
  expect(oz).toBeGreaterThan(0)
})

test('changing activity level updates result', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Gewicht \(kg\)/i).fill('70')
  await page.getByLabel(/Klima/i).selectOption({ value: 'temperate' })

  await page.getByLabel(/Aktivität/i).selectOption({ value: 'sedentary' })
  const sedentaryLiters = parseFloat(await page.getByTestId('liters').textContent())

  await page.getByLabel(/Aktivität/i).selectOption({ value: 'extreme' })
  const extremeLiters = parseFloat(await page.getByTestId('liters').textContent())

  expect(extremeLiters).toBeGreaterThan(sedentaryLiters)
})

test('changing climate updates result', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Gewicht \(kg\)/i).fill('70')
  await page.getByLabel(/Aktivität/i).selectOption({ value: 'sedentary' })

  await page.getByLabel(/Klima/i).selectOption({ value: 'temperate' })
  const temperateLiters = parseFloat(await page.getByTestId('liters').textContent())

  await page.getByLabel(/Klima/i).selectOption({ value: 'hot' })
  const hotLiters = parseFloat(await page.getByTestId('liters').textContent())

  expect(hotLiters).toBeGreaterThan(temperateLiters)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
