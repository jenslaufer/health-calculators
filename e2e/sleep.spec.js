import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/schlafzyklen-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Schlafzyklen-Rechner/)
})

test('wake up at mode — entering 07:00 shows 3 bedtime options', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const cards = page.locator('[data-testid="cycle-option"]')
  await expect(cards).toHaveCount(3)
})

test('6-cycle option for 07:00 wake = 21:45', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const card = page.locator('[data-testid="cycle-option"]').filter({ hasText: '6 Zyklen' })
  await expect(card).toContainText('21:45')
})

test('5-cycle option for 07:00 wake = 23:15', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const card = page.locator('[data-testid="cycle-option"]').filter({ hasText: '5 Zyklen' })
  await expect(card).toContainText('23:15')
})

test('4-cycle option for 07:00 wake = 00:45', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const card = page.locator('[data-testid="cycle-option"]').filter({ hasText: '4 Zyklen' })
  await expect(card).toContainText('00:45')
})

test('sleep at mode — entering 23:00 shows 3 wake time options', async ({ page }) => {
  await page.getByRole('button', { name: /einschlafen|sleep/i }).click()
  await page.fill('input[type="time"]', '23:00')
  const cards = page.locator('[data-testid="cycle-option"]')
  await expect(cards).toHaveCount(3)
})

test('5-cycle option is marked as recommended', async ({ page }) => {
  await page.fill('input[type="time"]', '07:00')
  const card = page.locator('[data-testid="cycle-option"]').filter({ hasText: '5 Zyklen' })
  await expect(card).toContainText('Empfohlen')
})

test('switching mode swaps the input label', async ({ page }) => {
  await expect(page.locator('label')).toContainText('aufwachen')
  await page.getByRole('button', { name: /einschlafen|sleep/i }).click()
  await expect(page.locator('label')).toContainText('einschlafen')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
