import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/sleep')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Sleep Cycle Calculator — Optimal Bedtime & Wake Time')
})

test('wake up at mode — entering 07:00 shows 3 bedtime options', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const cards = page.locator('[data-testid="cycle-option"]')
  await expect(cards).toHaveCount(3)
})

test('6-cycle option for 07:00 wake = 21:45', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const card = page.locator('[data-testid="cycle-option"]').filter({ hasText: '6 cycles' })
  await expect(card).toContainText('21:45')
})

test('5-cycle option for 07:00 wake = 23:15', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const card = page.locator('[data-testid="cycle-option"]').filter({ hasText: '5 cycles' })
  await expect(card).toContainText('23:15')
})

test('4-cycle option for 07:00 wake = 00:45', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const card = page.locator('[data-testid="cycle-option"]').filter({ hasText: '4 cycles' })
  await expect(card).toContainText('00:45')
})

test('sleep at mode — entering 23:00 shows 3 wake time options', async ({ page }) => {
  await page.getByRole('button', { name: /sleep/i }).click()
  await page.fill('input[type="time"]', '23:00')
  const cards = page.locator('[data-testid="cycle-option"]')
  await expect(cards).toHaveCount(3)
})

test('5-cycle option is marked as recommended', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const card = page.locator('[data-testid="cycle-option"]').filter({ hasText: '5 cycles' })
  await expect(card).toContainText('Recommended')
})

test('switching mode swaps the input label', async ({ page }) => {
  await expect(page.locator('label')).toContainText('wake up')
  await page.getByRole('button', { name: /sleep/i }).click()
  await expect(page.locator('label')).toContainText('go to sleep')
})

test('back link navigates to home page', async ({ page }) => {
  await page.click('text=All Calculators')
  await expect(page).toHaveURL('/')
})
