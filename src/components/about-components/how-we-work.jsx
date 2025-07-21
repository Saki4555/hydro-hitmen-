import React from "react";
import BadgeAndHeading from "../shared/badge-heading";
import { SectionContainer } from "../section-container";

const steps = [
  {
    id: "01",
    title: "Make A Plan",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Set A Date",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Start Cleaning",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 6h18l-2 13H5L3 6Z" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 lg:py-32 bg-hy-bg-primary">
      <SectionContainer>
        
          {/* Header */}
          <BadgeAndHeading
            heading="Our Working Process"
            badgeText="How It Works"
          />

          {/* Steps */}
          <div className="relative">
            {/* Desktop dotted lines */}
            <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="flex justify-between items-center h-px">
                <div className="flex-1 border-t-2 border-dotted border-hy-border-accent/50 mx-8"></div>
                <div className="flex-1 border-t-2 border-dotted border-hy-border-accent/50 mx-8"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="relative group">
                  {/* Mobile dotted line (vertical) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 top-full transform -translate-x-1/2 w-px h-12 border-l-2 border-dotted border-hy-border"></div>
                  )}

                  <div className="text-center transform transition-all duration-500 hover:scale-105">
                    {/* Icon Circle */}
                    <div className="relative mx-auto mb-8">
                      <div className="w-32 h-32 mx-auto bg-hy-bg-primary border-2 border-dotted border-hy-border rounded-full flex items-center justify-center text-hy-accent-primary transition-all duration-300 shadow-md shadow-hy-accent-secondary/20 group-hover:border-hy-border-accent group-hover:shadow-xl">
                        {step.icon}
                      </div>

                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-hy-accent-primary text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-hy-text-primary tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-hy-text-secondary leading-relaxed max-w-sm mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </SectionContainer>
    </section>
  );
}
