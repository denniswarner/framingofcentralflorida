import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Framing of Central Florida",
    template: "%s | Framing of Central Florida",
  },
  description:
    "Custom picture framing in Orlando, FL. Expert craftsmanship for art, photography, memorabilia, and more.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Framing of Central Florida",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
