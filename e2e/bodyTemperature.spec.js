import { test, expect } from '@playwright/test'

test.describe('Body Temperature Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/koerpertemperatur-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/K.rpertemperatur/)
  })

  test('default temperature 37.0 °C shows normal category', async ({ page }) => {
    const badge = page.getByTestId('category-badge')
    await expect(badge).toBeVisible()
    const text = await badge.textContent()
    expect(text).toMatch(/Normal/)
  })

  test('celsius display matches input', async ({ page }) => {
    const input = page.getByTestId('temperature-input')
    await input.fill('38.5')
    await input.dispatchEvent('input')

    const celsiusEl = page.getByTestId('temp-celsius')
    const text = await celsiusEl.textContent()
    expect(parseFloat(text)).toBeCloseTo(38.5, 0)
  })

  test('fahrenheit conversion is correct for 37 °C', async ({ page }) => {
    const input = page.getByTestId('temperature-input')
    await input.fill('37')
    await input.dispatchEvent('input')

    const fEl = page.getByTestId('temp-fahrenheit')
    const text = await fEl.textContent()
    expect(parseFloat(text)).toBeCloseTo(98.6, 0)
  })

  test('fever temperature shows fever badge', async ({ page }) => {
    const input = page.getByTestId('temperature-input')
    await input.fill('38.5')
    await input.dispatchEvent('input')

    const badge = page.getByTestId('category-badge')
    const text = await badge.textContent()
    expect(text).toMatch(/Fieber/)
  })

  test('switching to fahrenheit updates input value', async ({ page }) => {
    await page.getByTestId('unit-fahrenheit').click()
    const input = page.getByTestId('temperature-input')
    const val = parseFloat(await input.inputValue())
    expect(val).toBeCloseTo(98.6, 0)
  })

  test('temperature category section is visible', async ({ page }) => {
    await expect(page.getByTestId('temperature-category')).toBeVisible()
  })
})

test.describe('Body Temperature Calculator (EN)', () => {
  test('EN route loads correctly', async ({ page }) => {
    await page.goto('en/body-temperature-calculator')
    await expect(page).toHaveTitle(/Body Temperature/)
  })

  test('EN default shows Normal category', async ({ page }) => {
    await page.goto('en/body-temperature-calculator')
    const badge = page.getByTestId('category-badge')
    await expect(badge).toBeVisible()
    const text = await badge.textContent()
    expect(text).toMatch(/Normal/)
  })
})
