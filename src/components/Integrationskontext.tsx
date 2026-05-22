interface IntegrationBlock {
  category: string;
  examples: string[];
}

const BLOCKS: IntegrationBlock[] = [
  {
    category: 'TMS',
    examples: ['Opheo', 'Transics', 'Fleetboard-TMS'],
  },
  {
    category: 'ERP',
    examples: ['SAP', 'Sage', 'Microsoft Dynamics'],
  },
  {
    category: 'Telematik',
    examples: ['Webfleet', 'Fleetboard', 'Verizon Connect'],
  },
];

export default function Integrationskontext() {
  return (
    <section
      aria-labelledby="integration-heading"
      className="max-w-5xl mx-auto py-12 px-4 border-t border-[oklch(0.28_0.018_240)]"
    >
      <h2
        id="integration-heading"
        className="text-xs font-mono uppercase tracking-widest text-[oklch(0.92_0.008_240)] opacity-50 mb-8"
      >
        Integrationskontext
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {BLOCKS.map(({ category, examples }) => (
          <div key={category}>
            <p className="text-sm font-semibold text-[oklch(0.92_0.008_240)] mb-2">
              {category}
            </p>
            <ul className="space-y-1.5">
              {examples.map((ex) => (
                <li
                  key={ex}
                  className="text-sm text-[oklch(0.92_0.008_240)] opacity-70"
                >
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm font-mono text-[oklch(0.92_0.008_240)] opacity-50">
        REST-API verfugbar. Webhook-Support und CSV-Import fur bestehende Systemlandschaften.
      </p>
    </section>
  );
}
