import Link from "next/link";
import {
  DecoMark,
  DecoChevronBand,
  DecoOrnament,
} from "@/components/deco/ornaments";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804";

export default function HomePage() {
  return (
    <main>
      {/* Hero — frame within frame */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl border border-accent p-3">
          <div className="border border-accent px-6 py-20 text-center sm:px-12 sm:py-28">
            <DecoMark className="mx-auto h-12 w-12" />
            <p className="mt-6 text-[0.65rem] uppercase tracking-[0.5em] text-accent-deep">
              Custom Framing · Museum Quality
            </p>
            <h1 className="mt-6 font-heading text-5xl font-semibold leading-[1.05] tracking-[0.04em] sm:text-6xl lg:text-7xl">
              CRAFTED
              <br />
              <span className="text-accent">WITH</span>
              <br />
              CARE
            </h1>
            <div className="mx-auto mt-8 flex justify-center">
              <DecoChevronBand className="h-3 w-32 text-accent" />
            </div>
            <p className="mx-auto mt-8 max-w-xl text-lg italic leading-relaxed text-muted-foreground">
              Boutique custom framing for art, photography, and memorabilia.
              Archival materials, museum-quality craftsmanship, and the patient
              attention every piece deserves.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-accent bg-primary px-9 py-4 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Visit Our Shop
              </a>
              <Link
                href="/gallery"
                className="font-heading text-xs font-medium uppercase tracking-[0.3em] underline-offset-4 hover:underline"
              >
                View our work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DecoOrnament />

      {/* Why us */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-10 text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.5em] text-accent-deep">
            Why us
          </p>
          <h2 className="font-heading text-3xl font-medium leading-tight tracking-[0.05em] sm:text-4xl">
            FORM · STRUCTURE · PRESERVATION
          </h2>
          <p className="text-lg leading-relaxed">
            With decades of experience and a passion for preservation, we
            combine traditional craftsmanship with modern techniques. Whether
            it&apos;s a family heirloom or a contemporary print, we treat every
            piece as if it were our own.
          </p>
          <div className="mx-auto inline-block border border-accent px-10 py-8">
            <p className="text-xl font-medium italic leading-snug">
              We only use archival-quality materials and
              <br />
              UV-protective glass to preserve your valuable artwork.
            </p>
          </div>
          <div>
            <Link
              href="/about"
              className="font-heading text-xs font-medium uppercase tracking-[0.3em] underline-offset-4 hover:underline"
            >
              Learn more about our story →
            </Link>
          </div>
        </div>
      </section>

      <DecoOrnament />

      {/* At a glance — frame-within-frame, gold rules between stats */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl border border-accent p-3">
          <div className="border border-accent px-6 py-16 sm:px-12">
            <p className="text-center font-heading text-3xl font-medium tracking-[0.04em] sm:text-4xl">
              FROM MEMORIES <span className="text-accent">·</span> TO
              MASTERPIECES
            </p>
            <div className="mx-auto mt-12 grid max-w-4xl gap-0 sm:grid-cols-3">
              {[
                { stat: "33+", label: "Years serving Central Florida" },
                { stat: "37+", label: "Years of framing experience" },
                { stat: "Top 3", label: "Frame shops in Orlando" },
              ].map(({ stat, label }, i) => (
                <div
                  key={label}
                  className={`space-y-3 border-accent px-6 py-6 text-center ${
                    i > 0 ? "sm:border-l" : ""
                  }`}
                >
                  <p className="font-heading text-6xl font-semibold tracking-[0.04em] text-accent">
                    {stat}
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {[
                "Boutique Custom Framing Studio",
                "Museum-Quality Craftsmanship",
                "Owner Operated",
                "Residential & Commercial",
                "Memorabilia Specialists",
                "Knowledgeable Staff",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DecoOrnament />

      {/* Closing CTA — black backdrop, gold ornament */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-24 text-center">
          <span className="text-accent">
            <DecoMark className="mx-auto h-14 w-14" />
          </span>
          <h2 className="mt-8 font-heading text-4xl font-medium leading-tight tracking-[0.06em] sm:text-5xl">
            COME IN FOR A
            <br />
            <span className="text-accent">FREE CONSULTATION</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed opacity-80">
            1820 N. Orange Ave · Orlando, FL 32804
            <br />
            Mon–Fri 10 AM–5 PM · Sat 10 AM–3 PM
          </p>
          <div className="mt-10">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent px-10 py-4 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition-opacity hover:opacity-90"
            >
              Visit Our Shop
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
