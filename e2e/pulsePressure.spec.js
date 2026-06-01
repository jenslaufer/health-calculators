import { test, expect } from '@playwright/test'

test.describe('Pulse Pressure Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/pulsdruck-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Pulsdruck/)
  })

  test('h1 contains Pulsdruck', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Pulsdruck')
  })

  test('back link navigates to home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('no result shown before inputs', async ({ page }) => {
    await expect(page.getByTestId('result-card')).toHaveCount(0)
  })

  test('normal band: 120/80 → 40 mmHg normal', async ({ page }) => {
    await page.getByTestId('systolic-input').fill('120')
    await page.getByTestId('diastolic-input').fill('80')

    await expect(page.getByTestId('pp-value')).toHaveText('40')
    await expect(page.getByTestId('band')).toHaveText('Normal')
  })

  test('narrow band trigger: 110/80 → 30 mmHg eng', async ({ page }) => {
    await page.getByTestId('systolic-input').fill('110')
    await page.getByTestId('diastolic-input').fill('80')

    await expect(page.getByTestId('pp-value')).toHaveText('30')
    await expect(page.getByTestId('band')).toHaveText('Eng')
  })

  test('wide band trigger: 160/80 → 80 mmHg weit', async ({ page }) => {
    await page.getByTestId('systolic-input').fill('160')
    await page.getByTestId('diastolic-input').fill('80')

    await expect(page.getByTestId('pp-value')).toHaveText('80')
    await expect(page.getByTestId('band')).toHaveText('Weit')
  })

  test('age context appears when age is provided', async ({ page }) => {
    await page.getByTestId('systolic-input').fill('140')
    await page.getByTestId('diastolic-input').fill('80')
    await page.getByTestId('age-input').fill('70')

    await expect(page.getByTestId('age-context')).toBeVisible()
  })

  test('related calculators block is visible', async ({ page }) => {
    await expect(page.getByTestId('related-calculators')).toBeVisible()
  })

  test('blog article link is visible', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('Pulse Pressure Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/pulse-pressure')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Pulse Pressure/)
  })

  test('normal band: 120/80 → 40 mmHg normal', async ({ page }) => {
    await page.getByTestId('systolic-input').fill('120')
    await page.getByTestId('diastolic-input').fill('80')

    await expect(page.getByTestId('pp-value')).toHaveText('40')
    await expect(page.getByTestId('band')).toHaveText('Normal')
  })

  test('wide band: 170/70 → 100 mmHg wide', async ({ page }) => {
    await page.getByTestId('systolic-input').fill('170')
    await page.getByTestId('diastolic-input').fill('70')

    await expect(page.getByTestId('pp-value')).toHaveText('100')
    await expect(page.getByTestId('band')).toHaveText('Wide')
  })
})
