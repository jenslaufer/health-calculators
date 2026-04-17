import { test, expect } from '@playwright/test'

test.describe('Locale-prefixed route resolution', () => {
  test('/ redirects to /en/', async ({ page }) => {
    await page.goto('')
    await expect(page).toHaveURL(/\/en\/?$/)
  })

  test('/de/ loads home page in German', async ({ page }) => {
    await page.goto('de/')
    await expect(page.locator('h1')).toContainText('Deine Gesundheit, berechnet.')
  })

  test('/en/ loads home page in English', async ({ page }) => {
    await page.goto('en/')
    await expect(page.locator('h1')).toContainText('Your health, calculated.')
  })

  const deCalculators = [
    { slug: 'bmi-rechner', titlePattern: /BMI-Rechner/ },
    { slug: 'wasser-rechner', titlePattern: /Wasserbedarf-Rechner/ },
    { slug: 'koerperfett-rechner', titlePattern: /Körperfett-Rechner/ },
    { slug: 'herzfrequenz-zonen', titlePattern: /Herzfrequenz-Zonen/ },
    { slug: 'idealgewicht-rechner', titlePattern: /Idealgewicht-Rechner/ },
    { slug: 'makro-rechner', titlePattern: /Makro-Rechner/ },
    { slug: 'schlafzyklen-rechner', titlePattern: /Schlafzyklen-Rechner/ },
    { slug: 'tdee-rechner', titlePattern: /TDEE-Rechner/ },
    { slug: 'schwangerschafts-rechner', titlePattern: /Geburtstermin-Rechner/ },
    { slug: 'blutdruck-rechner', titlePattern: /Blutdruck-Rechner/ },
    { slug: 'kaloriendefizit-rechner', titlePattern: /Kaloriendefizit-Rechner/ },
    { slug: 'taille-hueft-verhaeltnis', titlePattern: /Taille-Hüft-Verhältnis/ },
    { slug: 'bmr-rechner', titlePattern: /Grundumsatz-Rechner/ },
  ]

  for (const { slug, titlePattern } of deCalculators) {
    test(`/de/${slug} loads calculator`, async ({ page }) => {
      await page.goto(`de/${slug}`)
      await expect(page).toHaveTitle(titlePattern)
    })
  }

  const enCalculators = [
    { slug: 'bmi-calculator', titlePattern: /BMI Calculator/ },
    { slug: 'water-intake-calculator', titlePattern: /Water Intake Calculator/ },
    { slug: 'body-fat-calculator', titlePattern: /Body Fat Calculator/ },
    { slug: 'heart-rate-zones', titlePattern: /Heart Rate Zone Calculator/ },
    { slug: 'ideal-weight-calculator', titlePattern: /Ideal Weight Calculator/ },
    { slug: 'macro-calculator', titlePattern: /Macro Calculator/ },
    { slug: 'sleep-cycle-calculator', titlePattern: /Sleep Cycle Calculator/ },
    { slug: 'tdee-calculator', titlePattern: /TDEE Calculator/ },
    { slug: 'pregnancy-calculator', titlePattern: /Pregnancy Due Date Calculator/ },
    { slug: 'blood-pressure-calculator', titlePattern: /Blood Pressure Calculator/ },
    { slug: 'calorie-deficit-calculator', titlePattern: /Calorie Deficit Calculator/ },
    { slug: 'waist-hip-ratio-calculator', titlePattern: /Waist-to-Hip Ratio Calculator/ },
    { slug: 'bmr-calculator', titlePattern: /BMR Calculator/ },
  ]

  for (const { slug, titlePattern } of enCalculators) {
    test(`/en/${slug} loads calculator`, async ({ page }) => {
      await page.goto(`en/${slug}`)
      await expect(page).toHaveTitle(titlePattern)
    })
  }

  test('/de/blog loads blog home in German', async ({ page }) => {
    await page.goto('de/blog')
    await expect(page).toHaveTitle(/Gesundheitsblog/)
  })

  test('/en/blog loads blog home in English', async ({ page }) => {
    await page.goto('en/blog')
    await expect(page).toHaveTitle(/Health Blog/)
  })

  test('/de/blog/bmi-berechnen loads blog article', async ({ page }) => {
    await page.goto('de/blog/bmi-berechnen')
    await expect(page.locator('h1')).toContainText('BMI berechnen')
  })

  test('/en/blog/calculate-bmi loads English blog article', async ({ page }) => {
    await page.goto('en/blog/calculate-bmi')
    await expect(page.locator('h1')).toContainText('Calculate BMI')
  })
})

