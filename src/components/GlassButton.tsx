import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassButtonProps = {
  children: ReactNode;
  variant?: "primary" | "neutral";
  as?: "a" | "button";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
};

export function GlassButton({
  children,
  className,
  variant = "neutral",
  as = "a",
  ...props
}: GlassButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 transition-all",
    variant === "primary"
      ? "glass-cta font-semibold text-blue-700 hover:text-blue-800 hover:scale-[1.02] dark:text-blue-300 dark:hover:text-blue-200"
      : "liquid-pill font-medium text-black hover:text-gray-900 dark:text-white dark:hover:text-slate-200",
    className,
  );

  if (as === "button") {
    return (
      <button {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes}>
      {children}
    </a>
  );
}
