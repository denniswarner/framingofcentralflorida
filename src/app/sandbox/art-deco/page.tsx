import Link from "next/link";
import { Cinzel, Cormorant_Garamond } from "next/font/google";

const cinzel = Cinzel({
  variable: "--font-deco-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-deco-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const decoStyles = {
  // Cream + near-black + antique gold + soft emerald accent
  "--background": "#F4ECD8",
  "--foreground": "#0C0B08",
  "--muted": "#E9DEC0",
  "--muted-foreground": "#5A4F36",
  "--primary": "#0C0B08",
  "--primary-foreground": "#F4ECD8",
  "--accent": "#B89456",
  "--accent-deep": "#8B6B3A",
  "--border": "#B89456",
} as React.CSSProperties;

function DecoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M16 28 L8 8" />
      <path d="M16 28 L12 6" />
      <path d="M16 28 L16 4" />
      <path d="M16 28 L20 6" />
      <path d="M16 28 L24 8" />
      <line x1="3" y1="28" x2="29" y2="28" />
      <line x1="5" y1="30" x2="27" y2="30" />
      <circle cx="16" cy="28" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DecoChevronBand({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M0 12 L12 4 L24 12 L36 4 L48 12 L60 4 L72 12 L84 4 L96 12 L108 4 L120 12 L132 4 L144 12 L156 4 L168 12 L180 4 L192 12 L204 4 L216 12 L228 4 L240 12" />
      <path
        d="M0 8 L12 0 L24 8 L36 0 L48 8 L60 0 L72 8 L84 0 L96 8 L108 0 L120 8 L132 0 L144 8 L156 0 L168 8 L180 0 L192 8 L204 0 L216 8 L228 0 L240 8"
        opacity="0.45"
      />
    </svg>
  );
}

function DecoOrnament() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center gap-5 py-12"
      style={{ color: "var(--accent)" }}
    >
      <span
        className="h-px w-20 sm:w-32"
        style={{ background: "currentColor" }}
      />
      <DecoMark className="h-8 w-8" />
      <span
        className="h-px w-20 sm:w-32"
        style={{ background: "currentColor" }}
      />
    </div>
  );
}

