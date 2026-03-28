import { test, expect } from '@playwright/test'

test.describe('Calorie Deficit Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('kaloriendefizit-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Kaloriendefizit/)
  })

  test('shows all input fields', async ({ page }) => {
    await expect(page.getByLabel(/Alter/i)).toBeVisible()
    await expect(page.getByLabel(/Größe/i)).toBeVisible()
    await expect(page.getByLabel('Gewicht (kg)', { exact: true })).toBeVisible()
    await expect(page.getByLabel('Zielgewicht (kg)')).toBeVisible()
    await expect(page.getByLabel(/Zeitraum/i)).toBeVisible()
    await expect(page.getByLabel(/Aktivität/i)).toBeVisible()
  })

  test('calculates correct daily calorie target for normal case', async ({ page }) => {
    // Male, 30y, 180cm, 90kg, target 80kg, 12 weeks, moderately active
    // BMR = 10*90 + 6.25*180 - 5*30 + 5 = 1880
    // TDEE = 1880 * 1.55 = 2914
    // Total deficit = 10 * 7700 = 77000
    // Daily deficit = 77000 / 84 = ~917
    // Daily target = 2914 - 917 = ~1997
    await page.getByRole('button', { name: /Mann/i }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel('Gewicht (kg)', { exact: true }).fill('90')
    await page.getByLabel('Zielgewicht (kg)').fill('80')
    await page.getByLabel(/Zeitraum/i).fill('12')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.55' })

    const target = page.getByTestId('daily-calories')
    await expect(target).toBeVisible()
    const text = await target.textContent()
    const value = parseInt(text.replace(/\D/g, ''))
    expect(value).toBeGreaterThanOrEqual(1950)
    expect(value).toBeLessThanOrEqual(2050)
  })

  test('shows daily deficit amount', async ({ page }) => {
    await page.getByRole('button', { name: /Mann/i }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel('Gewicht (kg)', { exact: true }).fill('90')
    await page.getByLabel('Zielgewicht (kg)').fill('80')
    await page.getByLabel(/Zeitraum/i).fill('12')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.55' })

    const deficit = page.getByTestId('daily-deficit')
    await expect(deficit).toBeVisible()
    const text = await deficit.textContent()
    const value = parseInt(text.replace(/\D/g, ''))
    expect(value).toBeGreaterThanOrEqual(870)
    expect(value).toBeLessThanOrEqual(970)
  })

  test('shows weekly weight loss rate', async ({ page }) => {
    await page.getByRole('button', { name: /Mann/i }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel('Gewicht (kg)', { exact: true }).fill('90')
    await page.getByLabel('Zielgewicht (kg)').fill('80')
    await page.getByLabel(/Zeitraum/i).fill('12')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.55' })

    const rate = page.getByTestId('weekly-loss')
    await expect(rate).toBeVisible()
    const text = await rate.textContent()
    expect(text).toMatch(/0[,.]8/)
  })

  test('shows warning for unsafe deficit below 1200 kcal', async ({ page }) => {
    // Female, 25y, 160cm, 55kg, target 45kg, 4 weeks, sedentary
    // TDEE ≈ 1517, daily deficit = 2750 → target = -1233
    await page.getByRole('button', { name: /Frau/i }).click()
    await page.getByLabel(/Alter/i).fill('25')
    await page.getByLabel(/Größe/i).fill('160')
    await page.getByLabel('Gewicht (kg)', { exact: true }).fill('55')
    await page.getByLabel('Zielgewicht (kg)').fill('45')
    await page.getByLabel(/Zeitraum/i).fill('4')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.2' })

    const warning = page.getByTestId('warning-unsafe')
    await expect(warning).toBeVisible()
  })

  test('shows warning for aggressive loss over 1 kg per week', async ({ page }) => {
    // Same unsafe case: 10kg in 4 weeks = 2.5 kg/week
    await page.getByRole('button', { name: /Frau/i }).click()
    await page.getByLabel(/Alter/i).fill('25')
    await page.getByLabel(/Größe/i).fill('160')
    await page.getByLabel('Gewicht (kg)', { exact: true }).fill('55')
    await page.getByLabel('Zielgewicht (kg)').fill('45')
    await page.getByLabel(/Zeitraum/i).fill('4')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.2' })

    const warning = page.getByTestId('warning-aggressive')
    await expect(warning).toBeVisible()
  })

  test('no warnings for safe deficit', async ({ page }) => {
    await page.getByRole('button', { name: /Mann/i }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel('Gewicht (kg)', { exact: true }).fill('90')
    await page.getByLabel('Zielgewicht (kg)').fill('80')
    await page.getByLabel(/Zeitraum/i).fill('12')
    await page.getByLabel(/Aktivität/i).selectOption({ value: '1.55' })

    await expect(page.getByTestId('daily-calories')).toBeVisible()
    await expect(page.getByTestId('warning-unsafe')).not.toBeVisible()
    await expect(page.getByTestId('warning-aggressive')).not.toBeVisible()
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/health-calculators\/$/)
  })
})
