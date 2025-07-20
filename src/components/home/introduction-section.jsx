import React from "react";
import { ArrowRight, CheckCircle, CornerDownRight, Play, Users } from "lucide-react";
import { SectionContainer } from "../section-container";

export default function PowerWashingSection() {
  return (
    <section className="bg-hy-bg-primary pt-24 pb-20 ">
      <SectionContainer>
    
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Images */}
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pressure washing deck"
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />

                {/* Overlay card */}
                <div className="absolute bottom-4 left-4 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="font-semibold text-sm md:text-base">
                      We are insured, and reliable
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary image */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Clean fence after pressure washing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="pt-12 lg:pt-0">
              {/* Header */}
              <div className="mb-8">
                <p className="text-hy-accent-secondary font-medium text-sm mb-3 tracking-wide uppercase">
                  A Little Introduction
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hy-accent-primary leading-tight mb-6">
                  Welcome To Our Power Pressure Washing Center
                </h2>
                <p className="text-hy-text-secondary font-medium text-lg mb-6">
                  Povash is a professional cleaning service. Customer
                  satisfaction is our top priority.
                </p>
                <p className="text-hy-text-secondary leading-relaxed">
                  We are experts in the clothing and dry cleaning business,
                  which implies we continuously remain up to date on the most
                  recent innovations, cleaning strategies, and arrangements for
                  managing stains.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-hy-accent-primary font-semibold text-lg mb-2 flex items-center">
                    <CornerDownRight />
                    Professional technicians
                  </h3>
                  <p className="text-hy-text-secondary ml-6">
                    We only work with the qualified expertise for client
                    satisfaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-hy-accent-primary font-semibold text-lg mb-2 flex items-center">
                     <CornerDownRight />
                    Over 5 years experience
                  </h3>
                  <p className="text-gray-600 ml-6">
                    Working on this site more than 5 years with trust and
                    honesty.
                  </p>
                </div>
              </div>

              {/* Statistics card */}
              <div className="bg-hy-bg-secondary rounded-none shadow-md shadow-hy-accent-secondary/20 p-6 inline-block">
                <div className="flex items-center gap-4">
                  <div className="bg-hy-accent-secondary/20 p-3 rounded-lg">
                    <Users className="w-8 h-8 text-hy-accent-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-hy-accent-primary mb-1">
                      8800
                    </div>
                    <div className="text-sm text-hy-text-secondary">
                      Successfully
                      <br />
                      Project
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </SectionContainer>
    </section>
  );
}
