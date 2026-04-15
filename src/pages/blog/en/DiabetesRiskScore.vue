<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Diabetes Risk Score: FINDRISC Explained | Health Calculators',
  description: 'Calculate your type 2 diabetes risk with the FINDRISC score. How the test works, what the points mean, and which measures reduce your risk.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Diabetes Risk Score: FINDRISC Explained',
    description: 'Calculate your type 2 diabetes risk with the FINDRISC score. How the test works, what the points mean, and which measures reduce your risk.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/diabetes-risk-score',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Diabetes Risk Score: FINDRISC Explained</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 15, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Type 2 diabetes develops gradually — often over years without any symptoms. The <strong>FINDRISC score</strong> (Finnish Diabetes Risk Score) is a validated screening tool that estimates your 10-year risk with just 8 simple questions.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Our <router-link :to="localePath('diabetesRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes Risk Calculator</router-link> computes your personal FINDRISC score and provides recommendations to reduce your risk.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is the FINDRISC score?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          FINDRISC was developed in 2003 by Lindström and Tuomilehto in Finland and published in the journal <em>Diabetes Care</em>. It is based on a long-term study of over 4,700 participants and is now the most widely used diabetes screening tool in Europe.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The questionnaire covers 8 questions and requires no blood draw or medical examination. It identifies people at elevated risk who could benefit from further testing and preventive measures.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The 8 risk factors in detail</h2>

        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-5 py-3 font-semibold text-stone-700">Factor</th>
                <th class="text-left px-5 py-3 font-semibold text-stone-700">Points</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-5 py-3 text-stone-600">Age under 45</td>
                <td class="px-5 py-3 font-medium tabular-nums">0</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Age 45–54</td>
                <td class="px-5 py-3 font-medium tabular-nums">2</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Age 55–64</td>
                <td class="px-5 py-3 font-medium tabular-nums">3</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Age over 64</td>
                <td class="px-5 py-3 font-medium tabular-nums">4</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">BMI 25–30 kg/m²</td>
                <td class="px-5 py-3 font-medium tabular-nums">1</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">BMI over 30 kg/m²</td>
                <td class="px-5 py-3 font-medium tabular-nums">3</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Waist elevated (men 94–102 cm / women 80–88 cm)</td>
                <td class="px-5 py-3 font-medium tabular-nums">3</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Waist markedly elevated (men &gt;102 cm / women &gt;88 cm)</td>
                <td class="px-5 py-3 font-medium tabular-nums">4</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">No daily physical activity ≥ 30 min</td>
                <td class="px-5 py-3 font-medium tabular-nums">2</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">No daily vegetables or fruit</td>
                <td class="px-5 py-3 font-medium tabular-nums">1</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Blood pressure medication</td>
                <td class="px-5 py-3 font-medium tabular-nums">2</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">History of high blood glucose</td>
                <td class="px-5 py-3 font-medium tabular-nums">5</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Diabetes in grandparent, aunt/uncle or first cousin</td>
                <td class="px-5 py-3 font-medium tabular-nums">3</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Diabetes in parent, sibling or own child</td>
                <td class="px-5 py-3 font-medium tabular-nums">5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500">Source: Lindström J, Tuomilehto J. Diabetes Care. 2003;26(3):725-731.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What do the points mean?</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-5 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-5 py-3 font-semibold text-stone-700">Risk</th>
                <th class="text-left px-5 py-3 font-semibold text-stone-700">10-year probability</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">0–7</td>
                <td class="px-5 py-3 text-green-700 font-medium">Low</td>
                <td class="px-5 py-3 text-stone-600">approx. 1%</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">8–11</td>
                <td class="px-5 py-3 text-lime-700 font-medium">Slightly elevated</td>
                <td class="px-5 py-3 text-stone-600">approx. 4%</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">12–14</td>
                <td class="px-5 py-3 text-yellow-700 font-medium">Moderate</td>
                <td class="px-5 py-3 text-stone-600">approx. 17%</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">15–20</td>
                <td class="px-5 py-3 text-orange-700 font-medium">High</td>
                <td class="px-5 py-3 text-stone-600">approx. 33%</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">21–26</td>
                <td class="px-5 py-3 text-red-700 font-medium">Very high</td>
                <td class="px-5 py-3 text-stone-600">approx. 50%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why waist circumference matters so much</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Abdominal fat — also called visceral fat — is metabolically active and promotes insulin resistance. Waist circumference is therefore a stronger predictor of type 2 diabetes than BMI alone.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Thresholds:</strong> For men, 94 cm is considered elevated and 102 cm markedly elevated. For women, the thresholds are 80 cm and 88 cm. Waist circumference is measured standing at the level of the lowest rib.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What to do with an elevated score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A FINDRISC score of 12 or above calls for further evaluation. This does not mean you have diabetes — but it is worth taking action.
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="text-stone-400 mt-0.5 font-bold">›</span>
            <div>
              <strong class="text-stone-800">Increase activity:</strong>
              <span class="text-stone-600"> At least 150 minutes of moderate activity per week. Studies show up to a 58% risk reduction from exercise alone.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-stone-400 mt-0.5 font-bold">›</span>
            <div>
              <strong class="text-stone-800">Lose weight:</strong>
              <span class="text-stone-600"> Even a 5–7% reduction in body weight noticeably improves insulin sensitivity.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-stone-400 mt-0.5 font-bold">›</span>
            <div>
              <strong class="text-stone-800">Improve your diet:</strong>
              <span class="text-stone-600"> Daily vegetables and fruit, fibre-rich whole grains, less sugar and saturated fat.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-stone-400 mt-0.5 font-bold">›</span>
            <div>
              <strong class="text-stone-800">Monitor blood glucose:</strong>
              <span class="text-stone-600"> Have fasting blood glucose and HbA1c checked by your doctor. Prediabetes is reversible — if caught in time.</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Limitations of FINDRISC</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          FINDRISC is a screening tool, not a diagnostic instrument. It was developed for type 2 diabetes — type 1 diabetes or MODY (monogenic diabetes) are not captured. People already diagnosed with diabetes should not use it for self-assessment.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          A low score does not rule out diabetes. A high score does not mean you have diabetes. When in doubt, always seek medical advice.
        </p>
      </div>

      <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-8">
        <p class="text-sm font-semibold text-stone-700 mb-2">Related calculators</p>
        <ul class="space-y-1">
          <li>
            <router-link :to="localePath('hba1c')" class="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">HbA1c Converter</router-link>
            — Convert long-term blood glucose between mmol/mol and %
          </li>
          <li>
            <router-link :to="localePath('bloodSugar')" class="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">Blood Sugar Converter</router-link>
            — Understand and compare mg/dL and mmol/L
          </li>
          <li>
            <router-link :to="localePath('bmi')" class="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">BMI Calculator</router-link>
            — Calculate and interpret your Body Mass Index
          </li>
        </ul>
      </div>

    </div>

    <RelatedArticles slug="diabetes-risk-score" />
  </article>
</template>
