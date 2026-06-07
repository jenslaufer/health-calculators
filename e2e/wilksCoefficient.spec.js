import { test, expect } from '@playwright/test'

test.describe('Wilks Coefficient Calculator (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/wilks-coefficient-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Wilks/)
  })

  test('h1 contains Wilks', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Wilks')
  })

  test('back link navigates to home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('no result shown before inputs', async ({ page }) => {
    await expect(page.getByTestId('result-card')).toHaveCount(0)
  })

  test('male 83 kg / 600 kg → Elite band', async ({ page }) => {
    await page.getByTestId('sex-male').click()
    await page.getByTestId('unit-kg').click()
    await page.getByTestId('bodyweight-input').fill('83')
    await page.getByTestId('total-input').fill('600')

    await expect(page.getByTestId('band')).toHaveText('Elite')
    const score = await page.getByTestId('wilks-score').innerText()
    expect(Number(score)).toBeGreaterThan(400)
  })

  test('male 100 kg / 200 kg → Anfänger band', async ({ page }) => {
    await page.getByTestId('sex-male').click()
    await page.getByTestId('unit-kg').click()
    await page.getByTestId('bodyweight-input').fill('100')
    await page.getByTestId('total-input').fill('200')

    await expect(page.getByTestId('band')).toHaveText('Anfänger')
  })

  test('female switching changes the score', async ({ page }) => {
    await page.getByTestId('unit-kg').click()
    await page.getByTestId('bodyweight-input').fill('70')
    await page.getByTestId('total-input').fill('400')
    await page.getByTestId('sex-male').click()
    const maleScore = await page.getByTestId('wilks-score').innerText()
    await page.getByTestId('sex-female').click()
    const femaleScore = await page.getByTestId('wilks-score').innerText()
    expect(maleScore).not.toBe(femaleScore)
  })

  test('related calculators block is visible', async ({ page }) => {
    await expect(page.getByTestId('related-calculators')).toBeVisible()
  })

  test('blog article link is visible', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('Wilks Coefficient Calculator (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/wilks-coefficient')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Wilks/)
  })

  test('male 93 kg / 700 kg → Elite band', async ({ page }) => {
    await page.getByTestId('sex-male').click()
    await page.getByTestId('unit-kg').click()
    await page.getByTestId('bodyweight-input').fill('93')
    await page.getByTestId('total-input').fill('700')

    await expect(page.getByTestId('band')).toHaveText('Elite')
  })

  test('imperial: 220 lb bodyweight, 1100 lb total male → finite score in elite range', async ({ page }) => {
    await page.getByTestId('sex-male').click()
    await page.getByTestId('unit-lb').click()
    await page.getByTestId('bodyweight-input').fill('220')
    await page.getByTestId('total-input').fill('1100')

    const score = await page.getByTestId('wilks-score').innerText()
    expect(Number(score)).toBeGreaterThan(100)
  })
})
