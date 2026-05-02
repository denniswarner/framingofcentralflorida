import type { Metadata } from "next";
import { Suspense } from "react";
import { GalleryClient } from "@/components/gallery/gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of custom framing work — memorabilia, jerseys, diplomas, fine art, and more.",
};

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground">
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
