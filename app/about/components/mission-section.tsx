"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-8 md:p-10">
                <div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6"
                  style={{
                    boxShadow: "0 0 25px rgba(0, 212, 255, 0.3)",
                  }}
                >
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
                  Our Mission
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  To empower businesses of all sizes with intelligent software
                  solutions that automate repetitive tasks, streamline operations,
                  and unlock unprecedented growth potential. We believe that AI
                  should be accessible, practical, and transformative for every
                  organization.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-8 md:p-10">
                <div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6"
                  style={{
                    boxShadow: "0 0 25px rgba(0, 212, 255, 0.3)",
                  }}
                >
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
                  Our Vision
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  A world where every business operates at peak efficiency, where
                  AI handles the mundane so humans can focus on the creative and
                  strategic. We envision a future where technology is a true
                  partner in success, not just a tool.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-6">
            Our Story
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Aptivix.Ai started with a question: &quot;What if we could eliminate the
            busywork that holds businesses back?&quot; Our founders, experienced
            software engineers and AI specialists, saw firsthand how companies
            struggled with repetitive tasks, outdated systems, and inefficient
            workflows.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Today, we&apos;ve helped dozens of businesses automate up to 90% of their
            routine operations. From startups to established enterprises, our
            clients have seen dramatic improvements in productivity, cost savings,
            and employee satisfaction. We&apos;re not just building software—we&apos;re
            building the foundation for the next era of business efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
