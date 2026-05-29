import { test, expect } from '@playwright/test'

test.describe('HOMA-IR Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/homa-ir-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/HOMA-IR-Rechner/)
  })

  test('h1 contains HOMA-IR', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('HOMA-IR')
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('conventional units selected by default', async ({ page }) => {
    await expect(page.getByTestId('btn-imperial')).toHaveClass(/bg-stone-900/)
  })

  test('no result shown before inputs', async ({ page }) => {
    await expect(page.getByTestId('result-card')).toHaveCount(0)
  })

  test('normal HOMA-IR: glucose 85 + insulin 4 → ~0.84, normal band', async ({ page }) => {
    await page.getByTestId('glucose-input').fill('85')
    await page.getByTestId('insulin-input').fill('4')

    await expect(page.getByTestId('homa-value')).toHaveText('0.84')
    await expect(page.getByTestId('band')).toHaveText('Normal')
    await expect(page.getByTestId('band')).toHaveClass(/text-emerald/)
  })

  test('mild band: glucose 90 + insulin 8 → ~1.78, mild', async ({ page }) => {
    await page.getByTestId('glucose-input').fill('90')
    await page.getByTestId('insulin-input').fill('8')

    await expect(page.getByTestId('homa-value')).toHaveText('1.78')
    await expect(page.getByTestId('band')).toHaveText('Leichte Insulinresistenz')
    await expect(page.getByTestId('band')).toHaveClass(/text-amber/)
  })

  test('insulin resistance band: glucose 95 + insulin 12 → ~2.81', async ({ page }) => {
    await page.getByTestId('glucose-input').fill('95')
    await page.getByTestId('insulin-input').fill('12')

    await expect(page.getByTestId('homa-value')).toHaveText('2.81')
    await expect(page.getByTestId('band')).toHaveText('Insulinresistenz')
    await expect(page.getByTestId('band')).toHaveClass(/text-orange/)
  })

  test('severe band: glucose 110 + insulin 20 → ~5.43', async ({ page }) => {
    await page.getByTestId('glucose-input').fill('110')
    await page.getByTestId('insulin-input').fill('20')

    await expect(page.getByTestId('homa-value')).toHaveText('5.43')
    await expect(page.getByTestId('band')).toHaveText('Schwere Insulinresistenz')
    await expect(page.getByTestId('band')).toHaveClass(/text-red/)
  })

  test('switching to metric clears inputs and updates labels', async ({ page }) => {
    await page.getByTestId('glucose-input').fill('90')
    await page.getByTestId('insulin-input').fill('8')

    await page.getByTestId('btn-metric').click()
    await expect(page.getByTestId('btn-metric')).toHaveClass(/bg-stone-900/)
    await expect(page.getByTestId('glucose-input')).toHaveValue('')
    await expect(page.getByTestId('insulin-input')).toHaveValue('')
  })

  test('metric units: glucose 5 mmol/L + insulin 8 µU/mL is computed via SI formula', async ({ page }) => {
    await page.getByTestId('btn-metric').click()
    // 8 µU/mL ≈ 55.56 pmol/L; glucose 5 mmol/L
    // HOMA-IR = (8 × 5) / 22.5 ≈ 1.78
    await page.getByTestId('glucose-input').fill('5')
    await page.getByTestId('insulin-input').fill('55.56')

    await expect(page.getByTestId('homa-value')).toHaveText('1.78')
    await expect(page.getByTestId('band')).toHaveText('Leichte Insulinresistenz')
  })

  test('formula text is visible after input', async ({ page }) => {
    await page.getByTestId('glucose-input').fill('90')
    await page.getByTestId('insulin-input').fill('8')
    await expect(page.getByTestId('formula')).toBeVisible()
  })

  test('clinical note is shown in the result card', async ({ page }) => {
    await page.getByTestId('glucose-input').fill('90')
    await page.getByTestId('insulin-input').fill('8')
    await expect(page.getByTestId('clinical-note')).toBeVisible()
  })

  test('related calculators block is visible', async ({ page }) => {
    await expect(page.getByTestId('related-calculators')).toBeVisible()
  })

  test('blog article link is visible', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('HOMA-IR Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/homa-ir-insulin-resistance')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/HOMA-IR/)
  })

  test('mild band: glucose 90 + insulin 8 → ~1.78, mild', async ({ page }) => {
    await page.getByTestId('glucose-input').fill('90')
    await page.getByTestId('insulin-input').fill('8')

    await expect(page.getByTestId('homa-value')).toHaveText('1.78')
    await expect(page.getByTestId('band')).toHaveText('Mild insulin resistance')
  })

  test('severe band: glucose 110 + insulin 20 → ~5.43', async ({ page }) => {
    await page.getByTestId('glucose-input').fill('110')
    await page.getByTestId('insulin-input').fill('20')

    await expect(page.getByTestId('band')).toHaveText('Severe insulin resistance')
  })
})
