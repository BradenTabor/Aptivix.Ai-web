"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Shield, Users, Rocket, Heart, Lightbulb } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description:
      "We stay at the cutting edge of AI and software development to deliver solutions that set you apart.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Your data and business are safe with us. We build with security as a foundation, not an afterthought.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We're not just vendors—we're partners invested in your success. Your goals become our goals.",
  },
  {
    icon: Rocket,
    title: "Results Driven",
    description:
      "Every solution we build is measured by the impact it creates. If it doesn't move the needle, we iterate.",
  },
  {
    icon: Heart,
    title: "Passion for Excellence",
    description:
      "We pour our hearts into every project. Good enough isn't in our vocabulary—only exceptional will do.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly. We're committed to growing alongside it to always offer you the best.",
  },
];

export function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-metal-800/20 to-transparent">
      <div className="section-container">
        <SectionHeading
          subtitle="Our Values"
          title="What Drives Us"
          description="The principles that guide every decision we make and every solution we build."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-5 border border-cyan-400/20">
                    <value.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
