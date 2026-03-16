"use client";

import { type ReactNode, useMemo, useState } from "react";

type InteractiveStackGlowProps = {
  className?: string;
  children: ReactNode;
};

export function InteractiveStackGlow({
  className = "",
  children,
}: InteractiveStackGlowProps) {
  const [glow, setGlow] = useState({ x: "50%", y: "50%", opacity: 0 });

  const style = useMemo(
    () =>
      ({
        "--glow-x": glow.x,
        "--glow-y": glow.y,
        "--glow-opacity": glow.opacity,
      }) as React.CSSProperties,
    [glow],
  );

  return (
    <div
      className={`interactive-stack-glow ${className}`}
      style={style}
      onMouseEnter={() => setGlow((prev) => ({ ...prev, opacity: 1 }))}
      onMouseLeave={() => setGlow((prev) => ({ ...prev, opacity: 0 }))}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = `${event.clientX - rect.left}px`;
        const y = `${event.clientY - rect.top}px`;
        setGlow({ x, y, opacity: 1 });
      }}
    >
      {children}
    </div>
  );
}
