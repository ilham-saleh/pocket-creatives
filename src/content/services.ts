import { serviceSchema } from "./schemas";
import { photos } from "./home";

export const services = [
  {
    ...serviceSchema.parse({
      slug: "video-production",
      title: "Video Production",
      summary:
        "Films with a purpose. From the first conversation to the final cut, we shape the production around your brand, your audience and what you want to achieve.",
      capabilities: [
        "Brand & promotional films",
        "Commercials & campaigns",
        "Product & social video",
        "Corporate & training films",
        "Event filming",
      ],
      provenance: {
        sourceUrl:
          "https://www.pocketcreatives.co.uk/video-production-company-london/",
        verifiedOn: "2026-11-04",
        approval: "pending",
      },
    }),
    photo: photos.filming,
    headline: "Your story. Beautifully told.",
    details: [
      {
        title: "Creative planning",
        text: "We start with your brief, audience and intended channels. Concepts, scripts, storyboards, casting, locations and scheduling can all be shaped around the production.",
      },
      {
        title: "Production",
        text: "Camera, lighting, sound and direction come together on shoot day. You can be involved on set or leave the practical details with the team.",
      },
      {
        title: "Post-production",
        text: "Editing, colour, sound, graphics and agreed review rounds bring the film together. We discuss music, contributor and location permissions before the work is released.",
      },
      {
        title: "Ready for your channels",
        text: "Final formats, aspect ratios and versions are agreed as part of the brief, whether you need a brand film, product demonstration, internal training or short social edits.",
      },
    ],
  },
  {
    ...serviceSchema.parse({
      slug: "photography",
      title: "Photography",
      summary:
        "Commercial photography in London, with the care and attention your work deserves. From products and plates to people and events, we plan the shoot around how your images will be used.",
      capabilities: [
        "Product & e-commerce",
        "Food & drink",
        "Beauty & fashion",
        "Events & portraits",
        "Jewellery",
      ],
      provenance: {
        sourceUrl:
          "https://www.pocketcreatives.co.uk/photography-services-london/",
        verifiedOn: "2026-11-04",
        approval: "pending",
      },
    }),
    photo: photos.beauty,
    headline: "Every detail, considered.",
    details: [
      {
        title: "Products & e-commerce",
        text: "Product-led photography for websites, packaging and campaigns. We agree the shot list, styling and background treatment around the objects and their intended use.",
      },
      {
        title: "Food, drink & beauty",
        text: "Texture, colour and the details that make a product distinctive. Styling, lighting and composition are planned together, with the right people and props for the shoot.",
      },
      {
        title: "People, fashion & events",
        text: "Portraits, lifestyle imagery, fashion and event coverage. We work through the location, schedule and image requirements before the cameras come out.",
      },
      {
        title: "The finishing touches",
        text: "Editing and retouching are scoped to the brief. That might mean a light finish, cut-outs, background adjustments or more detailed product and skin retouching.",
      },
    ],
  },
];
export const productionStages = [
  {
    title: "Discover",
    subtitle: "The conversation comes first.",
    text: "Tell us about your audience, goals and where the work will appear. We discuss your ideas, scope, timing and budget, then agree a practical direction together.",
  },
  {
    title: "Plan",
    subtitle: "Make room for the creative work.",
    text: "Concepts, scripts and shot lists become a production plan. We arrange the crew, equipment, locations, props and talent your brief needs, with output formats agreed early.",
  },
  {
    title: "Produce",
    subtitle: "Bring the idea into focus.",
    text: "The team handles the camera, lighting and on-set details. Join us at the shoot or leave the production with us; we agree how you would like to be involved.",
  },
  {
    title: "Deliver",
    subtitle: "Care, right through to the finish.",
    text: "Editing, colour, sound or retouching are followed by feedback and agreed revisions. We check relevant rights and clearances, then prepare the approved files for their intended channels.",
  },
];
export const sectorLinks = [
  ["Food & drink", "food-and-drink-photography-video"],
  ["Beauty", "beauty-photography-video"],
  ["Events", "event-photography-video"],
  ["Products", "product-video-production-photography-london"],
  ["Fashion", "fashion-photography-video"],
  ["People & portraits", "people-portrait-photography"],
  ["Crowdfunding", "crowdfunding-photography-video"],
  ["Jewellery", "jewellery-photography-london"],
] as const;
