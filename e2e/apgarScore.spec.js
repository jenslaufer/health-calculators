import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/apgar-score-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/APGAR-Score-Rechner/)
})

test('healthy newborn (all 2s at 1min and 5min) → reassuring', async ({ page }) => {
  for (const c of ['appearance', 'pulse', 'grimace', 'activity', 'respiration']) {
    await page.getByTestId(`oneMinute-${c}`).selectOption('2')
    await page.getByTestId(`fiveMinute-${c}`).selectOption('2')
  }
  await expect(page.getByTestId('one-minute-total')).toHaveText('10')
  await expect(page.getByTestId('five-minute-total')).toHaveText('10')
  await expect(page.getByTestId('five-minute-category')).toHaveText('Unauffällig')
})

test('moderately depressed newborn (5min=5) → moderate, extended needed', async ({ page }) => {
  for (const c of ['appearance', 'pulse', 'grimace', 'activity', 'respiration']) {
    await page.getByTestId(`oneMinute-${c}`).selectOption('1')
    await page.getByTestId(`fiveMinute-${c}`).selectOption('1')
  }
  await expect(page.getByTestId('five-minute-total')).toHaveText('5')
  await expect(page.getByTestId('five-minute-category')).toHaveText('Moderat eingeschränkt')
  await expect(page.getByTestId('extended-warning')).toBeVisible()
})

test('critical newborn (all 0s at 5min) → critical', async ({ page }) => {
  for (const c of ['appearance', 'pulse', 'grimace', 'activity', 'respiration']) {
    await page.getByTestId(`oneMinute-${c}`).selectOption('0')
    await page.getByTestId(`fiveMinute-${c}`).selectOption('0')
  }
  await expect(page.getByTestId('five-minute-total')).toHaveText('0')
  await expect(page.getByTestId('five-minute-category')).toHaveText('Kritisch')
  await expect(page.getByTestId('extended-warning')).toBeVisible()
})

test('boundary: 5-minute score of 7 → reassuring, no extended warning', async ({ page }) => {
  await page.getByTestId('fiveMinute-appearance').selectOption('1')
  await page.getByTestId('fiveMinute-pulse').selectOption('2')
  await page.getByTestId('fiveMinute-grimace').selectOption('1')
  await page.getByTestId('fiveMinute-activity').selectOption('1')
  await page.getByTestId('fiveMinute-respiration').selectOption('2')
  await expect(page.getByTestId('five-minute-total')).toHaveText('7')
  await expect(page.getByTestId('five-minute-category')).toHaveText('Unauffällig')
  await expect(page.getByTestId('extended-warning')).toHaveCount(0)
})

test('partial input shows dash placeholder until complete', async ({ page }) => {
  await page.getByTestId('oneMinute-appearance').selectOption('2')
  await page.getByTestId('oneMinute-pulse').selectOption('2')
  await expect(page.getByTestId('one-minute-result')).toContainText('—')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
