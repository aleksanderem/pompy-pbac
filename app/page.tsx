import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WhatIsHeatPump from "@/components/what-is-heat-pump";
import BenefitsSection from "@/components/benefits-section";
import BrandsSection from "@/components/brands-section";
import CalculatorSection from "@/components/calculator-section";
import HeatPumpVsAc from "@/components/heat-pump-vs-ac";
import ChartsSection from "@/components/charts-section";
import HowItWorks from "@/components/how-it-works";
import ComparisonTable from "@/components/comparison-table";
import TestimonialsSection from "@/components/testimonials-section";
import QuoteForm from "@/components/quote-form";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import StickyPhone from "@/components/sticky-phone";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <WhatIsHeatPump />
      <BenefitsSection />
      <BrandsSection />
      <CalculatorSection />
      <HeatPumpVsAc />
      <ChartsSection />
      <HowItWorks />
      <ComparisonTable />
      <TestimonialsSection />
      <QuoteForm />
      <FaqSection />
      <Footer />
      <StickyPhone />
    </main>
  );
}
