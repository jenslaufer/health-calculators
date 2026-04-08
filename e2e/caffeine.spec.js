import { test, expect } from '@playwright/test'

async function addDrink(page, { type = 'coffee', quantity = 1, time = '08:00', index = 0 } = {}) {
  if (index > 0) {
    await page.click('[data-testid="add-drink"]')
  }
  await page.selectOption(`[data-testid="drink-type-${index}"]`, type)
  await page.fill(`[data-testid="drink-quantity-${index}"]`, String(quantity))
  await page.fill(`[data-testid="drink-time-${index}"]`, time)
}

test.describe('Caffeine Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/koffein-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Koffein/)
  })

  test('h1 contains Koffein', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Koffein')
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.click('a[href="/de/"]')
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('drink entry is visible on load', async ({ page }) => {
    await expect(page.locator('[data-testid="drink-type-0"]')).toBeVisible()
    await expect(page.locator('[data-testid="drink-quantity-0"]')).toBeVisible()
    await expect(page.locator('[data-testid="drink-time-0"]')).toBeVisible()
  })

  test('entering a drink shows results', async ({ page }) => {
    await addDrink(page, { type: 'coffee', quantity: 1, time: '08:00' })
    await expect(page.locator('[data-testid="total-caffeine"]')).toBeVisible()
    await expect(page.locator('[data-testid="daily-intake"]')).toBeVisible()
    await expect(page.locator('[data-testid="sleep-time"]')).toBeVisible()
  })

  test('total caffeine shows correct value for one coffee consumed now', async ({ page }) => {
    // Set time to current time so caffeine is ~full
    const now = new Date()
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    await addDrink(page, { type: 'coffee', quantity: 1, time })
    const value = parseFloat(await page.locator('[data-testid="total-caffeine"]').textContent())
    expect(value).toBeGreaterThan(80) // close to 95mg
    expect(value).toBeLessThanOrEqual(95)
  })

  test('daily intake shows 95mg for one coffee', async ({ page }) => {
    await addDrink(page, { type: 'coffee', quantity: 1, time: '08:00' })
    const value = parseFloat(await page.locator('[data-testid="daily-intake"]').textContent())
    expect(value).toBe(95)
  })

  test('two coffees show 190mg daily intake', async ({ page }) => {
    await addDrink(page, { type: 'coffee', quantity: 2, time: '08:00' })
    const value = parseFloat(await page.locator('[data-testid="daily-intake"]').textContent())
    expect(value).toBe(190)
  })

  test('add second drink button works', async ({ page }) => {
    await page.click('[data-testid="add-drink"]')
    await expect(page.locator('[data-testid="drink-type-1"]')).toBeVisible()
  })

  test('removing a drink works', async ({ page }) => {
    await page.click('[data-testid="add-drink"]')
    await expect(page.locator('[data-testid="drink-type-1"]')).toBeVisible()
    await page.click('[data-testid="remove-drink-1"]')
    await expect(page.locator('[data-testid="drink-type-1"]')).not.toBeVisible()
  })

  test('daily limit bar is shown when results visible', async ({ page }) => {
    await addDrink(page, { type: 'coffee', quantity: 1, time: '08:00' })
    await expect(page.locator('[data-testid="daily-limit-bar"]')).toBeVisible()
  })

  test('FDA limit warning appears when over 400mg', async ({ page }) => {
    await addDrink(page, { type: 'coffee', quantity: 5, time: '08:00' })
    await expect(page.locator('[data-testid="limit-warning"]')).toBeVisible()
  })

  test('sleep time shows a time string', async ({ page }) => {
    await addDrink(page, { type: 'coffee', quantity: 2, time: '08:00' })
    const text = await page.locator('[data-testid="sleep-time"]').textContent()
    expect(text).toMatch(/\d{1,2}:\d{2}/)
  })
})

test.describe('Caffeine Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/caffeine-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Caffeine/)
  })

  test('h1 contains Caffeine', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Caffeine')
  })

  test('back link navigates to English home', async ({ page }) => {
    await page.click('a[href="/en/"]')
    await expect(page).toHaveURL(/\/en\/?$/)
  })

  test('entering a drink shows results', async ({ page }) => {
    await addDrink(page, { type: 'coffee', quantity: 1, time: '08:00' })
    await expect(page.locator('[data-testid="total-caffeine"]')).toBeVisible()
    await expect(page.locator('[data-testid="daily-intake"]')).toBeVisible()
    await expect(page.locator('[data-testid="sleep-time"]')).toBeVisible()
  })

  test('daily intake shows 95mg for one coffee', async ({ page }) => {
    await addDrink(page, { type: 'coffee', quantity: 1, time: '08:00' })
    const value = parseFloat(await page.locator('[data-testid="daily-intake"]').textContent())
    expect(value).toBe(95)
  })
})
