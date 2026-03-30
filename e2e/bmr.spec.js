import { test, expect } from '@playwright/test'

test.describe('BMR Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/bmr-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Grundumsatz-Rechner/)
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

  test('formula selector defaults to Mifflin-St Jeor', async ({ page }) => {
    const select = page.getByLabel(/Formel|Methode/i)
    await expect(select).toBeVisible()
  })

  test('Mifflin-St Jeor male 30y 180cm 80kg gives BMR ~1780', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('80')

    const bmrResult = page.getByTestId('bmr-result')
    await expect(bmrResult).toBeVisible()

    const bmrText = await bmrResult.textContent()
    const bmrValue = parseInt(bmrText.replace(/[.,]/g, '').match(/\d+/)[0])
    // Mifflin-St Jeor: 10*80 + 6.25*180 - 5*30 + 5 = 800 + 1125 - 150 + 5 = 1780
    expect(bmrValue).toBeGreaterThanOrEqual(1730)
    expect(bmrValue).toBeLessThanOrEqual(1830)
  })

  test('Mifflin-St Jeor female 25y 165cm 60kg gives BMR ~1354', async ({ page }) => {
    await page.getByRole('button', { name: 'Frau', exact: true }).click()
    await page.getByLabel(/Alter/i).fill('25')
    await page.getByLabel(/Größe/i).fill('165')
    await page.getByLabel(/Gewicht/i).fill('60')

    const bmrResult = page.getByTestId('bmr-result')
    await expect(bmrResult).toBeVisible()

    const bmrText = await bmrResult.textContent()
    const bmrValue = parseInt(bmrText.replace(/[.,]/g, '').match(/\d+/)[0])
    // Mifflin-St Jeor: 10*60 + 6.25*165 - 5*25 - 161 = 600 + 1031.25 - 125 - 161 = 1345
    expect(bmrValue).toBeGreaterThanOrEqual(1295)
    expect(bmrValue).toBeLessThanOrEqual(1395)
  })

  test('activity-adjusted estimates are shown', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('80')

    await expect(page.getByTestId('activity-estimates')).toBeVisible()
    await expect(page.getByText(/Sitzend/)).toBeVisible()
    await expect(page.getByText(/Sehr aktiv/)).toBeVisible()
  })

  test('Harris-Benedict formula gives different result', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('80')

    const mifflinText = await page.getByTestId('bmr-result').textContent()
    const mifflinValue = parseInt(mifflinText.replace(/[.,]/g, '').match(/\d+/)[0])

    await page.getByLabel(/Formel|Methode/i).selectOption('harris-benedict')

    const harrisText = await page.getByTestId('bmr-result').textContent()
    const harrisValue = parseInt(harrisText.replace(/[.,]/g, '').match(/\d+/)[0])

    // Harris-Benedict revised: 13.397*80 + 4.799*180 - 5.677*30 + 88.362 = 1071.76 + 863.82 - 170.31 + 88.362 = 1853.6
    expect(harrisValue).toBeGreaterThanOrEqual(1803)
    expect(harrisValue).toBeLessThanOrEqual(1903)
    expect(harrisValue).not.toBe(mifflinValue)
  })

  test('switching units recalculates correctly', async ({ page }) => {
    await page.getByRole('button', { name: 'Mann', exact: true }).click()
    await page.getByLabel(/Alter/i).fill('30')
    await page.getByLabel(/Größe/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('80')

    const metricResult = await page.getByTestId('bmr-result').textContent()

    await page.getByRole('button', { name: 'Imperial' }).click()
    await page.getByLabel(/Größe/i).fill('70.87')
    await page.getByLabel(/Gewicht/i).fill('176.37')

    const imperialResult = await page.getByTestId('bmr-result').textContent()
    const metricVal = parseInt(metricResult.replace(/[.,]/g, '').match(/\d+/)[0])
    const imperialVal = parseInt(imperialResult.replace(/[.,]/g, '').match(/\d+/)[0])

    expect(Math.abs(metricVal - imperialVal)).toBeLessThanOrEqual(10)
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/health-calculators\/de\/?$/)
  })
})
