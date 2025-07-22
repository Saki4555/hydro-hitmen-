
import { TESTIMONIALS } from "@/constants";
import { SectionContainer } from "../section-container";
import { InfiniteSlider } from "../ui/infinite-slider";
import TestimonialCard from "./testimonial-card";
import BadgeAndHeading from "../shared/badge-heading";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function Testimonial() {
  return (
    <div className="relative min-h-screen overflow-hidden py-16 hidden lg:block bg-hy-bg-primary">
      {/* Glow Background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[1000px] rounded-full bg-gradient-to-r from-cyan-400/5 via-teal-400/5 to-transparent blur-3xl opacity-60" />

      <SectionContainer className="relative z-10 border-x border-hy-accent-secondary/10 h-full flex gap-5">
        {/* Left Image */}
        <motion.div
          className="relative w-2/5 h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-none shadow-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
              alt="Testimonial Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right Testimonials */}
        <motion.div
          className="w-3/5 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <BadgeAndHeading
            heading="What Our Clients Say"
            badgeText="Testimonials"
          />

          <div className="w-full h-screen">
            <InfiniteSlider
              gap={20}
              reverse
              speed={40}
              speedOnHover={0.1}
              direction="vertical"
            >
              {TESTIMONIALS.slice(0, 4).map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              ))}
            </InfiniteSlider>
          </div>
        </motion.div>
      </SectionContainer>
    </div>
  );
}
