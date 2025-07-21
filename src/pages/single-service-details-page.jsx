import React from "react";

import ImageWithCategory from "@/components/service-page-components/image-with-category";
import ServiceDetailsWithQuote from "@/components/service-page-components/service-description-with-quote";
import { SectionContainer } from "@/components/section-container";
import WhyChooseAndFAQs from "@/components/service-page-components/why-choose-and-faqs";



export default function SingleServiceDetailsPage({activeService}) {
  return (
    <div className="bg-hy-bg-primary overflow-hidden pb-20 pt-28">
      <SectionContainer> 
        <ImageWithCategory activeService={activeService}/>
         <ServiceDetailsWithQuote
                title="Pressure Washing"
                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining."
                phoneNumber="000 8888 999"
              />
      </SectionContainer>
      <WhyChooseAndFAQs />
    
    </div>
  );
}
