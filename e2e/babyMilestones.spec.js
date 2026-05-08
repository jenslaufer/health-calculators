import { test, expect } from '@playwright/test'

test.describe('Baby Milestones (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/baby-meilensteine-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Baby-Meilensteine/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Baby-Meilensteine')
  })

  test('back link navigates home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('default age 6 shows 6-month bracket', async ({ page }) => {
    await expect(page.getByTestId('result-bracket')).toHaveText('6 Monate')
  })

  test('selecting 12-month bracket shows 12-month milestones', async ({ page }) => {
    await page.getByTestId('bracket-12').click()
    await expect(page.getByTestId('result-bracket')).toHaveText('12 Monate')
    await expect(page.getByTestId('domain-motor')).toBeVisible()
    await expect(page.getByTestId('domain-language')).toBeVisible()
    await expect(page.getByTestId('domain-social')).toBeVisible()
    await expect(page.getByTestId('domain-cognitive')).toBeVisible()
  })

  test('all four domains render for 24-month bracket', async ({ page }) => {
    await page.getByTestId('bracket-24').click()
    await expect(page.getByTestId('result-bracket')).toHaveText('24 Monate')
    await expect(page.getByTestId('domain-motor')).toContainText(/.+/)
    await expect(page.getByTestId('domain-language')).toContainText(/.+/)
  })

  test('warnings panel is visible for any age', async ({ page }) => {
    await expect(page.getByTestId('warnings')).toBeVisible()
  })

  test('expected size shows weight and length in metric', async ({ page }) => {
    await expect(page.getByTestId('expected-weight')).toContainText('kg')
    await expect(page.getByTestId('expected-length')).toContainText('cm')
  })

  test('imperial unit toggle switches to lbs and inches', async ({ page }) => {
    await page.getByTestId('unit-imperial').click()
    await expect(page.getByTestId('expected-weight')).toContainText('lbs')
    await expect(page.getByTestId('expected-length')).toContainText('in')
  })

  test('birth date mode computes age from dates', async ({ page }) => {
    await page.getByTestId('mode-birth-date').click()
    await page.getByTestId('birth-date').fill('2025-05-01')
    await page.getByTestId('as-of').fill('2026-05-07')
    await expect(page.getByTestId('computed-age')).toBeVisible()
    await expect(page.getByTestId('result-bracket')).toHaveText('12 Monate')
  })

  test('blog article link is rendered', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('Baby Milestones (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/baby-milestones-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Baby Milestones/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Baby Milestones')
  })

  test('selecting 18-month bracket shows 18-month milestones', async ({ page }) => {
    await page.getByTestId('bracket-18').click()
    await expect(page.getByTestId('result-bracket')).toHaveText('18 months')
    await expect(page.getByTestId('domain-motor')).toBeVisible()
  })

  test('imperial unit toggle works', async ({ page }) => {
    await page.getByTestId('unit-imperial').click()
    await expect(page.getByTestId('expected-weight')).toContainText('lbs')
    await expect(page.getByTestId('expected-length')).toContainText('in')
  })
})
