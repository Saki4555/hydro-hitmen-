import React from "react";
import {
  IconBuildingSkyscraper,
  IconUserCheck,
  IconStar,
  IconAward,
} from "@tabler/icons-react";
import { SectionContainer } from "../section-container";

const AboutStatsSection = () => {
  const stats = [
    {
      icon: <IconBuildingSkyscraper className="w-12 h-12 mx-auto mb-4" />,
      number: "1924",
      label: "Project Completed",
    },
    {
      icon: <IconUserCheck className="w-12 h-12 mx-auto mb-4" />,
      number: "9025",
      label: "Satisfied Clients",
    },
    {
      icon: <IconStar className="w-12 h-12 mx-auto mb-4" />,
      number: "3087",
      label: "Expert Members",
    },
    {
      icon: <IconAward className="w-12 h-12 mx-auto mb-4" />,
      number: "260",
      label: "Winning Awards",
    },
  ];

  return (
    <section className="py-16 lg:py-20 overflow-hidden bg-hy-bg-primary">
      <SectionContainer>
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-hy-bg-secondary rounded-lg p-8 text-center shadow-lg transition-all duration-500 overflow-hidden hover:shadow-xl"
              >
                {/* Hover background overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-hy-accent-primary to-hy-accent-secondary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-hy-accent-primary group-hover:text-white transition-colors duration-700">
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-800 group-hover:text-white transition-colors duration-700 mb-2">
                    {stat.number}
                  </h3>

                  {/* Label */}
                  <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-700 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
    
      </SectionContainer>
    </section>
  );
};

export default AboutStatsSection;
