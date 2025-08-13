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
    category: "My first 'failed' start-up",
    year: "2024",
    link: "https://nicely.vercel.app/",
  },
  {
    id: "2",
    title: "Volunteer Portal",
    description:
      "Built for Nashville’s largest youth literacy non-profit Book’em, enabling 300+ volunteers to sign up for events, track hours, and view history — responsible for the event sign-up endpoint -- from database design to RESTful APIs.",
    imageUrl: "/bookem-intro.png",
    category: "Making a difference",
    year: "2023",
    link: "https://bookem-user.vercel.app/",
  },
  {
    id: "3",
    title: "NASA Lunabotics",
    description:
      "Responsible for the localization algorithm in autonomous navigation. Turned an ESP32 into a radio-wave “robot GPS” using trilateration, after testing approaches with infrared and lidar, earning 2nd in Autonomy and 5th overall nationally.",
    imageUrl: "/robotics-robot.png",
    category: "Now that's some cool shit",
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
