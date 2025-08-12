export interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
  link: string; // Internal route (e.g., "/projects/nicely") or external URL
}

export const featuredWorks: Work[] = [
  {
    id: "1",
    title: "Nicely",
    description:
      "A therapy insights platform that transforms therapy goals into clear actions by automatically organizing therapy notes and providing personalized guidance.",
    imageUrl: "/nicely-landing.png",
    category: "Web Design",
    year: "2024",
    link: "/projects/nicely",
  },
  {
    id: "2",
    title: "Urban Perspectives",
    description:
      "A photography series capturing the geometric patterns and hidden beauty within urban architecture and street scenes.",
    imageUrl: "/nicely-landing.png", // Placeholder - replace with actual image
    category: "Photography",
    year: "2023",
    link: "/projects/urban-perspectives",
  },
  {
    id: "3",
    title: "Code Poetry",
    description:
      "An experimental coding project that transforms algorithms into visual art, exploring the aesthetic potential of programming languages.",
    imageUrl: "/nicely-landing.png", // Placeholder - replace with actual image
    category: "Creative Code",
    year: "2024",
    link: "/projects/code-poetry",
  },
];

/**
 * Utility function to check if a link is external
 * @param link - The link to check
 * @returns True if the link is external (starts with http)
 */
export function isExternalLink(link: string): boolean {
  return link.startsWith("http");
}
