"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Web Application", "Mobile App", "Business Portal", "AI Automation"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with AI-powered product recommendations, automated inventory management, and seamless checkout experience.",
    category: "Web Application",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AI/ML", "Stripe"],
    metrics: "40% increase in conversion rate",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    id: 2,
    title: "Healthcare Portal",
    description:
      "Patient management system with appointment scheduling, telemedicine capabilities, automated reminders, and HIPAA-compliant data handling.",
    category: "Business Portal",
    technologies: ["React", "Python", "AWS", "AI Automation", "Twilio"],
    metrics: "60% reduction in admin time",
    gradient: "from-metal-400 to-metal-500",
  },
  {
    id: 3,
    title: "Fitness Mobile App",
    description:
      "Cross-platform fitness application with AI personal trainer, workout tracking, nutrition planning, and social features for community engagement.",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "TensorFlow", "iOS", "Android"],
    metrics: "100k+ downloads in 6 months",
    gradient: "from-cyan-600 to-cyan-700",
  },
  {
    id: 4,
    title: "Legal Document Automation",
    description:
      "AI-powered system that automates legal document review, extraction, and generation, reducing manual work by 85%.",
    category: "AI Automation",
    technologies: ["Python", "OpenAI", "AWS Lambda", "React", "MongoDB"],
    metrics: "85% reduction in document processing time",
    gradient: "from-metal-500 to-metal-600",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description:
      "Modern property listing platform with virtual tours, AI-powered property matching, and automated lead management.",
    category: "Web Application",
    technologies: ["Next.js", "Three.js", "Supabase", "AI/ML", "Maps API"],
    metrics: "3x increase in qualified leads",
    gradient: "from-cyan-400 to-cyan-500",
  },
  {
    id: 6,
    title: "HR Management System",
    description:
      "Comprehensive HR portal with automated onboarding, performance tracking, payroll integration, and employee self-service features.",
    category: "Business Portal",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "Slack API"],
    metrics: "50% faster onboarding process",
    gradient: "from-metal-300 to-metal-400",
  },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-glow"
                  : "bg-metal-800/50 text-text-secondary hover:text-text-primary hover:bg-metal-700/50 border border-metal-600/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full group cursor-pointer overflow-hidden">
                  {/* Project Thumbnail */}
                  <div
                    className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Layers className="w-16 h-16 text-white/30" />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="flex items-center gap-2 text-white font-medium">
                        <ExternalLink className="w-5 h-5" />
                        View Details
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <Badge variant="accent" className="mb-4">
                      {project.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="text-sm text-cyan-400 font-medium mb-4">
                      📈 {project.metrics}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
