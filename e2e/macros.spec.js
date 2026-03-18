import { test, expect } from '@playwright/test'

async function fillForm(page, { age = 30, gender = 'male', height = 175, weight = 80, activity = 'moderate', goal = 'maintain' } = {}) {
  await page.fill('[data-testid="age"]', String(age))
  if (gender === 'female') await page.click('[data-testid="gender-female"]')
  else await page.click('[data-testid="gender-male"]')
  await page.fill('[data-testid="height"]', String(height))
  await page.fill('[data-testid="weight"]', String(weight))
  await page.click(`[data-testid="activity-${activity}"]`)
  await page.click(`[data-testid="goal-${goal}"]`)
}

test.describe('Macro Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/macros')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Macro Calculator/)
  })

  test('entering valid data shows macro results', async ({ page }) => {
    await fillForm(page)
    await expect(page.locator('[data-testid="target-calories"]')).toBeVisible()
    await expect(page.locator('[data-testid="protein-grams"]')).toBeVisible()
    await expect(page.locator('[data-testid="carbs-grams"]')).toBeVisible()
    await expect(page.locator('[data-testid="fat-grams"]')).toBeVisible()
  })

  test('lose weight goal shows higher protein percentage than maintain', async ({ page }) => {
    await fillForm(page, { goal: 'lose' })
    const loseProteinText = await page.locator('[data-testid="protein-pct"]').textContent()
    const loseProteinPct = parseInt(loseProteinText)

    await page.click('[data-testid="goal-maintain"]')
    const maintainProteinText = await page.locator('[data-testid="protein-pct"]').textContent()
    const maintainProteinPct = parseInt(maintainProteinText)

    expect(loseProteinPct).toBeGreaterThan(maintainProteinPct)
  })

  test('protein + carbs + fat percentages sum to 100%', async ({ page }) => {
    await fillForm(page)
    const proteinPct = parseInt(await page.locator('[data-testid="protein-pct"]').textContent())
    const carbsPct = parseInt(await page.locator('[data-testid="carbs-pct"]').textContent())
    const fatPct = parseInt(await page.locator('[data-testid="fat-pct"]').textContent())

    expect(proteinPct + carbsPct + fatPct).toBe(100)
  })

  test('grams x calories-per-gram approximately equals target calories', async ({ page }) => {
    await fillForm(page)
    const targetCals = parseFloat(await page.locator('[data-testid="target-calories"]').textContent())
    const proteinG = parseFloat(await page.locator('[data-testid="protein-grams"]').textContent())
    const carbsG = parseFloat(await page.locator('[data-testid="carbs-grams"]').textContent())
    const fatG = parseFloat(await page.locator('[data-testid="fat-grams"]').textContent())

    const calculatedCals = proteinG * 4 + carbsG * 4 + fatG * 9
    expect(Math.abs(calculatedCals - targetCals)).toBeLessThanOrEqual(10)
  })

  test('switching goals recalculates macros', async ({ page }) => {
    await fillForm(page, { goal: 'maintain' })
    const maintainCals = await page.locator('[data-testid="target-calories"]').textContent()

    await page.click('[data-testid="goal-lose"]')
    const loseCals = await page.locator('[data-testid="target-calories"]').textContent()

    expect(loseCals).not.toBe(maintainCals)
  })

  test('stacked bar is visible when results show', async ({ page }) => {
    await fillForm(page)
    await expect(page.locator('[data-testid="macro-bar"]')).toBeVisible()
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.click('a[href="/"]')
    await expect(page).toHaveURL(/\/$/)
  })
})
