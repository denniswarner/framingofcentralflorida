import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Framing of Central Florida. Visit our shop, call us, or send a message for a free consultation.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question or ready to start a project? Reach out and
            we&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll respond within one
                business day.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
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
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map & info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Visit Our Shop</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                </address>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Phone:</strong>{" "}
                  <a href="tel:+14078948644" className="hover:text-foreground">
                    (407) 894-8644
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href="mailto:framingofcentralflorida@gmail.com"
                    className="hover:text-foreground"
                  >
                    framingofcentralflorida@gmail.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Hours:</strong>
                  <br />
                  Mon&ndash;Fri: 10 AM &ndash; 5 PM
                  <br />
                  Saturday: 10 AM &ndash; 3 PM
                  <br />
                  Sunday: Closed
                </p>
                <Button
                  render={
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Framing+of+Central+Florida%2C+1820+N+Orange+Ave%2C+Orlando%2C+FL+32804"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Map embed placeholder */}
            <div className="aspect-video overflow-hidden rounded-lg border bg-muted">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                [Google Maps embed to be added]
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
