<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Due Date Calculator: LMP, Conception & IVF Methods Explained | Health Calculators',
  description: "Calculate your due date from last period, conception date, or IVF transfer. Naegele's rule, gestational weeks, trimesters, and milestones explained.",
  path: '/en/blog/due-date-calculator',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Due Date Calculator: LMP, Conception & IVF Methods Explained',
    description: "Calculate your due date from last period, conception date, or IVF transfer. Naegele's rule, gestational weeks, trimesters, and milestones explained.",
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-12',
    dateModified: '2026-04-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/due-date-calculator',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Due Date Calculator: LMP, Conception &amp; IVF Methods Explained</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 12, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          You're pregnant — congratulations! One of the first questions on your mind is: <strong>When is the baby coming?</strong> The <strong>estimated due date</strong> (EDD) gives you an orientation for the next 40 weeks of pregnancy.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this guide, you'll learn how to calculate your due date from three different starting points — last menstrual period, conception date, or IVF transfer — and what the results mean for your pregnancy journey.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Three Ways to Calculate Your Due Date</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Depending on what information you have, there are three methods to determine your due date. Our <router-link :to="localePath('dueDate')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">due date calculator</router-link> supports all three.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Last Menstrual Period (LMP Method)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              The most common method. You need the first day of your last period and your average cycle length. Using Naegele's rule: <strong>LMP + 280 days</strong> (for a 28-day cycle). Cycle length adjustments shift the date earlier or later.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Conception Date</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              If you know the exact date of conception, the calculation is: <strong>Conception date + 266 days</strong> (38 weeks). This method is more precise because it doesn't rely on estimating when ovulation occurred.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. IVF Transfer Date</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              For IVF pregnancies, the embryo transfer date is known precisely. Since the embryo is already 3 or 5 days old at transfer: <strong>Day-5 transfer: + 261 days</strong> — Day-3 transfer: + 263 days.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Is Naegele's Rule?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Naegele's rule</strong> is the most widely used method for estimating a due date. Developed by German gynecologist Franz Naegele in the 19th century, it assumes a 28-day cycle with ovulation on day 14.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Naegele's Formula</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            First day of last period <strong>+ 7 days &minus; 3 months + 1 year</strong>
          </p>
          <p class="text-sm text-stone-400 mt-2">
            Equivalent to: LMP + 280 days (40 weeks)
          </p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          If your cycle differs from 28 days, the EDD shifts accordingly: a 30-day cycle pushes the date 2 days later; a 26-day cycle moves it 2 days earlier. Our <router-link :to="localePath('dueDate')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">due date calculator</router-link> handles this adjustment automatically.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate Your Due Date Now</h3>
        <p class="text-stone-300 text-sm mb-5">From LMP, conception date, or IVF transfer — free and instant.</p>
        <router-link
          :to="localePath('dueDate')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Gestational Weeks and Trimesters</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Pregnancy is typically divided into <strong>40 weeks</strong> counted from the LMP, organized into three trimesters:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1st Trimester (Weeks 1–12)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">All organs form. A heartbeat is detectable by week 6. The risk of miscarriage drops significantly after week 12.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2nd Trimester (Weeks 13–27)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Rapid growth. First movements felt. Anatomy scan at week 20. Gender becomes visible. Most pregnant people feel best in this phase.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3rd Trimester (Weeks 28–40)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Baby gains weight and matures. Lungs develop fully. From week 37, the baby is considered full term.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Key Pregnancy Milestones</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <ul class="space-y-3 text-sm text-stone-500">
            <li><strong class="text-stone-700">Week 6:</strong> Heartbeat visible on ultrasound</li>
            <li><strong class="text-stone-700">Weeks 8–10:</strong> First prenatal visit, blood tests, first ultrasound</li>
            <li><strong class="text-stone-700">Week 12:</strong> End of critical first trimester — miscarriage risk falls</li>
            <li><strong class="text-stone-700">Week 20:</strong> Anatomy scan — detailed organ check</li>
            <li><strong class="text-stone-700">Week 24:</strong> Viability threshold with intensive neonatal care</li>
            <li><strong class="text-stone-700">Week 28:</strong> Start of third trimester</li>
            <li><strong class="text-stone-700">Week 37:</strong> Full term — birth is medically uncomplicated</li>
            <li><strong class="text-stone-700">Week 40:</strong> Estimated due date (EDD)</li>
          </ul>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why the EDD Is an Estimate</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Only about <strong>4% of babies</strong> are born exactly on the estimated due date. Most arrive within a window of <strong>two weeks before to two weeks after</strong> the EDD. The main reasons:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-base text-stone-600">
          <li>The exact moment of ovulation is rarely known with precision</li>
          <li>Cycle length varies between individuals and from cycle to cycle</li>
          <li>First pregnancies tend to run slightly longer on average</li>
          <li>Genetics and individual physiology influence pregnancy length</li>
          <li>Naegele's rule is based on 19th-century population averages</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related Calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          More tools for fertility and pregnancy planning:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-base text-stone-600">
          <li><router-link :to="localePath('pregnancy')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Pregnancy Calculator</router-link> — Track milestones, trimesters, and progress of your pregnancy</li>
          <li><router-link :to="localePath('ovulation')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Ovulation Calculator</router-link> — Find your fertile window and predict ovulation day</li>
        </ul>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Summary</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Your due date is an important reference point, not a fixed deadline. Our <router-link :to="localePath('dueDate')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">due date calculator</router-link> supports all three calculation methods and shows you trimesters, countdown, key dates, and milestones at a glance. Every pregnancy is unique — trust your body and your care team.
        </p>
      </div>

      <RelatedArticlesEn slug="due-date-calculator" />
    </div>
  </article>
</template>
