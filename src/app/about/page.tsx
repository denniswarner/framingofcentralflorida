import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Framing of Central Florida — our story, our team, and our commitment to quality custom framing.",
};

export default function WhoWeArePage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          About
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          With decades of experience in custom framing, Framing of Central
          Florida has been proudly serving the Orlando area. Our skilled team
          combines traditional craftsmanship with modern techniques to preserve
          and display what matters most to you.
        </p>
        <div className="rounded-lg border bg-muted/30 p-8 text-center text-sm text-muted-foreground">
          [Team photo and detailed story content to be added]
        </div>
      </div>
    </main>
  );
}
