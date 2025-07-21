"use client";


import { motion } from "framer-motion";
import {  ChevronRight } from "lucide-react";


import { SectionContainer } from "../section-container";
import BadgeAndHeading from "../shared/badge-heading";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/mp-accordion";



export default function Faq3() {
  

  return (
    <section className="bg-hy-bg-primary relative w-full overflow-hidden py-16">
      {/* Decorative elements */}
      <div className="bg-hy-accent-secondary/10 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-hy-accent-secondary/10 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />

      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" mb-12 max-w-2xl"
        >
          <BadgeAndHeading
            heading="Not Everything you need to know about Hydro Hitmen"
            badgeText="FAQs"
          />
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* FAQ Section */}
          <div className="mx-auto w-full lg:w-3/5  space-y-2 order-2 lg:order-1">
           
           
                    {/* <Accordion
                      className="flex w-full flex-col"
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                      variants={{
                        expanded: {
                          opacity: 1,
                          scale: 1,
                        },
                        collapsed: {
                          opacity: 0,
                          scale: 0.7,
                        },
                      }}
                    >
                      <AccordionItem value="getting-started" className="p-4 border-b border-b-hy-border bg-hy-accent-secondary/5">
                        <AccordionTrigger className="w-full py-0.5 text-left text-hy-text-primary">
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                            <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                              How do I start with Motion-Primitives?
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="origin-left">
                          <p className="pl-6 pr-2 text-hy-text-secondary">
                            Kick off your experience by setting up Motion-Primitives. This
                            section covers the basics of installation and how to add
                            animations to your projects. You’ll get familiar with the
                            initial setup and the core features quickly.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="animation-properties" className="p-4 bg-hy-accent-secondary/5 border-b border-b-hy-border">
                        <AccordionTrigger className="w-full py-0.5 text-left text-hy-text-primary">
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                            <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                              What are the key animation properties?
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="origin-left">
                          <p className="pl-6 pr-2 text-hy-text-secondary">
                            Discover a variety of properties to customize your animations.
                            Learn to adjust timing, easing, and delays for smoother effects.
                            This guide will help you tailor these settings to your app’s
                            needs.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="advanced-features" className="p-4 bg-hy-accent-secondary/5 border-b border-b-hy-border">
                        <AccordionTrigger className="w-full py-0.5 text-left text-hy-text-primary">
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                            <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                              How do I use advanced features?
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="origin-left">
                          <p className="pl-6 pr-2 text-hy-text-secondary">
                            Advance your skills by using more complex functions of
                            Motion-Primitives. Explore how to link animations together,
                            create intricate sequences, and interact with motion sensors for
                            dynamic effects.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="community-support" className="p-4 bg-hy-accent-secondary/5">
                        <AccordionTrigger className="w-full py-0.5 text-left text-hy-text-primary">
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                            <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                              How do I engage with the community?
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="origin-left">
                          <p className="pl-6 pr-2 text-hy-text-secondary">
                            Connect with the Motion-Primitives community for support and
                            collaboration. Learn how to contribute, share knowledge, and
                            access helpful resources. Stay updated on new updates and
                            collective insights.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion> */}
                    <Accordion
  className="flex w-full flex-col"
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
        <span className="font-medium text-sm md:text-base">{item.title}</span>
      </AccordionTrigger>
      <AccordionContent className="mt-2 origin-top text-sm text-hy-text-secondary pl-6 pr-2 leading-relaxed">
        {item.content}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>

                
          </div>

          {/* Fixed Image Section */}
          <div className="shrink-0 relative order-1 lg:order-2 w-full h-64 lg:w-2/5 aspect-[4/3] rounded-none border-2 border-hy-accent-primary/50 overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2luZG93JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDI%3D"
              alt="Window Cleaning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
