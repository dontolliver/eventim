import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const kpiAreas = [
  {
    label: 'Output',
    metrics: [
      { name: 'LinkedIn-Posts/Woche', current: '2', target: '5' },
      { name: 'Case Studies', current: '1', target: '4' },
      { name: 'Sales-Decks aktuell', current: '1', target: '3' },
    ],
  },
  {
    label: 'Relevanz',
    metrics: [
      { name: 'Engagement-Rate', current: '1,2%', target: '4,5%' },
      { name: 'Profilbesuche Zielaccounts', current: '30', target: '120' },
      { name: 'Content-Shares', current: '4', target: '25' },
    ],
  },
  {
    label: 'Conversion',
    metrics: [
      { name: 'Demo-Rate aus Outreach', current: '—', target: '8%' },
      { name: 'Website → Demo', current: '—', target: '3,5%' },
      { name: 'Messe → Opportunity', current: '—', target: '25%' },
    ],
  },
  {
    label: 'Pipeline',
    metrics: [
      { name: 'MQLs / Monat', current: '—', target: '20' },
      { name: 'Sales-Accepted Leads', current: '—', target: '8' },
      { name: 'Qualif. Opportunities', current: '—', target: '3' },
    ],
  },
];

const radarData = [
  { subject: 'Output', A: 65 },
  { subject: 'Relevanz', A: 50 },
  { subject: 'Conversion', A: 72 },
  { subject: 'Pipeline', A: 58 },
  { subject: 'Lernen', A: 80 },
];

export default function KPISection() {
  return (
    <>
      {/* Dark CTA band before KPIs */}
      <section style={{ backgroundColor: 'var(--surface-dark)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>09 / KPI-System</span>
            <h2 className="display-lg text-white mt-2 max-w-2xl">
              Ich messe nicht nur Reichweite. Ich messe bessere Gespräche.
            </h2>
            <p className="body-md mt-4 max-w-lg" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.7 }}>
              In einer engen B2B-Nische macht Reichweite allein keinen Unterschied. Marketing muss nachweislich den Vertrieb stärken.
            </p>
          </div>
        </div>
      </section>

      <section id="kpis" className="section-gap bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Radar */}
            <div className="content-card p-6">
              <p className="caption mb-6" style={{ color: 'var(--muted)' }}>MARKETING-COCKPIT</p>
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="var(--hairline)" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fontFamily: 'Inter', fontSize: 11, fill: 'var(--muted)' }}
                  />
                  <Radar dataKey="A" stroke="var(--ink)" fill="var(--ink)" fillOpacity={0.08} strokeWidth={1.5} />
                </RadarChart>
              </ResponsiveContainer>
              <p className="text-xs text-center mt-3" style={{ color: 'var(--muted)' }}>Ziel-Gewichtung nach 90 Tagen</p>
            </div>

            {/* KPI areas */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kpiAreas.map((area, i) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="content-card p-5"
                >
                  <p className="label-md text-ink mb-4">{area.label}</p>
                  <div className="space-y-3">
                    {area.metrics.map((m) => (
                      <div key={m.name} className="flex items-center justify-between gap-3">
                        <p className="text-xs flex-1" style={{ color: 'var(--body)' }}>{m.name}</p>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="mono text-xs" style={{ color: 'var(--muted)' }}>{m.current}</span>
                          <div className="w-3 h-px" style={{ backgroundColor: 'var(--hairline)' }} />
                          <span className="mono text-xs font-medium text-ink">{m.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}