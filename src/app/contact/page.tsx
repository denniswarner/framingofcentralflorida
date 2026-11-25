import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DecoChevronBand } from "@/components/deco/ornaments";
import { socialLinks } from "@/data/social-links";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Framing of Central Florida. Visit our shop, call us, or send a message for a free consultation.",
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-accent-deep">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-[0.06em] sm:text-5xl">
            CONTACT US
          </h1>
          <div className="flex justify-center">
            <DecoChevronBand className="h-3 w-32 text-accent" />
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Have a question or ready to start a project? Reach out and
            we&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact form */}
          <div className="border border-accent p-2">
            <div className="h-full border border-accent p-8">
              <h2 className="font-heading text-xl font-medium tracking-[0.1em]">
                SEND US A MESSAGE
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Fill out the form below and we&apos;ll respond within one
                business day.
              </p>
              <p className="mt-4 border-l border-accent pl-4 text-base italic leading-relaxed text-muted-foreground">
                Because every frame we build is designed and fitted by hand, we
                don&apos;t take orders online. Every project starts with an
                in-person consultation at our shop, and we&apos;re happy to
                answer questions here before you visit.
              </p>
              <form className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(407) 555-1234" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your framing project..."
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-accent bg-primary px-9 py-4 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Visit info & map */}
          <div className="space-y-6">
            <div className="border border-accent p-2">
              <div className="border border-accent p-8">
                <h2 className="font-heading text-xl font-medium tracking-[0.1em]">
                  VISIT OUR SHOP
                </h2>
                <div className="mt-6 space-y-4">
                  <address className="text-base not-italic leading-relaxed text-muted-foreground">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground"
                    >
                      1820 N. Orange Ave
                      <br />
                      Orlando, FL 32804
                    </a>
                  </address>
                  <p className="text-base text-muted-foreground">
                    <strong className="font-medium text-foreground">
                      Phone:
                    </strong>{" "}
                    <a
                      href="tel:+14078948644"
                      className="transition-colors hover:text-foreground"
                    >
                      (407) 894-8644
                    </a>
                  </p>
                  <p className="text-base text-muted-foreground">
                    <strong className="font-medium text-foreground">
                      Email:
                    </strong>{" "}
                    <a
                      href="mailto:framingofcentralflorida@gmail.com"
                      className="transition-colors hover:text-foreground"
                    >
                      framingofcentralflorida@gmail.com
                    </a>
                  </p>
                  <p className="text-base text-muted-foreground">
                    <strong className="font-medium text-foreground">
                      Hours:
                    </strong>
                    <br />
                    Mon&ndash;Fri: 10 AM &ndash; 5 PM
                    <br />
                    Saturday: 10 AM &ndash; 3 PM
                    <br />
                    Sunday: Closed
                  </p>
                  <div className="text-base text-muted-foreground">
                    <strong className="font-medium text-foreground">
                      Follow:
                    </strong>
                    <ul className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2">
                      {socialLinks.map(({ href, label, Icon }) => (
                        <li key={label}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                          >
                            <Icon width={18} height={18} />
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-accent bg-primary px-9 py-4 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="aspect-video overflow-hidden border border-accent bg-muted">
              <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.3em] text-muted-foreground">
                [Google Maps embed to be added]
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
