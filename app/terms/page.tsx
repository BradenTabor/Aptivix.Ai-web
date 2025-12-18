import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Aptivix.Ai - Read our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-text-secondary mb-4">
              By accessing and using the Aptivix.Ai website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              2. Services
            </h2>
            <p className="text-text-secondary mb-4">
              Aptivix.Ai provides software development, web development, mobile app development, and AI automation services. Specific terms for individual projects will be outlined in separate service agreements.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-text-secondary mb-4">
              All content on this website, including text, graphics, logos, and software, is the property of Aptivix.Ai and is protected by intellectual property laws. Client-specific deliverables are governed by individual project agreements.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-text-secondary mb-4">
              Aptivix.Ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              5. Changes to Terms
            </h2>
            <p className="text-text-secondary mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              6. Contact
            </h2>
            <p className="text-text-secondary mb-4">
              For questions about these Terms of Service, please contact us at hello@aptivix.ai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

