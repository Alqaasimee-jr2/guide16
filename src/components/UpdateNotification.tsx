"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function UpdateNotification() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((reg) => {
        setRegistration(reg);

        // Check for updates periodically
        const checkForUpdates = () => {
          reg.update();
        };

        // Check every 60 seconds
        const interval = setInterval(checkForUpdates, 60000);

        // Listen for new service worker waiting
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                setShowUpdate(true);
              }
            });
          }
        });

        return () => clearInterval(interval);
      });
    }
  }, []);

  const handleUpdate = () => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      registration.waiting.addEventListener("statechange", (e: Event) => {
        const target = e.target as ServiceWorker;
        if (target.state === "activated") {
          window.location.reload();
        }
      });
    }
  };

  if (!showUpdate) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96">
      <Card className="p-4 shadow-lg border-2 border-blue-500/20 bg-card">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
            <RefreshCw className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold mb-1">Update Available</h3>
            <p className="text-sm text-muted-foreground mb-3">
              A new version of Guide16 is ready to install
            </p>
            <div className="flex gap-2">
              <Button onClick={handleUpdate} size="sm" className="flex-1">
                Update Now
              </Button>
              <Button onClick={() => setShowUpdate(false)} size="sm" variant="outline">
                Later
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
