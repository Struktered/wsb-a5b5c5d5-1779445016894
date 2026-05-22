interface Parameter {
  label: string;
  value: string;
}

const PARAMS: Parameter[] = [
  { label: 'Unternehmensgrosse', value: '50 bis 200 Mitarbeitende' },
  { label: 'Flottengrossen', value: '15 bis 80 Fahrzeuge' },
  { label: 'Schichtmodelle', value: 'Fruh / Spat / Nacht, 6-Tage-Betrieb' },
  { label: 'Dispositionsstruktur', value: '1 bis 3 Disponenten je Schicht' },
];

export default function Betriebskontext() {
  return (
    <section
      aria-labelledby="betriebs-heading"
      className="max-w-5xl mx-auto py-12 px-4 border-t border-[oklch(0.28_0.018_240)]"
    >
      <h2
        id="betriebs-heading"
        className="text-xs font-mono uppercase tracking-widest text-[oklch(0.92_0.008_240)] opacity-50 mb-8"
      >
        Betriebskontext
      </h2>
      <dl>
        {PARAMS.map(({ label, value }) => (
          <div
            key={label}
            className="
              flex flex-col sm:flex-row sm:items-baseline gap-2 py-3
              border-b border-[oklch(0.28_0.018_240)] last:border-0
            "
          >
            <dt className="text-xs font-mono uppercase tracking-wide text-[oklch(0.92_0.008_240)] opacity-50 sm:w-64 shrink-0">
              {label}
            </dt>
            <dd className="text-sm text-[oklch(0.92_0.008_240)]">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
