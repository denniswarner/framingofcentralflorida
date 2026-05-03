import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollingBanner } from "@/components/scrolling-banner";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Custom Framing,
            <br />
            Crafted with Care
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Serving the Orlando area with expert picture framing for art,
            photography, memorabilia, and more. Every piece tells a story — let
            us help you display yours.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg" render={<Link href="/gallery" />}>
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Scrolling banner */}
      <ScrollingBanner
        items={[
          "37+ Years of Experience",
          "Owner Operated",
          "Top 3 in Orlando",
          "Since 1993",
        ]}
      />

      {/* Brief intro */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With decades of experience and a passion for preservation, we
            combine traditional craftsmanship with modern techniques. Whether
            it&apos;s a family heirloom or a contemporary print, we treat every
            piece as if it were our own.
          </p>
          <p className="font-heading text-base italic text-foreground sm:text-lg">
            We only use archival-quality materials and UV-protective glass
            <br />
            to preserve your valuable artwork.
          </p>
          <Button variant="link" render={<Link href="/about" />}>
            Learn more about our story &rarr;
          </Button>
        </div>
      </section>

      {/* At a glance */}
      <section className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center gap-6 text-center">
            <span
              aria-hidden
              className="block h-px w-16 bg-foreground/30"
            />
            <p className="font-heading text-3xl italic leading-tight tracking-tight text-foreground sm:text-4xl">
              &ldquo;From Memories to Masterpieces&rdquo;
            </p>
            <span
              aria-hidden
              className="block h-px w-16 bg-foreground/30"
            />
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2 text-center">
              <p className="font-heading text-4xl font-bold">33+</p>
              <p className="text-sm text-muted-foreground">
                Years serving the Orlando area &amp; Central Florida
              </p>
            </div>
            <div className="space-y-2 text-center">
              <p className="font-heading text-4xl font-bold">37+</p>
              <p className="text-sm text-muted-foreground">
                Years of custom framing experience
              </p>
            </div>
            <div className="space-y-2 text-center">
              <p className="font-heading text-4xl font-bold">Top 3</p>
              <p className="text-sm text-muted-foreground">
                Frequently named one of Orlando&apos;s top frame shops
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
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
                className="rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Come in for a free consultation.
          </h2>
          <p className="mt-4 text-base text-secondary-foreground/80">
            1820 N. Orange Ave &middot; Orlando, FL 32804
            <br />
            Mon&ndash;Fri 10 AM&ndash;5 PM &middot; Sat 10 AM&ndash;3 PM
          </p>
          <div className="mt-8">
            <Button size="lg" render={<Link href="/contact" />}>
              Visit Our Shop
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
