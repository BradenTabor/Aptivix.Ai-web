import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { NAV_LINKS, SERVICES, CONTACT_INFO } from "@/lib/constants";

const socialLinks = [
  { href: CONTACT_INFO.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: CONTACT_INFO.social.github, icon: Github, label: "GitHub" },
  { href: CONTACT_INFO.social.twitter, icon: Twitter, label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/10 bg-metal-900/50">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <Image
                src="/logo.png"
                alt="Aptivix.Ai"
                width={160}
                height={45}
                className="h-11 w-auto object-contain logo-glow transition-all duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-text-secondary mb-6 max-w-xs">
              AI-powered software solutions that transform businesses. We build,
              you scale.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-metal-800/50 rounded-lg text-text-secondary hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text-primary font-heading font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-text-secondary hover:text-cyan-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-heading font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-text-secondary hover:text-cyan-400 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-text-secondary hover:text-cyan-400 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-secondary text-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cyan-400/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © {currentYear} Aptivix.Ai. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-text-muted hover:text-cyan-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-text-muted hover:text-cyan-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
