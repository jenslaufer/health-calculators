import { test, expect } from '@playwright/test'

const blogArticles = [
  { slug: 'bmi-berechnen', title: 'BMI berechnen' },
  { slug: 'idealgewicht-berechnen', title: 'Idealgewicht berechnen' },
  { slug: 'koerperfett-berechnen', title: 'Körperfettanteil berechnen' },
  { slug: 'tdee-berechnen', title: 'TDEE berechnen' },
  { slug: 'makronaehrstoffe-berechnen', title: 'Makronährstoffe berechnen' },
  { slug: 'wasserbedarf-berechnen', title: 'Wasserbedarf berechnen' },
  { slug: 'schlafzyklen-berechnen', title: 'Schlafzyklen berechnen' },
  { slug: 'herzfrequenz-zonen-berechnen', title: 'Herzfrequenz-Zonen berechnen' },
  { slug: 'blutdruck-richtig-messen', title: 'Blutdruck richtig messen' },
  { slug: 'kaloriendefizit-berechnen', title: 'Kaloriendefizit berechnen' },
]

const calculatorPages = [
  { path: '/bmi', name: 'BMI Calculator' },
  { path: '/body-fat', name: 'Body Fat Calculator' },
  { path: '/tdee', name: 'TDEE Calculator' },
  { path: '/ideal-weight', name: 'Ideal Weight Calculator' },
  { path: '/macros', name: 'Macro Calculator' },
  { path: '/water', name: 'Water Intake Calculator' },
  { path: '/sleep', name: 'Sleep Cycle Calculator' },
  { path: '/heart-rate', name: 'Heart Rate Zone Calculator' },
  { path: '/blutdruck-rechner', name: 'Blood Pressure Calculator' },
  { path: '/kaloriendefizit-rechner', name: 'Calorie Deficit Calculator' },
]

test.describe('Blog articles have Related Articles section', () => {
  for (const article of blogArticles) {
    test(`${article.slug} has related articles`, async ({ page }) => {
      await page.goto(`blog/${article.slug}`)
      const section = page.getByTestId('related-articles')
      await expect(section).toBeVisible()
      const links = section.locator('a')
      const count = await links.count()
      expect(count).toBeGreaterThanOrEqual(1)
      expect(count).toBeLessThanOrEqual(3)
    })
  }
})

test.describe('Calculator pages link to their blog article', () => {
  for (const calc of calculatorPages) {
    test(`${calc.path} has blog banner`, async ({ page }) => {
      await page.goto(calc.path.slice(1))
      const banner = page.getByTestId('blog-banner')
      await expect(banner).toBeVisible()
      const link = banner.locator('a')
      await expect(link).toHaveAttribute('href', /\/blog\//)
    })
  }
})

test('BlogHome lists all 11 articles', async ({ page }) => {
  await page.goto('blog')
  const articleCards = page.locator('.space-y-4 > a')
  await expect(articleCards).toHaveCount(11)
})
