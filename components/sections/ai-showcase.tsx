"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingDown, Zap, DollarSign, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { AI_BENEFITS } from "@/lib/constants";

const iconMap = {
  TrendingDown: TrendingDown,
  Zap: Zap,
  DollarSign: DollarSign,
  TrendingUp: TrendingUp,
};

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AIShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient - Cyber theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <SectionHeading
          subtitle="AI Automation"
          title="90% Task Automation, 100% Results"
          description="Let AI handle the repetitive work while your team focuses on what matters most—growing your business."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Animated Percentage Circle */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Outer glow ring */}
              <div 
                className="absolute inset-0 rounded-full opacity-30 blur-2xl animate-pulse-glow"
                style={{
                  background: "radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)",
                }}
              />
              
              {/* Background circle */}
              <div className="absolute inset-4 rounded-full bg-metal-800/50 border border-cyan-400/20" />
              
              {/* Progress ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="rgba(100, 116, 139, 0.2)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="url(#cyberGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}%`}
                  initial={{ strokeDashoffset: `${2 * Math.PI * 45}%` }}
                  animate={isInView ? { strokeDashoffset: `${2 * Math.PI * 45 * 0.1}%` } : {}}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))",
                  }}
                />
                <defs>
                  <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="50%" stopColor="#67e8f9" />
                    <stop offset="100%" stopColor="#00b4d8" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl md:text-6xl font-heading font-bold gradient-text text-glow">
                  <AnimatedCounter target={90} suffix="%" />
                </span>
                <span className="text-text-secondary text-lg mt-2">Automation</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AI_BENEFITS.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div 
                        className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-400/20"
                      >
                        <IconComponent className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-text-primary mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
