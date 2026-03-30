<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Calculate BMR: Basal Metabolic Rate With Two Formulas | Health Calculators',
  description: 'Calculate your Basal Metabolic Rate (BMR) using Mifflin-St Jeor and Harris-Benedict formulas. Activity factors, influencing factors and practical tips.',
  path: '/en/blog/calculate-bmr',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calculate BMR: Basal Metabolic Rate With Two Formulas',
    description: 'Calculate your Basal Metabolic Rate (BMR) using Mifflin-St Jeor and Harris-Benedict formulas. Activity factors, influencing factors and practical tips.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-30',
    dateModified: '2026-03-30',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/en/blog/calculate-bmr',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Calculate BMR: Basal Metabolic Rate With Two Formulas</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">March 30, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your <strong>Basal Metabolic Rate (BMR)</strong> is the number of calories your body burns at complete rest — just to keep you alive. Breathing, heartbeat, brain activity, cell repair — all of this costs energy.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          BMR accounts for roughly <strong>60–75%</strong> of your total daily calorie burn. Knowing it is the first step to calculating your <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Is BMR?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          BMR measures the calories your body needs for 24 hours of complete rest — fasting, at a neutral temperature. It depends on:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Body weight</strong> — more mass requires more energy</li>
          <li><strong>Height</strong> — larger body surface area needs more energy</li>
          <li><strong>Age</strong> — BMR decreases with age</li>
          <li><strong>Gender</strong> — men have a higher BMR on average</li>
          <li><strong>Muscle mass</strong> — muscle burns more energy than fat</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Mifflin-St Jeor Formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The Mifflin-St Jeor formula (1990) is considered the most accurate method for calculating BMR. It is recommended by the Academy of Nutrition and Dietetics:
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Men: BMR = 10 &times; Weight(kg) + 6.25 &times; Height(cm) &minus; 5 &times; Age + 5</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Women: BMR = 10 &times; Weight(kg) + 6.25 &times; Height(cm) &minus; 5 &times; Age &minus; 161</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Example:</strong> A 30-year-old male, 180 cm, 80 kg: 10 &times; 80 + 6.25 &times; 180 &minus; 5 &times; 30 + 5 = <strong>1,780 kcal/day</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Harris-Benedict Formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The Harris-Benedict formula was developed in 1919 and revised by Roza &amp; Shizgal in 1984. It tends to produce slightly higher values than Mifflin-St Jeor:
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Men: BMR = 13.397 &times; Weight(kg) + 4.799 &times; Height(cm) &minus; 5.677 &times; Age + 88.362</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Women: BMR = 9.247 &times; Weight(kg) + 3.098 &times; Height(cm) &minus; 4.330 &times; Age + 447.593</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Harris-Benedict tends to slightly overestimate BMR — especially in overweight individuals. For most people, Mifflin-St Jeor is the better choice.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">From BMR to Total Daily Burn</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your BMR is only part of the picture. To find your actual daily calorie needs, multiply BMR by an activity factor:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Activity Level</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Factor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Example (BMR 1,780)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Sedentary</td><td class="px-6 py-3 text-stone-900 font-medium">1.2</td><td class="px-6 py-3 text-stone-900 font-medium">2,136 kcal</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Lightly active</td><td class="px-6 py-3 text-stone-900 font-medium">1.375</td><td class="px-6 py-3 text-stone-900 font-medium">2,448 kcal</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Moderately active</td><td class="px-6 py-3 text-stone-900 font-medium">1.55</td><td class="px-6 py-3 text-stone-900 font-medium">2,759 kcal</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Very active</td><td class="px-6 py-3 text-stone-900 font-medium">1.725</td><td class="px-6 py-3 text-stone-900 font-medium">3,070 kcal</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Extremely active</td><td class="px-6 py-3 text-stone-900 font-medium">1.9</td><td class="px-6 py-3 text-stone-900 font-medium">3,382 kcal</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The result is your <strong>TDEE (Total Daily Energy Expenditure)</strong> — the foundation of any nutrition plan. Learn more in our <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE guide</router-link>.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your BMR now</h3>
        <p class="text-stone-300 text-sm mb-5">Mifflin-St Jeor and Harris-Benedict compared — free and no sign-up required.</p>
        <router-link
          to="/en/bmr-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Affects Your BMR?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beyond the standard factors (weight, height, age, gender), several other things influence your BMR:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Muscle mass:</strong> Muscle burns significantly more calories at rest than fat tissue. Strength training can permanently increase your BMR.</li>
          <li><strong>Thyroid function:</strong> Thyroid hormones regulate metabolism. An underactive or overactive thyroid directly affects BMR.</li>
          <li><strong>Crash diets:</strong> Extreme calorie restriction lowers BMR — your body adapts and burns less (metabolic adaptation).</li>
          <li><strong>Genetics:</strong> Individual genetic differences can cause BMR to vary by 5–10%.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMR and Nutrition Goals</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your BMR is the absolute floor of your calorie intake. You should never consistently eat below your BMR. For healthy weight loss, aim for a moderate <router-link to="/en/blog/calculate-calorie-deficit" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">calorie deficit</router-link> of 300–500 kcal below your TDEE.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          How to split your calories optimally is covered in our <router-link to="/en/blog/calculate-macros" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">macronutrient guide</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          BMR is the foundation of every nutrition calculation. Calculate your <router-link to="/en/bmr-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMR with our calculator</router-link> and use the result to determine your <router-link to="/en/tdee-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">total daily energy expenditure</router-link>.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-bmr" />
    </div>
  </article>
</template>
