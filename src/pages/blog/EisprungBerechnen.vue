<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Eisprung berechnen: So bestimmst du deine fruchtbaren Tage | Health Calculators',
  description: 'Eisprung berechnen mit der Kalendermethode. Fruchtbare Tage, Zykluslänge, Lutealphase und Tipps zur natürlichen Familienplanung.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Eisprung berechnen: So bestimmst du deine fruchtbaren Tage',
    description: 'Eisprung berechnen mit der Kalendermethode. Fruchtbare Tage, Zykluslänge, Lutealphase und Tipps zur natürlichen Familienplanung.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-29',
    dateModified: '2026-03-29',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/eisprung-berechnen',
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
        Eisprung berechnen: So bestimmst du deine fruchtbaren Tage
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">29. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Du möchtest schwanger werden — oder einfach deinen Zyklus besser verstehen? Dann ist der <strong>Eisprung</strong> der wichtigste Zeitpunkt in deinem Monatszyklus.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deinen Eisprung berechnest, was das fruchtbare Fenster ist und welche Faktoren deinen Zyklus beeinflussen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der Eisprung?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Eisprung (Ovulation) ist der Moment, in dem eine reife Eizelle aus dem Eierstock freigesetzt wird. Sie wandert dann in den Eileiter, wo sie etwa 12 bis 24 Stunden befruchtungsfähig bleibt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Eisprung teilt den Zyklus in zwei Phasen: Die <strong>Follikelphase</strong> (vor dem Eisprung) und die <strong>Lutealphase</strong> (nach dem Eisprung). Während die Follikelphase variabel ist, bleibt die Lutealphase relativ konstant bei etwa 14 Tagen.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Die Lutealphase</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Die Zeit vom Eisprung bis zur nächsten Periode beträgt fast immer <strong>14 Tage</strong> — unabhängig von der Zykluslänge. Deshalb kann man den Eisprung rückwärts berechnen.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So berechnest du deinen Eisprung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die einfachste Methode ist die <strong>Kalendermethode</strong>. Du brauchst nur zwei Informationen: den ersten Tag deiner letzten Periode und deine durchschnittliche Zykluslänge.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Formel</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Eisprung = Erster Tag der letzten Periode <strong>+ Zykluslänge − 14 Tage</strong>
          </p>
        </div>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Beispiel: 28-Tage-Zyklus</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Letzte Periode am 1. März → Eisprung am <strong>15. März</strong> (Tag 14). Das fruchtbare Fenster beginnt am 10. März.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Beispiel: 32-Tage-Zyklus</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Letzte Periode am 1. März → Eisprung am <strong>19. März</strong> (Tag 18). Die Lutealphase bleibt 14 Tage, nur die Follikelphase ist länger.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Das fruchtbare Fenster</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Spermien können bis zu <strong>5 Tage</strong> im weiblichen Körper überleben. Die Eizelle selbst ist nur 12 bis 24 Stunden befruchtungsfähig. Daraus ergibt sich ein fruchtbares Fenster von etwa <strong>6 Tagen</strong>: 5 Tage vor dem Eisprung plus der Eisprungtag selbst.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die höchste Wahrscheinlichkeit einer Empfängnis besteht an den <strong>zwei Tagen vor dem Eisprung</strong> und am Eisprungtag selbst. Ein Tag nach dem Eisprung sinkt die Wahrscheinlichkeit stark ab.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Fruchtbares Fenster bei 28-Tage-Zyklus</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Eisprung Tag 14 → Fruchtbar von <strong>Tag 9 bis Tag 15</strong> (5 Tage vor + Eisprungtag + 1 Tag Sicherheitspuffer)
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zykluslänge und Schwankungen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein „normaler" Zyklus dauert zwischen <strong>21 und 35 Tagen</strong>. Der Durchschnitt liegt bei 28 Tagen, aber nur etwa 13 % aller Frauen haben tatsächlich einen 28-Tage-Zyklus.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Schwankungen von 1 bis 2 Tagen sind völlig normal. Größere Abweichungen können durch Stress, Reisen, Krankheit, Gewichtsveränderungen oder hormonelle Umstellungen verursacht werden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Um deine durchschnittliche Zykluslänge zu ermitteln, tracke deinen Zyklus über mindestens <strong>3 bis 6 Monate</strong> und bilde den Mittelwert.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Weitere Methoden zur Eisprungbestimmung</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Basaltemperatur</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Nach dem Eisprung steigt die Basaltemperatur um 0,2 bis 0,5 °C an. Täglich messen und protokollieren zeigt ein Muster über mehrere Zyklen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Zervixschleim</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Kurz vor dem Eisprung wird der Zervixschleim klar, spinnbar und ähnelt rohem Eiweiß. Nach dem Eisprung wird er wieder dicker und trüber.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Ovulationstests (LH-Tests)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Diese Urintests messen den Anstieg des luteinisierenden Hormons (LH), der 24 bis 36 Stunden vor dem Eisprung stattfindet. Sie sind die genaueste Methode für die Vorhersage.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Tipps für den Kinderwunsch</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wenn du schwanger werden möchtest, sind hier die wichtigsten Empfehlungen:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Regelmäßiger Geschlechtsverkehr</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Alle 2 bis 3 Tage während des fruchtbaren Fensters — besonders an den 2 Tagen vor dem Eisprung.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Folsäure einnehmen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Idealerweise schon 3 Monate vor der geplanten Schwangerschaft mit 400 µg Folsäure täglich beginnen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Gesunder Lebensstil</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ausgewogene Ernährung, ausreichend Schlaf, Stressreduktion und Verzicht auf Alkohol und Nikotin unterstützen die Fruchtbarkeit.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Eisprung berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Berechne deine fruchtbaren Tage — basierend auf deiner Zykluslänge.</p>
        <router-link
          :to="localePath('ovulation')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >
          Jetzt kostenlos berechnen &rarr;
        </router-link>
      </div>

      <!-- Conclusion -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Den Eisprung zu berechnen ist ein guter erster Schritt, um deinen Zyklus zu verstehen — egal ob für den Kinderwunsch oder die natürliche Familienplanung. Die Kalendermethode gibt dir eine solide Schätzung, aber kombiniere sie idealerweise mit weiteren Methoden wie Basaltemperatur oder LH-Tests für mehr Sicherheit.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Beachte: Kein Rechner kann den Eisprung mit 100 % Sicherheit vorhersagen. Bei unregelmäßigen Zyklen oder wenn du länger als 12 Monate versuchst schwanger zu werden, sprich mit deinem Frauenarzt.
        </p>
      </div>

      <RelatedArticles slug="eisprung-berechnen" />
    </div>
  </article>
</template>
