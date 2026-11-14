import Link from "next/link";
import { DecoChevronBand } from "@/components/deco/ornaments";
import { socialLinks } from "@/data/social-links";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/framing-styles", label: "Framing Styles" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-accent bg-foreground text-background">
      <div className="container mx-auto px-4 py-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <DecoChevronBand className="h-3 w-32 text-accent" />
          <span className="font-heading text-sm font-semibold tracking-[0.25em]">
            FRAMING OF CENTRAL FLORIDA
          </span>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-10 text-center sm:grid-cols-3 sm:text-left">
          {/* Brand & address */}
          <div className="space-y-4">
            <h3 className="text-[0.65rem] uppercase tracking-[0.4em] text-accent">
              Visit
            </h3>
            <address className="text-sm not-italic leading-relaxed text-background/80">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                1820 N. Orange Ave
                <br />
                Orlando, FL 32804
              </a>
              <br />
              <a
                href="tel:+14078948644"
                className="transition-colors hover:text-accent"
              >
                (407) 894-8644
              </a>
            </address>
          </div>

          {/* Quick nav */}
          <div className="space-y-4">
            <h3 className="text-[0.65rem] uppercase tracking-[0.4em] text-accent">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-[0.65rem] uppercase tracking-[0.4em] text-accent">
              Hours
            </h3>
            <p className="text-sm leading-relaxed text-background/80">
              Monday &ndash; Friday: 10 AM &ndash; 5 PM
              <br />
              Saturday: 10 AM &ndash; 3 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-accent/40 pt-6 sm:flex-row sm:justify-between">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-background/60">
            &copy; {new Date().getFullYear()} Framing of Central Florida
            <span className="ml-2 text-background/40">v0.3</span>
          </p>
          <ul className="flex items-center gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-background/60 transition-colors hover:text-accent"
                >
                  <Icon width={20} height={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
