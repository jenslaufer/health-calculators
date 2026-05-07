<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Baby Feeding Amount Guide — How Much Milk Does Your Baby Need? | Health Calculators',
  description: 'How much breast milk or formula does your baby need? Feeding amounts by age and weight — with the rule of thumb, schedule table and a free online calculator.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Baby Feeding Amount Guide — Milk Volume by Age and Weight',
      description: 'How much milk does your baby need? Rule of thumb, age stages, and practical tips for bottle and breastfeeding.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/baby-feeding-amount-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Calculate baby feeding amount',
      step: [
        { '@type': 'HowToStep', name: 'Get current weight', text: 'Weigh the baby, ideally from a recent well-child check.' },
        { '@type': 'HowToStep', name: 'Pick the per-kg rate', text: 'Under 6 months: ~150 ml/kg/day. 6–11 months: ~120 ml/kg. 12+ months: ~90 ml/kg.' },
        { '@type': 'HowToStep', name: 'Compute daily amount', text: 'Weight in kg × ml/kg = daily amount in ml.' },
        { '@type': 'HowToStep', name: 'Split into feedings', text: 'Daily amount / number of age-appropriate feedings = per-feeding volume.' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much milk does a baby need per day?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rule of thumb: about 150 ml per kg of body weight per day for the first 6 months. A 4 kg baby needs about 600 ml/day, split across 6–8 feedings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the rule apply to breastfeeding?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On-demand breastfed babies self-regulate — no ml math needed. The formula is mainly for bottle feeding (formula or expressed milk).',
          },
        },
      ],
    },
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Baby Feeding Amount Guide — How Much Milk Does Your Baby Need?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 7, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          "Is my baby drinking enough?" — the most common question of new parents. The simplest reference is the <strong>rule of thumb: 150 ml per kg of body weight per day</strong> for babies in the first six months.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains how the formula works, how the requirement changes with age, and why breastfed babies should not feed by table.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The rule of thumb</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-mono text-stone-900 font-semibold">Daily amount [ml] = Weight [kg] × ml/kg/day</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The ml/kg factor depends on age. As solid food is introduced, the milk requirement drops:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>0–5 months:</strong> ~150 ml/kg/day</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>6–11 months (with solids):</strong> ~120 ml/kg/day</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>12+ months:</strong> ~90 ml/kg/day (in addition to solids)</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Example: 4 kg baby, 2 months old</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-mono text-stone-900">4 kg × 150 ml/kg = <strong>600 ml/day</strong></p>
          <p class="text-base font-mono text-stone-900 mt-2">600 ml / 6 feedings = <strong>100 ml per feeding</strong></p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Variation of ±20 % is completely normal — 80 ml today, 130 ml tomorrow. What matters is the daily total, not a single feeding.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Feedings by age</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Age</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Feedings/day</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Interval</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">0–1 month</td><td class="px-6 py-3 text-stone-600">7–8</td><td class="px-6 py-3 text-stone-600">2–3 hours</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">2–3 months</td><td class="px-6 py-3 text-stone-600">6</td><td class="px-6 py-3 text-stone-600">3–4 hours</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">4–5 months</td><td class="px-6 py-3 text-stone-600">5–6</td><td class="px-6 py-3 text-stone-600">3–4 hours</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">6–11 months</td><td class="px-6 py-3 text-stone-600">5</td><td class="px-6 py-3 text-stone-600">+ solids</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">12+ months</td><td class="px-6 py-3 text-stone-600">4</td><td class="px-6 py-3 text-stone-600">+ family meals</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Breastfeeding: why no volume math</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Breastfed babies regulate intake themselves — through frequency and suckling intensity. The ml calculation matters most when you
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">bottle-feed (formula or expressed milk),</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">combo-feed and want to confirm the supplement amount,</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">need to plan ahead (daycare hand-off, sitter, travel).</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          The best signs of "drinking enough" are <strong>steady weight gain</strong>, at least <strong>6 wet diapers per day</strong>, and a baby content between feedings.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When the calculator doesn't apply</h2>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Preterm infants</strong> — higher caloric needs, smaller feedings, pediatrician-led plan</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Growth concerns</strong> — over- or underweight needs individualized planning</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Illness, reflux, allergies</strong> — intake can change sharply for short periods</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Growth percentile</strong> — does the weight match the age? Try the <router-link :to="localePath('childGrowth')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">child growth percentile calculator</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Due date</strong> — important for preterm babies to compute corrected age. Try the <router-link :to="localePath('dueDate')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">due date calculator</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Child medication dose</strong> — weight-based dosing for infants and toddlers. Try the <router-link :to="localePath('childDosage')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">child dosage calculator</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your baby's feeding amount now</h3>
        <p class="text-stone-300 text-sm mb-5">Enter age and weight — get the daily total and the per-feeding amount instantly.</p>
        <router-link
          :to="localePath('babyFeedingAmount')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the baby feeding amount calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">My baby drinks less than the table says — should I worry?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Not necessarily. If the baby gains weight, has at least 6 wet diapers a day, and is content, the volume is usually fine. If intake stays consistently low or weight gain stalls, see your pediatrician.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How big should bottle feedings be?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Daily total divided by number of feedings gives a reference. Typical sizes: 60–90 ml in the first weeks, 120–150 ml from 2 months, 180–210 ml from 4 months — depending on weight.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">When to give extra water?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              In the first 6 months, exclusively breastfed or formula-fed babies don't need additional water. From the introduction of solids, small sips of water can be offered with meals — needs remain small.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticlesEn />
  </article>
</template>
