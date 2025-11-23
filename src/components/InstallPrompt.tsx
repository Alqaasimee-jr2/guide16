"use client";

import { useState, useEffect } from "react";
import { X, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed or installed
    const hasBeenDismissed = localStorage.getItem("pwa-install-dismissed");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    
    // Don't show if already installed or dismissed
    if (hasBeenDismissed || isStandalone) {
      return;
    }

    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show our custom prompt after a short delay
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Remember that user dismissed it (for 30 days)
    const thirtyDaysFromNow = Date.now() + 30 * 24 * 60 * 60 * 1000;
    localStorage.setItem("pwa-install-dismissed", thirtyDaysFromNow.toString());
  };

  // Don't render if we shouldn't show the prompt
  if (!showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom duration-500 md:left-auto md:right-4 md:max-w-sm">
      <Card className="border-2 border-primary/20 shadow-xl">
        <CardContent className="p-4">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Dismiss install prompt"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>

          <div className="flex gap-4 items-start pr-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Smartphone className="h-6 w-6 text-primary-foreground" />
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-semibold text-base">Install Guide16</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Access offline, faster load times, and home screen shortcut!
                </p>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleInstallClick} size="sm" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Install
                </Button>
                <Button onClick={handleDismiss} variant="ghost" size="sm">
                  Maybe Later
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
