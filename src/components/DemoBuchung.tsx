import { useState, type FormEvent } from 'react';

const ZEITSLOTS = [
  'Montag 09:00',
  'Montag 14:00',
  'Dienstag 09:00',
  'Dienstag 14:00',
  'Mittwoch 09:00',
  'Mittwoch 14:00',
  'Donnerstag 09:00',
  'Donnerstag 14:00',
  'Freitag 09:00',
  'Freitag 14:00',
];

const INPUT_CLASS = `
  border border-[oklch(0.28_0.018_240)]
  bg-[oklch(0.18_0.012_240)]
  text-[oklch(0.92_0.008_240)]
  rounded px-3 py-2 text-sm w-full
  focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.17_145)] focus:ring-offset-1 focus:ring-offset-[oklch(0.14_0.012_240)]
  placeholder:text-[oklch(0.92_0.008_240)] placeholder:opacity-30
`;

const LABEL_CLASS = 'text-xs font-mono uppercase tracking-wide text-[oklch(0.92_0.008_240)] opacity-50';

export default function DemoBuchung() {
  const [name, setName] = useState('');
  const [unternehmen, setUnternehmen] = useState('');
  const [zeitslot, setZeitslot] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="demo-buchung"
      aria-labelledby="demo-heading"
      className="max-w-5xl mx-auto py-12 px-4 border-t border-[oklch(0.28_0.018_240)]"
    >
      <h2
        id="demo-heading"
        className="text-xs font-mono uppercase tracking-widest text-[oklch(0.92_0.008_240)] opacity-50 mb-8"
      >
        Demo-Buchung
      </h2>

      {submitted ? (
        <p
          className="text-sm text-[oklch(0.72_0.17_145)] font-mono"
          role="status"
          aria-live="polite"
        >
          Anfrage eingegangen. Wir melden uns zur Bestatigung.
        </p>
      ) : (
        <form
          className="max-w-md flex flex-col gap-5"
          onSubmit={handleSubmit}
          aria-label="Demo-Termin anfragen"
          noValidate
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="demo-name" className={LABEL_CLASS}>
              Name
            </label>
            <input
              id="demo-name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={INPUT_CLASS}
              placeholder="Vorname Nachname"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="demo-unternehmen" className={LABEL_CLASS}>
              Unternehmen
            </label>
            <input
              id="demo-unternehmen"
              type="text"
              autoComplete="organization"
              required
              value={unternehmen}
              onChange={(e) => setUnternehmen(e.target.value)}
              className={INPUT_CLASS}
              placeholder="Firmenname"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="demo-zeitslot" className={LABEL_CLASS}>
              Zeitslot
            </label>
            <select
              id="demo-zeitslot"
              required
              value={zeitslot}
              onChange={(e) => setZeitslot(e.target.value)}
              className={INPUT_CLASS}
            >
              <option value="">Zeitslot wahlen</option>
              {ZEITSLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="
              mt-2 py-2.5 px-6 rounded text-sm font-semibold self-start
              bg-[oklch(0.72_0.17_145)] text-[oklch(0.14_0.012_240)]
              transition-opacity hover:opacity-90
              focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.17_145)] focus:ring-offset-2 focus:ring-offset-[oklch(0.14_0.012_240)]
            "
          >
            Demo-Termin anfragen
          </button>
        </form>
      )}
    </section>
  );
}
