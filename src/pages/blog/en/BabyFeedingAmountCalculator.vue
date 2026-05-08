<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Baby Feeding Amount Calculator: How Much Milk Does a Baby Need? | Health Calculators',
  description: 'Calculate baby milk intake by age and weight. Evidence-based ml/kg reference, amount per bottle, and signs of under- or overfeeding for daily use.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Baby Feeding Amount Calculator: How Much Milk Does a Baby Need?',
    description: 'Calculate baby milk intake by age and weight. Evidence-based ml/kg reference, amount per bottle, and signs of under- or overfeeding for daily use.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/baby-feeding-amount-calculator',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Baby Feeding Amount Calculator: How Much Milk Does a Baby Need?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 7, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In the first months, many parents ask the same question: <strong>is my baby drinking enough?</strong> A practical clinical reference is the ml/kg method used in paediatrics.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Our calculator estimates both daily milk volume and amount per bottle from age and weight — useful for formula and pumped breast milk.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rule of thumb by age</h2>
        <ul class="space-y-2 text-base text-stone-600">
          <li><strong>0–6 months:</strong> around 150 ml per kg body weight per day</li>
          <li><strong>from 6 months:</strong> around 120 ml/kg/day as solids are introduced</li>
          <li><strong>upper practical limit:</strong> about 960 ml/day</li>
        </ul>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate feeding amount now</h3>
        <p class="text-stone-300 text-sm mb-5">Enter age and weight to get daily volume and amount per feeding instantly.</p>
        <router-link
          :to="localePath('babyFeedingAmount')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Open baby feeding calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why real life can differ</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Babies do not drink exactly the same amount every day. Growth spurts, mild illness, temperature, and sleep changes can all shift intake temporarily.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Focus on trend and clinical signs: wet diapers, expected weight gain, alertness, and comfortable feeding without repeated vomiting.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          For the newborn and infant period, you may also use the
          <router-link :to="localePath('apgarScore')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">APGAR score calculator</router-link>,
          the
          <router-link :to="localePath('childGrowth')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">child growth percentile calculator</router-link>,
          and the
          <router-link :to="localePath('childDosage')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">child dosage calculator</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          A baby feeding calculation is a practical guideline, not a diagnosis. Use the
          <router-link :to="localePath('babyFeedingAmount')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">baby feeding amount calculator</router-link>
          to structure daily feeds, and consult your pediatrician or midwife if intake or growth seems off.
        </p>
      </div>

      <RelatedArticles slug="baby-feeding-amount-calculator" />
    </div>
  </article>
</template>
