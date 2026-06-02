import { motion } from 'framer-motion';

const steps = [
  { step: 'Beobachten', desc: 'Muster identifizieren, ohne sofort zu handeln.', transfer: 'Markt-Signale systematisch tracken. Sales-Feedback dokumentieren.' },
  { step: 'Hypothese', desc: 'These formulieren: Wenn X, dann Y.', transfer: 'Kampagnen als Hypothesen aufsetzen: Wenn Botschaft Z, dann mehr Demo-Anfragen.' },
  { step: 'Risiko', desc: 'Downside definieren, bevor ich eintrete.', transfer: 'Budget-Caps setzen. Keine Kampagne ohne Abbruch-KPI.' },
  { step: 'Entscheidung', desc: 'Handeln mit Datenlage — nicht aus Bauchgefühl.', transfer: 'Messbare Ziele pro Maßnahme. Kein Aktionismus.' },
  { step: 'Review', desc: 'Was hat funktioniert? Ehrliche Nachbetrachtung.', transfer: 'Retrospektiven mit Sales. Learnings ins Messaging.' },
];

export default function AktienSection() {
  return (
    <>
      {/* Cream callout band */}
      <section id="aktien" style={{ backgroundColor: 'var(--sig-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <span className="section-eyebrow" style={{ color: 'var(--muted)' }}>07 / Entscheidungsmodell</span>
          <h2 className="display-lg text-ink max-w-2xl mt-2">
            Disziplin, die sich auf Marketing überträgt.
          </h2>
          <p className="body-md mt-4 max-w-lg" style={{ color: 'var(--body)', fontSize: '15px', lineHeight: 1.7 }}>
            Aktienhandel als Training für strukturierte Entscheidungen unter Unsicherheit.
            Das gleiche Modell macht Marketing kalkulierbar.{' '}
            <span className="font-medium text-ink">Ergebnis: Finanzieller Grundstein für erste Eigentumswohnung in Stuttgart.</span>
          </p>
        </div>
      </section>

      {/* Decision steps */}
      <section className="section-gap bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="content-card p-5 flex flex-col"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium shrink-0"
                    style={{
                      backgroundColor: i === 4 ? 'var(--ink)' : 'var(--surface-strong)',
                      color: i === 4 ? 'white' : 'var(--ink)',
                    }}
                  >
                    {i + 1}
                  </div>
                  <p className="label-md text-ink">{item.step}</p>
                </div>
                <p className="text-xs mb-4 leading-relaxed" style={{ color: 'var(--body)' }}>{item.desc}</p>
                <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--hairline)' }}>
                  <p className="text-xs mb-1 font-medium" style={{ color: 'var(--sig-coral)' }}>→ FoodTracks</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{item.transfer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}