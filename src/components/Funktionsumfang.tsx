interface FunktionsItem {
  term: string;
  desc: string;
}

const ITEMS: FunktionsItem[] = [
  {
    term: 'Tour-Ubersicht',
    desc: 'Zeigt alle laufenden und geplanten Fahrten mit Fahrt-ID, Fahrerzuordnung und aktuellem Streckenstatus in Echtzeit.',
  },
  {
    term: 'Fahrerstatus',
    desc: 'Erfasst Arbeitszeit, Pausenstatus und Fahrtbereitschaft je Fahrer auf Basis digitaler Statusmeldungen.',
  },
  {
    term: 'Tank- und Wartungs-Reminder',
    desc: 'Generiert standortbezogene Tankanweisungen und kalenderbasierte Wartungshinweise je Fahrzeug.',
  },
  {
    term: 'Stordisposition',
    desc: 'Meldet Tourstorungen mit Fahrt-ID, Fehlertyp und Eskalationspfad an den zustandigen Disponenten.',
  },
];

export default function Funktionsumfang() {
  return (
    <section
      aria-labelledby="funk-heading"
      className="max-w-5xl mx-auto py-12 px-4 border-t border-[oklch(0.28_0.018_240)]"
    >
      <h2
        id="funk-heading"
        className="text-xs font-mono uppercase tracking-widest text-[oklch(0.92_0.008_240)] opacity-50 mb-8"
      >
        Funktionsumfang
      </h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {ITEMS.map(({ term, desc }) => (
          <div key={term}>
            <dt className="text-base font-semibold text-[oklch(0.92_0.008_240)] mb-1.5">
              {term}
            </dt>
            <dd className="text-sm leading-relaxed text-[oklch(0.92_0.008_240)] opacity-70">
              {desc}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
