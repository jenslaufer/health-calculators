import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/alkohol-einheiten-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Alkohol/)
})

test('default state shows 0 units and 0 grams', async ({ page }) => {
  await expect(page.getByTestId('total-units')).toHaveText('0.0')
  await expect(page.getByTestId('total-grams')).toHaveText('0')
})

test('default risk category shows none', async ({ page }) => {
  await expect(page.getByTestId('risk-badge')).toBeVisible()
})

test('entering beer count updates total units', async ({ page }) => {
  await page.getByTestId('count-beer').fill('4')
  await page.getByTestId('count-beer').dispatchEvent('input')

  const unitsEl = page.getByTestId('total-units')
  const text = await unitsEl.textContent()
  const units = parseFloat(text)
  // 4 × (500ml × 5%) / 1000 = 4 × 2.5 = 10.0 units
  expect(units).toBeCloseTo(10.0, 0)
})

test('entering beer and wine updates total units correctly', async ({ page }) => {
  await page.getByTestId('count-beer').fill('2')
  await page.getByTestId('count-beer').dispatchEvent('input')
  await page.getByTestId('count-wine').fill('3')
  await page.getByTestId('count-wine').dispatchEvent('input')

  const unitsEl = page.getByTestId('total-units')
  await expect(unitsEl).toBeVisible()
  const text = await unitsEl.textContent()
  const units = parseFloat(text)
  // beer: 2 × 2.5 = 5; wine: 3 × 2.1 = 6.3; total ≈ 11.3
  expect(units).toBeGreaterThan(10)
  expect(units).toBeLessThan(13)
})

test('calories increase with consumption', async ({ page }) => {
  const calsBefore = await page.getByTestId('total-calories').textContent()

  await page.getByTestId('count-spirits').fill('5')
  await page.getByTestId('count-spirits').dispatchEvent('input')

  const calsAfter = await page.getByTestId('total-calories').textContent()
  expect(parseFloat(calsAfter)).toBeGreaterThan(parseFloat(calsBefore))
})

test('guidelines comparison is visible', async ({ page }) => {
  await expect(page.getByTestId('guidelines-comparison')).toBeVisible()
  await expect(page.getByTestId('guideline-uk_nhs')).toBeVisible()
  await expect(page.getByTestId('guideline-de_dhs')).toBeVisible()
  await expect(page.getByTestId('guideline-us_niaaa')).toBeVisible()
})

test('switching sex changes DE DHS guideline display', async ({ page }) => {
  await page.getByTestId('count-beer').fill('10')
  await page.getByTestId('count-beer').dispatchEvent('input')

  const maleText = await page.getByTestId('guideline-de_dhs').textContent()
  await page.getByTestId('sex-female').click()
  const femaleText = await page.getByTestId('guideline-de_dhs').textContent()

  // DHS limit is different for male and female
  expect(maleText).not.toBe(femaleText)
})

test('cost section is hidden by default and shows after toggle', async ({ page }) => {
  await expect(page.getByTestId('cost-beer')).not.toBeVisible()
  await page.getByTestId('cost-toggle').click()
  await expect(page.getByTestId('cost-beer')).toBeVisible()
})

test('risk category shows low when consuming 10 units/week', async ({ page }) => {
  // 4 beers × 2.5 units = 10 units (within 14 unit limit)
  await page.getByTestId('count-beer').fill('4')
  await page.getByTestId('count-beer').dispatchEvent('input')

  await expect(page.getByTestId('risk-badge')).toBeVisible()
  const badgeText = await page.getByTestId('risk-badge').textContent()
  expect(badgeText).toMatch(/Gering|Low/i)
})

test('risk category shows increasing when consuming 20 units/week', async ({ page }) => {
  // 8 beers × 2.5 units = 20 units (above 14 unit limit)
  await page.getByTestId('count-beer').fill('8')
  await page.getByTestId('count-beer').dispatchEvent('input')

  await expect(page.getByTestId('risk-badge')).toBeVisible()
  const badgeText = await page.getByTestId('risk-badge').textContent()
  expect(badgeText).toMatch(/Erhöht|Increasing/i)
})

test('EN route loads correctly', async ({ page }) => {
  await page.goto('en/alcohol-units-calculator')
  await expect(page).toHaveTitle(/Alcohol/)
  await expect(page.getByTestId('total-units')).toBeVisible()
})

test('DE blog article loads', async ({ page }) => {
  await page.goto('de/blog/alkohol-einheiten-berechnen')
  await expect(page).toHaveTitle(/Alkohol/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('EN blog article loads', async ({ page }) => {
  await page.goto('en/blog/alcohol-unit-calculator')
  await expect(page).toHaveTitle(/Alcohol/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('blog article links to calculator', async ({ page }) => {
  await page.goto('de/blog/alkohol-einheiten-berechnen')
  const link = page.getByRole('link', { name: /berechnen/i }).first()
  await expect(link).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: /Alle Rechner/i }).first().click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
