import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./data";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed right-10 bottom-10 z-50 grid h-14 w-14 place-items-center rounded-full bg-ink text-ink-foreground shadow-[var(--shadow-lift)] ring-1 ring-gold/40 transition-colors duration-500 hover:bg-gold hover:text-ink sm:right-8 sm:bottom-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-gold/25 [animation-duration:3s]" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}