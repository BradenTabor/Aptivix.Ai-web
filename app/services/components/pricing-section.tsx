"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "Custom",
    features: [
      "Single-page or landing page",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
      "1 month support",
    ],
    cta: "Get Quote",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses needing more power",
    price: "Custom",
    features: [
      "Multi-page website or web app",
      "Custom design & branding",
      "Advanced SEO optimization",
      "CMS integration",
      "API integrations",
      "AI automation features",
      "3 months support",
    ],
    cta: "Get Quote",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale solutions for large organizations",
    price: "Custom",
    features: [
      "Custom web/mobile application",
      "Full AI automation suite",
      "Dedicated project manager",
      "Priority support 24/7",
      "Custom integrations",
      "Scalable infrastructure",
      "12 months support & updates",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-metal-800/20 to-transparent">
      <div className="section-container">
        <SectionHeading
          subtitle="Pricing"
          title="Transparent, Flexible Pricing"
          description="Every project is unique. We provide custom quotes based on your specific needs and goals."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span 
                    className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-medium rounded-full"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              <Card
                className={`h-full ${
                  tier.popular ? "border-cyan-400/50 shadow-glow" : ""
                }`}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-text-secondary mb-6">{tier.description}</p>

                  <div className="mb-8">
                    <span className="text-4xl font-heading font-bold gradient-text">
                      {tier.price}
                    </span>
                    <span className="text-text-muted ml-2">quote</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-text-secondary"
                      >
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center group ${
                      tier.popular ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
