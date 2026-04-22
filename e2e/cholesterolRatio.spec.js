import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/cholesterol-verhaeltnis-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Cholesterol/)
})

test('TC1 happy path: Total=150, HDL=50, LDL=80, Trig=100 → optimal', async ({ page }) => {
  await page.getByTestId('input-total').fill('150')
  await page.getByTestId('input-hdl').fill('50')
  await page.getByTestId('input-ldl').fill('80')
  await page.getByTestId('input-trig').fill('100')

  const badge = page.getByTestId('result-classification')
  await expect(badge).toBeVisible()
  const totalHdl = page.getByTestId('result-total-hdl')
  await expect(totalHdl).toBeVisible()
  const ratio = parseFloat(await totalHdl.textContent())
  expect(ratio).toBeGreaterThan(2.9)
  expect(ratio).toBeLessThan(3.1)
})

test('TC2 high risk: Total=220, HDL=40, LDL=150, Trig=150 → high', async ({ page }) => {
  await page.getByTestId('input-total').fill('220')
  await page.getByTestId('input-hdl').fill('40')
  await page.getByTestId('input-ldl').fill('150')
  await page.getByTestId('input-trig').fill('150')

  const badge = page.getByTestId('result-classification')
  await expect(badge).toBeVisible()
  const ratio = parseFloat(await page.getByTestId('result-total-hdl').textContent())
  expect(ratio).toBeGreaterThan(5.4)
})

test('TC3 Friedewald fallback: LDL empty, Trig=150 → shows LDL/HDL result', async ({ page }) => {
  await page.getByTestId('input-total').fill('190')
  await page.getByTestId('input-hdl').fill('50')
  await page.getByTestId('input-trig').fill('150')
  // LDL intentionally left empty

  await expect(page.getByTestId('result-total-hdl')).toBeVisible()
  await expect(page.getByTestId('result-ldl-hdl')).toBeVisible()
  const ldlHdl = parseFloat(await page.getByTestId('result-ldl-hdl').textContent())
  expect(ldlHdl).toBeGreaterThan(2.1)
  expect(ldlHdl).toBeLessThan(2.3)
})

test('Trig >= 400 shows warning and no LDL/HDL', async ({ page }) => {
  await page.getByTestId('input-total').fill('250')
  await page.getByTestId('input-hdl').fill('40')
  await page.getByTestId('input-trig').fill('450')

  await expect(page.getByTestId('warning-trig-ldl')).toBeVisible()
  await expect(page.getByTestId('result-ldl-hdl')).not.toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
