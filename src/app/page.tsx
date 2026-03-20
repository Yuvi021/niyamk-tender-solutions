import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import GemSupportSection from "./components/GemSupportSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niyamak Tender Solution - GeM Portal Support & Tender Consultancy",
  description:
    "India’s leading tender service consultancy and GeM portal support provider. We help you with tender search, document preparation, bid management, DSC setup, authorization codes, and invoice/EMD follow-ups.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <GemSupportSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
}
