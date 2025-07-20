"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./testimonial-slider.css";
import { TESTIMONIALS } from "@/constants";

import { Container } from "../shared/Container";
import MobileTestimonialCard from "./MobileTestimonialCard";
import HeadingWithDescription from "../shared/HeadingWithDescription";

const MobileTestimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
   <div className="bg-bg-primary py-16 lg:hidden">
    <Container><div className="relative testimonial-slider">
    <HeadingWithDescription headingText='People Cheers for Us' descriptionText="Find out how our users are spreading the word!"/>
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
        className=""
      >
        {TESTIMONIALS.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="">
            <MobileTestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-10 flex justify-between pointer-events-none">
        <button
          ref={prevRef}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent shadow-large hover:bg-bg-accent/90 text-primary hover:text-white  transition-colors pointer-events-auto -translate-x-1/2 md:-translate-x-0"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          ref={nextRef}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent text-primary hover:text-white shadow-large hover:bg-bg-accent/90 transition-colors pointer-events-auto translate-x-1/2 md:translate-x-0"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div></Container>
     
   </div>
  );
};

export default MobileTestimonial;
