"use client";

import { useEffect, useState } from "react";
import { OfflineIndicator } from "./OfflineIndicator";
import { UpdateNotification } from "./UpdateNotification";
import { PWAInstallPrompt } from "./PWAInstallPrompt";

export function AppShell() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <OfflineIndicator />
      <UpdateNotification />
      <PWAInstallPrompt />
    </>
  );
}
