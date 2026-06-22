import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { telLink, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid size-11 place-items-center rounded-full glass-strong shadow-soft hover:bg-[color:var(--gold)]/15"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={telLink}
        aria-label="Call Now"
        className="grid size-12 place-items-center rounded-full bg-[color:var(--maroon)] text-white shadow-luxe transition hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition hover:scale-105"
      >
        <MessageCircle className="size-6" />
        <span className="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full bg-white">
          <span className="size-2 animate-ping rounded-full bg-[#25D366]" />
        </span>
      </a>
    </div>
  );
}
