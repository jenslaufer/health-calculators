import { test, expect } from '@playwright/test'

test('RelatedCalculators renders 4 sibling links on a calc page', async ({ page }) => {
  await page.goto('de/one-rep-max-rechner/')
  const block = page.locator('[data-testid="related-calculators"]')
  await expect(block).toBeVisible()
  await expect(block.locator('a')).toHaveCount(4)
})
