"use client";

import { createContext, useContext, useState } from "react";
import { ContactModal } from "./ContactModal";

type ContactModalContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ openModal: () => setIsOpen(true), closeModal: () => setIsOpen(false) }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactModalContext.Provider>
  );
}

export const useContactModal = () => useContext(ContactModalContext);
