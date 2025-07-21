import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { SectionContainer } from "../section-container";

export default function WhyChooseUs() {
  return (
    <div className="bg-hy-bg-primary overflow-hidden">
      <SectionContainer className='group isolate'>
     
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
          {/* Left Column - Blue Section */}
          <div className="bg-hy-accent-primary text-white p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Dotted pattern overlay */}
            <div
              className="absolute top-0 left-0 w-64 h-64 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            ></div>
            {/* Swoosh overlay */}
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/5 rounded-full"></div>

            <div className="relative z-10">
              <p className="text-cyan-100 font-semibold mb-2">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Why will You Choose Our Services?
              </h2>
              <p className="text-cyan-100 mb-10 max-w-md">
                Our business is committed to making your life easier by offering
                laundry pick-up.
              </p>

              <div className="space-y-8">
                <Feature title="Toxin-free Cleaning Supplies">
                  We use eco-friendly liquid castile soap diluted that is toxic
                  free and makes your clothes shine.
                </Feature>
                <Feature title="Energy Efficient Equipment">
                  We also use energy efficient equipment that is suitable for
                  our neighbourhood and environment.
                </Feature>
              </div>
            </div>
          </div>

          {/* Right Column - Image Section */}
          <div className="relative min-h-[450px] overflow-hidden lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
              alt="Woman cleaning a kitchen cabinet"
              fill
              className="object-cover group-hover:scale-105 transform transition-transform duration-500"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-3xl">
                <div className="bg-hy-accent-secondary text-white p-6 flex-1 min-h-[120px] flex flex-col justify-center">
                  <h3 className="text-xl font-bold">
                    Your Safety is Our First Priority
                  </h3>
                </div>
                <div className="bg-hy-accent-primary text-white p-6 flex-1 min-h-[120px] flex flex-col justify-center">
                  <h3 className="text-xl font-bold">
                    Done Right From Start to Finish
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </SectionContainer>
    </div>
  );
}

function Feature({ title, children }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center mt-1 z-10">
        <IconCheck size={20} stroke={3} className="text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-cyan-100">{children}</p>
      </div>
    </div>
  );
}
