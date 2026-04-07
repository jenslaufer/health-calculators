import { test, expect } from '@playwright/test'

async function fillForm(page, { age = 30, gender = 'male', weight = 80, activity = 'moderate', goal = 'maintain', diet = 'omnivore' } = {}) {
  await page.fill('[data-testid="age"]', String(age))
  if (gender === 'female') await page.click('[data-testid="gender-female"]')
  else await page.click('[data-testid="gender-male"]')
  await page.fill('[data-testid="weight"]', String(weight))
  await page.click(`[data-testid="activity-${activity}"]`)
  await page.click(`[data-testid="goal-${goal}"]`)
  await page.click(`[data-testid="diet-${diet}"]`)
}

test.describe('Protein Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/protein-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Protein-Rechner/)
  })

  test('entering valid data shows protein results', async ({ page }) => {
    await fillForm(page)
    await expect(page.locator('[data-testid="protein-total"]')).toBeVisible()
    await expect(page.locator('[data-testid="protein-per-kg"]')).toBeVisible()
    await expect(page.locator('[data-testid="protein-per-meal"]')).toBeVisible()
  })

  test('build muscle goal shows higher protein than maintain', async ({ page }) => {
    await fillForm(page, { goal: 'muscle' })
    const muscleProtein = parseFloat(await page.locator('[data-testid="protein-total"]').textContent())

    await page.click('[data-testid="goal-maintain"]')
    const maintainProtein = parseFloat(await page.locator('[data-testid="protein-total"]').textContent())

    expect(muscleProtein).toBeGreaterThan(maintainProtein)
  })

  test('athlete activity shows higher protein than sedentary', async ({ page }) => {
    await fillForm(page, { activity: 'athlete' })
    const athleteProtein = parseFloat(await page.locator('[data-testid="protein-total"]').textContent())

    await page.click('[data-testid="activity-sedentary"]')
    const sedentaryProtein = parseFloat(await page.locator('[data-testid="protein-total"]').textContent())

    expect(athleteProtein).toBeGreaterThan(sedentaryProtein)
  })

  test('protein per meal changes with meal count', async ({ page }) => {
    await fillForm(page)
    const defaultPerMeal = parseFloat(await page.locator('[data-testid="protein-per-meal"]').textContent())

    await page.click('[data-testid="meals-6"]')
    const sixMealPerMeal = parseFloat(await page.locator('[data-testid="protein-per-meal"]').textContent())

    expect(sixMealPerMeal).toBeLessThan(defaultPerMeal)
  })

  test('food sources table is visible', async ({ page }) => {
    await fillForm(page)
    await expect(page.locator('[data-testid="food-sources"]')).toBeVisible()
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.click('a[href="/de/"]')
    await expect(page).toHaveURL(/\/de\/?$/)
  })
})
