import { test, expect } from '@playwright/test'

const englishBlogArticles = [
  {
    slug: 'calculate-bmi',
    title: 'Calculate BMI',
    headings: ['What Is BMI?', 'WHO Classification', 'Limitations'],
    calculatorLink: '/en/bmi-calculator',
  },
  {
    slug: 'calculate-tdee',
    title: 'Calculate TDEE',
    headings: ['Mifflin-St Jeor', 'Activity Factors'],
    calculatorLink: '/en/tdee-calculator',
  },
  {
    slug: 'calculate-sleep-cycles',
    title: 'Sleep Cycles',
    headings: ['What Is a Sleep Cycle?', 'How Many Cycles'],
    calculatorLink: '/en/sleep-cycle-calculator',
  },
  {
    slug: 'calculate-heart-rate-zones',
    title: 'Heart Rate Zones',
    headings: ['Five Heart Rate Zones', 'Two Calculation Methods'],
    calculatorLink: '/en/heart-rate-zones',
  },
  {
    slug: 'calculate-body-fat',
    title: 'Body Fat',
    headings: ['U.S. Navy Method', 'Body Fat Categories'],
    calculatorLink: '/en/body-fat-calculator',
  },
  {
    slug: 'calculate-macros',
    title: 'Macronutrients',
    headings: ['Three Macronutrients', 'Macro Distribution'],
    calculatorLink: '/en/macro-calculator',
  },
  {
    slug: 'calculate-water-intake',
    title: 'Water Intake',
    headings: ['The Basic Formula', 'Influencing Factors'],
    calculatorLink: '/en/water-intake-calculator',
  },
  {
    slug: 'calculate-ideal-weight',
    title: 'Ideal Weight',
    headings: ['Four Formulas', 'No Single Ideal Weight'],
    calculatorLink: '/en/ideal-weight-calculator',
  },
  {
    slug: 'calculate-due-date',
    title: 'Due Date',
    headings: ["Naegele's Rule", 'Pregnancy Weeks'],
    calculatorLink: '/en/pregnancy-calculator',
  },
  {
    slug: 'measure-blood-pressure',
    title: 'Blood Pressure',
    headings: ['Blood Pressure Values', 'AHA Categories'],
    calculatorLink: '/en/blood-pressure-calculator',
  },
  {
    slug: 'calculate-calorie-deficit',
    title: 'Calorie Deficit',
    headings: ['7,700 kcal Rule', 'Mifflin-St Jeor'],
    calculatorLink: '/en/calorie-deficit-calculator',
  },
  {
    slug: 'calculate-waist-hip-ratio',
    title: 'Waist-to-Hip Ratio',
    headings: ['What Is the Waist-to-Hip Ratio?', 'WHO Thresholds'],
    calculatorLink: '/en/waist-hip-ratio-calculator',
  },
  {
    slug: 'calculate-bmr',
    title: 'Calculate BMR',
    headings: ['Mifflin-St Jeor', 'Harris-Benedict'],
    calculatorLink: '/en/bmr-calculator',
  },
]

test.describe('English blog articles render correctly', () => {
  for (const article of englishBlogArticles) {
    test(`${article.slug} loads without errors`, async ({ page }) => {
      await page.goto(`en/blog/${article.slug}`)
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
      await expect(page.getByRole('heading', { level: 1 })).toContainText(article.title)
    })
  }
})

test.describe('English blog articles have expected content sections', () => {
  for (const article of englishBlogArticles) {
    test(`${article.slug} has expected headings`, async ({ page }) => {
      await page.goto(`en/blog/${article.slug}`)
      for (const heading of article.headings) {
        await expect(page.getByRole('heading', { name: new RegExp(heading, 'i') }).first()).toBeVisible()
      }
    })
  }
})

test.describe('English blog articles link to calculators', () => {
  for (const article of englishBlogArticles) {
    test(`${article.slug} links to ${article.calculatorLink}`, async ({ page }) => {
      await page.goto(`en/blog/${article.slug}`)
      const ctaLink = page.locator(`a[href="/health-calculators${article.calculatorLink}"]`)
      await expect(ctaLink.first()).toBeVisible()
    })
  }
})

test.describe('English blog articles have related articles', () => {
  for (const article of englishBlogArticles) {
    test(`${article.slug} has related articles section`, async ({ page }) => {
      await page.goto(`en/blog/${article.slug}`)
      const section = page.getByTestId('related-articles')
      await expect(section).toBeVisible()
      const links = section.locator('a')
      const count = await links.count()
      expect(count).toBeGreaterThanOrEqual(1)
    })
  }
})

test.describe('English blog articles use English internal links', () => {
  for (const article of englishBlogArticles) {
    test(`${article.slug} back link goes to English blog home`, async ({ page }) => {
      await page.goto(`en/blog/${article.slug}`)
      const backLink = page.locator('a[href="/health-calculators/en/blog"]').first()
      await expect(backLink).toBeVisible()
    })
  }
})

test.describe('English blog articles have English content', () => {
  for (const article of englishBlogArticles) {
    test(`${article.slug} contains English text`, async ({ page }) => {
      await page.goto(`en/blog/${article.slug}`)
      const body = await page.locator('article').textContent()
      expect(body).toContain('read')
      expect(body).not.toContain('Lesezeit')
    })
  }
})
