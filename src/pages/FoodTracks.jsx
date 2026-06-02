import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/foodtracks/NavBar';
import LangToggle from '../components/foodtracks/LangToggle';

const content = {
  en: {
    nav: [
      { label: 'Proof', href: '#beweise' },
      { label: 'Marketing', href: '#marketing' },
      { label: 'Projects', href: '#projekte' },
      { label: 'Track record', href: '#stationen' },
    ],
    contact: 'Contact',
    hero: {
      eyebrow: 'Live Experiences · Brand · Music & Youth Culture',
      h1a: 'Six years of building live culture.',
      h1b: 'Now at the place where it happens.',
      lead: "I've put on my own raves for up to 300 people and made local brands visible. Today I run the service at Alte Münze Berlin.",
      ctaPrimary: 'Why I fit',
      ctaContact: 'Contact',
      factsTitle: 'In 8 seconds',
      facts: [
        ['Berlin', 'On the ground, service lead at the Alte Münze.'],
        ['6 years', 'My own events and brands in the scene.'],
        ['Around 300', 'Guests carried through one of my own rave nights.'],
        ['Self-built', 'My own apps and tools whenever I hit a problem.'],
      ],
    },
    position: {
      eyebrow: 'Position',
      h2a: "I didn't come from marketing.",
      h2b: 'I came from the scene.',
      paragraphs: [
        "For six years I've been building my own events, brands and shows. Mostly on my own, from the first concept to tearing it down at four in the morning.",
        "Today I'm the service lead in the day-to-day of Alte Münze Berlin, one of the city's central stages for activations and music. On the side I build apps and tools whenever a problem annoys me long enough.",
        'I bought my first apartment at 21, paid for with my own money. I like making my own decisions and then standing behind them.',
      ],
      interestsLabel: 'Interests',
      skillsLabel: 'Skills',
      languagesLabel: 'Languages',
      interests: ['Music & culture', 'Live events', 'Photography (Leica M6)', 'Design & brand'],
      skills: [
        'Brand activations & live events',
        'Concept, build, run',
        'Adobe Creative Cloud',
        'App & tool development',
        'Data analysis (Excel)',
        'Cross-functional coordination',
      ],
      languages: [
        ['German', 'native'],
        ['English', 'fluent'],
        ['French', 'basics'],
      ],
    },
    beweise: {
      eyebrow: 'Proof',
      h2: 'Six proofs, not buzzwords.',
      lead: "What most people just claim, I've actually done. Here's the work behind it.",
      panels: [
        {
          no: '01',
          label: 'Rooms where music happens',
          title: 'Live Experiences & Activations',
          body: 'With Tunnel Vision I built my own rave brand. Nights of up to 300 guests, from the first idea through door management to my own bar and the final settlement. Before that, event series at Flow&In Späti and bar and event planning at Universum Club. Today I help build activations from the inside at Alte Münze Berlin.',
          bits: ['own rave brand', 'up to 300 guests', 'door management', 'Alte Münze Berlin'],
        },
        {
          no: '02',
          label: 'The scene, firsthand',
          title: 'Music & Youth Culture',
          body: "For years I've moved between Stuttgart and Berlin in the rave, Späti and club scene. In Stuttgart I ran my own page about the local scene. I'm the audience you want to reach, and I help build it on the side.",
          bits: ['Stuttgart & Berlin', 'local scene', 'young audience'],
        },
        {
          no: '03',
          label: 'From idea to appearance',
          title: 'Brand & Visual System',
          body: 'For my projects I do the whole visual identity myself: logo, poster, merch, social. Built in Photoshop, Lightroom, InDesign and Illustrator. Shooting with the Leica M6 has been part of it for years.',
          bits: ['visual identity', 'Adobe Creative Cloud', 'Leica M6'],
        },
        {
          no: '04',
          label: 'When the plan breaks mid-show',
          title: 'Operations under pressure',
          body: 'At Malteser Hilfsdienst I coordinated the shifts of a refugee clinic: international teams, many stakeholders, clear rosters. At Alte Münze and on my own event nights it means staying calm when something goes wrong and keeping several things under control at once.',
          bits: ['coordinated shifts', 'international teams', 'multiple projects at once'],
        },
        {
          no: '05',
          label: "What's left after the event",
          title: 'Analysis & Structure',
          body: 'B.Sc. in Economics at Hohenheim, with a thesis on cultural factors in start-up financing. I use Excel properly: for settlements, analyses and my own financial models. So I can write a brief, read the numbers after a campaign and turn them into a presentation.',
          bits: ['B.Sc. in Economics', 'Excel at a working level', 'brief and analysis'],
        },
        {
          no: '06',
          label: "I build what I'm missing",
          title: 'Tools & App Development',
          body: "When a problem annoys me, I build a solution. A fitness app after my knee story, a bot for the Berlin apartment hunt. Not from a textbook, but because I'd rather solve things than put up with them.",
          bits: ['app development', 'automation', 'pragmatic'],
        },
      ],
    },
    marketing: {
      eyebrow: 'And the marketing?',
      h2: 'Building your own brand is exactly that.',
      paragraphs: [
        "Sure, I don't have five years of agency behind me. But six years of doing exactly what it's about: finding an idea, understanding an audience and turning it into a moment that sticks.",
        'Taking a brand from the logo through social to a full dance floor is marketing. Only that I carried it myself instead of pitching it.',
      ],
      points: [
        {
          title: 'I am the audience.',
          text: 'What works in young music culture, I feel in my gut instead of reading it in a study.',
        },
        {
          title: 'I think in projects.',
          text: 'Idea, brief, partners, timing, launch and then the numbers. Exactly the flow behind an activation.',
        },
        {
          title: 'I learn fast.',
          text: "Whatever I can't do yet, I teach myself. A brand, an app, a bar: all started and seen through on my own.",
        },
      ],
    },
    projekte: {
      eyebrow: 'Self-built',
      h2: 'When something annoys me, I build a solution.',
      lead: "I'm a developer too. Not from a textbook, but because I'd rather solve problems than put up with them. Two examples that are running right now.",
      botTag: 'Apartment bot',
      botMeta: 'Berlin · automation',
      botTitle: 'The apartment hunt, automated.',
      botBody: 'The Berlin apartment hunt is chaos. So I built a bot that scans the portals around the clock, filters out the junk and only flags the matches that fit.',
      fitTag: 'Fitness app',
      fitMeta: 'In-house build',
      fitTitle: 'An app against pain and misalignments.',
      fitBody: 'It started with my own knee, which no standard plan fit. That turned into an app for everyone who trains with pain or misalignments: it tailors exercises and load to each specific problem and works to treat it.',
    },
    bot: {
      status: 'apartment-bot · running',
      scanned: 'scanned',
      matches: 'matches',
      locale: 'en-US',
      events: [
        { type: 'scan', text: 'Scanning ImmoScout, Kleinanzeigen, WG-Gesucht …' },
        { type: 'skip', text: '3-room · Charlottenburg · €1,840 → too expensive' },
        { type: 'hit', text: '2-room · Wedding · €720 · 58 m² → fits, email sent' },
        { type: 'skip', text: '1-room · Lichtenberg · agent fee → discarded' },
        { type: 'scan', text: 'Duplicate check: merged 12 listings' },
        { type: 'skip', text: 'Shared room · Neukölln · temporary → discarded' },
        { type: 'hit', text: '2.5-room · Pankow · €890 · 64 m² → fits, email sent' },
        { type: 'scan', text: 'Next run in 30 s …' },
      ],
    },
    fit: {
      today: 'Today',
      subtitle: 'Targeted against pain',
      exercises: [
        ['Mobility', 100],
        ['Light leg press', 80],
        ['Stability', 45],
      ],
      button: 'Start session',
    },
    stationen: {
      eyebrow: 'Track record',
      h2: 'Where this comes from.',
      educationLabel: 'Education',
      timeline: [
        {
          date: 'Now',
          role: 'Alte Münze Berlin · service lead',
          body: "As service lead in the live operation of one of Berlin's central venues: I run the service team through the night, coordinate setup and the trades, and see from the inside how an activation is built, runs and is taken down again.",
          now: true,
        },
        {
          date: 'since 2021',
          role: 'Own brand & event projects (Tunnel Vision, Pixelstrom)',
          body: 'My own rave brand with nights of up to 300 guests: concept, visual identity, bar, door management and settlement. Plus Pixelstrom as my own design and portfolio brand.',
        },
        {
          date: '09.2023 – 08.2024',
          role: 'Flow&In Späti, Stuttgart · working student',
          body: 'Sales, event planning and online presence. Helped carry event series of up to 200 guests and built up the social media presence.',
        },
        {
          date: '04.2021 – 09.2022',
          role: 'Malteser Hilfsdienst e.V. · operational coordination',
          body: 'Shift coordination for a refugee clinic: international teams, stakeholder alignment and rosters under pressure.',
        },
        {
          date: '05.2020 – 04.2021',
          role: 'Universum Club, Stuttgart · bar & event planning',
          body: 'Bar and event planning in a Stuttgart club, right in the middle of live operations.',
        },
        {
          date: '2018 & 2019',
          role: 'Mercedes-Benz Sindelfingen · summer job',
          body: 'Production and logistics across two summers.',
        },
        {
          date: '2016',
          role: 'LPP (RESERVED), Stuttgart · sales',
          body: 'Retail customer contact in sales.',
        },
      ],
      education: [
        {
          feature: true,
          date: '2018 – 2023',
          title: 'B.Sc. Economics',
          place: 'University of Hohenheim',
          body: "Bachelor's thesis on cultural and social factors in start-up financing across countries. During my studies, an internship at Verbraucherzentrale BW (data management), among others.",
        },
        {
          date: '2008 – 2016',
          title: 'Abitur (university entrance)',
          place: 'Max-Eyth-Schule, Stuttgart',
        },
      ],
    },
    kontakt: {
      eyebrow: 'Contact',
      h2a: "Let's talk about the rooms",
      h2b: 'Berlin needs in 2026.',
      lead: "The role runs for one year. I'm in Berlin, quick to reach and ready to go.",
      cta: 'Email me',
      copyright: '© 2026 Oliver Jaensch, Berlin',
      meta: 'Jaenscholi@gmail.com',
      impressum: 'Imprint',
    },
  },

  de: {
    nav: [
      { label: 'Beweise', href: '#beweise' },
      { label: 'Marketing', href: '#marketing' },
      { label: 'Projekte', href: '#projekte' },
      { label: 'Stationen', href: '#stationen' },
    ],
    contact: 'Kontakt',
    hero: {
      eyebrow: 'Live Experiences · Brand · Music & Youth Culture',
      h1a: 'Sechs Jahre eigene Live-Kultur.',
      h1b: 'Jetzt am Ort, an dem sie passiert.',
      lead: 'Ich habe eigene Raves bis zu 300 Gäste auf die Beine gestellt und lokale Marken sichtbar gemacht. Heute habe ich die Dienstleitung in der Alten Münze Berlin.',
      ctaPrimary: 'Warum ich passe',
      ctaContact: 'Kontakt',
      factsTitle: 'In 8 Sekunden',
      facts: [
        ['Berlin', 'Vor Ort, Dienstleitung in der Alten Münze.'],
        ['6 Jahre', 'Eigene Events und Marken in der Szene.'],
        ['Rund 300', 'Gäste durch eine eigene Rave-Nacht gebracht.'],
        ['Selbst gebaut', 'Eigene Apps und Tools, wenn ich ein Problem habe.'],
      ],
    },
    position: {
      eyebrow: 'Position',
      h2a: 'Ich komme nicht aus dem Marketing.',
      h2b: 'Ich komme aus der Szene.',
      paragraphs: [
        'Seit sechs Jahren baue ich eigene Events, Marken und Auftritte. Meistens allein, vom ersten Konzept bis zum Abbau um vier Uhr morgens.',
        'Heute habe ich die Dienstleitung im laufenden Betrieb der Alten Münze Berlin, einer der zentralen Bühnen der Stadt für Aktivierungen und Musik. Nebenbei baue ich mir Apps und Tools, wenn mich ein Problem lange genug nervt.',
        'Meine erste Wohnung habe ich mit 21 gekauft, finanziert aus eigenem Geld. Ich treffe meine Entscheidungen gern selbst und stehe dann auch dafür gerade.',
      ],
      interestsLabel: 'Interessen',
      skillsLabel: 'Skills',
      languagesLabel: 'Sprachen',
      interests: ['Musik & Kultur', 'Live Events', 'Fotografie (Leica M6)', 'Design & Brand'],
      skills: [
        'Brand Activations & Live Events',
        'Konzept, Aufbau, Betrieb',
        'Adobe Creative Cloud',
        'App- & Tool-Entwicklung',
        'Datenanalyse (Excel)',
        'Cross-funktionale Koordination',
      ],
      languages: [
        ['Deutsch', 'Muttersprache'],
        ['Englisch', 'fließend'],
        ['Französisch', 'Grundkenntnisse'],
      ],
    },
    beweise: {
      eyebrow: 'Beweise',
      h2: 'Sechs Belege statt Schlagworten.',
      lead: 'Was die meisten nur behaupten, habe ich tatsächlich gemacht. Hier ist die Arbeit dahinter.',
      panels: [
        {
          no: '01',
          label: 'Räume, in denen Musik passiert',
          title: 'Live Experiences & Activations',
          body: 'Mit Tunnel Vision habe ich eine eigene Rave-Brand aufgebaut. Nächte bis zu 300 Gäste, von der ersten Idee über das Türmanagement bis zur eigenen Bar und der Abrechnung am Ende. Davor Eventreihen im Flow&In Späti und Bar- und Eventplanung im Universum Club. Heute baue ich Aktivierungen in der Alten Münze Berlin von innen mit auf.',
          bits: ['eigene Rave-Brand', 'bis zu 300 Gäste', 'Türmanagement', 'Alte Münze Berlin'],
        },
        {
          no: '02',
          label: 'Szene aus erster Hand',
          title: 'Music & Youth Culture',
          body: 'Ich bewege mich seit Jahren zwischen Stuttgart und Berlin in der Rave-, Späti- und Clubszene. In Stuttgart habe ich eine eigene Seite zur lokalen Szene gepflegt. Ich bin selbst das Publikum, das ihr erreichen wollt, und baue es nebenbei mit auf.',
          bits: ['Stuttgart & Berlin', 'lokale Szene', 'junges Publikum'],
        },
        {
          no: '03',
          label: 'Aus Idee wird Auftritt',
          title: 'Brand & Visual System',
          body: 'Für meine Projekte mache ich die visuelle Identität komplett selbst: Logo, Plakat, Merch, Social. Gearbeitet wird in Photoshop, Lightroom, InDesign und Illustrator. Fotografieren mit der Leica M6 gehört seit Jahren fest dazu.',
          bits: ['visuelle Identität', 'Adobe Creative Cloud', 'Leica M6'],
        },
        {
          no: '04',
          label: 'Wenn der Plan im Live-Betrieb kippt',
          title: 'Operations unter Druck',
          body: 'Beim Malteser Hilfsdienst habe ich die Schichten einer Geflüchteten-Ambulanz koordiniert: internationale Teams, viele Stakeholder, klare Dienstpläne. In der Alten Münze und auf eigenen Eventnächten heißt das, ruhig zu bleiben, wenn etwas schiefläuft, und mehrere Sachen gleichzeitig im Griff zu haben.',
          bits: ['Schichten koordiniert', 'internationale Teams', 'mehrere Projekte parallel'],
        },
        {
          no: '05',
          label: 'Was nach dem Event bleibt',
          title: 'Analyse & Struktur',
          body: 'B.Sc. Wirtschaftswissenschaften in Hohenheim, mit einer Thesis zu kulturellen Faktoren in der Start-up-Finanzierung. Excel nutze ich richtig: für Abrechnungen, Auswertungen und eigene Finanzanalysen. Ich kann also ein Briefing schreiben, nach einer Kampagne die Zahlen lesen und daraus eine Präsentation bauen.',
          bits: ['B.Sc. Wirtschaftswissenschaften', 'Excel auf Arbeitsniveau', 'Briefing und Auswertung'],
        },
        {
          no: '06',
          label: 'Ich baue mir, was mir fehlt',
          title: 'Tools & App-Entwicklung',
          body: 'Wenn mich ein Problem nervt, baue ich mir eine Lösung. Eine Fitness-App nach meiner Knie-Geschichte, einen Bot für die Berliner Wohnungssuche. Nicht aus dem Lehrbuch, sondern weil ich Dinge lieber löse als sie auszuhalten.',
          bits: ['App-Entwicklung', 'Automatisierung', 'pragmatisch'],
        },
      ],
    },
    marketing: {
      eyebrow: 'Und das Marketing?',
      h2: 'Eine eigene Marke aufzubauen ist nichts anderes.',
      paragraphs: [
        'Klar, ich habe keine fünf Jahre Agentur hinter mir. Dafür sechs Jahre, in denen ich genau das gemacht habe, worum es geht: eine Idee finden, ein Publikum verstehen und daraus einen Moment bauen, der hängen bleibt.',
        'Eine Marke vom Logo über Social bis zur vollen Tanzfläche zu bringen, ist Marketing. Nur dass ich es selbst getragen habe, statt es zu präsentieren.',
      ],
      points: [
        {
          title: 'Ich bin die Zielgruppe.',
          text: 'Was in der jungen Musikkultur funktioniert, spüre ich aus dem Bauch, statt es in einer Studie nachzulesen.',
        },
        {
          title: 'Ich denke in Projekten.',
          text: 'Idee, Briefing, Partner, Timing, Launch und danach die Zahlen. Genau der Ablauf, der hinter einer Aktivierung steht.',
        },
        {
          title: 'Ich lerne schnell.',
          text: 'Was ich nicht kann, bringe ich mir bei. Eine Marke, eine App, eine Bar: alles selbst angefangen und durchgezogen.',
        },
      ],
    },
    projekte: {
      eyebrow: 'Selbst gebaut',
      h2: 'Wenn mich etwas nervt, baue ich mir eine Lösung.',
      lead: 'Ich bin auch Entwickler. Nicht aus dem Lehrbuch, sondern weil ich Probleme lieber löse, als sie auszuhalten. Zwei Beispiele, die gerade laufen.',
      botTag: 'Wohnungsbot',
      botMeta: 'Berlin · Automatisierung',
      botTitle: 'Die Wohnungssuche, automatisiert.',
      botBody: 'Die Berliner Wohnungssuche ist Chaos. Also habe ich mir einen Bot gebaut, der die Portale rund um die Uhr scannt, Schrott aussortiert und mir nur die passenden Treffer meldet.',
      fitTag: 'Fitness-App',
      fitMeta: 'Eigenentwicklung',
      fitTitle: 'Eine App gegen Schmerzen und Fehlstellungen.',
      fitBody: 'Angefangen hat es bei meinem eigenen Knie, für das kein Standard-Plan gepasst hat. Daraus wurde eine App für alle, die mit Schmerzen oder Fehlstellungen trainieren: Sie passt Übungen und Belastung gezielt an das jeweilige Problem an und arbeitet daran, es zu therapieren.',
    },
    bot: {
      status: 'wohnungsbot · läuft',
      scanned: 'gescannt',
      matches: 'Treffer',
      locale: 'de-DE',
      events: [
        { type: 'scan', text: 'Scanne ImmoScout, Kleinanzeigen, WG-Gesucht …' },
        { type: 'skip', text: '3-Zi · Charlottenburg · 1.840 € → zu teuer' },
        { type: 'hit', text: '2-Zi · Wedding · 720 € · 58 m² → passt, Mail raus' },
        { type: 'skip', text: '1-Zi · Lichtenberg · Provision → verworfen' },
        { type: 'scan', text: 'Dublettencheck: 12 Anzeigen zusammengeführt' },
        { type: 'skip', text: 'WG-Zimmer · Neukölln · befristet → verworfen' },
        { type: 'hit', text: '2,5-Zi · Pankow · 890 € · 64 m² → passt, Mail raus' },
        { type: 'scan', text: 'Nächster Durchlauf in 30 s …' },
      ],
    },
    fit: {
      today: 'Heute',
      subtitle: 'Gezielt gegen Schmerzen',
      exercises: [
        ['Mobility', 100],
        ['Beinpresse leicht', 80],
        ['Stabilität', 45],
      ],
      button: 'Einheit starten',
    },
    stationen: {
      eyebrow: 'Stationen',
      h2: 'Wo das herkommt.',
      educationLabel: 'Bildung',
      timeline: [
        {
          date: 'Aktuell',
          role: 'Alte Münze Berlin · Dienstleitung',
          body: 'Als Dienstleitung im laufenden Eventbetrieb einer der zentralen Berliner Locations: Ich führe das Serviceteam durch den Abend, koordiniere Aufbau und Gewerke und sehe von innen, wie eine Aktivierung aufgebaut wird, läuft und wieder abgebaut wird.',
          now: true,
        },
        {
          date: 'seit 2021',
          role: 'Eigene Brand- & Eventprojekte (Tunnel Vision, Pixelstrom)',
          body: 'Eigene Rave-Brand mit Nächten bis zu 300 Gästen: Konzept, Visual Identity, Bar, Türmanagement und Abrechnung. Dazu Pixelstrom als eigener Design- und Portfolio-Brand.',
        },
        {
          date: '09.2023 – 08.2024',
          role: 'Flow&In Späti, Stuttgart · Werkstudent',
          body: 'Verkauf, Eventplanung und Online-Präsenz. Eventreihen bis 200 Gäste mitgetragen, den Social-Media-Auftritt mit aufgebaut.',
        },
        {
          date: '04.2021 – 09.2022',
          role: 'Malteser Hilfsdienst e.V. · Operative Koordination',
          body: 'Schichtkoordination einer Geflüchteten-Ambulanz: internationale Teams, Stakeholder-Abstimmung und Dienstpläne unter Druck.',
        },
        {
          date: '05.2020 – 04.2021',
          role: 'Universum Club, Stuttgart · Bar & Eventplanung',
          body: 'Bar und Eventplanung in einem Stuttgarter Club, mitten im laufenden Betrieb.',
        },
        {
          date: '2018 & 2019',
          role: 'Mercedes-Benz Sindelfingen · Ferienbeschäftigung',
          body: 'Produktion und Logistik in zwei Sommern.',
        },
        {
          date: '2016',
          role: 'LPP (RESERVED), Stuttgart · Vertrieb',
          body: 'Retail-Kundenkontakt im Verkauf.',
        },
      ],
      education: [
        {
          feature: true,
          date: '2018 – 2023',
          title: 'B.Sc. Wirtschaftswissenschaften',
          place: 'Universität Hohenheim',
          body: 'Bachelor-Thesis zu kulturellen und sozialen Faktoren in der Start-up-Finanzierung im Ländervergleich. Während des Studiums u. a. Praktikum bei der Verbraucherzentrale BW (Datenmanagement).',
        },
        {
          date: '2008 – 2016',
          title: 'Allgemeine Hochschulreife',
          place: 'Max-Eyth-Schule, Stuttgart',
        },
      ],
    },
    kontakt: {
      eyebrow: 'Kontakt',
      h2a: 'Reden wir über die Räume,',
      h2b: 'die Berlin 2026 braucht.',
      lead: 'Die Stelle ist auf ein Jahr. Ich bin in Berlin, schnell erreichbar und sofort dabei.',
      cta: 'Mail an mich',
      copyright: '© 2026 Oliver Jaensch, Berlin',
      meta: 'Jaenscholi@gmail.com',
      impressum: 'Impressum',
    },
  },
};

