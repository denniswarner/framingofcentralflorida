"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DecoChevronBand } from "@/components/deco/ornaments";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/framing-styles", label: "Styles" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container relative mx-auto flex flex-col items-center gap-3 px-4 py-6 text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <DecoChevronBand className="h-2.5 w-12 shrink-0 text-accent sm:h-3 sm:w-20" />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-deep sm:tracking-[0.45em]">
            Established 1993 · Orlando
          </span>
          <DecoChevronBand className="h-2.5 w-12 shrink-0 text-accent sm:h-3 sm:w-20" />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Link
            href="/"
            className="font-heading text-xl font-semibold tracking-[0.18em] sm:text-2xl"
          >
            FRAMING OF CENTRAL FLORIDA
          </Link>
          <p className="text-lg italic leading-none sm:text-xl">
            From Memories to Masterpieces
          </p>
        </div>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="mt-2 hidden flex-wrap items-center justify-center gap-7 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-[0.35em] transition-colors",
                pathname === link.href
                  ? "text-accent-deep underline underline-offset-8"
                  : "text-foreground hover:text-accent-deep",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-6 md:hidden"
              />
            }
          >
            <MenuIcon className="size-5" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-accent bg-background">
            <SheetHeader>
              <SheetTitle className="font-heading tracking-[0.2em]">
                MENU
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Primary" className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block px-3 py-3 text-sm uppercase tracking-[0.3em] transition-colors",
                    pathname === link.href
                      ? "text-accent-deep"
                      : "text-foreground hover:text-accent-deep",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
