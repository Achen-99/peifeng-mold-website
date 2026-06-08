import { HeroSection } from "@/components/home/HeroSection";
import { WhyUsSection } from "@/components/home/WhyBrokerSection";
import { MoldTypesSection } from "@/components/home/MoldTypesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TrustSignalsSection } from "@/components/home/TrustSignalsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTABanner } from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peifeng Precision — Mold Engineering & Manufacturing | Shenzhen, China",
  description:
    "In-house mold engineering, DFM, and QC. Manufacturing by audited factory partners. Injection, die-casting, and blow molds. One accountable contact, competitive pricing, worldwide shipping.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <MoldTypesSection />
      <HowItWorksSection />
      <TrustSignalsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
