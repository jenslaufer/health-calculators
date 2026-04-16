<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Body Type Calculator: Ectomorph, Mesomorph or Endomorph — What Am I?',
  description: 'Determine your somatotype using the Heath-Carter method. What do ectomorph, mesomorph and endomorph mean? Explained with training and nutrition recommendations.',
  path: '/en/blog/body-type-calculator',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Body Type Calculator: Ectomorph, Mesomorph or Endomorph — What Am I?',
    description: 'Determine your somatotype using the Heath-Carter method. What do ectomorph, mesomorph and endomorph mean?',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-16',
    dateModified: '2026-04-16',
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Body Type Calculator: Ectomorph, Mesomorph or Endomorph — What Am I?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 16, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Why can some people eat anything without gaining weight — while others seem to gain fat just by looking at food? Part of the answer lies in your <strong>somatotype</strong>, the scientific concept of body build type.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The three body type model — <strong>ectomorph</strong>, <strong>mesomorph</strong>, and <strong>endomorph</strong> — was developed by psychologist William Sheldon in the 1940s, then refined by Barbara Heath and Jack Carter into the measurable <em>Heath-Carter method</em>. Today it's a useful tool for personalizing training and nutrition.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Is a Somatotype?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A somatotype describes the relative strength of three body composition components on a scale from 0.5 to 9:
        </p>
        <div class="space-y-4 mb-4">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 class="text-base font-semibold text-blue-800 mb-2">Ectomorphy — Linearity</h3>
            <p class="text-sm text-blue-700">Describes the relative slenderness and length of the body. High ectomorphy = lean frame, low weight relative to height.</p>
          </div>
          <div class="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 class="text-base font-semibold text-green-800 mb-2">Mesomorphy — Musculoskeletal Development</h3>
            <p class="text-sm text-green-700">Describes the relative muscle mass and bone structure. High mesomorphy = athletic build, broad shoulders, pronounced musculature.</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h3 class="text-base font-semibold text-orange-800 mb-2">Endomorphy — Body Fat</h3>
            <p class="text-sm text-orange-700">Describes the relative body fat level. High endomorphy = rounder body shape, tendency to store fat.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Important: everyone has <em>all three</em> components — no one is a pure ectomorph or pure endomorph. A somatotype is expressed as a three-number rating, e.g., <strong>2-5-3</strong> (ectomorphy–mesomorphy–endomorphy).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Three Body Types Explained</h2>

        <div class="mb-6">
          <h3 class="text-xl font-semibold text-stone-900 mb-3">Ectomorph</h3>
          <p class="text-base text-stone-600 leading-relaxed mb-3">
            Ectomorphs are lean, long-limbed, and struggle to gain weight — whether muscle or fat. They have a fast metabolism and a slim bone frame (identifiable by a small wrist circumference).
          </p>
          <ul class="text-sm text-stone-600 space-y-1 mb-3 list-disc list-inside">
            <li>Narrow shoulders and hips</li>
            <li>Long, slender body build</li>
            <li>Fast metabolism</li>
            <li>Poor response to muscle-building training without high calorie intake</li>
          </ul>
          <p class="text-sm text-stone-500 italic">Examples: marathon runners, swimmers, many model physiques</p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold text-stone-900 mb-3">Mesomorph</h3>
          <p class="text-base text-stone-600 leading-relaxed mb-3">
            Mesomorphs are often considered genetically gifted in sport: they build muscle quickly, naturally maintain lower body fat, and have an athletic frame. Broad shoulders, narrow waist, and strong training response are typical.
          </p>
          <ul class="text-sm text-stone-600 space-y-1 mb-3 list-disc list-inside">
            <li>Broad shoulders, narrow waist</li>
            <li>Well-developed musculature</li>
            <li>Fast adaptation to training</li>
            <li>Manageable body fat with normal diet</li>
          </ul>
          <p class="text-sm text-stone-500 italic">Examples: sprinters, bodybuilders, football players</p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold text-stone-900 mb-3">Endomorph</h3>
          <p class="text-base text-stone-600 leading-relaxed mb-3">
            Endomorphs have a broader body build, tend to store fat, and often struggle to lose weight. This doesn't mean they can't be athletic — many strength athletes and wrestlers are strongly endomorphic.
          </p>
          <ul class="text-sm text-stone-600 space-y-1 mb-3 list-disc list-inside">
            <li>Broader, rounder body build</li>
            <li>Higher body fat percentage</li>
            <li>Slower metabolism</li>
            <li>Good natural strength, but fat loss requires more effort</li>
          </ul>
          <p class="text-sm text-stone-500 italic">Examples: weightlifters, sumo wrestlers, many strength athletes</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Mixed Types: The Reality</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Most people are not pure types but mixtures:
        </p>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-4">
          <div class="bg-teal-50 border border-teal-200 rounded-lg p-4 text-center">
            <div class="font-semibold text-teal-800 mb-1">Ecto-Mesomorph</div>
            <div class="text-sm text-teal-700">Lean, athletic type. Builds muscle while staying lean.</div>
          </div>
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <div class="font-semibold text-yellow-800 mb-1">Endo-Mesomorph</div>
            <div class="text-sm text-yellow-700">Strong, muscular type with a tendency to store fat.</div>
          </div>
          <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <div class="font-semibold text-purple-800 mb-1">Ecto-Endomorph</div>
            <div class="text-sm text-purple-700">Slim frame but relatively high body fat — the &ldquo;skinny fat&rdquo; type.</div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Heath-Carter Method</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The scientifically validated method for somatotype determination by Heath and Carter (1990) uses precise body measurements:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-5 mb-4">
          <h3 class="text-sm font-semibold text-stone-700 mb-3">Required measurements:</h3>
          <ul class="text-sm text-stone-600 space-y-2 list-disc list-inside">
            <li><strong>Ectomorphy:</strong> Height and weight → Height-Weight Ratio (HWR)</li>
            <li><strong>Endomorphy:</strong> Skinfold thickness (triceps, subscapular, supraspinale) — or body fat % as a proxy</li>
            <li><strong>Mesomorphy:</strong> Bone breadths (humerus, femur), muscle girths (arm, calf)</li>
          </ul>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Since skinfold measurements require specialized calipers, our calculator uses simplified inputs: wrist circumference (bone structure), shoulder width, and hip width — plus optional body fat percentage for more accurate endomorphy values.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Find your body type now — for free</h3>
        <p class="text-stone-300 text-sm mb-5">Personalized somatotype with training and nutrition recommendations — no sign-up required.</p>
        <router-link
          to="/en/body-type-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate your body type &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Training Recommendations by Body Type</h2>
        <div class="space-y-5">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ectomorph: Build focus</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Heavy strength training with low reps (6–8 reps, 3–5 sets). Minimal cardio. Compound lifts — squats, deadlifts, bench press — are the foundation. Recovery is as important as the training itself.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mesomorph: Versatility</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Combination of strength and cardio training. 3–4 strength sessions with moderate weight (8–12 reps) plus 2–3 cardio sessions. This type responds well to almost any training concept.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Endomorph: Boost metabolism</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              HIIT cardio 3–4× per week combined with strength training. Circuit training with short rest periods maximizes calorie burn. Consistency is key — at least 5 training days per week is recommended.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Nutrition Recommendations by Body Type</h2>
        <div class="space-y-5">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ectomorph: Calorie surplus</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              300–500 kcal/day above maintenance. High carbohydrate intake (50–60%), sufficient protein (1.6–2.0 g/kg/day). Frequent meals (5–6×/day) help meet the high calorie targets.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mesomorph: Balanced macros</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              ~40% carbs, ~30% protein, ~30% fat. Adjust calories to your goal. Protein: 1.6–2.0 g/kg/day. Clean, unprocessed foods form the foundation.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Endomorph: Control carbohydrates</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Reduce carbohydrates to 30–40%, avoid simple sugars. Prioritize protein (2.0–2.4 g/kg/day). Regular meals stabilize blood sugar. Calorie tracking is particularly helpful for this type.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Limitations of the Somatotype Model</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The somatotype model is a useful orientation framework, but not a fixed destiny:
        </p>
        <ul class="text-sm text-stone-600 space-y-2 list-disc list-inside">
          <li>Somatotype can change through training and nutrition</li>
          <li>Genetics is a factor, but not the only determinant</li>
          <li>The model doesn't account for hormonal, metabolic, or psychological factors</li>
          <li>Mixed types are the rule, not the exception</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed mt-4">
          Use your somatotype as a starting point, not a limitation. It helps make training and nutrition more efficient — but individual progress is always possible regardless of body type.
        </p>
      </div>

      <RelatedArticlesEn slug="body-type-calculator" />
    </div>
  </article>
</template>
