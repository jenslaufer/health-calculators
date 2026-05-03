import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/herz-kreislauf-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Herz-Kreislauf-Risiko/)
})

test('low-risk profile (40, healthy) → low band', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age').fill('40')
  await page.getByTestId('total-chol').fill('180')
  await page.getByTestId('hdl').fill('60')
  await page.getByTestId('sbp').fill('110')

  const result = page.getByTestId('risk-result')
  await expect(result).toBeVisible()
  const risk = parseFloat(await result.textContent())
  expect(risk).toBeGreaterThan(0)
  expect(risk).toBeLessThan(5)

  await expect(page.getByTestId('result-status')).toHaveText('Niedrig')
})

test('high-risk profile (65 male, smoker, diabetic, hypertensive) → high band', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age').fill('65')
  await page.getByTestId('total-chol').fill('260')
  await page.getByTestId('hdl').fill('35')
  await page.getByTestId('sbp').fill('160')
  await page.getByTestId('treated').check()
  await page.getByTestId('smoker').check()
  await page.getByTestId('diabetic').check()

  const result = page.getByTestId('risk-result')
  await expect(result).toBeVisible()
  const risk = parseFloat(await result.textContent())
  expect(risk).toBeGreaterThan(20)

  await expect(page.getByTestId('result-status')).toHaveText('Hoch')
})

test('shows heart age', async ({ page }) => {
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age').fill('50')
  await page.getByTestId('total-chol').fill('220')
  await page.getByTestId('hdl').fill('45')
  await page.getByTestId('sbp').fill('140')

  await expect(page.getByTestId('heart-age')).toBeVisible()
})

test('shows advice block', async ({ page }) => {
  await page.getByTestId('sex-female').click()
  await page.getByTestId('age').fill('55')
  await page.getByTestId('total-chol').fill('210')
  await page.getByTestId('hdl').fill('55')
  await page.getByTestId('sbp').fill('125')

  await expect(page.getByTestId('advice')).toBeVisible()
})

test('mmol/L unit toggle works', async ({ page }) => {
  await page.getByTestId('unit-mmol').click()
  await page.getByTestId('sex-male').click()
  await page.getByTestId('age').fill('50')
  await page.getByTestId('total-chol').fill('5.2')
  await page.getByTestId('hdl').fill('1.3')
  await page.getByTestId('sbp').fill('120')

  const result = page.getByTestId('risk-result')
  await expect(result).toBeVisible()
  const risk = parseFloat(await result.textContent())
  expect(risk).toBeGreaterThan(0)
  expect(risk).toBeLessThan(15)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
