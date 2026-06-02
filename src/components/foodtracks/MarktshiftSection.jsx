import { useState } from 'react';
import { motion } from 'framer-motion';

const shifts = [
  { from: 'Was ist KI-Bestelloptimierung?', to: 'Warum hat mein bisheriges System nicht überzeugt?' },
  { from: 'Warum brauche ich Daten?', to: 'Wie bekomme ich Kontrolle statt Blackbox?' },
  { from: 'Kann Software meine Filialen verstehen?', to: 'Wer versteht meinen gelebten Bäckereibetrieb wirklich?' },
  { from: 'Lohnt sich der Wechsel?', to: 'Wie wechsle ich ohne Risiko und mit Rückendeckung?' },
];

export default function MarktshiftSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      {/* Forest signature band */}
      <section id="marktshift" style={{ backgroundColor: 'var(--sig-forest)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <span className="section-eyebrow text-white/50">03 / Marktshift</span>
          <h2 className="display-lg text-white max-w-2xl mt-2">
            Der Markt hat sich bereits verschoben.
          </h2>
          <p className="body-md text-white/60 mt-4 max-w-lg" style={{ fontSize: '16px' }}>
            Die Käufer stellen andere Fragen. Wer das Marketing nicht anpasst, verliert an entscheidungsreife Wettbewerber.
          </p>
        </div>
      </section>

      {/* Toggle + content */}
      <section className="section-gap bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Toggle */}
          <div className="flex items-center gap-4 mb-12">
            <button
              onClick={() => setRevealed(false)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                !revealed
                  ? 'bg-ink text-white border-ink'
                  : 'bg-canvas text-ink border-hairline hover:border-border-strong'
              }`}
            >
              Gestern
            </button>
            <button
              onClick={() => setRevealed(true)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                revealed
                  ? 'bg-ink text-white border-ink'
                  : 'bg-canvas text-ink border-hairline hover:border-border-strong'
              }`}
            >
              Heute
            </button>
            <span className="text-sm" style={{ color: 'var(--muted)' }}>
              {revealed ? 'Entscheidungs-Phase' : 'Awareness-Phase'}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old */}
            <motion.div
              animate={{ opacity: revealed ? 0.3 : 1 }}
              transition={{ duration: 0.35 }}
              className="content-card p-8"
              style={{ backgroundColor: 'var(--surface-soft)' }}
            >
              <p className="caption mb-6" style={{ color: 'var(--muted)' }}>GESTERN — Awareness-Phase</p>
              <div className="space-y-5">
                {shifts.map((s, i) => (
                  <div key={i} className="flex gap-4 items-start pb-5 border-b last:border-0 last:pb-0"
                    style={{ borderColor: 'var(--hairline)' }}>
                    <span className="mono shrink-0 mt-0.5" style={{ color: 'var(--muted)', fontSize: '12px' }}>{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm" style={{ color: 'var(--body)' }}>{s.from}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* New */}
            <motion.div
              animate={{ opacity: revealed ? 1 : 0.3 }}
              transition={{ duration: 0.35 }}
              className="content-card p-8"
              style={{ backgroundColor: 'var(--surface-dark)', border: 'none' }}
            >
              <p className="caption mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>HEUTE — Entscheidungs-Phase</p>
              <div className="space-y-5">
                {shifts.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 }}
                    className="flex gap-4 items-start pb-5 border-b last:border-0 last:pb-0"
                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <span className="mono shrink-0 mt-0.5" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm text-white">{s.to}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  FoodTracks muss erklären, warum FoodTracks die{' '}
                  <span className="text-white font-medium">einzig richtige Wahl</span>{' '}
                  für entscheidungsreife Bäckereien ist.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}