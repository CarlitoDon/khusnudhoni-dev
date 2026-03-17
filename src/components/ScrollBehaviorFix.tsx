"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollBehaviorFix() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, [pathname]);

  return null;
}
