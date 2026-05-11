<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Kopfumfang Baby — Perzentile, Normalwerte & wann zum Arzt | Health Calculators',
  description: 'Kopfumfang beim Baby richtig messen und einordnen. WHO-Perzentilen, Normalwerte 0–36 Monate, Mikro- und Makrocephalie verständlich erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kopfumfang Baby: Perzentile, Normalwerte und wann zum Kinderarzt',
    description: 'Kopfumfang beim Baby richtig messen und einordnen. WHO-Perzentilen, Normalwerte 0–36 Monate, Mikro- und Makrocephalie verständlich erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/kopfumfang-baby-perzentile',
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
        Kopfumfang Baby: Perzentile, Normalwerte und wann zum Kinderarzt
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">11. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei jeder U-Untersuchung greift der Kinderarzt zum Maßband — und misst den Kopfumfang deines Babys. Warum dieser eine Wert so wichtig ist, was die Perzentilen wirklich bedeuten und wann du wachsam sein solltest, erfährst du hier.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In den ersten drei Lebensjahren wächst das Gehirn schneller als zu jedem anderen Zeitpunkt im Leben. Der Kopfumfang ist das einfachste — und zugleich aussagekräftigste — Maß für dieses Wachstum.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum der Kopfumfang gemessen wird</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das Gehirn macht bei der Geburt etwa 25 % seiner späteren Größe aus, mit zwei Jahren bereits 75 %. Diese rasante Entwicklung spiegelt sich direkt im Schädelwachstum wider — anders als bei Gewicht oder Körperlänge, die viel stärker von Ernährung und Genetik abhängen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Auffälligkeiten im Kopfumfang können daher früh auf Entwicklungsstörungen, neurologische Erkrankungen oder strukturelle Auffälligkeiten hinweisen — lange bevor andere Symptome sichtbar werden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So wird richtig gemessen</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Schritt für Schritt</p>
          <ol class="list-decimal list-inside space-y-2 text-sm text-stone-700">
            <li>Flexibles Maßband (kein steifes Lineal) anlegen.</li>
            <li>Vorne knapp über die Augenbrauen.</li>
            <li>Hinten über den stärksten Punkt des Hinterkopfes.</li>
            <li>Band straff ziehen — Haare nicht eindrücken.</li>
            <li>Dreimal messen, den größten Wert nehmen.</li>
          </ol>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Schon ein halber Zentimeter Messfehler verschiebt die Perzentile spürbar. In den ersten Monaten kann der Schädel durch die Geburt noch leicht verformt sein — gemessen wird trotzdem der maximale Umfang.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Normalwerte: WHO-Referenz 0–36 Monate</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die folgende Tabelle zeigt Median-Werte (50. Perzentile) nach dem WHO-Wachstumsstandard 2006.
        </p>

        <div class="overflow-x-auto bg-white rounded-xl border border-stone-200 mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-4 py-3 font-semibold text-stone-700">Alter</th>
                <th class="text-right px-4 py-3 font-semibold text-stone-700">Jungen (cm)</th>
                <th class="text-right px-4 py-3 font-semibold text-stone-700">Mädchen (cm)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-4 py-2.5 text-stone-700">Geburt</td><td class="px-4 py-2.5 text-right tabular-nums">34,5</td><td class="px-4 py-2.5 text-right tabular-nums">33,9</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">3 Monate</td><td class="px-4 py-2.5 text-right tabular-nums">40,5</td><td class="px-4 py-2.5 text-right tabular-nums">39,5</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">6 Monate</td><td class="px-4 py-2.5 text-right tabular-nums">43,2</td><td class="px-4 py-2.5 text-right tabular-nums">42,0</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">12 Monate</td><td class="px-4 py-2.5 text-right tabular-nums">45,9</td><td class="px-4 py-2.5 text-right tabular-nums">44,5</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">18 Monate</td><td class="px-4 py-2.5 text-right tabular-nums">47,1</td><td class="px-4 py-2.5 text-right tabular-nums">45,7</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">24 Monate</td><td class="px-4 py-2.5 text-right tabular-nums">47,8</td><td class="px-4 py-2.5 text-right tabular-nums">46,6</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">36 Monate</td><td class="px-4 py-2.5 text-right tabular-nums">48,7</td><td class="px-4 py-2.5 text-right tabular-nums">47,7</td></tr>
            </tbody>
          </table>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Bemerkenswert: Im ersten Lebensjahr wächst der Kopfumfang um etwa <strong>12 cm</strong>, im zweiten nur noch um <strong>2 cm</strong>, im dritten weniger als <strong>1 cm</strong>. Danach beträgt das Wachstum nur noch wenige Millimeter pro Jahr.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was Perzentilen wirklich bedeuten</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Perzentile sagt: <em>Wie viel Prozent gleichaltriger Kinder haben einen kleineren Kopfumfang?</em> Bei der 50. Perzentile sind das genau die Hälfte — dein Kind ist im Median.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <div class="space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">Unter 3. Perzentile</span>
              <span class="text-red-500 font-medium">Sehr klein — abklären</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">3.–15. Perzentile</span>
              <span class="text-amber-600 font-medium">Klein, aber meist normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">15.–85. Perzentile</span>
              <span class="text-emerald-600 font-medium">Normalbereich</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">85.–97. Perzentile</span>
              <span class="text-amber-600 font-medium">Groß, aber meist normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">Über 97. Perzentile</span>
              <span class="text-red-500 font-medium">Sehr groß — abklären</span>
            </div>
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Wichtiger als der einzelne Wert ist die <strong>Konstanz der Kurve</strong>. Ein Kind, das stabil auf der 10. Perzentile wächst, ist gesund. Ein Kind, das von der 50. auf die 10. Perzentile rutscht, gibt Anlass zu einer genaueren Untersuchung.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann der Kopfumfang auffällig ist</h2>

        <h3 class="text-lg font-semibold text-stone-900 mb-2">Mikrocephalie (zu kleiner Kopfumfang)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Definition: Kopfumfang dauerhaft unter der 3. Perzentile (oder −2 Standardabweichungen). Mögliche Ursachen:
        </p>
        <ul class="list-disc list-inside space-y-1 text-sm text-stone-600 mb-4">
          <li>Genetische Syndrome (z.B. Trisomie, Patau-Syndrom)</li>
          <li>Intrauterine Infektionen (CMV, Toxoplasmose, Zika)</li>
          <li>Vorzeitiger Nahtverschluss (Kraniosynostose)</li>
          <li>Stoffwechselerkrankungen</li>
        </ul>

        <h3 class="text-lg font-semibold text-stone-900 mb-2">Makrocephalie (zu großer Kopfumfang)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Definition: Kopfumfang dauerhaft über der 97. Perzentile. In den meisten Fällen handelt es sich um eine <strong>familiäre Makrocephalie</strong> — Vater oder Mutter haben ebenfalls einen großen Kopf, und das Kind entwickelt sich völlig normal.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Selten steht eine Erkrankung dahinter (z.B. Hydrocephalus, neurokutane Syndrome). Entscheidend ist auch hier die <em>Verlaufsbeobachtung</em>: Ein plötzlich überdurchschnittlich schnell wachsender Kopf ist deutlich verdächtiger als ein konstant großer.
        </p>
      </div>

      <!-- Rechner CTA -->
      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Kopfumfang-Perzentile in 10 Sekunden berechnen</h3>
        <p class="text-base text-stone-600 mb-6">Gib Alter, Geschlecht und Kopfumfang ein — der Rechner zeigt sofort die WHO-Perzentile.</p>
        <router-link
          :to="localePath('headCircumference')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum Kopfumfang-Rechner
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Weitere Wachstumsmaße einordnen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Kopfumfang allein gibt nur ein Teilbild. Ein vollständiger Eindruck entsteht im Zusammenspiel mit Gewicht und Körperlänge:
        </p>
        <ul class="list-disc list-inside space-y-2 text-sm text-stone-700">
          <li>
            <router-link :to="localePath('childGrowth')" class="text-stone-900 underline hover:text-stone-600">Wachstumsperzentile-Rechner</router-link> — Gewicht, Größe und BMI nach WHO.
          </li>
          <li>
            <router-link :to="localePath('babyMilestones')" class="text-stone-900 underline hover:text-stone-600">Baby-Meilensteine</router-link> — Entwicklungsmeilensteine von 0–24 Monaten nach CDC.
          </li>
          <li>
            <router-link :to="localePath('apgarScore')" class="text-stone-900 underline hover:text-stone-600">APGAR-Score</router-link> — Zustandsbewertung direkt nach der Geburt.
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Kopfumfang ist eines der einfachsten und gleichzeitig informativsten Maße der frühkindlichen Vorsorge. Ein einzelner Wert sagt jedoch wenig — was zählt, ist die Verlaufskurve.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wenn dein Kind seiner eigenen Wachstumsbahn folgt, ist alles in Ordnung. Auffällige Sprünge — nach oben oder unten — sind der eigentliche Hinweis, mit dem Kinderarzt zu sprechen.
        </p>
      </div>

    </div>

    <RelatedArticles slug="kopfumfang-baby-perzentile" />
  </article>
</template>
