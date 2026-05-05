import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sandbox",
  robots: { index: false, follow: false },
};

export default function SandboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="border-b border-dashed border-foreground/30 bg-background py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 text-xs uppercase tracking-wider text-muted-foreground">
          <span>
            Sandbox · prototype review · not indexed
          </span>
          <nav className="flex flex-wrap items-center gap-4">
            <Link href="/sandbox" className="hover:text-foreground">
              Index
            </Link>
            <Link
              href="/sandbox/prairie"
              className="hover:text-foreground"
            >
              Prairie
            </Link>
            <Link
              href="/sandbox/sullivan"
              className="hover:text-foreground"
            >
              Sullivan
            </Link>
            <Link
              href="/sandbox/postmodern"
              className="hover:text-foreground"
            >
              Post-Modern
            </Link>
            <Link
              href="/sandbox/art-deco"
              className="hover:text-foreground"
            >
              Art Deco
            </Link>
            <Link href="/" className="hover:text-foreground">
              ← Live site
            </Link>
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
