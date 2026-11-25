import type { Metadata } from "next";
import { Suspense } from "react";
import { GalleryClient } from "@/components/gallery/gallery-client";
import { DecoChevronBand } from "@/components/deco/ornaments";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of custom framing work — memorabilia, jerseys, diplomas, fine art, and more.",
};

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-accent-deep">
            Our Work
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-[0.06em] sm:text-5xl">
            GALLERY
          </h1>
          <div className="flex justify-center">
            <DecoChevronBand className="h-3 w-32 text-accent" />
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            See examples of our custom framing work. Filter by category to
            explore memorabilia, jerseys, diplomas, and fine art.
          </p>
        </div>
        <Suspense fallback={null}>
          <GalleryClient />
        </Suspense>
      </div>
    </main>
  );
}
