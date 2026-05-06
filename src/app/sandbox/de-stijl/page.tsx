import Link from "next/link";
import { Jost } from "next/font/google";

const jost = Jost({
  variable: "--font-stijl",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const stijlStyles = {
  "--background": "#FFFFFF",
  "--foreground": "#000000",
  "--mondrian-red": "#D9382C",
  "--mondrian-blue": "#1C5BB7",
  "--mondrian-yellow": "#F4C400",
  "--rule": "#000000",
  "--muted-foreground": "#404040",
} as React.CSSProperties;

const RULE = "1px solid var(--rule)";
const HEAVY_RULE = "3px solid var(--rule)";

function StijlMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      className={className}
      aria-hidden
    >
      <rect x="1" y="1" width="18" height="14" fill="#D9382C" />
      <rect x="19" y="1" width="12" height="14" fill="#FFFFFF" />
      <rect x="1" y="15" width="14" height="8" fill="#1C5BB7" />
      <rect x="15" y="15" width="16" height="8" fill="#F4C400" />
    </svg>
  );
}

export default function DeStijlVariantPage() {
  return (
    <div
      className={jost.variable}
      style={{
        ...stijlStyles,
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-stijl), system-ui, sans-serif",
        fontWeight: 400,
      }}
    >
      <main>
        {/* Header — heavy black rule */}
        <header
          style={{ borderBottom: HEAVY_RULE }}
        >
          <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-5">
            <div className="flex items-center gap-3">
              <StijlMark className="h-8 w-10" />
              <span
                className="text-lg uppercase tracking-[0.05em]"
                style={{ fontWeight: 700 }}
              >
                Framing of Central Florida
              </span>
            </div>
            <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.15em] md:flex">
              {["Home", "About", "Framing Styles", "Gallery", "Contact"].map(
                (label) => (
                  <span key={label} style={{ fontWeight: 500 }}>
                    {label}
                  </span>
                ),
              )}
            </nav>
          </div>
        </header>

        {/* Hero — Mondrian-style composition with content in red block */}
        <section
          className="grid min-h-[640px] grid-cols-12 grid-rows-6"
          style={{ borderBottom: HEAVY_RULE }}
        >
          {/* Top-left: red block with hero content */}
          <div
            className="col-span-12 row-span-4 flex flex-col justify-end p-8 sm:p-14 md:col-span-8"
            style={{
              background: "var(--mondrian-red)",
              color: "#FFFFFF",
              borderRight: HEAVY_RULE,
              borderBottom: HEAVY_RULE,
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ fontWeight: 600, opacity: 0.9 }}
            >
              Custom Framing — Orlando — Since 1993
            </p>
            <h1
              className="mt-6 text-5xl leading-[0.95] sm:text-7xl lg:text-8xl"
              style={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              CRAFTED
              <br />
              WITH CARE.
            </h1>
            <p
              className="mt-6 max-w-md text-base leading-relaxed"
              style={{ opacity: 0.95 }}
            >
              Boutique custom framing for art, photography, and
              memorabilia. Archival materials. Modular precision.
            </p>
          </div>

          {/* Top-right: white block */}
          <div
            className="col-span-6 row-span-2 hidden md:col-span-4 md:row-span-2 md:flex md:flex-col md:justify-center md:p-8"
            style={{
              background: "#FFFFFF",
              borderBottom: HEAVY_RULE,
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ fontWeight: 600 }}
            >
              Visit
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              1820 N. Orange Ave
              <br />
              Orlando, FL 32804
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs uppercase tracking-[0.2em]"
              style={{ fontWeight: 700, textDecoration: "underline" }}
            >
              Open in Maps →
            </a>
          </div>

          {/* Mid-right: yellow block */}
          <div
            className="col-span-6 row-span-2 hidden md:col-span-4 md:row-span-2 md:block md:p-8"
            style={{
              background: "var(--mondrian-yellow)",
              borderBottom: HEAVY_RULE,
            }}
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full w-full items-end text-3xl uppercase leading-none sm:text-4xl"
              style={{
                fontWeight: 700,
                color: "#000000",
                letterSpacing: "-0.02em",
              }}
            >
              VISIT
              <br />
              OUR
              <br />
              SHOP →
            </a>
          </div>

          {/* Bottom-left: blue block */}
          <div
            className="col-span-6 row-span-2 hidden md:col-span-4 md:row-span-2 md:flex md:flex-col md:justify-end md:p-8"
            style={{
              background: "var(--mondrian-blue)",
              color: "#FFFFFF",
              borderRight: HEAVY_RULE,
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ fontWeight: 600, opacity: 0.9 }}
            >
              Hours
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Mon–Fri 10–5
              <br />
              Sat 10–3 · Sun closed
            </p>
          </div>

          {/* Bottom-mid: white */}
          <div
            className="col-span-6 row-span-2 hidden md:col-span-4 md:row-span-2 md:flex md:flex-col md:justify-end md:p-8"
            style={{
              background: "#FFFFFF",
              borderRight: HEAVY_RULE,
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ fontWeight: 600 }}
            >
              Phone
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              407-894-8644
            </p>
          </div>

          {/* Bottom-right: red */}
          <div
            className="col-span-12 row-span-2 hidden md:col-span-4 md:row-span-2 md:flex md:flex-col md:justify-end md:p-8"
            style={{
              background: "var(--mondrian-red)",
              color: "#FFFFFF",
            }}
          >
            <Link
              href="/gallery"
              className="text-2xl uppercase leading-tight sm:text-3xl"
              style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              VIEW
              <br />
              OUR
              <br />
              WORK →
            </Link>
          </div>
        </section>

        {/* Why us — strict grid */}
        <section
          className="grid grid-cols-12"
          style={{ borderBottom: HEAVY_RULE }}
        >
          <div
            className="col-span-12 p-10 sm:p-16 md:col-span-7"
            style={{
              borderRight: HEAVY_RULE,
              borderBottom: HEAVY_RULE,
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ fontWeight: 600, color: "var(--mondrian-red)" }}
            >
              Why us
            </p>
            <h2
              className="mt-6 text-4xl leading-[1.05] sm:text-5xl"
              style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Form, function, and a frame around it.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed">
              With decades of experience and a passion for preservation,
              we combine traditional craftsmanship with modern techniques.
              Whether it&apos;s a family heirloom or a contemporary print,
              we treat every piece as if it were our own.
            </p>
          </div>
          <div
            className="col-span-12 p-10 sm:p-16 md:col-span-5"
            style={{
              background: "var(--mondrian-yellow)",
              borderBottom: HEAVY_RULE,
            }}
          >
            <p
              className="text-2xl leading-snug sm:text-3xl"
              style={{ fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              We only use archival-quality materials and UV-protective
              glass to preserve your valuable artwork.
            </p>
          </div>
        </section>

        {/* At a glance — three primary-color blocks for stats */}
        <section
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderBottom: HEAVY_RULE }}
        >
          {[
            {
              stat: "33+",
              label: "Years serving Central Florida",
              bg: "var(--mondrian-red)",
              fg: "#FFFFFF",
              borderRight: true,
            },
            {
              stat: "37+",
              label: "Years of framing experience",
              bg: "#FFFFFF",
              fg: "#000000",
              borderRight: true,
            },
            {
              stat: "TOP 3",
              label: "Frame shops in Orlando",
              bg: "var(--mondrian-blue)",
              fg: "#FFFFFF",
              borderRight: false,
            },
          ].map(({ stat, label, bg, fg, borderRight }) => (
            <div
              key={label}
              className="flex flex-col justify-center p-12 text-center sm:p-16"
              style={{
                background: bg,
                color: fg,
                borderRight: borderRight ? HEAVY_RULE : undefined,
                borderBottom: RULE,
              }}
            >
              <p
                className="text-7xl"
                style={{ fontWeight: 700, letterSpacing: "-0.04em" }}
              >
                {stat}
              </p>
              <p
                className="mt-4 text-xs uppercase tracking-[0.2em]"
                style={{ fontWeight: 600 }}
              >
                {label}
              </p>
            </div>
          ))}
        </section>

        {/* Tagline */}
        <section className="border-b" style={{ borderBottom: HEAVY_RULE }}>
          <div className="container mx-auto px-4 py-20 text-center">
            <p
              className="text-3xl uppercase sm:text-5xl"
              style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              FROM MEMORIES <span style={{ color: "var(--mondrian-red)" }}>·</span>{" "}
              TO MASTERPIECES
            </p>
          </div>
        </section>

        {/* Closing CTA — solid color block */}
        <section
          style={{
            background: "var(--mondrian-blue)",
            color: "#FFFFFF",
            borderBottom: HEAVY_RULE,
          }}
        >
          <div className="container mx-auto px-4 py-24 text-center">
            <h2
              className="text-4xl leading-[1.05] sm:text-5xl"
              style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              COME IN FOR A
              <br />
              FREE CONSULTATION.
            </h2>
            <p className="mt-6 text-base leading-relaxed opacity-90">
              1820 N. Orange Ave · Orlando, FL 32804
              <br />
              Mon–Fri 10 AM–5 PM · Sat 10 AM–3 PM
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-[0.2em]"
              style={{
                background: "var(--mondrian-yellow)",
                color: "#000000",
                fontWeight: 700,
              }}
            >
              VISIT OUR SHOP →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="container mx-auto flex flex-col items-start gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <StijlMark className="h-7 w-9" />
              <span
                className="text-sm uppercase tracking-[0.15em]"
                style={{ fontWeight: 700 }}
              >
                Framing of Central Florida
              </span>
            </div>
            <p
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--muted-foreground)", fontWeight: 500 }}
            >
              © {new Date().getFullYear()} · Sandbox preview · v0.2
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
