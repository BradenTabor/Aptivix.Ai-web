import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-metal-800/50 text-text-secondary border border-metal-600/30",
    accent: "bg-cyan-500/20 text-cyan-400 border border-cyan-400/20",
    outline: "bg-transparent border border-metal-600/30 text-text-secondary hover:border-cyan-400/30 hover:text-cyan-400 transition-colors",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
