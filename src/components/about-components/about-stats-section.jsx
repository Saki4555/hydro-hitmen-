import {
  IconBuildingSkyscraper,
  IconUserCheck,
  IconStar,
  IconAward,
} from "@tabler/icons-react";
import * as motion from "motion/react-client";
import { SectionContainer } from "../section-container";

const AboutStatsSection = () => {
  const stats = [
    {
      icon: <IconBuildingSkyscraper className="w-12 h-12 mx-auto mb-4" />,
      number: "1,500+", 
      label: "Projects Completed", 
    },
    {
      icon: <IconUserCheck className="w-12 h-12 mx-auto mb-4" />,
      number: "800+", 
      label: "Valued Clients", 
    },
    {
      icon: <IconStar className="w-12 h-12 mx-auto mb-4" />,
      number: "45+", // Updated to a more realistic number for a dedicated team
      label: "Dedicated Professionals", // Changed for a professional tone
    },
    {
      icon: <IconAward className="w-12 h-12 mx-auto mb-4" />,
      number: "10+", // Updated to a more realistic and impressive number
      label: "Awards & Recognitions", // Changed for a professional tone
    },
  ];

  return (
    <section className="py-16 lg:py-20 overflow-hidden bg-hy-bg-primary">
      <SectionContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once: true, amount: 0.1}}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <div className="group relative border-t-4 border-t-hy-accent-primary bg-hy-bg-secondary rounded-lg p-8 text-center shadow-lg transition-all duration-500 overflow-hidden hover:shadow-xl">
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
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default AboutStatsSection;