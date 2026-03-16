"use client";

import { useEffect } from "react";

export function BackdropCapabilityProbe() {
  useEffect(() => {
    const root = document.documentElement;

    const probe = document.createElement("div");
    probe.style.cssText = [
      "position: fixed",
      "inset: auto auto -9999px -9999px",
      "width: 24px",
      "height: 24px",
      "background: rgba(255,255,255,0.36)",
      "backdrop-filter: blur(2px)",
      "-webkit-backdrop-filter: blur(2px)",
      "pointer-events: none",
      "z-index: -1",
    ].join(";");

    document.body.appendChild(probe);

    const computed = window.getComputedStyle(probe);
    const webkitBackdrop = (
      computed as CSSStyleDeclaration & {
        webkitBackdropFilter?: string;
      }
    ).webkitBackdropFilter;

    const renderedBackdrop =
      (computed.backdropFilter && computed.backdropFilter !== "none") ||
      (webkitBackdrop && webkitBackdrop !== "none");

    root.classList.toggle("no-backdrop-render", !renderedBackdrop);
    probe.remove();
  }, []);

  return null;
}
