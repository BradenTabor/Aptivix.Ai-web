import { Metadata } from "next";
import { AboutHero } from "./components/about-hero";
import { MissionSection } from "./components/mission-section";
import { ValuesSection } from "./components/values-section";
import { TeamSection } from "./components/team-section";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aptivix.Ai - We're a team of developers and AI specialists dedicated to transforming businesses through intelligent automation and custom software solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  );
}

