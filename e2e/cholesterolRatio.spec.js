import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/cholesterol-verhaeltnis-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Cholesterin-Verh/)
})

test('Test 1: Total=150 HDL=50 LDL=80 Trig=100 → optimal (3.0)', async ({ page }) => {
  await page.getByTestId('total').fill('150')
  await page.getByTestId('hdl').fill('50')
  await page.getByTestId('ldl').fill('80')
  await page.getByTestId('trig').fill('100')

  const totalHdl = page.getByTestId('result-total-hdl')
  await expect(totalHdl).toBeVisible()
  await expect(totalHdl).toHaveText('3.00')

  const cls = page.getByTestId('result-classification')
  await expect(cls).toHaveText('optimal')
})

test('Test 2: Total=220 HDL=40 LDL=150 Trig=150 → high', async ({ page }) => {
  await page.getByTestId('total').fill('220')
  await page.getByTestId('hdl').fill('40')
  await page.getByTestId('ldl').fill('150')
  await page.getByTestId('trig').fill('150')

  const cls = page.getByTestId('result-classification')
  await expect(cls).toHaveText('high')

  const totalHdl = page.getByTestId('result-total-hdl')
  await expect(totalHdl).toHaveText('5.50')
})

test('Test 3: Friedewald fallback — LDL omitted', async ({ page }) => {
  await page.getByTestId('total').fill('160')
  await page.getByTestId('hdl').fill('50')
  await page.getByTestId('trig').fill('150')

  const cls = page.getByTestId('result-classification')
  await expect(cls).toHaveText('optimal')

  await expect(page.getByTestId('friedewald-used')).toBeVisible()
})

test('back link navigates to home', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
