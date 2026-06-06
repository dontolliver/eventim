import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Boxes, PenTool, Zap, Bot, MessageSquare, Sparkles } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import NavBar from '../components/foodtracks/NavBar';
import LangToggle from '../components/foodtracks/LangToggle';

const content = {
  en: {
    nav: [
      { label: 'Fit', href: '#fit' },
      { label: 'Skill', href: '#skill' },
      { label: 'Projects', href: '#projekte' },
      { label: 'Trends', href: '#community' },
      { label: 'Track record', href: '#stationen' },
    ],
    contact: 'Contact',
    resume: 'CV',
    hero: {
      eyebrow: 'Influencer Marketing · Content · Brand Growth',
      h1a: 'Turning creators and content',
      h1b: 'into brand growth.',
      lead: 'Part creator instinct, part analyst, part builder: influencer collabs, briefings, content and the e-commerce side, from landing page to KPI.',
      split: '50% creator instinct. 50% numbers and execution. Influencer marketing lives exactly in that overlap.',
      ctaPrimary: 'Why I fit Kess',
      ctaContact: 'Say hi',
      factsTitle: 'In 8 seconds',
      facts: [
        ['Berlin', 'On the ground in Berlin, inside the scene and lifestyle bubble Kess speaks to.'],
        ['6 years', 'Built my own brands from zero: concept, social, content, community.'],
        ['Creator side', 'I’ve been the host and creator myself. I know how a collab gets negotiated.'],
        ['Self-built', 'Landing pages, tools, tracking. I can build the e-commerce side, not just run it.'],
      ],
    },
    fit: {
      eyebrow: 'Why Kess',
      h2a: 'I like brands that are',
      h2b: 'still being built.',
      lead: 'Kess is in an exciting growth phase. That’s exactly where I want to help shape how the brand is seen.',
      points: [
        'Beauty marketing is newer terrain for me, but the logic behind it (aesthetics, community, lifestyle, desirability) has been home for years.',
        'I’ve negotiated with artists and acts for my own events: who fits, what it costs, what we need from each other. The logic maps directly onto creator collabs.',
        'I don’t just run the e-commerce side, I can build it: landing pages and sets in the webshop.',
        'I think in numbers as much as in aesthetics: economics degree, Excel, KPIs.',
      ],
      interestsLabel: 'Interests',
      skillsLabel: 'Skills',
      languagesLabel: 'Languages',
      interests: ['Social & creator culture', 'Beauty & lifestyle brands', 'Design & content', 'Photography (Leica M6)'],
      skills: [
        'Brand building & community',
        'Briefings & campaign concepts',
        'Content & visual (Photoshop, Adobe CC)',
        'Landing pages & webshop (e-commerce)',
        'Analytics, KPIs & Excel',
        'Social trends & sourcing',
      ],
      languages: [
        ['German', 'native'],
        ['English', 'fluent'],
        ['French', 'basics'],
      ],
    },
    beweise: {
      eyebrow: 'Proof',
      h2: 'Less talk. Here’s the actual work.',
      lead: 'Mapped straight onto what the job needs, from creators to KPIs.',
      panels: [
        {
          no: '01',
          label: 'Built my own audience',
          title: 'Community & social from zero',
          body: 'With Tunnel Vision I built my own brand: concept, social presence, content and a community of up to 300 people, from the first post to a packed night.',
          bits: ['own brand', 'social & content', 'up to 300 people'],
        },
        {
          no: '02',
          label: 'Negotiated with talent before',
          title: 'Talent acquisition & deals',
          body: 'For my own event nights I contacted, negotiated with and briefed artists and acts: who fits the brand, what it costs, what we need from them. The logic of a creator collab is the same.',
          bits: ['talent acquisition', 'negotiation', 'briefings'],
        },
        {
          no: '03',
          label: 'Idea becomes content',
          title: 'Brand & visual content',
          body: 'For my projects I do the full visual identity myself: logo, poster, social, photography. Built in Photoshop, Lightroom, InDesign and Illustrator, shot on the Leica M6.',
          bits: ['Photoshop / Adobe CC', 'content', 'Leica M6'],
        },
        {
          no: '04',
          label: 'Precise under pressure',
          title: 'Briefings & coordination',
          body: 'At Malteser Hilfsdienst I coordinated the shifts of a refugee clinic: international teams, many stakeholders, exact rosters. Accuracy and clear briefs under pressure are second nature.',
          bits: ['coordination', 'accuracy', 'stakeholders'],
        },
        {
          no: '05',
          label: 'I build the e-commerce side',
          title: 'Landing pages & tools',
          body: 'When something’s missing, I build it: websites, landing pages, apps and tracking tools. The webshop side of this job is something I can actually build, not just maintain.',
          bits: ['landing pages', 'front-end', 'automation'],
        },
        {
          no: '06',
          label: 'I read the result',
          title: 'KPIs, Excel & reporting',
          body: 'B.Sc. in Economics at Hohenheim, thesis on cultural factors in start-up financing, plus a data-management internship. I read the numbers after a campaign and turn them into clean reporting.',
          bits: ['B.Sc. Economics', 'Excel', 'reporting'],
        },
      ],
    },
    skill: {
      eyebrow: 'My special skill',
      h2: 'Turning creators and content into real brand growth.',
      paragraphs: [
        'I don’t stop at the idea. I write the brief, build the landing page and read the numbers afterwards.',
        'One half of me reads people, trends and aesthetics. The other half tracks performance and builds the digital layer underneath.',
      ],
      caps: [
        ['Run influencer collabs', 'Acquisition, negotiation and management, fully independent.'],
        ['Write briefs & concepts', 'Clear briefings and campaigns creators actually get.'],
        ['Build landing pages & sets', 'Not just maintain the webshop side. Build it.'],
        ['Source trends & creators', 'Find new profiles before everyone else has them.'],
        ['Read KPIs & act on them', 'Track performance and turn it into next steps.'],
        ['Content & visual', 'Photoshop, image and tone. Aesthetics meets function.'],
      ],
    },
    projekte: {
      eyebrow: 'Projects',
      h2: 'I can build the digital side of the job, not just run it.',
      lead: 'Three things I built myself. They show exactly the skills the job needs on the e-commerce and tracking side.',
      wander: {
        tag: 'Wander',
        meta: 'Web · landing page · front-end',
        title: 'A visual map of everywhere you’ve been.',
        body: 'Wander turns travel memories into a visual world-progress experience. It tracks where you’ve been, maps your personal travel history and shows how much of the world you’ve already explored, with an interactive globe, animated routes and playful progress stats.',
        shows: ['Landing-page build', 'UX / interface', 'Visual storytelling', 'Front-end'],
        showsLabel: 'What it shows',
        showsLine: 'This is how I’d build landing pages and sets for a webshop.',
        statsLabel: 'World explored',
        stats: [
          ['28', 'countries'],
          ['64', 'cities'],
          ['5', 'continents'],
        ],
        pinLabel: 'visited',
      },
      botTag: 'Apartment bot',
      botMeta: 'Automation · tracking',
      botTitle: 'Search, filter and track. Automated.',
      botBody: 'The Berlin apartment hunt is chaos. So I built a bot that scans the portals around the clock, filters out the junk and only flags the matches that fit.',
      botShows: 'Shows: the same logic I’d use to source creator profiles and track campaign KPIs.',
      fitTag: 'Fitness app',
      fitMeta: 'In-house build',
      fitTitle: 'An app against pain and misalignments.',
      fitBody: 'It started with my own knee, which no standard plan fit. That became an app that tailors exercises and load to each specific problem and works to treat it.',
      fitShows: 'Shows: product thinking and UX, concepts that feel right.',
    },
    community: {
      eyebrow: 'Trend sense',
      h2a: 'I find trends and creators',
      h2b: 'before everyone else has them.',
      points: [
        'I live on the platforms and notice a format or sound while it’s still small.',
        'I look at fit and tone, not just follower count.',
        'I’d rather find the right creator than the biggest one.',
        'I can tell when a collab will feel authentic and when it won’t.',
      ],
      detailsLabel: 'What I watch in creators and trends',
      details: ['Trend sounds', 'Formats', 'Engagement', 'Comments', 'Tone', 'Authenticity', 'Brand fit', 'Reach vs. fit', 'Timing'],
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
    fit_demo: {
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
          body: 'Service lead in the live operation of one of Berlin’s central venues: I run the team through the night, coordinate setup and trades, and read rooms and crowds in real time.',
          now: true,
        },
        {
          date: 'since 2021',
          role: 'Own brand & event projects (Tunnel Vision, Pixelstrom)',
          body: 'My own brand with nights up to 300 guests: concept, visual identity, social, content and the whole community around it. Plus Pixelstrom as my design and portfolio brand.',
        },
        {
          date: '09.2023 – 08.2024',
          role: 'Flow&In Späti, Stuttgart · working student',
          body: 'Sales, event planning and online presence. I built up the social-media presence and carried event series of up to 200 guests.',
        },
        {
          date: '04.2021 – 09.2022',
          role: 'Malteser Hilfsdienst e.V. · operational coordination',
          body: 'Shift coordination for a refugee clinic: international teams, stakeholder alignment and exact rosters under pressure.',
        },
        {
          date: '05.2020 – 04.2021',
          role: 'Universum Club, Stuttgart · bar & event planning',
          body: 'Bar and event planning in a Stuttgart club, right in the middle of live operations.',
        },
        {
          date: '2016 – 2019',
          role: 'Mercedes-Benz & LPP (RESERVED) · early jobs',
          body: 'Production, logistics and retail customer contact across school and student years.',
        },
      ],
      education: [
        {
          feature: true,
          date: '2018 – 2023',
          title: 'B.Sc. Economics',
          place: 'University of Hohenheim',
          body: 'Bachelor’s thesis on cultural and social factors in start-up financing across countries. During my studies, a data-management internship at Verbraucherzentrale BW, among others.',
        },
        {
          date: '2008 – 2016',
          title: 'Abitur (university entrance)',
          place: 'Max-Eyth-Schule, Stuttgart',
        },
      ],
    },
    kontakt: {
      eyebrow: 'Let’s talk',
      h2a: 'Let’s make Kess',
      h2b: 'impossible to miss.',
      lead: '50% creator instinct, 50% numbers. That’s exactly how I work. I’m in Berlin and ready to start.',
      cta: 'Email me',
      copyright: '© 2026 Oliver Jaensch · Berlin',
      meta: 'Jaenscholi@gmail.com',
      impressum: 'Imprint',
    },
  },

  de: {
    nav: [
      { label: 'Fit', href: '#fit' },
      { label: 'Skill', href: '#skill' },
      { label: 'Projekte', href: '#projekte' },
      { label: 'Trends', href: '#community' },
      { label: 'Stationen', href: '#stationen' },
    ],
    contact: 'Kontakt',
    resume: 'Lebenslauf',
    hero: {
      eyebrow: 'Influencer Marketing · Content · Brand Growth',
      h1a: 'Aus Creatorn und Content',
      h1b: 'mache ich Markenwachstum.',
      lead: 'Halb Creator-Gespür, halb Analyst, halb Builder: Influencer-Kooperationen, Briefings, Content und die E-Commerce-Seite, von der Landing-Page bis zur KPI.',
      split: '50% Creator-Gespür. 50% Zahlen und Umsetzung. Genau in dieser Schnittstelle lebt Influencer Marketing.',
      ctaPrimary: 'Warum ich zu Kess passe',
      ctaContact: 'Schreib mir',
      factsTitle: 'In 8 Sekunden',
      facts: [
        ['Berlin', 'Vor Ort in Berlin, mitten in der Szene und Lifestyle-Bubble, die Kess anspricht.'],
        ['6 Jahre', 'Eigene Brands von null aufgebaut: Konzept, Social, Content, Community.'],
        ['Talent gebucht', 'Für meine eigenen Nights habe ich Acts kontaktiert, verhandelt und gebrieft — dieselbe Logik wie bei Creator-Kooperationen.'],
        ['Selbst gebaut', 'Landing-Pages, Tools, Tracking: die E-Commerce-Seite kann ich bauen, nicht nur bespielen.'],
      ],
    },
    fit: {
      eyebrow: 'Warum Kess',
      h2a: 'Ich mag Marken, die gerade',
      h2b: 'erst entstehen.',
      lead: 'Kess ist in einer spannenden Wachstumsphase. Genau da will ich mitgestalten, wie die Marke gesehen wird.',
      points: [
        'Beauty-Marketing ist für mich neueres Terrain, aber die Logik dahinter (Ästhetik, Community, Lifestyle, Begehrlichkeit) ist seit Jahren mein Zuhause.',
        'Für meine eigenen Event-Nights habe ich Acts kontaktiert, Preise verhandelt und gebrieft. Wer passt zur Brand, was kostet das, was brauchen wir voneinander — die Logik ist dieselbe wie bei Creator-Kooperationen.',
        'Ich bespiele die E-Commerce-Seite nicht nur, ich kann sie bauen: Landing-Pages und Sets im Webshop.',
        'Ich denke in Zahlen genauso wie in Ästhetik: Wirtschaftsstudium, Excel, KPIs.',
      ],
      interestsLabel: 'Interessen',
      skillsLabel: 'Skills',
      languagesLabel: 'Sprachen',
      interests: ['Social & Creator-Kultur', 'Beauty & Lifestyle-Brands', 'Design & Content', 'Fotografie (Leica M6)'],
      skills: [
        'Brand Building & Community',
        'Briefings & Kampagnenkonzepte',
        'Content & Visual (Photoshop, Adobe CC)',
        'Landing-Pages & Webshop (E-Commerce)',
        'Analyse, KPIs & Excel',
        'Social-Media-Trends & Sourcing',
      ],
      languages: [
        ['Deutsch', 'Muttersprache'],
        ['Englisch', 'fließend'],
        ['Französisch', 'Grundkenntnisse'],
      ],
    },
    beweise: {
      eyebrow: 'Beweise',
      h2: 'Weniger reden. Hier ist die Arbeit.',
      lead: 'Direkt auf das gemappt, was der Job braucht: von Creatorn bis KPIs.',
      panels: [
        {
          no: '01',
          label: 'Eigene Audience aufgebaut',
          title: 'Community & Social von null',
          body: 'Mit Tunnel Vision habe ich eine eigene Brand aufgebaut: Konzept, Social-Auftritt, Content und eine Community bis zu 300 Menschen, vom ersten Post bis zur vollen Nacht.',
          bits: ['eigene Brand', 'Social & Content', 'bis 300 Menschen'],
        },
        {
          no: '02',
          label: 'Talent verhandelt und gebrieft',
          title: 'Akquise & Deals',
          body: 'Für meine eigenen Nights habe ich Acts kontaktiert, Preise verhandelt und genau gebrieft, was wir voneinander brauchen. Noch keine Influencer — aber dieselbe Grundlogik: wer passt, was kostet das, was kommt dabei raus.',
          bits: ['Talent-Akquise', 'Preisverhandlung', 'Briefings'],
        },
        {
          no: '03',
          label: 'Aus Idee wird Content',
          title: 'Brand & Visual Content',
          body: 'Für meine Projekte mache ich die visuelle Identität komplett selbst: Logo, Plakat, Social, Fotografie. Gearbeitet in Photoshop, Lightroom, InDesign und Illustrator, fotografiert mit der Leica M6.',
          bits: ['Photoshop / Adobe CC', 'Content', 'Leica M6'],
        },
        {
          no: '04',
          label: 'Genau, auch unter Druck',
          title: 'Briefings & Koordination',
          body: 'Beim Malteser Hilfsdienst habe ich die Schichten einer Geflüchteten-Ambulanz koordiniert: internationale Teams, viele Stakeholder, exakte Dienstpläne. Genauigkeit und klare Briefings unter Druck sind für mich normal.',
          bits: ['Koordination', 'Genauigkeit', 'Stakeholder'],
        },
        {
          no: '05',
          label: 'Ich baue die E-Commerce-Seite',
          title: 'Landing-Pages & Tools',
          body: 'Wenn etwas fehlt, baue ich es: Websites, Landing-Pages, Apps und Tracking-Tools. Die Webshop-Seite dieses Jobs kann ich wirklich bauen, nicht nur pflegen.',
          bits: ['Landing-Pages', 'Frontend', 'Automatisierung'],
        },
        {
          no: '06',
          label: 'Ich lese das Ergebnis',
          title: 'KPIs, Excel & Reporting',
          body: 'B.Sc. Wirtschaftswissenschaften in Hohenheim, Thesis zur Start-up-Finanzierung, dazu ein Praktikum im Datenmanagement. Ich lese nach einer Kampagne die Zahlen und mache daraus sauberes Reporting.',
          bits: ['B.Sc. Wirtschaft', 'Excel', 'Reporting'],
        },
      ],
    },
    skill: {
      eyebrow: 'Mein Special Skill',
      h2: 'Aus Creatorn und Content echtes Markenwachstum machen.',
      paragraphs: [
        'Ich höre nicht bei der Idee auf. Ich schreibe das Briefing, baue die Landing-Page und lese danach die Zahlen.',
        'Eine Hälfte von mir liest Menschen, Trends und Ästhetik. Die andere trackt Performance und baut die digitale Ebene darunter.',
      ],
      caps: [
        ['Influencer-Kooperationen steuern', 'Akquise, Verhandlung und Betreuung, eigenständig.'],
        ['Briefings & Konzepte schreiben', 'Klare Briefings und Kampagnen, die Creator verstehen.'],
        ['Landing-Pages & Sets bauen', 'Die Webshop-Seite nicht nur pflegen. Bauen.'],
        ['Trends & Creator sourcen', 'Neue Profile finden, bevor sie alle haben.'],
        ['KPIs lesen & ableiten', 'Performance tracken und in nächste Schritte übersetzen.'],
        ['Content & Visual', 'Photoshop, Bild und Ton. Ästhetik trifft Funktion.'],
      ],
    },
    projekte: {
      eyebrow: 'Projekte',
      h2: 'Ich kann die digitale Seite des Jobs bauen, nicht nur bespielen.',
      lead: 'Drei Eigenbauten. Sie zeigen genau die Fähigkeiten, die der Job auf der E-Commerce- und Tracking-Seite braucht.',
      wander: {
        tag: 'Wander',
        meta: 'Web · Landing-Page · Frontend',
        title: 'Eine visuelle Karte von überall, wo du warst.',
        body: 'Wander macht Reiseerinnerungen sichtbar. Die App trackt, wo man auf der Welt gewesen ist, zeigt besuchte Orte auf einer interaktiven Karte und berechnet spielerisch, wie viel Prozent der Welt man bereits gesehen hat, mit animierten Routen und Progress-Stats.',
        shows: ['Landing-Page-Bau', 'UX / Interface', 'Visual Storytelling', 'Frontend'],
        showsLabel: 'Was es zeigt',
        showsLine: 'Genau so baue ich auch Landing-Pages und Sets für einen Webshop.',
        statsLabel: 'der Welt entdeckt',
        stats: [
          ['28', 'Länder'],
          ['64', 'Städte'],
          ['5', 'Kontinente'],
        ],
        pinLabel: 'besucht',
      },
      botTag: 'Wohnungsbot',
      botMeta: 'Automatisierung · Tracking',
      botTitle: 'Suchen, filtern, tracken. Automatisiert.',
      botBody: 'Die Berliner Wohnungssuche ist Chaos. Also habe ich mir einen Bot gebaut, der die Portale rund um die Uhr scannt, Schrott aussortiert und mir nur die passenden Treffer meldet.',
      botShows: 'Zeigt: dieselbe Logik, mit der ich Creator-Profile source und Kampagnen-KPIs tracke.',
      fitTag: 'Fitness-App',
      fitMeta: 'Eigenentwicklung',
      fitTitle: 'Eine App gegen Schmerzen und Fehlstellungen.',
      fitBody: 'Angefangen hat es bei meinem eigenen Knie, für das kein Standard-Plan gepasst hat. Daraus wurde eine App, die Übungen und Belastung gezielt an das jeweilige Problem anpasst.',
      fitShows: 'Zeigt: Produktdenken und UX, Konzepte, die sich gut anfühlen.',
    },
    community: {
      eyebrow: 'Trend-Gespür',
      h2a: 'Ich finde Trends und Creator,',
      h2b: 'bevor sie alle haben.',
      points: [
        'Ich lebe auf den Plattformen und merke ein Format oder einen Sound, solange er noch klein ist.',
        'Ich schaue auf Fit und Tonalität, nicht nur auf die Follower-Zahl.',
        'Ich finde lieber den richtigen Creator als den größten.',
        'Ich spüre, wann eine Kooperation authentisch wirkt und wann nicht.',
      ],
      detailsLabel: 'Worauf ich bei Creatorn und Trends achte',
      details: ['Trend-Sounds', 'Formate', 'Engagement', 'Kommentare', 'Tonalität', 'Authentizität', 'Brand-Fit', 'Reichweite vs. Fit', 'Timing'],
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
    fit_demo: {
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
          body: 'Dienstleitung im laufenden Betrieb einer der zentralen Berliner Locations: Ich führe das Team durch den Abend, koordiniere Aufbau und Gewerke und lese Räume und Crowd in Echtzeit.',
          now: true,
        },
        {
          date: 'seit 2021',
          role: 'Eigene Brand- & Eventprojekte (Tunnel Vision, Pixelstrom)',
          body: 'Eigene Brand mit Nächten bis zu 300 Gästen: Konzept, Visual Identity, Social, Content und die ganze Community drumherum. Dazu Pixelstrom als Design- und Portfolio-Brand.',
        },
        {
          date: '09.2023 – 08.2024',
          role: 'Flow&In Späti, Stuttgart · Werkstudent',
          body: 'Verkauf, Eventplanung und Online-Präsenz. Ich habe den Social-Media-Auftritt aufgebaut und Eventreihen bis 200 Gäste mitgetragen.',
        },
        {
          date: '04.2021 – 09.2022',
          role: 'Malteser Hilfsdienst e.V. · Operative Koordination',
          body: 'Schichtkoordination einer Geflüchteten-Ambulanz: internationale Teams, Stakeholder-Abstimmung und exakte Dienstpläne unter Druck.',
        },
        {
          date: '05.2020 – 04.2021',
          role: 'Universum Club, Stuttgart · Bar & Eventplanung',
          body: 'Bar und Eventplanung in einem Stuttgarter Club, mitten im laufenden Betrieb.',
        },
        {
          date: '2016 – 2019',
          role: 'Mercedes-Benz & LPP (RESERVED) · erste Jobs',
          body: 'Produktion, Logistik und Retail-Kundenkontakt während Schul- und Studienzeit.',
        },
      ],
      education: [
        {
          feature: true,
          date: '2018 – 2023',
          title: 'B.Sc. Wirtschaftswissenschaften',
          place: 'Universität Hohenheim',
          body: 'Bachelor-Thesis zu kulturellen und sozialen Faktoren in der Start-up-Finanzierung im Ländervergleich. Während des Studiums u. a. Praktikum im Datenmanagement bei der Verbraucherzentrale BW.',
        },
        {
          date: '2008 – 2016',
          title: 'Allgemeine Hochschulreife',
          place: 'Max-Eyth-Schule, Stuttgart',
        },
      ],
    },
    kontakt: {
      eyebrow: 'Reden wir',
      h2a: 'Lass uns Kess',
      h2b: 'unübersehbar machen.',
      lead: '50% Creator-Gespür, 50% Zahlen. Genau so arbeite ich. Ich bin in Berlin und sofort dabei.',
      cta: 'Mail an mich',
      copyright: '© 2026 Oliver Jaensch · Berlin',
      meta: 'Jaenscholi@gmail.com',
      impressum: 'Impressum',
    },
  },
};

