<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Smoking Cost Calculator: What Smoking Really Costs You | Health Calculators',
  description: 'How much does smoking cost per year? With real examples, an investment comparison at 7% return, and motivation to quit.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Smoking Cost Calculator: What Smoking Really Costs You',
    description: 'How much does smoking cost per year? With real examples, an investment comparison at 7% return, and motivation to quit.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-13',
    dateModified: '2026-04-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/smoking-cost-calculator',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">
        &larr; Blog
      </router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">
        Smoking Cost Calculator: What Smoking Really Costs You
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 13, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A pack of cigarettes costs around <strong>$9–14 in the US</strong> and <strong>£14–16 in the UK</strong>. A pack-a-day smoker spends over <strong>$3,000–5,000 per year</strong> — and that's only the sticker price, before healthcare costs, productivity losses, and lost compound interest.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article calculates what smoking truly costs over 5 and 10 years — and what that same money, invested rather than burned, would look like.
        </p>
      </div>

      <!-- Example calculation -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Example: 20 cigarettes per day</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Assume one pack (20 cigarettes) per day at $10 per pack:
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">Cost breakdown</div>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-stone-600">Per day</span>
              <span class="text-sm font-semibold text-stone-900 tabular-nums">$10.00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-stone-600">Per week</span>
              <span class="text-sm font-semibold text-stone-900 tabular-nums">$70.00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-stone-600">Per month</span>
              <span class="text-sm font-semibold text-stone-900 tabular-nums">$304.40</span>
            </div>
            <div class="flex justify-between items-center border-t border-stone-200 pt-3">
              <span class="text-sm font-semibold text-stone-700">Per year</span>
              <span class="text-base font-bold text-red-500 tabular-nums">$3,650.00</span>
            </div>
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Over $3,600 per year — that's a <strong>decent vacation for two people</strong>, a new laptop plus smartphone, or nearly eight months of personal training at a gym.
        </p>
      </div>

      <!-- The hidden price: compound interest -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The hidden price: lost compound interest</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The direct expense is only part of the story. If you invested that money monthly instead — for example, in a broad-market index ETF — you could expect a historical return of around <strong>7% per year</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The formula for the future value of regular monthly contributions (annuity) is:
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Compound interest formula</div>
          <div class="font-mono text-sm text-stone-800 leading-relaxed">
            FV = PMT × ((1 + r/12)<sup>12·t</sup> − 1) / (r/12)
          </div>
          <div class="mt-3 text-sm text-stone-500 space-y-1">
            <div>PMT = monthly contribution (e.g., $304.40)</div>
            <div>r = annual return (0.07 = 7%)</div>
            <div>t = investment period in years</div>
          </div>
        </div>

        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">Result: 20 cigarettes/day at $10/pack</div>
          <div class="space-y-4">
            <div class="flex justify-between items-start">
              <div>
                <span class="text-sm font-semibold text-stone-700">After 5 years</span>
                <p class="text-xs text-stone-400 mt-1">Without interest deposited: $18,250</p>
              </div>
              <span class="text-lg font-bold text-emerald-600 tabular-nums">$21,335</span>
            </div>
            <div class="flex justify-between items-start border-t border-stone-200 pt-4">
              <div>
                <span class="text-sm font-semibold text-stone-700">After 10 years</span>
                <p class="text-xs text-stone-400 mt-1">Without interest deposited: $36,500</p>
              </div>
              <span class="text-lg font-bold text-emerald-600 tabular-nums">$52,675</span>
            </div>
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          After 10 years, those monthly smoking expenses could have grown into a portfolio of over <strong>$52,000</strong> — roughly $16,000 more than the total cash invested. That's the power of compound interest.
        </p>
      </div>

      <!-- Hidden health costs -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The hidden health costs</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The purchase price is only the tip of the iceberg. Smoking creates measurable additional costs in several areas:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Health insurance:</span>
              <span class="text-stone-600"> Smokers pay 15–50% higher premiums in many markets. In the US, the ACA allows insurers to charge up to 50% more — that can mean $1,000–2,000/year in extra premiums.</span>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Dental costs:</span>
              <span class="text-stone-600"> Smoking promotes periodontal disease and tooth decay. Estimated extra costs: $200–800 per year.</span>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Productivity loss:</span>
              <span class="text-stone-600"> Studies show smokers spend an average of 1.5–2 hours per workday on smoke breaks — time that affects career advancement and earnings.</span>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Home and car resale value:</span>
              <span class="text-stone-600"> Smoke odor reduces resale value and increases cleaning costs. Landlords and buyers pay less for smoker properties.</span>
            </div>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          A 2023 ASH (Action on Smoking and Health) study estimated the indirect costs of smoking at an additional <strong>$1,500–3,000 per year</strong> on top of the direct purchase price.
        </p>
      </div>

      <!-- Age comparison -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When you start smoking makes an enormous difference</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Someone who starts smoking at 18 and quits at 40 has smoked a pack a day for 22 years. At $10 per pack, that's a direct expenditure of around <strong>$80,300</strong> — before healthcare costs, without compound interest.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          If that same person had invested the money monthly from age 18 (7% p.a.), the portfolio at age 40 would have grown to approximately <strong>$300,000</strong> — a solid foundation for retirement.
        </p>
      </div>

      <!-- What you could buy -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What you could buy instead</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Sometimes concrete images help more than abstract numbers. Quitting a pack-a-day habit saves around $3,650 per year — enough for:
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">✈️</p>
            <p class="text-sm font-semibold text-stone-700">2 city breaks</p>
            <p class="text-xs text-stone-400 mt-1">at $800 each</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">📱</p>
            <p class="text-sm font-semibold text-stone-700">3× new smartphone</p>
            <p class="text-xs text-stone-400 mt-1">at $1,000 each</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">💻</p>
            <p class="text-sm font-semibold text-stone-700">1 laptop</p>
            <p class="text-xs text-stone-400 mt-1">+ $2,750 left over</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">🚲</p>
            <p class="text-sm font-semibold text-stone-700">1 e-bike</p>
            <p class="text-xs text-stone-400 mt-1">+ $1,850 left over</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">🏋️</p>
            <p class="text-sm font-semibold text-stone-700">10× gym year</p>
            <p class="text-xs text-stone-400 mt-1">at $360 each</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">🎬</p>
            <p class="text-sm font-semibold text-stone-700">25× streaming year</p>
            <p class="text-xs text-stone-400 mt-1">at $144 each</p>
          </div>
        </div>
      </div>

      <!-- Calculator CTA -->
      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Calculate your personal costs</h3>
        <p class="text-base text-stone-600 mb-6">Enter your own figures and instantly see what you spend daily, monthly, and over 10 years.</p>
        <router-link
          :to="localePath('smokingCost')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Go to Smoking Cost Calculator
        </router-link>
      </div>

      <!-- Conclusion -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Smoking is not just a health question — it's also a massive financial burden. The direct costs of $3,000–5,000 per year are only the beginning. Add higher insurance premiums, dental bills, and most importantly, the lost compound interest.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Quitting smoking gives you back not just health and quality of life — it gives you a concrete financial future. The <router-link :to="localePath('smokingCost')" class="text-stone-900 underline underline-offset-2 hover:text-stone-600">Smoking Cost Calculator</router-link> shows you exactly what that means for your situation.
        </p>
      </div>

    </div>

    <RelatedArticles slug="smoking-cost-calculator" />
  </article>
</template>
