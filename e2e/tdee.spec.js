import { test, expect } from '@playwright/test'

test.describe('TDEE Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tdee')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle('TDEE Calculator — Free Daily Calorie Needs Calculator')
  })

  test('metric inputs show cm/kg', async ({ page }) => {
    await expect(page.getByText('Height (cm)')).toBeVisible()
    await expect(page.getByText('Weight (kg)')).toBeVisible()
  })

  test('imperial inputs show inches/lbs', async ({ page }) => {
    await page.getByRole('button', { name: 'Imperial' }).click()
    await expect(page.getByText('Height (inches)')).toBeVisible()
    await expect(page.getByText('Weight (lbs)')).toBeVisible()
  })

  test('entering valid data shows TDEE result approximately 2759 kcal', async ({ page }) => {
    // Male, 30 years, 180cm, 80kg, moderately active
    // BMR = 10*80 + 6.25*180 - 5*30 + 5 = 1780
    // TDEE = 1780 * 1.55 = 2759
    await page.getByRole('button', { name: 'Male', exact: true }).click()
    await page.getByLabel(/age/i).fill('30')
    await page.getByLabel(/height/i).fill('180')
    await page.getByLabel(/weight/i).fill('80')
    await page.getByLabel(/activity/i).selectOption({ label: 'Moderately active (3-5 days/week)' })

    const tdeeResult = page.getByTestId('tdee-result')
    await expect(tdeeResult).toBeVisible()

    const tdeeText = await tdeeResult.textContent()
    const tdeeValue = parseInt(tdeeText.replace(/,/g, ''))
    expect(tdeeValue).toBeGreaterThanOrEqual(2709)
    expect(tdeeValue).toBeLessThanOrEqual(2809)
  })

  test('BMR is shown below TDEE', async ({ page }) => {
    await page.getByRole('button', { name: 'Male', exact: true }).click()
    await page.getByLabel(/age/i).fill('30')
    await page.getByLabel(/height/i).fill('180')
    await page.getByLabel(/weight/i).fill('80')
    await page.getByLabel(/activity/i).selectOption({ label: 'Moderately active (3-5 days/week)' })

    await expect(page.getByTestId('bmr-result')).toBeVisible()
  })

  test('deficit/maintenance/surplus targets are displayed', async ({ page }) => {
    await page.getByRole('button', { name: 'Male', exact: true }).click()
    await page.getByLabel(/age/i).fill('30')
    await page.getByLabel(/height/i).fill('180')
    await page.getByLabel(/weight/i).fill('80')
    await page.getByLabel(/activity/i).selectOption({ label: 'Moderately active (3-5 days/week)' })

    await expect(page.getByText('Weight Loss')).toBeVisible()
    await expect(page.getByText('Maintenance')).toBeVisible()
    await expect(page.getByText('Weight Gain')).toBeVisible()
  })

  test('switching units recalculates correctly', async ({ page }) => {
    // Enter metric values first
    await page.getByRole('button', { name: 'Male', exact: true }).click()
    await page.getByLabel(/age/i).fill('30')
    await page.getByLabel(/height/i).fill('180')
    await page.getByLabel(/weight/i).fill('80')
    await page.getByLabel(/activity/i).selectOption({ label: 'Moderately active (3-5 days/week)' })

    const metricResult = await page.getByTestId('tdee-result').textContent()

    // Switch to imperial and enter equivalent values (70.87 inches, 176.37 lbs)
    await page.getByRole('button', { name: 'Imperial' }).click()
    await page.getByLabel(/height/i).fill('70.87')
    await page.getByLabel(/weight/i).fill('176.37')

    const imperialResult = await page.getByTestId('tdee-result').textContent()
    const metricVal = parseInt(metricResult.replace(/,/g, ''))
    const imperialVal = parseInt(imperialResult.replace(/,/g, ''))

    // Should be approximately equal (within 10 kcal due to rounding)
    expect(Math.abs(metricVal - imperialVal)).toBeLessThanOrEqual(10)
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByText('← All Calculators').click()
    await expect(page).toHaveURL('/')
  })
})
