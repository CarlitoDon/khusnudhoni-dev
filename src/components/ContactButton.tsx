"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useContactModal } from "./ContactModalProvider";
import { GlassButton } from "./GlassButton";
import type { Locale } from "@/lib/i18n";

type ContactButtonProps = {
  isHero?: boolean;
  locale?: Locale;
};

export function ContactButton({ isHero, locale = "id" }: ContactButtonProps) {
  const { openModal } = useContactModal();
  const labels = {
    id: {
      hero: "Chat via WhatsApp",
      compact: "Contact",
    },
    en: {
      hero: "Chat via WhatsApp",
      compact: "Contact",
    },
  } satisfies Record<Locale, { hero: string; compact: string }>;

  if (isHero) {
    return (
      <GlassButton
        as="button"
        type="button"
        onClick={openModal}
        className="group justify-center text-sm md:text-base cursor-pointer"
        variant="primary"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        {labels[locale].hero}
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </GlassButton>
    );
  }

  return (
    <button
      onClick={openModal}
      type="button"
      className="pointer-events-auto cursor-pointer liquid-pill text-black dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 px-3 sm:px-4 py-1.5 sm:py-1.5 rounded-full transition-all font-mono text-[0.64rem] sm:text-[0.68rem] font-semibold tracking-wider shrink-0 whitespace-nowrap"
    >
      {labels[locale].compact}
    </button>
  );
}
