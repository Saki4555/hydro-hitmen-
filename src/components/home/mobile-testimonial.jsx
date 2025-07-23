"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./testimonial-slider.css";

import { TESTIMONIALS } from "@/constants";
import { SectionContainer } from "../section-container";
import BadgeAndHeading from "../shared/badge-heading";
import MobileTestimonialCard from "./mobile-testimonial-card";

const MobileTestimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-bg-primary py-16 lg:hidden overflow-hidden"
    >
      <SectionContainer>
        <div className="relative testimonial-slider">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <BadgeAndHeading
              heading="What Our Clients Say"
              badgeText="Testimonials"
            />
          </motion.div>

          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
            spaceBetween={5}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            speed={800}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <MobileTestimonialCard {...testimonial} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-10 flex justify-between pointer-events-none">
            <button
              ref={prevRef}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent backdrop-blur-md shadow-md shadow-hy-accent-secondary/20 hover:bg-hy-accent-secondary/60 text-hy-accent-primary hover:text-hy-text-primary transition-colors pointer-events-auto -translate-x-1/2 md:-translate-x-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent backdrop-blur-md shadow-md shadow-hy-accent-secondary/20 hover:bg-hy-accent-secondary/60 text-hy-accent-primary hover:text-hy-text-primary transition-colors pointer-events-auto translate-x-1/2 md:translate-x-0"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </SectionContainer>
    </motion.div>
  );
};

export default MobileTestimonial;
