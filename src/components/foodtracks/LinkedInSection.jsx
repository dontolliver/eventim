import { motion } from 'framer-motion';

const personas = [
  { name: 'Tobias Pfaff', role: 'CEO / Produktvision', focus: 'Daten, Food Waste, KI-Transparenz', content: ['Produkt-Einblicke', 'KI-Verständnis', 'Marktthesen'], bg: 'var(--surface-dark)', text: 'white' },
  { name: 'Michael Prinzhorn', role: 'Vertrieb / Partnerships', focus: 'Markt, Entscheidungen, Wachstum', content: ['Kunden-Erfolge', 'Partnerschaft-Insights', 'Marktbeobachtung'], bg: 'var(--sig-cream)', text: 'var(--ink)' },
  { name: 'Customer Success', role: 'Prozess & Learnings', focus: 'Echte Probleme, echte Lösungen', content: ['Prozess-Fallstudien', 'Einwand-Antworten', 'Community'], bg: 'var(--sig-mint)', text: 'var(--ink)' },
  { name: 'Oliver Jaensch', role: 'Marketing Manager', focus: 'Kampagnen, Markt, Messe', content: ['Marketing-Learnings', 'Kampagnen-Transparenz', 'Messe-Insights'], bg: 'var(--sig-peach)', text: 'var(--ink)' },
  { name: 'Werkstudentin', role: 'Content & Behind-Scenes', focus: 'Einblicke ins Team & Produkt', content: ['Kurz-Videos', 'Interviews', 'Kultur & Alltag'], bg: 'var(--sig-yellow)', text: 'var(--ink)' },
];

const outreachSteps = [
  { step: 1, label: 'Zielaccount', desc: 'Bäckerei-Profil definieren & finden.' },
  { step: 2, label: 'Kontext', desc: 'Filialanzahl, Sortiment, Region — recherchieren.' },
  { step: 3, label: 'Hypothese', desc: '"Ich vermute, euer Problem ist X."' },
  { step: 4, label: 'Nachricht', desc: 'Persönlich, kurz, ohne Spam-Energie.' },
  { step: 5, label: 'Dokumentieren', desc: 'Reaktion, Einwand, Öffnungsrate.' },
  { step: 6, label: 'Feedback Loop', desc: 'Erkenntnisse ins Messaging zurück.' },
];

export default function LinkedInSection() {
  return (
    <section id="linkedin" className="section-gap bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* LinkedIn System */}
        <div className="mb-14">
          <span className="section-eyebrow">10 / LinkedIn-Personenmarken-System</span>
          <h2 className="display-lg text-ink max-w-2xl">
            Kein Social-Media-Chaos. Ein Content-System.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {personas.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-5 rounded-lg flex flex-col"
              style={{ backgroundColor: p.bg }}
            >
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center text-sm font-medium mb-4 shrink-0"
                style={{ backgroundColor: 'rgba(24,29,38,0.12)', color: p.text }}
              >
                {p.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
              <p className="label-md mb-0.5" style={{ color: p.text }}>{p.name}</p>
              <p className="text-xs mb-3 font-medium" style={{ color: p.text === 'white' ? 'rgba(255,255,255,0.55)' : 'var(--sig-coral)' }}>{p.role}</p>
              <p className="text-xs mb-3 leading-relaxed" style={{ color: p.text === 'white' ? 'rgba(255,255,255,0.6)' : 'var(--body)' }}>{p.focus}</p>
              <div className="flex flex-col gap-1.5 mt-auto">
                {p.content.map((c) => (
                  <span key={c} className="text-xs flex items-center gap-1.5" style={{ color: p.text === 'white' ? 'rgba(255,255,255,0.45)' : 'var(--muted)' }}>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: p.text === 'white' ? 'rgba(255,255,255,0.3)' : 'var(--muted)' }} />
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Outreach */}
        <div className="mb-10">
          <span className="section-eyebrow">11 / AI-Outreach ohne Spam</span>
          <h2 className="display-md text-ink max-w-2xl">
            Jede Nachricht verdient es, gelesen zu werden.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {outreachSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="content-card p-5"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mb-3"
                style={{
                  backgroundColor: i === 5 ? 'var(--ink)' : 'var(--surface-strong)',
                  color: i === 5 ? 'white' : 'var(--ink)',
                }}
              >
                {item.step}
              </div>
              <p className="label-md text-ink mb-1.5">{item.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--body)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
