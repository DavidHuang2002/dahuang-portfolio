import type { ReactElement } from "react";
import Image from "next/image";

interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
}

interface OrganicGalleryProps {
  works: Work[];
}

function OrganicWork({
  work,
  size = "medium",
}: {
  work: Work;
  size?: "small" | "medium" | "large";
}): ReactElement {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-2 row-span-1",
    large: "col-span-1 md:col-span-2 lg:col-span-3 row-span-2",
  };

  const imageClasses = {
    small: "aspect-square",
    medium: "aspect-[4/3]",
    large: "aspect-[3/2]",
  };

  return (
    <div className={`group relative ${sizeClasses[size]} p-4`}>
      <div className="relative bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-700 ease-out transform hover:-translate-y-2 hover:scale-[1.02]">
        {/* Image */}
        <div className={`relative ${imageClasses[size]} overflow-hidden`}>
          <Image
            src={work.imageUrl}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-3">
            <h3 className="text-h4 font-anton text-black group-hover:text-gray-800 transition-colors">
              {work.title}
            </h3>
            <p className="text-body text-gray-600 font-cormorant line-clamp-3">
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
}

export default function OrganicGallery({
  works,
}: OrganicGalleryProps): ReactElement {
  return (
    <section className="py-16 md:py-24">
      {/* Gallery Header */}
      <div className="mb-16 md:mb-20">
        <h2 className="text-h2 mb-6">Selected Works</h2>
        <p className="text-body text-gray-600 max-w-2xl">
          A curated collection arranged like pieces in a gallery. Each work
          finds its natural place in the composition.
        </p>
      </div>

      {/* Organic Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
        {/* Large featured work */}
        <OrganicWork work={works[0]} size="large" />

        {/* Medium work */}
        <OrganicWork work={works[1]} size="medium" />

        {/* Small work */}
        <OrganicWork work={works[2]} size="small" />
      </div>

      {/* View All Works Link */}
      <div className="mt-20 text-center">
        <a
          href="/works"
          className="inline-flex items-center space-x-3 text-h5 font-anton text-black hover:text-gray-600 transition-colors duration-300 group"
        >
          <span>View Complete Collection</span>
          <svg
            className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
