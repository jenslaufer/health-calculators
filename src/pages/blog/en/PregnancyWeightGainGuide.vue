<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Pregnancy Weight Gain Calculator — IOM 2009 Guidelines | Health Calculators',
  description: 'How much weight should you gain during pregnancy? IOM 2009 recommendations by pre-pregnancy BMI, week-by-week breakdown, and twin pregnancies explained.',
  path: '/en/blog/pregnancy-weight-gain-guide',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pregnancy Weight Gain Calculator — IOM 2009 Guidelines',
    description: 'How much weight should you gain during pregnancy? IOM 2009 recommendations by pre-pregnancy BMI, week-by-week breakdown, and twin pregnancies explained.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-09',
    dateModified: '2026-04-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/pregnancy-weight-gain-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Pregnancy Weight Gain — How Much Is Right for You?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 9, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          How much weight should you gain during pregnancy? The answer depends on your
          <strong>pre-pregnancy BMI</strong>. The Institute of Medicine (IOM) published evidence-based
          guidelines in 2009 that remain the gold standard worldwide.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Too little weight gain raises the risk of preterm birth and low birth weight. Too much increases
          the risk of gestational diabetes, cesarean delivery, and childhood obesity. The right range
          protects both mother and child.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">IOM 2009 Guidelines by BMI Category</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          First, calculate your <router-link :to="localeBlogPath('calculate-bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">pre-pregnancy BMI</router-link>.
          This determines which category applies to you:
        </p>

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
                <td class="px-6 py-3 font-medium text-emerald-700">Normal weight</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">11.5 – 16 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">25 – 29.9</td>
                <td class="px-6 py-3 font-medium text-yellow-700">Overweight</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">7 – 11.5 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">≥ 30</td>
                <td class="px-6 py-3 font-medium text-red-700">Obese</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">5 – 9 kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <h3 class="text-base font-bold text-stone-900 mb-2">Twin pregnancies</h3>
          <p class="text-sm text-stone-600 mb-3">
            For twins, the IOM recommends a higher total weight gain:
          </p>
          <div class="space-y-1 text-sm text-stone-700">
            <div class="flex justify-between"><span>Normal weight (BMI 18.5–24.9)</span><span class="font-semibold tabular-nums">17 – 25 kg</span></div>
            <div class="flex justify-between"><span>Overweight (BMI 25–29.9)</span><span class="font-semibold tabular-nums">14 – 23 kg</span></div>
            <div class="flex justify-between"><span>Obese (BMI ≥ 30)</span><span class="font-semibold tabular-nums">11 – 19 kg</span></div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How Does Weight Gain Distribute Over Weeks?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Weight gain does not happen evenly. In the first trimester (up to week 13), most women gain very
          little — often just 0.5 to 2 kg. Most of the gain happens in the second and third trimesters.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          As a rough guide for normal-weight women after the first trimester: about 0.35–0.50 kg per week.
          For overweight: 0.23–0.33 kg/week, for obese: 0.17–0.27 kg/week.
        </p>

        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Category</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">1st trimester</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">2nd/3rd trimester (per week)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 font-medium text-blue-700">Underweight</td>
                <td class="px-6 py-3 text-stone-600">~1–2 kg</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">~0.44–0.58 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-emerald-700">Normal weight</td>
                <td class="px-6 py-3 text-stone-600">~1–2 kg</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">~0.35–0.50 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-yellow-700">Overweight</td>
                <td class="px-6 py-3 text-stone-600">~0.5–1 kg</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">~0.23–0.33 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-red-700">Obese</td>
                <td class="px-6 py-3 text-stone-600">~0.5–1 kg</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">~0.17–0.27 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your personal recommendation</h3>
        <p class="text-stone-300 text-sm mb-5">IOM-based weight gain calculator — free and no sign-up required.</p>
        <router-link
          :to="localePath('pregnancyWeightGain')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Where Does the Extra Weight Come From?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The weight gained during pregnancy is not just the baby. For a total gain of 12 kg, approximately:
        </p>
        <div class="grid grid-cols-2 gap-3 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~3.3 kg</div>
            <div class="text-sm text-stone-500">Baby</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~0.7 kg</div>
            <div class="text-sm text-stone-500">Placenta</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~0.8 kg</div>
            <div class="text-sm text-stone-500">Amniotic fluid</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~1.8 kg</div>
            <div class="text-sm text-stone-500">Uterus & breast tissue</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~1.8 kg</div>
            <div class="text-sm text-stone-500">Blood volume</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~3.5 kg</div>
            <div class="text-sm text-stone-500">Maternal fat stores</div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Common Questions</h2>

        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">What if I'm outside the recommended range?</h3>
            <p class="text-sm text-stone-600">
              Individual fluctuations are normal. What matters is the trend over several weeks. Talk to your
              OB-GYN if you notice significant deviations.
            </p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Do these guidelines apply to everyone?</h3>
            <p class="text-sm text-stone-600">
              The IOM guidelines are evidence-based recommendations for healthy singleton and twin pregnancies.
              Individual conditions like gestational diabetes or hypertension may require different targets.
            </p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Does water retention count toward weight gain?</h3>
            <p class="text-sm text-stone-600">
              Yes. Mild swelling in legs and feet is normal and part of the recommended gain.
              Sudden severe swelling should be assessed by a doctor.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Recommended pregnancy weight gain depends on your pre-pregnancy BMI.
          Use our <router-link :to="localePath('pregnancyWeightGain')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Pregnancy Weight Gain Calculator</router-link>
          to get your personalized recommendation — and check your BMI with the
          <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI Calculator</router-link>.
          Find your due date and current week with the
          <router-link :to="localePath('pregnancy')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Pregnancy Calculator</router-link>.
        </p>
      </div>

      <RelatedArticlesEn slug="pregnancy-weight-gain-guide" />
    </div>
  </article>
</template>
