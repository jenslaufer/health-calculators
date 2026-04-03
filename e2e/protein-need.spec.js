import { test, expect } from '@playwright/test'

async function fillForm(page, { age = 30, gender = 'male', weight = 80, activity = 'moderate', goal = 'maintain' } = {}) {
  await page.fill('[data-testid="age"]', String(age))
  if (gender === 'female') await page.click('[data-testid="gender-female"]')
  else await page.click('[data-testid="gender-male"]')
  await page.fill('[data-testid="weight"]', String(weight))
  await page.click(`[data-testid="activity-${activity}"]`)
  await page.click(`[data-testid="goal-${goal}"]`)
}

test.describe('Protein Need Calculator (Eiweißbedarfsrechner)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/eiweissbedarf-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Eiweißbedarf/)
  })

  test('entering valid data shows results', async ({ page }) => {
    await fillForm(page)
    await expect(page.locator('[data-testid="daily-protein"]')).toBeVisible()
    await expect(page.locator('[data-testid="protein-per-kg"]')).toBeVisible()
    await expect(page.locator('[data-testid="meal-breakdown"]')).toBeVisible()
  })

  test('athlete activity shows higher protein than sedentary', async ({ page }) => {
    await fillForm(page, { activity: 'athlete' })
    const athleteProtein = parseFloat(await page.locator('[data-testid="daily-protein"]').textContent())

    await page.click('[data-testid="activity-sedentary"]')
    const sedentaryProtein = parseFloat(await page.locator('[data-testid="daily-protein"]').textContent())

    expect(athleteProtein).toBeGreaterThan(sedentaryProtein)
  })

  test('weight loss goal increases protein vs maintain', async ({ page }) => {
    await fillForm(page, { goal: 'lose' })
    const loseProtein = parseFloat(await page.locator('[data-testid="daily-protein"]').textContent())

    await page.click('[data-testid="goal-maintain"]')
    const maintainProtein = parseFloat(await page.locator('[data-testid="daily-protein"]').textContent())

    expect(loseProtein).toBeGreaterThan(maintainProtein)
  })

  test('age over 65 increases protein recommendation', async ({ page }) => {
    await fillForm(page, { age: 40 })
    const youngProtein = parseFloat(await page.locator('[data-testid="daily-protein"]').textContent())

    await page.fill('[data-testid="age"]', '70')
    const seniorProtein = parseFloat(await page.locator('[data-testid="daily-protein"]').textContent())

    expect(seniorProtein).toBeGreaterThan(youngProtein)
  })

  test('meal breakdown shows correct number of meals', async ({ page }) => {
    await fillForm(page)
    await page.click('[data-testid="meals-4"]')
    const mealItems = page.locator('[data-testid="meal-breakdown"] [data-testid="meal-item"]')
    await expect(mealItems).toHaveCount(4)
  })

  test('food examples section is visible', async ({ page }) => {
    await fillForm(page)
    await expect(page.locator('[data-testid="food-examples"]')).toBeVisible()
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.click('a[href="/de/"]')
    await expect(page).toHaveURL(/\/de\/?$/)
  })
})
