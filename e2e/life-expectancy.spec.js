import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/lebenserwartung-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Lebenserwartung/)
})

test('male is selected by default', async ({ page }) => {
  const maleBtn = page.getByRole('button', { name: 'Mann', exact: true })
  await expect(maleBtn).toHaveClass(/bg-stone-900/)
})

test('Germany is pre-selected as country', async ({ page }) => {
  const countrySelect = page.getByTestId('country-select')
  await expect(countrySelect).toHaveValue('de')
})

test('result shows when age is entered', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  const result = page.getByTestId('le-result')
  await expect(result).toBeVisible()
})

test('35-year-old German male with defaults shows ~80 years', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByTestId('age-input').fill('35')

  const result = page.getByTestId('le-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const le = parseFloat(text)
  expect(le).toBeGreaterThanOrEqual(75)
  expect(le).toBeLessThanOrEqual(90)
})

test('national average is shown in results', async ({ page }) => {
  await page.getByTestId('age-input').fill('35')
  const avg = page.getByTestId('national-average')
  await expect(avg).toBeVisible()
  const text = await avg.textContent()
  expect(parseFloat(text)).toBeGreaterThan(0)
})

test('vs-national comparison is shown', async ({ page }) => {
  await page.getByTestId('age-input').fill('35')
  await expect(page.getByTestId('vs-national')).toBeVisible()
})

test('years remaining is shown', async ({ page }) => {
  await page.getByTestId('age-input').fill('35')
  const remaining = page.getByTestId('years-remaining')
  await expect(remaining).toBeVisible()
  const text = await remaining.textContent()
  expect(parseFloat(text)).toBeGreaterThan(0)
})

test('heavy smoker reduces life expectancy vs never smoker', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  await page.getByTestId('smoking-select').selectOption('never')
  const resultNever = page.getByTestId('le-result')
  await expect(resultNever).toBeVisible()
  const neverText = await resultNever.textContent()
  const neverLE = parseFloat(neverText)

  await page.getByTestId('smoking-select').selectOption('heavy')
  const resultHeavy = page.getByTestId('le-result')
  const heavyText = await resultHeavy.textContent()
  const heavyLE = parseFloat(heavyText)

  expect(neverLE).toBeGreaterThan(heavyLE)
})

test('active exercise increases life expectancy vs sedentary', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  await page.getByTestId('exercise-select').selectOption('active')
  const activeText = await page.getByTestId('le-result').textContent()
  const activeLE = parseFloat(activeText)

  await page.getByTestId('exercise-select').selectOption('none')
  const sedentaryText = await page.getByTestId('le-result').textContent()
  const sedentaryLE = parseFloat(sedentaryText)

  expect(activeLE).toBeGreaterThan(sedentaryLE)
})

test('factor breakdown shows impact rows', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  await page.getByTestId('smoking-select').selectOption('heavy')
  const breakdown = page.getByTestId('factor-breakdown')
  await expect(breakdown).toBeVisible()
})

test('changing country updates national average', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  const avgBefore = await page.getByTestId('national-average').textContent()

  await page.getByTestId('country-select').selectOption('jp')
  const avgAfter = await page.getByTestId('national-average').textContent()
  expect(avgBefore).not.toBe(avgAfter)
})

test('metric and imperial unit switching works', async ({ page }) => {
  await page.getByRole('button', { name: 'Imperial' }).click()
  const ftLabel = page.getByLabel('ft')
  await expect(ftLabel).toBeVisible()
})

test('BMI displayed when weight and height entered', async ({ page }) => {
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Gewicht/i).fill('75')
  await page.getByLabel(/Größe/i).fill('175')
  const bmiDisplay = page.getByTestId('bmi-display')
  await expect(bmiDisplay).toBeVisible()
  const bmi = parseFloat(await bmiDisplay.textContent())
  expect(bmi).toBeGreaterThanOrEqual(24)
  expect(bmi).toBeLessThanOrEqual(25)
})

test('result not shown without age input', async ({ page }) => {
  const result = page.getByTestId('le-result')
  await expect(result).not.toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})

test('English version loads correctly', async ({ page }) => {
  await page.goto('en/life-expectancy-calculator')
  await expect(page).toHaveTitle(/Life Expectancy/)
  await page.getByTestId('age-input').fill('40')
  await expect(page.getByTestId('le-result')).toBeVisible()
})
