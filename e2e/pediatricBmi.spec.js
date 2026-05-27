import { test, expect } from '@playwright/test'

test.describe('Pediatric BMI Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/kinder-bmi-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Kinder-BMI/)
  })

  test('shows all required inputs', async ({ page }) => {
    await expect(page.getByTestId('age')).toBeVisible()
    await expect(page.getByTestId('weight')).toBeVisible()
    await expect(page.getByTestId('height')).toBeVisible()
    await expect(page.getByTestId('sex-male')).toBeVisible()
    await expect(page.getByTestId('sex-female')).toBeVisible()
    await expect(page.getByTestId('unit-metric')).toBeVisible()
    await expect(page.getByTestId('unit-imperial')).toBeVisible()
  })

  test('no result shown without inputs', async ({ page }) => {
    await expect(page.getByTestId('result-card')).not.toBeVisible()
  })

  test('result appears after entering valid age, weight, height', async ({ page }) => {
    await page.fill('[data-testid="age"]', '10')
    await page.fill('[data-testid="weight"]', '32')
    await page.fill('[data-testid="height"]', '138')
    await expect(page.getByTestId('result-card')).toBeVisible()
    await expect(page.getByTestId('result-bmi')).toBeVisible()
    await expect(page.getByTestId('result-percentile')).toBeVisible()
    await expect(page.getByTestId('result-category')).toBeVisible()
  })

  test('shows healthy category for median boy at age 10', async ({ page }) => {
    await page.getByTestId('sex-male').check()
    await page.fill('[data-testid="age"]', '10')
    await page.fill('[data-testid="weight"]', '32')
    await page.fill('[data-testid="height"]', '141')
    const text = await page.getByTestId('result-category').textContent()
    expect(text).toMatch(/Normalgewicht/)
  })

  test('shows obesity category for very high BMI', async ({ page }) => {
    await page.getByTestId('sex-male').check()
    await page.fill('[data-testid="age"]', '10')
    await page.fill('[data-testid="weight"]', '60')
    await page.fill('[data-testid="height"]', '140')
    const text = await page.getByTestId('result-category').textContent()
    expect(text).toMatch(/Adipositas/)
  })

  test('switching to imperial unit converts inputs correctly', async ({ page }) => {
    await page.getByTestId('sex-male').check()
    await page.fill('[data-testid="age"]', '10')
    await page.fill('[data-testid="weight"]', '32')
    await page.fill('[data-testid="height"]', '141')
    const metricBmi = await page.getByTestId('result-bmi').textContent()

    await page.getByTestId('unit-imperial').click()
    await page.fill('[data-testid="weight"]', '70.5')
    await page.fill('[data-testid="height"]', '55.5')
    const imperialBmi = await page.getByTestId('result-bmi').textContent()

    expect(Math.abs(parseFloat(metricBmi) - parseFloat(imperialBmi))).toBeLessThan(0.3)
  })

  test('English route works', async ({ page }) => {
    await page.goto('en/pediatric-bmi')
    await expect(page).toHaveTitle(/Pediatric BMI/)
  })

  test('German blog route works', async ({ page }) => {
    await page.goto('de/blog/kinder-bmi-berechnen')
    await expect(page).toHaveTitle(/Kinder-BMI/)
  })

  test('English blog route works', async ({ page }) => {
    await page.goto('en/blog/pediatric-bmi-guide')
    await expect(page).toHaveTitle(/Pediatric BMI/)
  })

  test('switching sex changes the percentile result', async ({ page }) => {
    await page.getByTestId('sex-male').check()
    await page.fill('[data-testid="age"]', '10')
    await page.fill('[data-testid="weight"]', '32')
    await page.fill('[data-testid="height"]', '138')
    const maleText = await page.getByTestId('result-percentile').textContent()

    await page.getByTestId('sex-female').check()
    const femaleText = await page.getByTestId('result-percentile').textContent()

    expect(maleText).not.toBe(femaleText)
  })
})
