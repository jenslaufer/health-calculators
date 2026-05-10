<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Pregnancy BMI Calculator — Pre-Pregnancy BMI & IOM 2009 | Health Calculators',
  description: 'Calculate your pre-pregnancy BMI by WHO classification and see recommended weight gain by IOM 2009 — for singletons and twins. Why pre-pregnancy BMI matters most.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pregnancy BMI Calculator — Pre-Pregnancy BMI & IOM 2009',
    description: 'Calculate your pre-pregnancy BMI by WHO classification and see recommended weight gain by IOM 2009 — for singletons and twins.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-10',
    dateModified: '2026-05-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/pregnancy-bmi-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Pregnancy BMI — Why Your Pre-Pregnancy Number Sets Everything</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 10, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your <strong>pre-pregnancy BMI</strong> is the single most important number for setting your recommended weight gain in pregnancy.
          It decides whether the right target is 5 kg, 12 kg, or 18 kg — not your current bump weight, not your trimester.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The Institute of Medicine (IOM) published its evidence-based ranges in 2009. They use WHO BMI categories and remain the global
          standard, used by NICE, ACOG, and most national guidelines. The ranges balance the dual risks of too little and too much gain.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to calculate pregnancy BMI</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Critical detail: use your weight <strong>before pregnancy</strong>, not your current weight. The formula is the same as a regular
          <router-link :to="localeBlogPath('calculate-bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link>:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-6 text-center">
          <p class="text-lg font-semibold text-stone-900">BMI = weight (kg) ÷ height² (m)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Example: 65 kg pre-pregnancy weight at 1.68 m height gives a BMI of 65 ÷ (1.68 × 1.68) = <strong>23.0</strong> —
          which lands in the <em>normal</em> category.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMI categories & recommended gain (IOM 2009)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Pre-pregnancy BMI</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Category</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Recommended gain</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">&lt; 18.5</td>
                <td class="px-6 py-3 font-medium text-blue-700">Underweight</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">12.5 – 18 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">18.5 – 24.9</td>
                <td class="px-6 py-3 font-medium text-emerald-700">Normal</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">11.5 – 16 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">25 – 29.9</td>
                <td class="px-6 py-3 font-medium text-yellow-700">Overweight</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">7 – 11.5 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">&ge; 30</td>
                <td class="px-6 py-3 font-medium text-red-700">Obese</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">5 – 9 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why pre-pregnancy BMI matters more than current weight</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The data is consistent: women with low pre-pregnancy BMI who gain too little face higher risk of preterm birth and low birth weight.
          Women with elevated pre-pregnancy BMI who gain too much face higher risk of gestational diabetes, preeclampsia, and cesarean delivery.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          IOM 2009 picks ranges that balance both. So pre-pregnancy BMI isn't a label — it's the input that personalises a safer target.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your pregnancy BMI</h3>
        <p class="text-stone-300 text-sm mb-5">Pre-pregnancy BMI with IOM gain target — free, no sign-up.</p>
        <router-link
          :to="localePath('pregnancyBMI')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Twin pregnancies: higher gain</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Twin pregnancies use the same BMI categories — but the recommended total gain is higher:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <div class="space-y-2 text-sm text-stone-700">
            <div class="flex justify-between"><span>Normal (BMI 18.5–24.9)</span><span class="font-semibold tabular-nums">17 – 25 kg</span></div>
            <div class="flex justify-between"><span>Overweight (BMI 25–29.9)</span><span class="font-semibold tabular-nums">14 – 23 kg</span></div>
            <div class="flex justify-between"><span>Obese (BMI ≥ 30)</span><span class="font-semibold tabular-nums">11 – 19 kg</span></div>
          </div>
        </div>
        <p class="text-sm text-stone-500">
          IOM 2009 doesn't define a separate range for underweight twin pregnancies — recommendations should be individualised with your provider.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequent questions</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Should I recalculate my BMI as I gain weight?</h3>
            <p class="text-sm text-stone-600">
              No. Pregnancy BMI is fixed at your pre-pregnancy weight. To track progress, use the
              <router-link :to="localePath('pregnancyWeightGain')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">weekly weight-gain tracker</router-link>.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">What if I don't know my exact pre-pregnancy weight?</h3>
            <p class="text-sm text-stone-600">
              Estimate as best you can — fitness apps, doctor records, or memory all help. A reasonable estimate is much better than using current pregnancy weight.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">My BMI was 24.8 — am I normal or overweight?</h3>
            <p class="text-sm text-stone-600">
              Formally normal weight (cutoff: 25.0). But if you're close to a boundary, your provider may adjust the target based on muscle mass, family history, or risk factors.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Pre-pregnancy BMI sets your IOM 2009 target. Calculate it with our
          <router-link :to="localePath('pregnancyBMI')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Pregnancy BMI Calculator</router-link>,
          track progression with the
          <router-link :to="localePath('pregnancyWeightGain')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Weight Gain Calculator</router-link>,
          and find your week with the
          <router-link :to="localePath('pregnancy')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Pregnancy Calculator</router-link>.
        </p>
      </div>

      <RelatedArticlesEn slug="pregnancy-bmi-guide" />
    </div>
  </article>
</template>
