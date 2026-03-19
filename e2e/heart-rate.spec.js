import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/heart-rate')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Heart Rate Zone Calculator — Find Your Training Zones')
})

test('entering age 30 shows HRmax of 190', async ({ page }) => {
  await page.fill('input#age', '30')
  await expect(page.getByText('190', { exact: true })).toBeVisible()
})

test('five zones are displayed with BPM ranges', async ({ page }) => {
  await page.fill('input#age', '30')
  const zones = page.locator('[data-testid="zone-card"]')
  await expect(zones).toHaveCount(5)
  for (let i = 0; i < 5; i++) {
    await expect(zones.nth(i)).toContainText('bpm')
  }
})

test('Zone 1 for age 30 = 95-114 bpm (standard method)', async ({ page }) => {
  await page.fill('input#age', '30')
  await expect(page.locator('[data-testid="zone-card"]').first()).toContainText('95')
  await expect(page.locator('[data-testid="zone-card"]').first()).toContainText('114')
})

test('Zone 5 upper bound equals HRmax', async ({ page }) => {
  await page.fill('input#age', '30')
  const zone5 = page.locator('[data-testid="zone-card"]').last()
  await expect(zone5).toContainText('190')
})

test('entering resting HR enables Karvonen method', async ({ page }) => {
  const karvonen = page.getByRole('button', { name: 'Karvonen' })
  await expect(karvonen).toBeDisabled()
  await page.fill('input#age', '30')
  await page.fill('input#resting-hr', '60')
  await expect(karvonen).toBeEnabled()
})

test('Karvonen Zone 1 for age 30, resting 60 = ~125-138 bpm', async ({ page }) => {
  await page.fill('input#age', '30')
  await page.fill('input#resting-hr', '60')
  await page.getByRole('button', { name: 'Karvonen' }).click()

  const zone1 = page.locator('[data-testid="zone-card"]').first()
  const text = await zone1.textContent()
  const numbers = text.match(/\d+/g).map(Number)
  const low = numbers.find(n => n >= 120 && n <= 130)
  const high = numbers.find(n => n >= 135 && n <= 142)
  expect(low).toBeTruthy()
  expect(high).toBeTruthy()
})

test('all zone ranges are contiguous (zone N max = zone N+1 min)', async ({ page }) => {
  await page.fill('input#age', '30')
  const zones = page.locator('[data-testid="zone-card"]')
  await expect(zones).toHaveCount(5)

  const ranges = []
  for (let i = 0; i < 5; i++) {
    const text = await zones.nth(i).locator('[data-testid="zone-range"]').textContent()
    const [low, high] = text.match(/\d+/g).map(Number)
    ranges.push({ low, high })
  }

  for (let i = 0; i < 4; i++) {
    expect(ranges[i].high).toBe(ranges[i + 1].low)
  }
})

test('back link navigates to home page', async ({ page }) => {
  await page.locator('a', { hasText: '← All Calculators' }).click()
  await expect(page).toHaveURL('/')
})
