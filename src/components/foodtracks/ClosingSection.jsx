import { motion } from 'framer-motion';

const commitments = [
  'Ich mache Marketing eng an Sales messbar.',
  'Ich verwandle Kundenwissen in Content.',
  'Ich nutze KI als Produktivitätshebel.',
  'Ich baue mit der Werkstudentin ein verlässliches Content-System.',
  'Ich bereite die Messe so vor, dass echte Gespräche entstehen.',
];

export default function ClosingSection() {
  return (
    <>
      {/* Light CTA band */}
      <section id="closing" style={{ backgroundColor: 'var(--surface-strong)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <span className="section-eyebrow">13 / Abschluss</span>
          <h2 className="display-xl text-ink mt-2 max-w-2xl">
            Nicht lauter. Klarer.
          </h2>
        </div>
      </section>

      {/* Commitments + CTA */}
      <section className="section-gap bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Statement */}
            <div>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--body)', lineHeight: 1.75 }}>
                Ich will FoodTracks nicht lauter machen. Ich will FoodTracks{' '}
                <span className="text-ink font-medium">klarer</span>,{' '}
                <span className="text-ink font-medium">vertrauenswürdiger</span> und{' '}
                <span style={{ color: 'var(--sig-coral)', fontWeight: 500 }}>wechselrelevanter</span> machen.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:Jaenscholi@gmail.com"
                  className="btn-primary"
                >
                  Gespräch vereinbaren
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Commitments */}
            <div>
              <p className="caption mb-6" style={{ color: 'var(--muted)' }}>COMMITMENTS</p>
              <div className="space-y-0">
                {commitments.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 py-4"
                    style={{ borderBottom: i < commitments.length - 1 ? '1px solid var(--hairline)' : 'none' }}
                  >
                    <span style={{ color: 'var(--sig-coral)', fontSize: '8px', marginTop: '5px' }}>◆</span>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{c}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-canvas" style={{ borderTop: '1px solid var(--hairline)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-ink">Oliver Jaensch</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>Bewerbung als Marketing Manager — FoodTracks 2026</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs" style={{ color: 'var(--muted)' }}>Jaenscholi@gmail.com</p>
            <p className="text-xs" style={{ color: 'var(--hairline)' }}>·</p>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>Berlin</p>
          </div>
        </div>
      </footer>
    </>
  );
}
