"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/logo.png"
              alt="Aptivix.Ai"
              width={200}
              height={60}
              className="h-16 w-auto mx-auto logo-glow"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4 text-sm font-medium tracking-wider uppercase gradient-text"
          >
            About Aptivix.Ai
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary mb-6"
          >
            We Build the Future of{" "}
            <span className="gradient-text text-glow">Business Automation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Aptivix.Ai was founded with a simple mission: to help businesses
            harness the power of AI and automation to work smarter, not harder.
            We combine cutting-edge technology with strategic thinking to deliver
            solutions that truly transform how you operate.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
