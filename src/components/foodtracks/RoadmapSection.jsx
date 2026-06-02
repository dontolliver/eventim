import { useState } from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    range: 'Tag 1–30',
    theme: 'Verstehen',
    cards: [
      { label: 'Interne Interviews', desc: 'Sales-Einwände, Kundenstimmen, Wettbewerberbotschaften kartieren.' },
      { label: 'Messaging-Dokument', desc: 'Sprache, Positionierung, Differenzierung schriftlich fixieren.' },
      { label: 'KPI-Baseline', desc: 'Ausgangswerte definieren: Wo stehen wir heute?' },
    ],
    kpis: ['Interviews abgeschlossen', 'Messaging-Doc v1', 'KPI-Board live'],
    bg: 'var(--surface-soft)',
  },
  {
    range: 'Tag 31–60',
    theme: 'Produzieren',
    cards: [
      { label: 'LinkedIn-Kampagnen', desc: 'Tobias, Michael und Oliver aktivieren — jede Stimme mit klarer Funktion.' },
      { label: 'AI-Outreach Launch', desc: 'Zielaccounts identifizieren, personalisierte Sequenzen starten.' },
      { label: 'Content-Sprint', desc: 'Werkstudentin + AI: 8 Wochen Inhalte in 2 Wochen aufbauen.' },
    ],
    kpis: ['50 Outreach-Nachrichten', 'LinkedIn +30%', 'Sales-Feedback Woche 8'],
    bg: 'var(--sig-cream)',
  },
  {
    range: 'Tag 61–90',
    theme: 'Skalieren & Messe',
    cards: [
      { label: 'Messekampagne', desc: 'Landingpage, persönliche Einladungen, Vorab-Terminbuchung.' },
      { label: 'Kunden-Snippets', desc: 'Kurze Video-Statements von bestehenden Kunden: Kontrollaussagen.' },
      { label: 'KPI-Dashboard', desc: 'Reporting-System: Leads, Demos, Opportunities — alles messbar.' },
    ],
    kpis: ['Messequota: 15 Termine', 'Demo-Rate definiert', 'Dashboard Q4-ready'],
    bg: 'var(--sig-mint)',
  },
];

export default function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="roadmap" className="section-gap bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <span className="section-eyebrow">08 / 90-Tage-Plan</span>
          <h2 className="display-lg text-ink max-w-2xl">
            Nicht "was ich vorhabe". Was ich liefere.
          </h2>
        </div>

        {/* Phase tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {phases.map((phase, i) => (
            <button
              key={i}
              onClick={() => setActivePhase(i)}
              className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                activePhase === i
                  ? 'bg-ink text-white border-ink'
                  : 'bg-canvas text-ink border-hairline hover:border-border-strong'
              }`}
              style={{ minHeight: 44 }}
            >
              <span className="opacity-50 mr-2">{String(i + 1).padStart(2, '0')}</span>
              {phase.range}
              <span className="ml-2 opacity-50 text-xs">/ {phase.theme}</span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-3 gap-4 mb-6"
        >
          {phases[activePhase].cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="p-6 rounded-lg"
              style={{ backgroundColor: phases[activePhase].bg }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mb-4"
                style={{ backgroundColor: 'rgba(24,29,38,0.12)', color: 'var(--ink)' }}
              >
                {i + 1}
              </div>
              <p className="label-md text-ink mb-2">{card.label}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* KPIs */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5" style={{ borderTop: '1px solid var(--hairline)' }}>
          <span className="caption" style={{ color: 'var(--muted)' }}>DELIVERABLES</span>
          {phases[activePhase].kpis.map((kpi, i) => (
            <div key={kpi} className="flex items-center gap-2">
              <span style={{ color: 'var(--sig-coral)', fontSize: '8px' }}>◆</span>
              <span className="text-sm text-ink">{kpi}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}