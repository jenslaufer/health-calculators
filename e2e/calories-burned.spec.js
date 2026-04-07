import { test, expect } from '@playwright/test'

test.describe('Calories Burned Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/kalorienverbrauch')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Kalorienverbrauch/)
  })

  test('selecting activity and entering weight and duration shows results', async ({ page }) => {
    await page.selectOption('[data-testid="activity-select"]', 'running_10kmh')
    await page.fill('[data-testid="weight"]', '80')
    await page.fill('[data-testid="duration"]', '30')
    await expect(page.locator('[data-testid="calories-result"]')).toBeVisible()
  })

  test('calculates correct calories for running 10 km/h, 80 kg, 30 min', async ({ page }) => {
    await page.selectOption('[data-testid="activity-select"]', 'running_10kmh')
    await page.fill('[data-testid="weight"]', '80')
    await page.fill('[data-testid="duration"]', '30')
    const text = await page.locator('[data-testid="calories-result"]').textContent()
    expect(parseInt(text)).toBe(392)
  })

  test('switching to lbs recalculates correctly', async ({ page }) => {
    await page.selectOption('[data-testid="activity-select"]', 'walking_moderate')
    await page.fill('[data-testid="weight"]', '80')
    await page.fill('[data-testid="duration"]', '60')
    const kgResult = parseInt(await page.locator('[data-testid="calories-result"]').textContent())

    await page.click('[data-testid="unit-lbs"]')
    await page.fill('[data-testid="weight"]', '176')
    const lbsResult = parseInt(await page.locator('[data-testid="calories-result"]').textContent())

    expect(Math.abs(kgResult - lbsResult)).toBeLessThan(5)
  })

  test('food equivalents are visible after calculation', async ({ page }) => {
    await page.selectOption('[data-testid="activity-select"]', 'running_10kmh')
    await page.fill('[data-testid="weight"]', '80')
    await page.fill('[data-testid="duration"]', '30')
    await expect(page.locator('[data-testid="food-equivalents"]')).toBeVisible()
  })

  test('weekly projection is visible', async ({ page }) => {
    await page.selectOption('[data-testid="activity-select"]', 'running_10kmh')
    await page.fill('[data-testid="weight"]', '80')
    await page.fill('[data-testid="duration"]', '30')
    await expect(page.locator('[data-testid="weekly-projection"]')).toBeVisible()
  })

  test('higher intensity activity burns more calories', async ({ page }) => {
    await page.selectOption('[data-testid="activity-select"]', 'walking_moderate')
    await page.fill('[data-testid="weight"]', '80')
    await page.fill('[data-testid="duration"]', '30')
    const walkingCals = parseInt(await page.locator('[data-testid="calories-result"]').textContent())

    await page.selectOption('[data-testid="activity-select"]', 'running_12kmh')
    const runningCals = parseInt(await page.locator('[data-testid="calories-result"]').textContent())

    expect(runningCals).toBeGreaterThan(walkingCals)
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.click('a[href="/de/"]')
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('English route works', async ({ page }) => {
    await page.goto('en/calories-burned')
    await expect(page).toHaveTitle(/Calories Burned/)
  })
})
