// import { TESTIMONIALS } from "@/constants";

// import { SectionContainer } from "../section-container";
// import { InfiniteSlider } from "../ui/infinite-slider";
// import TestimonialCard from "./testimonial-card";
// import BadgeAndHeading from "../shared/badge-heading";

// export default function Testimonial() {
//   return (

//     <div className="relative h-screen overflow-hidden  py-16 hidden lg:block bg-hy-bg-primary">
//       {/* Accent Glow Effect */}
//       <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[1000px] rounded-full bg-gradient-to-r from-cyan-400/15 via-teal-400/15 to-transparent blur-3xl opacity-60" />

//       <SectionContainer className="relative  z-10 border-x border-hy-accent-secondary/10">
//         <BadgeAndHeading
//           heading="What Our Clients Say"
//           badgeText="Testimonials"

//         />

//        <div className="">
//          <InfiniteSlider gap={20} reverse speed={50} speedOnHover={1} direction="vertical">
//           {TESTIMONIALS.slice(0, 4).map((testimonial, index) => (
//             <TestimonialCard
//               key={index}
//               rating={testimonial.rating}
//               testimonial={testimonial.testimonial}
//               name={testimonial.name}
//               title={testimonial.title}
//             />
//           ))}
//         </InfiniteSlider>

//         <InfiniteSlider gap={20} speedOnHover={1} speed={50} direction="vertical">
//           {TESTIMONIALS.slice(4).map((testimonial, index) => (
//             <TestimonialCard
//               key={index}
//               rating={testimonial.rating}
//               testimonial={testimonial.testimonial}
//               name={testimonial.name}
//               title={testimonial.title}
//             />
//           ))}
//         </InfiniteSlider>
//        </div>
//       </SectionContainer>
//     </div>
//   );
// }

import { TESTIMONIALS } from "@/constants";
import { SectionContainer } from "../section-container";
import { InfiniteSlider } from "../ui/infinite-slider";
import TestimonialCard from "./testimonial-card";
import BadgeAndHeading from "../shared/badge-heading";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="relative min-h-screen overflow-hidden  py-16 hidden lg:block bg-hy-bg-primary">
      {/* Glow Background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[1000px] rounded-full bg-gradient-to-r from-cyan-400/5 via-teal-400/5 to-transparent blur-3xl opacity-60" />

      <SectionContainer className="relative  z-10 border-x border-hy-accent-secondary/10 h-full flex gap-5">
        {/* Left Image */}
        {/* Left Image */}
        <div className="relative w-2/5 h-screen   flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-xl shadow-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
              alt="Testimonial Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Testimonials */}
        <div className="w-3/5 flex flex-col justify-center">
          <BadgeAndHeading
            heading="What Our Clients Say"
            badgeText="Testimonials"
          />

          <div className=" w-full  h-screen">
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

            {/* <InfiniteSlider
              gap={20}
              speed={40}
              speedOnHover={1}
              direction="vertical"
            >
              {TESTIMONIALS.slice(4).map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              ))}
            </InfiniteSlider> */}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
