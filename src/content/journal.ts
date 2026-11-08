import { photos } from "./home";
// An edited reading version of a real source article, not a fabricated post.
// Original publication date/author preserved; release review is still pending.
export const articles = [
  {
    slug: "photography-and-video-agency-london",
    title:
      "Photography and Video Agency in London: Your Brand, Brought to Life",
    description:
      "Planning photography and video together, from the first brief to the final assets.",
    category: "From the studio",
    author: "Pocket Creatives",
    publishedOn: "2026-09-07",
    sourceUrl:
      "https://www.pocketcreatives.co.uk/photography-and-video-agency-london/",
    approval: "pending" as const,
    photo: photos.about,
    sections: [
      {
        heading: "Start with what the content needs to do",
        paragraphs: [
          "A product launch, a brand campaign and a library of social content each call for a different approach. Before planning a shoot, consider the audience, the message and the places where the finished work will appear.",
          "Pocket Creatives brings photography and video production together, with creative direction, production and post-production shaped around the same brief.",
        ],
      },
      {
        heading: "Photography and film, planned together",
        paragraphs: [
          "Commercial photography can range from food and product imagery to event coverage and corporate portraits. Video might explain a product, introduce the people behind a business or tell a longer brand story.",
          "When a campaign needs both, planning them together helps keep the visual direction consistent. Formats and versions belong in the initial conversation, so the shoot can capture the material each channel needs.",
        ],
      },
      {
        heading: "From the first conversation to delivery",
        paragraphs: [
          "The process begins with the brand, the audience, the goals and the available budget. Concept development and pre-production turn that conversation into a practical plan for locations, people and equipment.",
          "Production and post-production then follow the agreed direction, with review and final delivery included in the scope.",
        ],
      },
      {
        heading: "Choosing a creative partner",
        paragraphs: [
          "Look at relevant work, ask about the production process and understand what the quote includes. Good communication matters throughout: your team should listen to the brief, explain the practical choices and agree a realistic timetable.",
          "If you are planning photography or video, start by sharing what you want to create, who it is for and when you need it.",
        ],
      },
    ],
  },
];
