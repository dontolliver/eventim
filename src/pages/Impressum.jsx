import { Link } from 'react-router-dom';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-canvas">
      <main className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <Link to="/" className="mono text-sm" style={{ color: 'var(--muted)' }}>
          ← Zurück
        </Link>

        <h1 className="display-lg text-ink mt-8">Impressum</h1>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-body">
          <section>
            <h2 className="label-md text-ink mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Oliver Jaensch<br />
              Alt-Lietzow 22<br />
              10587 Berlin
            </p>
          </section>

          <section>
            <h2 className="label-md text-ink mb-2">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:Jaenscholi@gmail.com" className="text-ink underline">Jaenscholi@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="label-md text-ink mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Oliver Jaensch<br />
              Alt-Lietzow 22<br />
              10587 Berlin
            </p>
          </section>

          <section>
            <h2 className="label-md text-ink mb-2">Haftung für Inhalte</h2>
            <p>
              Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="label-md text-ink mb-2">Haftung für Links</h2>
            <p>
              Diese Seite enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte ich keinen
              Einfluss habe. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="label-md text-ink mb-2">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
