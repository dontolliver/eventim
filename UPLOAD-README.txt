FoodTrack — Upload-Bundle
=========================

Was ist drin: Der komplette Quellcode der Seite (ohne node_modules, ohne alten Build).
Dateien sind soweit fertig, dass sie deploy-bar sind.

============================================================
WAS HOCHLADEN — abhängig vom Hoster:
============================================================

A) Vercel / Netlify / Cloudflare Pages (empfohlen, easy)
   1. Diesen kompletten Ordner als Repo / Drag-and-Drop hochladen.
   2. Build-Befehl:        npm run build
   3. Output-Verzeichnis:  dist
   4. Node-Version:        18 oder 20
   Fertig. Plattform baut selbst.

B) Klassischer Webspace (FTP/SFTP, statisch)
   Dann muss vorher lokal gebaut werden:
   1. Im Ordner Terminal öffnen
   2. npm install
   3. npm run build
   4. Den ENTSTEHENDEN Ordner "dist/" auf den Webspace hochladen
      (NICHT diesen ganzen Source-Ordner — nur dist/ Inhalt).

============================================================
WICHTIGE DATEIEN (zur Info, alle automatisch genutzt):
============================================================
- index.html             Einstiegspunkt
- src/                   gesamter React/JSX-Code, Komponenten, CSS
- package.json           Dependencies + Build-Scripts
- vite.config.js         Build-Konfiguration
- tailwind.config.js     Styling-Konfiguration
- postcss.config.js      CSS-Pipeline

============================================================
NICHT mit hochladen / wird nicht gebraucht:
============================================================
- node_modules/   (zu groß, wird via npm install neu erzeugt)
- dist/           (wird beim Build neu erzeugt)
- .DS_Store       (macOS-Müll)
- base44/         (interner Hilfs-Ordner — kann drin bleiben, schadet aber nicht zu löschen)
