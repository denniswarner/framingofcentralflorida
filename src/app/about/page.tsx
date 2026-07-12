import type { Metadata } from "next";
import { DecoChevronBand } from "@/components/deco/ornaments";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Framing of Central Florida — our story, our team, and our commitment to quality custom framing.",
};

export default function WhoWeArePage() {
  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-10 text-center">
        <div className="space-y-6">
          <p className="text-[0.65rem] uppercase tracking-[0.5em] text-accent-deep">
            Our Story
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-[0.06em] sm:text-5xl">
            ABOUT
          </h1>
          <div className="flex justify-center">
            <DecoChevronBand className="h-3 w-32 text-accent" />
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          With decades of experience in custom framing, Framing of Central
          Florida has been proudly serving the Orlando area. Our skilled team
          combines traditional craftsmanship with modern techniques to preserve
          and display what matters most to you.
        </p>
        <div className="border border-accent p-3">
          <div className="border border-accent p-10 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            [Team photo and detailed story content to be added]
          </div>
        </div>
      </div>
    </main>
  );
}
