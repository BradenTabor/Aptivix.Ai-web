import { Metadata } from "next";
import { ContactHero } from "./components/contact-hero";
import { ContactSection } from "./components/contact-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aptivix.Ai. Let's discuss how we can help transform your business with AI-powered software solutions.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}

