import Link from "next/link";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-gehry-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-gehry-body",
  subsets: ["latin"],
});

const gehryStyles = {
  // Brushed graphite, warm cream highlight, bronze accent
  "--background": "#1C1A18",
  "--foreground": "#E8E2D5",
  "--muted": "#252320",
  "--muted-foreground": "#A39C8E",
  "--accent": "#B87333",
  "--accent-light": "#D9985F",
  "--rule": "#3A3631",
} as React.CSSProperties;

function GehryMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <polygon points="4,20 12,4 22,10 18,24" />
      <polygon points="18,8 30,2 36,16 26,28" opacity="0.55" />
      <line x1="12" y1="4" x2="36" y2="16" opacity="0.3" />
    </svg>
  );
}

export default function GehryVariantPage() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{
        ...gehryStyles,
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-gehry-body), system-ui, sans-serif",
        // Subtle metallic shimmer via gradient
        backgroundImage:
          "linear-gradient(135deg, rgba(232,226,213,0.02) 0%, transparent 30%, rgba(184,115,51,0.03) 70%, transparent 100%)",
      }}
    >
      <main>
        {/* Header — asymmetric, skewed badge */}
        <header
          className="border-b"
          style={{ borderColor: "var(--rule)" }}
        >
          <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-6">
            <div className="flex items-center gap-4">
              <span style={{ color: "var(--accent)" }}>
                <GehryMark className="h-9 w-11" />
              </span>
              <div className="leading-tight">
                <span
                  className="block text-base"
                  style={{
                    fontFamily: "var(--font-gehry-heading), sans-serif",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Framing of Central Florida
                </span>
                <span
                  className="block text-[0.65rem] uppercase tracking-[0.3em]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Custom · Orlando · Since 1993
                </span>
              </div>
            </div>
            <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.2em] md:flex">
              {["Home", "About", "Framing Styles", "Gallery", "Contact"].map(
                (label) => (
                  <span
                    key={label}
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {label}
                  </span>
                ),
              )}
            </nav>
          </div>
        </header>

        {/* Hero — overlapping tilted panels */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          {/* Decorative angular panels */}
          <div
            aria-hidden
            className="absolute -right-20 top-12 h-64 w-[28rem] opacity-[0.08]"
            style={{
              background: "var(--accent)",
              transform: "rotate(-8deg) skewX(-12deg)",
              borderTop: "1px solid var(--accent)",
              borderLeft: "1px solid var(--accent)",
            }}
          />
          <div
            aria-hidden
            className="absolute -left-32 bottom-0 h-72 w-[32rem] opacity-[0.06]"
            style={{
              background: "var(--foreground)",
              transform: "rotate(5deg) skewX(8deg)",
            }}
          />
          <div
            aria-hidden
            className="absolute right-1/4 top-1/2 hidden h-40 w-40 lg:block"
            style={{
              border: "1px solid var(--accent)",
              transform: "rotate(18deg) skewY(-6deg)",
              opacity: 0.4,
            }}
          />

          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-8 space-y-8">
                <p
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--accent)" }}
                >
                  <span style={{ color: "var(--accent)" }}>
                    <GehryMark className="h-4 w-5" />
                  </span>
                  A frame is sculpture
                </p>
                <h1
                  className="text-5xl leading-[0.95] sm:text-6xl lg:text-[5.75rem]"
                  style={{
                    fontFamily: "var(--font-gehry-heading), sans-serif",
                    fontWeight: 500,
                    letterSpacing: "-0.035em",
                  }}
                >
                  Crafted{" "}
                  <span
                    style={{
                      display: "inline-block",
                      transform: "rotate(-2deg)",
                      color: "var(--accent)",
                      fontWeight: 400,
                    }}
                  >
                    /
                  </span>{" "}
                  with
                  <br />
                  <span
                    style={{
                      display: "inline-block",
                      transform: "translateX(2rem)",
                      color: "var(--accent-light)",
                    }}
                  >
                    care.
                  </span>
                </h1>
                <p
                  className="max-w-xl text-lg leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Boutique custom framing for art, photography, and
                  memorabilia. Archival materials, museum-quality
                  craftsmanship, and a sculptor&apos;s eye for the work
                  the frame surrounds.
                </p>
                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 text-sm uppercase tracking-[0.2em] transition-all hover:translate-x-1"
                    style={{
                      background: "var(--accent)",
                      color: "var(--background)",
                      fontFamily: "var(--font-gehry-heading), sans-serif",
                      fontWeight: 600,
                      clipPath:
                        "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                    }}
                  >
                    Visit Our Shop →
                  </a>
                  <Link
                    href="/gallery"
                    className="text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                    style={{
                      color: "var(--foreground)",
                      fontFamily: "var(--font-gehry-heading), sans-serif",
                      fontWeight: 500,
                      borderBottom: "1px solid var(--accent)",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    View our work
                  </Link>
                </div>
              </div>

              {/* Tilted "frame" placeholder */}
              <aside className="hidden self-center lg:col-span-4 lg:block">
                <div
                  className="relative aspect-[4/5]"
                  style={{
                    transform: "rotate(-3deg)",
                    border: "1px solid var(--accent)",
                  }}
                >
                  <div
                    className="absolute inset-2"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--muted) 0%, var(--background) 50%, var(--muted) 100%)",
                      border: "1px solid var(--rule)",
                    }}
                  >
                    <div
                      className="flex h-full items-center justify-center text-xs uppercase tracking-[0.3em]"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Hero photograph
                    </div>
                  </div>
                </div>
                <div
                  className="ml-10 mt-4 h-px w-32"
                  style={{
                    background: "var(--accent)",
                    transform: "rotate(-12deg)",
                    transformOrigin: "left",
                  }}
                />
              </aside>
            </div>
          </div>
        </section>

        {/* Skewed divider */}
        <div
          aria-hidden
          className="relative h-12 overflow-hidden"
        >
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background: "var(--accent)",
              transform: "rotate(-1.5deg)",
              transformOrigin: "left",
            }}
          />
          <div
            className="absolute inset-x-0 top-6 h-px"
            style={{
              background: "var(--rule)",
              transform: "rotate(0.8deg)",
              transformOrigin: "left",
            }}
          />
        </div>

        {/* Why us — broken grid, fragmented columns */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: "var(--accent)" }}
              >
                Why us
              </p>
              <h2
                className="mt-6 text-4xl leading-[1.0] sm:text-5xl"
                style={{
                  fontFamily: "var(--font-gehry-heading), sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                }}
              >
                Structure that{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "var(--accent-light)",
                  }}
                >
                  bends
                </em>{" "}
                to the work.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-6">
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                With decades of experience and a passion for preservation,
                we combine traditional craftsmanship with modern
                techniques. Whether it&apos;s a family heirloom or a
                contemporary print, we treat every piece as if it were
                our own.
              </p>
              <div
                className="px-6 py-5"
                style={{
                  background: "var(--muted)",
                  borderLeft: "2px solid var(--accent)",
                }}
              >
                <p
                  className="text-lg leading-snug"
                  style={{
                    fontFamily: "var(--font-gehry-heading), sans-serif",
                    fontWeight: 500,
                  }}
                >
                  We only use archival-quality materials and UV-protective
                  glass to preserve your valuable artwork.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* At a glance — fragmented angular cards */}
        <section className="container mx-auto px-4 py-24">
          <p
            className="text-center text-3xl italic sm:text-4xl"
            style={{
              fontFamily: "var(--font-gehry-heading), sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.015em",
            }}
          >
            &ldquo;From Memories to Masterpieces&rdquo;
          </p>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
            {[
              { stat: "33+", label: "Years in Central Florida", rotate: "-1.5deg" },
              { stat: "37+", label: "Years of framing", rotate: "1deg" },
              { stat: "Top 3", label: "Frame shops in Orlando", rotate: "-0.75deg" },
            ].map(({ stat, label, rotate }) => (
              <div
                key={label}
                className="space-y-3 px-6 py-10 text-center"
                style={{
                  background: "var(--muted)",
                  border: "1px solid var(--rule)",
                  transform: `rotate(${rotate})`,
                }}
              >
                <p
                  className="text-6xl"
                  style={{
                    fontFamily: "var(--font-gehry-heading), sans-serif",
                    fontWeight: 600,
                    color: "var(--accent)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat}
                </p>
                <div
                  className="mx-auto h-px w-10"
                  style={{ background: "var(--accent)" }}
                />
                <p
                  className="text-xs uppercase tracking-[0.25em]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA — overlapping panels */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--muted) 0%, var(--background) 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -right-12 top-0 h-full w-[40rem] opacity-[0.12]"
            style={{
              background: "var(--accent)",
              transform: "skewX(-15deg)",
            }}
          />
          <div className="container relative mx-auto px-4 py-24 text-center">
            <span style={{ color: "var(--accent)" }}>
              <GehryMark className="mx-auto h-12 w-14" />
            </span>
            <h2
              className="mt-8 text-5xl leading-[1.0] sm:text-6xl"
              style={{
                fontFamily: "var(--font-gehry-heading), sans-serif",
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
            >
              Come in for a
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--accent-light)",
                  display: "inline-block",
                  transform: "translateX(1rem)",
                }}
              >
                free consultation.
              </em>
            </h2>
            <p
              className="mt-8 text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              1820 N. Orange Ave · Orlando, FL 32804
              <br />
              Mon–Fri 10 AM–5 PM · Sat 10 AM–3 PM
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-9 py-4 text-sm uppercase tracking-[0.2em] transition-all hover:translate-x-1"
              style={{
                background: "var(--accent)",
                color: "var(--background)",
                fontFamily: "var(--font-gehry-heading), sans-serif",
                fontWeight: 600,
                clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
              }}
            >
              Visit Our Shop →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="border-t"
          style={{ borderColor: "var(--rule)" }}
        >
          <div className="container mx-auto flex flex-col items-start gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span style={{ color: "var(--accent)" }}>
                <GehryMark className="h-7 w-9" />
              </span>
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-gehry-heading), sans-serif",
                  fontWeight: 600,
                }}
              >
                Framing of Central Florida
              </span>
            </div>
            <p
              className="text-xs uppercase tracking-[0.25em]"
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
