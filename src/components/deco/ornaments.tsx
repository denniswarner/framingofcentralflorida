import { cn } from "@/lib/utils";

/** Sunburst fan mark — the signature Art Deco motif for the brand. */
export function DecoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M16 28 L8 8" />
      <path d="M16 28 L12 6" />
      <path d="M16 28 L16 4" />
      <path d="M16 28 L20 6" />
      <path d="M16 28 L24 8" />
      <line x1="3" y1="28" x2="29" y2="28" />
      <line x1="5" y1="30" x2="27" y2="30" />
      <circle cx="16" cy="28" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Repeating chevron band used above headers and in footers. */
export function DecoChevronBand({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M0 12 L12 4 L24 12 L36 4 L48 12 L60 4 L72 12 L84 4 L96 12 L108 4 L120 12 L132 4 L144 12 L156 4 L168 12 L180 4 L192 12 L204 4 L216 12 L228 4 L240 12" />
      <path
        d="M0 8 L12 0 L24 8 L36 0 L48 8 L60 0 L72 8 L84 0 L96 8 L108 0 L120 8 L132 0 L144 8 L156 0 L168 8 L180 0 L192 8 L204 0 L216 8 L228 0 L240 8"
        opacity="0.45"
      />
    </svg>
  );
}

/** Centered section divider: gold rule — sunburst — gold rule. */
export function DecoOrnament({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center justify-center gap-5 py-12 text-accent",
        className,
      )}
    >
      <span className="h-px w-20 bg-current sm:w-32" />
      <DecoMark className="h-8 w-8" />
      <span className="h-px w-20 bg-current sm:w-32" />
    </div>
  );
}
