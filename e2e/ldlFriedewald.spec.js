import { test, expect } from '@playwright/test'

test.describe('LDL Friedewald Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/ldl-friedewald-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/LDL/)
  })

  test('h1 contains LDL', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('LDL')
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('mg/dL is selected by default', async ({ page }) => {
    await expect(page.getByTestId('btn-mg')).toHaveClass(/bg-stone-900/)
  })

  test('no result shown before inputs', async ({ page }) => {
    await expect(page.getByTestId('result-card')).toHaveCount(0)
  })

  test('mg/dL: Total=180 HDL=50 TG=100 → LDL=110, near optimal', async ({ page }) => {
    await page.getByTestId('total-input').fill('180')
    await page.getByTestId('hdl-input').fill('50')
    await page.getByTestId('trig-input').fill('100')

    await expect(page.getByTestId('ldl-value')).toHaveText('110')
    await expect(page.getByTestId('band')).toHaveText('Fast optimal')
  })

  test('mg/dL: Total=240 HDL=40 TG=150 → LDL=170, high band', async ({ page }) => {
    await page.getByTestId('total-input').fill('240')
    await page.getByTestId('hdl-input').fill('40')
    await page.getByTestId('trig-input').fill('150')

    await expect(page.getByTestId('ldl-value')).toHaveText('170')
    await expect(page.getByTestId('band')).toHaveText('Hoch')
    await expect(page.getByTestId('band')).toHaveClass(/text-orange/)
  })

  test('mg/dL: very high band Total=260 HDL=40 TG=100 → LDL=200', async ({ page }) => {
    await page.getByTestId('total-input').fill('260')
    await page.getByTestId('hdl-input').fill('40')
    await page.getByTestId('trig-input').fill('100')

    await expect(page.getByTestId('ldl-value')).toHaveText('200')
    await expect(page.getByTestId('band')).toHaveText('Sehr hoch')
    await expect(page.getByTestId('band')).toHaveClass(/text-red/)
  })

  test('Friedewald invalid warning shows for TG ≥ 400 mg/dL', async ({ page }) => {
    await page.getByTestId('total-input').fill('250')
    await page.getByTestId('hdl-input').fill('40')
    await page.getByTestId('trig-input').fill('420')

    await expect(page.getByTestId('invalid-warning')).toBeVisible()
  })

  test('switching to mmol/L clears inputs and updates labels', async ({ page }) => {
    await page.getByTestId('total-input').fill('200')
    await page.getByTestId('hdl-input').fill('50')
    await page.getByTestId('trig-input').fill('150')

    await page.getByTestId('btn-mmol').click()
    await expect(page.getByTestId('btn-mmol')).toHaveClass(/bg-stone-900/)
    await expect(page.getByTestId('total-input')).toHaveValue('')
    await expect(page.getByTestId('hdl-input')).toHaveValue('')
    await expect(page.getByTestId('trig-input')).toHaveValue('')
  })

  test('mmol/L: Total=6.20 HDL=1.04 TG=1.70 → LDL ≈ 4.39 mmol/L (high band via 170 mg/dL)', async ({ page }) => {
    await page.getByTestId('btn-mmol').click()
    await page.getByTestId('total-input').fill('6.20')
    await page.getByTestId('hdl-input').fill('1.04')
    await page.getByTestId('trig-input').fill('1.70')

    await expect(page.getByTestId('ldl-value')).toHaveText('4.39')
    await expect(page.getByTestId('band')).toHaveText('Hoch')
  })

  test('related calculators block is visible', async ({ page }) => {
    await expect(page.getByTestId('related-calculators')).toBeVisible()
  })

  test('blog article link is visible', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('LDL Friedewald Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/ldl-cholesterol-friedewald')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/LDL/)
  })

  test('mg/dL: Total=200 HDL=50 TG=150 → LDL=120, near optimal', async ({ page }) => {
    await page.getByTestId('total-input').fill('200')
    await page.getByTestId('hdl-input').fill('50')
    await page.getByTestId('trig-input').fill('150')

    await expect(page.getByTestId('ldl-value')).toHaveText('120')
    await expect(page.getByTestId('band')).toHaveText('Near optimal')
  })

  test('very high band Total=260 HDL=40 TG=100 → LDL=200', async ({ page }) => {
    await page.getByTestId('total-input').fill('260')
    await page.getByTestId('hdl-input').fill('40')
    await page.getByTestId('trig-input').fill('100')

    await expect(page.getByTestId('band')).toHaveText('Very high')
  })

  test('invalid warning when TG ≥ 400 mg/dL', async ({ page }) => {
    await page.getByTestId('total-input').fill('250')
    await page.getByTestId('hdl-input').fill('40')
    await page.getByTestId('trig-input').fill('420')

    await expect(page.getByTestId('invalid-warning')).toBeVisible()
  })
})
