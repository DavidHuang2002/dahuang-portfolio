"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

interface TypographyGalleryProps {
  works: Work[];
}

function WorkShowcase({
  work,
  index,
  imageOnRight = true,
}: {
  work: Work;
  index: number;
  imageOnRight?: boolean;
}): ReactElement {
  const [imageError, setImageError] = useState(false);
  const isExternal = isExternalLink(work.link);

  const WorkContent = () => (
    <div className="group relative min-h-[60vh] md:min-h-[80vh] flex flex-col md:flex-row items-center overflow-hidden">
      {/* Typography Section */}
      <div
        className={`flex-1 flex flex-col justify-center px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-0 ${
          imageOnRight ? "order-2 md:order-1" : "order-2 md:order-2"
        }`}
      >
        {/* Project Number */}
        <div className="mb-4 md:mb-8 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
          <span className="text-h2 md:text-h1 text-black/30">
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Project Title - The Star */}
        <h2 className="text-h1 md:text-[80px] lg:text-[100px] xl:text-[120px] mb-6 md:mb-8 group-hover:scale-105 transition-transform duration-700">
          {work.title}
        </h2>

        {/* Category and Year */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-8 mb-6 md:mb-8 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
          <span className="text-h6 md:text-h5 uppercase tracking-widest text-black/60">
            {work.category}
          </span>
          <span className="text-h6 md:text-h5 text-black/60">{work.year}</span>
        </div>

        {/* Description */}
        <div className="max-w-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-body text-black/70 leading-relaxed">
            {work.description}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`flex-1 relative w-full md:w-auto h-[40vh] md:h-full min-h-[40vh] md:min-h-[70vh] ${
          imageOnRight ? "order-1 md:order-2" : "order-1 md:order-1"
        }`}
      >
        {!imageError && work.imageUrl ? (
          <Image
            src={work.imageUrl}
            alt={work.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white/50 text-h3">Image Loading...</span>
          </div>
        )}

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
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

export default function TypographyGallery({
  works,
}: TypographyGalleryProps): ReactElement {
  return (
    <section>
      {/* Gallery Header */}
      <div className="text-center">
        <h2 className="text-h2">Proof of life</h2>
        <p className="text-body max-w-2xl mx-auto">
          My best work. Or at least my least embarrassing. If I disappear
          tomorrow, show them this section.
        </p>
      </div>

      {/* Split Layout Gallery */}
      <div className="space-y-12 md:space-y-16 lg:space-y-24">
        {works.map((work, index) => (
          <WorkShowcase
            key={work.id}
            work={work}
            index={index}
            imageOnRight={index % 2 === 0} // Alternate layout: even indices have image on right, odd on left
          />
        ))}
      </div>

      {/* View All Works Link */}
      <div className="mt-20 text-center">
        <a
          href="/works"
          className="inline-flex items-center space-x-3 text-h5 text-black hover:text-gray-600 transition-colors duration-300 group"
        >
          <span>Explore All Works</span>
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
