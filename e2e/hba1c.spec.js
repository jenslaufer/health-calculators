import { test, expect } from '@playwright/test'

test.describe('HbA1c Converter (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/hba1c-konverter')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/HbA1c umrechnen/)
  })

  test('h1 contains HbA1c', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('HbA1c')
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('HbA1c mode is selected by default', async ({ page }) => {
    await expect(page.getByTestId('btn-hba1c-mode')).toHaveClass(/bg-stone-900/)
  })

  test('mg/dL unit is selected by default', async ({ page }) => {
    await expect(page.getByTestId('btn-mgdl')).toHaveClass(/bg-stone-900/)
  })

  test('results hidden before input', async ({ page }) => {
    await expect(page.getByTestId('result-eag-mg')).not.toBeVisible()
  })

  test('HbA1c 6.5% shows ~140 mg/dL eAG and Diabetes category', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('6.5')

    await expect(page.getByTestId('result-eag-mg')).toBeVisible()
    const eagMg = await page.getByTestId('result-eag-mg').textContent()
    expect(parseFloat(eagMg)).toBeCloseTo(140, 0)
    await expect(page.getByTestId('risk-badge')).toContainText('Diabetes')
  })

  test('HbA1c 5.5% shows Normal category', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('5.5')
    await expect(page.getByTestId('risk-badge')).toContainText('Normal')
  })

  test('HbA1c 6.0% shows Prädiabetes category', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('6.0')
    await expect(page.getByTestId('risk-badge')).toContainText('Prädiabetes')
  })

  test('HbA1c 5.7% shows Prädiabetes (lower boundary)', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('5.7')
    await expect(page.getByTestId('risk-badge')).toContainText('Prädiabetes')
  })

  test('eAG mmol/L result is shown alongside mg/dL', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('6.5')
    await expect(page.getByTestId('result-eag-mmol')).toBeVisible()
    const eagMmol = await page.getByTestId('result-eag-mmol').textContent()
    expect(parseFloat(eagMmol)).toBeCloseTo(7.77, 1)
  })

  test('formula is displayed after input', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('6.5')
    await expect(page.getByText(/28/)).toBeVisible()
  })

  test('switching to glucose mode shows glucose input', async ({ page }) => {
    await page.getByTestId('btn-glucose-mode').click()
    await expect(page.getByTestId('btn-glucose-mode')).toHaveClass(/bg-stone-900/)
    await expect(page.getByTestId('input-glucose')).toBeVisible()
    await expect(page.getByTestId('input-hba1c')).not.toBeVisible()
  })

  test('glucose mode: 140 mg/dL → HbA1c ~6.5%', async ({ page }) => {
    await page.getByTestId('btn-glucose-mode').click()
    await page.getByTestId('input-glucose').fill('140')

    await expect(page.getByTestId('result-hba1c')).toBeVisible()
    const hba1c = await page.getByTestId('result-hba1c').textContent()
    expect(hba1c).toContain('6.5')
    await expect(page.getByTestId('risk-badge')).toContainText('Diabetes')
  })

  test('glucose mode: switching to mmol/L changes placeholder', async ({ page }) => {
    await page.getByTestId('btn-glucose-mode').click()
    await page.getByTestId('btn-mmol').click()
    await expect(page.getByTestId('btn-mmol')).toHaveClass(/bg-stone-900/)
    await expect(page.getByTestId('input-glucose')).toBeVisible()
  })

  test('glucose mode mmol/L: 7.77 mmol/L → HbA1c ~6.5%', async ({ page }) => {
    await page.getByTestId('btn-glucose-mode').click()
    await page.getByTestId('btn-mmol').click()
    await page.getByTestId('input-glucose').fill('7.77')

    await expect(page.getByTestId('result-hba1c')).toBeVisible()
    const hba1c = await page.getByTestId('result-hba1c').textContent()
    expect(parseFloat(hba1c)).toBeCloseTo(6.5, 0)
  })

  test('risk category chart is visible after input', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('6.5')
    await expect(page.getByTestId('risk-category')).toBeVisible()
  })

  test('categories table is always visible', async ({ page }) => {
    await expect(page.getByText('Risikokategorien')).toBeVisible()
  })
})

test.describe('HbA1c Converter (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/hba1c-converter')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/HbA1c/)
  })

  test('h1 contains HbA1c', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('HbA1c')
  })

  test('Diabetes category shown for HbA1c 6.5%', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('6.5')
    await expect(page.getByTestId('risk-badge')).toContainText('Diabetes')
  })

  test('Normal category shown for HbA1c 5.0%', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('5.0')
    await expect(page.getByTestId('risk-badge')).toContainText('Normal')
  })

  test('Prediabetes category shown for HbA1c 6.0%', async ({ page }) => {
    await page.getByTestId('input-hba1c').fill('6.0')
    await expect(page.getByTestId('risk-badge')).toContainText('Prediabetes')
  })

  test('categories table is always visible', async ({ page }) => {
    await expect(page.getByText('Risk Categories')).toBeVisible()
  })
})
