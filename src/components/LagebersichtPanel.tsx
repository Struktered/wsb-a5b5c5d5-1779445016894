type TourStatus = 'aktiv' | 'pause' | 'stoerung';

interface Tour {
  id: string;
  fahrer: string;
  status: TourStatus;
}

interface FahrerEintrag {
  name: string;
  zustand: TourStatus;
}

const TOURS: Tour[] = [
  { id: 'T-2401', fahrer: 'M. Schulz', status: 'aktiv' },
  { id: 'T-2402', fahrer: 'K. Weber', status: 'pause' },
  { id: 'T-2403', fahrer: 'J. Braun', status: 'stoerung' },
  { id: 'T-2404', fahrer: 'A. Fischer', status: 'aktiv' },
  { id: 'T-2405', fahrer: 'T. Muller', status: 'aktiv' },
];

const FAHRER: FahrerEintrag[] = [
  { name: 'M. Schulz', zustand: 'aktiv' },
  { name: 'K. Weber', zustand: 'pause' },
  { name: 'J. Braun', zustand: 'stoerung' },
  { name: 'A. Fischer', zustand: 'aktiv' },
];

const STATUS_LABEL: Record<TourStatus, string> = {
  aktiv: 'Aktiv',
  pause: 'Pause',
  stoerung: 'Storung',
};

const STATUS_TEXT_CLASS: Record<TourStatus, string> = {
  aktiv: 'text-[oklch(0.72_0.17_145)]',
  pause: 'text-[oklch(0.62_0.01_240)]',
  stoerung: 'text-[oklch(0.68_0.19_25)]',
};

const STATUS_DOT_CLASS: Record<TourStatus, string> = {
  aktiv: 'bg-[oklch(0.72_0.17_145)]',
  pause: 'bg-[oklch(0.62_0.01_240)]',
  stoerung: 'bg-[oklch(0.68_0.19_25)]',
};

function StatusBadge({ status }: { status: TourStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm font-mono ${STATUS_TEXT_CLASS[status]}`}
      aria-label={`Status: ${STATUS_LABEL[status]}`}
    >
      <span
        className={`inline-block w-2 h-2 rounded-full ${STATUS_DOT_CLASS[status]}`}
        aria-hidden="true"
      />
      {STATUS_LABEL[status]}
    </span>
  );
}

export default function LagebersichtPanel() {
  const stoerungen = TOURS.filter((t) => t.status === 'stoerung').length;

  return (
    <section
      aria-labelledby="lage-heading"
      className="
        max-w-5xl mx-auto mt-8 px-4
        border border-[oklch(0.28_0.018_240)]
        bg-[oklch(0.14_0.012_240)]
        rounded-lg p-6
      "
    >
      <div className="flex items-center justify-between mb-5">
        <span
          id="lage-heading"
          className="text-xs font-mono uppercase tracking-widest text-[oklch(0.92_0.008_240)] opacity-50"
        >
          Tourstatus-Ubersicht
        </span>
        {stoerungen > 0 && (
          <span
            className="
              text-xs font-mono font-semibold px-2 py-0.5 rounded
              bg-[oklch(0.68_0.19_25)] text-[oklch(0.14_0.012_240)]
            "
            role="status"
            aria-live="polite"
          >
            {stoerungen} Storung{stoerungen > 1 ? 'en' : ''}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tour-Tabelle */}
        <div className="lg:col-span-2 overflow-x-auto">
          <table className="w-full text-sm" aria-label="Aktuelle Touren">
            <thead>
              <tr className="border-b border-[oklch(0.28_0.018_240)]">
                <th className="text-left py-2 font-mono text-xs text-[oklch(0.92_0.008_240)] opacity-50 font-normal">
                  Fahrt-ID
                </th>
                <th className="text-left py-2 font-mono text-xs text-[oklch(0.92_0.008_240)] opacity-50 font-normal">
                  Fahrer
                </th>
                <th className="text-left py-2 font-mono text-xs text-[oklch(0.92_0.008_240)] opacity-50 font-normal">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {TOURS.map((tour) => (
                <tr
                  key={tour.id}
                  className="border-b border-[oklch(0.28_0.018_240)] last:border-0"
                >
                  <td className="py-2.5 font-mono text-sm text-[oklch(0.92_0.008_240)]">
                    {tour.id}
                  </td>
                  <td className="py-2.5 text-sm text-[oklch(0.92_0.008_240)]">
                    {tour.fahrer}
                  </td>
                  <td className="py-2.5">
                    <StatusBadge status={tour.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fahrerzustand + CTA */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[oklch(0.92_0.008_240)] opacity-50 mb-3">
              Fahrerzustand
            </p>
            <ul className="space-y-2" aria-label="Fahrerzustand-Liste">
              {FAHRER.map((f) => (
                <li key={f.name} className="flex items-center justify-between text-sm">
                  <span className="text-[oklch(0.92_0.008_240)]">{f.name}</span>
                  <StatusBadge status={f.zustand} />
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[oklch(0.28_0.018_240)] pt-4 mt-auto">
            <a
              href="#demo-buchung"
              className="
                block w-full text-center text-sm font-semibold py-2.5 rounded
                bg-[oklch(0.72_0.17_145)] text-[oklch(0.14_0.012_240)]
                transition-opacity hover:opacity-90
                focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.17_145)] focus:ring-offset-2 focus:ring-offset-[oklch(0.14_0.012_240)]
              "
            >
              Demo buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
