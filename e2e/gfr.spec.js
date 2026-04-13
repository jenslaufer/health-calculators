import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/gfr-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/GFR/)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})

test('no result shown without inputs', async ({ page }) => {
  await expect(page.getByTestId('egfr-result')).not.toBeVisible()
})

test('calculates eGFR for male with mg/dL input', async ({ page }) => {
  await page.getByTestId('btn-mgdl').click()
  await page.getByTestId('input-creatinine').fill('1.0')
  await page.getByTestId('input-age').fill('50')
  await page.getByTestId('btn-male').click()

  const result = page.getByTestId('egfr-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const egfr = parseFloat(text)
  expect(egfr).toBeGreaterThanOrEqual(89)
  expect(egfr).toBeLessThanOrEqual(95)
})

test('calculates eGFR for female with mg/dL input', async ({ page }) => {
  await page.getByTestId('btn-mgdl').click()
  await page.getByTestId('input-creatinine').fill('0.8')
  await page.getByTestId('input-age').fill('50')
  await page.getByTestId('btn-female').click()

  const result = page.getByTestId('egfr-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const egfr = parseFloat(text)
  expect(egfr).toBeGreaterThanOrEqual(86)
  expect(egfr).toBeLessThanOrEqual(92)
})

test('calculates eGFR for µmol/L input', async ({ page }) => {
  await page.getByTestId('btn-umol').click()
  await page.getByTestId('input-creatinine').fill('88.42')
  await page.getByTestId('input-age').fill('50')
  await page.getByTestId('btn-male').click()

  const result = page.getByTestId('egfr-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const egfr = parseFloat(text)
  // 88.42 µmol/L = 1.0 mg/dL → same result as mg/dL test above
  expect(egfr).toBeGreaterThanOrEqual(89)
  expect(egfr).toBeLessThanOrEqual(95)
})

test('switching unit clears creatinine input', async ({ page }) => {
  await page.getByTestId('btn-mgdl').click()
  await page.getByTestId('input-creatinine').fill('1.0')
  await page.getByTestId('btn-umol').click()
  const val = await page.getByTestId('input-creatinine').inputValue()
  expect(val).toBe('')
})

test('shows CKD stage badge when result is available', async ({ page }) => {
  await page.getByTestId('input-creatinine').fill('1.0')
  await page.getByTestId('input-age').fill('50')

  const badge = page.getByTestId('ckd-stage')
  await expect(badge).toBeVisible()
})

test('stage G1 for healthy young male', async ({ page }) => {
  await page.getByTestId('input-creatinine').fill('0.9')
  await page.getByTestId('input-age').fill('25')
  await page.getByTestId('btn-male').click()

  const badge = page.getByTestId('ckd-stage')
  await expect(badge).toBeVisible()
  await expect(badge).toContainText('G1')
})

test('stage G5 for severely impaired kidney function', async ({ page }) => {
  await page.getByTestId('input-creatinine').fill('8.0')
  await page.getByTestId('input-age').fill('55')
  await page.getByTestId('btn-male').click()

  const badge = page.getByTestId('ckd-stage')
  await expect(badge).toBeVisible()
  await expect(badge).toContainText('G5')
})

test('risk assessment is visible with result', async ({ page }) => {
  await page.getByTestId('input-creatinine').fill('1.0')
  await page.getByTestId('input-age').fill('50')

  await expect(page.getByTestId('risk-assessment')).toBeVisible()
})

test('CKD stages reference table is always visible', async ({ page }) => {
  await expect(page.getByText('G1', { exact: true }).first()).toBeVisible()
  await expect(page.getByText('G5', { exact: true })).toBeVisible()
})

test('EN calculator page loads', async ({ page }) => {
  await page.goto('en/gfr-calculator')
  await expect(page).toHaveTitle(/GFR/)
})
