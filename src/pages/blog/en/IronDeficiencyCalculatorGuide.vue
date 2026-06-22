<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Iron Deficiency Calculator: Read Ferritin, TSAT and Symptoms Correctly | Health Calculators',
  description: 'Screen for iron deficiency from ferritin, transferrin saturation, hemoglobin and 10 clinical signs. Cutoffs, latent deficiency, treatment, and diet — explained.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Iron Deficiency Calculator: Read Ferritin, TSAT and Symptoms Correctly',
    description: 'Screen for iron deficiency from ferritin, transferrin saturation, hemoglobin and 10 clinical signs. Cutoffs, latent deficiency, treatment, and diet — explained.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-12',
    dateModified: '2026-05-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/iron-deficiency-calculator-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Iron Deficiency Calculator: Read Ferritin, TSAT and Symptoms Correctly</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 12, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Iron deficiency is the <strong>most common micronutrient deficiency worldwide</strong>. An estimated two billion people are affected — women of reproductive age, vegans, endurance athletes and growing children most of all. It often starts silently, with shrinking iron stores while hemoglobin still looks normal.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide shows how to quantify your iron deficiency risk — using the three key lab markers (ferritin, transferrin saturation and hemoglobin) plus a weighted symptom score.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The three stages of iron deficiency</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Iron deficiency does not appear overnight. Clinically it unfolds in three stages — knowing them lets you act early:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>1. Storage depletion (latent iron deficiency):</strong> Ferritin falls, hemoglobin and TSAT still normal. Early symptoms — fatigue, hair loss, restless legs — already appear.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>2. Iron-deficient erythropoiesis:</strong> Transferrin saturation drops below 20 %. Red blood cells turn smaller and paler; hemoglobin is borderline normal.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>3. Iron-deficiency anemia:</strong> Hemoglobin falls below the WHO cutoff (women 12.0 g/dL, men 13.0 g/dL). Classic anemia signs — breathlessness, tachycardia, pallor — come to the front.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Adult cutoffs</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Marker</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Normal</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Suggestive</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Deficient</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Severe</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Ferritin (ng/mL)</td><td class="px-6 py-3 text-stone-600">≥ 100</td><td class="px-6 py-3 text-stone-600">30–99</td><td class="px-6 py-3 text-stone-600">15–29</td><td class="px-6 py-3 text-stone-600">&lt; 15</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">TSAT (%)</td><td class="px-6 py-3 text-stone-600">≥ 20</td><td class="px-6 py-3 text-stone-600">16–19</td><td class="px-6 py-3 text-stone-600">&lt; 16</td><td class="px-6 py-3 text-stone-600">—</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hb women (g/dL)</td><td class="px-6 py-3 text-stone-600">≥ 12.0</td><td class="px-6 py-3 text-stone-600">11.0–11.9</td><td class="px-6 py-3 text-stone-600">8.0–10.9</td><td class="px-6 py-3 text-stone-600">&lt; 8.0</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hb men (g/dL)</td><td class="px-6 py-3 text-stone-600">≥ 13.0</td><td class="px-6 py-3 text-stone-600">11.0–12.9</td><td class="px-6 py-3 text-stone-600">8.0–10.9</td><td class="px-6 py-3 text-stone-600">&lt; 8.0</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Important:</strong> Ferritin is an acute-phase reactant. In chronic inflammation, kidney disease or cancer ferritin is falsely elevated. There a value up to 100 ng/mL still counts as deficiency — and TSAT becomes the decisive marker.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Typical symptoms in the score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The calculator weights ten typical iron-deficiency signs — some nonspecific (fatigue), others highly specific (pica, restless legs):
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Symptom</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Points</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Note</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Fatigue</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Most common, but nonspecific</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Pale skin</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Inner eyelids, lips, nail beds</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Shortness of breath</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Reduced O₂-carrying capacity</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hair loss</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Diffuse shedding, often with ferritin &lt; 30</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Brittle nails</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Ridges, spoon-shaped nails (koilonychia)</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Restless legs</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Highly specific for iron deficiency</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Pica (ice, dirt)</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Red flag — almost always iron deficiency</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Cold hands/feet</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Peripheral vasoconstriction</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Headache</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Cortical hypoxia</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Poor concentration</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Brain fog, slowed thinking</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Run the iron deficiency calculator</h3>
        <p class="text-stone-300 text-sm mb-5">Ferritin, TSAT, hemoglobin and 10 clinical symptoms — instant result with severity and guidance. Anonymous and free.</p>
        <router-link
          :to="localePath('ironDeficiency')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Common causes of iron deficiency</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Increased demand:</strong> Menstruation (especially heavy periods), pregnancy, growth, intensive endurance training.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Reduced absorption:</strong> Vegan or vegetarian diet, gastric surgery, celiac disease, atrophic gastritis, frequent acid-blocker use.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Blood loss:</strong> Peptic ulcer, hemorrhoids, colon cancer, frequent blood donations, NSAID-induced microbleeding.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Chronic disease:</strong> Kidney failure, heart failure, inflammatory bowel disease — functional iron deficiency despite normal stores.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How iron deficiency is treated</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Oral therapy:</strong> 60–120 mg elemental iron per day, ideally fasting with vitamin C, away from coffee, tea or calcium. Newer trials show that dosing every other day is absorbed better than twice a day.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Intravenous iron:</strong> For oral intolerance, severe deficiency, inflammatory bowel disease, or heart/kidney failure. Advantage: stores refill fast, often after one or two infusions.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Cause workup is mandatory:</strong> In men and postmenopausal women a bleeding source (stomach, colon) must be ruled out — supplementing iron without diagnosing the cause can mask a malignancy.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Iron deficiency and anemia are closely linked, but not every iron deficiency leads straight to anemia. To check whether you are already anemic, run our
          <router-link :to="localeBlogPath('anemia-risk-calculator-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Anemia Risk Calculator</router-link>.
          Because fatigue and dyspnea on exertion can also stem from a weak thyroid, take a look at the
          <router-link :to="localeBlogPath('thyroid-function-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Thyroid Function Calculator</router-link>.
          If your energy budget feels low overall, the
          <router-link :to="localeBlogPath('calculate-bmr')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMR calculator</router-link>
          helps separate diet-related from disease-related fatigue.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Iron deficiency is common, treatable — and starts long before anemia. With our
          <router-link :to="localePath('ironDeficiency')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Iron Deficiency Calculator</router-link>
          you see in seconds whether your numbers and symptoms are off. With ferritin under 30 ng/mL, TSAT under 20 % or several typical symptoms, book a GP visit — usually a simple blood test is enough for diagnosis.
        </p>
      </div>

      <RelatedArticlesEn slug="iron-deficiency-calculator-guide" />
    </div>
  </article>
</template>
