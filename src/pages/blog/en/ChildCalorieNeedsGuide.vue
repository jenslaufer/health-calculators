<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Child Calorie Needs: How Many Calories Does My Child Need? | Health Calculators',
  description: 'How many calories does a child need per day? IOM EER formula, table by age and activity, growth, puberty — everything parents need to know.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Child Calorie Needs: How Many Calories Does My Child Need?',
      description: 'IOM EER formula explained. Tables by age and activity. Growth spurts, puberty and practical tips for parents.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/child-calorie-needs-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many calories does a child need per day?',
          acceptedAnswer: { '@type': 'Answer', text: 'Highly age-dependent — from around 1000 kcal in 2-year-olds to 2800 kcal in active 14-year-old boys. Sex, activity level and growth phase determine the exact need.' },
        },
        {
          '@type': 'Question',
          name: 'Which formula does the calculator use?',
          acceptedAnswer: { '@type': 'Answer', text: 'The Estimated Energy Requirement (EER) from the U.S. Institute of Medicine (DRI 2002/2005). It is the standard in pediatrics and nutrition science.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Child Calorie Needs: How Many Calories Does My Child Need?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 8, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Parents often wonder: <strong>Is my child eating enough? Or too much?</strong> Children's calorie needs differ sharply from adult needs — they are <strong>higher per kilogram of body weight</strong>, because growth, brain development and movement burn through energy.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The <strong>Estimated Energy Requirement (EER)</strong> from the U.S. Institute of Medicine is the pediatric standard. It accounts for age, sex, height, weight and an age-appropriate activity level — giving a realistic daily number instead of crude rules of thumb.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why children need more calories per kg</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A 6-year-old child weighing 22 kg needs about 1500 kcal — roughly <strong>68 kcal per kg</strong>. An 80 kg adult with a desk job manages on about 30 kcal/kg. The reason: growth builds new tissue, the brain develops rapidly, and children move much more in everyday life — even "calm" children are more active than most adults.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          That is also why the old "body weight × 30" rule of thumb is wildly wrong for children. Their needs depend mostly on <em>age</em> — and on activity level.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Reference values by age and sex (kcal/day)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Age</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Boy (moderate)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Girl (moderate)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Active (extra)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1–3 years</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1000–1200</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">950–1150</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+100–200</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">4–8 years</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1400–1600</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1300–1500</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+200–400</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">9–13 years</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1800–2200</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1600–2000</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+400–600</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">14–18 years</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2400–2800</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1800–2200</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+400–800</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          These values are <strong>averages across the age range</strong>. Within a band they vary with size and growth speed. The exact number comes from the calculator.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The four activity levels — what they mean</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sedentary</strong> — school, homework, screen. Little planned movement. PA factor 1.00.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Low active</strong> — typical school day with walking, outdoor play, occasional PE. PA 1.13 (boy) / 1.16 (girl).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Active</strong> — regular club training (2–4×/week), active lifestyle. PA 1.26 / 1.31.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Very active</strong> — competitive sport, multiple hours of daily training. PA 1.42 / 1.56.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Puberty growth spurt: needs explode</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Between ages 10 and 16, energy needs rise <strong>in surges</strong>. Growth hormones spike, bones lengthen, muscles develop. A 14-year-old boy in sport may need <strong>3000 kcal or more</strong> during this phase — temporarily more than many adults.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Parents notice this fast: suddenly the entire fridge disappears, portions become huge. This is normal — and ends once linear growth completes (girls usually 14–16, boys 16–18).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What matters more than the number</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Hunger and fullness cues</strong> — children regulate appetite well. Forced clean plates or strict portions interfere with self-regulation.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Food quality</strong> — whole grains, vegetables, protein, healthy fats. A 1500-kcal pizza diet is not the same as 1500 kcal of balanced food.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Growth curve</strong> — more important than daily calories. If height and weight stay on a stable percentile, the intake fits.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Meal rhythm</strong> — 3 main meals + 1–2 snacks. Children need refueling more often than adults.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics &amp; calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>TDEE (adults)</strong> — adult calorie needs using the Mifflin-St Jeor formula. Read the <router-link :to="localeBlogPath('calculate-tdee')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">TDEE article</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Child growth percentile</strong> — where does your child sit compared to the norm? Read the <router-link :to="localeBlogPath('child-growth-percentile-chart')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">growth percentile guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Baby feeding amount</strong> — for infants under 1 year, a separate calculation by body weight applies. Open the <router-link :to="localeBlogPath('baby-feeding-amount-calculator')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">feeding amount guide</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Estimate your child's calorie needs now</h3>
        <p class="text-stone-300 text-sm mb-5">IOM formula, anonymous, instant. With metric and imperial units.</p>
        <router-link
          :to="localePath('childCalories')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the Child Calorie Needs Calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Should I count calories for my child?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              For healthy children: no. The growth curve, hunger cues and energy levels are better indicators. The calculator helps you estimate the order of magnitude — useful when a child suddenly eats much more or less, or for kids in serious sport.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">My teenager eats huge amounts — is that normal?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Most likely yes. During the puberty growth spurt, needs rise by 30–50 %. As long as growth and overall well-being are good, the hunger is a body signal, not boredom.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">My child is overweight — should I cut calories?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Not without medical advice. In children, the standard approach is usually weight stabilization rather than weight loss — the growing body "stretches" the existing weight. Talk to a pediatrician or registered dietitian.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">From what age does the calculator apply?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              From age 1. Babies under 12 months follow different recommendations — see the Baby Feeding Amount Calculator. For toddlers (1–2 years), the calculator uses the fixed IOM reference values without using height or weight.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn />
  </article>
</template>
