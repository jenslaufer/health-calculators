import { test, expect } from '@playwright/test'

test.describe('Body Type Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/koerpertyp-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/K.rpertyp/)
  })

  test('measurements mode is selected by default', async ({ page }) => {
    const measurementsBtn = page.getByRole('button', { name: 'Messungen' })
    await expect(measurementsBtn).toHaveClass(/bg-stone-900/)
  })

  test('metric unit is selected by default', async ({ page }) => {
    const metricBtn = page.getByRole('button', { name: 'Metrisch' })
    await expect(metricBtn).toHaveClass(/bg-stone-900/)
  })

  test('wrist and shoulder inputs visible in measurements mode', async ({ page }) => {
    await expect(page.getByLabel(/Handgelenkumfang/i)).toBeVisible()
    await expect(page.getByLabel(/Schulterbreite/i)).toBeVisible()
  })

  test('questionnaire inputs visible in quick mode', async ({ page }) => {
    await page.getByRole('button', { name: 'Schnelltest' }).click()
    await expect(page.getByText(/Wie leicht baust du Muskeln/i)).toBeVisible()
    await expect(page.getByText(/Wie leicht nimmst du K.rperfett/i)).toBeVisible()
  })

  test('measurements inputs hidden in quick mode', async ({ page }) => {
    await page.getByRole('button', { name: 'Schnelltest' }).click()
    await expect(page.getByLabel(/Handgelenkumfang/i)).not.toBeVisible()
  })

  test('no result shown without inputs', async ({ page }) => {
    await expect(page.getByTestId('body-type-result')).not.toBeVisible()
  })

  test('ectomorphic male — lean runner produces ectomorph result', async ({ page }) => {
    await page.getByLabel(/Gr..e/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('63')
    await page.getByLabel(/Handgelenkumfang/i).fill('15')
    await page.getByLabel(/Schulterbreite/i).fill('37')

    const result = page.getByTestId('body-type-result')
    await expect(result).toBeVisible()
    const text = await result.textContent()
    expect(text).toContain('Ektomorph')
  })

  test('shows somatotype component scores (ecto, meso, endo)', async ({ page }) => {
    await page.getByLabel(/Gr..e/i).fill('175')
    await page.getByLabel(/Gewicht/i).fill('75')

    await expect(page.getByTestId('ecto-score')).toBeVisible()
    await expect(page.getByTestId('meso-score')).toBeVisible()
    await expect(page.getByTestId('endo-score')).toBeVisible()
  })

  test('shows training recommendations after calculation', async ({ page }) => {
    await page.getByLabel(/Gr..e/i).fill('175')
    await page.getByLabel(/Gewicht/i).fill('75')

    await expect(page.getByText(/Trainingsempfehlungen/i)).toBeVisible()
  })

  test('shows nutrition recommendations after calculation', async ({ page }) => {
    await page.getByLabel(/Gr..e/i).fill('175')
    await page.getByLabel(/Gewicht/i).fill('75')

    await expect(page.getByText(/Ern.hrungsempfehlungen/i)).toBeVisible()
  })

  test('switching to imperial changes input labels', async ({ page }) => {
    await page.getByRole('button', { name: 'Imperial' }).click()
    await expect(page.getByText(/Gr..e \(Zoll\)/i)).toBeVisible()
    await expect(page.getByText(/Gewicht \(lbs\)/i)).toBeVisible()
  })

  test('imperial inputs produce same somatotype as metric equivalents', async ({ page }) => {
    // Enter metric values
    await page.getByLabel(/Gr..e/i).fill('180')
    await page.getByLabel(/Gewicht/i).fill('75')

    const metricResult = await page.getByTestId('ecto-score').textContent()

    // Switch to imperial and enter equivalent values (180cm = 70.87in, 75kg = 165.3lbs)
    await page.getByRole('button', { name: 'Imperial' }).click()
    await page.getByLabel(/Gr..e/i).fill('70.9')
    await page.getByLabel(/Gewicht/i).fill('165.3')

    const imperialResult = await page.getByTestId('ecto-score').textContent()

    // Ectomorphy scores should be very close
    const metricEcto = parseFloat(metricResult)
    const imperialEcto = parseFloat(imperialResult)
    expect(Math.abs(metricEcto - imperialEcto)).toBeLessThan(0.2)
  })

  test('quick mode — easy fat gain shifts toward endomorph', async ({ page }) => {
    await page.getByRole('button', { name: 'Schnelltest' }).click()
    await page.getByLabel(/Gr..e/i).fill('175')
    await page.getByLabel(/Gewicht/i).fill('75')

    // Select "easy" fat gain
    const fatTendencyButtons = page.locator('text=Wie leicht nimmst du').locator('..').getByRole('button', { name: 'Leicht' })
    await fatTendencyButtons.click()

    const endoScore = await page.getByTestId('endo-score').textContent()
    expect(parseFloat(endoScore)).toBeGreaterThan(2)
  })

  test('body fat % input refines endomorphy score', async ({ page }) => {
    await page.getByLabel(/Gr..e/i).fill('175')
    await page.getByLabel(/Gewicht/i).fill('75')

    const endoWithoutBf = parseFloat(await page.getByTestId('endo-score').textContent())

    // Enter high body fat %
    await page.getByLabel(/K.rperfettanteil/i).fill('30')
    const endoWithBf = parseFloat(await page.getByTestId('endo-score').textContent())

    // 30% BF should give higher endomorphy than BMI-based estimate for this weight
    expect(endoWithBf).toBeGreaterThan(endoWithoutBf)
  })
})

test.describe('Body Type Calculator — English', () => {
  test('EN page loads at correct URL', async ({ page }) => {
    await page.goto('en/body-type-calculator')
    await expect(page).toHaveTitle(/Body Type/)
  })

  test('EN page shows English labels', async ({ page }) => {
    await page.goto('en/body-type-calculator')
    await expect(page.getByRole('button', { name: 'Measurements' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Quick' })).toBeVisible()
  })

  test('EN mesomorph result — athletic build', async ({ page }) => {
    await page.goto('en/body-type-calculator')
    await page.getByLabel(/Height/i).fill('175')
    await page.getByLabel(/Weight/i).fill('80')
    await page.getByLabel(/Wrist/i).fill('18')
    await page.getByLabel(/Shoulder/i).fill('46')

    const result = page.getByTestId('body-type-result')
    await expect(result).toBeVisible()
    const text = await result.textContent()
    // Should be mesomorph or mixed type (not ectomorph for this build)
    expect(text).not.toContain('Ectomorph')
  })
})

test.describe('Body Type blog articles', () => {
  test('DE blog article loads', async ({ page }) => {
    await page.goto('de/blog/koerpertyp-bestimmen')
    await expect(page).toHaveTitle(/K.rpertyp bestimmen/)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('EN blog article loads', async ({ page }) => {
    await page.goto('en/blog/body-type-calculator')
    await expect(page).toHaveTitle(/Body Type Calculator/)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('DE blog article contains CTA link to calculator', async ({ page }) => {
    await page.goto('de/blog/koerpertyp-bestimmen')
    await expect(page.getByRole('link', { name: /K.rpertyp bestimmen/i })).toBeVisible()
  })

  test('EN blog article contains CTA link to calculator', async ({ page }) => {
    await page.goto('en/blog/body-type-calculator')
    await expect(page.getByRole('link', { name: /Calculate your body type/i })).toBeVisible()
  })
})
