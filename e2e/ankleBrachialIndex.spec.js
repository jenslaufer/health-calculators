import { test, expect } from '@playwright/test'

test.describe('Ankle-Brachial Index Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/knoechel-arm-index-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Knöchel-Arm-Index/)
  })

  test('h1 contains Knöchel-Arm-Index', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Knöchel-Arm-Index')
  })

  test('back link navigates to home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('no result shown before inputs', async ({ page }) => {
    await expect(page.getByTestId('result-card')).toHaveCount(0)
  })

  test('normal case: arms 130/130, ankles 140/140 → 1.08 normal', async ({ page }) => {
    await page.getByTestId('left-arm-input').fill('130')
    await page.getByTestId('right-arm-input').fill('130')
    await page.getByTestId('left-ankle-input').fill('140')
    await page.getByTestId('right-ankle-input').fill('140')

    await expect(page.getByTestId('overall-value')).toHaveText('1.08')
    await expect(page.getByTestId('band')).toHaveText('Normal')
  })

  test('asymmetric: left PAD detected via overall ABI', async ({ page }) => {
    await page.getByTestId('left-arm-input').fill('130')
    await page.getByTestId('right-arm-input').fill('135')
    await page.getByTestId('left-ankle-input').fill('90')
    await page.getByTestId('right-ankle-input').fill('140')

    await expect(page.getByTestId('left-value')).toHaveText('0.67')
    await expect(page.getByTestId('right-value')).toHaveText('1.04')
    await expect(page.getByTestId('band')).toHaveText('Mittel')
  })

  test('severe band Left=140/140 Ankles=60/60 → 0.43 severely reduced', async ({ page }) => {
    await page.getByTestId('left-arm-input').fill('140')
    await page.getByTestId('right-arm-input').fill('140')
    await page.getByTestId('left-ankle-input').fill('60')
    await page.getByTestId('right-ankle-input').fill('60')

    await expect(page.getByTestId('band')).toHaveText('Schwer reduziert')
  })

  test('non-compressible vessels: ankles 220, arms 140 → > 1.4', async ({ page }) => {
    await page.getByTestId('left-arm-input').fill('140')
    await page.getByTestId('right-arm-input').fill('140')
    await page.getByTestId('left-ankle-input').fill('220')
    await page.getByTestId('right-ankle-input').fill('220')

    await expect(page.getByTestId('band')).toHaveText('Nicht komprimierbar')
  })

  test('related calculators block is visible', async ({ page }) => {
    await expect(page.getByTestId('related-calculators')).toBeVisible()
  })

  test('blog article link is visible', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('Ankle-Brachial Index Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/ankle-brachial-index')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Ankle-Brachial Index/)
  })

  test('normal case: arms 120/120, ankles 130/130 → normal', async ({ page }) => {
    await page.getByTestId('left-arm-input').fill('120')
    await page.getByTestId('right-arm-input').fill('120')
    await page.getByTestId('left-ankle-input').fill('130')
    await page.getByTestId('right-ankle-input').fill('130')

    await expect(page.getByTestId('overall-value')).toHaveText('1.08')
    await expect(page.getByTestId('band')).toHaveText('Normal')
  })

  test('moderate PAD: ankles 90, arms 140 → 0.64 moderate', async ({ page }) => {
    await page.getByTestId('left-arm-input').fill('140')
    await page.getByTestId('right-arm-input').fill('140')
    await page.getByTestId('left-ankle-input').fill('90')
    await page.getByTestId('right-ankle-input').fill('90')

    await expect(page.getByTestId('band')).toHaveText('Moderate')
  })
})
