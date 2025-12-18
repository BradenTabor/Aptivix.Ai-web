"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  centered = true,
  className,
  children,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block mb-4 text-sm font-medium tracking-wider uppercase gradient-text"
        >
          {subtitle}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}

