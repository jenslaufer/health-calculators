import { test, expect } from '@playwright/test'

const enCalculators = [
  { slug: 'bmi-calculator', program: 'Hims' },
  { slug: 'body-fat-calculator', program: 'Hims' },
  { slug: 'calorie-deficit-calculator', program: 'Hims' },
  { slug: 'tdee-calculator', program: 'Hims' },
  { slug: 'macro-calculator', program: 'Noom' },
  { slug: 'bmr-calculator', program: 'Noom' },
  { slug: 'protein-calculator', program: 'Thorne' },
  { slug: 'water-intake-calculator', program: 'Ritual' },
  { slug: 'heart-rate-zones', program: 'AG1' },
  { slug: 'ideal-weight-calculator', program: 'AG1' },
  { slug: 'sleep-cycle-calculator', program: 'AG1' },
  { slug: 'blood-pressure-calculator', program: 'AG1' },
  { slug: 'pregnancy-calculator', program: 'AG1' },
  { slug: 'ovulation-calculator', program: 'AG1' },
  { slug: 'intermittent-fasting-calculator', program: 'AG1' },
  { slug: 'waist-hip-ratio-calculator', program: 'AG1' },
  { slug: 'calories-burned', program: 'AG1' },
]

for (const { slug, program } of enCalculators) {
  test(`EN ${slug} shows affiliate banner`, async ({ page }) => {
    await page.goto(`en/${slug}`)
    const banner = page.getByTestId('affiliate-banner')
    await expect(banner).toBeVisible()
    await expect(banner.getByText('Ad', { exact: true })).toBeVisible()
    await expect(banner.locator('a')).toHaveAttribute('rel', 'noopener sponsored')
  })
}

test('DE calculator shows German affiliate (not English programs)', async ({ page }) => {
  await page.goto('de/bmi-rechner')
  const banner = page.getByTestId('affiliate-banner')
  await expect(banner).toBeVisible()
  await expect(banner.getByText('Anzeige', { exact: true })).toBeVisible()
})
