import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/biologisches-alter-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Biologisches Alter/)
})

test('male is selected by default', async ({ page }) => {
  const maleBtn = page.getByRole('button', { name: 'Mann', exact: true })
  await expect(maleBtn).toHaveClass(/bg-stone-900/)
})

test('result shows when age is entered', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  const result = page.getByTestId('bio-age-result')
  await expect(result).toBeVisible()
})

test('result not shown without age input', async ({ page }) => {
  const result = page.getByTestId('bio-age-result')
  await expect(result).not.toBeVisible()
})

test('40-year-old with defaults shows a biological age', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  const result = page.getByTestId('bio-age-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const ba = parseInt(text, 10)
  expect(ba).toBeGreaterThan(5)
  expect(ba).toBeLessThan(80)
})

test('age difference is shown', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  await expect(page.getByTestId('age-difference')).toBeVisible()
})

test('category breakdown is shown when age entered', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  await expect(page.getByTestId('category-breakdown')).toBeVisible()
})

test('heavy smoking increases biological age', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  await page.getByTestId('smoking-select').selectOption('never')
  const neverText = await page.getByTestId('bio-age-result').textContent()
  const neverAge = parseInt(neverText, 10)

  await page.getByTestId('smoking-select').selectOption('heavy')
  const heavyText = await page.getByTestId('bio-age-result').textContent()
  const heavyAge = parseInt(heavyText, 10)

  expect(heavyAge).toBeGreaterThan(neverAge)
})

test('vigorous exercise decreases biological age vs sedentary', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')

  await page.getByTestId('exercise-freq-select').selectOption('5plus')
  await page.getByTestId('exercise-intensity-select').selectOption('vigorous')
  const activeText = await page.getByTestId('bio-age-result').textContent()
  const activeAge = parseInt(activeText, 10)

  await page.getByTestId('exercise-freq-select').selectOption('none')
  const sedentaryText = await page.getByTestId('bio-age-result').textContent()
  const sedentaryAge = parseInt(sedentaryText, 10)

  expect(sedentaryAge).toBeGreaterThan(activeAge)
})

test('intensity selector hidden when exercise frequency is none', async ({ page }) => {
  await page.getByTestId('exercise-freq-select').selectOption('none')
  await expect(page.getByTestId('exercise-intensity-select')).not.toBeVisible()
})

test('intensity selector visible when exercising', async ({ page }) => {
  await page.getByTestId('exercise-freq-select').selectOption('3_4')
  await expect(page.getByTestId('exercise-intensity-select')).toBeVisible()
})

test('BMI displayed when weight and height entered', async ({ page }) => {
  await page.getByLabel(/Gewicht.*kg/i).fill('75')
  await page.getByLabel(/Größe.*cm/i).fill('175')
  const bmiDisplay = page.getByTestId('bmi-display')
  await expect(bmiDisplay).toBeVisible()
  const bmi = parseFloat(await bmiDisplay.textContent())
  expect(bmi).toBeGreaterThanOrEqual(24)
  expect(bmi).toBeLessThanOrEqual(25)
})

test('metric and imperial unit switching works', async ({ page }) => {
  await page.getByRole('button', { name: 'Imperial' }).click()
  await expect(page.getByLabel('ft')).toBeVisible()
})

test('top improvements are shown when age entered', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  await page.getByTestId('smoking-select').selectOption('heavy')
  await expect(page.getByTestId('top-improvements')).toBeVisible()
})

test('chronic condition checkbox adds to biological age', async ({ page }) => {
  await page.getByTestId('age-input').fill('40')
  const beforeText = await page.getByTestId('bio-age-result').textContent()
  const beforeAge = parseInt(beforeText, 10)

  await page.getByTestId('condition-diabetes').check()
  const afterText = await page.getByTestId('bio-age-result').textContent()
  const afterAge = parseInt(afterText, 10)

  expect(afterAge).toBeGreaterThan(beforeAge)
})

test('blog banner is shown', async ({ page }) => {
  await expect(page.getByTestId('blog-banner')).toBeVisible()
})

test('blog banner links to blog article', async ({ page }) => {
  const blogLink = page.getByTestId('blog-banner').getByRole('link')
  await expect(blogLink).toBeVisible()
  const href = await blogLink.getAttribute('href')
  expect(href).toContain('biologisches-alter-berechnen')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})

test('English version loads correctly', async ({ page }) => {
  await page.goto('en/biological-age-calculator')
  await expect(page).toHaveTitle(/Biological Age/)
  await page.getByTestId('age-input').fill('40')
  await expect(page.getByTestId('bio-age-result')).toBeVisible()
})

test('DE blog article loads correctly', async ({ page }) => {
  await page.goto('de/blog/biologisches-alter-berechnen')
  await expect(page).toHaveTitle(/Biologisches Alter/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('EN blog article loads correctly', async ({ page }) => {
  await page.goto('en/blog/biological-age-calculator')
  await expect(page).toHaveTitle(/Biological Age Calculator/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('DE blog article links back to calculator', async ({ page }) => {
  await page.goto('de/blog/biologisches-alter-berechnen')
  const calcLink = page.getByRole('link', { name: /Biologisches Alter Rechner/ })
  await expect(calcLink).toBeVisible()
})

test('EN blog article links back to calculator', async ({ page }) => {
  await page.goto('en/blog/biological-age-calculator')
  const calcLink = page.getByRole('link', { name: /Biological Age Calculator/ })
  await expect(calcLink).toBeVisible()
})
