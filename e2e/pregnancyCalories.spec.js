import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/kalorienbedarf-schwangerschaft-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Kalorienbedarf Schwangerschaft/)
})

test('T1 30y, 65kg, 168cm, low_active → no supplement', async ({ page }) => {
  await page.getByTestId('input-age').fill('30')
  await page.getByTestId('input-weight').fill('65')
  await page.getByTestId('input-height').fill('168')
  await page.getByTestId('input-activity').selectOption('low_active')
  await page.getByTestId('trimester-1').click()

  await expect(page.getByTestId('result-kcal')).toBeVisible()
  await expect(page.getByTestId('result-addition')).toHaveText('+0 kcal')
})

test('T2 adds +340 kcal/day', async ({ page }) => {
  await page.getByTestId('input-age').fill('30')
  await page.getByTestId('input-weight').fill('65')
  await page.getByTestId('input-height').fill('168')
  await page.getByTestId('input-activity').selectOption('low_active')
  await page.getByTestId('trimester-2').click()

  await expect(page.getByTestId('result-addition')).toHaveText('+340 kcal')
})

test('T3 adds +452 kcal/day', async ({ page }) => {
  await page.getByTestId('input-age').fill('30')
  await page.getByTestId('input-weight').fill('65')
  await page.getByTestId('input-height').fill('168')
  await page.getByTestId('input-activity').selectOption('low_active')
  await page.getByTestId('trimester-3').click()

  await expect(page.getByTestId('result-addition')).toHaveText('+452 kcal')
})

test('twin pregnancy adds +300 kcal extra in T2', async ({ page }) => {
  await page.getByTestId('input-age').fill('30')
  await page.getByTestId('input-weight').fill('65')
  await page.getByTestId('input-height').fill('168')
  await page.getByTestId('input-activity').selectOption('low_active')
  await page.getByTestId('trimester-2').click()
  await page.getByTestId('input-twins').check()

  await expect(page.getByTestId('result-addition')).toHaveText('+640 kcal')
})

test('imperial unit toggle converts inputs', async ({ page }) => {
  await page.getByTestId('unit-imperial').click()
  await page.getByTestId('input-age').fill('30')
  await page.getByTestId('input-weight').fill('143')
  await page.getByTestId('input-height').fill('66')
  await page.getByTestId('trimester-2').click()

  await expect(page.getByTestId('result-kcal')).toBeVisible()
})

test('implausible age shows warning', async ({ page }) => {
  await page.getByTestId('input-age').fill('12')
  await page.getByTestId('input-weight').fill('65')
  await page.getByTestId('input-height').fill('168')

  await expect(page.getByTestId('warning-age')).toBeVisible()
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
