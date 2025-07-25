
import * as motion from "motion/react-client";
import BadgeAndHeading from "../shared/badge-heading";
import { SectionContainer } from "../section-container";

const steps = [
  {
    id: "01",
    title: "Request a Free Quote", // Changed title
    description:
      "Easily request a detailed, no-obligation quote for your exterior cleaning needs through our website or by phone.", // Changed description
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
    title: "Schedule Your Service", // Changed title
    description:
      "Once you approve the quote, we'll work with you to find a convenient date and time for our team to perform the service.", // Changed description
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
    title: "Enjoy a Pristine Property", // Changed title
    description:
      "Our skilled technicians will arrive promptly, execute the cleaning with precision, leaving your exterior spotless and revitalized.", // Changed description
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
    <section className="py-16 relative bg-hy-bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="bg-hy-accent-secondary/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-hy-accent-secondary/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />
      <SectionContainer>
        {/* Header */}
        <BadgeAndHeading
          heading="Our Seamless Process" // Changed heading
          badgeText="How It Works" // Changed badge text
        />

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Desktop dotted lines */}
          <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center h-px">
              <div className="flex-1 border-t-2 border-dotted border-hy-border mx-8"></div>
              <div className="flex-1 border-t-2 border-dotted border-hy-border mx-8"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.3,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}