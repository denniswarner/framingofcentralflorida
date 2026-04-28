import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of custom framing work — over 100 examples of framed art, photography, memorabilia, and more.",
};

// Placeholder for the 104 gallery images
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  alt: `Framing example ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground">
            See examples of our custom framing work. From family portraits to
            sports memorabilia, every piece gets the attention it deserves.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg border bg-muted"
            >
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                {item.alt}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Showing 12 of 104 examples. Full gallery coming soon.
        </p>
      </div>
    </main>
  );
}
