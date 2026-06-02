import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = ['Wachstumssystem.', 'Infrastruktur.', 'Strategie.', 'Präzision.'];

const quadrants = [
  { id: 'markt', num: '01', label: 'Markt verstehen', desc: 'Wettbewerber, Kundenstimmen, Messaging-Lücken.' },
  { id: 'vertrauen', num: '02', label: 'Vertrauen aufbauen', desc: 'Kontrolle sichtbar machen. Glaubwürdigkeit durch Substanz.' },
  { id: 'wechsel', num: '03', label: 'Wechsel auslösen', desc: 'Motivation, Risiko minimieren, richtigen Moment treffen.' },
  { id: 'messe', num: '04', label: 'Messe gewinnen', desc: 'Nicht Stand. Acht-Wochen-Kampagne.' },
];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = words[wordIdx];
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
        return () => clearTimeout(t);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, wordIdx]);

  return (
    <section className="bg-canvas pt-16">
      {/* Hero band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-24">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="section-eyebrow"
        >
          Bewerbung als Marketing Manager — FoodTracks 2026
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="display-xl text-ink max-w-3xl mb-6"
          style={{ fontWeight: 500 }}
        >
          FoodTracks braucht kein lautes Marketing.
          <br />
          FoodTracks braucht ein{' '}
          <span className="text-sig-coral" style={{ color: 'var(--sig-coral)' }}>
            {displayed}<span className="cursor-blink">|</span>
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="body-md max-w-xl mb-10"
          style={{ color: 'var(--body)', fontSize: '16px', lineHeight: 1.6 }}
        >
          Oliver Jaensch, 27 — Mein Vorschlag: FoodTracks wird die sichtbarste,
          glaubwürdigste und vertrauenswürdigste Speziallösung für datengetriebene
          Bäckereiführung.
        </motion.p>

        {/* CTA pair */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-wrap items-center gap-3 mb-20"
        >
          <a
            href="#diagnose"
            onClick={(e) => { e.preventDefault(); document.querySelector('#diagnose')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary"
          >
            Konzept ansehen
          </a>
          <a
            href="#oliver"
            onClick={(e) => { e.preventDefault(); document.querySelector('#oliver')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-secondary"
          >
            Wer ist Oliver?
          </a>
        </motion.div>

        {/* OS Grid — 4 quadrants */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {quadrants.map((q, i) => (
            <div
              key={q.id}
              className="content-card p-6 hover:shadow-sm transition-shadow"
              style={{ backgroundColor: i === 1 ? 'var(--sig-cream)' : i === 3 ? 'var(--surface-soft)' : 'var(--canvas)' }}
            >
              <span className="mono text-muted-ink block mb-3" style={{ color: 'var(--muted)', fontSize: '12px' }}>{q.num}</span>
              <p className="label-md text-ink mb-2">{q.label}</p>
              <p className="body-md" style={{ color: 'var(--body)', fontSize: '13px' }}>{q.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Signature coral band — punchtline */}
      <div className="bg-sig-coral" style={{ backgroundColor: 'var(--sig-coral)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <h2 className="display-md text-white max-w-xl" style={{ fontWeight: 400 }}>
            "Er denkt in Systemen, misst Erfolg sauber und macht aus wenig Ressourcen sichtbar viel."
          </h2>
          <a
            href="#diagnose"
            onClick={(e) => { e.preventDefault(); document.querySelector('#diagnose')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-secondary-on-dark shrink-0"
          >
            Weiter lesen
          </a>
        </div>
      </div>
    </section>
  );
}
