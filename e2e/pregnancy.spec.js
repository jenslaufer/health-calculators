import { test, expect } from '@playwright/test'

test.describe('Pregnancy Due Date Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/schwangerschafts-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Geburtstermin-Rechner/)
  })

  test('entering LMP date shows due date result', async ({ page }) => {
    await page.getByLabel(/Letzte Monatsblutung/i).fill('2026-01-01')
    await expect(page.getByTestId('due-date')).toBeVisible()
  })

  test('due date follows Naegele\'s rule: LMP 2026-01-01 + 280 days = 2026-10-08', async ({ page }) => {
    await page.getByLabel(/Letzte Monatsblutung/i).fill('2026-01-01')
    const dueDateText = await page.getByTestId('due-date').textContent()
    // German date format: "8. Okt. 2026"
    expect(dueDateText).toMatch(/8.*Okt.*2026/)
  })

  test('cycle length adjustment works: 30-day cycle adds 2 days to due date', async ({ page }) => {
    await page.getByLabel(/Letzte Monatsblutung/i).fill('2026-01-01')
    await page.getByLabel(/Zykluslänge/i).fill('30')
    const dueDateText = await page.getByTestId('due-date').textContent()
    expect(dueDateText).toMatch(/10.*Okt.*2026/)
  })

  test('gestational age displays weeks and days correctly', async ({ page }) => {
    await page.getByLabel(/Letzte Monatsblutung/i).fill('2026-01-01')
    const gaText = await page.getByTestId('gestational-age').textContent()
    expect(gaText).toMatch(/\d+ Wochen,? \d+ Tage/)
  })

  test('trimester label updates based on gestational age', async ({ page }) => {
    await page.getByLabel(/Letzte Monatsblutung/i).fill('2026-01-01')
    await expect(page.getByTestId('trimester')).toBeVisible()
    const trimesterText = await page.getByTestId('trimester').textContent()
    expect(trimesterText).toMatch(/1st|2nd|3rd/)
  })

  test('conception date is ~14 days after LMP (adjusted for cycle)', async ({ page }) => {
    await page.getByLabel(/Letzte Monatsblutung/i).fill('2026-01-01')
    const conceptionText = await page.getByTestId('conception-date').textContent()
    // German date format: "15. Jan. 2026"
    expect(conceptionText).toMatch(/15.*Jan.*2026/)
  })

  test('progress bar is visible and between 0-100%', async ({ page }) => {
    await page.getByLabel(/Letzte Monatsblutung/i).fill('2026-01-01')
    const progressBar = page.getByTestId('progress-bar')
    await expect(progressBar).toBeVisible()
    const width = await progressBar.evaluate(el => {
      const inner = el.querySelector('[role="progressbar"]') || el.firstElementChild
      return parseFloat(inner.style.width)
    })
    expect(width).toBeGreaterThanOrEqual(0)
    expect(width).toBeLessThanOrEqual(100)
  })

  test('all 8 milestones are shown when results display', async ({ page }) => {
    await page.getByLabel(/Letzte Monatsblutung/i).fill('2026-01-01')
    const milestones = page.getByTestId('milestone')
    await expect(milestones.first()).toBeVisible()
    expect(await milestones.count()).toBe(8)
  })

  test('milestones past today are visually marked', async ({ page }) => {
    await page.getByLabel(/Letzte Monatsblutung/i).fill('2026-01-01')
    const milestones = page.getByTestId('milestone')
    await expect(milestones.first()).toBeVisible()
    const passedCount = await page.locator('[data-testid="milestone"].passed').count()
    expect(passedCount).toBeGreaterThan(0)
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })
})
