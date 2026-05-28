<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Mittlerer arterieller Druck (MAP) berechnen: Formel, Normalwerte, Bedeutung | Health Calculators',
  description: 'MAP einfach erklärt: Formel (SBP + 2 × DBP) / 3, Normalbereiche, warum 65 mmHg die kritische Grenze ist und wie ältere Erwachsene den Wert einordnen sollten.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Mittlerer arterieller Druck (MAP) berechnen: Formel, Normalwerte, Bedeutung',
      description: 'MAP erklärt: Formel, klinische Bedeutung, Normalbereiche und Zielwerte bei älteren Erwachsenen.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-27',
      dateModified: '2026-05-27',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/mittlerer-arterieller-druck-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist der mittlere arterielle Druck (MAP)?',
          acceptedAnswer: { '@type': 'Answer', text: 'Der mittlere arterielle Druck ist der durchschnittliche Druck in den Arterien während eines Herzzyklus. Er entscheidet, wie gut Organe wie Gehirn, Nieren und Herzmuskel durchblutet werden. Ein MAP von mindestens 65 mmHg gilt als Mindestziel für eine ausreichende Perfusion.' },
        },
        {
          '@type': 'Question',
          name: 'Wie berechnet man den MAP?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die klinische Faustformel lautet: MAP ≈ (SBP + 2 × DBP) / 3. Bei einem Blutdruck von 120/80 mmHg ergibt sich (120 + 160) / 3 = 93,3 mmHg. Diastolisch wird doppelt gewichtet, weil das Herz etwa zwei Drittel der Zeit in der Diastole verbringt.' },
        },
        {
          '@type': 'Question',
          name: 'Welche MAP-Werte sind normal?',
          acceptedAnswer: { '@type': 'Answer', text: '70 bis 100 mmHg gelten als Normalbereich für gesunde Erwachsene. Unter 65 mmHg droht eine Minderdurchblutung lebenswichtiger Organe, dauerhaft über 100 mmHg deutet auf Bluthochdruck und ein erhöhtes kardiovaskuläres Risiko hin.' },
        },
        {
          '@type': 'Question',
          name: 'Warum ist MAP wichtiger als nur Systole und Diastole?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die einzelnen Werte sagen, wie hoch der Druck im Maximum (Systole) bzw. Minimum (Diastole) ist. Der MAP beschreibt den durchschnittlichen Perfusionsdruck über den gesamten Herzzyklus — und damit den eigentlich physiologisch relevanten Wert für die Organdurchblutung. Deshalb ist MAP auf Intensivstationen der zentrale Steuerungsparameter.' },
        },
        {
          '@type': 'Question',
          name: 'Gilt der MAP-Zielwert auch für ältere Menschen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bei älteren Erwachsenen (≥ 65 Jahre) ist die zerebrale Autoregulation oft eingeschränkt. Hier wird häufig ein etwas höherer MAP von 70–90 mmHg angestrebt, damit das Gehirn ausreichend durchblutet bleibt. Den genauen Zielbereich legt der behandelnde Arzt fest.' },
        },
        {
          '@type': 'Question',
          name: 'Ersetzt die Formel eine echte Messung?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nein. (SBP + 2 × DBP) / 3 ist eine vereinfachte Schätzung. Für die häusliche Orientierung reicht sie. Eine invasive arterielle Messung im Krankenhaus ist exakter, aber für Alltagsfragen meist nicht nötig.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Mittlerer arterieller Druck (MAP) berechnen: Formel, Normalwerte, Bedeutung</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">27. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          120 zu 80 — diese zwei Zahlen kennt jeder. Aber im Krankenhaus, besonders auf der Intensivstation, schauen Ärzte oft auf eine dritte Zahl: den <strong>mittleren arteriellen Druck (MAP)</strong>. Er sagt, wie gut das Herz die Organe wirklich durchblutet.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt die Formel, die Normalbereiche und warum der MAP für die Organperfusion wichtiger ist als die einzelnen Blutdruckwerte allein.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel: einfach, aber clever</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der MAP wird klinisch mit einer einfachen Formel geschätzt:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          MAP ≈ (SBP + 2 × DBP) / 3
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Warum wird der diastolische Druck doppelt gewichtet? Weil das Herz etwa <strong>zwei Drittel des Herzzyklus in der Diastole</strong> verbringt — also in der Entspannungsphase. Der niedrigere Druck dauert länger, also wirkt er stärker auf den Durchschnitt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Beispiel: Bei 120/80 mmHg ergibt sich (120 + 160) / 3 = <strong>93,3 mmHg</strong>. Das ist ein typischer Normalwert für gesunde Erwachsene.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Normalbereiche auf einen Blick</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">MAP-Kategorien</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">Unter 70 mmHg</span>
              <span class="text-amber-600 font-medium">Niedrig</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">70 – 100 mmHg</span>
              <span class="text-emerald-600 font-medium">Normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">Über 100 mmHg</span>
              <span class="text-red-500 font-medium">Hoch</span>
            </div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die kritische Untergrenze für die Organperfusion liegt bei <strong>65 mmHg</strong>. Werte darunter gelten in der Intensivmedizin als alarmierend, weil Nieren, Gehirn und Herzmuskel nicht mehr ausreichend versorgt werden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum MAP wichtiger ist als Systole oder Diastole allein</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die systolische Zahl (oben) sagt, wie hoch der Druck beim Pumpen wird. Die diastolische (unten) sagt, wie tief er zwischen den Pumpaktionen fällt. Beides sind <em>Momentaufnahmen</em>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der MAP dagegen ist der <strong>Durchschnittsdruck über den gesamten Zyklus</strong>. Genau dieser Druck treibt das Blut kontinuierlich durch die Kapillaren in Nieren, Gehirn und Herzmuskel. Deshalb steuern Intensivmediziner Katecholamine und Volumengabe nicht nach Systole, sondern nach MAP.
        </p>
        <div class="bg-stone-50 rounded-xl p-5 mb-4">
          <p class="text-sm text-stone-700">
            Faustregel: Solange der MAP ≥ 65 mmHg liegt, ist die Organperfusion meist gesichert — unabhängig davon, ob die einzelnen Werte „schön" aussehen.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">MAP bei älteren Erwachsenen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei Menschen ab etwa <strong>65 Jahren</strong> arbeitet die zerebrale Autoregulation träger. Die Gefäße im Gehirn können einen Blutdruckabfall schlechter kompensieren. Deshalb peilen viele Kliniker hier einen MAP von <strong>70 bis 90 mmHg</strong> an — also etwas höher als bei jüngeren Patienten.
        </p>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">Worauf bei älteren Patienten achten?</p>
          <ul class="text-sm text-amber-700 space-y-1">
            <li>→ Schwindel oder Stürze bei zu niedrigem MAP</li>
            <li>→ Sturzgefahr bei orthostatischer Hypotonie</li>
            <li>→ Medikamenten-Anpassung mit Hausarzt besprechen</li>
            <li>→ MAP-Ziel individuell vom Arzt festlegen lassen</li>
          </ul>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann ein niedriger MAP gefährlich wird</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein MAP unter 65 mmHg kann unter anderem entstehen durch:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Volumenmangel (z. B. durch Dehydratation oder Blutung)</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Sepsis und septischer Schock</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Herzinsuffizienz mit reduzierter Pumpleistung</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Überdosierung blutdrucksenkender Medikamente</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Symptome wie Schwindel, Schwäche, Verwirrtheit oder kühle Extremitäten sollten ärztlich abgeklärt werden.
        </p>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Berechne deinen MAP</h3>
        <p class="text-base text-stone-600 mb-6">Systolisch und diastolisch eingeben — der Rechner liefert MAP und Einordnung.</p>
        <router-link
          :to="localePath('meanArterialPressure')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum MAP-Rechner
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          MAP allein ist nur ein Mosaikstein. Den vollständigen Blutdruck-Status hilft der
          <router-link :to="localePath('bloodPressure')" class="text-stone-900 underline hover:no-underline">Blutdruck-Rechner</router-link>
          einzuordnen. Für die langfristige Risikobewertung ist der
          <router-link :to="localePath('cardiovascularRisk')" class="text-stone-900 underline hover:no-underline">Herz-Kreislauf-Risiko-Rechner</router-link>
          hilfreich — und wer Vorhofflimmern hat, sollte den
          <router-link :to="localePath('strokeRisk')" class="text-stone-900 underline hover:no-underline">Schlaganfall-Risiko-Rechner</router-link>
          kennen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der MAP ist die unterschätzte dritte Blutdruckzahl. Während Systole und Diastole nur Spitzenwerte zeigen, beschreibt MAP den durchschnittlichen Perfusionsdruck — und damit das, worauf es für die Organe wirklich ankommt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Mit der einfachen Formel (SBP + 2 × DBP) / 3 lässt er sich in Sekunden berechnen. Für die häusliche Orientierung reicht das. Für medizinische Entscheidungen bleibt der Arzt zuständig.
        </p>
      </div>
    </div>

    <RelatedArticles slug="mittlerer-arterieller-druck-berechnen" />
  </article>
</template>
