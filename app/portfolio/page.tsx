import { Metadata } from "next";
import { PortfolioHero } from "./components/portfolio-hero";
import { PortfolioGrid } from "./components/portfolio-grid";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of successful projects. See how we've helped businesses transform with AI-powered websites, apps, and automation solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </>
  );
}

