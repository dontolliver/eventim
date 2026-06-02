import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SOURCES = ['ImmoScout24', 'Kleinanzeigen', 'Immowelt', 'WG-Gesucht', 'Maklerseiten'];

const LISTINGS = [
  { id: 'L-0049', area: 'Prenzlauer Berg', size: '62 m²', rooms: 2, rent: '1.180 €/mo', score: 91, tags: ['U-Bahn 4min', 'Altbau', 'EBK'], source: 'ImmoScout24' },
  { id: 'L-0052', area: 'Friedrichshain', size: '55 m²', rooms: 2, rent: '1.040 €/mo', score: 87, tags: ['S-Bahn 6min', 'Ruhige Lage'], source: 'Kleinanzeigen' },
  { id: 'L-0058', area: 'Mitte', size: '48 m²', rooms: 1.5, rent: '1.320 €/mo', score: 74, tags: ['Zentral', 'Möbliert'], source: 'Immowelt' },
  { id: 'L-0061', area: 'Neukölln', size: '58 m²', rooms: 2, rent: '980 €/mo', score: 89, tags: ['U7 3min', 'Balkon', 'Hinterhof'], source: 'WG-Gesucht' },
  { id: 'L-0063', area: 'Kreuzberg', size: '71 m²', rooms: 2.5, rent: '1.290 €/mo', score: 93, tags: ['Altbau', 'Stuck', 'U1 5min'], source: 'ImmoScout24' },
  { id: 'L-0067', area: 'Charlottenburg', size: '64 m²', rooms: 2, rent: '1.150 €/mo', score: 82, tags: ['S-Bahn 4min', 'EBK'], source: 'Maklerseiten' },
  { id: 'L-0070', area: 'Wedding', size: '52 m²', rooms: 2, rent: '890 €/mo', score: 86, tags: ['U6 6min', 'Saniert'], source: 'Kleinanzeigen' },
  { id: 'L-0073', area: 'Schöneberg', size: '60 m²', rooms: 2, rent: '1.220 €/mo', score: 90, tags: ['U7 2min', 'Balkon', 'Altbau'], source: 'Immowelt' },
  { id: 'L-0078', area: 'Moabit', size: '49 m²', rooms: 2, rent: '950 €/mo', score: 78, tags: ['S-Bahn 7min', 'Hell'], source: 'ImmoScout24' },
  { id: 'L-0082', area: 'Treptow', size: '67 m²', rooms: 2.5, rent: '1.100 €/mo', score: 88, tags: ['S-Bahn 5min', 'Park', 'Balkon'], source: 'WG-Gesucht' },
  { id: 'L-0086', area: 'Lichtenberg', size: '54 m²', rooms: 2, rent: '870 €/mo', score: 81, tags: ['Tram 3min', 'Saniert'], source: 'Kleinanzeigen' },
  { id: 'L-0091', area: 'Mitte', size: '38 m²', rooms: 1, rent: '1.050 €/mo', score: 72, tags: ['Zentral', 'Möbliert'], source: 'Maklerseiten' },
  { id: 'L-0094', area: 'Prenzlauer Berg', size: '74 m²', rooms: 3, rent: '1.480 €/mo', score: 92, tags: ['Altbau', 'Stuck', 'Balkon', 'U2 4min'], source: 'ImmoScout24' },
  { id: 'L-0097', area: 'Friedrichshain', size: '48 m²', rooms: 1.5, rent: '950 €/mo', score: 85, tags: ['U5 5min', 'Hell'], source: 'Immowelt' },
];

const LOG_STEPS = [
  { offset: 0, msg: 'Scan-Zyklus gestartet — 6 Quellen aktiv', type: 'info' },
  { offset: 3, msg: 'ImmoScout24 → 847 Inserate gecrawlt, 3 neu', type: 'success' },
  { offset: 6, msg: 'Kleinanzeigen → 412 Inserate gecrawlt, 1 neu', type: 'success' },
  { offset: 8, msg: 'Filter: Miete ≤1.400€, Zimmer ≥1.5, U/S-Bahn ≤8min', type: 'info' },
  { offset: 10, msg: 'Scoring-Engine läuft — 4 Kandidaten bewertet', type: 'info' },
  { offset: 12, msg: 'Schwellenwert >85: 2 Inserate → Telegram-Push ✓', type: 'success' },
  { offset: 14, msg: 'Nächster Zyklus in 2min 47sek', type: 'muted' },
];

