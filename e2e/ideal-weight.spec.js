import { test, expect } from '@playwright/test'

test.describe('Ideal Weight Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/idealgewicht-rechner')
  })

  test('page has title containing "Idealgewicht"', async ({ page }) => {
    await expect(page).toHaveTitle(/Idealgewicht/)
  })

  test('male 180 cm shows all four formula names', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByPlaceholder('170').fill('180')

    for (const formula of ['Devine', 'Robinson', 'Miller', 'Hamwi']) {
      await expect(page.getByText(formula, { exact: true })).toBeVisible()
    }
  })

  test('average is between min and max for male 180 cm', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByPlaceholder('170').fill('180')

    const rangeLocator = page.getByText(/\d+(?:\.\d+)?\s*[–-]\s*\d+(?:\.\d+)?\s*kg/i).first()
    await expect(rangeLocator).toBeVisible()

    const rangeText = await rangeLocator.textContent()
    const [minStr, maxStr] = rangeText.match(/(\d+(?:\.\d+)?)/g)
    const min = parseFloat(minStr)
    const max = parseFloat(maxStr)

    const avgLocator = page.getByTestId('results').getByText(/^\d+(\.\d+)?$/).first()
    const avgText = await avgLocator.textContent()
    const avg = parseFloat(avgText.trim())

    expect(avg).toBeGreaterThanOrEqual(min)
    expect(avg).toBeLessThanOrEqual(max)
  })

  test('Devine formula shows approximately 75 kg for male 180 cm', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByPlaceholder('170').fill('180')

    const devineRow = page.getByText('Devine', { exact: true }).locator('..').locator('..')
    const devineValueText = await devineRow.textContent()

    const match = devineValueText.match(/([\d.]+)\s*kg/i)
    expect(match).not.toBeNull()
    const value = parseFloat(match[1])

    expect(value).toBeGreaterThanOrEqual(73)
    expect(value).toBeLessThanOrEqual(77)
  })

  test('switching gender changes results', async ({ page }) => {
    await page.getByPlaceholder('170').fill('180')
    await page.getByRole('button', { name: 'Mann', exact: true }).click()

    const resultsSection = page.getByTestId('results')
    const maleText = await resultsSection.textContent()

    await page.getByRole('button', { name: 'Frau' }).click()
    const femaleText = await resultsSection.textContent()

    expect(maleText).not.toEqual(femaleText)
  })

  test('switching to imperial shows lbs in results', async ({ page }) => {
    await page.getByRole('button', { name: 'Imperial' }).click()
    await page.getByPlaceholder('67').fill('70')

    await expect(page.getByTestId('results').getByText(/lbs/i).first()).toBeVisible()
  })

  test('shows healthy BMI weight range after entering height', async ({ page }) => {
    await page.getByPlaceholder('170').fill('180')

    await expect(
      page.getByText(/BMI/i).filter({ hasText: /\d+/ }).first()
    ).toBeVisible()
  })

  test('back link navigates to home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/health-calculators\/de\/?$/)
  })
})
