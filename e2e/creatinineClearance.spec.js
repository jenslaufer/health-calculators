import { test, expect } from '@playwright/test'

test.describe('Creatinine Clearance Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/kreatinin-clearance-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Kreatinin-Clearance Rechner/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Kreatinin-Clearance Rechner')
  })

  test('back link navigates home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('result hidden before inputs', async ({ page }) => {
    await expect(page.getByTestId('result-crcl')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('male 40y, 80kg, 1.0 mg/dL → ~111 mL/min, normal', async ({ page }) => {
    await page.getByTestId('sex-male').click()
    await page.getByTestId('age').fill('40')
    await page.getByTestId('weight').fill('80')
    await page.getByTestId('creatinine').fill('1.0')

    const result = page.getByTestId('result-crcl')
    await expect(result).toBeVisible()
    const crcl = parseFloat(await result.textContent())
    expect(crcl).toBeGreaterThan(105)
    expect(crcl).toBeLessThan(115)
    await expect(page.getByTestId('result-status')).toHaveText('Normal')
  })

  test('female 70y, 60kg, 1.6 mg/dL → severe', async ({ page }) => {
    await page.getByTestId('sex-female').click()
    await page.getByTestId('age').fill('75')
    await page.getByTestId('weight').fill('60')
    await page.getByTestId('creatinine').fill('1.6')

    const result = page.getByTestId('result-crcl')
    await expect(result).toBeVisible()
    await expect(page.getByTestId('result-status')).toHaveText('Stark eingeschränkt')
  })

  test('imperial unit toggle uses pounds', async ({ page }) => {
    await page.getByRole('button', { name: 'Imperial', exact: true }).click()
    await page.getByTestId('sex-male').click()
    await page.getByTestId('age').fill('40')
    await page.getByTestId('weight').fill('176')
    await page.getByTestId('creatinine').fill('1.0')

    const result = page.getByTestId('result-crcl')
    await expect(result).toBeVisible()
    const crcl = parseFloat(await result.textContent())
    expect(crcl).toBeGreaterThan(100)
    expect(crcl).toBeLessThan(120)
  })

  test('SI unit µmol/L converts correctly', async ({ page }) => {
    await page.getByTestId('sex-male').click()
    await page.getByTestId('age').fill('40')
    await page.getByTestId('weight').fill('80')
    await page.getByTestId('creatinine-unit').selectOption('umol/L')
    await page.getByTestId('creatinine').fill('88.4')

    const result = page.getByTestId('result-crcl')
    await expect(result).toBeVisible()
    const crcl = parseFloat(await result.textContent())
    expect(crcl).toBeGreaterThan(105)
    expect(crcl).toBeLessThan(115)
  })

  test('blog article link is rendered', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('Creatinine Clearance Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/creatinine-clearance-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Creatinine Clearance Calculator/)
  })

  test('male 40y, 80kg, 1.0 mg/dL → normal', async ({ page }) => {
    await page.getByTestId('sex-male').click()
    await page.getByTestId('age').fill('40')
    await page.getByTestId('weight').fill('80')
    await page.getByTestId('creatinine').fill('1.0')

    await expect(page.getByTestId('result-crcl')).toBeVisible()
    await expect(page.getByTestId('result-status')).toHaveText('Normal')
  })
})
