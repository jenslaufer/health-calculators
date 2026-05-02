import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/haarausfall-rechner-maenner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Haarausfall|Norwood/)
})

async function answerAll(page, value) {
  for (let q = 1; q <= 4; q++) {
    await page.getByTestId(`q${q}-option-${value}`).click()
  }
}

test('all 1s → score 4, stage 1', async ({ page }) => {
  await answerAll(page, 1)
  const stage = page.getByTestId('norwood-stage')
  await expect(stage).toBeVisible()
  await expect(stage).toHaveText('1')
  await expect(page.getByTestId('result-status')).toHaveText('Stadium 1')
})

test('all 5s → score 20, stage 7', async ({ page }) => {
  await answerAll(page, 5)
  await expect(page.getByTestId('norwood-stage')).toHaveText('7')
  await expect(page.getByTestId('result-status')).toHaveText('Stadium 7')
})

test('all 3s → score 12, stage 4', async ({ page }) => {
  await answerAll(page, 3)
  await expect(page.getByTestId('norwood-stage')).toHaveText('4')
  await expect(page.getByTestId('result-status')).toHaveText('Stadium 4')
})

test('result hidden until all questions answered', async ({ page }) => {
  await page.getByTestId('q1-option-3').click()
  await page.getByTestId('q2-option-3').click()
  await expect(page.getByTestId('norwood-stage')).not.toBeVisible()
})

test('shows stage advice after completion', async ({ page }) => {
  await answerAll(page, 4)
  await expect(page.getByTestId('stage-message')).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
