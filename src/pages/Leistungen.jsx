const services = [
  {
    title: 'Umbau / Durchbrüche',
    desc: 'Statische Beurteilung und Auslegung bei Wanddurchbrüchen und größeren Öffnungen – sicher und praxisnah gelöst.',
    examples: ['Wanddurchbruch zwischen Küche und Wohnzimmer', 'Vergrößerung einer Fensteröffnung', 'Entfernen nichttragender Wände (Abstimmung)']
  },
  {
    title: 'Sanierung / Bestandsanpassung',
    desc: 'Bewertung und Verstärkung bestehender Konstruktionen – wirtschaftlich und auf den Bestand abgestimmt.',
    examples: ['Sanierung eines Dachstuhls', 'Erneuerung von Deckenfeldern', 'Baustoffwechsel im Bestand']
  },
  {
    title: 'Anbau / Erweiterung',
    desc: 'Tragwerksplanung für Erweiterungen – vom Fundament bis zum Anschluss an den Bestand, inkl. Nachweis der Bestandsbauteile.',
    examples: ['Anbau eines Wohnzimmers', 'Wintergarten mit Statik', 'Verlängerung eines Gebäudeflügels']
  },
  {
    title: 'Aufstockung',
    desc: 'Zusätzliche Geschosse sicher und effizient planen – inklusive Lastabtrag und Nachweis der Tragreserven.',
    examples: ['Aufstockung eines Einfamilienhauses', 'Dachgeschossausbau mit Gauben', 'Aufständerung in Holzbauweise']
  },
  {
    title: 'Neubau',
    desc: 'Komplette Tragwerksplanung für Ein- und Mehrfamilienhäuser – abgestimmt mit Architekt und Ausführung.',
    examples: ['Einfamilienhaus in Massivbauweise', 'Zweifamilienhaus', 'Mehrfamilienhaus mit Tiefgarage']
  },
  {
    title: 'Hallenbau / Gewerbebau',
    desc: 'Stahl, Holz oder Massivbau – Planung und Nachweise für funktionale, wirtschaftliche Gewerbebauten.',
    examples: ['Stahlhalle für Lager', 'Holzrahmenbau-Halle', 'Erweiterung eines Produktionsgebäudes']
  },
  {
    title: 'Tragwerksplanung allgemein im Hochbau',
    desc: 'Bemessung, Detailnachweise und Ausführungsunterlagen für Bauteile im Hochbau – solide, verständlich, baubar.',
    examples: ['Decken- und Unterzugsnachweise', 'Fundamente und Bodenplatten', 'Mauerwerks- und Stahlbetonwände']
  },
  {
    title: 'Konstruktiver Brandschutz',
    desc: 'Nachweise zum Feuerwiderstand und brandschutztechnische Details in Abstimmung mit den Vorgaben.',
    examples: ['Feuerwiderstandsnachweise R30–R90', 'Bekleidungen / Kapselungen', 'Details für Durchführungen']
  }
]

export default function Leistungen() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <header className="mb-10">
        <div className="inline-block mb-3 h-1 w-10 bg-[#0D2A4A]" />
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Leistungen</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">Ich decke alles ab, was mit Standsicherheit im Hochbau zu tun hat – vom kleinen Wanddurchbruch bis zum Gewerbebau. Kein Tunnel- oder Brückenbau.</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-sm hover:-translate-y-0.5 transition-all">
            <div className="h-1 w-10 bg-slate-200 rounded" />
            <h2 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h2>
            <p className="text-slate-700 mt-2">{s.desc}</p>
            <p className="text-sm text-slate-500 mt-3">Typische Beispiele:</p>
            <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-5">
              {s.examples.map((e) => (<li key={e}>{e}</li>))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a href="/kontakt" className="inline-flex items-center px-5 py-3 rounded-md bg-[#0D2A4A] text-white hover:bg-[#123557] shadow-sm">Unverbindlich anfragen</a>
      </div>

      {/* Referenzen Platzhalter */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">Referenzen (Vorschau)</h2>
        <p className="text-slate-700 mt-2 max-w-3xl">Hier werden künftig ausgewählte Projekte mit Bildern und Kurzbeschreibungen vorgestellt, zum Beispiel Leuchtturm-Projekte im Holzbau oder der Umbau besonderer Bestandsgebäude.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3].map((i)=> (
            <div key={i} className="aspect-video bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400">Projekt {i}</div>
          ))}
        </div>
      </section>

      {/* Downloads Platzhalter */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">Downloads (Vorschau)</h2>
        <p className="text-slate-700 mt-2">Hier werden später hilfreiche Dokumente bereitgestellt, z. B. Checklisten und Infoblätter für Bauherren.</p>
      </section>
    </main>
  )
}
