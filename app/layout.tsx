import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aptivix.Ai | AI-Powered Software Development",
    template: "%s | Aptivix.Ai",
  },
  description:
    "Transform your business with AI-powered software solutions. We build websites, web apps, mobile apps, and automate up to 90% of your tasks and workflows.",
  keywords: [
    "AI automation",
    "software development",
    "web development",
    "mobile app development",
    "business automation",
    "custom software",
    "AI solutions",
  ],
  authors: [{ name: "Aptivix.Ai" }],
  creator: "Aptivix.Ai",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aptivix.ai",
    siteName: "Aptivix.Ai",
    title: "Aptivix.Ai | AI-Powered Software Development",
    description:
      "Transform your business with AI-powered software solutions. We build websites, web apps, mobile apps, and automate up to 90% of your tasks and workflows.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aptivix.Ai - AI-Powered Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptivix.Ai | AI-Powered Software Development",
    description:
      "Transform your business with AI-powered software solutions. Automate up to 90% of your tasks.",
    images: ["/og-image.png"],
    creator: "@aptivix_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

