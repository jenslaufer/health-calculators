import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/menopause-symptome-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Menopause-Symptome/)
})

test('no symptoms scored → no result card visible', async ({ page }) => {
  await expect(page.getByTestId('result-total')).toHaveCount(0)
})

test('one mild symptom → mild category', async ({ page }) => {
  await page.getByTestId('hotFlushes-2').click()
  await page.getByTestId('sleepProblems-2').click()
  await page.getByTestId('depressiveMood-2').click()
  await expect(page.getByTestId('result-total')).toBeVisible()
  await expect(page.getByTestId('result-total')).toHaveText('6')
  await expect(page.getByTestId('result-category')).toHaveText('leicht')
})

test('severe symptoms → severe category and evaluation recommended', async ({ page }) => {
  await page.getByTestId('hotFlushes-4').click()
  await page.getByTestId('sleepProblems-4').click()
  await page.getByTestId('depressiveMood-4').click()
  await page.getByTestId('anxiety-4').click()
  await page.getByTestId('exhaustion-1').click()
  await expect(page.getByTestId('result-total')).toHaveText('17')
  await expect(page.getByTestId('result-category')).toHaveText('schwer')
  const status = page.getByTestId('evaluation-status')
  await expect(status).toBeVisible()
  await expect(status).toContainText(/Abklärung empfohlen/i)
})

test('subscale scores update independently', async ({ page }) => {
  await page.getByTestId('hotFlushes-3').click()
  await page.getByTestId('sleepProblems-3').click()
  await page.getByTestId('depressiveMood-2').click()
  await page.getByTestId('vaginalDryness-2').click()
  await expect(page.getByTestId('somatic-score')).toContainText('6')
  await expect(page.getByTestId('psychological-score')).toContainText('2')
  await expect(page.getByTestId('urogenital-score')).toContainText('2')
})

test('changing a score replaces the previous value', async ({ page }) => {
  await page.getByTestId('hotFlushes-4').click()
  await expect(page.getByTestId('result-total')).toHaveText('4')
  await page.getByTestId('hotFlushes-1').click()
  await expect(page.getByTestId('result-total')).toHaveText('1')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
