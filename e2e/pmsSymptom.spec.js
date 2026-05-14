import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/pms-symptome-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/PMS-Symptome/)
})

test('no symptoms scored → no result card visible', async ({ page }) => {
  await expect(page.getByTestId('result-category')).toHaveCount(0)
})

test('single mild symptom → mild category', async ({ page }) => {
  await page.getByTestId('fatigue-1').click()
  await expect(page.getByTestId('result-category')).toBeVisible()
  await expect(page.getByTestId('result-category')).toHaveText('kein/leichtes PMS')
})

test('moderate symptoms without impairment → mild category', async ({ page }) => {
  await page.getByTestId('anger-2').click()
  await page.getByTestId('fatigue-2').click()
  await page.getByTestId('insomnia-2').click()
  await page.getByTestId('overeating-2').click()
  await page.getByTestId('concentration-2').click()
  await expect(page.getByTestId('result-category')).toHaveText('kein/leichtes PMS')
})

test('moderate PMS — core moderate + 4 other moderate + impairment moderate', async ({ page }) => {
  await page.getByTestId('anger-2').click()
  await page.getByTestId('fatigue-2').click()
  await page.getByTestId('insomnia-2').click()
  await page.getByTestId('overeating-2').click()
  await page.getByTestId('concentration-2').click()
  await page.getByTestId('workEfficiency-2').click()
  await expect(page.getByTestId('result-category')).toHaveText('mittelschweres bis schweres PMS')
  await expect(page.getByTestId('evaluation-status')).toContainText(/Abklärung empfohlen/i)
})

test('PMDD — severe core + 4 moderate other + severe impairment', async ({ page }) => {
  await page.getByTestId('depressed-3').click()
  await page.getByTestId('fatigue-2').click()
  await page.getByTestId('insomnia-2').click()
  await page.getByTestId('overeating-2').click()
  await page.getByTestId('concentration-2').click()
  await page.getByTestId('workEfficiency-3').click()
  await expect(page.getByTestId('result-category')).toHaveText('Verdacht auf PMDD')
  await expect(page.getByTestId('evaluation-status')).toContainText(/Abklärung empfohlen/i)
})

test('symptom score updates when score changes', async ({ page }) => {
  await page.getByTestId('anger-3').click()
  await expect(page.getByTestId('symptom-score')).toContainText('3')
  await page.getByTestId('anger-1').click()
  await expect(page.getByTestId('symptom-score')).toContainText('1')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
