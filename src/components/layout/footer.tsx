import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/framing-styles", label: "Framing Styles" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
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
              1820 N. Orange Ave
              <br />
              Orlando, FL 32804
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

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Framing of Central Florida. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
