<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Breast Milk Alcohol: When Can I Breastfeed After Drinking? | Health Calculators',
  description: 'How long alcohol stays in breast milk — Widmark formula, AAP guidance, clearance times per drink, and why pumping doesn’t help. With a free calculator for nursing mothers.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Breast Milk Alcohol: When Can I Breastfeed After Drinking?',
    description: 'How long alcohol stays in breast milk — Widmark formula, AAP guidance, per-drink clearance times, and a free calculator for nursing mothers.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/breast-milk-alcohol-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Breast Milk Alcohol: When Can I Breastfeed After Drinking?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 11, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A glass of wine at a friend’s wedding, a beer after a long day with the baby — many nursing mothers ask: <strong>when is it safe to breastfeed again?</strong> The answer is reassuringly simple: alcohol in breast milk mirrors blood alcohol concentration (BAC), and your liver clears it at roughly <strong>0.015% per hour</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains what the science says, what the AAP and CDC recommend — and exactly when your milk is alcohol-free.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How alcohol enters breast milk</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Alcohol is water-soluble and passes the blood-milk barrier <strong>passively and freely</strong>. Concentration in milk is roughly identical to the level in blood (ratio &asymp; 1:1). A 0.05% BAC means about 0.05% alcohol in breast milk.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The <strong>peak level</strong> occurs 30–60 minutes after drinking — faster on an empty stomach, slower after food. As the liver metabolizes alcohol, milk concentration falls in step.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Widmark formula for nursing mothers</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Because milk alcohol equals blood alcohol, the same equation applies:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>Alcohol (g)</strong> = Volume (ml) &times; (ABV / 100) &times; 0.8</p>
          <p class="mb-2"><strong>Peak BAC</strong> = Alcohol (g) / (Body weight &times; 0.55)</p>
          <p><strong>Current BAC</strong> = Peak &minus; (0.015% &times; Hours)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The Widmark factor of 0.55 reflects body water in women. Elimination is linear at ~0.015% BAC per hour — coffee, exercise, and water do not change it.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Worked example: 1 glass of wine</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Step</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Calculation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Drink</td>
                <td class="px-6 py-3 text-stone-600">5 oz (150 ml) wine, 12% ABV</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Alcohol</td>
                <td class="px-6 py-3 text-stone-600">150 &times; 0.12 &times; 0.8 = 14.4 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Peak BAC (60 kg / 130 lb)</td>
                <td class="px-6 py-3 text-stone-600">14.4 / (60 &times; 0.55) = 0.044%</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Clearance time</td>
                <td class="px-6 py-3 text-stone-600">0.044 / 0.015 = about 2 hrs 55 min</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          After just under 3 hours, breast milk is alcohol-free again.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rule of thumb: per standard drink</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Drink</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Clearance (60 kg / 130 lb)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1 beer (12 oz, 5%)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~2 hrs</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1 glass wine (5 oz, 12%)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~2 hrs 15 min</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1 shot spirits (1.5 oz, 40%)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~2 hrs</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1 glass sparkling wine (100 ml)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~1 hr 25 min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What AAP, CDC and WHO recommend</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>American Academy of Pediatrics (AAP)</strong>, <strong>CDC</strong> and <strong>WHO</strong> recommend avoiding alcohol entirely while breastfeeding. Studies suggest measurable effects on infant sleep architecture and motor development at higher exposures.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Occasional moderate drinking (one drink) with adequate clearance time is generally considered acceptable. Most experts agree: <strong>pumping and dumping does NOT speed elimination</strong>. Alcohol stays in your bloodstream until your liver metabolizes it; freshly produced milk will contain alcohol again until then.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Common myths</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Myth: Pumping removes the alcohol</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              False. As long as alcohol circulates in your bloodstream, every new portion of milk will contain alcohol. Only time clears it.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Myth: Beer increases milk supply</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Alcohol actually suppresses oxytocin and can briefly reduce milk volume. The hops, not the alcohol, may have a mild effect — non-alcoholic beer or hops tea is the better choice.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Myth: Coffee or exercise clears alcohol faster</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              False. Your liver metabolizes alcohol at ~0.015% BAC per hour — independent of caffeine, activity, or hydration.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate when your milk is alcohol-free</h3>
        <p class="text-stone-300 text-sm mb-5">Personal estimate from weight, drinks and time — free, instant, no sign-up.</p>
        <router-link
          :to="localePath('breastMilkAlcohol')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Open the calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          For general blood alcohol estimates, try our <router-link :to="localeBlogPath('blood-alcohol-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Blood Alcohol Calculator</router-link>. To convert drinks into UK/US units, see the <router-link :to="localeBlogPath('alcohol-unit-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alcohol Units Guide</router-link>. If you’re still pregnant, our <router-link :to="localeBlogPath('pregnancy-weight-gain-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Pregnancy Weight Gain Guide</router-link> tracks healthy ranges by trimester.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Alcohol while breastfeeding is not trivial — but it is predictable. The Widmark formula tells you when alcohol has cleared and nursing is safe again. The fastest way: open the <router-link :to="localePath('breastMilkAlcohol')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Breast Milk Alcohol Calculator</router-link>, enter weight, drink, and time — done.
        </p>
      </div>

      <RelatedArticlesEn slug="breast-milk-alcohol-guide" />
    </div>
  </article>
</template>
