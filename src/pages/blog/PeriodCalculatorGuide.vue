<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticlesEn from '../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Period Calculator: Predict Your Next Period & Fertile Days | Health Calculators',
  description: 'Understand your menstrual cycle: 4 phases, cycle length, irregularities and tracking benefits. Free period calculator included.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Period Calculator: Predict Your Next Period & Fertile Days',
    description: 'Understand your menstrual cycle: 4 phases, cycle length, irregularities and tracking benefits. Free period calculator included.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-03',
    dateModified: '2026-04-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/period-calculator-guide',
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
        Period Calculator: Predict Your Next Period & Fertile Days
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 3, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          When is your next period? When are your fertile days? Your <strong>menstrual cycle</strong> affects daily life in many ways — and understanding it helps you plan ahead.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article explains how the cycle works, what phases it goes through, and how a period calculator can predict your next periods.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The 4 Phases of the Menstrual Cycle</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The menstrual cycle has four distinct phases, each driven by different hormones and accompanied by specific physical changes.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Menstrual Phase (Days 1–5)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              The uterine lining sheds — this is your period. Day 1 is the first day of bleeding. Duration varies between <strong>3 and 7 days</strong>. Progesterone and estrogen are at their lowest.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Follicular Phase (Days 6–13)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Follicle-stimulating hormone (FSH) triggers follicle growth in the ovaries. Estrogen rises, rebuilding the uterine lining. This phase is <strong>variable</strong> — shorter cycles have a shorter follicular phase, longer cycles a longer one.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. Ovulation (around Day 14)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              A surge in luteinizing hormone (LH) triggers ovulation. The mature egg is released and travels into the fallopian tube. The <strong>fertile window</strong> spans the 5 days before ovulation and ovulation day itself.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">4. Luteal Phase (Days 15–28)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              The empty follicle becomes the corpus luteum and produces progesterone. If the egg isn't fertilized, progesterone drops after about <strong>14 days</strong> — and your period begins. This phase is relatively constant for most women.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to Predict Your Next Period</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Prediction uses the <strong>calendar method</strong>. You need the first day of your last period and your average cycle length.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Formulas</p>
          <div class="text-sm text-stone-500 leading-relaxed space-y-1">
            <p>Next period = Last period start <strong>+ Cycle length</strong></p>
            <p>Ovulation = Next period <strong>− 14 days</strong></p>
            <p>Fertile window = Ovulation <strong>−5 days</strong> to ovulation day</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Example: 28-Day Cycle</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Last period March 1 → Next period <strong>March 29</strong>. Ovulation March 15 (day 14). Fertile March 10–15.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Example: 32-Day Cycle</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Last period March 1 → Next period <strong>April 2</strong>. Ovulation March 19 (day 18). The follicular phase is 4 days longer; the luteal phase stays at 14 days.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Cycle Length: What's Normal?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A normal cycle lasts between <strong>21 and 35 days</strong>. The average is 28 days, but only about 13% of women have an exact 28-day cycle.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Variations of 1–2 days between cycles are normal. To determine your average cycle length, track your cycle for at least <strong>3–6 months</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Cycle Irregularities — When to See a Doctor</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Occasional variations are normal. See a doctor if you experience:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Missed Periods (Amenorrhea)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              When your period is absent for <strong>3 months or longer</strong> (without pregnancy). Possible causes: stress, underweight, hormonal imbalances, PCOS.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Very Heavy or Prolonged Bleeding</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Bleeding lasting over <strong>7 days</strong> or needing to change pads/tampons every hour. May indicate fibroids, polyps, or clotting disorders.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Very Short or Very Long Cycles</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Consistently under <strong>21 days</strong> or over <strong>35 days</strong>. May point to thyroid issues, PCOS, or ovarian dysfunction.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Severe Pain</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              When menstrual cramps disrupt daily life and painkillers aren't enough. A possible cause: <strong>endometriosis</strong>.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Benefits of Cycle Tracking</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Knowing your cycle brings tangible benefits — whether or not you're trying to conceive.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Better Planning</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Vacations, sports, important events — knowing when your period is due helps you organize daily life.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Early Detection of Changes</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Regular tracking makes deviations visible — before they become a problem. Doctors appreciate documented cycle data.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Fertility & Contraception</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Knowing your fertile days helps with natural family planning — whether you're trying to conceive or avoid pregnancy.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Understanding PMS & Mood Swings</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              When you know which cycle phase you're in, you can better contextualize mood swings, energy dips, and cravings.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate Your Cycle Now</h3>
        <p class="text-stone-300 text-sm mb-5">Predict your next periods and fertile windows — free and without sign-up.</p>
        <router-link
          :to="localePath('period')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >
          Calculate for free &rarr;
        </router-link>
      </div>

      <!-- Conclusion -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Understanding your cycle is the first step toward greater body awareness. The calendar method provides a good estimate for your next period and fertile days — but it's not a substitute for medical diagnosis.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          If you experience persistent irregularities, severe pain, or have been trying to conceive for more than 12 months, consult your gynecologist.
        </p>
      </div>

      <RelatedArticlesEn slug="period-calculator-guide" />
    </div>
  </article>
</template>
