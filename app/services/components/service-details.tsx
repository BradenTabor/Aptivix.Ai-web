"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Layout, Smartphone, Building2, Bot, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites that don't just look beautiful—they convert visitors into customers. Built with modern technologies for speed, security, and SEO.",
    features: [
      "Responsive, mobile-first design",
      "SEO optimization built-in",
      "Lightning-fast page loads",
      "Secure and scalable architecture",
      "Content management systems",
      "E-commerce integration",
    ],
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    id: "web-applications",
    icon: Layout,
    title: "Web Applications",
    description:
      "Scalable, secure web applications tailored to your unique business needs. From internal tools to customer-facing platforms.",
    features: [
      "Custom functionality & features",
      "User authentication & roles",
      "Third-party API integration",
      "Real-time data & updates",
      "Cloud-native architecture",
      "Analytics & reporting dashboards",
    ],
    gradient: "from-cyan-600 to-cyan-700",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native iOS and Android applications that deliver exceptional user experiences and keep your customers engaged on the go.",
    features: [
      "Native iOS & Android apps",
      "Cross-platform development",
      "Push notifications",
      "Offline functionality",
      "App Store optimization",
      "Ongoing updates & maintenance",
    ],
    gradient: "from-metal-500 to-metal-600",
  },
  {
    id: "business-portals",
    icon: Building2,
    title: "Business Portals",
    description:
      "Custom enterprise portals that streamline operations, improve team collaboration, and give you complete visibility into your business.",
    features: [
      "Employee dashboards",
      "Client-facing portals",
      "Workflow automation",
      "Document management",
      "Analytics & insights",
      "Role-based access control",
    ],
    gradient: "from-metal-400 to-metal-500",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate up to 90% of repetitive tasks and workflows with intelligent AI-powered solutions. Free your team to focus on what matters.",
    features: [
      "Process automation",
      "AI-powered chatbots",
      "Document processing",
      "Email automation",
      "Data entry automation",
      "Custom AI integrations",
    ],
    gradient: "from-cyan-400 to-cyan-500",
  },
];

export function ServiceDetails() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "lg:grid-flow-dense"
      }`}
    >
      {/* Content */}
      <div className={isEven ? "" : "lg:col-start-2"}>
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
          style={{
            boxShadow: "0 0 25px rgba(0, 212, 255, 0.3)",
          }}
        >
          <service.icon className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
          {service.title}
        </h2>

        <p className="text-lg text-text-secondary mb-8">
          {service.description}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center text-text-secondary">
              <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="btn-primary inline-flex items-center group"
        >
          Get Started
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Visual */}
      <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
        <Card className="aspect-square lg:aspect-[4/3] overflow-hidden">
          <CardContent className="p-0 h-full">
            <div
              className={`w-full h-full bg-gradient-to-br ${service.gradient} opacity-20 flex items-center justify-center`}
            >
              <service.icon className="w-32 h-32 text-white/30" />
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
