import { test, expect } from '@playwright/test'

test.describe('Child Growth Percentile Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/wachstumsperzentile-kind')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Wachstumsperzentile/)
  })

  test('page shows inputs for age, weight, height and sex', async ({ page }) => {
    await expect(page.locator('[data-testid="age-years"]')).toBeVisible()
    await expect(page.locator('[data-testid="age-months"]')).toBeVisible()
    await expect(page.locator('[data-testid="weight"]')).toBeVisible()
    await expect(page.locator('[data-testid="height"]')).toBeVisible()
    await expect(page.locator('[data-testid="sex-male"]')).toBeVisible()
    await expect(page.locator('[data-testid="sex-female"]')).toBeVisible()
  })

  test('results appear after entering valid age, weight and height', async ({ page }) => {
    await page.fill('[data-testid="age-years"]', '2')
    await page.fill('[data-testid="weight"]', '12')
    await page.fill('[data-testid="height"]', '87')
    await expect(page.locator('[data-testid="weight-percentile"]')).toBeVisible()
    await expect(page.locator('[data-testid="height-percentile"]')).toBeVisible()
  })

  test('no results shown without inputs', async ({ page }) => {
    await expect(page.locator('[data-testid="weight-percentile"]')).not.toBeVisible()
    await expect(page.locator('[data-testid="height-percentile"]')).not.toBeVisible()
  })

  test('median boy at 12 months shows ~50th weight percentile', async ({ page }) => {
    await page.locator('[data-testid="sex-male"]').check()
    await page.fill('[data-testid="age-years"]', '1')
    // 12 months = 1 year + 0 months (already default)
    await page.fill('[data-testid="weight"]', '9.6')
    await page.fill('[data-testid="height"]', '75.7')
    await expect(page.locator('[data-testid="weight-percentile"]')).toBeVisible()
    const text = await page.locator('[data-testid="weight-percentile"]').textContent()
    const value = parseFloat(text)
    expect(value).toBeGreaterThan(40)
    expect(value).toBeLessThan(65)
  })

  test('head circumference input appears for child under 3 years', async ({ page }) => {
    await page.fill('[data-testid="age-years"]', '1')
    await expect(page.locator('[data-testid="head-circ"]')).toBeVisible()
  })

  test('head circumference input hidden for child over 3 years', async ({ page }) => {
    await page.fill('[data-testid="age-years"]', '5')
    await expect(page.locator('[data-testid="head-circ"]')).not.toBeVisible()
  })

  test('head circumference percentile appears when filled (under 3 years)', async ({ page }) => {
    await page.fill('[data-testid="age-years"]', '1')
    await page.fill('[data-testid="weight"]', '9.6')
    await page.fill('[data-testid="height"]', '75.7')
    await page.fill('[data-testid="head-circ"]', '45.9')
    await expect(page.locator('[data-testid="hc-percentile"]')).toBeVisible()
  })

  test('BMI percentile appears for child 2 years or older', async ({ page }) => {
    await page.fill('[data-testid="age-years"]', '3')
    await page.fill('[data-testid="weight"]', '14')
    await page.fill('[data-testid="height"]', '96')
    await expect(page.locator('[data-testid="bmi-percentile"]')).toBeVisible()
  })

  test('switching to female shows different percentile', async ({ page }) => {
    await page.locator('[data-testid="sex-male"]').check()
    await page.fill('[data-testid="age-years"]', '2')
    await page.fill('[data-testid="weight"]', '11')
    await page.fill('[data-testid="height"]', '85')
    const maleText = await page.locator('[data-testid="weight-percentile"]').textContent()

    await page.locator('[data-testid="sex-female"]').check()
    const femaleText = await page.locator('[data-testid="weight-percentile"]').textContent()

    // Girls and boys have different medians so percentiles differ
    expect(maleText).not.toBe(femaleText)
  })

  test('lbs unit conversion works', async ({ page }) => {
    await page.fill('[data-testid="age-years"]', '2')
    await page.fill('[data-testid="height"]', '87')

    // Enter weight in kg
    await page.fill('[data-testid="weight"]', '12')
    const kgText = await page.locator('[data-testid="weight-percentile"]').textContent()

    // Switch to lbs and enter equivalent weight (12 kg ≈ 26.46 lbs)
    await page.selectOption('[data-testid="weight-unit"]', 'lbs')
    await page.fill('[data-testid="weight"]', '26.5')
    const lbsText = await page.locator('[data-testid="weight-percentile"]').textContent()

    // Percentiles should be very close
    const kgPct = parseFloat(kgText)
    const lbsPct = parseFloat(lbsText)
    expect(Math.abs(kgPct - lbsPct)).toBeLessThan(3)
  })

  test('English route works', async ({ page }) => {
    await page.goto('en/child-growth-percentile')
    await expect(page).toHaveTitle(/Child Growth/)
  })

  test('German blog route works', async ({ page }) => {
    await page.goto('de/blog/wachstumsperzentile-kinder')
    await expect(page).toHaveTitle(/Wachstumsperzentile/)
  })

  test('English blog route works', async ({ page }) => {
    await page.goto('en/blog/child-growth-percentile-chart')
    await expect(page).toHaveTitle(/Child Growth Percentile/)
  })

  test('back link navigates to home', async ({ page }) => {
    await page.click('text=←')
    await expect(page).toHaveURL(/\/de\/$|\/de$/)
  })
})
