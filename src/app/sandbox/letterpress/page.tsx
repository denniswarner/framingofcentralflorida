import Link from "next/link";
import { Playfair_Display, Crimson_Text } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-letterpress-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const crimson = Crimson_Text({
  variable: "--font-letterpress-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const letterpressStyles = {
  // Kraft paper, deep ink, red ink accent
  "--background": "#F1E9D5",
  "--foreground": "#1F1A14",
  "--muted": "#E2D6B5",
  "--muted-foreground": "#5A4F3A",
  "--accent": "#8B2C1F",
  "--rule": "#1F1A14",
} as React.CSSProperties;

function Fleuron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M28 8 Q 22 2, 16 8 Q 10 14, 4 8" />
      <path d="M28 8 Q 34 2, 40 8 Q 46 14, 52 8" />
      <circle cx="28" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="4" cy="8" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="52" cy="8" r="0.75" fill="currentColor" stroke="none" />
      <line x1="28" y1="3" x2="28" y2="6" />
      <line x1="28" y1="10" x2="28" y2="13" />
    </svg>
  );
}

function Ornament() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center gap-4 py-12"
      style={{ color: "var(--accent)" }}
    >
      <span
        className="h-px w-16 sm:w-24"
        style={{ background: "currentColor" }}
      />
      <Fleuron className="h-4 w-32" />
      <span
        className="h-px w-16 sm:w-24"
        style={{ background: "currentColor" }}
      />
    </div>
  );
}

