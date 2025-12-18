// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

// Services Data
export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites that convert visitors into customers. Built with modern technologies for speed, security, and scalability.",
    icon: "Globe",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Secure & Scalable",
    ],
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "Scalable, secure web applications tailored to your business needs. From dashboards to complex enterprise solutions.",
    icon: "Layout",
    features: [
      "Custom Functionality",
      "User Authentication",
      "API Integration",
      "Real-time Features",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description:
      "Native iOS and Android applications that deliver exceptional user experiences and drive engagement.",
    icon: "Smartphone",
    features: [
      "iOS & Android",
      "Cross-platform",
      "Push Notifications",
      "Offline Support",
    ],
  },
  {
    id: "business-portals",
    title: "Business Portals",
    description:
      "Custom enterprise portals that streamline operations, improve collaboration, and boost productivity.",
    icon: "Building2",
    features: [
      "Employee Dashboards",
      "Client Portals",
      "Workflow Management",
      "Analytics & Reports",
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Automate up to 90% of repetitive tasks and workflows with intelligent AI-powered solutions.",
    icon: "Bot",
    features: [
      "Task Automation",
      "Smart Workflows",
      "AI Assistants",
      "Cost Reduction",
    ],
  },
] as const;

// Process Steps
export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We dive deep into understanding your business, goals, and challenges to create the perfect solution.",
  },
  {
    step: 2,
    title: "Strategy",
    description:
      "Our team crafts a comprehensive plan with clear milestones, timelines, and deliverables.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "We build your solution using cutting-edge technologies and AI-powered development tools.",
  },
  {
    step: 4,
    title: "Deploy",
    description:
      "Launch your project with confidence. We handle deployment, testing, and automation setup.",
  },
  {
    step: 5,
    title: "Support",
    description:
      "Ongoing optimization and support to ensure your solution continues to deliver results.",
  },
] as const;

// AI Benefits
export const AI_BENEFITS = [
  {
    title: "Reduce Workload",
    description: "Free your team from repetitive tasks to focus on strategic work.",
    icon: "TrendingDown",
  },
  {
    title: "Increase Efficiency",
    description: "Automate processes that used to take hours, completed in minutes.",
    icon: "Zap",
  },
  {
    title: "Cut Costs",
    description: "Reduce operational expenses with intelligent automation.",
    icon: "DollarSign",
  },
  {
    title: "Scale Effortlessly",
    description: "Grow your business without proportionally growing your overhead.",
    icon: "TrendingUp",
  },
] as const;

// Portfolio Projects (Placeholder)
export const PORTFOLIO_PROJECTS = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with AI-powered recommendations and automated inventory management.",
    image: "/images/project-1.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AI/ML"],
    category: "Web Application",
  },
  {
    id: "project-2",
    title: "Healthcare Portal",
    description:
      "Patient management system with appointment scheduling, telemedicine, and automated reminders.",
    image: "/images/project-2.jpg",
    technologies: ["React", "Python", "AWS", "AI Automation"],
    category: "Business Portal",
  },
  {
    id: "project-3",
    title: "Fitness Mobile App",
    description:
      "Cross-platform fitness app with AI personal trainer, workout tracking, and nutrition planning.",
    image: "/images/project-3.jpg",
    technologies: ["React Native", "Firebase", "TensorFlow", "iOS/Android"],
    category: "Mobile App",
  },
] as const;

// Testimonials (Placeholder)
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    quote:
      "Aptivix.Ai transformed our business operations. Their AI automation reduced our manual workload by 85%, allowing our team to focus on growth.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateCorp",
    quote:
      "The web application they built for us is incredibly robust and scalable. The team's expertise in AI integration is unmatched.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "GrowthHub",
    quote:
      "From concept to launch, Aptivix.Ai delivered beyond expectations. Our custom portal has streamlined operations across all departments.",
    avatar: "/images/avatar-3.jpg",
  },
] as const;

// Company Stats
export const COMPANY_STATS = [
  { value: "50+", label: "Projects Completed" },
  { value: "90%", label: "Task Automation" },
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Client Satisfaction" },
] as const;

// Contact Information
export const CONTACT_INFO = {
  email: "hello@aptivix.ai",
  phone: "+1 (555) 123-4567",
  social: {
    linkedin: "https://linkedin.com/company/aptivix-ai",
    github: "https://github.com/aptivix-ai",
    twitter: "https://twitter.com/aptivix_ai",
  },
} as const;

// Service Options for Contact Form
export const SERVICE_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "web-development", label: "Web Development" },
  { value: "web-applications", label: "Web Applications" },
  { value: "mobile-apps", label: "Mobile Apps" },
  { value: "business-portals", label: "Business Portals" },
  { value: "ai-automation", label: "AI Automation" },
  { value: "other", label: "Other / Not Sure" },
] as const;

