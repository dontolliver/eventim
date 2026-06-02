import { motion } from 'framer-motion';

const items = [
  ['EN', 'en'],
  ['DE', 'de'],
];

export default function LangToggle({ lang, setLang, dark = false }) {
  const idx = lang === 'de' ? 1 : 0;

  return (
    <div
      className="relative inline-flex rounded-full p-0.5"
      style={{ background: dark ? 'rgba(255,255,255,0.12)' : '#e0e2e6' }}
      role="group"
      aria-label="Language"
    >
      <motion.div
        className="absolute top-0.5 h-[calc(100%-4px)] w-11 rounded-full bg-sig-coral"
        style={{ left: 2 }}
        animate={{ x: idx * 44 }}
        transition={{ type: 'spring', stiffness: 500, damping: 34 }}
      />
      {items.map(([label, code]) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className="relative z-10 w-11 py-1 text-xs font-semibold transition-colors"
          style={{
            color: lang === code ? '#ffffff' : dark ? 'rgba(255,255,255,0.65)' : '#41454d',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
