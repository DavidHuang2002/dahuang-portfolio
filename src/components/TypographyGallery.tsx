"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import { useState } from "react";

interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
}

interface TypographyGalleryProps {
  works: Work[];
}

function WorkShowcase({
  work,
  index,
}: {
  work: Work;
  index: number;
}): ReactElement {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative min-h-[60vh] md:min-h-[80vh] flex flex-col md:flex-row items-center overflow-hidden">
      {/* Left Side - Typography */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-0 order-2 md:order-1">
        {/* Project Number */}
        <div className="mb-4 md:mb-8 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
          <span className="text-h2 md:text-h1 font-anton text-black/30">
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Project Title - The Star */}
        <h2 className="text-h1 md:text-[80px] lg:text-[100px] xl:text-[120px] font-anton leading-none mb-6 md:mb-8 group-hover:scale-105 transition-transform duration-700">
          {work.title}
        </h2>

        {/* Category and Year */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-8 mb-6 md:mb-8 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
          <span className="text-h6 md:text-h5 font-anton uppercase tracking-widest text-black/60">
            {work.category}
          </span>
          <span className="text-h6 md:text-h5 font-cormorant text-black/60">
            {work.year}
          </span>
        </div>

        {/* Description */}
        <div className="max-w-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-body text-black/70 font-cormorant leading-relaxed">
            {work.description}
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 relative w-full md:w-auto h-[40vh] md:h-full min-h-[40vh] md:min-h-[70vh] order-1 md:order-2">
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
            <span className="text-white/50 font-anton text-h3">
              Image Loading...
            </span>
          </div>
        )}

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
    </div>
  );
}

export default function TypographyGallery({
  works,
}: TypographyGalleryProps): ReactElement {
  return (
    <section className="py-16 md:py-24">
      {/* Gallery Header */}
      <div className="mb-12 md:mb-16 lg:mb-20 text-center px-4">
        <h2 className="text-h2 md:text-h2 mb-4 md:mb-6">Selected Works</h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Each project is a chapter in my creative journey. Typography meets
          imagery in perfect harmony.
        </p>
      </div>

      {/* Split Layout Gallery */}
      <div className="space-y-12 md:space-y-16 lg:space-y-24">
        {works.map((work, index) => (
          <WorkShowcase key={work.id} work={work} index={index} />
        ))}
      </div>

      {/* View All Works Link */}
      <div className="mt-20 text-center">
        <a
          href="/works"
          className="inline-flex items-center space-x-3 text-h5 font-anton text-black hover:text-gray-600 transition-colors duration-300 group"
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
