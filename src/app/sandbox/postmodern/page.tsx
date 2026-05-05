import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-pomo-heading",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-pomo-body",
  subsets: ["latin"],
});

const pomoStyles = {
  // Memphis-pop palette: cream field, charcoal text, coral primary,
  // teal accent, mustard secondary surface
  "--background": "#F4F0E8",
  "--foreground": "#1F1B1A",
  "--muted": "#EAE3D2",
  "--muted-foreground": "#5C544D",
  "--primary": "#E76F51",
  "--primary-foreground": "#FFFCF6",
  "--accent": "#2A5266",
  "--secondary": "#E8C77A",
  "--border": "#D9CFC0",
} as React.CSSProperties;

function PomoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 22 A 7 7 0 0 1 18 22" />
      <line x1="4" y1="22" x2="18" y2="22" />
      <path d="M22 22 L34 22 L28 10 Z" />
      <circle cx="11" cy="6" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PomoShape({
  variant,
  className = "",
  color,
}: {
  variant: "circle" | "triangle" | "squiggle" | "stepped";
  className?: string;
  color: string;
}) {
  if (variant === "circle") {
    return (
      <svg
        viewBox="0 0 32 32"
        className={className}
        aria-hidden
      >
        <circle cx="16" cy="16" r="14" fill={color} />
      </svg>
    );
  }
  if (variant === "triangle") {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden>
        <path d="M2 28 L30 28 L16 4 Z" fill={color} />
      </svg>
    );
  }
  if (variant === "stepped") {
    return (
      <svg viewBox="0 0 40 32" className={className} aria-hidden>
        <path
          d="M0 28 L10 28 L10 18 L20 18 L20 8 L30 8 L30 0 L40 0 L40 32 L0 32 Z"
          fill={color}
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 16" className={className} aria-hidden>
      <path
        d="M2 8 Q 8 2, 14 8 T 26 8 T 38 8 T 50 8 L 58 8"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PostModernVariantPage() {
  return (
    <div
      className={`${fraunces.variable} ${inter.variable}`}
      style={{
        ...pomoStyles,
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-pomo-body), system-ui, sans-serif",
      }}
    >
      <main>
        {/* Header — color block left, nav right, intentionally asymmetric */}
        <header
          className="border-b"
          style={{ borderColor: "var(--foreground)" }}
        >
          <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-5">
            <div className="flex items-center gap-3">
              <span
                style={{ color: "var(--primary)" }}
              >
                <PomoMark className="h-9 w-9" />
              </span>
              <span
                className="text-base"
                style={{
                  fontFamily: "var(--font-pomo-heading), serif",
                  fontWeight: 600,
                }}
              >
                Framing<em
                  style={{
                    color: "var(--primary)",
                    fontStyle: "italic",
                  }}
                >
                  of
                </em>Central&nbsp;Florida
              </span>
            </div>
            <nav className="hidden items-center gap-7 text-sm md:flex">
              {["Home", "About", "Framing Styles", "Gallery", "Contact"].map(
                (label, i) => (
                  <span
                    key={label}
                    style={{
                      color:
                        i === 4
                          ? "var(--primary)"
                          : "var(--foreground)",
                      fontWeight: i === 4 ? 600 : 400,
                    }}
                  >
                    {label}
                  </span>
                ),
              )}
            </nav>
          </div>
        </header>

        {/* Hero — color block, oversized headline, deliberate "off-grid" */}
        <section className="relative overflow-hidden">
          {/* Decorative shapes */}
          <PomoShape
            variant="circle"
            className="absolute -right-16 -top-12 h-72 w-72 opacity-90"
            color="var(--secondary)"
          />
          <PomoShape
            variant="triangle"
            className="absolute -bottom-10 right-32 hidden h-40 w-40 lg:block"
            color="var(--accent)"
          />
          <PomoShape
            variant="stepped"
            className="absolute -left-8 bottom-0 hidden h-32 w-40 opacity-90 sm:block"
            color="var(--primary)"
          />

          <div className="container relative mx-auto px-4 py-28 lg:py-36">
            <div className="max-w-4xl space-y-10">
              <p
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em]"
                style={{ color: "var(--accent)" }}
              >
                <span
                  className="h-px w-8"
                  style={{ background: "currentColor" }}
                />
                Custom framing · Orlando · Since 1993
              </p>
              <h1
                className="text-[3rem] leading-[0.95] sm:text-[5rem] lg:text-[7rem]"
                style={{
                  fontFamily: "var(--font-pomo-heading), serif",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                }}
              >
                More <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--primary)",
                    fontWeight: 400,
                  }}
                >
                  is more.
                </em>
                <br />
                Less <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--accent)",
                    fontWeight: 400,
                  }}
                >
                  is a bore.
                </em>
              </h1>
              <p
                className="max-w-xl text-lg leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                Boutique custom framing for art, photography, and
                memorabilia. Archival materials, museum-quality
                craftsmanship, and frames that have a little fun.
              </p>
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  Visit Our Shop →
                </a>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{
                    borderColor: "var(--foreground)",
                    color: "var(--foreground)",
                  }}
                >
                  View our work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Squiggle divider */}
        <div className="container mx-auto px-4 py-6">
          <PomoShape
            variant="squiggle"
            className="h-6 w-full"
            color="var(--primary)"
          />
        </div>

        {/* Why us — block of color, big italicized callout */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: "var(--primary)" }}
              >
                Why us
              </p>
              <h2
                className="mt-3 text-4xl leading-[1.05] sm:text-5xl"
                style={{
                  fontFamily: "var(--font-pomo-heading), serif",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Frames are <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--accent)",
                    fontWeight: 400,
                  }}
                >
                  architecture
                </em>{" "}
                for the things that matter.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg leading-relaxed">
                With decades of experience and a passion for preservation,
                we combine traditional craftsmanship with modern
                techniques. Whether it&apos;s a family heirloom or a
                contemporary print, we treat every piece as if it were
                our own.
              </p>
              <div
                className="rounded-2xl px-7 py-6"
                style={{
                  background: "var(--secondary)",
                  color: "var(--foreground)",
                }}
              >
                <p
                  className="text-xl leading-snug"
                  style={{
                    fontFamily: "var(--font-pomo-heading), serif",
                    fontStyle: "italic",
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

        {/* At a glance — pomo color blocks for stats */}
        <section className="container mx-auto px-4 py-20">
          <p
            className="text-center text-3xl italic sm:text-4xl"
            style={{
              fontFamily: "var(--font-pomo-heading), serif",
              fontWeight: 500,
            }}
          >
            &ldquo;From Memories to Masterpieces&rdquo;
          </p>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
            {[
              {
                stat: "33+",
                label: "Years serving Central Florida",
                bg: "var(--primary)",
                fg: "var(--primary-foreground)",
              },
              {
                stat: "37+",
                label: "Years of framing experience",
                bg: "var(--accent)",
                fg: "var(--primary-foreground)",
              },
              {
                stat: "Top 3",
                label: "Frame shops in Orlando",
                bg: "var(--secondary)",
                fg: "var(--foreground)",
              },
            ].map(({ stat, label, bg, fg }) => (
              <div
                key={label}
                className="space-y-3 rounded-3xl px-6 py-10 text-center"
                style={{ background: bg, color: fg }}
              >
                <p
                  className="text-6xl"
                  style={{
                    fontFamily: "var(--font-pomo-heading), serif",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat}
                </p>
                <p className="text-sm font-medium uppercase tracking-[0.2em]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section
          className="relative overflow-hidden"
          style={{ background: "var(--accent)", color: "var(--primary-foreground)" }}
        >
          <PomoShape
            variant="circle"
            className="absolute -left-20 -bottom-12 h-64 w-64 opacity-30"
            color="var(--primary)"
          />
          <PomoShape
            variant="triangle"
            className="absolute right-12 top-8 hidden h-24 w-24 opacity-30 lg:block"
            color="var(--secondary)"
          />
          <div className="container relative mx-auto px-4 py-24 text-center">
            <PomoMark
              className="mx-auto h-12 w-12"
              />
            <h2
              className="mt-6 text-5xl leading-[1.05] sm:text-6xl"
              style={{
                fontFamily: "var(--font-pomo-heading), serif",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Come in for a{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--secondary)",
                  fontWeight: 400,
                }}
              >
                free consultation.
              </em>
            </h2>
            <p className="mt-6 text-base leading-relaxed opacity-90">
              1820 N. Orange Ave · Orlando, FL 32804
              <br />
              Mon–Fri 10 AM–5 PM · Sat 10 AM–3 PM
            </p>
            <div className="mt-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                Visit Our Shop →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="border-t"
          style={{ borderColor: "var(--foreground)" }}
        >
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span style={{ color: "var(--primary)" }}>
                  <PomoMark className="h-7 w-7" />
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-pomo-heading), serif",
                  }}
                >
                  Framing of Central Florida
                </span>
              </div>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                © {new Date().getFullYear()} · Sandbox preview · v0.2
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
