import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('de/schlaganfall-risiko-rechner')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Schlaganfall.*CHA.*VASc/)
})

test('healthy 50yo male, no risk factors → score 0, low risk', async ({ page }) => {
  await page.getByTestId('age').fill('50')
  await page.getByTestId('sex-male').click()

  await expect(page.getByTestId('cha2ds2-vasc-score')).toHaveText('0')
  await expect(page.getByTestId('result-status')).toHaveText('Niedriges Risiko')
})

test('72yo female with HTN + diabetes → score 4, high risk', async ({ page }) => {
  await page.getByTestId('age').fill('72')
  await page.getByTestId('sex-female').click()
  await page.getByTestId('checkbox-hypertension').check()
  await page.getByTestId('checkbox-diabetes').check()

  await expect(page.getByTestId('cha2ds2-vasc-score')).toHaveText('4')
  await expect(page.getByTestId('result-status')).toHaveText('Hohes Risiko')
})

test('80yo male with prior stroke → score 4, high risk, OAC recommended', async ({ page }) => {
  await page.getByTestId('age').fill('80')
  await page.getByTestId('sex-male').click()
  await page.getByTestId('checkbox-strokeHistory').check()

  await expect(page.getByTestId('cha2ds2-vasc-score')).toHaveText('4')
  await expect(page.getByTestId('anticoagulation-detail')).toContainText('Orale Antikoagulation empfohlen')
})

test('all risk factors at age 80 (female) → max score 9', async ({ page }) => {
  await page.getByTestId('age').fill('80')
  await page.getByTestId('sex-female').click()
  await page.getByTestId('checkbox-heartFailure').check()
  await page.getByTestId('checkbox-hypertension').check()
  await page.getByTestId('checkbox-diabetes').check()
  await page.getByTestId('checkbox-strokeHistory').check()
  await page.getByTestId('checkbox-vascularDisease').check()

  await expect(page.getByTestId('cha2ds2-vasc-score')).toHaveText('9')
})

test('result hidden until age entered', async ({ page }) => {
  await expect(page.getByTestId('cha2ds2-vasc-score')).not.toBeVisible()
})

test('annual risk shown after age + sex set', async ({ page }) => {
  await page.getByTestId('age').fill('72')
  await page.getByTestId('sex-female').click()
  await page.getByTestId('checkbox-hypertension').check()
  await page.getByTestId('checkbox-diabetes').check()

  await expect(page.getByTestId('annual-risk')).toBeVisible()
  await expect(page.getByTestId('annual-risk')).toContainText('4.8')
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/de\/?$/)
})
