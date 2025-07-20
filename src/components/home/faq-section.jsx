"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { SectionContainer } from "../section-container";
import BadgeAndHeading from "../shared/badge-heading";
import Image from "next/image";

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={cn(
        "group border-hy-border-accent rounded-none border",
        "transition-all duration-200 ease-in-out",
        isOpen
          ? "bg-hy-accent-secondary/5 shadow-md shadow-hy-accent-secondary/20"
          : "hover:bg-hy-bg-primary bg-hy-bg-secondary"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200",
            "text-foreground/80",
            isOpen && "text-foreground"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-0.5",
            "transition-colors duration-200",
            isOpen ? "text-hy-text-primary" : "text-hy-text-secondary"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-hy-border-accent/80 border-t px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-hy-text-secondary text-base leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq3() {
  const faqs = [
    {
      question: "What makes MVPBlocks unique?",
      answer:
        "MVPBlocks stands out through its intuitive design, powerful component library, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features, all while maintaining excellent performance and accessibility.",
    },
    {
      question: "How can I customize the components?",
      answer:
        "All components are built with Tailwind CSS, making them highly customizable. You can modify colors, spacing, typography, and more by simply adjusting the class names or using our theme variables to match your brand identity.",
    },
    {
      question: "Do the components work with dark mode?",
      answer:
        "Yes, all MVPBlocks components are designed to work seamlessly with both light and dark modes. They automatically adapt to your site's theme settings, providing a consistent user experience regardless of the user's preference.",
    },
    {
      question: "How can I get started with MVPBlocks?",
      answer:
        "You can get started by browsing our component library and copying the code for the components you need. Our documentation provides clear instructions for installation and usage, and you can always reach out to our support team if you need assistance.",
    },
    {
      question: "Can I use MVPBlocks for commercial projects?",
      answer:
        "Absolutely! MVPBlocks is free to use for both personal and commercial projects. There are no licensing fees or attribution requirements—just build and launch your MVP faster than ever before.",
    },
  ];

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
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} index={index} />
            ))}
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