const fmtTime = (d) =>
  `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;

const TRANSFER = [
  { scraper: 'Zielprofil definieren', foodtracks: 'ICP definieren (Ziel-Bäckereiprofile)' },
  { scraper: 'Quellen monitoren', foodtracks: 'Sales-Signale & Trigger monitoren' },
  { scraper: 'Score-Modell anwenden', foodtracks: 'Lead-Scoring nach Fit und Timing' },
  { scraper: 'Automatischer Push bei Match', foodtracks: 'Personalisierter Outreach bei Match' },
  { scraper: 'Feedback → Modell verbessern', foodtracks: 'Sales-Feedback → Messaging verbessern' },
];

export default function ScraperSection() {
  const [logVisible, setLogVisible] = useState([]);
  const [scanCount, setScanCount] = useState(1284);
  const [activeTab, setActiveTab] = useState('log');
  const [cursorTime, setCursorTime] = useState(() => fmtTime(new Date()));
  const [visibleListings, setVisibleListings] = useState(() => LISTINGS.slice(0, 3));
  const listingIdxRef = useRef(3);
  const logRef = useRef(null);

  useEffect(() => {
    const start = new Date(Date.now() - 15000);
    LOG_STEPS.forEach((step, i) => {
      setTimeout(() => {
        const t = new Date(start.getTime() + step.offset * 1000);
        setLogVisible((prev) => [...prev, { ...step, time: fmtTime(t) }]);
        if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
      }, i * 500 + 300);
    });
    const cursorInt = setInterval(() => setCursorTime(fmtTime(new Date())), 1000);
    const interval = setInterval(() => setScanCount((c) => c + Math.floor(Math.random() * 3 + 1)), 3000);
    const listingInt = setInterval(() => {
      setVisibleListings((prev) => {
        const next = LISTINGS[listingIdxRef.current % LISTINGS.length];
        listingIdxRef.current += 1;
        return [next, ...prev].slice(0, 3);
      });
    }, 3500);
    return () => {
      clearInterval(interval);
      clearInterval(cursorInt);
      clearInterval(listingInt);
    };
  }, []);

  return (
    <section id="scraper" className="section-gap bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <span className="section-eyebrow">06 / Projekt — Wohnungsscraper</span>
          <h2 className="display-lg text-ink max-w-2xl">
            Ein echter Beweis für System-Denken in Aktion.
          </h2>
          <p className="body-md mt-4 max-w-xl" style={{ color: 'var(--body)', fontSize: '15px', lineHeight: 1.7 }}>
            Eigenbau-System: Automatisiertes Monitoring von 6 Immobilienquellen, intelligentes
            Scoring und sofortiger Telegram-Push — alle 1,5–4 Minuten.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Terminal */}
          <div className="lg:col-span-2 content-card overflow-hidden flex flex-col" style={{ backgroundColor: 'var(--surface-dark)', border: 'none' }}>
            {/* Window chrome */}
            <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#28c840' }} />
                <span className="mono ml-3 text-white/30">berlin-scraper / main.py</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-dot" style={{ backgroundColor: '#39bf45' }} />
                <span className="mono text-white/50" style={{ fontSize: '12px' }}>SCANNING</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {[
                { label: 'Scans total', value: scanCount.toLocaleString() },
                { label: 'Interval', value: '1.5–4 min' },
                { label: 'Quellen', value: '6 aktiv' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="mono text-white/30" style={{ fontSize: '11px' }}>{label}</p>
                  <p className="mono text-white font-medium" style={{ fontSize: '13px' }}>{value}</p>
                </div>
              ))}
              <div className="flex flex-wrap gap-1.5 items-center">
                {SOURCES.map((s) => (
                  <span key={s} className="mono text-white/50 px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>{s}</span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {['log', 'inserate'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-5 py-2.5 mono transition-colors"
                  style={{
                    fontSize: '12px',
                    color: activeTab === tab ? '#ffffff' : 'rgba(255,255,255,0.35)',
                    borderBottom: activeTab === tab ? '1px solid #ffffff' : '1px solid transparent',
                  }}
                >
                  {tab === 'log' ? 'Scan-Log' : 'Neue Inserate'}
                </button>
              ))}
            </div>

            {/* Content area */}
            <div ref={logRef} className="flex-1 p-5 overflow-y-auto custom-scroll" style={{ minHeight: 260, maxHeight: 320 }}>
              <AnimatePresence mode="wait">
                {activeTab === 'log' ? (
                  <motion.div key="log" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1.5">
                    {logVisible.map((line, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="flex gap-4">
                        <span className="mono shrink-0" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>{line.time}</span>
                        <span className="mono" style={{
                          fontSize: '12px',
                          color: line.type === 'success' ? '#39bf45' : line.type === 'muted' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.65)',
                        }}>
                          {line.msg}
                        </span>
                      </motion.div>
                    ))}
                    <div className="flex gap-4">
                      <span className="mono" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>{cursorTime}</span>
                      <span className="mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>▌<span className="cursor-blink">█</span></span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="inserate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <AnimatePresence initial={false}>
                    {visibleListings.map((listing) => (
                      <motion.div
                        key={listing.id}
                        layout
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-start justify-between gap-4 p-4 rounded-md"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="mono text-white/30" style={{ fontSize: '11px' }}>{listing.id}</span>
                            <span className="mono text-white/20" style={{ fontSize: '11px' }}>·</span>
                            <span className="mono text-white/40" style={{ fontSize: '11px' }}>{listing.source}</span>
                          </div>
                          <p className="text-sm text-white font-medium">{listing.area} — {listing.size}, {listing.rooms} Zi.</p>
                          <p className="mono text-white/50" style={{ fontSize: '12px', marginTop: '2px' }}>{listing.rent}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {listing.tags.map((t) => (
                              <span key={t} className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)' }}>{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="shrink-0 text-center">
                          <div className="w-11 h-11 rounded-md flex items-center justify-center font-medium text-base"
                            style={{
                              backgroundColor: listing.score > 88 ? '#39bf45' : listing.score > 80 ? 'var(--sig-mustard)' : 'rgba(255,255,255,0.15)',
                              color: listing.score > 80 ? 'var(--ink)' : 'white',
                            }}>
                            {listing.score}
                          </div>
                          <p className="mono mt-1" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>Score</p>
                        </div>
                      </motion.div>
                    ))}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            {/* Telegram preview */}
            <div className="content-card p-5" style={{ backgroundColor: '#1E2A3A', border: 'none', borderRadius: '12px' }}>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: '#2AABEE' }}>T</div>
                <div>
                  <p className="text-white text-xs font-medium">BerlinScraper Bot</p>
                  <p className="mono text-white/30" style={{ fontSize: '11px' }}>Telegram</p>
                </div>
                <span className="ml-auto status-dot" />
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                <p className="text-white/80 text-xs leading-relaxed">
                  🏠 <strong className="text-white">Neues Match: Score 91</strong><br />
                  Prenzlauer Berg · 62m² · 2 Zi.<br />
                  1.180 €/mo · U-Bahn 4min<br />
                  <span style={{ color: '#2AABEE' }}>→ Inserat öffnen</span>
                </p>
              </div>
              <p className="mono text-right mt-2" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>{cursorTime} ✓✓</p>
            </div>

            {/* Transfer */}
            <div className="content-card p-5 flex-1">
              <p className="caption mb-4" style={{ color: 'var(--muted)' }}>TRANSFER → FOODTRACKS</p>
              <div className="space-y-4">
                {TRANSFER.map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.scraper}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-3 h-px" style={{ backgroundColor: 'var(--sig-coral)' }} />
                      <p className="text-xs font-medium text-ink">{t.foodtracks}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}