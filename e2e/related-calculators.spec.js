import { test, expect } from '@playwright/test'

test.describe('RelatedCalculators', () => {
  test('shows related calculators section on BMI calculator page DE', async ({ page }) => {
    await page.goto('de/bmi-rechner')
    const section = page.getByTestId('related-calculators')
    await expect(section).toBeVisible()
    const links = section.locator('a')
    const count = await links.count()
    expect(count).toBeGreaterThan(0)
    expect(count).toBeLessThanOrEqual(4)
  })

  test('shows related calculators section on BMI calculator page EN', async ({ page }) => {
    await page.goto('en/bmi-calculator')
    const section = page.getByTestId('related-calculators')
    await expect(section).toBeVisible()
  })
})
