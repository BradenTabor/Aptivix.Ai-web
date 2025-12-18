"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 text-sm font-medium tracking-wider uppercase gradient-text"
          >
            Our Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary mb-6"
          >
            Solutions That{" "}
            <span className="gradient-text text-glow">Scale Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            From stunning websites to powerful AI automation, we offer a complete
            suite of digital solutions designed to help your business thrive in
            the modern economy.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
