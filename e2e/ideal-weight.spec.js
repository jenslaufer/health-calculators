import { test, expect } from '@playwright/test'

test.describe('Ideal Weight Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ideal-weight')
  })

  // ---------------------------------------------------------------------------
  // 1. Page loads with correct title
  // ---------------------------------------------------------------------------
  test('page has title containing "Ideal Weight Calculator"', async ({ page }) => {
    await expect(page).toHaveTitle(/Ideal Weight Calculator/i)
  })

  // ---------------------------------------------------------------------------
  // 2. Male 180 cm shows results from all four formulas
  // ---------------------------------------------------------------------------
  test('male 180 cm shows all four formula names', async ({ page }) => {
    await page.getByRole('button', { name: 'Male', exact: true }).click()
    await page.getByPlaceholder('170').fill('180')

    for (const formula of ['Devine', 'Robinson', 'Miller', 'Hamwi']) {
      await expect(page.getByText(formula)).toBeVisible()
    }
  })

  // ---------------------------------------------------------------------------
  // 3. Average is between min and max
  // ---------------------------------------------------------------------------
  test('average is between min and max for male 180 cm', async ({ page }) => {
    await page.getByRole('button', { name: 'Male', exact: true }).click()
    await page.getByPlaceholder('170').fill('180')

    // Range text is rendered as "X – Y kg". Grab raw text from a single element
    // that contains both numbers and the dash so we can parse min/max reliably.
    const rangeLocator = page.getByText(/\d+(?:\.\d+)?\s*[–-]\s*\d+(?:\.\d+)?\s*kg/i).first()
    await expect(rangeLocator).toBeVisible()

    const rangeText = await rangeLocator.textContent()
    const [minStr, maxStr] = rangeText.match(/(\d+(?:\.\d+)?)/g)
    const min = parseFloat(minStr)
    const max = parseFloat(maxStr)

    // Average is displayed as a prominent standalone number (large heading).
    // Grab the first numeric text inside the results section.
    const avgLocator = page.getByTestId('results').getByText(/^\d+(\.\d+)?$/).first()
    const avgText = await avgLocator.textContent()
    const avg = parseFloat(avgText.trim())

    expect(avg).toBeGreaterThanOrEqual(min)
    expect(avg).toBeLessThanOrEqual(max)
  })

  // ---------------------------------------------------------------------------
  // 4. Devine formula value ≈ 75 kg for male 180 cm
  //    180 cm = 70.87 in  →  50 + 2.3 * (70.87 – 60) = 75.0 kg
  // ---------------------------------------------------------------------------
  test('Devine formula shows approximately 75 kg for male 180 cm', async ({ page }) => {
    await page.getByRole('button', { name: 'Male', exact: true }).click()
    await page.getByPlaceholder('170').fill('180')

    // Find the row containing "Devine" and extract the weight value.
    const devineRow = page.getByText('Devine').locator('..').locator('..')
    const devineValueText = await devineRow.textContent()

    // Match the number right before "kg" to avoid picking up the year.
    const match = devineValueText.match(/([\d.]+)\s*kg/i)
    expect(match).not.toBeNull()
    const value = parseFloat(match[1])

    expect(value).toBeGreaterThanOrEqual(73)
    expect(value).toBeLessThanOrEqual(77)
  })

  // ---------------------------------------------------------------------------
  // 5. Switching gender changes results
  // ---------------------------------------------------------------------------
  test('switching gender changes results', async ({ page }) => {
    await page.getByPlaceholder('170').fill('180')
    await page.getByRole('button', { name: 'Male', exact: true }).click()

    const resultsSection = page.getByTestId('results')
    const maleText = await resultsSection.textContent()

    await page.getByRole('button', { name: 'Female' }).click()
    const femaleText = await resultsSection.textContent()

    expect(maleText).not.toEqual(femaleText)
  })

  // ---------------------------------------------------------------------------
  // 6. Imperial unit toggle shows lbs
  // ---------------------------------------------------------------------------
  test('switching to imperial shows lbs in results', async ({ page }) => {
    await page.getByRole('button', { name: 'Imperial' }).click()
    await page.getByPlaceholder('67').fill('70')

    await expect(page.getByTestId('results').getByText(/lbs/i).first()).toBeVisible()
  })

  // ---------------------------------------------------------------------------
  // 7. Healthy BMI range is shown
  // ---------------------------------------------------------------------------
  test('shows healthy BMI weight range after entering height', async ({ page }) => {
    await page.getByPlaceholder('170').fill('180')

    // Expect a visible element whose text mentions BMI and contains a weight range.
    await expect(
      page.getByText(/BMI/i).filter({ hasText: /\d+/ }).first()
    ).toBeVisible()
  })

  // ---------------------------------------------------------------------------
  // 8. Back link navigates to home
  // ---------------------------------------------------------------------------
  test('back link navigates to home', async ({ page }) => {
    await page.locator('a', { hasText: '← All Calculators' }).click()
    await expect(page).toHaveURL('/')
  })
})