export default function LetterpressVariantPage() {
  return (
    <div
      className={`${playfair.variable} ${crimson.variable}`}
      style={{
        ...letterpressStyles,
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-letterpress-body), Georgia, serif",
        fontWeight: 400,
        // Subtle paper grain via radial gradient
        backgroundImage:
          "radial-gradient(circle at 20% 30%, rgba(31,26,20,0.025) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(31,26,20,0.02) 0%, transparent 50%)",
      }}
    >
      <main>
        {/* Header — centered, ornamental */}
        <header
          style={{ borderBottom: "1px solid var(--rule)" }}
        >
          <div className="container mx-auto flex flex-col items-center gap-3 px-4 py-8 text-center">
            <Fleuron className="h-3 w-32" />
            <span
              className="text-3xl"
              style={{
                fontFamily: "var(--font-letterpress-heading), serif",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              Framing of Central Florida
            </span>
            <span
              className="text-[0.65rem] uppercase tracking-[0.4em]"
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-letterpress-body), serif",
                fontWeight: 600,
              }}
            >
              ✦ Established Anno 1993 ✦ Orlando, Florida ✦
            </span>
            <nav className="mt-3 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em]">
              {["Home", "About", "Framing Styles", "Gallery", "Contact"].map(
                (label) => (
                  <span
                    key={label}
                    style={{
                      color: "var(--foreground)",
                      fontFamily: "var(--font-letterpress-body), serif",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </span>
                ),
              )}
            </nav>
          </div>
        </header>

        {/* Hero — broadside-poster style, drop cap, ornamental rules */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs uppercase tracking-[0.5em]"
              style={{ color: "var(--accent)", fontWeight: 600 }}
            >
              ✦ Specimen of Custom Framing ✦
            </p>
            <h1
              className="mt-8 text-6xl leading-[0.95] sm:text-7xl lg:text-8xl"
              style={{
                fontFamily: "var(--font-letterpress-heading), serif",
                fontWeight: 900,
                letterSpacing: "-0.015em",
              }}
            >
              Crafted
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--accent)",
                }}
              >
                with care.
              </em>
            </h1>
            <Fleuron className="mx-auto mt-10 h-4 w-40" />
            <p
              className="mx-auto mt-10 max-w-xl text-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-letterpress-body), serif",
                fontStyle: "italic",
              }}
            >
              <span
                className="float-left mr-3 leading-none"
                style={{
                  fontFamily: "var(--font-letterpress-heading), serif",
                  fontSize: "4.5rem",
                  fontWeight: 700,
                  fontStyle: "normal",
                  color: "var(--accent)",
                  marginTop: "0.05em",
                  marginBottom: "-0.1em",
                }}
              >
                B
              </span>
              outique custom framing for art, photography, and
              memorabilia. Archival materials, museum-quality
              craftsmanship, and the patient attention every piece
              deserves.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-3.5 text-xs uppercase transition-opacity hover:opacity-90"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                  fontFamily: "var(--font-letterpress-heading), serif",
                  fontWeight: 700,
                  letterSpacing: "0.3em",
                  border: "2px double var(--accent)",
                }}
              >
                Visit Our Shop
              </a>
              <Link
                href="/gallery"
                className="text-sm uppercase tracking-[0.3em] underline-offset-4 hover:underline"
                style={{
                  color: "var(--foreground)",
                  fontFamily: "var(--font-letterpress-heading), serif",
                  fontWeight: 700,
                }}
              >
                View our work
              </Link>
            </div>
          </div>
        </section>

        <Ornament />

        {/* Why us — broadside two-column with ornamental headline */}
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: "var(--accent)", fontWeight: 600 }}
            >
              ✦ Why Us ✦
            </p>
            <h2
              className="mt-6 text-4xl leading-[1.1] sm:text-5xl"
              style={{
                fontFamily: "var(--font-letterpress-heading), serif",
                fontWeight: 700,
              }}
            >
              The art of holding a thing
              <br />
              <em
                style={{ fontStyle: "italic", fontWeight: 400 }}
              >
                so it lasts.
              </em>
            </h2>
            <p className="mt-10 text-lg leading-relaxed">
              With decades of experience and a passion for preservation,
              we combine traditional craftsmanship with modern techniques.
              Whether it&apos;s a family heirloom or a contemporary print,
              we treat every piece as if it were our own.
            </p>
            <div
              className="mx-auto mt-10 inline-block px-10 py-7"
              style={{
                border: "2px double var(--accent)",
                background: "var(--muted)",
              }}
            >
              <p
                className="text-xl italic leading-snug"
                style={{
                  fontFamily: "var(--font-letterpress-heading), serif",
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

        <Ornament />

        {/* At a glance — broadside specimen */}
        <section className="container mx-auto px-4 py-20">
          <div
            className="mx-auto max-w-5xl px-8 py-14"
            style={{
              border: "3px double var(--rule)",
              background: "var(--background)",
            }}
          >
            <p
              className="text-center text-2xl italic sm:text-3xl"
              style={{
                fontFamily: "var(--font-letterpress-heading), serif",
                fontWeight: 500,
              }}
            >
              &ldquo;From Memories to Masterpieces&rdquo;
            </p>
            <Fleuron
              className="mx-auto mt-4 h-3 w-32"
              />
            <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-3">
              {[
                { stat: "33+", label: "Years in Central Florida" },
                { stat: "37+", label: "Years of framing" },
                { stat: "Top 3", label: "Frame shops in Orlando" },
              ].map(({ stat, label }, i) => (
                <div
                  key={label}
                  className={`space-y-2 px-4 text-center ${
                    i > 0 ? "sm:border-l" : ""
                  }`}
                  style={{
                    borderColor: "var(--rule)",
                  }}
                >
                  <p
                    className="text-6xl"
                    style={{
                      fontFamily:
                        "var(--font-letterpress-heading), serif",
                      fontWeight: 700,
                      color: "var(--accent)",
                    }}
                  >
                    {stat}
                  </p>
                  <p
                    className="text-xs uppercase tracking-[0.25em]"
                    style={{
                      color: "var(--muted-foreground)",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Ornament />

        {/* Closing CTA */}
        <section
          style={{
            background: "var(--foreground)",
            color: "var(--background)",
          }}
        >
          <div className="container mx-auto px-4 py-24 text-center">
            <span style={{ color: "var(--accent)" }}>
              <Fleuron className="mx-auto h-5 w-44" />
            </span>
            <h2
              className="mt-8 text-5xl leading-tight sm:text-6xl"
              style={{
                fontFamily: "var(--font-letterpress-heading), serif",
                fontWeight: 700,
              }}
            >
              Come in for a
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--accent)",
                }}
              >
                free consultation.
              </em>
            </h2>
            <p className="mt-8 text-base leading-relaxed opacity-85">
              1820 N. Orange Ave · Orlando, FL 32804
              <br />
              Mon–Fri 10 AM–5 PM · Sat 10 AM–3 PM
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-9 py-4 text-xs uppercase transition-opacity hover:opacity-90"
              style={{
                background: "var(--accent)",
                color: "var(--background)",
                fontFamily: "var(--font-letterpress-heading), serif",
                fontWeight: 700,
                letterSpacing: "0.3em",
              }}
            >
              Visit Our Shop
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-12 text-center">
            <Fleuron
              className="h-3 w-32"
              />
            <span
              className="text-lg"
              style={{
                fontFamily: "var(--font-letterpress-heading), serif",
                fontWeight: 700,
              }}
            >
              Framing of Central Florida
            </span>
            <p
              className="text-[0.65rem] uppercase tracking-[0.4em]"
              style={{
                color: "var(--muted-foreground)",
                fontWeight: 600,
              }}
            >
              © {new Date().getFullYear()} · Sandbox preview · v0.2
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
