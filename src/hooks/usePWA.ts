"use client";

import { useEffect, useState } from "react";

interface PWAStatus {
  isInstalled: boolean;
  isStandalone: boolean;
  canInstall: boolean;
  isOnline: boolean;
}

export function usePWA(): PWAStatus {
  const [status, setStatus] = useState<PWAStatus>({
    isInstalled: false,
    isStandalone: false,
    canInstall: false,
    isOnline: true,
  });

  useEffect(() => {
    // Check if running in standalone mode (installed as PWA)
    const isStandalone = 
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    // Check if app can be installed
    const checkInstallable = () => {
      const canInstall = !isStandalone && "beforeinstallprompt" in window;
      return canInstall;
    };

    // Check online status
    const isOnline = navigator.onLine;

    // Check if service worker is registered (indicates installed PWA)
    const checkServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        return !!registration;
      }
      return false;
    };

    checkServiceWorker().then((isInstalled) => {
      setStatus({
        isInstalled,
        isStandalone,
        canInstall: checkInstallable(),
        isOnline,
      });
    });

    // Listen for online/offline events
    const handleOnline = () => setStatus((s) => ({ ...s, isOnline: true }));
    const handleOffline = () => setStatus((s) => ({ ...s, isOnline: false }));

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
}
