"use client";

import { Globe, Layout, Smartphone, Building2, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-container";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Globe: Globe,
  Layout: Layout,
  Smartphone: Smartphone,
  Building2: Building2,
  Bot: Bot,
};

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          subtitle="What We Do"
          title="Services That Drive Results"
          description="From custom websites to AI-powered automation, we deliver solutions that transform how you do business."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <StaggerItem key={service.id}>
                <Card className="h-full group">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:shadow-glow-lg transition-all duration-300"
                      style={{
                        boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                      }}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-text-muted"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
