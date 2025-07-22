import Faq3 from "@/components/home/faq-section";
import MobileTestimonial from "@/components/home/mobile-testimonial";
import ServicesWeAreOffering from "@/components/home/services-we-are-offering";

import Testimonial from "@/components/home/testimonial";


const HomePageContent = () => {
  return (
    <>
   <ServicesWeAreOffering />
     <Testimonial />
     <MobileTestimonial />
     <Faq3 />
    </>
  );
};

export default HomePageContent;
