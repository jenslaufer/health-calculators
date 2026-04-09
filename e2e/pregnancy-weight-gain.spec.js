import { test, expect } from '@playwright/test'

test.describe('Pregnancy Weight Gain Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/gewichtszunahme-schwangerschaft')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Gewichtszunahme Schwangerschaft/)
  })

  test('h1 contains Schwangerschaft', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Schwangerschaft')
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('singleton is selected by default', async ({ page }) => {
    const singletonBtn = page.getByTestId('btn-singleton')
    await expect(singletonBtn).toHaveClass(/bg-stone-900/)
  })

  test('results hidden before input', async ({ page }) => {
    await expect(page.getByTestId('bmi-result')).not.toBeVisible()
    await expect(page.getByTestId('total-gain-range')).not.toBeVisible()
  })

  test('normal weight woman shows correct gain range', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('65')
    await page.getByTestId('height').fill('170')
    await page.getByTestId('current-week').fill('20')

    await expect(page.getByTestId('bmi-result')).toBeVisible()
    await expect(page.getByTestId('bmi-category')).toContainText('Normalgewicht')
    const range = await page.getByTestId('total-gain-range').textContent()
    expect(range).toContain('11.5')
    expect(range).toContain('16')
  })

  test('overweight woman shows correct gain range', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('78')
    await page.getByTestId('height').fill('170')
    await page.getByTestId('current-week').fill('20')

    await expect(page.getByTestId('bmi-category')).toContainText('Übergewicht')
    const range = await page.getByTestId('total-gain-range').textContent()
    expect(range).toContain('7')
    expect(range).toContain('11.5')
  })

  test('obese woman shows correct gain range', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('95')
    await page.getByTestId('height').fill('170')
    await page.getByTestId('current-week').fill('20')

    await expect(page.getByTestId('bmi-category')).toContainText('Adipositas')
    const range = await page.getByTestId('total-gain-range').textContent()
    expect(range).toContain('5')
    expect(range).toContain('9')
  })

  test('underweight woman shows correct gain range', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('48')
    await page.getByTestId('height').fill('165')
    await page.getByTestId('current-week').fill('20')

    await expect(page.getByTestId('bmi-category')).toContainText('Untergewicht')
    const range = await page.getByTestId('total-gain-range').textContent()
    expect(range).toContain('12.5')
    expect(range).toContain('18')
  })

  test('switching to twins changes gain range', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('65')
    await page.getByTestId('height').fill('170')
    await page.getByTestId('current-week').fill('20')

    // Singleton: 11.5–16 kg
    const singletonRange = await page.getByTestId('total-gain-range').textContent()
    expect(singletonRange).toContain('11.5')

    // Switch to twins
    await page.getByTestId('btn-twins').click()
    await expect(page.getByTestId('btn-twins')).toHaveClass(/bg-stone-900/)

    // Twins normal weight: 17–25 kg
    const twinsRange = await page.getByTestId('total-gain-range').textContent()
    expect(twinsRange).toContain('17')
    expect(twinsRange).toContain('25')
  })

  test('gain-by-week is shown and changes with week input', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('65')
    await page.getByTestId('height').fill('170')
    await page.getByTestId('current-week').fill('20')

    const gain20 = await page.getByTestId('gain-by-week').textContent()
    expect(gain20).toBeTruthy()

    await page.getByTestId('current-week').fill('40')
    const gain40 = await page.getByTestId('gain-by-week').textContent()
    // Week 40 gain should be higher than week 20 gain
    const min20 = parseFloat(gain20)
    const min40 = parseFloat(gain40)
    expect(min40).toBeGreaterThan(min20)
  })

  test('chart is visible after input', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('65')
    await page.getByTestId('height').fill('170')
    await page.getByTestId('current-week').fill('20')

    await expect(page.getByTestId('weight-chart')).toBeVisible()
    await expect(page.getByTestId('chart-dot')).toBeVisible()
  })

  test('BMI result is a number', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('65')
    await page.getByTestId('height').fill('170')
    await page.getByTestId('current-week').fill('20')

    const bmiText = await page.getByTestId('bmi-result').textContent()
    const bmi = parseFloat(bmiText)
    expect(bmi).toBeGreaterThan(10)
    expect(bmi).toBeLessThan(100)
  })
})

test.describe('Pregnancy Weight Gain Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/pregnancy-weight-gain-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Pregnancy Weight Gain/)
  })

  test('h1 contains Pregnancy', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Pregnancy')
  })

  test('normal weight woman shows correct category in EN', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('65')
    await page.getByTestId('height').fill('170')
    await page.getByTestId('current-week').fill('20')

    await expect(page.getByTestId('bmi-category')).toContainText('Normal weight')
  })

  test('twins button switches range in EN', async ({ page }) => {
    await page.getByTestId('pre-weight').fill('65')
    await page.getByTestId('height').fill('170')
    await page.getByTestId('current-week').fill('20')

    await page.getByTestId('btn-twins').click()
    const twinsRange = await page.getByTestId('total-gain-range').textContent()
    expect(twinsRange).toContain('17')
    expect(twinsRange).toContain('25')
  })
})
