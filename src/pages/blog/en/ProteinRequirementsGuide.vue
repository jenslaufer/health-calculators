<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Protein Requirements Calculator: How Much Protein Do You Really Need? | Health Calculators',
  description: 'Calculate your daily protein requirement based on activity level, goal, and age. Recommendations for sedentary, athletes, weight loss, and muscle building.',
  path: '/en/blog/protein-requirements-guide',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Protein Requirements Calculator: How Much Protein Do You Really Need?',
    description: 'Calculate your daily protein requirement based on activity level, goal, and age. Recommendations for sedentary, athletes, weight loss, and muscle building.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-03',
    dateModified: '2026-04-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/protein-requirements-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Protein Requirements Calculator: How Much Protein Do You Really Need?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 3, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Protein</strong> is the building block of your body. Muscles, enzymes, hormones, and antibodies are made from it. But how much do you actually need per day? The answer depends on your activity level, goal, and age.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this article, we show you the current scientific recommendations — and how to calculate your individual protein requirement.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why Protein Matters</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Protein provides essential amino acids your body cannot produce on its own. It is indispensable for muscle building, recovery, and a strong immune system. Protein also keeps you fuller longer than carbohydrates or fat.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Protein deficiency leads to muscle loss, weakened immunity, and poor wound healing. Adequate intake is especially critical for athletes, older adults, and anyone on a diet.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Protein Needs by Activity Level</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The RDA recommends 0.8 g/kg body weight as a minimum. For physically active people, the optimal range is higher. The table below shows recommendations by activity level:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Activity Level</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Recommendation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Sedentary (desk job)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">0.8 g/kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Moderately active</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1.0 – 1.2 g/kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Active (regular exercise)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1.4 – 1.6 g/kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Athlete / competitive sports</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1.6 – 2.2 g/kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Adjustments for Goal and Age</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Weight Loss</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              In a calorie deficit, increased protein intake (+0.2 g/kg) protects muscle mass. Protein also provides greater satiety, making it easier to stick to your diet.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Muscle Building</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              For muscle building, research recommends intake at the upper end of the range. Distributing protein across 3–5 meals with 20–40 g each optimizes muscle protein synthesis.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Age Over 65</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              After 65, the muscle's anabolic sensitivity decreases. The recommendation increases by +0.2 g/kg to counteract age-related muscle loss (sarcopenia).
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your protein requirement now</h3>
        <p class="text-stone-300 text-sm mb-5">Individual protein need — free and no sign-up required.</p>
        <router-link
          to="/en/protein-need-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Distributing Meals</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Muscle protein synthesis is optimally stimulated at 20–40 g protein per meal. Distribute your daily need evenly across 3–5 meals. At 120 g per day and 4 meals, that's 30 g per meal.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Our <router-link to="/en/protein-need-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Protein Need Calculator</router-link> automatically shows the distribution across your desired number of meals.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Good Protein Sources</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Chicken breast (31 g/100 g), tuna (26 g), salmon (20 g), and eggs (13 g) are top sources. Plant-based options include lentils (9 g), tofu (8 g), and low-fat quark (12 g). Combine different sources for a complete amino acid profile.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Also calculate your <router-link to="/en/blog/calculate-macros" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">macronutrients</router-link> and <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> for the full picture.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Difference From the Protein Calculator</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Our <router-link to="/en/protein-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Protein Calculator</router-link> calculates the optimal distribution of your protein intake across meals and considers diet types (vegan, vegetarian). The Protein Need Calculator focuses on <strong>requirement determination</strong> by activity level and life situation.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Your protein requirement depends on activity, goal, and age. Use our <router-link to="/en/protein-need-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Protein Need Calculator</router-link> for a personalized recommendation. Complement with the <router-link to="/en/tdee-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE Calculator</router-link> and the <router-link to="/en/macro-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Macro Calculator</router-link>.
        </p>
      </div>

      <RelatedArticlesEn slug="protein-requirements-guide" />
    </div>
  </article>
</template>