export default function ArtDecoVariantPage() {
  return (
    <div
      className={`${cinzel.variable} ${cormorant.variable}`}
      style={{
        ...decoStyles,
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-deco-body), Georgia, serif",
        fontWeight: 400,
      }}
    >
      <main>
        {/* Header — vertical proportions, centered, gold rules */}
        <header
          className="border-b"
          style={{ borderColor: "var(--accent)" }}
        >
          <div className="container mx-auto flex flex-col items-center gap-3 px-4 py-7 text-center">
            <DecoChevronBand className="h-3 w-40" />
            <span
              className="text-2xl"
              style={{
                fontFamily: "var(--font-deco-heading), serif",
                fontWeight: 600,
                letterSpacing: "0.18em",
              }}
            >
              FRAMING OF CENTRAL FLORIDA
            </span>
            <span
              className="text-[0.65rem] uppercase tracking-[0.5em]"
              style={{ color: "var(--accent-deep)" }}
            >
              Established 1993 · Orlando
            </span>
            <nav className="mt-3 flex flex-wrap items-center justify-center gap-7 text-xs uppercase tracking-[0.35em]">
              {["Home", "About", "Framing Styles", "Gallery", "Contact"].map(
                (label) => (
                  <span key={label} style={{ color: "var(--foreground)" }}>
                    {label}
                  </span>
                ),
              )}
            </nav>
          </div>
        </header>

        {/* Hero — frame within frame, vertical proportions, sunburst accent */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div
            className="mx-auto max-w-4xl border p-3"
            style={{ borderColor: "var(--accent)" }}
          >
            <div
              className="border px-6 py-20 text-center sm:px-12 sm:py-28"
              style={{ borderColor: "var(--accent)" }}
            >
              <DecoMark
                className="mx-auto h-12 w-12"
                />
              <p
                className="mt-6 text-[0.65rem] uppercase tracking-[0.5em]"
                style={{ color: "var(--accent-deep)" }}
              >
                Custom Framing · Museum Quality
              </p>
              <h1
                className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "var(--font-deco-heading), serif",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                CRAFTED
                <br />
                <span style={{ color: "var(--accent)" }}>WITH</span>
                <br />
                CARE
              </h1>
              <div className="mx-auto mt-8 flex justify-center">
                <DecoChevronBand className="h-3 w-32" />
              </div>
              <p
                className="mx-auto mt-8 max-w-xl text-lg leading-relaxed"
                style={{
                  color: "var(--muted-foreground)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Boutique custom framing for art, photography, and
                memorabilia. Archival materials, museum-quality
                craftsmanship, and the patient attention every piece
                deserves.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-9 py-4 text-xs uppercase transition-opacity hover:opacity-90"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontFamily: "var(--font-deco-heading), serif",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    border: "1px solid var(--accent)",
                  }}
                >
                  Visit Our Shop
                </a>
                <Link
                  href="/gallery"
                  className="text-xs uppercase underline-offset-4 hover:underline"
                  style={{
                    color: "var(--foreground)",
                    fontFamily: "var(--font-deco-heading), serif",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                  }}
                >
                  View our work →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <DecoOrnament />

        {/* Why us — symmetric, centered */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-center">
            <p
              className="text-[0.65rem] uppercase tracking-[0.5em]"
              style={{ color: "var(--accent-deep)" }}
            >
              Why us
            </p>
            <h2
              className="text-3xl leading-tight sm:text-4xl"
              style={{
                fontFamily: "var(--font-deco-heading), serif",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
            >
              FORM · STRUCTURE · PRESERVATION
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              With decades of experience and a passion for preservation,
              we combine traditional craftsmanship with modern techniques.
              Whether it&apos;s a family heirloom or a contemporary print,
              we treat every piece as if it were our own.
            </p>
            <div
              className="mx-auto inline-block border px-10 py-8"
              style={{ borderColor: "var(--accent)" }}
            >
              <p
                className="text-xl italic leading-snug"
                style={{
                  fontFamily: "var(--font-deco-body), serif",
                  fontWeight: 500,
                }}
              >
                We only use archival-quality materials and
                <br />
                UV-protective glass to preserve your valuable artwork.
              </p>
            </div>
          </div>
        </section>

        <DecoOrnament />

        {/* At a glance — frame-within-frame, gold rules between stats */}
        <section className="container mx-auto px-4 py-20">
          <div
            className="mx-auto max-w-5xl border p-3"
            style={{ borderColor: "var(--accent)" }}
          >
            <div
              className="border px-6 py-16 sm:px-12"
              style={{ borderColor: "var(--accent)" }}
            >
              <p
                className="text-center text-3xl sm:text-4xl"
                style={{
                  fontFamily: "var(--font-deco-heading), serif",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                FROM MEMORIES <span style={{ color: "var(--accent)" }}>·</span>{" "}
                TO MASTERPIECES
              </p>
              <div className="mx-auto mt-12 grid max-w-4xl gap-0 sm:grid-cols-3">
                {[
                  { stat: "33+", label: "Years serving Central Florida" },
                  { stat: "37+", label: "Years of framing experience" },
                  { stat: "Top 3", label: "Frame shops in Orlando" },
                ].map(({ stat, label }, i) => (
                  <div
                    key={label}
                    className={`space-y-3 px-6 py-6 text-center ${
                      i > 0 ? "sm:border-l" : ""
                    }`}
                    style={{
                      borderColor: "var(--accent)",
                    }}
                  >
                    <p
                      className="text-6xl"
                      style={{
                        fontFamily: "var(--font-deco-heading), serif",
                        fontWeight: 600,
                        color: "var(--accent)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {stat}
                    </p>
                    <p
                      className="text-[0.65rem] uppercase tracking-[0.3em]"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <DecoOrnament />

        {/* Closing CTA — black backdrop, gold ornament, single sunburst */}
        <section
          style={{
            background: "var(--foreground)",
            color: "var(--background)",
          }}
        >
          <div className="container mx-auto px-4 py-24 text-center">
            <span style={{ color: "var(--accent)" }}>
              <DecoMark className="mx-auto h-14 w-14" />
            </span>
            <h2
              className="mt-8 text-4xl leading-tight sm:text-5xl"
              style={{
                fontFamily: "var(--font-deco-heading), serif",
                fontWeight: 500,
                letterSpacing: "0.06em",
              }}
            >
              COME IN FOR A
              <br />
              <span style={{ color: "var(--accent)" }}>FREE CONSULTATION</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed opacity-80">
              1820 N. Orange Ave · Orlando, FL 32804
              <br />
              Mon–Fri 10 AM–5 PM · Sat 10 AM–3 PM
            </p>
            <div className="mt-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 text-xs uppercase transition-opacity hover:opacity-90"
                style={{
                  background: "var(--accent)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-deco-heading), serif",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
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
          style={{ borderColor: "var(--accent)" }}
        >
          <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-12 text-center">
            <DecoChevronBand className="h-3 w-32" />
            <span
              className="text-sm"
              style={{
                fontFamily: "var(--font-deco-heading), serif",
                fontWeight: 600,
                letterSpacing: "0.25em",
              }}
            >
              FRAMING OF CENTRAL FLORIDA
            </span>
            <p
              className="text-[0.65rem] uppercase tracking-[0.4em]"
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
