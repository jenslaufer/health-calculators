import { test, expect } from '@playwright/test'

test.describe('Blood Sugar Converter (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blutzucker-umrechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Blutzucker umrechnen/)
  })

  test('h1 contains Blutzucker', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Blutzucker')
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('mg/dL unit is selected by default', async ({ page }) => {
    await expect(page.getByTestId('btn-mgdl')).toHaveClass(/bg-stone-900/)
  })

  test('fasting context is selected by default', async ({ page }) => {
    await expect(page.getByTestId('btn-fasting')).toHaveClass(/bg-stone-900/)
  })

  test('results hidden before input', async ({ page }) => {
    await expect(page.getByTestId('result-converted')).not.toBeVisible()
  })

  test('95 mg/dL fasting → normal, ~5.27 mmol/L', async ({ page }) => {
    await page.getByTestId('input-value').fill('95')
    await expect(page.getByTestId('result-converted')).toBeVisible()
    const converted = await page.getByTestId('result-converted').textContent()
    expect(parseFloat(converted)).toBeCloseTo(5.27, 1)
    await expect(page.getByTestId('risk-badge')).toContainText('Normal')
  })

  test('115 mg/dL fasting → Prädiabetes', async ({ page }) => {
    await page.getByTestId('input-value').fill('115')
    await expect(page.getByTestId('risk-badge')).toContainText('Prädiabetes')
  })

  test('130 mg/dL fasting → Diabetes', async ({ page }) => {
    await page.getByTestId('input-value').fill('130')
    await expect(page.getByTestId('risk-badge')).toContainText('Diabetes')
  })

  test('100 mg/dL fasting → Prädiabetes (lower boundary)', async ({ page }) => {
    await page.getByTestId('input-value').fill('100')
    await expect(page.getByTestId('risk-badge')).toContainText('Prädiabetes')
  })

  test('126 mg/dL fasting → Diabetes (lower boundary)', async ({ page }) => {
    await page.getByTestId('input-value').fill('126')
    await expect(page.getByTestId('risk-badge')).toContainText('Diabetes')
  })

  test('switching to postprandial context changes classification', async ({ page }) => {
    await page.getByTestId('input-value').fill('90')
    await expect(page.getByTestId('risk-badge')).toContainText('Normal')
    await page.getByTestId('btn-postprandial').click()
    await expect(page.getByTestId('btn-postprandial')).toHaveClass(/bg-stone-900/)
    await expect(page.getByTestId('risk-badge')).toContainText('Normal')
  })

  test('150 mg/dL postprandial → Prädiabetes', async ({ page }) => {
    await page.getByTestId('btn-postprandial').click()
    await page.getByTestId('input-value').fill('150')
    await expect(page.getByTestId('risk-badge')).toContainText('Prädiabetes')
  })

  test('200 mg/dL postprandial → Diabetes (lower boundary)', async ({ page }) => {
    await page.getByTestId('btn-postprandial').click()
    await page.getByTestId('input-value').fill('200')
    await expect(page.getByTestId('risk-badge')).toContainText('Diabetes')
  })

  test('switching to mmol/L unit clears input', async ({ page }) => {
    await page.getByTestId('input-value').fill('95')
    await page.getByTestId('btn-mmol').click()
    await expect(page.getByTestId('btn-mmol')).toHaveClass(/bg-stone-900/)
    await expect(page.getByTestId('result-converted')).not.toBeVisible()
  })

  test('5.3 mmol/L → normal fasting, ~95.5 mg/dL', async ({ page }) => {
    await page.getByTestId('btn-mmol').click()
    await page.getByTestId('input-value').fill('5.3')
    await expect(page.getByTestId('result-converted')).toBeVisible()
    const converted = await page.getByTestId('result-converted').textContent()
    expect(parseFloat(converted)).toBeCloseTo(95.5, 0)
    await expect(page.getByTestId('risk-badge')).toContainText('Normal')
  })

  test('7.0 mmol/L fasting → Diabetes', async ({ page }) => {
    await page.getByTestId('btn-mmol').click()
    await page.getByTestId('input-value').fill('7.0')
    await expect(page.getByTestId('risk-badge')).toContainText('Diabetes')
  })

  test('risk category chart is visible after input', async ({ page }) => {
    await page.getByTestId('input-value').fill('95')
    await expect(page.getByTestId('risk-category')).toBeVisible()
  })

  test('reference ranges table is always visible', async ({ page }) => {
    await expect(page.getByText('Referenzbereiche')).toBeVisible()
  })

  test('formula is displayed after input', async ({ page }) => {
    await page.getByTestId('input-value').fill('95')
    await expect(page.getByText(/18,018/)).toBeVisible()
  })
})

test.describe('Blood Sugar Converter (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blood-sugar-converter')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Blood Sugar/)
  })

  test('h1 contains Blood Sugar', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Blood Sugar')
  })

  test('95 mg/dL fasting → Normal', async ({ page }) => {
    await page.getByTestId('input-value').fill('95')
    await expect(page.getByTestId('risk-badge')).toContainText('Normal')
  })

  test('115 mg/dL fasting → Prediabetes', async ({ page }) => {
    await page.getByTestId('input-value').fill('115')
    await expect(page.getByTestId('risk-badge')).toContainText('Prediabetes')
  })

  test('130 mg/dL fasting → Diabetes', async ({ page }) => {
    await page.getByTestId('input-value').fill('130')
    await expect(page.getByTestId('risk-badge')).toContainText('Diabetes')
  })

  test('reference ranges table is always visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Reference Ranges' })).toBeVisible()
  })
})

test.describe('Blood Sugar DE blog article', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/blutzucker-umrechnen')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Blutzucker umrechnen/)
  })

  test('h1 contains Blutzucker', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Blutzucker')
  })

  test('CTA link navigates to calculator', async ({ page }) => {
    await page.getByRole('link', { name: /Blutzucker-Umrechner/ }).click()
    await expect(page).toHaveURL(/blutzucker-umrechner/)
  })
})

test.describe('Blood Sugar EN blog article', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/blood-sugar-converter-guide')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Blood Sugar/)
  })

  test('h1 contains Blood Sugar', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Blood Sugar')
  })

  test('CTA link navigates to calculator', async ({ page }) => {
    await page.getByRole('link', { name: /Blood Sugar Converter/ }).click()
    await expect(page).toHaveURL(/blood-sugar-converter/)
  })
})
