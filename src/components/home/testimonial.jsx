import { TESTIMONIALS } from "@/constants";

import { SectionContainer } from "../section-container";
import { InfiniteSlider } from "../ui/infinite-slider";
import TestimonialCard from "./testimonial-card";
import BadgeAndHeading from "../shared/badge-heading";

export default function Testimonial() {
  return (

    <div className="relative overflow-hidden py-16 hidden lg:block bg-hy-bg-primary">
      {/* Accent Glow Effect */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[1000px] rounded-full bg-gradient-to-r from-cyan-400/15 via-teal-400/15 to-transparent blur-3xl opacity-60" />
     

      <SectionContainer className="relative z-10 border-x border-hy-accent-secondary/10">
        <BadgeAndHeading
          heading="What Our Clients Say"
          badgeText="Testimonials"
          
        />

        

        <InfiniteSlider gap={20} reverse speed={50} speedOnHover={1}>
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

        <InfiniteSlider gap={20} speedOnHover={1} speed={50}>
          {TESTIMONIALS.slice(4).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </InfiniteSlider>
      </SectionContainer>
    </div>
  );
}
