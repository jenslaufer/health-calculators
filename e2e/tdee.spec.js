import { test, expect } from '@playwright/test'

test.describe('TDEE Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/tdee-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/TDEE-Rechner/)
  })

  test('metric inputs show cm/kg', async ({ page }) => {
    await expect(page.getByText('Größe (cm)')).toBeVisible()
    await expect(page.getByText('Gewicht (kg)')).toBeVisible()
  })

  test('imperial inputs show inches/lbs', async ({ page }) => {
    await page.getByRole('button', { name: 'Imperial' }).click()
    await expect(page.getByText(/Größe \(Zoll\)/)).toBeVisible()
    await expect(page.getByText(/Gewicht \(lbs\)/)).toBeVisible()
  })

  test('entering valid data shows TDEE result approximately 2759 kcal', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('80')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.55' })

    const tdeeResult = page.getByTestId('tdee-result')
    await expect(tdeeResult).toBeVisible()

    const tdeeText = await tdeeResult.textContent()
    const tdeeValue = parseInt(tdeeText.replace(/,/g, ''))
    expect(tdeeValue).toBeGreaterThanOrEqual(2709)
    expect(tdeeValue).toBeLessThanOrEqual(2809)
  })

  test('BMR is shown below TDEE', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('80')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.55' })

    await expect(page.getByTestId('bmr-result')).toBeVisible()
  })

  test('deficit/maintenance/surplus targets are displayed', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('80')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.55' })

    await expect(page.getByText('Abnehmen', { exact: true })).toBeVisible()
    await expect(page.getByText('Halten', { exact: true })).toBeVisible()
    await expect(page.getByText('Zunehmen', { exact: true })).toBeVisible()
  })

  test('switching units recalculates correctly', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('80')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.55' })

    const metricResult = await page.getByTestId('tdee-result').textContent()

    await page.getByRole('button', { name: 'Imperial' }).click()
    await page.getByLabel(/Größe/i).fill('70.87')
    await page.getByLabel(/Gewicht/i).fill('176.37')

    const imperialResult = await page.getByTestId('tdee-result').textContent()
    const metricVal = parseInt(metricResult.replace(/,/g, ''))
    const imperialVal = parseInt(imperialResult.replace(/,/g, ''))

    expect(Math.abs(metricVal - imperialVal)).toBeLessThanOrEqual(10)
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })
})
