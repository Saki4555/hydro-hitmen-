import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { SectionContainer } from "../section-container";
import * as motion from "motion/react-client";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhyChooseUs() {
  return (
    <div className="bg-hy-bg-primary overflow-hidden py-16">
      <SectionContainer className="group isolate">
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
          {/* Left Column with animation */}
          <motion.div
            className="bg-hy-accent-primary text-white p-7 md:p-11 lg:p-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Pattern & Swoosh */}
            <div
              className="absolute top-0 left-0 w-64 h-64 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/5 rounded-full" />

            <div className="relative z-10">
              {/* Badge & Heading (unchanged animation) */}
              <motion.div
                className={cn("mb-8 max-w-3xl")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-full mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <Sparkles className="w-4 h-4 text-cyan-500" />
                  <span className="font-medium uppercase text-xs tracking-wide">
                    Why Choose Hydro Hitmen
                  </span>
                </motion.div>

                <motion.h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  Experience the Difference with Our Exterior Cleaning Expertise
                </motion.h2>
                <p className="text-cyan-100 mb-10 max-w-md">
                  We are committed to delivering exceptional results, protecting your property, and ensuring your complete satisfaction with every service.
                </p>
              </motion.div>

              <div className="space-y-8">
                <Feature title="Eco-Friendly & Safe Solutions">
                  We utilize advanced, environmentally conscious cleaning agents and methods that are tough on grime but gentle on your home and landscaping.
                </Feature>
                <Feature title="State-of-the-Art Equipment">
                  Our investment in the latest professional-grade pressure washing and soft washing equipment ensures superior cleaning efficiency and results.
                </Feature>
                <Feature title="Trained & Insured Professionals">
                  Our experienced team is fully trained in best practices and backed by comprehensive insurance for your peace of mind.
                </Feature>
              </div>
            </div>
          </motion.div>

          {/* Right Column with animation */}
          <motion.div
            className="relative min-h-[450px] overflow-hidden lg:min-h-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop" // Changed image to one more relevant to exterior washing
              alt="Professional pressure washing a home's siding" // Updated alt text
              fill
              className="object-cover group-hover:scale-105 transform transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-3xl">
                <div className="bg-hy-accent-secondary text-white p-6 flex-1 min-h-[120px] flex flex-col justify-center">
                  <h3 className="text-xl font-bold">
                    Quality Results, Every Time
                  </h3>
                </div>
                <div className="bg-hy-accent-primary text-white p-6 flex-1 min-h-[120px] flex flex-col justify-center">
                  <h3 className="text-xl font-bold">
                    Your Property&apos;s Best Look
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}

function Feature({ title, children }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center mt-1 z-10">
        <IconCheck size={20} stroke={3} className="text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-cyan-100">{children}</p>
      </div>
    </div>
  );
}