import type { ReactElement } from "react";
import TypographyGallery from "@/components/TypographyGallery";
import { featuredWorks } from "@/data/works";

function HeroSection(): ReactElement {
  return (
    <section className="h-screen flex flex-col justify-between max-w-screen-lg mx-auto">
      {/* Welcome - Top Left */}
      <div className="pt-8 md:pt-12 lg:pt-16">
        <h2 className="text-h2">Welcome,</h2>
      </div>

      {/* Main Content - Center */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-h1 leading-tight mb-4 md:mb-6">
          I&apos;m David Huang
        </h1>
        <h3 className="text-h3 max-w-2xl px-4">
          Life is short. Let&apos;s use it to do something cool
        </h3>
      </div>

      {/* Staggered List - Bottom Right */}
      <div className="flex justify-end">
        <div className="flex flex-col items-end space-y-1 md:space-y-2 lg:space-y-3">
          <p className="text-h3">I code</p>
          <p className="text-h3 stagger-1">I write</p>
          <p className="text-h3 stagger-2">I explore</p>
        </div>
      </div>
    </section>
  );
}


export default function Home(): ReactElement {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <TypographyGallery works={featuredWorks} />
    </div>
  );
}
