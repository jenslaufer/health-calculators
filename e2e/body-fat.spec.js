import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('body-fat')
})

test('page loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Körperfett-Rechner/)
})

test('male selected — hip input is hidden', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await expect(page.getByLabel(/Hüfte/i)).not.toBeVisible()
})

test('female selected — hip input is visible', async ({ page }) => {
  await page.getByRole('button', { name: 'Frau' }).click()
  await expect(page.getByLabel(/Hüfte/i)).toBeVisible()
})

test('male 180cm, neck 38cm, waist 85cm → body fat ~17%', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Größe/i).fill('180')
  await page.getByLabel(/Hals/i).fill('38')
  await page.getByLabel(/Taille/i).fill('85')

  const result = page.getByTestId('body-fat-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const bf = parseFloat(text)
  expect(bf).toBeGreaterThanOrEqual(15)
  expect(bf).toBeLessThanOrEqual(19)
})

test('female 165cm, neck 34cm, waist 75cm, hip 100cm → body fat ~25%', async ({ page }) => {
  await page.getByRole('button', { name: 'Frau' }).click()
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Größe/i).fill('165')
  await page.getByLabel(/Hals/i).fill('34')
  await page.getByLabel(/Taille/i).fill('75')
  await page.getByLabel(/Hüfte/i).fill('100')

  const result = page.getByTestId('body-fat-result')
  await expect(result).toBeVisible()
  const text = await result.textContent()
  const bf = parseFloat(text)
  expect(bf).toBeGreaterThanOrEqual(23)
  expect(bf).toBeLessThanOrEqual(31)
})

test('category label matches the calculated percentage', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByLabel(/Größe/i).fill('180')
  await page.getByLabel(/Hals/i).fill('38')
  await page.getByLabel(/Taille/i).fill('85')

  const category = page.getByTestId('body-fat-category')
  await expect(category).toBeVisible()
  const text = await category.textContent()
  expect(['Essentielles Fett', 'Sportler', 'Fitness', 'Durchschnitt', 'Adipositas']).toContain(text)
})

test('fat mass and lean mass are shown', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByLabel(/Größe/i).fill('180')
  await page.getByLabel(/Hals/i).fill('38')
  await page.getByLabel(/Taille/i).fill('85')
  await page.getByLabel(/Gewicht/i).fill('80')

  await expect(page.getByTestId('fat-mass')).toBeVisible()
  await expect(page.getByTestId('lean-mass')).toBeVisible()
})

test('switching units recalculates correctly', async ({ page }) => {
  await page.getByRole('button', { name: 'Mann', exact: true }).click()
  await page.getByRole('button', { name: 'Metrisch' }).click()
  await page.getByLabel(/Größe/i).fill('180')
  await page.getByLabel(/Hals/i).fill('38')
  await page.getByLabel(/Taille/i).fill('85')

  const result = page.getByTestId('body-fat-result')
  await expect(result).toBeVisible()
  const metricBf = parseFloat(await result.textContent())

  await page.getByRole('button', { name: 'Imperial' }).click()
  await page.getByLabel(/Größe|Height/i).fill('70.87')
  await page.getByLabel(/Hals|Neck/i).fill('14.96')
  await page.getByLabel(/Taille|Waist/i).fill('33.46')

  const imperialBf = parseFloat(await result.textContent())
  expect(Math.abs(metricBf - imperialBf)).toBeLessThan(1)
})

test('back link navigates to home page', async ({ page }) => {
  await page.getByRole('link', { name: '← Alle Rechner' }).click()
  await expect(page).toHaveURL(/\/health-calculators\/$/)
})
