<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Zyklusrechner: Nächste Periode & fruchtbare Tage vorhersagen | Health Calculators',
  description: 'Menstruationszyklus verstehen: 4 Phasen, Zykluslänge, Unregelmäßigkeiten und Tracking-Vorteile. Mit kostenlosem Zyklusrechner.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Zyklusrechner: Nächste Periode & fruchtbare Tage vorhersagen',
    description: 'Menstruationszyklus verstehen: 4 Phasen, Zykluslänge, Unregelmäßigkeiten und Tracking-Vorteile. Mit kostenlosem Zyklusrechner.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-03',
    dateModified: '2026-04-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/zyklusrechner-guide',
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
        Zyklusrechner: Nächste Periode & fruchtbare Tage vorhersagen
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">3. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wann kommt die nächste Periode? Wann sind die fruchtbaren Tage? Der <strong>Menstruationszyklus</strong> bestimmt vieles im Alltag — und wer ihn versteht, kann besser planen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie der Zyklus funktioniert, welche Phasen er durchläuft und wie du mit einem Zyklusrechner die nächsten Perioden vorhersagen kannst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 4 Phasen des Menstruationszyklus</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Menstruationszyklus lässt sich in vier Phasen unterteilen. Jede Phase wird von unterschiedlichen Hormonen gesteuert und hat eigene körperliche Merkmale.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Menstruationsphase (Tag 1–5)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die Gebärmutterschleimhaut wird abgestoßen — das ist die Periodenblutung. Tag 1 ist der erste Tag der Blutung. Die Dauer variiert zwischen <strong>3 und 7 Tagen</strong>. Progesteron und Östrogen sind auf dem niedrigsten Stand.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Follikelphase (Tag 6–13)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Das follikelstimulierende Hormon (FSH) regt das Wachstum von Eibläschen im Eierstock an. Östrogen steigt, die Gebärmutterschleimhaut baut sich wieder auf. Diese Phase ist <strong>variabel</strong> — bei kürzeren Zyklen ist sie kürzer, bei längeren entsprechend länger.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. Eisprung / Ovulation (ca. Tag 14)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ein Anstieg des luteinisierenden Hormons (LH) löst den Eisprung aus. Die reife Eizelle wird freigesetzt und wandert in den Eileiter. Das <strong>fruchtbare Fenster</strong> umfasst die 5 Tage vor dem Eisprung und den Eisprungtag selbst.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">4. Lutealphase (Tag 15–28)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Der leere Follikel wird zum Gelbkörper und produziert Progesteron. Wird die Eizelle nicht befruchtet, sinkt Progesteron nach etwa <strong>14 Tagen</strong> — die Periode setzt ein. Diese Phase ist bei den meisten Frauen relativ konstant.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie berechnet man die nächste Periode?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Vorhersage basiert auf der <strong>Kalendermethode</strong>. Du brauchst den ersten Tag deiner letzten Periode und deine durchschnittliche Zykluslänge.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Formeln</p>
          <div class="text-sm text-stone-500 leading-relaxed space-y-1">
            <p>Nächste Periode = Letzter Periodenbeginn <strong>+ Zykluslänge</strong></p>
            <p>Eisprung = Nächste Periode <strong>− 14 Tage</strong></p>
            <p>Fruchtbares Fenster = Eisprung <strong>−5 Tage</strong> bis Eisprungtag</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Beispiel: 28-Tage-Zyklus</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Letzte Periode am 1. März → Nächste Periode am <strong>29. März</strong>. Eisprung am 15. März (Tag 14). Fruchtbar vom 10.–15. März.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Beispiel: 32-Tage-Zyklus</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Letzte Periode am 1. März → Nächste Periode am <strong>2. April</strong>. Eisprung am 19. März (Tag 18). Die Follikelphase ist 4 Tage länger, die Lutealphase bleibt 14 Tage.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zykluslänge: Was ist normal?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein normaler Zyklus dauert zwischen <strong>21 und 35 Tagen</strong>. Der Durchschnitt liegt bei 28 Tagen, aber nur etwa 13 % der Frauen haben tatsächlich einen exakten 28-Tage-Zyklus.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Schwankungen von 1–2 Tagen zwischen den Zyklen sind normal. Um deine durchschnittliche Zykluslänge zu bestimmen, tracke deinen Zyklus über mindestens <strong>3–6 Monate</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zyklusunregelmäßigkeiten — Wann zum Arzt?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Gelegentliche Schwankungen sind unbedenklich. Ein Arztbesuch ist ratsam bei:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Ausbleibende Periode (Amenorrhoe)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wenn die Periode <strong>3 Monate oder länger</strong> ausbleibt (ohne Schwangerschaft). Mögliche Ursachen: Stress, Untergewicht, hormonelle Störungen, PCOS.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Sehr starke oder lange Blutung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Blutungen über <strong>7 Tage</strong> oder wenn du stündlich Binden/Tampons wechseln musst. Kann auf Myome, Polypen oder Gerinnungsstörungen hindeuten.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Sehr kurze oder sehr lange Zyklen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dauerhaft unter <strong>21 Tagen</strong> oder über <strong>35 Tagen</strong>. Kann auf Schilddrüsenprobleme, PCOS oder Funktionsstörungen der Eierstöcke hinweisen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Starke Schmerzen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wenn Regelschmerzen den Alltag einschränken und Schmerzmittel nicht ausreichen. Mögliche Ursache: <strong>Endometriose</strong>.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Vorteile des Zyklustrackings</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Den eigenen Zyklus zu kennen bringt konkrete Vorteile — unabhängig davon, ob du schwanger werden möchtest oder nicht.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Bessere Planung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Urlaub, Sport, wichtige Termine — wer weiß, wann die Periode kommt, kann den Alltag besser organisieren.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Früherkennung von Veränderungen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Regelmäßiges Tracking macht Abweichungen sichtbar — bevor sie zum Problem werden. Ärzte schätzen dokumentierte Zyklusdaten.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Kinderwunsch & Verhütung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die Kenntnis der fruchtbaren Tage hilft bei der natürlichen Familienplanung — sowohl für als auch gegen eine Schwangerschaft.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">PMS & Stimmungsschwankungen verstehen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wenn du weißt, in welcher Zyklusphase du bist, kannst du Stimmungsschwankungen, Energietiefs und Heißhunger besser einordnen.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Zyklus berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Sage deine nächsten Perioden und fruchtbaren Tage vorher — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('period')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >
          Jetzt kostenlos berechnen &rarr;
        </router-link>
      </div>

      <!-- Conclusion -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Den eigenen Zyklus zu verstehen ist der erste Schritt zu mehr Körperbewusstsein. Die Kalendermethode liefert eine gute Schätzung für die nächste Periode und die fruchtbaren Tage — aber sie ist kein Ersatz für medizinische Diagnostik.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei anhaltenden Unregelmäßigkeiten, starken Schmerzen oder wenn du länger als 12 Monate versuchst schwanger zu werden, sprich mit deinem Frauenarzt.
        </p>
      </div>

      <RelatedArticles slug="zyklusrechner-guide" />
    </div>
  </article>
</template>
