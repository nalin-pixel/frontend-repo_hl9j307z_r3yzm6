import { Link } from 'react-router-dom'

const bullet = (text) => (
  <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0D2A4A]" /> <span>{text}</span></li>
)

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-3 h-1 w-12 bg-[#0D2A4A]" />
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Tragwerksplanung für private Bauherren – schnell, fair, persönlich.
            </h1>
            <p className="mt-6 text-slate-700 leading-relaxed max-w-xl">
              Spezialisierung auf private Bauvorhaben. Feste, transparente Preise. Angebot innerhalb von ca. 2 Werktagen, 
              fertige Unterlagen in der Regel nach 10–14 Tagen. Direkte Zusammenarbeit mit [INGENIEUR_NAME].
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/kontakt" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#0D2A4A] text-white hover:bg-[#123557] transition-colors shadow-sm">
                Statik jetzt anfragen
              </Link>
              <a href="#ablauf" className="inline-flex items-center justify-center px-5 py-3 rounded-md text-[#0D2A4A] hover:bg-slate-100 border border-transparent">
                Ablauf ansehen
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100" />
            <div className="aspect-square rounded-2xl border border-slate-200 bg-white p-8 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 w-full h-full">
                {[...Array(9)].map((_,i)=> (
                  <div key={i} className="border border-slate-200 rounded-md" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-10 w-10 rounded-full border-2 border-[#0D2A4A]" />
          </div>
        </div>
      </section>

      {/* 3 Schritte */}
      <section id="ablauf" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Ablauf in 3 Schritten</h2>
          <p className="text-slate-600 mt-2">Antwort auf Ihre Anfrage in der Regel innerhalb von 2 Werktagen. Fertige Unterlagen meist innerhalb von 10–14 Tagen.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: 'Anfrage stellen',
                text: 'Kurzes Formular ausfüllen, Vorhaben beschreiben, Pläne optional hochladen.'
              },
              {
                title: 'Angebot erhalten',
                text: 'In der Regel innerhalb von ca. 2 Werktagen erhalten Sie ein faires Festpreis-Angebot.'
              },
              {
                title: 'Statik erhalten',
                text: 'Fertige Unterlagen meist in 10–14 Tagen – inklusive Begleitung bei Rückfragen.'
              }
            ].map((step, i) => (
              <div key={step.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
                <div className="h-9 w-9 rounded-full bg-[#0D2A4A] text-white flex items-center justify-center font-semibold">{i+1}</div>
                <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-slate-700 mt-2">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Warum [INGENIEURBUERO_NAME]?</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-6 text-slate-700 max-w-5xl">
            {[
              'Feste Preise für private Bauherren – Planungskosten sollen kein Hindernis sein.',
              'Schnelle Reaktions- und Bearbeitungszeiten.',
              'Persönliche Betreuung durch [INGENIEUR_NAME].',
              'Erfahrung mit Projekten in ganz Deutschland.'
            ].map((t) => bullet(t))}
          </ul>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Kundenstimmen</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              'Sehr schnelle Rückmeldung und klare Kommunikation. Angebot kam nach einem Tag, super! – Bewertung über eine Online-Plattform',
              'Unkompliziert und zuverlässig. Die Statik war nach knapp zwei Wochen da und ohne Beanstandungen. – Bewertung über eine Online-Plattform',
              'Faire Konditionen und direkt mit dem Inhaber gesprochen. So stelle ich mir das vor. – Bewertung über eine Online-Plattform',
              'Pragmatisch und lösungsorientiert, man merkt die Praxisnähe. – Bewertung über eine Online-Plattform'
            ].map((t) => (
              <blockquote key={t} className="bg-white border border-slate-200 rounded-xl p-6 text-slate-700 relative">
                <span className="absolute -top-3 left-4 h-6 w-6 rounded-full bg-[#0D2A4A] text-white flex items-center justify-center">“</span>
                {t}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Welche Unterlagen brauchen Sie für eine erste Einschätzung?',
                a: 'Ein kurzer Beschreibungstext und – wenn vorhanden – Grundrisse, Schnitte oder Fotos. Pläne können Sie bequem als PDF oder Bilder hochladen.'
              },
              {
                q: 'Wie schnell bekomme ich ein Angebot?',
                a: 'In der Regel innerhalb von etwa zwei Werktagen.'
              },
              {
                q: 'Arbeiten Sie nur in [STANDORT_REGION] oder bundesweit?',
                a: 'Ich arbeite bundesweit in Deutschland – digital und effizient.'
              },
              {
                q: 'Was kostet die Erstberatung?',
                a: 'Die Erstberatung und die Angebotserstellung sind für private Bauherren kostenfrei.'
              },
              {
                q: 'Welche Art von Bauvorhaben übernehmen Sie nicht?',
                a: 'Alles rund um den Hochbau ist abgedeckt. Tunnel- oder Brückenbau werden nicht angeboten.'
              }
            ].map((item, idx) => (
              <details key={item.q} className="group bg-white border border-slate-200 rounded-xl p-0 overflow-hidden">
                <summary className="list-none cursor-pointer select-none flex items-center justify-between px-5 py-4 text-slate-900 font-medium">
                  <span>{item.q}</span>
                  <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-700 border-t border-slate-100">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/kontakt" className="inline-flex items-center px-5 py-3 rounded-md bg-[#0D2A4A] text-white hover:bg-[#123557] shadow-sm">Jetzt Anfrage stellen</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
