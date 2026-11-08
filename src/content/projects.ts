import { photos, type HomePhoto } from "./home";

export type PortfolioProject = {
  slug: string;
  title: string;
  client?: string;
  kind: "Video" | "Photography";
  categories: string[];
  photo: HomePhoto;
  gallery: HomePhoto[];
  introduction: string;
  sourceUrl: string;
  vimeoId?: string;
  rights: "pending";
  verifiedOn: string;
};
const source = "https://www.pocketcreatives.co.uk/";
export const projects: PortfolioProject[] = [
  {
    slug: "california-walnuts",
    title: "California Walnuts",
    client: "California Walnuts",
    kind: "Video",
    categories: ["Commercials & Campaigns", "Food & Drink"],
    photo: photos.walnuts,
    gallery: [],
    introduction:
      "The California Walnuts Christmas TV Ad, from Pocket Creatives’ published film portfolio.",
    sourceUrl: source,
    vimeoId: "648958635",
    rights: "pending",
    verifiedOn: "2026-11-04",
  },
  {
    slug: "beauty-photography",
    title: "Beauty, in detail.",
    kind: "Photography",
    categories: ["Beauty", "Products"],
    photo: photos.beautyProduct,
    gallery: [photos.beauty, photos.portrait],
    introduction:
      "A selection of beauty photography from Pocket Creatives: skincare, product details and portraits. This is a collection of published work, rather than a single campaign.",
    sourceUrl: source + "portfolio/beauty-photography-video/",
    rights: "pending",
    verifiedOn: "2026-11-04",
  },
  {
    slug: "samsung-sparkbox",
    title: "Samsung SparkBox",
    client: "Samsung",
    kind: "Video",
    categories: ["Commercials & Campaigns"],
    photo: photos.samsung,
    gallery: [],
    introduction:
      "A New Era of Business. The Samsung SparkBox film from Pocket Creatives’ published portfolio.",
    sourceUrl: source,
    vimeoId: "1051508574",
    rights: "pending",
    verifiedOn: "2026-11-04",
  },
  {
    slug: "food-photography",
    title: "Good enough to taste.",
    kind: "Photography",
    categories: ["Food & Drink"],
    photo: photos.food,
    gallery: [photos.foodDetail],
    introduction:
      "Considered lighting, texture and colour in a selection of food photography from Pocket Creatives’ existing portfolio.",
    sourceUrl: source + "portfolio/food-and-drink-photography-video/",
    rights: "pending",
    verifiedOn: "2026-11-04",
  },
  {
    slug: "product-photography",
    title: "Products, up close.",
    kind: "Photography",
    categories: ["Products"],
    photo: photos.watch,
    gallery: [],
    introduction:
      "A closer look at product photography from the Pocket Creatives portfolio. Light and composition bring out the details of the object.",
    sourceUrl:
      source + "portfolio/product-video-production-photography-london/",
    rights: "pending",
    verifiedOn: "2026-11-04",
  },
];
export const projectFilters = [
  "All Work",
  "Video",
  "Photography",
  "Commercials & Campaigns",
  "Products",
  "Food & Drink",
  "Beauty",
].filter(
  (filter) =>
    filter === "All Work" ||
    projects.some((p) => p.kind === filter || p.categories.includes(filter)),
);
export const findProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
