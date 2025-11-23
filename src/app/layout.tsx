import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import { AppShell } from "@/components/AppShell";
import { SkipToContent } from "@/components/SkipToContent";
import { InstallPrompt } from "@/components/InstallPrompt";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Guide16 - OAU Campus Companion",
  description: "Your lightweight campus companion for navigating OAU with ease. Step-by-step guides, locations, and FAQs.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Guide16",
  },
  applicationName: "Guide16",
  keywords: ["OAU", "campus", "guide", "student", "university", "Obafemi Awolowo University"],
  authors: [{ name: "Guide16 Team" }],
  creator: "Guide16 Team",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0fdf4" },
    { media: "(prefers-color-scheme: dark)", color: "#1a2e1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <SkipToContent />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <AppShell />
        <InstallPrompt />
        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}