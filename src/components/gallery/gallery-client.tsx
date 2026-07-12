"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES, galleryItems, type Category } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const param = searchParams.get("category");
  const active: Category | null = (CATEGORIES as readonly string[]).includes(
    param ?? "",
  )
    ? (param as Category)
    : null;

  const setCategory = (category: Category | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const filtered = active
    ? galleryItems.filter((item) => item.categories.includes(active))
    : galleryItems;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-2">
        <FilterPill
          label="All"
          isActive={active === null}
          onClick={() => setCategory(null)}
        />
        {CATEGORIES.map((category) => (
          <FilterPill
            key={category}
            label={category}
            isActive={active === category}
            onClick={() => setCategory(category)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="border border-dashed border-accent py-16 text-center text-sm text-muted-foreground">
          No items in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden border border-accent bg-muted p-1.5"
            >
              <div className="flex h-full items-center justify-center border border-accent/60 px-3 text-center text-sm text-muted-foreground">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-center text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        Showing {filtered.length}{" "}
        {filtered.length === 1 ? "example" : "examples"}
        {active ? ` in ${active}` : ""}
      </p>
    </div>
  );
}

function FilterPill({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        "border px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.25em] transition-colors",
        isActive
          ? "border-accent bg-primary text-primary-foreground"
          : "border-accent bg-background text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
