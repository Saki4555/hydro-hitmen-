import HeroSection from "@/components/hero-section";
import PowerWashingSection from "@/components/home/introduction-section";
import HomePageContent from "@/pages/home-page-content";




export default function HomePage() {
  return (
   <div className="pb-32">
      <HeroSection />
      <PowerWashingSection />
    <HomePageContent />
    
   </div>
  );
}
