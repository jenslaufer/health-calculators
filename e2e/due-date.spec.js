import { test, expect } from '@playwright/test'

test.describe('Due Date Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/geburtstermin-rechner')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Entbindungstermin/)
  })

  test('LMP method is selected by default', async ({ page }) => {
    const lmpButton = page.getByTestId('method-lmp')
    await expect(lmpButton).toBeVisible()
    await expect(lmpButton).toHaveClass(/bg-stone-900/)
  })

  test('entering LMP date shows due date result', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-01-01')
    await expect(page.getByTestId('due-date')).toBeVisible()
  })

  test('due date follows Naegele\'s rule: LMP 2026-01-01 + 280 days = 2026-10-08', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-01-01')
    const dueDateText = await page.getByTestId('due-date').textContent()
    expect(dueDateText).toMatch(/8.*Okt.*2026/)
  })

  test('cycle length adjustment shifts due date', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-01-01')
    await page.getByLabel(/Zykluslänge/i).fill('30')
    const dueDateText = await page.getByTestId('due-date').textContent()
    expect(dueDateText).toMatch(/10.*Okt.*2026/)
  })

  test('gestational age displays correctly', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-01-01')
    const gaText = await page.getByTestId('gestational-age').textContent()
    expect(gaText).toMatch(/\d+/)
  })

  test('trimester is visible', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-01-01')
    await expect(page.getByTestId('trimester')).toBeVisible()
  })

  test('countdown shows days remaining', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-01-01')
    const countdownText = await page.getByTestId('countdown').textContent()
    expect(countdownText).toMatch(/\d+ Tage/)
  })

  test('progress bar is visible', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-01-01')
    await expect(page.getByTestId('progress-bar')).toBeVisible()
  })

  test('all 4 key dates are shown', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-01-01')
    const keyDates = page.getByTestId('key-date')
    await expect(keyDates.first()).toBeVisible()
    expect(await keyDates.count()).toBe(4)
  })

  test('all 8 milestones are shown', async ({ page }) => {
    await page.getByLabel(/Erster Tag der letzten Periode/i).fill('2026-01-01')
    const milestones = page.getByTestId('milestone')
    await expect(milestones.first()).toBeVisible()
    expect(await milestones.count()).toBe(8)
  })

  test('switching to conception method shows conception date input', async ({ page }) => {
    await page.getByTestId('method-conception').click()
    await expect(page.getByLabel(/Empfängnisdatum/i)).toBeVisible()
  })

  test('conception method: conception 2026-01-15 gives due date Oct 8 2026', async ({ page }) => {
    await page.getByTestId('method-conception').click()
    await page.getByLabel(/Empfängnisdatum/i).fill('2026-01-15')
    const dueDateText = await page.getByTestId('due-date').textContent()
    expect(dueDateText).toMatch(/8.*Okt.*2026/)
  })

  test('switching to IVF method shows transfer date input', async ({ page }) => {
    await page.getByTestId('method-ivf').click()
    await expect(page.getByLabel(/Transferdatum/i)).toBeVisible()
  })

  test('IVF day-5 transfer: 2026-01-20 gives due date Oct 8 2026', async ({ page }) => {
    await page.getByTestId('method-ivf').click()
    await page.getByLabel(/Transferdatum/i).fill('2026-01-20')
    const dueDateText = await page.getByTestId('due-date').textContent()
    expect(dueDateText).toMatch(/8.*Okt.*2026/)
  })

  test('IVF day-3 radio changes calculation', async ({ page }) => {
    await page.getByTestId('method-ivf').click()
    await page.getByTestId('ivf-day-3').click()
    await page.getByLabel(/Transferdatum/i).fill('2026-01-18')
    const dueDateText = await page.getByTestId('due-date').textContent()
    expect(dueDateText).toMatch(/8.*Okt.*2026/)
  })

  test('back link navigates to home page', async ({ page }) => {
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })
})

test.describe('Due Date Calculator blog (DE)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('de/blog/geburtsterminrechner')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Entbindungstermin/)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByText('Naegele').first()).toBeVisible()
  })

  test('link to due date calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Jetzt kostenlos berechnen/i }).click()
    await expect(page).toHaveURL(/\/de\/geburtstermin-rechner$/)
  })

  test('blog back link is visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Blog/i }).first()).toBeVisible()
  })
})

test.describe('Due Date Calculator blog (EN)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('en/blog/due-date-calculator')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Due Date Calculator/)
  })

  test('article content is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByText("Naegele's").first()).toBeVisible()
  })

  test('link to due date calculator works', async ({ page }) => {
    await page.getByRole('link', { name: /Calculate for free/i }).click()
    await expect(page).toHaveURL(/\/en\/due-date-calculator$/)
  })
})
