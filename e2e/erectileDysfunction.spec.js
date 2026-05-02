import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/erektile-dysfunktion-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Erektile.Dysfunktion|IIEF-5/)
})

async function answerAll(page, value) {
  for (let q = 1; q <= 5; q++) {
    await page.getByTestId(`q${q}-option-${value}`).click()
  }
}

test('all 5s → score 25, no ED', async ({ page }) => {
  await answerAll(page, 5)
  const score = page.getByTestId('iief5-score')
  await expect(score).toBeVisible()
  await expect(score).toHaveText('25')
  await expect(page.getByTestId('result-status')).toHaveText('Keine erektile Dysfunktion')
})

test('all 1s → score 5, severe ED', async ({ page }) => {
  await answerAll(page, 1)
  await expect(page.getByTestId('iief5-score')).toHaveText('5')
  await expect(page.getByTestId('result-status')).toHaveText('Schwere ED')
})

test('all 3s → score 15, mild–moderate', async ({ page }) => {
  await answerAll(page, 3)
  await expect(page.getByTestId('iief5-score')).toHaveText('15')
  await expect(page.getByTestId('result-status')).toHaveText('Leicht bis mittelschwer')
})

test('result hidden until all questions answered', async ({ page }) => {
  await page.getByTestId('q1-option-5').click()
  await page.getByTestId('q2-option-5').click()
  await expect(page.getByTestId('iief5-score')).not.toBeVisible()
})

test('shows severity message after completion', async ({ page }) => {
  await answerAll(page, 4)
  await expect(page.getByTestId('severity-message')).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
