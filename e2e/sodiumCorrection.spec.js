import { test, expect } from '@playwright/test'

test.describe('Sodium Correction Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/natrium-korrektur-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Natrium-Korrektur/)
  })

  test('h1 contains Natrium-Korrektur-Rechner', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: 'Natrium-Korrektur-Rechner' })).toBeVisible()
  })

  test('results hidden before input', async ({ page }) => {
    await expect(page.getByTestId('result-corrected-na')).not.toBeVisible()
  })

  test('DKA scenario: Na 130, glucose 600 → corrected ~142 (normal)', async ({ page }) => {
    await page.getByTestId('input-na').fill('130')
    await page.getByTestId('input-glucose').fill('600')
    await expect(page.getByTestId('result-corrected-na')).toBeVisible()
    const corrected = await page.getByTestId('result-corrected-na').textContent()
    expect(parseFloat(corrected)).toBeCloseTo(142, 0)
    await expect(page.getByTestId('result-classification')).toHaveText('Normales Natrium')
  })

  test('hyponatremia: Na 128, glucose 100 → corrected 128 (Hyponatriämie)', async ({ page }) => {
    await page.getByTestId('input-na').fill('128')
    await page.getByTestId('input-glucose').fill('100')
    const corrected = await page.getByTestId('result-corrected-na').textContent()
    expect(parseFloat(corrected)).toBeCloseTo(128, 0)
    await expect(page.getByTestId('result-classification')).toHaveText('Hyponatriämie')
  })

  test('hypernatremia: Na 150, glucose 100 → corrected 150 (Hypernatriämie)', async ({ page }) => {
    await page.getByTestId('input-na').fill('150')
    await page.getByTestId('input-glucose').fill('100')
    const corrected = await page.getByTestId('result-corrected-na').textContent()
    expect(parseFloat(corrected)).toBeCloseTo(150, 0)
    await expect(page.getByTestId('result-classification')).toHaveText('Hypernatriämie')
  })

  test('mmol/L unit toggle: Na 135, glucose 22.2 mmol/L → corrected ~142', async ({ page }) => {
    await page.getByTestId('unit-mmol').click()
    await page.getByTestId('input-na').fill('135')
    await page.getByTestId('input-glucose').fill('22.2')
    const corrected = await page.getByTestId('result-corrected-na').textContent()
    expect(parseFloat(corrected)).toBeCloseTo(142, 0)
  })

  test('Katz formula gives smaller correction than Hillier', async ({ page }) => {
    await page.getByTestId('input-na').fill('130')
    await page.getByTestId('input-glucose').fill('600')
    const hillier = parseFloat(await page.getByTestId('result-corrected-na').textContent())
    await page.getByTestId('formula-katz').click()
    const katz = parseFloat(await page.getByTestId('result-corrected-na').textContent())
    expect(katz).toBeLessThan(hillier)
  })

  test('pseudohyponatremia hint appears when measured low + corrected normal', async ({ page }) => {
    await page.getByTestId('input-na').fill('130')
    await page.getByTestId('input-glucose').fill('600')
    await expect(page.getByTestId('result-pseudohyponatremia')).toBeVisible()
  })

  test('plausibility warning for out-of-range Na', async ({ page }) => {
    await page.getByTestId('input-na').fill('200')
    await page.getByTestId('input-glucose').fill('100')
    await expect(page.getByTestId('warning-plausibility')).toBeVisible()
  })

  test('reference ranges section is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Referenzbereiche (korrigiertes Natrium)' })).toBeVisible()
  })
})

test.describe('Sodium Correction Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/sodium-correction-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Sodium Correction/)
  })

  test('h1 contains Sodium Correction Calculator', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: 'Sodium Correction Calculator' })).toBeVisible()
  })

  test('happy path: Na 130, glucose 600 → corrected ~142 Normal', async ({ page }) => {
    await page.getByTestId('input-na').fill('130')
    await page.getByTestId('input-glucose').fill('600')
    const corrected = await page.getByTestId('result-corrected-na').textContent()
    expect(parseFloat(corrected)).toBeCloseTo(142, 0)
    await expect(page.getByTestId('result-classification')).toHaveText('Normal')
  })

  test('hyponatremia classification', async ({ page }) => {
    await page.getByTestId('input-na').fill('128')
    await page.getByTestId('input-glucose').fill('100')
    await expect(page.getByTestId('result-classification')).toHaveText('Hyponatremia')
  })

  test('hypernatremia classification', async ({ page }) => {
    await page.getByTestId('input-na').fill('150')
    await page.getByTestId('input-glucose').fill('100')
    await expect(page.getByTestId('result-classification')).toHaveText('Hypernatremia')
  })

  test('reference ranges section is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Reference ranges (corrected sodium)' })).toBeVisible()
  })
})

test.describe('Sodium Correction DE blog article', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/natrium-korrektur-berechnen')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Natrium-Korrektur/)
  })

  test('h1 contains Natrium-Korrektur', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Natrium-Korrektur')
  })

  test('CTA link navigates to calculator', async ({ page }) => {
    await page.getByRole('link', { name: /Zum Natrium-Korrektur-Rechner/ }).click()
    await expect(page).toHaveURL(/natrium-korrektur-rechner/)
  })
})

test.describe('Sodium Correction EN blog article', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/sodium-correction-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Sodium Correction/)
  })

  test('h1 contains Sodium Correction', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Sodium Correction')
  })

  test('CTA link navigates to calculator', async ({ page }) => {
    await page.getByRole('link', { name: /Sodium Correction Calculator/ }).click()
    await expect(page).toHaveURL(/sodium-correction-calculator/)
  })
})
