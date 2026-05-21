import { readFileSync, writeFileSync } from 'fs'

const problemFiles = [
  '/workspace/repo/src/pages/BabyFeedingAmountCalculator.vue',
  '/workspace/repo/src/pages/BabyMilestonesCalculator.vue',
  '/workspace/repo/src/pages/BreastMilkAlcoholCalculator.vue',
  '/workspace/repo/src/pages/ChildCaloriesCalculator.vue',
  '/workspace/repo/src/pages/ChildGrowthCalculator.vue',
  '/workspace/repo/src/pages/CorrectedCalciumCalculator.vue',
  '/workspace/repo/src/pages/FertilityWindowCalculator.vue',
  '/workspace/repo/src/pages/HeadCircumferenceCalculator.vue',
  '/workspace/repo/src/pages/PmsSymptomCalculator.vue',
  '/workspace/repo/src/pages/PregnancyBMICalculator.vue',
  '/workspace/repo/src/pages/PregnancyCaloriesCalculator.vue',
  '/workspace/repo/src/pages/ThyroidFunctionCalculator.vue',
]

const importLine = `import RelatedCalculators from '../components/RelatedCalculators.vue'`

for (const filePath of problemFiles) {
  let content = readFileSync(filePath, 'utf8')
  const lines = content.split('\n')

  // Remove the misplaced import line (which broke a multi-line import)
  const badLineIdx = lines.findIndex(l => l.trim() === importLine)
  if (badLineIdx === -1) {
    console.log(`SKIP (no bad line found): ${filePath}`)
    continue
  }
  lines.splice(badLineIdx, 1)

  // Now find the true last import line — handling multi-line imports
  // Track through lines finding the last import statement end
  let lastImportEnd = -1
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    // Check if this is the start of an import statement
    if (line.match(/^import\s/)) {
      // Check if it's a complete single-line import
      if (line.match(/from\s+['"][^'"]+['"]/)) {
        lastImportEnd = i
        i++
        continue
      }
      // It's a multi-line import — find the closing line with "} from ..."
      let j = i + 1
      while (j < lines.length) {
        if (lines[j].match(/\}\s*from\s+['"][^'"]+['"]/)) {
          lastImportEnd = j
          i = j + 1
          break
        }
        j++
      }
      if (j >= lines.length) {
        i++ // safety
      }
      continue
    }
    i++
  }

  if (lastImportEnd === -1) {
    console.log(`SKIP (no import found): ${filePath}`)
    continue
  }

  // Insert after the last import line
  lines.splice(lastImportEnd + 1, 0, importLine)

  writeFileSync(filePath, lines.join('\n'))
  console.log(`Fixed: ${filePath}`)
}
