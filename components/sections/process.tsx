"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code2, Rocket, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";

const stepIcons = [Search, Lightbulb, Code2, Rocket, HeartHandshake];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          subtitle="Our Process"
          title="How We Work"
          description="A streamlined approach from concept to launch, powered by AI-driven development tools."
        />

        <div ref={ref} className="relative">
          {/* Timeline line - Desktop - Cyber theme */}
          <div 
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)",
            }}
          />
          
          {/* Timeline line - Mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-cyan-400/30 via-cyan-400/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step, index) => {
              const IconComponent = stepIcons[index];
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Mobile layout */}
                  <div className="lg:hidden flex gap-6">
                    {/* Step indicator */}
                    <div className="relative z-10 flex-shrink-0">
                      <div 
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center"
                        style={{
                          boxShadow: "0 0 25px rgba(0, 212, 255, 0.4)",
                        }}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="text-sm font-medium text-cyan-400 mb-1">
                        Step {step.step}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden lg:block text-center">
                    {/* Step indicator */}
                    <div className="relative z-10 mx-auto mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: index * 0.15 + 0.2 
                        }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto"
                        style={{
                          boxShadow: "0 0 25px rgba(0, 212, 255, 0.4)",
                        }}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-sm font-medium text-cyan-400 mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="text-lg font-heading font-bold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
