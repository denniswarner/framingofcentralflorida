import Link from "next/link";
import { Noto_Serif_Display, Noto_Sans } from "next/font/google";

const notoSerif = Noto_Serif_Display({
  variable: "--font-jp-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const notoSans = Noto_Sans({
  variable: "--font-jp-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jpStyles = {
  // Washi paper, sumi black, single muted indigo accent
  "--background": "#F8F4ED",
  "--foreground": "#1A1714",
  "--muted": "#EBE5DA",
  "--muted-foreground": "#6B6359",
  "--accent": "#3D4A5C",
  "--border": "#D9D2C5",
} as React.CSSProperties;

function EnsoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M20 4 A 16 16 0 1 1 19.99 4"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeDasharray="86 14"
      />
    </svg>
  );
}

export default function JapaneseVariantPage() {
  return (
    <div
      className={`${notoSerif.variable} ${notoSans.variable}`}
      style={{
        ...jpStyles,
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-jp-body), system-ui, sans-serif",
        fontWeight: 300,
      }}
    >
      <main>
        {/* Header — minimal, asymmetric */}
        <header className="container mx-auto flex items-center justify-between px-6 py-10 lg:px-12">
          <div className="flex items-center gap-4">
            <span style={{ color: "var(--accent)" }}>
              <EnsoMark className="h-7 w-7" />
            </span>
            <span
              className="text-sm tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-jp-heading), serif",
                fontWeight: 400,
              }}
            >
              Framing of Central Florida
            </span>
          </div>
          <nav className="hidden items-center gap-10 text-xs tracking-[0.25em] md:flex">
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
        </header>

        {/* Hero — massive whitespace, asymmetric, vertical rule */}
        <section className="container mx-auto px-6 py-32 lg:px-12 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:col-start-2 space-y-12">
              <p
                className="text-[0.65rem] uppercase tracking-[0.5em]"
                style={{ color: "var(--accent)" }}
              >
                Custom framing · Orlando · Since 1993
              </p>
              <h1
                className="text-4xl leading-[1.25] sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "var(--font-jp-heading), serif",
                  fontWeight: 300,
                  letterSpacing: "0.005em",
                }}
              >
                The frame
                <br />
                serves the work.
                <br />
                <span
                  style={{
                    color: "var(--accent)",
                    fontStyle: "italic",
                  }}
                >
                  Nothing more.
                </span>
              </h1>
              <div
                className="h-12 w-px"
                style={{ background: "var(--accent)" }}
              />
              <p
                className="max-w-md text-base leading-loose"
                style={{ color: "var(--muted-foreground)" }}
              >
                Boutique custom framing for art, photography, and
                memorabilia. Archival materials. Patient craftsmanship.
                Quiet attention to every piece.
              </p>
              <div className="flex flex-col gap-6 pt-4 sm:flex-row sm:items-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-b pb-2 text-sm tracking-[0.25em] transition-colors hover:opacity-70"
                  style={{
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-jp-heading), serif",
                  }}
                >
                  Visit Our Shop —
                </a>
                <Link
                  href="/gallery"
                  className="text-sm tracking-[0.25em] hover:opacity-70"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  View our work
                </Link>
              </div>
            </div>
            <aside className="hidden self-end lg:col-span-3 lg:col-start-10 lg:block">
              <EnsoMark
                className="h-32 w-32"
              />
              <p
                className="mt-6 text-xs leading-relaxed tracking-[0.15em]"
                style={{ color: "var(--muted-foreground)" }}
              >
                The enso —
                <br />a single brushstroke,
                <br />complete in itself.
              </p>
            </aside>
          </div>
        </section>

        {/* Why us — vast whitespace, single thin rule */}
        <section className="container mx-auto px-6 py-32 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3 lg:col-start-2">
              <p
                className="text-[0.65rem] uppercase tracking-[0.5em]"
                style={{ color: "var(--accent)" }}
              >
                Why us
              </p>
              <div
                className="mt-6 h-px w-12"
                style={{ background: "var(--foreground)" }}
              />
            </div>
            <div className="lg:col-span-7 space-y-10">
              <h2
                className="text-3xl leading-[1.35] sm:text-4xl"
                style={{
                  fontFamily: "var(--font-jp-heading), serif",
                  fontWeight: 300,
                }}
              >
                Material, intention, and time.
              </h2>
              <p className="text-base leading-loose">
                With decades of experience and a passion for preservation,
                we combine traditional craftsmanship with modern
                techniques. Whether it is a family heirloom or a
                contemporary print, we treat every piece as if it were
                our own.
              </p>
              <p
                className="border-l pl-8 text-lg leading-loose italic"
                style={{
                  borderColor: "var(--accent)",
                  fontFamily: "var(--font-jp-heading), serif",
                  fontWeight: 300,
                }}
              >
                We only use archival-quality materials and UV-protective
                glass to preserve your valuable artwork.
              </p>
            </div>
          </div>
        </section>

        {/* At a glance — restrained stats */}
        <section className="container mx-auto px-6 py-32 lg:px-12">
          <p
            className="text-center text-2xl italic sm:text-3xl"
            style={{
              fontFamily: "var(--font-jp-heading), serif",
              fontWeight: 300,
            }}
          >
            From Memories &nbsp;—&nbsp; to Masterpieces
          </p>
          <div
            className="mx-auto mt-20 grid max-w-4xl gap-12 sm:grid-cols-3"
          >
            {[
              { stat: "33", suffix: "+", label: "Years in Central Florida" },
              { stat: "37", suffix: "+", label: "Years of framing" },
              { stat: "Top 3", suffix: "", label: "Frame shops in Orlando" },
            ].map(({ stat, suffix, label }) => (
              <div key={label} className="space-y-3 text-center">
                <p
                  className="text-5xl"
                  style={{
                    fontFamily: "var(--font-jp-heading), serif",
                    fontWeight: 300,
                  }}
                >
                  {stat}
                  <span style={{ color: "var(--accent)" }}>{suffix}</span>
                </p>
                <div
                  className="mx-auto h-px w-8"
                  style={{ background: "var(--accent)" }}
                />
                <p
                  className="text-xs tracking-[0.2em]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA — quiet, no full bleed */}
        <section className="container mx-auto px-6 py-32 lg:px-12">
          <div className="mx-auto max-w-2xl space-y-10 text-center">
            <span style={{ color: "var(--accent)" }}>
              <EnsoMark className="mx-auto h-12 w-12" />
            </span>
            <h2
              className="text-3xl leading-[1.4] sm:text-4xl"
              style={{
                fontFamily: "var(--font-jp-heading), serif",
                fontWeight: 300,
              }}
            >
              Come in for a free consultation.
            </h2>
            <p className="text-sm leading-loose tracking-wide">
              1820 N. Orange Ave &nbsp;—&nbsp; Orlando, FL 32804
              <br />
              <span style={{ color: "var(--muted-foreground)" }}>
                Mon–Fri 10 AM–5 PM &nbsp; · &nbsp; Sat 10 AM–3 PM
              </span>
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-b pb-2 text-sm tracking-[0.3em] transition-colors hover:opacity-70"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                fontFamily: "var(--font-jp-heading), serif",
              }}
            >
              Visit Our Shop —
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="container mx-auto flex flex-col items-center gap-6 px-6 py-16 lg:px-12"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span style={{ color: "var(--accent)" }}>
            <EnsoMark className="h-8 w-8" />
          </span>
          <span
            className="text-sm tracking-[0.25em]"
            style={{
              fontFamily: "var(--font-jp-heading), serif",
              fontWeight: 400,
            }}
          >
            Framing of Central Florida
          </span>
          <p
            className="text-[0.65rem] tracking-[0.3em]"
            style={{ color: "var(--muted-foreground)" }}
          >
            © {new Date().getFullYear()} · Sandbox preview · v0.2
          </p>
        </footer>
      </main>
    </div>
  );
}
