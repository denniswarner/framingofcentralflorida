import Link from "next/link";

export default function SandboxIndexPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Design exploration
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight">
            Visual Prototypes
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Two cohesive design directions for the homepage, both inspired
            by the architectural movements Ray gravitates toward. Each
            variant rebuilds the homepage with a complete visual identity
            — typography, geometric mark, layout rhythm, and accents — so
            we can react to a complete look rather than isolated changes.
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2">
          {[
            {
              href: "/sandbox/prairie",
              tag: "Variant A",
              title: "Prairie",
              description:
                "Frank Lloyd Wright–leaning. Marcellus headings, horizontal rhythm, geometric Prairie-window mark, double-hairline framing borders. Calm, grounded, architectural.",
            },
            {
              href: "/sandbox/sullivan",
              tag: "Variant B",
              title: "Sullivan",
              description:
                "Louis Sullivan–leaning. Cormorant Garamond display, ornamental band motif, vertical proportions, decorative rules. Refined, intricate, slightly Art Nouveau.",
            },
            {
              href: "/sandbox/postmodern",
              tag: "Variant C",
              title: "Post-Modern",
              description:
                "Venturi / Memphis–leaning. Fraunces display with italic emphasis, color blocks, geometric shape ornament, oversized headlines. Playful, asymmetric, deliberately distinctive.",
            },
            {
              href: "/sandbox/art-deco",
              tag: "Variant D",
              title: "Art Deco",
              description:
                "Cinzel display, vertical proportions, sunburst mark, chevron bands, frame-within-frame borders. Cream + black + antique gold. Period-rich, gallery-luxurious.",
            },
          ].map(({ href, tag, title, description }) => (
            <li
              key={href}
              className="rounded-lg border bg-background p-6 transition-colors hover:border-foreground"
            >
              <Link href={href} className="block space-y-3">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {tag}
                </span>
                <h2 className="font-heading text-2xl font-bold">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
                <span className="inline-block text-sm font-medium underline-offset-4 hover:underline">
                  View variant →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="space-y-3 border-t pt-8 text-sm text-muted-foreground">
          <h2 className="font-heading text-base font-semibold uppercase tracking-wider text-foreground">
            How to review
          </h2>
          <p>
            These prototypes are visual sketches, not feature additions —
            real photography, copy, and components will follow once a
            direction is chosen. React to the overall <em>feel</em>: do
            the typography, mark, and rhythm match how Ray wants the
            studio to read? Mix and match welcome — we can take the
            typography from one and the mark from the other.
          </p>
          <p>
            The live site at <Link href="/" className="underline">/</Link>{" "}
            stays in wireframe / grayscale mode and is unaffected by
            anything in <code>/sandbox</code>.
          </p>
        </section>
      </div>
    </main>
  );
}
