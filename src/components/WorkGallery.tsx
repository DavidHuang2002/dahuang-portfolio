import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { isExternalLink } from "@/data/works";

interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
  link: string;
}

interface WorkGalleryProps {
  works: Work[];
}

function WorkFrame({ work }: { work: Work }): ReactElement {
  // Determine if the link is external (starts with http) or internal
  const isExternal = isExternalLink(work.link);

  const WorkContent = () => (
    <div className="group relative">
      {/* Floating Frame Container */}
      <div className="relative bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 ease-out transform hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={work.imageUrl}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        {/* Typography Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 to-transparent p-6">
          <div className="space-y-2">
            <h3 className="text-h4 font-anton text-black group-hover:text-gray-800 transition-colors">
              {work.title}
            </h3>
            <p className="text-body text-gray-600 font-cormorant">
              {work.description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-h6 text-gray-500 font-anton uppercase tracking-wide">
                {work.category}
              </span>
              <span className="text-h6 text-gray-400 font-cormorant">
                {work.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render as Link for internal routes, or as anchor for external URLs
  if (isExternal) {
    return (
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        <WorkContent />
      </a>
    );
  }

  return (
    <Link href={work.link} className="block cursor-pointer">
      <WorkContent />
    </Link>
  );
}

export default function WorkGallery({ works }: WorkGalleryProps): ReactElement {
  return (
    <section className="py-16 md:py-24">
      {/* Gallery Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-h2 mb-4">Selected Works</h2>
        <p className="text-body text-gray-600 max-w-2xl">
          A curated selection of projects that represent my creative journey.
          Each piece tells a story of exploration and craftsmanship.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {works.map((work) => (
          <WorkFrame key={work.id} work={work} />
        ))}
      </div>

      {/* View All Works Link */}
      <div className="mt-16 text-center">
        <a
          href="/works"
          className="inline-flex items-center space-x-2 text-h5 font-anton text-black hover:text-gray-600 transition-colors duration-300 group"
        >
          <span>View All Works</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
