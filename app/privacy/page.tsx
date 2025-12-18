import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Aptivix.Ai - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-text-secondary mb-4">
              We collect information you provide directly to us, such as when you fill out our contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-text-secondary mb-4">
              We use the information we collect to respond to your inquiries, provide our services, and communicate with you about projects and opportunities. We may also use your information to improve our website and services.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-text-secondary mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-text-secondary mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-text-primary mt-8 mb-4">
              5. Contact Us
            </h2>
            <p className="text-text-secondary mb-4">
              If you have any questions about this Privacy Policy, please contact us at hello@aptivix.ai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