function Eyebrow({ children, light = false }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="h-2 w-2 rounded-[2px] bg-sig-coral" />
      <span
        className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${
          light ? 'text-white/55' : 'text-muted-ink'
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
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

/* ---------- Wander globe ---------- */

const GLOBE_PINS = [
  { x: 132, y: 128, name: 'Berlin' },
  { x: 96, y: 182, name: 'Lisboa' },
  { x: 286, y: 156, name: 'Tokyo' },
  { x: 300, y: 236, name: 'Bali' },
  { x: 214, y: 296, name: 'Cape Town' },
  { x: 176, y: 96, name: 'Reykjavík' },
];

const GLOBE_ROUTES = [
  [0, 1],
  [0, 2],
  [1, 4],
  [2, 3],
  [0, 5],
];

function arcPath(a, b, curve = 0.28) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = mx - 200;
  const dy = my - 200;
  const len = Math.hypot(dx, dy) || 1;
  const span = Math.hypot(b.x - a.x, b.y - a.y);
  const cx = mx + (dx / len) * curve * span;
  const cy = my + (dy / len) * curve * span;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

function Counter({ to, decimals = 1, suffix = '%' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function WanderGlobe({ progress = 12.8, statsLabel, pinLabel }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const ringR = 178;
  const ringC = 2 * Math.PI * ringR;
  const meridianRx = [112, 66, 20];
  const latitudeRy = [112, 66, 20];

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[440px]">
      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(181,110,132,0.22),transparent_62%)] blur-xl" />
      <svg viewBox="0 0 400 400" className="h-auto w-full">
        {/* progress ring */}
        <circle cx="200" cy="200" r={ringR} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        <motion.circle
          cx="200"
          cy="200"
          r={ringR}
          fill="none"
          stroke="var(--sig-coral)"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(-90 200 200)"
          strokeDasharray={ringC}
          initial={{ strokeDashoffset: ringC }}
          animate={inView ? { strokeDashoffset: ringC * (1 - progress / 100) } : {}}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* globe wireframe */}
        <circle cx="200" cy="200" r="150" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
        <motion.g
          style={{ transformOrigin: '200px 200px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 64, ease: 'linear', repeat: Infinity }}
        >
          {meridianRx.map((rx) => (
            <ellipse key={`m${rx}`} cx="200" cy="200" rx={rx} ry="150" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          ))}
          <line x1="200" y1="50" x2="200" y2="350" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </motion.g>
        {latitudeRy.map((ry) => (
          <ellipse key={`l${ry}`} cx="200" cy="200" rx="150" ry={ry} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        ))}
        <line x1="50" y1="200" x2="350" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {/* flight routes */}
        {GLOBE_ROUTES.map(([ai, bi], i) => {
          const d = arcPath(GLOBE_PINS[ai], GLOBE_PINS[bi]);
          const routeId = `route-${ai}-${bi}`;
          const stroke = i % 2 === 0 ? 'var(--sig-blue)' : 'var(--sig-acid)';
          return (
            <g key={routeId}>
              <motion.path
                id={routeId}
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.65"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.5 + i * 0.25, ease: 'easeInOut' }}
              />
              <circle r="2.6" fill={stroke}>
                <animateMotion dur={`${4 + i}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} rotate="auto">
                  <mpath href={`#${routeId}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}

        {/* pins */}
        {GLOBE_PINS.map((p) => (
          <g key={p.name}>
            <circle cx={p.x} cy={p.y} r="4" fill="var(--sig-coral)" className="animate-pin-pulse" />
            <circle cx={p.x} cy={p.y} r="3.5" fill="var(--sig-coral)" stroke="#14110e" strokeWidth="1.2" />
          </g>
        ))}
      </svg>

      {/* center stat overlay */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[40px] font-semibold leading-none text-white sm:text-[48px]">
          <Counter to={progress} />
        </span>
        <span className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/55">{statsLabel}</span>
        <span className="mono mt-1 text-[10px] text-sig-acid">{GLOBE_PINS.length} {pinLabel}</span>
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
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0b09]">
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
                  ? 'text-sig-acid'
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
      <div className="w-full max-w-[220px] rounded-[28px] border border-hairline bg-canvas p-3 shadow-[0_24px_60px_-30px_rgba(24,18,12,0.5)]">
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

const CAP_ICONS = [Boxes, PenTool, Zap, Bot, MessageSquare, Sparkles];

export default function KessApplication() {
  const [lang, setLang] = useState('de');
  const t = content[lang];
  const w = t.projekte.wander;

  return (
    <div className="min-h-screen bg-canvas font-body text-ink">
      <NavBar lang={lang} setLang={setLang} items={t.nav} contactLabel={t.contact} resumeLabel={t.resume} />
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
                <p className="mt-6 max-w-xl border-l-2 border-sig-coral pl-4 text-[16px] font-medium leading-relaxed text-ink">
                  {t.hero.split}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#fit" className="btn-primary">
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

        {/* FIT */}
        <section id="fit" className="section-gap bg-noir text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <Eyebrow light>{t.fit.eyebrow}</Eyebrow>
                <h2 className="text-[32px] font-medium leading-tight text-white sm:text-[40px]">
                  {t.fit.h2a}
                  <span className="block italic text-sig-coral">{t.fit.h2b}</span>
                </h2>
                <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/75">{t.fit.lead}</p>
                <ul className="mt-8 max-w-xl space-y-4">
                  {t.fit.points.map((point, i) => (
                    <li key={point.slice(0, 16)} className="flex gap-4">
                      <span className="mono mt-0.5 text-sm text-sig-coral">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[16px] leading-relaxed text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:p-8">
                <ProfileBlock label={t.fit.interestsLabel} items={t.fit.interests} />
                <div className="my-6 h-px bg-white/10" />
                <ProfileBlock label={t.fit.skillsLabel} items={t.fit.skills} />
                <div className="my-6 h-px bg-white/10" />
                <p className="mono text-xs uppercase tracking-wide text-white/45">{t.fit.languagesLabel}</p>
                <ul className="mt-4 space-y-2">
                  {t.fit.languages.map(([lng, level]) => (
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

        {/* PROOF */}
        <section id="proof" className="section-gap bg-canvas">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <Eyebrow>{t.beweise.eyebrow}</Eyebrow>
              <h2 className="display-lg">{t.beweise.h2}</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-body">{t.beweise.lead}</p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {t.beweise.panels.map((panel) => (
                <article key={panel.no} className="flex flex-col bg-canvas p-7 transition-colors hover:bg-surface-soft">
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
                      <span key={bit} className="rounded-full bg-surface-soft px-3 py-1 text-xs font-medium text-ink">
                        {bit}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIAL SKILL */}
        <section id="skill" className="section-gap bg-surface-soft">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <Eyebrow>{t.skill.eyebrow}</Eyebrow>
                <h2 className="display-lg max-w-md">{t.skill.h2}</h2>
                <div className="mt-6 max-w-md space-y-4 text-[16px] leading-relaxed text-body">
                  {t.skill.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {t.skill.caps.map(([title, text], i) => {
                  const Icon = CAP_ICONS[i % CAP_ICONS.length];
                  return (
                    <Reveal key={title} delay={i * 0.05}>
                      <div className="h-full rounded-2xl border border-hairline bg-canvas p-6">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sig-coral/12 text-sig-coral">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 title-sm text-ink">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-body">{text}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projekte" className="section-gap bg-canvas">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <Eyebrow>{t.projekte.eyebrow}</Eyebrow>
              <h2 className="display-lg">{t.projekte.h2}</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-body">{t.projekte.lead}</p>
            </div>

            {/* Wander — featured */}
            <Reveal className="mt-12">
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-noir text-white">
                <div className="grid items-center gap-8 p-7 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:p-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-sig-coral px-3 py-1 text-xs font-semibold text-white">
                        {w.tag}
                      </span>
                      <span className="mono text-xs text-white/50">{w.meta}</span>
                    </div>
                    <h3 className="mt-5 text-[26px] font-medium leading-tight text-white sm:text-[32px]">{w.title}</h3>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">{w.body}</p>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {w.stats.map(([num, label]) => (
                        <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
                          <p className="text-[22px] font-semibold leading-none text-sig-acid">{num}</p>
                          <p className="mt-1 text-[11px] text-white/55">{label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {w.shows.map((s) => (
                        <span key={s} className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/80">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 border-l-2 border-sig-coral pl-4">
                      <p className="mono text-[10px] uppercase tracking-[0.18em] text-white/45">{w.showsLabel}</p>
                      <p className="mt-1 text-sm italic text-white/85">“{w.showsLine}”</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <WanderGlobe statsLabel={w.statsLabel} pinLabel={w.pinLabel} />
                  </div>
                </div>
              </article>
            </Reveal>

            {/* bot + fitness */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <article className="flex h-full flex-col rounded-2xl border border-hairline bg-surface-soft p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">{t.projekte.botTag}</span>
                    <span className="mono text-xs text-muted-ink">{t.projekte.botMeta}</span>
                  </div>
                  <h3 className="mt-5 title-sm text-ink">{t.projekte.botTitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{t.projekte.botBody}</p>
                  <div className="mt-6">
                    <WohnungsbotDemo key={lang} bot={t.bot} />
                  </div>
                  <p className="mt-5 text-xs italic leading-relaxed text-muted-ink">{t.projekte.botShows}</p>
                </article>
              </Reveal>

              <Reveal delay={0.08}>
                <article className="flex h-full flex-col rounded-2xl border border-hairline bg-surface-soft p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">{t.projekte.fitTag}</span>
                    <span className="mono text-xs text-muted-ink">{t.projekte.fitMeta}</span>
                  </div>
                  <h3 className="mt-5 title-sm text-ink">{t.projekte.fitTitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{t.projekte.fitBody}</p>
                  <div className="pt-6">
                    <FitnessMockup fit={t.fit_demo} />
                  </div>
                  <p className="mt-auto pt-5 text-xs italic leading-relaxed text-muted-ink">{t.projekte.fitShows}</p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="section-gap bg-surface-soft">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <Eyebrow>{t.community.eyebrow}</Eyebrow>
                <h2 className="display-lg">
                  {t.community.h2a}
                  <span className="block text-sig-coral">{t.community.h2b}</span>
                </h2>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {t.community.points.map((point) => (
                  <li key={point.slice(0, 16)} className="rounded-2xl border border-hairline bg-canvas p-5 text-[15px] leading-relaxed text-body">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-noir py-6">
              <p className="mb-4 px-6 mono text-[10px] uppercase tracking-[0.2em] text-white/45">{t.community.detailsLabel}</p>
              <div className="flex w-max animate-ticker gap-3 px-6">
                {[...t.community.details, ...t.community.details].map((d, i) => (
                  <span
                    key={`${d}-${i}`}
                    className="whitespace-nowrap rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white/80"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRACK RECORD */}
        <section id="stationen" className="section-gap bg-canvas">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Eyebrow>{t.stationen.eyebrow}</Eyebrow>
            <h2 className="display-lg max-w-3xl">{t.stationen.h2}</h2>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
              <ol className="relative border-l border-hairline pl-8">
                {t.stationen.timeline.map((item) => (
                  <li key={item.role} className="relative pb-9 last:pb-0">
                    <span
                      className={`absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                        item.now ? 'border-sig-coral bg-sig-coral' : 'border-[#b7ab94] bg-canvas'
                      }`}
                    />
                    <p className="mono text-xs text-muted-ink">{item.date}</p>
                    <h3 className="mt-1.5 title-sm text-ink">{item.role}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-body">{item.body}</p>
                  </li>
                ))}
              </ol>

              <div>
                <p className="mono text-xs uppercase tracking-wide text-muted-ink">{t.stationen.educationLabel}</p>
                <div className="mt-4 space-y-4">
                  {t.stationen.education.map((edu) => (
                    <div
                      key={edu.title}
                      className={`rounded-2xl border border-hairline p-6 ${edu.feature ? 'bg-sig-cream' : 'bg-surface-soft'}`}
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

        {/* CONTACT */}
        <section id="kontakt" className="section-gap bg-surface-soft">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-noir p-8 text-white lg:p-14">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(181,110,132,0.28),transparent_70%)] blur-2xl" />
              <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
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
