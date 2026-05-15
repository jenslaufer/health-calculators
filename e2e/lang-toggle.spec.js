import { test, expect } from '@playwright/test'

test.describe('lang toggle — crawlable <a href> (issue #258)', () => {
  test('DE page has crawler-visible <a> with EN href in DOM', async ({ page }) => {
    await page.goto('de/bmi-rechner')
    const toggle = page.locator('a[aria-label="Switch to English"]').first()
    await expect(toggle).toBeVisible()
    const href = await toggle.getAttribute('href')
    expect(href).toMatch(/^\/en\//)
  })

  test('click EN toggle navigates to EN page via SPA', async ({ page }) => {
    await page.goto('de/bmi-rechner')
    const toggle = page.locator('a[aria-label="Switch to English"]').first()
    const href = await toggle.getAttribute('href')
    await toggle.click()
    await expect(page).toHaveURL(href)
  })
})
