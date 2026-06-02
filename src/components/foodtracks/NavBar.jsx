import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import LangToggle from './LangToggle';

const handleNav = (event, href, setMenuOpen) => {
  event.preventDefault();
  if (setMenuOpen) setMenuOpen(false);
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function NavBar({ lang, setLang, items, contactLabel, resumeLabel }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className="fixed left-1/2 top-3 z-50 w-[min(94vw,1080px)] -translate-x-1/2">
        <div
          className={`flex h-[60px] items-center justify-between gap-3 rounded-full border px-4 backdrop-blur-2xl transition-[background-color,box-shadow,border-color] duration-300 sm:px-5 ${
            scrolled
              ? 'border-sig-coral/25 bg-[#f4f1ea]/85 shadow-[0_18px_50px_-24px_rgba(255,90,31,0.5),0_10px_30px_-22px_rgba(23,19,16,0.3)]'
              : 'border-black/5 bg-[#f4f1ea]/60 shadow-[0_1px_0_rgba(23,19,16,0.04)]'
          }`}
        >
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex min-w-0 items-baseline gap-2"
          >
            <span className="truncate text-[15px] font-semibold text-ink sm:text-[16px]">Oliver</span>
            <span className="hidden text-[13px] font-medium text-sig-coral sm:inline">for werkhain</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNav(event, item.href)}
                className="rounded-full px-3 py-1.5 text-[14px] font-medium text-body transition-colors hover:bg-sig-coral hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LangToggle lang={lang} setLang={setLang} />
            <a
              href="/Oliver_Jaensch_Lebenslauf.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center rounded-full border border-ink/10 bg-surface-soft px-4 py-2 text-[14px] font-semibold text-ink transition-colors hover:border-sig-coral hover:bg-sig-coral hover:text-white lg:inline-flex"
            >
              <FileText className="mr-2 h-4 w-4" />
              {resumeLabel}
            </a>
            <a
              href="#kontakt"
              onClick={(event) => handleNav(event, '#kontakt')}
              className="hidden rounded-full bg-ink px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-sig-coral lg:inline-flex"
            >
              {contactLabel}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full bg-surface-soft md:hidden"
              aria-label="Menu"
            >
              <span className={`block h-px w-4 bg-ink transition ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
              <span className={`block h-px w-4 bg-ink transition ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-4 right-4 top-[78px] z-40 overflow-hidden rounded-2xl border border-sig-coral/20 bg-[#f4f1ea]/92 p-2 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {[...items, { label: contactLabel, href: '#kontakt' }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNav(event, item.href, setMenuOpen)}
                className="block rounded-xl px-4 py-3 text-[15px] font-medium text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Oliver_Jaensch_Lebenslauf.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-[15px] font-medium text-ink"
            >
              <FileText className="h-4 w-4 text-sig-coral" />
              {resumeLabel}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
