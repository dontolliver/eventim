import { useState } from 'react';
import { motion } from 'framer-motion';

const axes = [
  {
    id: 'wirkung',
    label: 'Messbare Wirkung',
    score: 72,
    items: ['Kosten senken', 'Umsatzchancen nutzen', 'Retoure reduzieren', 'Verfügbarkeit sichern'],
    desc: 'Jede Marketingmaßnahme ist direkt an Ergebnissen messbar — Retourenquote, Forecast-Genauigkeit, Demo-Conversions.',
    bg: 'var(--sig-peach)',
    textBg: '#1A0C00',
  },
  {
    id: 'kontrolle',
    label: 'Kontrolle',
    score: 58,
    items: ['Transparenz statt Blackbox', 'Nachvollziehbare Vorschläge', 'Kundenvorgaben', 'Warnsysteme'],
    desc: 'Kunden kaufen Vertrauen in Kontrolle. Marketing muss zeigen: FoodTracks macht Entscheidungen erklärbar, nicht magisch.',
    bg: 'var(--sig-mint)',
    textBg: '#062218',
  },
  {
    id: 'vertrauen',
    label: 'Vertrauen',
    score: 65,
    items: ['Bäcker-Spezialisierung', 'Customer Success', 'Community', 'Nachhaltigkeit'],
    desc: 'Spezialisierung ist die stärkste Differenzierung. Wer nur für Bäckereien baut, versteht Bäckereien besser als jeder Generalist.',
    bg: 'var(--sig-cream)',
    textBg: 'var(--ink)',
  },
];

export default function DiagnoseSection() {
  const [active, setActive] = useState('wirkung');
  const activeAxis = axes.find((a) => a.id === active);

  return (
    <section id="diagnose" className="section-gap bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14">
          <span className="section-eyebrow">02 / FoodTracks Diagnose</span>
          <h2 className="display-lg text-ink max-w-2xl">
            Drei Achsen, die FoodTracks zur Kategorie-Referenz machen.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: tabs */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {axes.map((axis, i) => (
              <motion.button
                key={axis.id}
                onClick={() => setActive(axis.id)}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`text-left p-5 rounded-lg border transition-all focus:outline-2 focus:outline-ink ${
                  active === axis.id
                    ? 'border-ink bg-surface-soft'
                    : 'border-hairline bg-canvas hover:border-border-strong'
                }`}
                style={{ minHeight: 44 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="label-md text-ink">{axis.label}</span>
                  <span className="mono text-sm" style={{ color: 'var(--muted)' }}>{axis.score}%</span>
                </div>
                {/* Progress */}
                <div className="h-1 rounded-full" style={{ backgroundColor: 'var(--surface-strong)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: active === axis.id ? 'var(--ink)' : 'var(--border-strong)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${axis.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                  />
                </div>
                {active === axis.id && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="body-md mt-3"
                    style={{ color: 'var(--body)', fontSize: '13px' }}
                  >
                    {axis.desc}
                  </motion.p>
                )}
              </motion.button>
            ))}
          </div>

          {/* Right: signature card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 sig-card flex flex-col justify-between"
            style={{ backgroundColor: activeAxis?.bg, minHeight: 320 }}
          >
            <div>
              <span className="section-eyebrow mb-4" style={{ color: activeAxis?.textBg, opacity: 0.6 }}>
                {activeAxis?.label} — Marketing-Hebel
              </span>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {activeAxis?.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-white/30 rounded-md px-4 py-3"
                  >
                    <p className="text-sm font-medium" style={{ color: activeAxis.textBg }}>{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bar chart */}
            <div className="mt-8">
              <p className="body-md mb-3" style={{ color: activeAxis?.textBg, opacity: 0.6, fontSize: '12px' }}>
                HEUTE vs. POTENZIAL
              </p>
              <div className="flex items-end gap-1.5 h-16">
                {[35, 50, 40, 65, 58, 72, 55, 75, 65, 88, 80, 92].map((v, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      backgroundColor: i < 6 ? `${activeAxis?.textBg}30` : `${activeAxis?.textBg}80`,
                    }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${v}%` }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}