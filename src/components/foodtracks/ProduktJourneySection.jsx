import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    name: 'Bestell Check',
    subtitle: 'Erst verstehen, warum der Prozess klemmt.',
    desc: 'Bevor optimiert wird, wird diagnostiziert. Der Bestell Check legt offen, wo echte Verlustpotenziale stecken: Überbestellung, blinde Spots, manuelle Fehlerquellen.',
    metrics: ['Retourenquote', 'Forecast-Abweichung', 'Prozessaufwand'],
    sigBg: 'var(--sig-cream)',
    sigText: 'var(--ink)',
  },
  {
    id: 2,
    name: 'Bestell Tuning',
    subtitle: 'Bestellungen automatisieren und präzise verbessern.',
    desc: 'Das System lernt. Bestellvorschläge werden automatisch generiert, bleiben aber nachvollziehbar. Kein blindes Vertrauen — volle Kontrolle.',
    metrics: ['Bestellgenauigkeit +18%', 'Zeitersparnis', 'Retoure –12%'],
    sigBg: 'var(--surface-dark)',
    sigText: '#ffffff',
  },
  {
    id: 3,
    name: 'Filial Radar',
    subtitle: 'Das Filialgeschäft dauerhaft steuern.',
    desc: 'Alle Filialen. Alle KPIs. Auf einen Blick. Der Filial Radar macht das gesamte Netz sichtbar und steuerbar — für Filialleiter und Geschäftsführung.',
    metrics: ['Filial-Benchmarking', 'Echtzeit-Alerts', 'BI-Dashboard'],
    sigBg: 'var(--sig-peach)',
    sigText: 'var(--ink)',
  },
];

export default function ProduktJourneySection() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section id="produkt" className="section-gap bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <span className="section-eyebrow">04 / Produktstory</span>
          <h2 className="display-lg text-ink max-w-2xl">
            Vom Check zur dauerhaften Filialsteuerung.
          </h2>
        </div>

        {/* Step tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                activeStep === step.id
                  ? 'bg-ink text-white border-ink'
                  : 'bg-canvas text-ink border-hairline hover:border-border-strong'
              }`}
              style={{ minHeight: 44 }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium"
                style={{
                  backgroundColor: activeStep === step.id ? 'rgba(255,255,255,0.2)' : 'var(--surface-strong)',
                  color: activeStep === step.id ? 'white' : 'var(--ink)',
                }}
              >
                {step.id}
              </span>
              {step.name}
            </button>
          ))}
        </div>

        {/* Step detail */}
        {steps.map((step) => activeStep === step.id && (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-6"
          >
            {/* Signature card */}
            <div
              className="sig-card flex flex-col justify-between"
              style={{ backgroundColor: step.sigBg, minHeight: 280 }}
            >
              <div>
                <span className="caption block mb-5" style={{ color: step.sigText, opacity: 0.55 }}>
                  Schritt {step.id} / 3 — {step.subtitle}
                </span>
                <h3 className="display-md" style={{ color: step.sigText, fontWeight: 400 }}>
                  {step.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {step.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1.5 rounded-md text-xs font-medium"
                    style={{
                      backgroundColor: step.sigText === '#ffffff' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)',
                      color: step.sigText,
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="content-card p-8 flex flex-col justify-between">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--body)', fontSize: '15px', lineHeight: 1.7 }}>
                {step.desc}
              </p>
              {/* Journey connector */}
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--hairline)' }}>
                <div className="flex items-center gap-3">
                  {steps.map((s, i) => (
                    <div key={s.id} className="flex items-center gap-3 flex-1">
                      <button
                        onClick={() => setActiveStep(s.id)}
                        className="flex items-center gap-2 flex-1 text-left"
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium shrink-0"
                          style={{
                            backgroundColor: s.id === activeStep ? 'var(--ink)' : 'var(--surface-strong)',
                            color: s.id === activeStep ? 'white' : 'var(--muted)',
                          }}
                        >
                          {s.id}
                        </span>
                        <span className="text-xs font-medium" style={{ color: s.id === activeStep ? 'var(--ink)' : 'var(--muted)' }}>
                          {s.name}
                        </span>
                      </button>
                      {i < steps.length - 1 && (
                        <span className="text-xs" style={{ color: 'var(--hairline)' }}>→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}