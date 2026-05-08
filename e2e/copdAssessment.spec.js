import { test, expect } from '@playwright/test'

const CAT_KEYS = [
  'cough', 'phlegm', 'chestTightness', 'breathlessness',
  'activityLimitation', 'leavingHome', 'sleep', 'energy',
]

async function answerAllCat(page, value) {
  for (const k of CAT_KEYS) {
    await page.getByTestId(`option-${k}-${value}`).click()
  }
}

test.describe('COPD Assessment (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/copd-assessment-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/COPD Assessment/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('COPD Assessment')
  })

  test('back link navigates home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('result hidden before all answers', async ({ page }) => {
    await expect(page.getByTestId('result-group')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('low symptoms, no exacerbations → group A', async ({ page }) => {
    await page.getByTestId('option-mmrc-0').click()
    await answerAllCat(page, 1) // CAT = 8 → low (<10)
    await page.getByTestId('option-moderate-0').click()
    await page.getByTestId('option-hospitalized-no').click()

    await expect(page.getByTestId('result-group')).toHaveText('A')
    await expect(page.getByTestId('result-cat')).toHaveText('8')
    await expect(page.getByTestId('result-mmrc')).toHaveText('0')
    await expect(page.getByTestId('result-status')).toHaveText('GOLD-Gruppe A')
  })

  test('high symptoms, no exacerbations → group B', async ({ page }) => {
    await page.getByTestId('option-mmrc-3').click()
    await answerAllCat(page, 3) // CAT = 24 → high
    await page.getByTestId('option-moderate-1').click()
    await page.getByTestId('option-hospitalized-no').click()

    await expect(page.getByTestId('result-group')).toHaveText('B')
    await expect(page.getByTestId('result-cat')).toHaveText('24')
  })

  test('≥ 2 moderate exacerbations → group E', async ({ page }) => {
    await page.getByTestId('option-mmrc-1').click()
    await answerAllCat(page, 0)
    await page.getByTestId('option-moderate-2').click()
    await page.getByTestId('option-hospitalized-no').click()

    await expect(page.getByTestId('result-group')).toHaveText('E')
    await expect(page.getByTestId('result-status')).toHaveText('GOLD-Gruppe E')
  })

  test('hospitalization → group E even with low symptoms', async ({ page }) => {
    await page.getByTestId('option-mmrc-0').click()
    await answerAllCat(page, 0)
    await page.getByTestId('option-moderate-0').click()
    await page.getByTestId('option-hospitalized-yes').click()

    await expect(page.getByTestId('result-group')).toHaveText('E')
  })

  test('reset clears answers and hides result', async ({ page }) => {
    await page.getByTestId('option-mmrc-2').click()
    await answerAllCat(page, 2)
    await page.getByTestId('option-moderate-1').click()
    await page.getByTestId('option-hospitalized-no').click()

    await expect(page.getByTestId('result-group')).toBeVisible()
    await page.getByTestId('reset').click()
    await expect(page.getByTestId('result-group')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('GOLD ABE matrix section visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /GOLD 2023 ABE-Schema/ })).toBeVisible()
  })

  test('blog article link is rendered', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('COPD Assessment (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/copd-assessment-calculator')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/COPD Assessment/)
  })

  test('group A scenario in EN', async ({ page }) => {
    await page.getByTestId('option-mmrc-1').click()
    await answerAllCat(page, 1)
    await page.getByTestId('option-moderate-1').click()
    await page.getByTestId('option-hospitalized-no').click()

    await expect(page.getByTestId('result-group')).toHaveText('A')
    await expect(page.getByTestId('result-status')).toHaveText('GOLD group A')
  })
})
