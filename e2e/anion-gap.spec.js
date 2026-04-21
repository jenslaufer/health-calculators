import { test, expect } from '@playwright/test'

test.describe('Anion Gap Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/anionenluecke-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Anionenlücke/)
  })

  test('h1 contains Anionenlücke', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Anionenlücken-Rechner')
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('results hidden before input', async ({ page }) => {
    await expect(page.getByTestId('result-ag')).not.toBeVisible()
  })

  test('normal AG: Na 140, Cl 104, HCO3 26 → AG 10.0', async ({ page }) => {
    await page.getByTestId('input-na').fill('140')
    await page.getByTestId('input-cl').fill('104')
    await page.getByTestId('input-hco3').fill('26')
    await expect(page.getByTestId('result-ag')).toBeVisible()
    const ag = await page.getByTestId('result-ag').textContent()
    expect(parseFloat(ag)).toBeCloseTo(10, 0)
    await expect(page.getByTestId('result-interpretation')).toContainText('Normal')
  })

  test('high AG: Na 135, Cl 95, HCO3 10 → AG 30.0, high interpretation', async ({ page }) => {
    await page.getByTestId('input-na').fill('135')
    await page.getByTestId('input-cl').fill('95')
    await page.getByTestId('input-hco3').fill('10')
    const ag = await page.getByTestId('result-ag').textContent()
    expect(parseFloat(ag)).toBeCloseTo(30, 0)
    await expect(page.getByTestId('result-interpretation')).toContainText('Hohe Anionenlücke')
  })

  test('low AG shows low interpretation', async ({ page }) => {
    await page.getByTestId('input-na').fill('130')
    await page.getByTestId('input-cl').fill('115')
    await page.getByTestId('input-hco3').fill('22')
    await expect(page.getByTestId('result-interpretation')).toContainText('Niedrige Anionenlücke')
  })

  test('mild AG shows mild interpretation', async ({ page }) => {
    await page.getByTestId('input-na').fill('140')
    await page.getByTestId('input-cl').fill('100')
    await page.getByTestId('input-hco3').fill('24')
    await expect(page.getByTestId('result-interpretation')).toContainText('Leicht erhöhte Anionenlücke')
  })

  test('albumin input shows corrected AG', async ({ page }) => {
    await page.getByTestId('input-na').fill('140')
    await page.getByTestId('input-cl').fill('104')
    await page.getByTestId('input-hco3').fill('26')
    await expect(page.getByTestId('result-corrected-ag')).not.toBeVisible()
    await page.getByTestId('input-albumin').fill('2.0')
    await expect(page.getByTestId('result-corrected-ag')).toBeVisible()
    const corrected = await page.getByTestId('result-corrected-ag').textContent()
    expect(parseFloat(corrected)).toBeCloseTo(15, 0)
  })

  test('no albumin → no corrected AG shown', async ({ page }) => {
    await page.getByTestId('input-na').fill('140')
    await page.getByTestId('input-cl').fill('104')
    await page.getByTestId('input-hco3').fill('26')
    await expect(page.getByTestId('result-corrected-ag')).not.toBeVisible()
  })

  test('plausibility warning shown for out-of-range Na', async ({ page }) => {
    await page.getByTestId('input-na').fill('170')
    await page.getByTestId('input-cl').fill('102')
    await page.getByTestId('input-hco3').fill('24')
    await expect(page.getByTestId('warning-plausibility')).toBeVisible()
  })

  test('no plausibility warning for normal values', async ({ page }) => {
    await page.getByTestId('input-na').fill('140')
    await page.getByTestId('input-cl').fill('102')
    await page.getByTestId('input-hco3').fill('24')
    await expect(page.getByTestId('warning-plausibility')).not.toBeVisible()
  })

  test('clinical hint is visible after result', async ({ page }) => {
    await page.getByTestId('input-na').fill('140')
    await page.getByTestId('input-cl').fill('104')
    await page.getByTestId('input-hco3').fill('26')
    await expect(page.getByTestId('result-hint')).toBeVisible()
  })

  test('reference ranges table is always visible', async ({ page }) => {
    await expect(page.getByText('Referenzbereiche')).toBeVisible()
  })
})

test.describe('Anion Gap Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/anion-gap-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Anion Gap/)
  })

  test('h1 contains Anion Gap', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Anion Gap Calculator')
  })

  test('normal AG: Na 140, Cl 104, HCO3 26 → Normal', async ({ page }) => {
    await page.getByTestId('input-na').fill('140')
    await page.getByTestId('input-cl').fill('104')
    await page.getByTestId('input-hco3').fill('26')
    await expect(page.getByTestId('result-interpretation')).toContainText('Normal Anion Gap')
  })

  test('high AG shows high AG metabolic acidosis', async ({ page }) => {
    await page.getByTestId('input-na').fill('135')
    await page.getByTestId('input-cl').fill('95')
    await page.getByTestId('input-hco3').fill('10')
    await expect(page.getByTestId('result-interpretation')).toContainText('High Anion Gap')
  })

  test('reference ranges table is always visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Reference Ranges' })).toBeVisible()
  })
})

test.describe('Anion Gap DE blog article', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/anionenluecke-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Anionenlücke/)
  })

  test('h1 contains Anionenlücke', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Anionenlücke')
  })

  test('CTA link navigates to calculator', async ({ page }) => {
    await page.getByRole('link', { name: /Anionenlücken-Rechner/ }).click()
    await expect(page).toHaveURL(/anionenluecke-rechner/)
  })
})

test.describe('Anion Gap EN blog article', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/anion-gap')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Anion Gap/)
  })

  test('h1 contains Anion Gap', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Anion Gap')
  })

  test('CTA link navigates to calculator', async ({ page }) => {
    await page.getByRole('link', { name: /Anion Gap Calculator/ }).click()
    await expect(page).toHaveURL(/anion-gap-calculator/)
  })
})
