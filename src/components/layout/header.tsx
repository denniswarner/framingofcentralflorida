"use client";

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
  SheetClose,
} from "@/components/ui/sheet";
import { DecoChevronBand } from "@/components/deco/ornaments";
import { socialLinks } from "@/data/social-links";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/framing-styles", label: "Framing Styles" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container relative mx-auto flex flex-col items-center gap-3 px-4 py-6 text-center">
        <DecoChevronBand className="h-3 w-40 text-accent" />
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-[0.18em] sm:text-2xl"
        >
          FRAMING OF CENTRAL FLORIDA
        </Link>
        <p className="-mt-1 text-lg italic leading-none sm:text-xl">
          From Memories to Masterpieces
        </p>
        <span className="text-xs font-medium uppercase tracking-[0.45em] text-accent-deep sm:text-sm">
          Established 1993 · Orlando
        </span>

        <ul className="absolute left-4 top-7 flex items-center gap-3 md:left-auto md:right-6">
          {socialLinks.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-foreground/70 transition-colors hover:text-accent-deep"
              >
                <Icon width={18} height={18} />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop nav */}
        <nav className="mt-2 hidden flex-wrap items-center justify-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs uppercase tracking-[0.35em] transition-colors",
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
        <Sheet>
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
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose key={link.href} render={<span />}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3 py-3 text-xs uppercase tracking-[0.3em] transition-colors",
                      pathname === link.href
                        ? "text-accent-deep"
                        : "text-foreground hover:text-accent-deep",
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
