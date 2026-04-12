<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Entbindungstermin berechnen: LMP, Empfängnis & IVF erklärt | Health Calculators',
  description: 'Geburtstermin nach letzter Periode, Empfängnisdatum oder IVF-Transfer berechnen. Naegele-Regel, Schwangerschaftswochen, Trimester und Meilensteine verständlich erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Entbindungstermin berechnen: LMP, Empfängnis & IVF erklärt',
    description: 'Geburtstermin nach letzter Periode, Empfängnisdatum oder IVF-Transfer berechnen. Naegele-Regel, Schwangerschaftswochen, Trimester und Meilensteine verständlich erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-12',
    dateModified: '2026-04-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/geburtsterminrechner',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Entbindungstermin berechnen: LMP, Empfängnis &amp; IVF erklärt</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">12. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Du bist schwanger — herzlichen Glückwunsch! Eine der ersten Fragen ist: <strong>Wann kommt das Baby?</strong> Der <strong>errechnete Entbindungstermin</strong> (ET) gibt dir eine Orientierung für die nächsten 40 Wochen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deinen Geburtstermin nach der letzten Periode, dem Empfängnisdatum oder dem IVF-Transferdatum berechnest — und was die Ergebnisse bedeuten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die drei Berechnungsmethoden</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Je nach verfügbaren Informationen gibt es drei Methoden zur Berechnung des Geburtstermins. Unser <router-link :to="localePath('dueDate')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Entbindungstermin-Rechner</router-link> unterstützt alle drei.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Letzte Periode (LMP-Methode)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die häufigste Methode. Du brauchst den ersten Tag deiner letzten Menstruation und deine Zykluslänge. Die Formel nach Naegele: <strong>LMP + 280 Tage</strong> (bei 28-Tage-Zyklus). Bei abweichender Zykluslänge wird die Differenz addiert oder subtrahiert.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Empfängnisdatum</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wenn du das genaue Empfängnisdatum kennst, ist die Rechnung einfach: <strong>Empfängnisdatum + 266 Tage</strong> (38 Wochen). Diese Methode ist genauer, weil der Eisprung nicht geschätzt werden muss.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. IVF-Transferdatum</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Bei einer IVF-Behandlung wird der Embryo an einem bekannten Datum transferiert. Da der Embryo beim Transfer bereits 3 oder 5 Tage alt ist, wird die Formel angepasst: <strong>Tag-5-Transfer: + 261 Tage</strong> — Tag-3-Transfer: + 263 Tage.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist die Naegele-Regel?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Naegele-Regel</strong> ist die weltweit am häufigsten verwendete Methode. Sie basiert auf dem ersten Tag der letzten Menstruation und einem 28-Tage-Zyklus mit Eisprung an Tag 14.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Naegele-Formel</p>
          <p class="text-sm text-stone-500 leading-relaxed">
            Erster Tag der letzten Periode <strong>+ 7 Tage − 3 Monate + 1 Jahr</strong>
          </p>
          <p class="text-sm text-stone-400 mt-2">
            Entspricht: LMP + 280 Tage (40 Wochen)
          </p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Weicht dein Zyklus von 28 Tagen ab, wird der errechnete Termin entsprechend verschoben: Bei einem 30-Tage-Zyklus rückt er 2 Tage nach hinten, bei einem 26-Tage-Zyklus 2 Tage nach vorne.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Entbindungstermin berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Nach LMP, Empfängnisdatum oder IVF-Transfer — kostenlos und sofort.</p>
        <router-link
          :to="localePath('dueDate')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schwangerschaftswochen (SSW) und Trimester</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Schwangerschaft dauert im Durchschnitt <strong>40 Wochen</strong> ab der letzten Periode, unterteilt in drei Trimester:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Trimester (SSW 1–12)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Alle Organe werden angelegt. Der Herzschlag ist ab SSW 6 sichtbar. Das Fehlgeburtsrisiko sinkt nach SSW 12 deutlich.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Trimester (SSW 13–27)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Das Baby wächst schnell, Bewegungen werden spürbar. In SSW 20 findet der Organultraschall statt. Das Geschlecht ist erkennbar.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. Trimester (SSW 28–40)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Das Baby reift und nimmt zu. Ab SSW 37 gilt es als reifgeboren. Das Lungengewebe entwickelt sich vollständig.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wichtige Meilensteine</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <ul class="space-y-3 text-sm text-stone-500">
            <li><strong class="text-stone-700">SSW 6:</strong> Herzschlag im Ultraschall sichtbar</li>
            <li><strong class="text-stone-700">SSW 8–10:</strong> Erster Vorsorgebesuch, erste Blutuntersuchungen</li>
            <li><strong class="text-stone-700">SSW 12:</strong> Ende des kritischen ersten Trimesters</li>
            <li><strong class="text-stone-700">SSW 20:</strong> Großer Organultraschall (Feindiagnostik)</li>
            <li><strong class="text-stone-700">SSW 24:</strong> Überlebensfähigkeitsschwelle mit intensivmedizinischer Betreuung</li>
            <li><strong class="text-stone-700">SSW 28:</strong> Beginn des dritten Trimesters</li>
            <li><strong class="text-stone-700">SSW 37:</strong> Reifgeboren — Geburt jetzt medizinisch unbedenklich</li>
            <li><strong class="text-stone-700">SSW 40:</strong> Errechneter Geburtstermin (ET)</li>
          </ul>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum der ET nur ein Schätzwert ist</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Nur ca. <strong>4 % der Babys</strong> kommen genau am errechneten Termin zur Welt. Der Großteil wird in einem Zeitfenster von <strong>zwei Wochen vor bis zwei Wochen nach</strong> dem ET geboren. Ursachen der Ungenauigkeit:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-base text-stone-600">
          <li>Der genaue Zeitpunkt des Eisprungs ist selten bekannt</li>
          <li>Zykluslänge variiert von Frau zu Frau</li>
          <li>Erste Schwangerschaften dauern im Schnitt etwas länger</li>
          <li>Genetische und individuelle Faktoren beeinflussen die Dauer</li>
          <li>Die Naegele-Regel stammt aus dem 19. Jahrhundert und basiert auf Durchschnittswerten</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Weitere nützliche Rechner rund um Fruchtbarkeit und Schwangerschaft:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-base text-stone-600">
          <li><router-link :to="localePath('pregnancy')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schwangerschafts-Rechner</router-link> — Meilensteine, Trimester und Fortschritt deiner Schwangerschaft verfolgen</li>
          <li><router-link :to="localePath('ovulation')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Eisprung-Rechner</router-link> — Fruchtbare Tage und Eisprungtermin berechnen</li>
        </ul>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der errechnete Geburtstermin ist ein wichtiger Anhaltspunkt — kein exaktes Datum. Unser <router-link :to="localePath('dueDate')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Entbindungstermin-Rechner</router-link> unterstützt alle drei gängigen Methoden und zeigt dir Trimester, Countdown, Schlüsseltermine und Meilensteine auf einen Blick.
        </p>
      </div>

      <RelatedArticles slug="geburtsterminrechner" />
    </div>
  </article>
</template>
