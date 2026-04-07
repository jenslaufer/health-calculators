import { test, expect } from '@playwright/test'

test.describe('One Rep Max Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/one-rep-max-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/One Rep Max/)
  })

  test('entering weight and reps shows estimated 1RM', async ({ page }) => {
    await page.fill('[data-testid="weight-lifted"]', '100')
    await page.fill('[data-testid="reps"]', '5')
    await expect(page.locator('[data-testid="one-rep-max-result"]')).toBeVisible()
  })

  test('calculates correct 1RM with Epley for 100 kg x 5 reps', async ({ page }) => {
    await page.fill('[data-testid="weight-lifted"]', '100')
    await page.fill('[data-testid="reps"]', '5')
    const text = await page.locator('[data-testid="one-rep-max-result"]').textContent()
    expect(parseInt(text)).toBe(117)
  })

  test('switching formula changes result', async ({ page }) => {
    await page.fill('[data-testid="weight-lifted"]', '100')
    await page.fill('[data-testid="reps"]', '5')
    const epleyResult = parseInt(await page.locator('[data-testid="one-rep-max-result"]').textContent())

    await page.selectOption('[data-testid="formula-select"]', 'oconner')
    const oconnerResult = parseInt(await page.locator('[data-testid="one-rep-max-result"]').textContent())

    expect(epleyResult).not.toBe(oconnerResult)
  })

  test('switching to lbs recalculates correctly', async ({ page }) => {
    await page.fill('[data-testid="weight-lifted"]', '100')
    await page.fill('[data-testid="reps"]', '5')
    const kgResult = parseInt(await page.locator('[data-testid="one-rep-max-result"]').textContent())

    await page.click('[data-testid="unit-lbs"]')
    await page.fill('[data-testid="weight-lifted"]', '220')
    const lbsResult = parseInt(await page.locator('[data-testid="one-rep-max-result"]').textContent())

    // 220 lbs ≈ 100 kg, so lbs result should be close to kgResult converted
    expect(Math.abs(lbsResult - Math.round(kgResult / 0.453592))).toBeLessThan(5)
  })

  test('formula comparison is visible after calculation', async ({ page }) => {
    await page.fill('[data-testid="weight-lifted"]', '100')
    await page.fill('[data-testid="reps"]', '5')
    await expect(page.locator('[data-testid="formula-comparison"]')).toBeVisible()
  })

  test('percentage chart is visible after calculation', async ({ page }) => {
    await page.fill('[data-testid="weight-lifted"]', '100')
    await page.fill('[data-testid="reps"]', '5')
    await expect(page.locator('[data-testid="percentage-chart"]')).toBeVisible()
  })

  test('more reps gives higher 1RM estimate', async ({ page }) => {
    await page.fill('[data-testid="weight-lifted"]', '100')
    await page.fill('[data-testid="reps"]', '3')
    const lowRepsResult = parseInt(await page.locator('[data-testid="one-rep-max-result"]').textContent())

    await page.fill('[data-testid="reps"]', '10')
    const highRepsResult = parseInt(await page.locator('[data-testid="one-rep-max-result"]').textContent())

    expect(highRepsResult).toBeGreaterThan(lowRepsResult)
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.click('a[href="/de/"]')
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('English route works', async ({ page }) => {
    await page.goto('en/one-rep-max-calculator')
    await expect(page).toHaveTitle(/One Rep Max/)
  })
})