function Eyebrow({ children, light = false }) {
  return <span className={`section-eyebrow ${light ? '!text-white/55' : ''}`}>{children}</span>;
}

function ProfileBlock({ label, items }) {
  return (
    <div>
      <p className="mono text-xs uppercase tracking-wide text-white/45">{label}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/85"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function WohnungsbotDemo({ bot }) {
  const [log, setLog] = useState(() => bot.events.slice(0, 4).map((e, i) => ({ ...e, id: i })));
  const [scanned, setScanned] = useState(1284);
  const [hits, setHits] = useState(7);
  const idx = useRef(4);
  const uid = useRef(4);

  useEffect(() => {
    const timer = setInterval(() => {
      const ev = bot.events[idx.current % bot.events.length];
      idx.current += 1;
      uid.current += 1;
      const id = uid.current;
      setLog((prev) => [...prev.slice(-4), { ...ev, id }]);
      setScanned((s) => s + Math.floor(Math.random() * 5) + 1);
      if (ev.type === 'hit') setHits((h) => h + 1);
    }, 1700);
    return () => clearInterval(timer);
  }, [bot]);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0f1115]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="status-dot animate-pulse" />
          <span className="mono text-xs text-white/70">{bot.status}</span>
        </div>
        <span className="mono text-[11px] text-white/40">
          {scanned.toLocaleString(bot.locale)} {bot.scanned} · {hits} {bot.matches}
        </span>
      </div>
      <div className="space-y-2 px-4 py-4">
        {log.map((line) => (
          <div key={line.id} className="animate-slide-up mono text-[12px] leading-relaxed">
            <span className="text-white/30">$ </span>
            <span
              className={
                line.type === 'hit'
                  ? 'text-sig-coral'
                  : line.type === 'skip'
                  ? 'text-white/40'
                  : 'text-white/70'
              }
            >
              {line.text}
            </span>
          </div>
        ))}
        <div className="mono text-[12px] text-white/30">
          <span className="text-white/30">$ </span>
          <span className="cursor-blink">▋</span>
        </div>
      </div>
    </div>
  );
}

