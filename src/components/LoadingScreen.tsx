import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[color:var(--cream)] dark:bg-background"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid size-20 place-items-center rounded-full bg-gradient-gold shadow-gold"
            >
              <span className="font-display text-3xl font-bold text-[color:var(--maroon)]">G</span>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--gold)]"
            >
              Geeta Aggarwal Sweets
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
