export const site = {
  name: "Pocket Creatives",
  email: "team@pocketcreatives.co.uk",
  phone: "020 3633 8494",
  phoneHref: "tel:+442036338494",
  location: "London, UK",
  companyNumber: "11041856",
  verifiedOn: "2026-11-04",
  sourceUrl: "https://www.pocketcreatives.co.uk/",
} as const;

// Routes below are implemented; legacy sector/archive links remain on the existing site.
export const destinations = {
  home: { path: "/", href: "/", label: "Home" },
  work: { path: "/work", href: "/work", label: "Work" },
  services: {
    path: "/services",
    href: "/services",
    label: "Services",
  },
  video: {
    path: "/services/video-production",
    href: "/services/video-production",
    label: "Video Production",
  },
  photography: {
    path: "/services/photography",
    href: "/services/photography",
    label: "Photography",
  },
  about: {
    path: "/about",
    href: "/about",
    label: "About",
  },
  process: {
    path: "/process",
    href: "/process",
    label: "Process",
  },
  contact: {
    path: "/contact",
    href: "/contact",
    label: "Start a Project",
  },
  pricing: {
    path: "/pricing",
    href: "/pricing",
    label: "Pricing",
  },
  training: {
    path: "/creative-training",
    href: "/creative-training",
    label: "Creative Training",
  },
  journal: {
    path: "/journal",
    href: "/journal",
    label: "Journal",
  },
  privacy: {
    path: "/privacy-policy",
    href: "/privacy-policy",
    label: "Privacy",
  },
  cookies: {
    path: "/cookie-policy",
    href: "/cookie-policy",
    label: "Cookies",
  },
} as const;

export const mainNavigation = [
  destinations.home,
  destinations.work,
  destinations.services,
  destinations.about,
  destinations.process,
  destinations.contact,
];
export const serviceNavigation = [destinations.video, destinations.photography];
export const socials = [
  { label: "Instagram", href: "https://instagram.com/pocketcreatives" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pocketcreatives/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCfaeAQXU6XfJbLTlWj-FcdQ",
  },
] as const;
