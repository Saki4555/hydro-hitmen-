import * as motion from "motion/react-client";
import { ChevronRight } from "lucide-react";
import { SectionContainer } from "../section-container";
import BadgeAndHeading from "../shared/badge-heading";
import Image from "next/image";
import faqImage from '../../assets/services-images/pressure-washing-1.webp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/mp-accordion";
import { FAQs } from "@/constants";

export default function Faq3() {
  return (
    <section className="bg-hy-bg-primary relative w-full overflow-hidden py-16">
      {/* Decorative elements */}
      <div className="bg-hy-accent-secondary/10 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-hy-accent-secondary/10 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />

      <SectionContainer>
        {/* Heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <BadgeAndHeading
            heading="Common Questions About Our Exterior Home Services" // Updated heading
            badgeText="FAQs"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* FAQ List with fade-up stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mx-auto w-full lg:w-3/5 space-y-2 order-2 lg:order-1"
          >
            <Accordion className="flex w-full flex-col gap-3">
              {FAQs.map((item, i) => (
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
          </motion.div>

          {/* Image fade-in on scroll */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="shrink-0 relative order-1 lg:order-2 w-full h-64 lg:w-2/5 aspect-square rounded-lg border-2  border-hy-accent-primary/50 overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <Image
             src={faqImage}
              alt="Pressure Washing" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
