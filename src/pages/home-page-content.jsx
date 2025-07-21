import Faq3 from "@/components/home/faq-section";
import MobileTestimonial from "@/components/home/mobile-testimonial";
import { ServiceWithImageComparisonCard } from "@/components/home/service-with-image-comparison";
import Testimonial from "@/components/home/testimonial";
import { SectionContainer } from "@/components/section-container";
import BadgeAndHeading from "@/components/shared/badge-heading";

const HomePageContent = () => {
  return (
    <>
    <div className="py-20 bg-hy-bg-primary overflow-hidden">
      <SectionContainer>
      
        <BadgeAndHeading heading="Services We&rsquo;re Offering" badgeText=" A Little Introduction" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ServiceWithImageComparisonCard
            title="Pressure Washing"
            imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            url="/services/pressure-washing"
          />
          <ServiceWithImageComparisonCard
            title="Window Cleaning"
            imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
             url="/services/window-cleaning"
          />
          <ServiceWithImageComparisonCard
            title="Gutter Cleaning"
            imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
             url="/services/gutter-cleaning"
          />
          <ServiceWithImageComparisonCard
            title="Roof Soft Wash"
            imageLeft="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageRight="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
             url="/services/roof-soft-wash"
          />
        </div>
      </SectionContainer>
     
    </div>
     <Testimonial />
     <MobileTestimonial />
     <Faq3 />
    </>
  );
};

export default HomePageContent;