test.describe('Old route redirects', () => {
  const oldRoutes = [
    { old: 'bmi', expected: /\/de\/bmi-rechner/ },
    { old: 'water', expected: /\/de\/wasser-rechner/ },
    { old: 'body-fat', expected: /\/de\/koerperfett-rechner/ },
    { old: 'heart-rate', expected: /\/de\/herzfrequenz-zonen/ },
    { old: 'ideal-weight', expected: /\/de\/idealgewicht-rechner/ },
    { old: 'macros', expected: /\/de\/makro-rechner/ },
    { old: 'sleep', expected: /\/de\/schlafzyklen-rechner/ },
    { old: 'tdee', expected: /\/de\/tdee-rechner/ },
    { old: 'pregnancy', expected: /\/de\/schwangerschafts-rechner/ },
    { old: 'blutdruck-rechner', expected: /\/de\/blutdruck-rechner/ },
    { old: 'kaloriendefizit-rechner', expected: /\/de\/kaloriendefizit-rechner/ },
    { old: 'waist-hip-ratio', expected: /\/de\/taille-hueft-verhaeltnis/ },
    { old: 'blog', expected: /\/de\/blog/ },
    { old: 'blog/bmi-berechnen', expected: /\/de\/blog\/bmi-berechnen/ },
  ]

  for (const { old, expected } of oldRoutes) {
    test(`/${old} redirects to DE equivalent`, async ({ page }) => {
      await page.goto(old)
      await expect(page).toHaveURL(expected)
    })
  }
})

test.describe('Locale switching', () => {
  test('switch from DE home to EN home', async ({ page }) => {
    await page.goto('de/')
    await page.getByRole('button', { name: 'EN' }).first().click()
    await expect(page).toHaveURL(/\/en\/?$/)
    await expect(page.locator('h1')).toContainText('Your health, calculated.')
  })

  test('switch from EN calculator to DE calculator', async ({ page }) => {
    await page.goto('en/bmi-calculator')
    await page.getByRole('button', { name: 'DE' }).first().click()
    await expect(page).toHaveURL(/\/de\/bmi-rechner/)
  })

  test('switch from DE blog to EN blog', async ({ page }) => {
    await page.goto('de/blog')
    await page.getByRole('button', { name: 'EN' }).first().click()
    await expect(page).toHaveURL(/\/en\/blog/)
  })

  test('switch from DE blog article to EN blog article', async ({ page }) => {
    await page.goto('de/blog/bmi-berechnen')
    await page.getByRole('button', { name: 'EN' }).first().click()
    await expect(page).toHaveURL(/\/en\/blog\/calculate-bmi/)
  })

  test('switch from EN blog article to DE blog article', async ({ page }) => {
    await page.goto('en/blog/calculate-bmi')
    await page.getByRole('button', { name: 'DE' }).first().click()
    await expect(page).toHaveURL(/\/de\/blog\/bmi-berechnen/)
  })
})

test.describe('Brand localization', () => {
  test('DE pages show Gesundheitsrechner', async ({ page }) => {
    await page.goto('de/')
    const brand = page.locator('header a').first()
    await expect(brand).toContainText('Gesundheitsrechner')
  })

  test('EN pages show Health Calculators', async ({ page }) => {
    await page.goto('en/')
    const brand = page.locator('header a').first()
    await expect(brand).toContainText('Health Calculators')
  })
})

test.describe('SEO', () => {
  test('html lang is de on German pages', async ({ page }) => {
    await page.goto('de/')
    const lang = await page.getAttribute('html', 'lang')
    expect(lang).toBe('de')
  })

  test('html lang is en on English pages', async ({ page }) => {
    await page.goto('en/')
    const lang = await page.getAttribute('html', 'lang')
    expect(lang).toBe('en')
  })

  test('hreflang alternate links exist on DE page', async ({ page }) => {
    await page.goto('de/bmi-rechner')
    const deLink = page.locator('link[hreflang="de"]')
    const enLink = page.locator('link[hreflang="en"]')
    await expect(deLink).toHaveAttribute('href', /\/de\/bmi-rechner/)
    await expect(enLink).toHaveAttribute('href', /\/en\/bmi-calculator/)
  })

  test('hreflang alternate links exist on EN page', async ({ page }) => {
    await page.goto('en/bmi-calculator')
    const deLink = page.locator('link[hreflang="de"]')
    const enLink = page.locator('link[hreflang="en"]')
    await expect(deLink).toHaveAttribute('href', /\/de\/bmi-rechner/)
    await expect(enLink).toHaveAttribute('href', /\/en\/bmi-calculator/)
  })
})

test.describe('Navigation uses locale prefix', () => {
  test('DE home calculator links use /de/ prefix', async ({ page }) => {
    await page.goto('de/')
    const firstCalcLink = page.locator('a[href*="/de/bmi-rechner"]')
    await expect(firstCalcLink).toBeVisible()
  })

  test('EN home calculator links use /en/ prefix', async ({ page }) => {
    await page.goto('en/')
    const firstCalcLink = page.locator('a[href*="/en/bmi-calculator"]')
    await expect(firstCalcLink).toBeVisible()
  })

  test('DE calculator back link goes to /de/', async ({ page }) => {
    await page.goto('de/bmi-rechner')
    await page.getByRole('link', { name: '← Alle Rechner' }).click()
    await expect(page).toHaveURL(/\/de\/?$/)
  })

  test('EN calculator back link goes to /en/', async ({ page }) => {
    await page.goto('en/bmi-calculator')
    await page.getByRole('link', { name: '← All Calculators' }).click()
    await expect(page).toHaveURL(/\/en\/?$/)
  })
})
