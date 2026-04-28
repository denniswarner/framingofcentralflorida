import { cn } from "@/lib/utils";

interface ScrollingBannerProps {
  items: string[];
  separator?: string;
  className?: string;
  speed?: number;
}

export function ScrollingBanner({
  items,
  separator = "\u2022",
  className,
  speed = 35,
}: ScrollingBannerProps) {
  // Duplicate items enough times to fill the viewport seamlessly
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-primary text-primary-foreground",
        className
      )}
    >
      <div
        className="flex w-max animate-scroll items-center gap-8 whitespace-nowrap py-3 text-sm font-medium"
        style={{ "--scroll-speed": `${speed}s` } as React.CSSProperties}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {i > 0 && (
              <span className="text-primary-foreground/40" aria-hidden>
                {separator}
              </span>
            )}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
