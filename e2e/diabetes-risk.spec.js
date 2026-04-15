import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/diabetes-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Diabetes/)
})

test('metric unit is selected by default', async ({ page }) => {
  const metricBtn = page.getByRole('button', { name: 'Metrisch', exact: true })
  await expect(metricBtn).toHaveClass(/bg-stone-900/)
})

test('result not shown without complete input', async ({ page }) => {
  await expect(page.getByTestId('result-section')).not.toBeVisible()
})

async function fillForm(page, overrides = {}) {
  const opts = {
    ageGroup: 'lt45',
    weight: '70',
    height: '175',
    waist: '80',
    activity: 'yes',
    vegfruit: 'yes',
    bpMed: 'no',
    glucose: 'no',
    family: 'none',
    ...overrides,
  }

  await page.getByTestId('age-group-select').selectOption(opts.ageGroup)
  await page.getByTestId('weight-input').fill(opts.weight)
  await page.getByTestId('height-input').fill(opts.height)
  await page.getByTestId('waist-input').fill(opts.waist)
  await page.getByTestId(`activity-${opts.activity}`).click()
  await page.getByTestId(`vegfruit-${opts.vegfruit}`).click()
  await page.getByTestId(`bp-med-${opts.bpMed}`).click()
  await page.getByTestId(`glucose-${opts.glucose}`).click()
  await page.getByTestId('family-history-select').selectOption(opts.family)
}

test('BMI is displayed when weight and height are entered', async ({ page }) => {
  await page.getByTestId('weight-input').fill('75')
  await page.getByTestId('height-input').fill('175')
  const bmiDisplay = page.getByTestId('bmi-display')
  await expect(bmiDisplay).toBeVisible()
  const bmi = parseFloat(await bmiDisplay.textContent())
  expect(bmi).toBeGreaterThanOrEqual(24)
  expect(bmi).toBeLessThanOrEqual(25)
})

test('low-risk profile shows score 0 and low risk category', async ({ page }) => {
  await fillForm(page)
  await expect(page.getByTestId('result-section')).toBeVisible()
  const score = page.getByTestId('findrisc-score')
  await expect(score).toHaveText('0')
  await expect(page.getByTestId('risk-category')).toBeVisible()
})

test('probability is shown as percentage', async ({ page }) => {
  await fillForm(page)
  const prob = page.getByTestId('probability')
  await expect(prob).toBeVisible()
  const text = await prob.textContent()
  expect(text).toMatch(/\d+%/)
})

test('factor breakdown is visible after completing form', async ({ page }) => {
  await fillForm(page)
  await expect(page.getByTestId('factor-breakdown')).toBeVisible()
})

test('recommendations section is shown', async ({ page }) => {
  await fillForm(page)
  await expect(page.getByTestId('recommendations')).toBeVisible()
})

test('disclaimer is visible in results', async ({ page }) => {
  await fillForm(page)
  await expect(page.getByTestId('disclaimer')).toBeVisible()
})

test('high-risk profile scores higher than low-risk profile', async ({ page }) => {
  await fillForm(page)
  const lowScore = parseInt(await page.getByTestId('findrisc-score').textContent())

  // Re-fill with high-risk profile
  await page.getByTestId('age-group-select').selectOption('gt64')
  await page.getByTestId('weight-input').fill('100')
  await page.getByTestId('height-input').fill('170')
  await page.getByTestId('waist-input').fill('110')
  await page.getByTestId('activity-no').click()
  await page.getByTestId('vegfruit-no').click()
  await page.getByTestId('bp-med-yes').click()
  await page.getByTestId('glucose-yes').click()
  await page.getByTestId('family-history-select').selectOption('close')

  const highScore = parseInt(await page.getByTestId('findrisc-score').textContent())
  expect(highScore).toBeGreaterThan(lowScore)
})

test('adding blood pressure medication increases score by 2', async ({ page }) => {
  await fillForm(page, { bpMed: 'no' })
  const scoreBefore = parseInt(await page.getByTestId('findrisc-score').textContent())

  await page.getByTestId('bp-med-yes').click()
  const scoreAfter = parseInt(await page.getByTestId('findrisc-score').textContent())
  expect(scoreAfter - scoreBefore).toBe(2)
})

test('prior high glucose history increases score by 5', async ({ page }) => {
  await fillForm(page, { glucose: 'no' })
  const scoreBefore = parseInt(await page.getByTestId('findrisc-score').textContent())

  await page.getByTestId('glucose-yes').click()
  const scoreAfter = parseInt(await page.getByTestId('findrisc-score').textContent())
  expect(scoreAfter - scoreBefore).toBe(5)
})

test('imperial unit toggle shows inch/lbs inputs', async ({ page }) => {
  await page.getByRole('button', { name: 'Imperial' }).click()
  await expect(page.getByTestId('waist-in-input')).toBeVisible()
  await expect(page.getByTestId('weight-lbs-input')).toBeVisible()
})

test('imperial inputs produce a valid score', async ({ page }) => {
  await page.getByRole('button', { name: 'Imperial' }).click()
  await page.getByTestId('age-group-select').selectOption('lt45')
  await page.getByTestId('weight-lbs-input').fill('154')
  await page.getByTestId('height-ft-input').fill('5')
  await page.getByTestId('height-in-input').fill('9')
  await page.getByTestId('waist-in-input').fill('31')
  await page.getByTestId('activity-yes').click()
  await page.getByTestId('vegfruit-yes').click()
  await page.getByTestId('bp-med-no').click()
  await page.getByTestId('glucose-no').click()
  await page.getByTestId('family-history-select').selectOption('none')

  await expect(page.getByTestId('result-section')).toBeVisible()
  const score = parseInt(await page.getByTestId('findrisc-score').textContent())
  expect(score).toBeGreaterThanOrEqual(0)
  expect(score).toBeLessThanOrEqual(26)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})

test('English version loads correctly', async ({ page }) => {
  await page.goto('en/diabetes-risk-calculator')
  await expect(page).toHaveTitle(/Diabetes/)
  await page.getByTestId('age-group-select').selectOption('lt45')
  await page.getByTestId('weight-input').fill('70')
  await page.getByTestId('height-input').fill('175')
  await page.getByTestId('waist-input').fill('80')
  await page.getByTestId('activity-yes').click()
  await page.getByTestId('vegfruit-yes').click()
  await page.getByTestId('bp-med-no').click()
  await page.getByTestId('glucose-no').click()
  await page.getByTestId('family-history-select').selectOption('none')
  await expect(page.getByTestId('result-section')).toBeVisible()
})

test('DE blog article loads', async ({ page }) => {
  await page.goto('de/blog/diabetes-risiko-berechnen')
  await expect(page).toHaveTitle(/Diabetes/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('EN blog article loads', async ({ page }) => {
  await page.goto('en/blog/diabetes-risk-score')
  await expect(page).toHaveTitle(/Diabetes/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
