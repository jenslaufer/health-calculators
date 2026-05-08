import { test, expect } from '@playwright/test'

test.describe('Pain Scale Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/schmerzskala-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Schmerzskala-Rechner/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Schmerzskala-Rechner')
  })

  test('back link navigates home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('result hidden before input', async ({ page }) => {
    await expect(page.getByTestId('result-score')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('NRS 0 → no pain', async ({ page }) => {
    await page.getByTestId('nrs-0').click()
    await expect(page.getByTestId('result-status')).toHaveText('Kein Schmerz')
    await expect(page.getByTestId('result-score')).toContainText('0.0')
  })

  test('NRS 2 → mild pain', async ({ page }) => {
    await page.getByTestId('nrs-2').click()
    await expect(page.getByTestId('result-status')).toHaveText('Leichter Schmerz')
  })

  test('NRS 5 → moderate pain', async ({ page }) => {
    await page.getByTestId('nrs-5').click()
    await expect(page.getByTestId('result-status')).toHaveText('Mäßiger Schmerz')
  })

  test('NRS 8 → severe pain', async ({ page }) => {
    await page.getByTestId('nrs-8').click()
    await expect(page.getByTestId('result-status')).toHaveText('Starker Schmerz')
  })

  test('VAS scale switch shows slider', async ({ page }) => {
    await page.getByTestId('scale-vas').click()
    await expect(page.getByTestId('vas-slider')).toBeVisible()
  })

  test('Wong-Baker face 6 → moderate pain', async ({ page }) => {
    await page.getByTestId('scale-wong').click()
    await page.getByTestId('wong-6').click()
    await expect(page.getByTestId('result-status')).toHaveText('Mäßiger Schmerz')
    await expect(page.getByTestId('result-score')).toContainText('6.0')
  })

  test('blog article link is rendered', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('Pain Scale Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/pain-scale-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Pain Scale Calculator/)
  })

  test('NRS 7 → severe pain', async ({ page }) => {
    await page.getByTestId('nrs-7').click()
    await expect(page.getByTestId('result-status')).toHaveText('Severe pain')
    await expect(page.getByTestId('result-score')).toContainText('7.0')
  })
})
