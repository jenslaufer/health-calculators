<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Fruchtbares Fenster berechnen: 10 Tage, LH-Anstieg & Spitzentage | Health Calculators',
  description: 'Fruchtbares Fenster berechnen — 10-Tage-Fenster, LH-Anstieg, tägliche Empfängniswahrscheinlichkeit nach Wilcox 1995. Tipps für den Kinderwunsch.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Fruchtbares Fenster berechnen: 10 Tage, LH-Anstieg & Spitzentage',
    description: 'Fruchtbares Fenster berechnen — 10-Tage-Fenster, LH-Anstieg, tägliche Empfängniswahrscheinlichkeit nach Wilcox 1995.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-10',
    dateModified: '2026-05-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/fruchtbares-fenster-berechnen',
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
        Fruchtbares Fenster berechnen: 10 Tage, LH-Anstieg &amp; Spitzentage
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">10. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das <strong>fruchtbare Fenster</strong> ist die Zeit im Zyklus, in der eine Empfängnis möglich ist. Die meisten Rechner zeigen 6 Tage — biologisch sinnvoll sind aber bis zu 10.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Guide erfährst du, wie das erweiterte Fenster, der LH-Anstieg und die Spitzentage zusammenhängen — und wann die Empfängniswahrscheinlichkeit am höchsten ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Klassisches vs. erweitertes fruchtbares Fenster</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das <strong>klassische Fenster</strong> umfasst 6 Tage: 5 Tage vor dem Eisprung plus den Eisprungtag selbst. Die Logik: Spermien überleben bis zu 5 Tage im Zervixschleim, die Eizelle bleibt 12–24 Stunden befruchtungsfähig.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das <strong>erweiterte Fenster</strong> spannt sich über 10 Tage — von Tag −7 bis Tag +2 relativ zum Eisprung. Es trägt Schwankungen im Eisprungzeitpunkt und seltener Spermienlangzeit-Überleben Rechnung.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <p class="text-base font-semibold text-stone-900 mb-2">Warum 10 Tage?</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Studien zeigen: Der tatsächliche Eisprungtag streut bei „regelmäßigen" Frauen um ±2 Tage. Wer das Fenster auf 10 Tage erweitert, verpasst auch bei abweichendem Zyklus keinen fruchtbaren Tag.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Der LH-Anstieg — der zuverlässigste Marker</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das <strong>luteinisierende Hormon</strong> (LH) steigt 24–36 Stunden vor dem Eisprung sprunghaft an. Dieser <em>LH-Surge</em> löst den Eisprung aus.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          LH-Tests aus der Apotheke (auch „Ovulationstests") messen das Hormon im Urin. Ein positiver Test bedeutet: Der Eisprung kommt innerhalb der nächsten 1–2 Tage.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <p class="text-base font-semibold text-stone-900 mb-2">Tipp</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Ab 3–4 Tagen vor dem berechneten Eisprung täglich testen — am besten am späten Vormittag oder frühen Nachmittag. Morgen-Urin kann den Anstieg verfälschen.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Empfängniswahrscheinlichkeit pro Tag</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Klassikstudie von <strong>Wilcox et al. 1995</strong> (NEJM) hat erstmals tägliche Empfängniswahrscheinlichkeiten bestimmt. Die Daten:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-4 py-3 font-semibold text-stone-700">Tag</th>
                <th class="text-left px-4 py-3 font-semibold text-stone-700">Wahrscheinlichkeit</th>
                <th class="text-left px-4 py-3 font-semibold text-stone-700">Bewertung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-4 py-2 tabular-nums">−5</td><td class="px-4 py-2 tabular-nums">10 %</td><td class="px-4 py-2 text-stone-600">Niedrig</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">−4</td><td class="px-4 py-2 tabular-nums">16 %</td><td class="px-4 py-2 text-stone-600">Moderat</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">−3</td><td class="px-4 py-2 tabular-nums">14 %</td><td class="px-4 py-2 text-stone-600">Moderat</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">−2</td><td class="px-4 py-2 tabular-nums">27 %</td><td class="px-4 py-2 text-rose-700 font-semibold">Hoch</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">−1</td><td class="px-4 py-2 tabular-nums">31 %</td><td class="px-4 py-2 text-rose-700 font-semibold">Sehr hoch</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">0 (Eisprung)</td><td class="px-4 py-2 tabular-nums">33 %</td><td class="px-4 py-2 text-rose-700 font-semibold">Höchste</td></tr>
              <tr><td class="px-4 py-2 tabular-nums">+1</td><td class="px-4 py-2 tabular-nums">10 %</td><td class="px-4 py-2 text-stone-600">Niedrig</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die <strong>Spitzentage</strong> (Tag −2 bis Eisprungtag) bringen ~90 % aller Schwangerschaften zustande. Wer plant, sollte hier den Schwerpunkt setzen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So nutzt du das fruchtbare Fenster richtig</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Zykluslänge bestimmen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Tracke deinen Zyklus mindestens 3 Monate. Der erste Tag der Periode = Tag 1. Bilde den Mittelwert.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Fenster mit Rechner ermitteln</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Trage letzten Periodenbeginn und Zykluslänge in den Rechner ein. Du bekommst dein 10-Tage-Fenster mit Tagesprognose.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. LH-Tests in der zweiten Wochenhälfte</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ab Tag −4 täglich testen, bis der Test positiv wird. Der Eisprung folgt in 24–36 Stunden.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">4. Geschlechtsverkehr alle 1–2 Tage</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Während der Spitzentage (Tag −2 bis Tag 0). Tägliches Timing bringt keinen Vorteil — Spermienqualität bleibt bei 1–2 Tagen Abstand optimal.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was, wenn der Zyklus unregelmäßig ist?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei Schwankungen &gt; 7 Tagen oder Zyklen außerhalb von 21–35 Tagen ist die Kalendermethode ungenau. Hier helfen:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li><strong>LH-Tests</strong> — direkt am Anstieg orientieren</li>
          <li><strong>Basaltemperatur</strong> — bestätigt Eisprung im Nachhinein (Anstieg um 0,2–0,5 °C)</li>
          <li><strong>Zervixschleim</strong> — klar und spinnbar zur Spitzenfruchtbarkeit</li>
          <li><strong>Ovulationsmonitore</strong> — kombinieren mehrere Hormone (LH + Estradiol)</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei PCOS, sehr unregelmäßigen Zyklen oder fehlendem Eisprung sollte ein Frauenarzt zu Rate gezogen werden.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Fruchtbares Fenster jetzt berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">10-Tage-Fenster mit LH-Anstieg und Tages-Wahrscheinlichkeit — kostenlos.</p>
        <router-link
          :to="localePath('fertilityWindow')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >
          Jetzt kostenlos berechnen &rarr;
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <div class="grid gap-3 sm:grid-cols-2">
          <router-link :to="localePath('ovulation')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Eisprungrechner</p>
            <p class="text-sm text-stone-500">Berechne nur den Eisprungtag</p>
          </router-link>
          <router-link :to="localePath('period')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Zyklusrechner</p>
            <p class="text-sm text-stone-500">Periode &amp; Zyklusphasen</p>
          </router-link>
          <router-link :to="localePath('dueDate')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Geburtstermin-Rechner</p>
            <p class="text-sm text-stone-500">Wann ist die Geburt?</p>
          </router-link>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das fruchtbare Fenster ist mehr als 6 Tage — biologisch sinnvoll sind 10. Kombiniere Kalenderberechnung mit LH-Tests, um die Spitzentage zuverlässig zu treffen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Hinweis: Kein Rechner ersetzt eine medizinische Beratung. Bei länger als 12 Monaten erfolgloser Schwangerschaftsplanung (oder 6 Monaten bei Frauen über 35) sprich mit einem Reproduktionsmediziner.
        </p>
      </div>

      <RelatedArticles slug="fruchtbares-fenster-berechnen" />
    </div>
  </article>
</template>
