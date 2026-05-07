import { test, expect } from '@playwright/test'

test.describe('Corrected Calcium Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/korrigiertes-calcium-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Korrigiertes Calcium/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Korrigiertes Calcium Rechner')
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('results hidden before input', async ({ page }) => {
    await expect(page.getByTestId('result-corrected')).not.toBeVisible()
  })

  test('hypoalbuminemia masking: total 8.0, albumin 2.0 → corrected 9.6, normal', async ({ page }) => {
    await page.getByTestId('input-total-ca').fill('8.0')
    await page.getByTestId('input-albumin').fill('2.0')
    await expect(page.getByTestId('result-corrected')).toBeVisible()
    const value = await page.getByTestId('result-corrected').textContent()
    expect(parseFloat(value)).toBeCloseTo(9.6, 1)
    await expect(page.getByTestId('result-interpretation')).toContainText('Normales Calcium')
  })

  test('albumin = 4.0 → corrected = total (no shift)', async ({ page }) => {
    await page.getByTestId('input-total-ca').fill('9.0')
    await page.getByTestId('input-albumin').fill('4.0')
    const value = await page.getByTestId('result-corrected').textContent()
    expect(parseFloat(value)).toBeCloseTo(9.0, 1)
    const delta = await page.getByTestId('result-delta').textContent()
    expect(parseFloat(delta)).toBeCloseTo(0, 1)
  })

  test('hypocalcemia: total 7.0, albumin 4.0 → 7.0, hypocalcemia', async ({ page }) => {
    await page.getByTestId('input-total-ca').fill('7.0')
    await page.getByTestId('input-albumin').fill('4.0')
    await expect(page.getByTestId('result-interpretation')).toContainText('Hypokalzämie')
  })

  test('hypercalcemia: total 11.5, albumin 4.0 → hypercalcemia', async ({ page }) => {
    await page.getByTestId('input-total-ca').fill('11.5')
    await page.getByTestId('input-albumin').fill('4.0')
    await expect(page.getByTestId('result-interpretation')).toContainText('Hyperkalzämie')
  })

  test('missing albumin shows warning, no result', async ({ page }) => {
    await page.getByTestId('input-total-ca').fill('9.0')
    await expect(page.getByTestId('warning-albumin-missing')).toBeVisible()
    await expect(page.getByTestId('result-corrected')).not.toBeVisible()
  })

  test('plausibility warning for out-of-range total', async ({ page }) => {
    await page.getByTestId('input-total-ca').fill('20')
    await page.getByTestId('input-albumin').fill('4.0')
    await expect(page.getByTestId('warning-plausibility')).toBeVisible()
    // result still computed
    await expect(page.getByTestId('result-corrected')).toBeVisible()
  })

  test('SI unit toggle switches formula and units', async ({ page }) => {
    await page.getByTestId('unit-si').click()
    await page.getByTestId('input-total-ca').fill('2.00')
    await page.getByTestId('input-albumin').fill('20')
    const value = await page.getByTestId('result-corrected').textContent()
    expect(parseFloat(value)).toBeCloseTo(2.4, 1)
    await expect(page.getByTestId('result-interpretation')).toContainText('Normales Calcium')
  })

  test('reference ranges table is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Referenzbereiche/ })).toBeVisible()
  })
})

test.describe('Corrected Calcium Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/corrected-calcium-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Corrected Calcium/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Corrected Calcium Calculator')
  })

  test('hypoalbuminemia: total 8.0, albumin 2.0 → 9.6, normal', async ({ page }) => {
    await page.getByTestId('input-total-ca').fill('8.0')
    await page.getByTestId('input-albumin').fill('2.0')
    const value = await page.getByTestId('result-corrected').textContent()
    expect(parseFloat(value)).toBeCloseTo(9.6, 1)
    await expect(page.getByTestId('result-interpretation')).toContainText('Normal Calcium')
  })

  test('hypercalcemia: total 11.5, albumin 4.0 → hypercalcemia', async ({ page }) => {
    await page.getByTestId('input-total-ca').fill('11.5')
    await page.getByTestId('input-albumin').fill('4.0')
    await expect(page.getByTestId('result-interpretation')).toContainText('Hypercalcemia')
  })

  test('reference ranges heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Reference Ranges/ })).toBeVisible()
  })
})

test.describe('Corrected Calcium DE blog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/korrigiertes-calcium-rechner')
  })

  test('page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/Korrigiertes Calcium/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Korrigiertes Calcium')
  })

  test('CTA link navigates to calculator', async ({ page }) => {
    await page.getByRole('link', { name: /Zum Korrigiertes-Calcium-Rechner/ }).click()
    await expect(page).toHaveURL(/korrigiertes-calcium-rechner/)
  })
})

test.describe('Corrected Calcium EN blog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/corrected-calcium-calculator')
  })

  test('page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/Corrected Calcium/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Corrected Calcium')
  })

  test('CTA link navigates to calculator', async ({ page }) => {
    await page.getByRole('link', { name: /Open the Corrected Calcium Calculator/ }).click()
    await expect(page).toHaveURL(/corrected-calcium-calculator/)
  })
})
