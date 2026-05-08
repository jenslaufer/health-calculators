import { test, expect } from '@playwright/test'

test.describe('Newborn Bilirubin Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/neugeborenen-bilirubin-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Neugeborenen-Bilirubin Rechner/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Neugeborenen-Bilirubin Rechner')
  })

  test('back link navigates home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('result hidden before inputs', async ({ page }) => {
    await expect(page.getByTestId('result-tsb')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('TSB 3.0 mg/dL at 24h → low risk', async ({ page }) => {
    await page.getByTestId('age-hours').fill('24')
    await page.getByTestId('tsb').fill('3.0')

    await expect(page.getByTestId('result-tsb')).toHaveText('3.0')
    await expect(page.getByTestId('result-status')).toHaveText('Niedriges Risiko')
  })

  test('TSB 16 mg/dL at 60h → high risk', async ({ page }) => {
    await page.getByTestId('age-hours').fill('60')
    await page.getByTestId('tsb').fill('16')

    await expect(page.getByTestId('result-tsb')).toHaveText('16.0')
    await expect(page.getByTestId('result-status')).toHaveText('Hohes Risiko')
  })

  test('TSB 7.0 mg/dL at 24h → high intermediate', async ({ page }) => {
    await page.getByTestId('age-hours').fill('24')
    await page.getByTestId('tsb').fill('7.0')

    await expect(page.getByTestId('result-status')).toHaveText('Hoch-mittleres Risiko')
  })

  test('SI unit µmol/L converts correctly', async ({ page }) => {
    await page.getByTestId('age-hours').fill('24')
    await page.getByTestId('tsb-unit').selectOption('umol/L')
    await page.getByTestId('tsb').fill('137')

    await expect(page.getByTestId('result-tsb')).toBeVisible()
    const tsbText = await page.getByTestId('result-tsb').textContent()
    const tsbMgDl = parseFloat(tsbText)
    expect(tsbMgDl).toBeGreaterThan(7.5)
    expect(tsbMgDl).toBeLessThan(8.5)
    await expect(page.getByTestId('result-status')).toHaveText('Hohes Risiko')
  })

  test('age out of range hides result', async ({ page }) => {
    await page.getByTestId('age-hours').fill('5')
    await page.getByTestId('tsb').fill('5')

    await expect(page.getByTestId('result-tsb')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('blog article link is rendered', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('Newborn Bilirubin Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/newborn-bilirubin-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Newborn Bilirubin Calculator/)
  })

  test('TSB 3.0 mg/dL at 24h → low risk', async ({ page }) => {
    await page.getByTestId('age-hours').fill('24')
    await page.getByTestId('tsb').fill('3.0')

    await expect(page.getByTestId('result-status')).toHaveText('Low risk')
  })

  test('TSB 16 mg/dL at 60h → high risk', async ({ page }) => {
    await page.getByTestId('age-hours').fill('60')
    await page.getByTestId('tsb').fill('16')

    await expect(page.getByTestId('result-status')).toHaveText('High risk')
  })
})
