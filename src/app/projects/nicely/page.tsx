import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nicely - David Huang Portfolio",
  description:
    "A therapy insights platform that transforms therapy goals into clear actions by automatically organizing therapy notes and providing personalized guidance.",
};

export default function NicelyProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/nicely-landing.png"
          alt="Nicely - Therapy Insights Platform"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-h1 md:text-h0 font-anton mb-4">Nicely</h1>
            <p className="text-h4 font-cormorant max-w-2xl mx-auto px-4">
              A therapy insights platform that transforms therapy goals into
              clear actions
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Project Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-h2 font-anton mb-6">About the Project</h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  Nicely is a comprehensive therapy insights platform designed
                  to bridge the gap between therapy sessions and daily life. The
                  platform automatically organizes therapy notes and transforms
                  therapeutic goals into actionable, personalized guidance that
                  users can implement in their everyday routines.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-anton mb-4">The Challenge</h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Many therapy clients struggle to maintain progress between
                  sessions. They often forget key insights, lose track of their
                  goals, and find it difficult to apply therapeutic techniques
                  in real-world situations. The challenge was to create a
                  platform that could serve as a bridge between therapy sessions
                  and daily life.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-anton mb-4">The Solution</h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Nicely provides an intuitive interface where users can input
                  their therapy notes, which are then automatically organized
                  and analyzed. The platform generates personalized action
                  items, reminders, and progress tracking tools that help users
                  maintain their therapeutic momentum throughout the week.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-anton mb-4">Key Features</h3>
                <ul className="space-y-3 text-body text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Automatic note organization and categorization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      Personalized goal tracking and progress visualization
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Smart reminders and action item generation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Secure, HIPAA-compliant data storage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Integration with therapy session scheduling</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-anton mb-4">Outcomes & Impact</h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  The platform has helped users maintain better consistency in
                  their therapeutic work, leading to improved outcomes and more
                  productive therapy sessions. Users report feeling more
                  connected to their therapeutic goals and better equipped to
                  handle daily challenges.
                </p>
              </div>
            </div>

            {/* Project Meta */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-h4 font-anton mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Category
                    </span>
                    <p className="text-body font-cormorant">Web Design</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Year
                    </span>
                    <p className="text-body font-cormorant">2024</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Role
                    </span>
                    <p className="text-body font-cormorant">
                      Lead Designer & Developer
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Duration
                    </span>
                    <p className="text-body font-cormorant">6 months</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-h4 font-anton mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    PostgreSQL
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-h4 font-anton mb-4">Tools & Methods</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    User Research
                  </span>
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    Prototyping
                  </span>
                  <span className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border">
                    Agile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Works */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-h5 font-anton text-black hover:text-gray-600 transition-colors duration-300 group"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span>Back to Works</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
