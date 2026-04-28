import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Framing Styles",
  description:
    "Explore our custom framing styles — from traditional wood and ornate gold to modern minimalist and shadow box options.",
};

const framingStyles = [
  {
    title: "Traditional Wood",
    description:
      "Classic hardwood frames in a variety of stains and profiles, perfect for fine art and portraits.",
  },
  {
    title: "Ornate & Gold",
    description:
      "Elegant gilded and decorative frames that add a timeless, museum-quality look.",
  },
  {
    title: "Modern & Minimalist",
    description:
      "Clean lines and slim profiles for contemporary art and photography.",
  },
  {
    title: "Shadow Box",
    description:
      "Deep frames for dimensional objects like jerseys, memorabilia, and keepsakes.",
  },
  {
    title: "Canvas Stretching",
    description:
      "Professional stretching and framing for canvas prints and original paintings.",
  },
  {
    title: "Conservation Framing",
    description:
      "Archival-quality materials and UV-protective glass to preserve valuable artwork.",
  },
];

export default function FramingStylesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight">
            Framing Styles
          </h1>
          <p className="text-lg text-muted-foreground">
            Whatever your vision, we have a framing style to match. Browse our
            options below or visit us for a personalized consultation.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {framingStyles.map((style) => (
            <Card key={style.title}>
              <CardHeader>
                <div className="mb-2 h-32 rounded-md bg-muted" />
                <CardTitle>{style.title}</CardTitle>
                <CardDescription>{style.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  [Sample images to be added]
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
