import type { ReactElement } from "react";

function HeroSection(): ReactElement {
  return (
    <section className="h-screen flex flex-col justify-between px-8 md:px-16 lg:px-24 xl:px-32">
      {/* Welcome - Top Left */}
      <div className="pt-8 md:pt-12 lg:pt-16">
        <h2 className="text-h2 font-anton">Welcome,</h2>
      </div>

      {/* Main Content - Center */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-h1 font-anton leading-tight mb-4 md:mb-6">
          I&apos;m David Huang
        </h1>
        <h3 className="text-h3 font-anton max-w-2xl px-4">
          Life is short. Let&apos;s use it to do something cool
        </h3>
      </div>

      {/* Staggered List - Bottom Right */}
      <div className="flex justify-end pb-8 md:pb-12 lg:pb-16">
        <div className="flex flex-col items-end space-y-1 md:space-y-2 lg:space-y-3">
          <p className="text-h4 font-anton">I code</p>
          <p className="text-h4 font-anton mr-2 md:mr-4 lg:mr-6 xl:mr-8">
            I write
          </p>
          <p className="text-h4 font-anton mr-4 md:mr-8 lg:mr-12 xl:mr-16">
            I explore
          </p>
        </div>
      </div>
    </section>
  );
}

function ProofOfLifeSection(): ReactElement {
  return (
    <section className="min-h-screen px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center">
      <h2 className="text-h3 font-anton mb-4 md:mb-6">Proof of life</h2>
      <p className="text-body font-cormorant max-w-3xl">
        My best work. Or at least my least embarrassing. If I disappear
        tomorrow, show them this section.
      </p>
    </section>
  );
}

export default function Home(): ReactElement {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <ProofOfLifeSection />
    </div>
  );
}
