import HeroSection from "@/components/hero-section";
import PowerWashingSection from "@/components/home/introduction-section";
import Home from "@/pages/home";



export default function HomePage() {
  return (
   <div className="pb-32">
      <HeroSection />
      <PowerWashingSection />
    <Home />
    
   </div>
  );
}
