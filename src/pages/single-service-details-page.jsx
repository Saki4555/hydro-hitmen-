import ImageWithCategory from "@/components/service-page-components/image-with-category";
import ServiceDetailsWithQuote from "@/components/service-page-components/service-description-with-quote";
import { SectionContainer } from "@/components/section-container";
import WhyChooseAndFAQs from "@/components/service-page-components/why-choose-and-faqs";

export default function SingleServiceDetailsPage({ activeService, serviceData }) {
  if(!serviceData) return null;
  return (
    <div className="bg-hy-bg-primary overflow-hidden pb-20 pt-28">
      <SectionContainer>
        <ImageWithCategory activeService={activeService} />
        <ServiceDetailsWithQuote
          title={serviceData.title}
          description={serviceData.description}
          phoneNumber="+1 (346) 831-9188"
        />
      </SectionContainer>
      <WhyChooseAndFAQs FAQs={serviceData.faqs}/>
    </div>
  );
}
