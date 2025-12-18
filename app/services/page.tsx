import { Metadata } from "next";
import { ServicesHero } from "./components/services-hero";
import { ServiceDetails } from "./components/service-details";
import { PricingSection } from "./components/pricing-section";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of AI-powered services: web development, web applications, mobile apps, business portals, and intelligent automation solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
      <PricingSection />
      <CTASection />
    </>
  );
}

