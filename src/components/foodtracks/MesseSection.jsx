import { useState } from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    label: 'Vor der Messe',
    weeks: '–8 bis –1 Woche',
    items: [
      'Zielaccounts identifizieren & qualifizieren',
      'Persönliche Einladungen (Outreach + LinkedIn)',
      'Landingpage mit Termin-Buchungstool',
      'Präsenz-Materialien + Demo-Brief vorbereiten',
      'Team-Briefing: Gesprächsziele pro Account',
    ],
    kpis: ['80 eingeladene Accounts', '15 Vorab-Termine'],
    bg: 'var(--surface-soft)',
  },
  {
    label: 'Während der Messe',
    weeks: 'Messetage',
    items: [
      'Live-Gespräche nach gebrieften Leitfäden',
      'Echtzeit-Notizen & CRM-Update',
      'Einwände sammeln & täglich besprechen',
      'Content-Capture: kurze Video-Impressionen',
    ],
    kpis: ['40 Gespräche', '12 Demo-Requests'],
    bg: 'var(--sig-cream)',
  },
  {
    label: 'Nach der Messe',
    weeks: '+1 bis +4 Wochen',
    items: [
      'Personalisiertes Follow-up in 24h',
      'Demo-Follow-up mit individuellem Nutzenrahmen',
      'Einwände → Messaging-Update',
      'Opportunity-Tracking & Reporting',
    ],
    kpis: ['6 qualif. Opportunities', '100% Messbarkeit'],
    bg: 'var(--surface-dark)',
    dark: true,
  },
];

const kpis = [
  { label: 'Eingeladene Zielaccounts', value: '80' },
  { label: 'Vereinbarte Termine', value: '15' },
  { label: 'Geführte Gespräche', value: '40+' },
  { label: 'Demo-Follow-ups', value: '12' },
  { label: 'Qualif. Opportunities', value: '6' },
  { label: 'Einwände dokumentiert', value: '5' },
];

export default function MesseSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <>
      {/* Coral signature band */}
      <section id="messe" style={{ backgroundColor: 'var(--sig-coral)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>12 / Messekampagne</span>
          <h2 className="display-lg text-white mt-2 max-w-2xl" style={{ fontWeight: 400 }}>
            Eine Messe ist kein Stand. Eine Messe ist eine 8-Wochen-Kampagne.
          </h2>
        </div>
      </section>

      <section className="section-gap bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Countdown */}
          <div className="content-card p-6 mb-10 flex flex-wrap items-center gap-8">
            <div>
              <p className="caption mb-1" style={{ color: 'var(--muted)' }}>NÄCHSTE MESSE</p>
              <p className="title-sm text-ink">IBA München 2025</p>
            </div>
            <div className="h-8 w-px hidden sm:block" style={{ backgroundColor: 'var(--hairline)' }} />
            <div className="flex gap-6">
              {[['53', 'Tage'], ['14', 'Std'], ['22', 'Min']].map(([val, unit]) => (
                <div key={unit} className="text-center">
                  <p className="display-md text-ink">{val}</p>
                  <p className="caption" style={{ color: 'var(--muted)' }}>{unit}</p>
                </div>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>Kampagne: Bereit</span>
            </div>
          </div>

          {/* Phase selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {phases.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                  activePhase === i ? 'bg-ink text-white border-ink' : 'bg-canvas text-ink border-hairline hover:border-border-strong'
                }`}
                style={{ minHeight: 44 }}
              >
                {phase.label}
                <span className="ml-2 opacity-50 text-xs">{phase.weeks}</span>
              </button>
            ))}
          </div>

          {/* Phase card */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg p-8 mb-10"
            style={{ backgroundColor: phases[activePhase].bg }}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="caption mb-5" style={{ color: phases[activePhase].dark ? 'rgba(255,255,255,0.4)' : 'var(--muted)' }}>
                  {phases[activePhase].weeks.toUpperCase()}
                </p>
                <ul className="space-y-3">
                  {phases[activePhase].items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm"
                      style={{ color: phases[activePhase].dark ? 'rgba(255,255,255,0.75)' : 'var(--body)' }}>
                      <span className="shrink-0 mt-1" style={{ color: phases[activePhase].dark ? 'rgba(255,255,255,0.3)' : 'var(--muted)', fontSize: '8px' }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-end">
                <p className="caption mb-3" style={{ color: phases[activePhase].dark ? 'rgba(255,255,255,0.4)' : 'var(--muted)' }}>ZIEL-KPIS</p>
                <div className="flex flex-wrap gap-2">
                  {phases[activePhase].kpis.map((kpi) => (
                    <span
                      key={kpi}
                      className="px-3 py-1.5 rounded-md text-xs font-medium"
                      style={{
                        backgroundColor: phases[activePhase].dark ? 'rgba(255,255,255,0.1)' : 'rgba(24,29,38,0.1)',
                        color: phases[activePhase].dark ? 'rgba(255,255,255,0.8)' : 'var(--ink)',
                      }}
                    >
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* KPI grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="content-card p-4 text-center"
              >
                <p className="display-md text-ink">{kpi.value}</p>
                <p className="text-xs mt-2 leading-tight" style={{ color: 'var(--muted)' }}>{kpi.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}