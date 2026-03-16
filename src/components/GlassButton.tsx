import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "neutral";
};

export function GlassButton({
  children,
  className,
  variant = "neutral",
  ...props
}: GlassButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 transition-all",
        variant === "primary"
          ? "glass-cta font-semibold text-blue-700 hover:text-blue-800 hover:scale-[1.02]"
          : "liquid-pill font-medium text-black hover:text-gray-900",
        className,
      )}
    >
      {children}
    </a>
  );
}
