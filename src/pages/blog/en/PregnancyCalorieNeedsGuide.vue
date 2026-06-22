<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Pregnancy Calorie Needs: How Many Calories per Trimester? | Health Calculators',
  description: 'How many calories do you really need during pregnancy? Trimester table, IOM formula, the "eating for two" myth, and practical tips for expecting mothers.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Pregnancy Calorie Needs: How Many Calories per Trimester?',
      description: 'Trimester-specific energy supplements, IOM recommendations, twin pregnancy and realistic portion sizes.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-13',
      dateModified: '2026-05-13',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/pregnancy-calorie-needs-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many extra calories do I need during pregnancy?',
          acceptedAnswer: { '@type': 'Answer', text: 'Zero in the first trimester, +340 kcal/day in the second trimester, and +452 kcal/day in the third trimester (IOM 2002/2005). Twin pregnancies add another +300 kcal/day starting in T2.' },
        },
        {
          '@type': 'Question',
          name: 'Is it true that I have to "eat for two"?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. The actual increase maxes out at about one extra small meal. Nutrient density — folate, iron, iodine, omega-3 — matters far more than calorie volume.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Pregnancy Calorie Needs: How Many Calories per Trimester?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 13, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          "You're <strong>eating for two</strong> now!" — barely any pregnancy myth survives so persistently. In reality, the extra energy you need is much smaller than most people think: <strong>essentially zero</strong> in the first trimester, only +340 kcal/day in the second, and about +452 kcal/day in the third.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide walks you through the official numbers, explains the <strong>IOM formula</strong> behind them, covers twin pregnancies, and shows what those calories actually look like on a plate.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Trimester table at a glance</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Trimester</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Singleton</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Twins</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1st trimester (weeks 1–13)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+0 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+0 kcal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">2nd trimester (weeks 14–27)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+340 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+640 kcal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">3rd trimester (weeks 28–40)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+452 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+752 kcal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Source: <em>Institute of Medicine, Dietary Reference Intakes for Energy (2002/2005)</em>. ACOG and WHO align with these values.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why no extra calories in the first trimester?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          During the first 13 weeks, the embryo grows fast — from a single cell to a recognizable baby shape — but it is still <em>energetically tiny</em>. The placenta is just starting up, your body is building new tissue, yet the additional energy demand is under 50 kcal/day and considered <strong>negligible</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          What matters far more in this phase: <strong>folate</strong> (neural tube!), <strong>iodine</strong>, and <strong>iron</strong>. If you struggle with nausea, follow your appetite — the priority is keeping anything down at all.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">2nd trimester: +340 kcal — what does that actually look like?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          About 340 kcal is roughly equivalent to:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">A <strong>whole-grain sandwich</strong> with cheese and avocado</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">A <strong>bowl of muesli (60 g)</strong> with milk and a banana</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">A <strong>500 g pot of plain yogurt</strong> with two tablespoons of nuts</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">A <strong>handful of nuts (50 g)</strong> plus an apple</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          You can see the scale: not a second main meal, but <em>one solid snack</em>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">3rd trimester: +452 kcal — the final growth phase</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In the 3rd trimester the baby nearly triples its weight — from about 1 kg to an average of 3.3 kg. The mother's energy needs climb correspondingly to roughly <strong>+450 kcal/day</strong>. That's still not a second meal, but noticeably more than T2.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Important: these figures apply to a <strong>normal-weight woman with moderate activity</strong>. Underweight tends to push needs higher, overweight slightly lower — the calculator accounts for your pre-pregnancy weight directly via the IOM formula.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Twins: +300 kcal extra from T2 on</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          For twin pregnancies, ACOG and most clinical guidelines recommend an extra <strong>300 kcal/day</strong> starting in the 2nd trimester. The 1st trimester stays close to zero. These are estimates only — twin pregnancies are typically managed closely by an obstetrician and often a dietitian.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How the formula works</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The calculator uses the Institute of Medicine's <strong>Estimated Energy Requirement (EER)</strong> for adult women:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-4 mb-4 font-mono text-sm text-stone-700">
          EER = 354 − 6.91 · age + PA · (9.36 · weight_kg + 726 · height_m)
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          PA is the physical-activity coefficient: 1.00 (sedentary), 1.12 (low active), 1.27 (active), or 1.45 (very active). The trimester supplement is then added on top.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The calculation uses your <strong>pre-pregnancy weight</strong> — not your current weight. This keeps the estimate stable across the pregnancy and reflects your baseline metabolism, not the growing uterus.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Beyond calories — what else matters</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Folate 400–600 µg/day</strong> — ideally starting before conception.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Iron ~27–30 mg/day</strong> — needs roughly double. Whole grains, legumes, lean meat.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Iodine 220–230 µg/day</strong> — iodized salt, ocean fish twice a week.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Omega-3 (DHA)</strong> — important for fetal brain development in T3.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Staying within the recommended weight-gain range</strong> matters more than hitting an exact calorie number.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators &amp; topics</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Pregnancy weight gain</strong> — the other side of the energy equation. Read the <router-link :to="localeBlogPath('pregnancy-weight-gain-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">pregnancy weight-gain guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Pre-pregnancy BMI</strong> — determines the recommended gain range. Read the <router-link :to="localeBlogPath('pregnancy-bmi-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">pregnancy BMI guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Due date</strong> — when does each trimester start? Read the <router-link :to="localeBlogPath('calculate-due-date')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">due-date calculator guide</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your daily needs now</h3>
        <p class="text-stone-300 text-sm mb-5">IOM formula, anonymous, instant. With metric and imperial units.</p>
        <router-link
          :to="localePath('pregnancyCalories')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the Pregnancy Calorie Calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Should I actually track my calories?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              For healthy pregnancies, usually no. Hunger and fullness cues are sharper during pregnancy — trust them. Tracking makes sense if weight gain trends outside the recommended range or in gestational diabetes.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">What if I start pregnancy overweight?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Active weight loss is not recommended. Aim for the lower IOM weight-gain ranges (5–9 kg in obesity), and coordinate with your obstetrician or a registered dietitian.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">I'm hungry all the time — is that normal?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Yes, especially from T2 onward. Focus on <em>filling, nutrient-dense</em> foods: whole grains, protein, healthy fats. Otherwise sweets and snacks quickly overshoot the +340 kcal budget.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Does this also apply to breastfeeding?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              No — lactation has its own number (about +500 kcal/day in the first 6 months). For pregnancy, use the trimester values above.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn />
  </article>
</template>
