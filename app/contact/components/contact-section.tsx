"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, Twitter } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_INFO, SERVICE_OPTIONS } from "@/lib/constants";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real app, you would send the data to your backend here
      console.log("Form submitted:", data);
      
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-text-secondary mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Name *"
                      id="name"
                      placeholder="John Doe"
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <Input
                      label="Email *"
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Phone (optional)"
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      {...register("phone")}
                    />
                    <Select
                      label="Service Interested In"
                      id="service"
                      options={SERVICE_OPTIONS}
                      {...register("service")}
                    />
                  </div>

                  <Textarea
                    label="Message *"
                    id="message"
                    placeholder="Tell us about your project..."
                    error={errors.message?.message}
                    {...register("message")}
                  />

                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <p className="text-emerald-400">
                      Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-400">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
                Get in Touch
              </h2>
              <p className="text-text-secondary">
                We&apos;d love to hear from you. Reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card hover={false}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-400/20"
                  >
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary mb-1">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-text-secondary hover:text-cyan-400 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card hover={false}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-400/20"
                  >
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary mb-1">
                      Call Us
                    </h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-text-secondary hover:text-cyan-400 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card hover={false}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-400/20"
                  >
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary mb-1">
                      Location
                    </h3>
                    <p className="text-text-secondary">
                      Remote-first, serving clients worldwide
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading font-semibold text-text-primary mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href={CONTACT_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-metal-800/50 border border-metal-600/30 flex items-center justify-center text-text-secondary hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT_INFO.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-metal-800/50 border border-metal-600/30 flex items-center justify-center text-text-secondary hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-metal-800/50 border border-metal-600/30 flex items-center justify-center text-text-secondary hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* FAQ Teaser */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-text-primary mb-2">
                  Free Consultation
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Not sure where to start? Book a free 30-minute consultation to discuss your project needs.
                </p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                  Schedule a Call →
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
