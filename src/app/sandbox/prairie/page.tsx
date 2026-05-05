import Link from "next/link";
import { Marcellus, Lora } from "next/font/google";

const marcellus = Marcellus({
  variable: "--font-prairie-heading",
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
  variable: "--font-prairie-body",
  subsets: ["latin"],
});

const prairieStyles = {
  // Warm earth-tone palette inspired by Wright's Prairie work
  "--background": "#F5EDD8",
  "--foreground": "#2A1F15",
  "--muted": "#EBDFC2",
  "--muted-foreground": "#6B5B45",
  "--primary": "#B85C3D",
  "--primary-foreground": "#F5EDD8",
  "--accent": "#5A6B47",
  "--border": "#D9CBA9",
} as React.CSSProperties;

function PrairieMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="square"
      className={className}
      aria-hidden
    >
      <line x1="4" y1="8" x2="28" y2="8" />
      <line x1="4" y1="14" x2="20" y2="14" />
      <line x1="14" y1="14" x2="14" y2="28" />
      <line x1="14" y1="20" x2="28" y2="20" />
      <line x1="4" y1="26" x2="10" y2="26" />
    </svg>
  );
}

function PrairieDivider() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center gap-6 py-12"
      style={{ color: "var(--accent)" }}
    >
      <span
        className="h-px w-24 sm:w-40"
        style={{ background: "currentColor" }}
      />
      <PrairieMark className="h-7 w-7" />
      <span
        className="h-px w-24 sm:w-40"
        style={{ background: "currentColor" }}
      />
    </div>
  );
}

export default function PrairieVariantPage() {
  return (
    <div
      className={`${marcellus.variable} ${lora.variable}`}
      style={{
        ...prairieStyles,
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-prairie-body), Georgia, serif",
      }}
    >
      <main>
        {/* Local header — variant-styled */}
        <header
          className="border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-5">
            <div className="flex items-center gap-3">
              <PrairieMark
                className="h-8 w-8"
                />
              <span
                className="text-sm uppercase tracking-[0.25em]"
                style={{
                  fontFamily: "var(--font-prairie-heading), serif",
                }}
              >
                Framing of Central Florida
              </span>
            </div>
            <nav className="hidden items-center gap-8 text-sm uppercase tracking-widest md:flex">
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

        {/* Hero — wide, asymmetric, horizontal rhythm */}
        <section className="container mx-auto px-4 py-24 lg:py-32">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-8">
              <p
                className="text-xs uppercase tracking-[0.4em]"
                style={{ color: "var(--accent)" }}
              >
                Established 1993 · Orlando
              </p>
              <h1
                className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "var(--font-prairie-heading), serif",
                  letterSpacing: "-0.01em",
                }}
              >
                Custom framing,
                <br />
                crafted with care.
              </h1>
              <div
                className="h-px w-32"
                style={{ background: "var(--foreground)" }}
              />
              <p
                className="max-w-xl text-lg leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                Boutique custom framing for art, photography, and
                memorabilia. Archival materials, museum-quality
                craftsmanship, and the patient attention every piece
                deserves.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-90"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontFamily: "var(--font-prairie-heading), serif",
                  }}
                >
                  Visit Our Shop
                </a>
                <Link
                  href="/gallery"
                  className="text-sm uppercase tracking-[0.2em] underline-offset-4 hover:underline"
                  style={{ color: "var(--foreground)" }}
                >
                  View our work →
                </Link>
              </div>
            </div>
            <aside className="hidden lg:col-span-5 lg:block">
              <div
                className="relative aspect-[4/5] border"
                style={{ borderColor: "var(--foreground)" }}
              >
                <div
                  className="absolute inset-3 border"
                  style={{
                    borderColor: "var(--foreground)",
                    background: "var(--muted)",
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
            </aside>
          </div>
        </section>

        <PrairieDivider />

        {/* Why choose us — left-aligned, asymmetric */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p
                className="text-xs uppercase tracking-[0.4em]"
                style={{ color: "var(--accent)" }}
              >
                Why us
              </p>
              <h2
                className="mt-3 text-3xl leading-tight sm:text-4xl"
                style={{
                  fontFamily: "var(--font-prairie-heading), serif",
                }}
              >
                Form follows function. So does a frame.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              <p className="text-lg leading-relaxed">
                With decades of experience and a passion for preservation,
                we combine traditional craftsmanship with modern
                techniques. Whether it&apos;s a family heirloom or a
                contemporary print, we treat every piece as if it were
                our own.
              </p>
              <p
                className="border-l-2 pl-6 text-lg italic leading-relaxed"
                style={{
                  borderColor: "var(--accent)",
                  fontFamily: "var(--font-prairie-heading), serif",
                }}
              >
                We only use archival-quality materials and UV-protective
                glass to preserve your valuable artwork.
              </p>
            </div>
          </div>
        </section>

        <PrairieDivider />

        {/* At a glance — double-hairline frame */}
        <section className="container mx-auto px-4 py-20">
          <div
            className="border p-2"
            style={{ borderColor: "var(--foreground)" }}
          >
            <div
              className="border px-6 py-16 sm:px-12"
              style={{ borderColor: "var(--foreground)" }}
            >
              <p
                className="text-center text-3xl italic sm:text-4xl"
                style={{
                  fontFamily: "var(--font-prairie-heading), serif",
                }}
              >
                &ldquo;From Memories to Masterpieces&rdquo;
              </p>
              <div
                className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-3"
                style={{ color: "var(--foreground)" }}
              >
                {[
                  { stat: "33+", label: "Years serving Central Florida" },
                  { stat: "37+", label: "Years of framing experience" },
                  { stat: "Top 3", label: "Frame shops in Orlando" },
                ].map(({ stat, label }) => (
                  <div key={label} className="space-y-2 text-center">
                    <p
                      className="text-5xl"
                      style={{
                        fontFamily: "var(--font-prairie-heading), serif",
                      }}
                    >
                      {stat}
                    </p>
                    <p
                      className="text-sm uppercase tracking-[0.2em]"
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

        <PrairieDivider />

        {/* Closing CTA — full bleed, deep tone */}
        <section
          style={{
            background: "var(--foreground)",
            color: "var(--background)",
          }}
        >
          <div className="container mx-auto px-4 py-24 text-center">
            <PrairieMark
              className="mx-auto h-10 w-10"
              />
            <h2
              className="mt-6 text-4xl leading-tight sm:text-5xl"
              style={{
                fontFamily: "var(--font-prairie-heading), serif",
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
                className="inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-90"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  fontFamily: "var(--font-prairie-heading), serif",
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
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <PrairieMark className="h-6 w-6" />
                <span
                  className="text-sm uppercase tracking-[0.25em]"
                  style={{
                    fontFamily: "var(--font-prairie-heading), serif",
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
