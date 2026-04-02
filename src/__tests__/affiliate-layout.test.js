import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const pagesDir = resolve(__dirname, '../pages')

/**
 * Verifies that AffiliateBanner appears between the input card and the results
 * section in the template of each calculator page.
 *
 * Strategy: extract the <template> block, then check that:
 * 1. <AffiliateBanner appears in the template
 * 2. The AffiliateBanner comes AFTER the input card closing </div>
 * 3. The AffiliateBanner comes BEFORE the results section (v-if on result data)
 */
function getTemplate(fileName) {
  const content = readFileSync(resolve(pagesDir, fileName), 'utf-8')
  const match = content.match(/<template>([\s\S]*)<\/template>/)
  return match ? match[1] : ''
}

function getAffiliateBannerIndex(template) {
  return template.indexOf('<AffiliateBanner')
}

const calculators = [
  { file: 'BmiCalculator.vue', resultMarker: 'v-if="bmi"' },
  { file: 'BloodPressureCalculator.vue', resultMarker: 'v-if="result"' },
  { file: 'BodyFatCalculator.vue', resultMarker: 'v-if="bodyFat"' },
  { file: 'BmrCalculator.vue', resultMarker: 'v-if="bmr"' },
  { file: 'CalorieDeficitCalculator.vue', resultMarker: 'v-if="hasResult"' },
  { file: 'HeartRateZones.vue', resultMarker: 'v-if="hrMax"' },
  { file: 'IdealWeightCalculator.vue', resultMarker: 'data-testid="results"' },
  { file: 'MacroCalculator.vue', resultMarker: 'v-if="targetCalories"' },
  { file: 'OvulationCalculator.vue', resultMarker: 'v-if="hasResults"' },
  { file: 'PregnancyCalculator.vue', resultMarker: 'v-if="hasResults"' },
  { file: 'ProteinCalculator.vue', resultMarker: 'v-if="dailyProtein"' },
  { file: 'SleepCycleCalculator.vue', resultMarker: 'v-if="options.length"' },
  { file: 'TdeeCalculator.vue', resultMarker: 'v-if="tdee"' },
  { file: 'WaistHipRatioCalculator.vue', resultMarker: 'v-if="whr"' },
  { file: 'WaterIntakeCalculator.vue', resultMarker: 'v-if="liters"' },
]

describe('AffiliateBanner layout order — all calculators', () => {
  it.each(calculators)(
    '$file: AffiliateBanner appears between input and results',
    ({ file, resultMarker }) => {
      const template = getTemplate(file)

      const bannerIdx = getAffiliateBannerIndex(template)
      expect(bannerIdx, `${file} must contain <AffiliateBanner`).toBeGreaterThan(-1)

      // The results section (identified by its v-if) must come AFTER the banner
      const resultsIdx = template.indexOf(resultMarker)
      expect(resultsIdx, `${file} must contain ${resultMarker}`).toBeGreaterThan(-1)
      expect(bannerIdx, `${file}: AffiliateBanner must appear before results section`).toBeLessThan(resultsIdx)
    }
  )

  it.each(calculators)(
    '$file: AffiliateBanner is NOT inside input card',
    ({ file }) => {
      const template = getTemplate(file)
      const bannerIdx = getAffiliateBannerIndex(template)

      // The banner should be a top-level element, not nested inside the first card.
      // Check that the banner is preceded by a closing </div> (end of input card)
      // within the last 50 characters before it.
      const before = template.substring(Math.max(0, bannerIdx - 100), bannerIdx)
      expect(before, `${file}: AffiliateBanner should follow a closing </div>`).toMatch(/<\/div>/)
    }
  )

  it.each(calculators)(
    '$file: BlogBanner and AdSlot come after results section',
    ({ file, resultMarker }) => {
      const template = getTemplate(file)
      const resultsIdx = template.indexOf(resultMarker)
      const blogIdx = template.indexOf('<BlogBanner')
      const adIdx = template.indexOf('<AdSlot')

      expect(blogIdx, `${file}: BlogBanner must come after results`).toBeGreaterThan(resultsIdx)
      expect(adIdx, `${file}: AdSlot must come after results`).toBeGreaterThan(resultsIdx)
    }
  )
})
