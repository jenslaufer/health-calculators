import { test, expect } from '@playwright/test'

const GAD7_KEYS = [
  'feelingNervous',
  'cantStopWorrying',
  'worryingTooMuch',
  'troubleRelaxing',
  'restless',
  'irritable',
  'afraidSomethingAwful',
]

async function answerAll(page, value) {
  for (const q of GAD7_KEYS) {
    await page.getByTestId(`option-${q}-${value}`).click()
  }
}

test.describe('GAD-7 Anxiety Screening (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/gad-7-angst-test')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/GAD-7/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('GAD-7')
  })

  test('back link navigates home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('result hidden before all answers', async ({ page }) => {
    await expect(page.getByTestId('result-score')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('all 0 → score 0, Minimal', async ({ page }) => {
    await answerAll(page, 0)
    await expect(page.getByTestId('result-score')).toHaveText('0')
    await expect(page.getByTestId('result-status')).toHaveText('Minimal')
    await expect(page.getByTestId('needs-evaluation')).not.toBeVisible()
  })

  test('all 3 → score 21, Schwer, needs evaluation', async ({ page }) => {
    await answerAll(page, 3)
    await expect(page.getByTestId('result-score')).toHaveText('21')
    await expect(page.getByTestId('result-status')).toHaveText('Schwer')
    await expect(page.getByTestId('needs-evaluation')).toBeVisible()
  })

  test('mixed 1+2+0+3+1+2+1 = 10, Moderat, needs evaluation', async ({ page }) => {
    const vals = { feelingNervous: 1, cantStopWorrying: 2, worryingTooMuch: 0, troubleRelaxing: 3, restless: 1, irritable: 2, afraidSomethingAwful: 1 }
    for (const [q, v] of Object.entries(vals)) {
      await page.getByTestId(`option-${q}-${v}`).click()
    }
    await expect(page.getByTestId('result-score')).toHaveText('10')
    await expect(page.getByTestId('result-status')).toHaveText('Moderat')
    await expect(page.getByTestId('needs-evaluation')).toBeVisible()
  })

  test('reset clears answers and hides result', async ({ page }) => {
    await answerAll(page, 1)
    await expect(page.getByTestId('result-score')).toBeVisible()
    await page.getByTestId('reset').click()
    await expect(page.getByTestId('result-score')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('disclaimer is shown on page', async ({ page }) => {
    await expect(page.getByTestId('page-disclaimer')).toBeVisible()
    await expect(page.getByTestId('page-disclaimer')).toContainText('Screening-Werkzeug')
  })

  test('severity bands section visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Schweregrade/ })).toBeVisible()
  })

  test('blog article link is rendered', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('GAD-7 Anxiety Screening (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/gad-7-anxiety-test')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/GAD-7/)
  })

  test('all 0 → score 0, Minimal, no eval', async ({ page }) => {
    await answerAll(page, 0)
    await expect(page.getByTestId('result-score')).toHaveText('0')
    await expect(page.getByTestId('result-status')).toHaveText('Minimal')
  })

  test('all 3 → score 21, Severe, needs evaluation', async ({ page }) => {
    await answerAll(page, 3)
    await expect(page.getByTestId('result-score')).toHaveText('21')
    await expect(page.getByTestId('result-status')).toHaveText('Severe')
    await expect(page.getByTestId('needs-evaluation')).toBeVisible()
  })

  test('disclaimer is shown on page', async ({ page }) => {
    await expect(page.getByTestId('page-disclaimer')).toContainText('screening tool')
  })
})
