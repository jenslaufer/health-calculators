<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Lebenserwartung berechnen: Faktoren, Tabellen & Rechner | Health Calculators',
  description: 'Lebenserwartung berechnen — welche Faktoren Rauchen, Bewegung, Ernährung und Stress auf die Lebenserwartung haben. Mit kostenlosem Rechner und Ländertabelle.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Lebenserwartung berechnen — Faktoren, die wirklich zählen',
    description: 'Lebenserwartung berechnen — welche Faktoren Rauchen, Bewegung, Ernährung und Stress auf die Lebenserwartung haben. Mit kostenlosem Rechner und Ländertabelle.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/lebenserwartung-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Lebenserwartung berechnen — Faktoren, die wirklich zählen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">15. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Lebenserwartung</strong> ist keine unveränderliche Zahl — sie wird zu einem erheblichen Teil durch deinen Lebensstil bestimmt. Studien zeigen, dass Faktoren wie Rauchen, körperliche Aktivität, Ernährung und soziale Verbundenheit zusammen 10 bis 20 Jahre ausmachen können.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Unser <router-link :to="localePath('lifeExpectancy')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Lebenserwartung-Rechner</router-link> kombiniert aktuarische Basisdaten (WHO 2022) mit wissenschaftlich belegten Anpassungsfaktoren, um eine personalisierte Schätzung zu liefern.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Lebenserwartung nach Land und Geschlecht (WHO 2022)</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Lebenserwartung variiert weltweit stark. Hochentwickelte Länder mit guter Gesundheitsversorgung, sauberem Wasser und hohem Lebensstandard liegen deutlich vor Ländern mit eingeschränktem Zugang zu medizinischer Versorgung.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Land</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Männer</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Frauen</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Japan</td><td class="px-6 py-3 font-medium tabular-nums">81,1</td><td class="px-6 py-3 font-medium tabular-nums">87,1</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Schweiz</td><td class="px-6 py-3 font-medium tabular-nums">81,8</td><td class="px-6 py-3 font-medium tabular-nums">85,5</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Schweden</td><td class="px-6 py-3 font-medium tabular-nums">81,3</td><td class="px-6 py-3 font-medium tabular-nums">84,7</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Deutschland</td><td class="px-6 py-3 font-medium tabular-nums">78,5</td><td class="px-6 py-3 font-medium tabular-nums">83,4</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Frankreich</td><td class="px-6 py-3 font-medium tabular-nums">79,7</td><td class="px-6 py-3 font-medium tabular-nums">85,7</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">USA</td><td class="px-6 py-3 font-medium tabular-nums">73,5</td><td class="px-6 py-3 font-medium tabular-nums">79,3</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Weltdurchschnitt</td><td class="px-6 py-3 font-medium tabular-nums">70,8</td><td class="px-6 py-3 font-medium tabular-nums">75,9</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500">Quelle: WHO Global Health Observatory, 2022</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die wichtigsten Einflussfaktoren</h2>

        <div class="space-y-4 mb-6">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Rauchen: bis zu −10 Jahre</h3>
            <p class="text-sm text-stone-600">Rauchen ist der größte vermeidbare Risikofaktor. Starkes Rauchen (&gt;20 Zigaretten/Tag) verkürzt die Lebenserwartung um bis zu 10 Jahre. Bereits das Aufhören reduziert das Risiko deutlich — nach 10 Jahren ist das Lungenkrebsrisiko auf die Hälfte gesunken.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Körperliche Aktivität: +3 Jahre</h3>
            <p class="text-sm text-stone-600">Wer die WHO-Empfehlung von 150 Minuten moderater Bewegung pro Woche einhält, lebt im Schnitt 3 Jahre länger. Sitzender Lebensstil ist mit einer Verkürzung um bis zu 3 Jahre verbunden.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Ernährung: −3 bis +2 Jahre</h3>
            <p class="text-sm text-stone-600">Eine mediterrane oder pflanzenbasierte Ernährung kann die Lebenserwartung um bis zu 2 Jahre verlängern. Umgekehrt verkürzt eine sehr schlechte Ernährung (Fast Food, stark verarbeitet) die Lebenserwartung um bis zu 3 Jahre.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Soziale Verbundenheit: +2 Jahre</h3>
            <p class="text-sm text-stone-600">Einsamkeit ist ein unterschätzter Risikofaktor. Studien zeigen, dass Menschen mit starken sozialen Netzwerken im Schnitt 2 Jahre länger leben als sozial isolierte Personen.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Chronischer Stress: −4 Jahre</h3>
            <p class="text-sm text-stone-600">Dauerhafter Stress erhöht das Risiko für Herzerkrankungen, Bluthochdruck und Depressionen. Bei sehr hohem chronischem Stress sind Einbußen von bis zu 4 Jahren möglich.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Vorerkrankungen und ihr Einfluss</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Erkrankung</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Ø Einfluss (Jahre)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Herzerkrankung</td><td class="px-6 py-3 font-medium text-red-600 tabular-nums">−6</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Diabetes (Typ 1 oder 2)</td><td class="px-6 py-3 font-medium text-red-600 tabular-nums">−5</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Krebserkrankung</td><td class="px-6 py-3 font-medium text-red-600 tabular-nums">−4</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Bluthochdruck</td><td class="px-6 py-3 font-medium text-red-600 tabular-nums">−2</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-stone-500">Durchschnittliche Schätzungen auf Populationsebene. Individuelle Verläufe variieren stark je nach Schweregrad und Behandlung.</p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine Lebenserwartung berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Personalisierte Schätzung mit Lebensstilfaktoren — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('lifeExpectancy')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Genetik vs. Lebensstil</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Studien an eineiigen Zwillingen zeigen, dass Genetik nur etwa 20–30 % der Unterschiede in der Lebenserwartung erklärt. Die restlichen 70–80 % sind auf Umwelt- und Lebensstilfaktoren zurückzuführen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Familiengeschichte ist dennoch relevant: Eltern, die über 90 wurden, deuten auf günstige Gene hin — das ist in unserem Rechner mit bis zu +3 Jahren eingepreist.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wichtig: Selbst mit ungünstigen Genen lässt sich durch Lebensstilveränderungen viel ausgleichen. Rauchen aufhören, regelmäßig bewegen und soziale Kontakte pflegen hat einen größeren Effekt als die meisten Menschen vermuten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMI und Lebenserwartung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Sowohl Unter- als auch Übergewicht sind mit einer verkürzten Lebenserwartung verbunden. Der optimale BMI-Bereich liegt bei 18,5–24,9. Du kannst deinen <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI berechnen</router-link> oder mehr über <router-link :to="localeBlogPath('koerperfett-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfett berechnen</router-link> erfahren.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">BMI</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einfluss (Jahre)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 tabular-nums">&lt; 18,5</td><td class="px-6 py-3 text-stone-600">Untergewicht</td><td class="px-6 py-3 text-red-500 font-medium">−1</td></tr>
              <tr><td class="px-6 py-3 tabular-nums">18,5–24,9</td><td class="px-6 py-3 text-stone-600">Normalgewicht</td><td class="px-6 py-3 text-emerald-600 font-medium">±0</td></tr>
              <tr><td class="px-6 py-3 tabular-nums">25–29,9</td><td class="px-6 py-3 text-stone-600">Übergewicht</td><td class="px-6 py-3 text-red-500 font-medium">−1</td></tr>
              <tr><td class="px-6 py-3 tabular-nums">30–34,9</td><td class="px-6 py-3 text-stone-600">Adipositas I</td><td class="px-6 py-3 text-red-500 font-medium">−3</td></tr>
              <tr><td class="px-6 py-3 tabular-nums">35–39,9</td><td class="px-6 py-3 text-stone-600">Adipositas II</td><td class="px-6 py-3 text-red-500 font-medium">−5</td></tr>
              <tr><td class="px-6 py-3 tabular-nums">≥ 40</td><td class="px-6 py-3 text-stone-600">Adipositas III</td><td class="px-6 py-3 text-red-500 font-medium">−8</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Lebenserwartung ist kein Schicksal. Die größten Hebel sind: Nicht rauchen, regelmäßig bewegen, gut essen, Stress managen und soziale Kontakte pflegen. Zusammen können diese Faktoren 10–15 Jahre ausmachen. Nutze unseren <router-link :to="localePath('lifeExpectancy')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Lebenserwartung-Rechner</router-link>, um deinen persönlichen Ausgangspunkt zu ermitteln.
        </p>
      </div>

      <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-8">
        <p class="text-xs text-stone-500 leading-relaxed">
          <strong>Hinweis:</strong> Diese Schätzungen basieren auf epidemiologischen Durchschnittswerten und ersetzen keine medizinische Beratung. Individuelle Risiken hängen von vielen weiteren Faktoren ab. Wende dich für persönliche Gesundheitsfragen an einen Arzt.
        </p>
      </div>

      <RelatedArticles slug="lebenserwartung-berechnen" />
    </div>
  </article>
</template>
