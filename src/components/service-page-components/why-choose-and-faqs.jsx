import * as motion from "motion/react-client";

import { Check, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/mp-accordion";

export default function WhyChooseAndFAQs({ FAQs }) {
  const features = [
    "Experienced & Certified Technicians",
    "Eco-Friendly Cleaning Solutions",
    "100% Satisfaction Guarantee",
    "Flexible & Convenient Scheduling",
    "State-of-the-Art Equipment",
    "Fully Insured for Your Peace of Mind",
    "Competitive & Transparent Pricing",
  ];

  return (
    <div className="flex flex-col items-center lg:flex-row gap-8 px-4 pt-10 max-w-6xl mx-auto">
      {/* Features List - Left Side */}
      <div className="flex-1 w-full lg:w-2/5 bg-hy-bg-secondary p-5 border-l-2 border-hy-border-accent">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-hy-accent-primary rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Div - Right Side */}
      <div className="w-full lg:w-3/5">
        <Accordion
          className="flex w-full flex-col gap-3"
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          variants={{
            expanded: { opacity: 1, scale: 1 },
            collapsed: { opacity: 0, scale: 0.98 },
          }}
        >
          {FAQs.map((item,i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
            >
              <AccordionItem
                value={item.value}
                className="p-4 bg-hy-bg-secondary rounded-lg  border-b-2  border-b-hy-border-accent group transition-colors duration-200 hover:bg-hy-accent-secondary/10"
              >
                <AccordionTrigger className="w-full text-left text-hy-text-primary flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-hy-text-primary transition-transform duration-200 group-data-expanded:rotate-90" />
                  <span className="font-medium text-sm md:text-base">
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="mt-2 origin-top text-sm text-hy-text-secondary pl-6 pr-2 leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
