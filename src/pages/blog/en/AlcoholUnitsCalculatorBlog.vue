<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Alcohol Unit Calculator — Weekly Consumption & Health Risk | Health Calculators',
  description: 'What is an alcohol unit? UK units, grams of pure alcohol, WHO risk categories and comparison with DHS, NHS and NIAAA guidelines explained.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Alcohol Unit Calculator — Weekly Consumption & Health Risk',
    description: 'What is an alcohol unit? UK units, grams of pure alcohol, WHO risk categories and comparison with DHS, NHS and NIAAA guidelines explained.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/alcohol-unit-calculator',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Alcohol Unit Calculator — Weekly Consumption & Health Risk</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 18, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          How much alcohol is too much? The answer depends on how you measure it. A <strong>UK alcohol unit</strong> equals 10 ml (8 g) of pure alcohol — a standard that lets you compare beer, wine and spirits on a level playing field and benchmark against international health guidelines.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this article you'll learn how to calculate alcohol units, what the guidelines from the DHS, NHS and NIAAA actually mean, and why the science is clear: the healthiest option is <strong>no alcohol at all</strong>.
        </p>
      </div>

      <!-- What is an alcohol unit? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is an alcohol unit?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          One <strong>UK alcohol unit</strong> is defined as 10 ml (8 g) of pure ethanol. The formula is straightforward:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-base font-semibold text-stone-900">Units = Volume (ml) × ABV (%) ÷ 1,000</p>
          <p class="text-sm text-stone-500 mt-2">Grams of pure alcohol = Units × 8</p>
        </div>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Drink</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Volume</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">ABV</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Units</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Grams</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Lager / Beer</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">500 ml</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">5%</td>
                <td class="px-6 py-3 text-stone-900 font-semibold tabular-nums">2.5</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">20 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Red wine</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">175 ml</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">12%</td>
                <td class="px-6 py-3 text-stone-900 font-semibold tabular-nums">2.1</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">16.8 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Whisky (single)</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">40 ml</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">40%</td>
                <td class="px-6 py-3 text-stone-900 font-semibold tabular-nums">1.6</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">12.8 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Cocktail</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">200 ml</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">15%</td>
                <td class="px-6 py-3 text-stone-900 font-semibold tabular-nums">3.0</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">24 g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- National guidelines -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">National guidelines compared</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Different countries have set different thresholds for low-risk drinking. All guidelines agree on one principle: <em>less is always better</em>.
        </p>
        <div class="space-y-4 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">UK NHS — 14 units / week</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              The NHS recommends no more than 14 UK units (112 g) per week for both men and women — roughly 6 medium glasses of wine or 6 pints of beer. Spreading consumption across several days and having at least two alcohol-free days per week is also advised.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">DE DHS — 84 g / week women · 168 g / week men</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Germany's Deutsche Hauptstelle für Suchtfragen (DHS) differentiates by sex: low-risk consumption is up to 12 g/day for women (84 g/week ≈ 10.5 UK units) and 24 g/day for men (168 g/week ≈ 21 UK units). The lower threshold for women reflects physiological differences in alcohol metabolism.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">US NIAAA — 7 drinks / week women · 14 drinks / week men</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              The National Institute on Alcohol Abuse and Alcoholism defines one US standard drink as 14 g of alcohol (≈ 1.75 UK units). Low-risk limits are 7 drinks/week for women and 14 drinks/week for men — equivalent to about 98 g and 196 g per week respectively.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">WHO 2023 — No safe level</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              In 2023, the World Health Organization stated that there is <strong>no safe level of alcohol consumption</strong>. Alcohol is a Group 1 carcinogen (IARC) linked to at least 7 cancers. Even low consumption carries a small but real increase in cancer risk. Existing guidelines describe a <em>lower</em> risk, not <em>zero</em> risk.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your weekly alcohol units</h3>
        <p class="text-stone-300 text-sm mb-5">UK units, grams, risk level and comparison with all major guidelines — in one calculator.</p>
        <router-link
          :to="localePath('alcoholUnits')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free &rarr;</router-link>
      </div>

      <!-- Health risks -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Health risks from alcohol</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Regular alcohol consumption affects almost every organ system. Risk does not start at some threshold — it begins with the first drink.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Liver</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              The liver is the primary organ for alcohol metabolism. Chronic consumption above ~30 g/day (women) or ~60 g/day (men) leads to fatty liver, then alcoholic hepatitis, and eventually cirrhosis. Liver cirrhosis is irreversible.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Cancer</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Alcohol raises the risk of at least 7 cancers: mouth, throat, larynx, oesophagus, liver, bowel and breast. The mechanism: acetaldehyde (a metabolite) directly damages DNA. Even 1–2 drinks per day increases breast cancer risk by approximately 7–10%.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Cardiovascular</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              While older studies suggested a "cardioprotective" effect from moderate drinking, newer Mendelian randomisation analyses show this was a methodological artefact. Higher consumption raises blood pressure, atrial fibrillation risk, and stroke risk significantly.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Sleep & mental health</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Alcohol suppresses REM sleep and causes fragmented sleep in the second half of the night. Long-term regular use increases the risk of depression and anxiety disorders — often creating a self-medication cycle that worsens both.
            </p>
          </div>
        </div>
      </div>

      <!-- Calories -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Alcohol and calories</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Alcohol delivers 7 kcal per gram — only fat (9 kcal/g) is more calorie-dense. These are <em>empty calories</em>: no protein, no micronutrients, no satiety. A typical night with 4 pints of beer (500 ml, 5%):
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">4 × 500 ml beer, 5%</p>
          <ul class="space-y-1 text-sm text-stone-600">
            <li>• 10 UK units → 80 g pure alcohol</li>
            <li>• 80 g × 7 kcal = <strong>560 kcal</strong> from alcohol alone</li>
            <li>• Plus carbohydrates in beer: another ~200–300 kcal</li>
            <li>• Total: ~750–850 kcal — equivalent to a full main meal</li>
          </ul>
        </div>
      </div>

      <!-- Related calculators -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <div class="space-y-4">
          <router-link :to="localePath('bac')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Blood Alcohol Calculator</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Calculate your blood alcohol level after drinking — how quickly does your body break down alcohol?</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">To the BAC Calculator &rarr;</span>
          </router-link>
          <router-link :to="localePath('smokingCost')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Smoking Cost Calculator</h3>
            <p class="text-sm text-stone-500 leading-relaxed">How much does smoking really cost? Daily, annual and lifetime costs — similar hidden costs as with alcohol.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">To the Smoking Cost Calculator &rarr;</span>
          </router-link>
          <router-link :to="localePath('lifeExpectancy')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Life Expectancy Calculator</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Alcohol is one of the strongest lifestyle factors affecting life expectancy — calculate the impact of your habits.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">To the Life Expectancy Calculator &rarr;</span>
          </router-link>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Alcohol units provide a precise way to compare your consumption against national and international guidelines. The central message is consistent across all health authorities: less is always better. Not drinking at all is the healthiest choice.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Calculate your weekly consumption with our <router-link :to="localePath('alcoholUnits')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alcohol Unit Calculator</router-link> — with comparison against DHS, NHS and NIAAA guidelines, plus calorie and cost estimates.
        </p>
      </div>

      <RelatedArticlesEn slug="alcohol-unit-calculator" />
    </div>
  </article>
</template>
