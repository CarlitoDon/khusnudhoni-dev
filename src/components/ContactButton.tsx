"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { useContactModal } from "./ContactModalProvider";
import { GlassButton } from "./GlassButton";

type ContactButtonProps = {
  isHero?: boolean;
};

export function ContactButton({ isHero }: ContactButtonProps) {
  const { openModal } = useContactModal();

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
        Chat via WhatsApp
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </GlassButton>
    );
  }

  return (
    <button
      onClick={openModal}
      type="button"
      className="pointer-events-auto cursor-pointer liquid-pill text-black dark:text-blue-900 hover:text-blue-700 dark:hover:text-blue-800 px-3 sm:px-4 py-1.5 sm:py-1.5 rounded-full transition-all font-mono text-[0.64rem] sm:text-[0.68rem] font-semibold tracking-wider shrink-0 whitespace-nowrap"
    >
      Contact
    </button>
  );
}
