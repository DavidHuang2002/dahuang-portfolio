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
    link: "https://nicely.vercel.app/",
  },
  {
    id: "2",
    title: "Bookem Volunteer Portal",
    description:
      "A photography series capturing the geometric patterns and hidden beauty within urban architecture and street scenes.",
    imageUrl: "/bookem-intro.png", 
    category: "Photography",
    year: "2023",
    link: "https://bookem-user.vercel.app/",
  },
  {
    id: "3",
    title: "NASA Lunabotics",
    description:
      "An experimental coding project that transforms algorithms into visual art, exploring the aesthetic potential of programming languages.",
    imageUrl: "/robotics-robot.png",
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
