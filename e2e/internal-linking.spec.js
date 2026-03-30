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
  { slug: 'taille-hueft-verhaeltnis-berechnen', title: 'Taille-Hüft-Verhältnis berechnen' },
]

const calculatorPages = [
  { path: '/de/bmi-rechner', name: 'BMI Calculator' },
  { path: '/de/koerperfett-rechner', name: 'Body Fat Calculator' },
  { path: '/de/tdee-rechner', name: 'TDEE Calculator' },
  { path: '/de/idealgewicht-rechner', name: 'Ideal Weight Calculator' },
  { path: '/de/makro-rechner', name: 'Macro Calculator' },
  { path: '/de/wasser-rechner', name: 'Water Intake Calculator' },
  { path: '/de/schlafzyklen-rechner', name: 'Sleep Cycle Calculator' },
  { path: '/de/herzfrequenz-zonen', name: 'Heart Rate Zone Calculator' },
  { path: '/de/blutdruck-rechner', name: 'Blood Pressure Calculator' },
  { path: '/de/kaloriendefizit-rechner', name: 'Calorie Deficit Calculator' },
  { path: '/de/taille-hueft-verhaeltnis', name: 'Waist-to-Hip Ratio Calculator' },
]

test.describe('Blog articles have Related Articles section', () => {
  for (const article of blogArticles) {
    test(`${article.slug} has related articles`, async ({ page }) => {
      await page.goto(`de/blog/${article.slug}`)
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
      await page.goto(calc.path.slice(1))  // removes leading slash
      const banner = page.getByTestId('blog-banner')
      await expect(banner).toBeVisible()
      const link = banner.locator('a')
      await expect(link).toHaveAttribute('href', /\/blog\//)
    })
  }
})

test('BlogHome lists all 15 articles', async ({ page }) => {
  await page.goto('de/blog')
  const articleCards = page.locator('.space-y-4 > a')
  await expect(articleCards).toHaveCount(15)
})
