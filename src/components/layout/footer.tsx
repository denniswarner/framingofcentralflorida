import Link from "next/link";
import { Facebook, Instagram } from "iconoir-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/framing-styles", label: "Framing Styles" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
] as const;

const socialLinks = [
  {
    href: "https://www.facebook.com/people/Framing-of-Central-Florida/61587577614285/",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/framingofcentral/",
    label: "Instagram",
    Icon: Instagram,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand & address */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-semibold">
              Framing of Central Florida
            </h3>
            <address className="text-sm not-italic text-muted-foreground leading-relaxed">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                1820 N. Orange Ave
                <br />
                Orlando, FL 32804
              </a>
              <br />
              <a href="tel:+14078948644" className="hover:text-foreground">
                (407) 894-8644
              </a>
            </address>
          </div>

          {/* Quick nav */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social / hours */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Hours
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Monday &ndash; Friday: 10 AM &ndash; 5 PM
              <br />
              Saturday: 10 AM &ndash; 3 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Framing of Central Florida. All
            rights reserved.{" "}
            <span className="ml-1 text-muted-foreground/70">v0.2</span>
          </p>
          <ul className="flex items-center gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
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
