import { test, expect } from '@playwright/test'

test.describe('Asthma Control Test (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/asthma-kontrolle-test')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Asthma Control Test/)
  })

  test('h1 matches', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Asthma Control Test')
  })

  test('back link navigates home', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('result hidden before all answers', async ({ page }) => {
    await expect(page.getByTestId('result-score')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('answering all 5×5 → score 25, well controlled', async ({ page }) => {
    await page.getByTestId('option-activityLimitation-5').click()
    await page.getByTestId('option-shortnessOfBreath-5').click()
    await page.getByTestId('option-nightSymptoms-5').click()
    await page.getByTestId('option-rescueInhalerUse-5').click()
    await page.getByTestId('option-selfRating-5').click()

    await expect(page.getByTestId('result-score')).toBeVisible()
    await expect(page.getByTestId('result-score')).toHaveText('25')
    await expect(page.getByTestId('result-status')).toHaveText('Gut kontrolliert')
  })

  test('mid-range scoring → not well controlled (16–19)', async ({ page }) => {
    // 4+3+4+4+4 = 19 → notWellControlled
    await page.getByTestId('option-activityLimitation-4').click()
    await page.getByTestId('option-shortnessOfBreath-3').click()
    await page.getByTestId('option-nightSymptoms-4').click()
    await page.getByTestId('option-rescueInhalerUse-4').click()
    await page.getByTestId('option-selfRating-4').click()

    await expect(page.getByTestId('result-score')).toHaveText('19')
    await expect(page.getByTestId('result-status')).toHaveText('Nicht gut kontrolliert')
  })

  test('low scoring → poorly controlled (5–15)', async ({ page }) => {
    // 1+1+2+1+2 = 7 → poorlyControlled
    await page.getByTestId('option-activityLimitation-1').click()
    await page.getByTestId('option-shortnessOfBreath-1').click()
    await page.getByTestId('option-nightSymptoms-2').click()
    await page.getByTestId('option-rescueInhalerUse-1').click()
    await page.getByTestId('option-selfRating-2').click()

    await expect(page.getByTestId('result-score')).toHaveText('7')
    await expect(page.getByTestId('result-status')).toHaveText('Schlecht kontrolliert')
  })

  test('reset clears answers and hides result', async ({ page }) => {
    for (const q of ['activityLimitation', 'shortnessOfBreath', 'nightSymptoms', 'rescueInhalerUse', 'selfRating']) {
      await page.getByTestId(`option-${q}-3`).click()
    }
    await expect(page.getByTestId('result-score')).toBeVisible()
    await page.getByTestId('reset').click()
    await expect(page.getByTestId('result-score')).not.toBeVisible()
    await expect(page.getByTestId('incomplete-hint')).toBeVisible()
  })

  test('score scale section visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Bewertungsskala/ })).toBeVisible()
  })

  test('blog article link is rendered', async ({ page }) => {
    await expect(page.getByTestId('blog-article-link')).toBeVisible()
  })
})

test.describe('Asthma Control Test (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/asthma-control-test')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Asthma Control Test/)
  })

  test('all 5×5 → score 25, well controlled', async ({ page }) => {
    for (const q of ['activityLimitation', 'shortnessOfBreath', 'nightSymptoms', 'rescueInhalerUse', 'selfRating']) {
      await page.getByTestId(`option-${q}-5`).click()
    }
    await expect(page.getByTestId('result-score')).toHaveText('25')
    await expect(page.getByTestId('result-status')).toHaveText('Well controlled')
  })
})
