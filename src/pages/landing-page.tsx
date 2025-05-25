import ServicesGrid from "@/components/landing-page/ai-startups";
import AutomationFeatures from "@/components/landing-page/automation";
import GlobalImpact from "@/components/landing-page/global-impact";
import GlobalPeoplePlatform from "@/components/landing-page/global-platform-section";
import HeroSection from "@/components/landing-page/Hero";
import LaunchFaster from "@/components/landing-page/launch-faster-section";
import TestimonialsSection from "@/components/landing-page/testimonial";
import TrustedBySection from "@/components/landing-page/trustedby";
import VisionSection from "@/components/landing-page/vision";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center">
       <HeroSection />
       <VisionSection />
       <TrustedBySection/>
       <TestimonialsSection />
       <AutomationFeatures />
       <GlobalImpact />
       <ServicesGrid />
       <GlobalPeoplePlatform />
       <LaunchFaster />

   
    </main>
  )
}