function FitnessMockup({ fit }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[220px] rounded-[28px] border border-hairline bg-white p-3 shadow-[0_24px_60px_-30px_rgba(24,29,38,0.45)]">
        <div className="rounded-[20px] bg-surface-soft p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink">{fit.today}</span>
            <span className="status-dot" />
          </div>
          <p className="mt-3 text-[11px] text-muted-ink">{fit.subtitle}</p>
          <div className="mt-4 space-y-3">
            {fit.exercises.map(([name, pct]) => (
              <div key={name}>
                <div className="flex justify-between text-[11px] text-ink">
                  <span>{name}</span>
                  <span className="text-muted-ink">{pct}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-surface-strong">
                  <div className="h-full rounded-full bg-sig-coral" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-ink p-3 text-center">
            <span className="text-[11px] font-semibold text-white">{fit.button}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpotifyApplication() {
  const [lang, setLang] = useState('en');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-canvas font-body text-ink">
      <NavBar lang={lang} setLang={setLang} items={t.nav} contactLabel={t.contact} />
      <main>
        {/* HERO */}
        <section id="top" className="relative overflow-hidden bg-canvas pt-32">
          <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.72fr] lg:items-end">
              <div>
                <Eyebrow>{t.hero.eyebrow}</Eyebrow>
                <h1 className="max-w-3xl text-[40px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[56px] lg:text-[68px]">
                  {t.hero.h1a}
                  <span className="block text-sig-coral">{t.hero.h1b}</span>
                </h1>
                <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-body">{t.hero.lead}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#marketing" className="btn-primary">
                    {t.hero.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a href="mailto:Jaenscholi@gmail.com" className="btn-secondary">
                    {t.hero.ctaContact} <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-hairline bg-surface-soft p-6">
                <p className="mono text-xs uppercase tracking-wide text-sig-coral">{t.hero.factsTitle}</p>
                <dl className="mt-5 divide-y divide-hairline">
                  {t.hero.facts.map(([title, text]) => (
                    <div key={title} className="flex gap-4 py-3.5 first:pt-0 last:pb-0">
                      <dt className="w-28 shrink-0 text-sm font-semibold text-ink">{title}</dt>
                      <dd className="text-sm leading-relaxed text-body">{text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* POSITION */}
        <section id="position" className="section-gap bg-[#191414] text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <Eyebrow light>{t.position.eyebrow}</Eyebrow>
                <h2 className="text-[32px] font-medium leading-tight text-white sm:text-[40px]">
                  {t.position.h2a}
                  <span className="block italic text-sig-coral">{t.position.h2b}</span>
                </h2>
                <div className="mt-8 max-w-xl space-y-5 text-[16px] leading-relaxed text-white/72">
                  {t.position.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:p-8">
                <ProfileBlock label={t.position.interestsLabel} items={t.position.interests} />
                <div className="my-6 h-px bg-white/10" />
                <ProfileBlock label={t.position.skillsLabel} items={t.position.skills} />
                <div className="my-6 h-px bg-white/10" />
                <p className="mono text-xs uppercase tracking-wide text-white/45">
                  {t.position.languagesLabel}
                </p>
                <ul className="mt-4 space-y-2">
                  {t.position.languages.map(([lng, level]) => (
                    <li key={lng} className="flex items-baseline justify-between text-sm">
                      <span className="font-medium text-white">{lng}</span>
                      <span className="text-white/50">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BEWEISE */}
        <section id="beweise" className="section-gap bg-canvas">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <Eyebrow>{t.beweise.eyebrow}</Eyebrow>
              <h2 className="display-lg">{t.beweise.h2}</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-body">{t.beweise.lead}</p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {t.beweise.panels.map((panel) => (
                <article key={panel.no} className="flex flex-col bg-canvas p-7">
                  <div className="flex items-baseline justify-between">
                    <span className="mono text-sm text-sig-coral">{panel.no}</span>
                    <span className="text-right text-xs font-medium uppercase tracking-wide text-muted-ink">
                      {panel.label}
                    </span>
                  </div>
                  <h3 className="mt-5 title-sm text-ink">{panel.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{panel.body}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {panel.bits.map((bit) => (
                      <span
                        key={bit}
                        className="rounded-full bg-surface-soft px-3 py-1 text-xs font-medium text-ink"
                      >
                        {bit}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MARKETING */}
        <section id="marketing" className="section-gap bg-surface-soft">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <Eyebrow>{t.marketing.eyebrow}</Eyebrow>
                <h2 className="display-lg max-w-md">{t.marketing.h2}</h2>
                <div className="mt-6 max-w-md space-y-4 text-[16px] leading-relaxed text-body">
                  {t.marketing.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {t.marketing.points.map((point) => (
                  <div key={point.title} className="rounded-2xl border border-hairline bg-canvas p-6">
                    <h3 className="title-sm text-ink">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJEKTE */}
        <section id="projekte" className="section-gap bg-canvas">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <Eyebrow>{t.projekte.eyebrow}</Eyebrow>
              <h2 className="display-lg">{t.projekte.h2}</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-body">{t.projekte.lead}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="flex flex-col rounded-2xl border border-hairline bg-surface-soft p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
                    {t.projekte.botTag}
                  </span>
                  <span className="mono text-xs text-muted-ink">{t.projekte.botMeta}</span>
                </div>
                <h3 className="mt-5 title-sm text-ink">{t.projekte.botTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{t.projekte.botBody}</p>
                <div className="mt-6">
                  <WohnungsbotDemo key={lang} bot={t.bot} />
                </div>
              </article>

              <article className="flex flex-col rounded-2xl border border-hairline bg-surface-soft p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
                    {t.projekte.fitTag}
                  </span>
                  <span className="mono text-xs text-muted-ink">{t.projekte.fitMeta}</span>
                </div>
                <h3 className="mt-5 title-sm text-ink">{t.projekte.fitTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{t.projekte.fitBody}</p>
                <div className="mt-auto pt-6">
                  <FitnessMockup fit={t.fit} />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* STATIONEN */}
        <section id="stationen" className="section-gap bg-surface-soft">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Eyebrow>{t.stationen.eyebrow}</Eyebrow>
            <h2 className="display-lg max-w-3xl">{t.stationen.h2}</h2>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
              <ol className="relative border-l border-hairline pl-8">
                {t.stationen.timeline.map((item) => (
                  <li key={item.role} className="relative pb-9 last:pb-0">
                    <span
                      className={`absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                        item.now ? 'border-sig-coral bg-sig-coral' : 'border-[#9297a0] bg-canvas'
                      }`}
                    />
                    <p className="mono text-xs text-muted-ink">{item.date}</p>
                    <h3 className="mt-1.5 title-sm text-ink">{item.role}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-body">{item.body}</p>
                  </li>
                ))}
              </ol>

              <div>
                <p className="mono text-xs uppercase tracking-wide text-muted-ink">
                  {t.stationen.educationLabel}
                </p>
                <div className="mt-4 space-y-4">
                  {t.stationen.education.map((edu) => (
                    <div
                      key={edu.title}
                      className={`rounded-2xl border border-hairline p-6 ${
                        edu.feature ? 'bg-sig-cream' : 'bg-canvas'
                      }`}
                    >
                      <p className="mono text-xs text-muted-ink">{edu.date}</p>
                      <h3 className="mt-2 title-sm text-ink">{edu.title}</h3>
                      <p className="mt-1 text-sm font-medium text-body">{edu.place}</p>
                      {edu.body && <p className="mt-3 text-sm leading-relaxed text-body">{edu.body}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="section-gap bg-canvas">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="rounded-3xl bg-[#191414] p-8 text-white lg:p-14">
              <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <Eyebrow light>{t.kontakt.eyebrow}</Eyebrow>
                  <h2 className="max-w-2xl text-[32px] font-medium leading-tight text-white sm:text-[42px]">
                    {t.kontakt.h2a}
                    <span className="block italic text-sig-coral">{t.kontakt.h2b}</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">{t.kontakt.lead}</p>
                </div>
                <a href="mailto:Jaenscholi@gmail.com" className="btn-secondary-on-dark">
                  {t.kontakt.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 text-sm text-muted-ink">
              <p className="font-medium text-ink">{t.kontakt.copyright}</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <LangToggle lang={lang} setLang={setLang} />
                <span>{t.kontakt.meta}</span>
                <span aria-hidden="true">·</span>
                <Link to="/impressum" className="underline hover:text-ink">
                  {t.kontakt.impressum}
                </Link>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
