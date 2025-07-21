import { Check, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/mp-accordion";

export default function WhyChooseAndFAQs() {
  const features = [
    "Highly professional staff",
    "100% satisfaction guarantee",
    "Flexible scheduling to fit your need",
    "Quality cleaning system",
    "25+ Years Experiences",
    "24/7 Online Support",
  ];

  return (
    <div className="flex flex-col items-center lg:flex-row gap-8 px-4 pt-10 max-w-6xl mx-auto">
      {/* Features List - Left Side */}
      <div className="flex-1 w-2/5 bg-hy-bg-secondary p-5 border-l-2 border-hy-border-accent">
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
      <div className="w-3/5">
        <Accordion
          className="flex w-full flex-col border border-hy-border"
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          variants={{
            expanded: { opacity: 1, scale: 1 },
            collapsed: { opacity: 0, scale: 0.98 },
          }}
        >
          {[
            {
              value: "getting-started",
              title: "How do I start with Motion-Primitives?",
              content:
                "Kick off your experience by setting up Motion-Primitives. This section covers the basics of installation and how to add animations to your projects. You’ll get familiar with the initial setup and the core features quickly.",
            },
            {
              value: "animation-properties",
              title: "What are the key animation properties?",
              content:
                "Discover a variety of properties to customize your animations. Learn to adjust timing, easing, and delays for smoother effects. This guide will help you tailor these settings to your app’s needs.",
            },
            {
              value: "advanced-features",
              title: "How do I use advanced features?",
              content:
                "Advance your skills by using more complex functions of Motion-Primitives. Explore how to link animations together, create intricate sequences, and interact with motion sensors for dynamic effects.",
            },
            {
              value: "community-support",
              title: "How do I engage with the community?",
              content:
                "Connect with the Motion-Primitives community for support and collaboration. Learn how to contribute, share knowledge, and access helpful resources. Stay updated on new updates and collective insights.",
            },
          ].map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="p-4 bg-hy-bg-secondary border-b border-hy-border group transition-colors duration-200 hover:bg-hy-accent-secondary/10"
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
          ))}
        </Accordion>
      </div>
    </div>
  );
}
