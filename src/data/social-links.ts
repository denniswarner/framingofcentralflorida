export const socialLinks = [
  {
    href: "https://www.facebook.com/people/Framing-of-Central-Florida/61587577614285/",
    label: "Facebook",
    icon: "facebook",
  },
  {
    href: "https://www.instagram.com/framingofcentral/",
    label: "Instagram",
    icon: "instagram",
  },
] as const;

export type SocialIcon = (typeof socialLinks)[number]["icon"];
