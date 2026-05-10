import { test, expect } from '@playwright/test'

test.describe('Pediatric Blood Pressure Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/kinder-blutdruck-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Kinder-Blutdruck Rechner/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Kinder-Blutdruck Rechner')
  })

  test('back link navigates home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('result hidden before all inputs', async ({ page }) => {
    await expect(page.getByTestId('result-bp')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('boy 5y, 95/55 → normal', async ({ page }) => {
    await page.getByTestId('age-years').fill('5')
    await page.getByTestId('sex-male').click()
    await page.getByTestId('sbp').fill('95')
    await page.getByTestId('dbp').fill('55')

    await expect(page.getByTestId('result-status')).toHaveText('Normal')
  })

  test('boy 5y, 105/55 → elevated (Hochnormal)', async ({ page }) => {
    await page.getByTestId('age-years').fill('5')
    await page.getByTestId('sex-male').click()
    await page.getByTestId('sbp').fill('105')
    await page.getByTestId('dbp').fill('55')

    await expect(page.getByTestId('result-status')).toHaveText('Hochnormal')
  })

  test('boy 5y, 110/55 → stage1', async ({ page }) => {
    await page.getByTestId('age-years').fill('5')
    await page.getByTestId('sex-male').click()
    await page.getByTestId('sbp').fill('110')
    await page.getByTestId('dbp').fill('55')

    await expect(page.getByTestId('result-status')).toHaveText('Hypertonie Stadium 1')
  })

  test('girl 15y, 145/95 → stage2 (AHA adult thresholds)', async ({ page }) => {
    await page.getByTestId('age-years').fill('15')
    await page.getByTestId('sex-female').click()
    await page.getByTestId('sbp').fill('145')
    await page.getByTestId('dbp').fill('95')

    await expect(page.getByTestId('result-status')).toHaveText('Hypertonie Stadium 2')
  })

  test('shows percentile thresholds', async ({ page }) => {
    await page.getByTestId('age-years').fill('5')
    await page.getByTestId('sex-male').click()
    await page.getByTestId('sbp').fill('95')
    await page.getByTestId('dbp').fill('55')

    await expect(page.getByTestId('threshold-p90')).toHaveText('103/63')
    await expect(page.getByTestId('threshold-p95')).toHaveText('108/67')
  })

  test('age out of range hides result', async ({ page }) => {
    await page.getByTestId('age-years').fill('20')
    await page.getByTestId('sbp').fill('120')
    await page.getByTestId('dbp').fill('80')

    await expect(page.getByTestId('result-bp')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('blog article link is rendered', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('Pediatric Blood Pressure Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/pediatric-blood-pressure-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Pediatric Blood Pressure Calculator/)
  })

  test('boy 5y, 95/55 → Normal', async ({ page }) => {
    await page.getByTestId('age-years').fill('5')
    await page.getByTestId('sex-male').click()
    await page.getByTestId('sbp').fill('95')
    await page.getByTestId('dbp').fill('55')

    await expect(page.getByTestId('result-status')).toHaveText('Normal')
  })

  test('age 17, 145/95 → Stage 2 hypertension', async ({ page }) => {
    await page.getByTestId('age-years').fill('17')
    await page.getByTestId('sex-male').click()
    await page.getByTestId('sbp').fill('145')
    await page.getByTestId('dbp').fill('95')

    await expect(page.getByTestId('result-status')).toHaveText('Stage 2 hypertension')
  })
})
