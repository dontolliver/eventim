import { useState } from 'react';
import { motion } from 'framer-motion';

const blocks = [
  {
    id: 'data',
    label: 'Datenanalyse',
    tools: ['Excel / Power Query', 'Structured Hypothesen', 'KPI-Framework'],
    proof: 'Aktienhandel als Entscheidungsmodell: Beobachten → Hypothese → Risiko → Entscheidung → Review.',
    foodtracks: 'Marketing-Entscheidungen nach Signalen treffen. Kampagnen als Hypothesen testen.',
    bg: 'var(--sig-cream)',
  },
  {
    id: 'ai',
    label: 'KI-gestützte Umsetzung',
    tools: ['Cursor / Codex', 'Prompt Engineering', 'Automations-Stack'],
    proof: 'Wohnungsscraper: Automatisiertes Monitoring, Telegram-Bot, Scoring-Logik — selbst gebaut.',
    foodtracks: 'AI-Outreach-System. Content-Automatisierung. KI als Produktivitätshebel.',
    bg: 'var(--sig-mint)',
  },
  {
    id: 'web',
    label: 'Webdesign & Digital',
    tools: ['HTML / CSS / React', 'Adobe Suite', 'Social Media'],
    proof: 'Flow&In: Aufbau Online-Präsenz und Event-Marketing für Berliner Späti-Netzwerk.',
    foodtracks: 'Eigenständige Umsetzung von Landingpages, LinkedIn-Assets und Messematerial.',
    bg: 'var(--surface-soft)',
  },
  {
    id: 'ops',
    label: 'Operative Ruhe',
    tools: ['Malteser Koordination', 'Verbraucherzentrale Daten', 'Breuninger Premium'],
    proof: 'Operative Koordination unter Druck. Kundenkontakt auf höchstem Niveau.',
    foodtracks: 'Kein Chaos, kein Blendwerk. Systematisch, verlässlich, messbar.',
    bg: 'var(--sig-yellow)',
  },
];

const timeline = [
  { year: '2018–2024', place: 'Universität Hohenheim', role: 'Wirtschaftswissenschaften B.Sc.' },
  { year: '2021–2023', place: 'Breuninger Stuttgart', role: 'Premium-Kundenkontakt & Service' },
  { year: '2022', place: 'Verbraucherzentrale', role: 'Daten- & Prozessarbeit' },
  { year: '2023', place: 'Malteser', role: 'Operative Koordination & Einsatzplanung' },
  { year: '2024–jetzt', place: 'Flow&In Berlin', role: 'Events, Web & Community-Marketing' },
];

export default function OliverSection() {
  const [active, setActive] = useState('data');
  const activeBlock = blocks.find((b) => b.id === active);

  return (
    <section id="oliver" className="section-gap bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <span className="section-eyebrow">05 / Operating Advantage</span>
          <h2 className="display-lg text-ink max-w-2xl">
            Marketing Manager. Schnell, konkret, umsetzungsstark.
          </h2>
          <p className="body-md mt-4 max-w-xl" style={{ color: 'var(--body)', fontSize: '15px', lineHeight: 1.7 }}>
            Oliver bringt keine lange Marketingabteilungs-Geschichte mit. Er bringt die Fähigkeit,
            aus wenig viel zu machen — mit Daten, KI und operativer Präzision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Block grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {blocks.map((block, i) => (
              <motion.button
                key={block.id}
                onClick={() => setActive(block.id)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`text-left p-6 rounded-lg border transition-all focus:outline-2 focus:outline-ink ${
                  active === block.id ? 'border-ink shadow-sm' : 'border-hairline hover:border-border-strong'
                }`}
                style={{ backgroundColor: block.bg, minHeight: 44 }}
              >
                <p className="label-md text-ink mb-3">{block.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {block.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: 'rgba(24,29,38,0.1)', color: 'var(--ink)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Deep dive */}
          <div className="flex flex-col gap-4">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="content-card p-6 flex-1"
              style={{ backgroundColor: 'var(--surface-dark)', border: 'none' }}
            >
              <p className="caption mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {activeBlock?.label}
              </p>
              <div className="mb-5">
                <p className="text-xs mb-1.5 font-medium" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1px' }}>BEWEIS</p>
                <p className="text-sm text-white/80 leading-relaxed">{activeBlock?.proof}</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <p className="text-xs mb-1.5 font-medium" style={{ color: 'rgba(252,171,121,0.8)', letterSpacing: '0.1px' }}>→ FOODTRACKS</p>
                <p className="text-sm text-white/80 leading-relaxed">{activeBlock?.foodtracks}</p>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="content-card p-5">
              <p className="caption mb-4" style={{ color: 'var(--muted)' }}>STATIONEN</p>
              <div className="space-y-3">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="mono shrink-0 mt-0.5" style={{ color: 'var(--muted)', fontSize: '11px', width: '72px' }}>{item.year}</span>
                    <div>
                      <p className="text-xs font-medium text-ink">{item.place}</p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
