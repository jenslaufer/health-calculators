<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Calculate Heart Rate Zones: Train in the Right Range | Health Calculators',
  description: 'Calculate the five heart rate zones. Standard and Karvonen methods for targeted training from fat burn to VO2max.',
  path: '/en/blog/calculate-heart-rate-zones',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calculate Heart Rate Zones: Train in the Right Range',
    description: 'Calculate the five heart rate zones. Standard and Karvonen methods for targeted training from fat burn to VO2max.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/calculate-heart-rate-zones',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Calculate Heart Rate Zones: Train in the Right Range</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">March 25, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Whether fat burning, endurance, or sprint training — every training goal has its own <strong>heart rate zone</strong>. Training in the right zone helps you reach your goal faster and avoid overtraining.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this article, we explain the five zones, the two calculation methods, and how to apply this knowledge to your training.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Five Heart Rate Zones</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 1 — Recovery (50–60% MHR)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Light walking, active recovery. Improves general health and supports recovery after hard training.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 2 — Fat Burn (60–70% MHR)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Easy jogging, cycling. Your body burns the highest percentage of fat here. Ideal for building aerobic base.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 3 — Aerobic (70–80% MHR)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Moderate pace, moderate effort. Improves cardiovascular fitness and endurance.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 4 — Anaerobic (80–90% MHR)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Interval training, tempo changes. Increases speed, power, and lactate threshold.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 5 — VO2max (90–100% MHR)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Maximum effort, sprints. Only short intervals possible. Develops peak performance.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Two Calculation Methods</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Standard Method</h3>
            <div class="bg-stone-50 border border-stone-200 rounded-lg p-4 mb-2">
              <p class="text-sm font-semibold text-stone-900">MHR = 220 &minus; Age</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">Simple and quick. Only requires your age.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Karvonen Method</h3>
            <div class="bg-stone-50 border border-stone-200 rounded-lg p-4 mb-2">
              <p class="text-sm font-semibold text-stone-900">Target HR = Resting HR + (HRR &times; Intensity)</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">More accurate as it accounts for resting heart rate. HRR = MHR &minus; Resting HR.</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your heart rate zones now</h3>
        <p class="text-stone-300 text-sm mb-5">Standard and Karvonen methods — free and no sign-up required.</p>
        <router-link
          to="/en/heart-rate-zones"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Training and Nutrition</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Effective training requires proper fuel. Calculate your <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE (daily calorie burn)</router-link> to ensure your body has enough energy for your training load.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Heart rate zones make your training measurable and goal-oriented. Use our <router-link to="/en/heart-rate-zones" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Heart Rate Zone Calculator</router-link> and train specifically in the zone that matches your goal.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-heart-rate-zones" />
    </div>
  </article>
</template>
