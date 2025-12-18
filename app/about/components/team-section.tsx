"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "10+ years in software development. Former tech lead at Fortune 500 companies.",
    initials: "AT",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "Head of AI",
    bio: "AI/ML specialist with a PhD in Computer Science. Passionate about practical AI applications.",
    initials: "SC",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    bio: "Full-stack expert specializing in scalable web applications and mobile development.",
    initials: "MJ",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "UX/UI Director",
    bio: "Creating beautiful, user-centered designs that drive engagement and conversions.",
    initials: "ER",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          subtitle="Our Team"
          title="Meet the Experts"
          description="A talented group of developers, designers, and AI specialists dedicated to your success."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  {/* Avatar */}
                  <div 
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-5"
                    style={{
                      boxShadow: "0 0 25px rgba(0, 212, 255, 0.3)",
                    }}
                  >
                    {member.initials}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-text-secondary text-sm mb-5">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-metal-800/50 rounded-lg text-text-muted hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20 transition-all"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="p-2 bg-metal-800/50 rounded-lg text-text-muted hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20 transition-all"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="p-2 bg-metal-800/50 rounded-lg text-text-muted hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20 transition-all"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
