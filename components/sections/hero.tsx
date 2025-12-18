"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Animated gradient orbs - Cyber blue theme */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      {/* Grid lines - Cyber theme */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Prominent Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="hero-logo-container inline-block">
              <Image
                src="/logo.png"
                alt="Aptivix.Ai"
                width={400}
                height={120}
                priority
                className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto mx-auto object-contain logo-shimmer"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(0, 212, 255, 0.4)) drop-shadow(0 0 60px rgba(0, 180, 216, 0.2))",
                }}
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metal-800/50 border border-cyan-400/20 mb-8"
            style={{
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.1)",
            }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-text-secondary">
              AI-Powered Development
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary mb-6 leading-tight"
          >
            Transform Your Business with{" "}
            <span className="gradient-text text-glow">AI Automation</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10"
          >
            We build websites, web apps, and mobile applications powered by AI.
            Automate up to{" "}
            <span className="text-cyan-400 font-semibold">
              90% of your tasks and workflows
            </span>{" "}
            to scale your business effortlessly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "90%", label: "Task Automation" },
              { value: "50+", label: "Projects Delivered" },
              { value: "24/7", label: "Support Available" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
