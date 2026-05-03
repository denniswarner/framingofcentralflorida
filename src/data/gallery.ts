export const CATEGORIES = [
  "Fine Art",
  "Stretched Canvas",
  "Memorabilia",
  "Jersey",
  "Diplomas",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type GalleryItem = {
  id: string;
  title: string;
  categories: Category[];
  image?: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "01", title: "Signed Baseball Display", categories: ["Memorabilia"] },
  { id: "02", title: "Vintage Concert Poster", categories: ["Memorabilia", "Fine Art"] },
  { id: "03", title: "Marlins Jersey, Shadow Box", categories: ["Jersey", "Memorabilia"] },
  { id: "04", title: "UCF Jersey Display", categories: ["Jersey", "Memorabilia"] },
  { id: "05", title: "Olympic Jersey Display", categories: ["Jersey", "Memorabilia"] },
  { id: "06", title: "Medical School Diploma", categories: ["Diplomas"] },
  { id: "07", title: "MBA Diploma & Tassel", categories: ["Diplomas"] },
  { id: "08", title: "Law School Certificate", categories: ["Diplomas"] },
  { id: "09", title: "Original Oil Painting", categories: ["Fine Art"] },
  { id: "10", title: "Watercolor Landscape", categories: ["Fine Art"] },
  { id: "11", title: "Limited Edition Print", categories: ["Fine Art"] },
  { id: "12", title: "Family Portrait", categories: ["Fine Art"] },
  { id: "13", title: "Stretched Canvas Print", categories: ["Stretched Canvas", "Fine Art"] },
  { id: "14", title: "Gallery Wrap Photograph", categories: ["Stretched Canvas"] },
];
