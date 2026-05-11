<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Fertility Window Calculator: 10 Days, LH Surge & Peak Days | Health Calculators',
  description: 'Calculate your fertility window — 10-day expanded window, LH surge, daily conception probability from Wilcox 1995. Practical tips for trying to conceive.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Fertility Window Calculator: 10 Days, LH Surge & Peak Days',
    description: 'Calculate your fertility window — 10-day expanded window, LH surge, daily conception probability from Wilcox 1995.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-10',
    dateModified: '2026-05-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/fertility-window-guide',
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
        Fertility Window Calculator: 10 Days, LH Surge &amp; Peak Days
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 10, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>fertility window</strong> is the time in your cycle when conception is possible. Most calculators show six days — biologically, ten makes more sense.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains how the expanded window, the LH surge, and the peak days fit together — and when conception probability is highest.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Classic vs. expanded fertility window</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>classic window</strong> covers six days: five days before ovulation plus ovulation day itself. The logic: sperm survive up to five days in cervical mucus, while the egg is fertilizable for only 12–24 hours.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>expanded window</strong> covers ten days — from day −7 to day +2 relative to ovulation. It accounts for variability in ovulation timing and occasional long sperm survival.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <p class="text-base font-semibold text-stone-900 mb-2">Why ten days?</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Research shows actual ovulation day varies by ±2 days even in "regular" cycles. A ten-day window catches every fertile day, even when ovulation drifts.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The LH surge — the most reliable marker</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Luteinizing hormone</strong> (LH) spikes 24–36 hours before ovulation. This <em>LH surge</em> triggers ovulation itself.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Over-the-counter LH tests (also called "ovulation tests") detect the hormone in urine. A positive test means ovulation will occur within the next 1–2 days.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <p class="text-base font-semibold text-stone-900 mb-2">Tip</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Start testing 3–4 days before predicted ovulation. Late morning or early afternoon urine is best — first-morning urine can distort the result.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Daily conception probability</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The landmark <strong>Wilcox et al. 1995</strong> NEJM study first quantified daily conception probabilities:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-4 py-3 font-semibold text-stone-700">Day</th>
                <th class="text-left px-4 py-3 font-semibold text-stone-700">Probability</th>
                <th class="text-left px-4 py-3 font-semibold text-stone-700">Rating</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-4 py-2 tabular-nums">−5</td><td class="px-4 py-2 tabular-nums">10 %</td><td class="px-4 py-2 text-stone-600">Low</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">−4</td><td class="px-4 py-2 tabular-nums">16 %</td><td class="px-4 py-2 text-stone-600">Moderate</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">−3</td><td class="px-4 py-2 tabular-nums">14 %</td><td class="px-4 py-2 text-stone-600">Moderate</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">−2</td><td class="px-4 py-2 tabular-nums">27 %</td><td class="px-4 py-2 text-rose-700 font-semibold">High</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">−1</td><td class="px-4 py-2 tabular-nums">31 %</td><td class="px-4 py-2 text-rose-700 font-semibold">Very high</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">0 (ovulation)</td><td class="px-4 py-2 tabular-nums">33 %</td><td class="px-4 py-2 text-rose-700 font-semibold">Highest</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">+1</td><td class="px-4 py-2 tabular-nums">10 %</td><td class="px-4 py-2 text-stone-600">Low</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The <strong>peak days</strong> (day −2 through ovulation day) account for roughly 90 % of pregnancies in the data. If you are trying to conceive, this is where to focus.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to use the fertility window</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Track your cycle length</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Track at least three months. Day 1 = first day of your period. Take the average.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Calculate your window</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Enter your last period start and cycle length. The calculator returns a 10-day window with daily probabilities.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. Use LH tests in the second half</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              From day −4 onward test daily until positive. Ovulation follows 24–36 hours later.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">4. Intercourse every 1–2 days</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              During peak days (day −2 to day 0). Daily intercourse gives no benefit — sperm quality is best with 1–2 day spacing.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What if my cycle is irregular?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          If your cycle varies by more than 7 days or falls outside 21–35 days, calendar prediction is unreliable. Better tools:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li><strong>LH tests</strong> — track the surge directly</li>
          <li><strong>Basal body temperature</strong> — confirms ovulation retrospectively (0.2–0.5 °C rise)</li>
          <li><strong>Cervical mucus</strong> — clear and stretchy at peak fertility</li>
          <li><strong>Fertility monitors</strong> — combine LH + estradiol detection</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          For PCOS, very irregular cycles, or absent ovulation, see a gynecologist.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your fertility window</h3>
        <p class="text-stone-300 text-sm mb-5">10-day window with LH surge and daily probability — free.</p>
        <router-link
          :to="localePath('fertilityWindow')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >
          Calculate now &rarr;
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <div class="grid gap-3 sm:grid-cols-2">
          <router-link :to="localePath('ovulation')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Ovulation calculator</p>
            <p class="text-sm text-stone-500">Just the ovulation day</p>
          </router-link>
          <router-link :to="localePath('period')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Period calculator</p>
            <p class="text-sm text-stone-500">Periods &amp; cycle phases</p>
          </router-link>
          <router-link :to="localePath('dueDate')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Due date calculator</p>
            <p class="text-sm text-stone-500">Estimate your due date</p>
          </router-link>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your fertility window is more than six days — ten makes biological sense. Combine calendar tracking with LH tests to hit the peak days reliably.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Note: no calculator replaces medical advice. If you have been trying for 12 months (or 6 months if over 35) without success, see a reproductive specialist.
        </p>
      </div>

      <RelatedArticlesEn slug="fertility-window-guide" />
    </div>
  </article>
</template>
