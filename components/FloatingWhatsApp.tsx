"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/config";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Show a friendly chat bubble after a short delay
    const t = setTimeout(() => setBubble(true), 4000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          <AnimatePresence>
            {bubble && (
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                className="glass mb-1 hidden max-w-[220px] rounded-2xl rounded-br-sm px-4 py-3 text-sm shadow-luxe sm:block"
              >
                <button
                  type="button"
                  aria-label="Dismiss message"
                  onClick={() => setBubble(false)}
                  className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-elevated shadow"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
                <p className="font-medium">Namaste 🙏</p>
                <p className="text-muted">
                  Have a question? Chat with us on WhatsApp.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Pranava Yoga on WhatsApp"
            className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110 animate-glow-pulse"
          >
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
            <MessageCircle className="relative h-7 w-7" aria-hidden />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
