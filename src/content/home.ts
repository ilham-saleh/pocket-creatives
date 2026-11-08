import type { StaticImageData } from "next/image";
import originalHero from "@/assets/generated/hero-portrait.png";
import { faqSchema } from "./schemas";
import beauty from "@/assets/home-preview/beauty.jpg";
import beautyProduct from "@/assets/home-preview/beauty2.jpg";
import food from "@/assets/home-preview/food.jpg";
import foodDetail from "@/assets/home-preview/food2.jpg";
import portrait from "@/assets/home-preview/portrait.jpg";
import studio from "@/assets/home-preview/studio.jpg";
import filming from "@/assets/home-preview/filming.jpg";
import planning from "@/assets/home-preview/planning.jpg";
import about from "@/assets/home-preview/about.png";
import watch from "@/assets/home-preview/watch.jpg";
import boulder from "@/assets/home-preview/boulder.png";
import reel from "@/assets/home-preview/vimeo-1101645222.jpg";
import walnuts from "@/assets/home-preview/vimeo-648958635.jpg";
import samsung from "@/assets/home-preview/vimeo-1051508574.jpg";

// These are genuine, visually inspected published works. Discovery does not
// establish release rights: keep the homepage preview gate until clearance.
export type HomePhoto = {
  image: StaticImageData;
  alt: string;
  position?: string;
};
export const photos = {
  hero: {
    image: originalHero,
    alt: "Original generated close-up portrait in warm light against a blue-grey background.",
    position: "center",
  },
  beauty: {
    image: beauty,
    alt: "A woman holding a lilac skincare tube beside her face.",
    position: "64% 42%",
  },
  beautyProduct: {
    image: beautyProduct,
    alt: "Hands holding a cosmetic tube against a turquoise background.",
  },
  food: {
    image: food,
    alt: "A richly glazed dish on a patterned plate, lit against a dark background.",
  },
  foodDetail: {
    image: foodDetail,
    alt: "A bowl of curry and rice served with a crisp flatbread.",
  },
  portrait: {
    image: portrait,
    alt: "A beauty portrait of a woman applying an orange face mask.",
  },
  studio: {
    image: studio,
    alt: "A camera beside a laptop displaying a group portrait during a shoot.",
  },
  filming: {
    image: filming,
    alt: "Camera crew filming a product demonstration in a kitchen.",
  },
  planning: {
    image: planning,
    alt: "A photographer and crew working with models under studio lighting.",
  },
  about: {
    image: about,
    alt: "A beauty production in progress, with the model framed by studio equipment.",
  },
  watch: {
    image: watch,
    alt: "Close-up of a dark watch face and silver hands.",
  },
  boulder: {
    image: boulder,
    alt: "A climber preparing her shoes beside an indoor climbing wall.",
  },
  reel: {
    image: reel,
    alt: "A professional cinema camera on a Pocket Creatives production.",
  },
  walnuts: {
    image: walnuts,
    alt: "Walnut pieces falling onto a festive dish in the California Walnuts film.",
  },
  samsung: {
    image: samsung,
    alt: "Samsung SparkBox film poster featuring a business interview.",
  },
} satisfies Record<string, HomePhoto>;

export const clients = [
  "The Telegraph",
  "Samsung",
  "realme",
  "Philips",
  "Rightmove",
  "Yop and Tom",
];
export const homeServices = [
  {
    id: "video",
    title: "Video Production",
    photo: photos.filming,
    description:
      "From the first idea to the final edit. Films for brands, campaigns, products and the people behind them.",
    tags: ["Brand films", "Commercials", "Events", "Social content"],
    href: "https://www.pocketcreatives.co.uk/video-production-company-london/",
  },
  {
    id: "photography",
    title: "Photography",
    photo: photos.portrait,
    description:
      "Thoughtfully lit, carefully composed. Photography that brings your products, people and stories into focus.",
    tags: ["Products", "Food & drink", "Beauty", "People"],
    href: "https://www.pocketcreatives.co.uk/photography-services-london/",
  },
] as const;

