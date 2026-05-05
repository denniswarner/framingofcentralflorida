import Link from "next/link";
import { Cormorant_Garamond, Lora } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-sullivan-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lora = Lora({
  variable: "--font-sullivan-body",
  subsets: ["latin"],
});

const sullivanStyles = {
  // Stone, oxidized green-black, aged brass — Sullivan's material palette
  "--background": "#E8E2D5",
  "--foreground": "#1A2317",
  "--muted": "#DDD5C4",
  "--muted-foreground": "#5C5446",
  "--primary": "#6B5337",
  "--primary-foreground": "#E8E2D5",
  "--accent": "#A47842",
  "--border": "#C7BFA9",
} as React.CSSProperties;

function SullivanMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <line x1="0" y1="4" x2="48" y2="4" />
      <line x1="0" y1="28" x2="48" y2="28" />
      <path d="M4 16 C 8 6, 12 6, 16 16 C 20 26, 24 26, 28 16 C 32 6, 36 6, 40 16 C 42 21, 44 21, 46 18" />
      <circle cx="6" cy="16" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="42" cy="16" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SullivanBand() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center py-12"
      style={{ color: "var(--accent)" }}
    >
      <SullivanMark className="h-8 w-72" />
    </div>
  );
}

export default function SullivanVariantPage() {
  return (
    <div
      className={`${cormorant.variable} ${lora.variable}`}
      style={{
        ...sullivanStyles,
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-sullivan-body), Georgia, serif",
      }}
    >
      <main>
        {/* Local header */}
        <header
          className="border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-6 text-center">
            <span
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: "var(--accent)" }}
            >
              Est. 1993 · Orlando
            </span>
            <span
              className="text-2xl"
              style={{
                fontFamily: "var(--font-sullivan-heading), serif",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              Framing of Central Florida
            </span>
            <SullivanMark className="mt-1 h-4 w-32" />
            <nav className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em]">
              <span style={{ color: "var(--muted-foreground)" }}>Home</span>
              <span style={{ color: "var(--muted-foreground)" }}>About</span>
              <span style={{ color: "var(--muted-foreground)" }}>
                Framing Styles
              </span>
              <span style={{ color: "var(--muted-foreground)" }}>Gallery</span>
              <span style={{ color: "var(--muted-foreground)" }}>Contact</span>
            </nav>
          </div>
        </header>

        {/* Hero — vertical proportions, centered, ornamental */}
        <section className="container mx-auto px-4 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center space-y-10">
            <SullivanMark className="mx-auto h-6 w-48" />
            <h1
              className="text-5xl leading-[1.1] sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "var(--font-sullivan-heading), serif",
                fontWeight: 500,
                letterSpacing: "-0.005em",
              }}
            >
              Custom framing,
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--accent)",
                  fontWeight: 400,
                }}
              >
                crafted with care.
              </em>
            </h1>
            <p
              className="mx-auto max-w-xl text-lg leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Boutique custom framing for art, photography, and
              memorabilia. Archival materials, museum-quality
              craftsmanship, and the patient attention every piece
              deserves.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border px-8 py-3 text-sm uppercase tracking-[0.25em] transition-opacity hover:opacity-90"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  borderColor: "var(--primary)",
                  fontFamily: "var(--font-sullivan-heading), serif",
                  fontWeight: 500,
                }}
              >
                Visit Our Shop
              </a>
              <Link
                href="/gallery"
                className="text-sm uppercase tracking-[0.25em] underline-offset-4 hover:underline"
                style={{ color: "var(--foreground)" }}
              >
                View our work →
              </Link>
            </div>
          </div>
        </section>

        <SullivanBand />

        {/* Why choose us — centered, ornament-bracketed */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <p
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: "var(--accent)" }}
            >
              Why Us
            </p>
            <h2
              className="text-3xl leading-tight sm:text-4xl"
              style={{
                fontFamily: "var(--font-sullivan-heading), serif",
                fontWeight: 500,
              }}
            >
              The frame is built for the work it holds.
            </h2>
            <p className="text-lg leading-relaxed">
              With decades of experience and a passion for preservation,
              we combine traditional craftsmanship with modern techniques.
              Whether it&apos;s a family heirloom or a contemporary print,
              we treat every piece as if it were our own.
            </p>
            <p
              className="text-xl italic"
              style={{
                fontFamily: "var(--font-sullivan-heading), serif",
                color: "var(--accent)",
                fontWeight: 400,
              }}
            >
              We only use archival-quality materials and UV-protective
              glass
              <br />
              to preserve your valuable artwork.
            </p>
          </div>
        </section>

        <SullivanBand />

        {/* At a glance — ornamental card */}
        <section className="container mx-auto px-4 py-20">
          <div
            className="relative mx-auto max-w-5xl px-6 py-20 sm:px-16"
            style={{
              background: "var(--muted)",
              borderTop: "1px solid var(--accent)",
              borderBottom: "1px solid var(--accent)",
            }}
          >
            <SullivanMark
              className="absolute left-1/2 top-0 h-4 w-32 -translate-x-1/2 -translate-y-1/2"
              />
            <p
              className="text-center text-3xl italic sm:text-4xl"
              style={{
                fontFamily: "var(--font-sullivan-heading), serif",
              }}
            >
              &ldquo;From Memories to Masterpieces&rdquo;
            </p>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {[
                { stat: "33+", label: "Years serving Central Florida" },
                { stat: "37+", label: "Years of framing experience" },
                { stat: "Top 3", label: "Frame shops in Orlando" },
              ].map(({ stat, label }) => (
                <div key={label} className="space-y-2 text-center">
                  <p
                    className="text-5xl"
                    style={{
                      fontFamily: "var(--font-sullivan-heading), serif",
                      fontWeight: 500,
                      color: "var(--accent)",
                    }}
                  >
                    {stat}
                  </p>
                  <p
                    className="text-sm uppercase tracking-[0.25em]"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <SullivanMark
              className="absolute bottom-0 left-1/2 h-4 w-32 -translate-x-1/2 translate-y-1/2"
              />
          </div>
        </section>

        <SullivanBand />

        {/* Closing CTA */}
        <section
          style={{
            background: "var(--foreground)",
            color: "var(--background)",
          }}
        >
          <div className="container mx-auto px-4 py-24 text-center">
            <SullivanMark
              className="mx-auto h-6 w-48"
              />
            <h2
              className="mt-6 text-4xl leading-tight sm:text-5xl"
              style={{
                fontFamily: "var(--font-sullivan-heading), serif",
                fontWeight: 500,
              }}
            >
              Come in for a free consultation.
            </h2>
            <p className="mt-6 text-base leading-relaxed opacity-80">
              1820 N. Orange Ave · Orlando, FL 32804
              <br />
              Mon–Fri 10 AM–5 PM · Sat 10 AM–3 PM
            </p>
            <div className="mt-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.25em] transition-opacity hover:opacity-90"
                style={{
                  background: "var(--accent)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-sullivan-heading), serif",
                  fontWeight: 500,
                }}
              >
                Visit Our Shop
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="container mx-auto px-4 py-12 text-center">
            <SullivanMark
              className="mx-auto mb-4 h-4 w-32"
              />
            <span
              className="block text-sm uppercase tracking-[0.3em]"
              style={{
                fontFamily: "var(--font-sullivan-heading), serif",
              }}
            >
              Framing of Central Florida
            </span>
            <p
              className="mt-3 text-xs uppercase tracking-widest"
              style={{ color: "var(--muted-foreground)" }}
            >
              © {new Date().getFullYear()} · Sandbox preview · v0.2
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
