// Content-equivalent core routes only. Sector/archive migration remains a release task.
export const legacyRedirects = [
  { source: "/about-us", destination: "/about", permanent: true },
  {
    source: "/video-production-company-london",
    destination: "/services/video-production",
    permanent: true,
  },
  {
    source: "/photography-services-london",
    destination: "/services/photography",
    permanent: true,
  },
  { source: "/how-we-work", destination: "/process", permanent: true },
  {
    source: "/creative-training-courses",
    destination: "/creative-training",
    permanent: true,
  },
  {
    source: "/contact-project-enquiry",
    destination: "/contact",
    permanent: true,
  },
];