export const featuredWork = [
  {
    id: "california-walnuts",
    number: "01",
    title: "California Walnuts",
    subtitle: "Christmas TV Ad",
    category: "Film / Commercial",
    photo: photos.walnuts,
    description: "A festive commercial celebrating California Walnuts.",
    href: "https://vimeo.com/648958635",
    action: "Watch the Film",
    portrait: false,
  },
  {
    id: "beauty-photography",
    number: "02",
    title: "Beauty, in detail.",
    subtitle: "Selected photography",
    category: "Photography / Beauty",
    photo: photos.beautyProduct,
    description:
      "Product textures, considered light and the human details. Explore the existing beauty collection.",
    href: "https://www.pocketcreatives.co.uk/portfolio/beauty-photography-video/",
    action: "Explore the Collection",
    portrait: false,
  },
  {
    id: "samsung-sparkbox",
    number: "03",
    title: "Samsung SparkBox",
    subtitle: "A New Era of Business",
    category: "Film / Brand",
    photo: photos.samsung,
    description: "A new era of business. Watch the Samsung SparkBox film.",
    href: "https://vimeo.com/1051508574",
    action: "Watch the Film",
    portrait: true,
  },
  {
    id: "food-photography",
    number: "04",
    title: "Good enough to taste.",
    subtitle: "Selected photography",
    category: "Photography / Food & drink",
    photo: photos.food,
    description:
      "Food and drink photography from the studio’s existing portfolio. See the full collection.",
    href: "https://www.pocketcreatives.co.uk/portfolio/food-and-drink-photography-video/",
    action: "Explore the Collection",
    portrait: false,
  },
] as const;

export const processSteps = [
  {
    title: "Discover",
    description:
      "We get to know your ideas, audience and goals, then agree the brief and scope together.",
    photo: photos.studio,
  },
  {
    title: "Plan",
    description:
      "Creative thinking becomes a production plan: the people, locations, timings and formats your project needs.",
    photo: photos.planning,
  },
  {
    title: "Produce",
    description:
      "We bring the plan to life through carefully considered filming and photography, with you involved along the way.",
    photo: photos.filming,
  },
  {
    title: "Deliver",
    description:
      "Editing, feedback and the finishing touches. Your final assets, prepared for the channels where they’ll be seen.",
    photo: photos.about,
  },
] as const;

// Exact short excerpts from the source homepage, with original attribution.
export const testimonials = [
  {
    quote: "our video project was in safe hands!",
    name: "Alice Morgan",
    company: "The Telegraph",
  },
  {
    quote: "consistently delivered above and beyond",
    name: "Giang Cao",
    company: "realme",
  },
  {
    quote: "every time it gets better and easier",
    name: "Joppe Coelingh",
    company: "Yop and Tom",
  },
  {
    quote: "high quality, interesting photographs",
    name: "Dominique Mallion",
    company: "Philips",
  },
] as const;

export const homeFAQs = faqSchema.array().parse([
  {
    id: "both",
    question: "Can you handle both video and photography?",
    answer:
      "Yes. Video production and photography are both core services, so we can discuss a coordinated approach to your brief.",
  },
  {
    id: "start",
    question: "Where do we start?",
    answer:
      "Tell us what you have in mind, who it is for and where the content will be used. We’ll talk through the scope, creative approach and practical next steps.",
  },
  {
    id: "planning",
    question: "Can you help with the creative planning?",
    answer:
      "Yes. The process can include concepts, planning and pre-production as well as the shoot, editing and final delivery.",
  },
  {
    id: "cost",
    question: "How is a project priced?",
    answer:
      "Every brief is different. The production scope, shoot requirements and final deliverables shape the quote. Get in touch to discuss your project.",
  },
  {
    id: "training",
    question: "Do you offer creative training?",
    answer:
      "Pocket Creatives offers bespoke, in-person, one-to-one training in photography, filming and editing. It starts with a conversation about what you want to learn.",
  },
]);

export const journalArticles = [
  {
    title: "Photography and Video Agency in London",
    category: "From the studio",
    photo: photos.about,
    href: "https://www.pocketcreatives.co.uk/photography-and-video-agency-london/",
  },
  {
    title: "Why Hire Us as Your Product Photographer",
    category: "Photography",
    photo: photos.watch,
    href: "https://www.pocketcreatives.co.uk/hire-a-product-photographer/",
  },
  {
    title: "Choose Pocket Creatives Photography & Videography Services",
    category: "Video & photography",
    photo: photos.planning,
    href: "https://www.pocketcreatives.co.uk/photography-and-videography-services/",
  },
] as const;
