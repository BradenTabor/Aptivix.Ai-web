"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background - Metallic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-metal-800/20 to-transparent" />
      
      <div className="section-container relative z-10">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it—hear from the businesses we've helped transform."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-6 border border-cyan-400/20">
                    <Quote className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-semibold"
                      style={{
                        boxShadow: "0 0 15px rgba(0, 212, 255, 0.3)",
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-text-muted">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
