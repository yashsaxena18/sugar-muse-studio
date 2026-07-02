import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site, telLink, whatsappLink } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "glass-strong shadow-soft"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-gold text-[color:var(--maroon)] shadow-gold">
              <span className="font-display text-lg font-bold">G</span>
            </div>
            <div className="min-w-0 leading-tight">
              <div className="truncate font-display text-base font-semibold text-foreground sm:text-lg">
                {site.name}
              </div>
              <div className="hidden text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)] sm:block">
                Since Generations
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-[color:var(--gold)]/10 hover:text-foreground"
                activeProps={{ className: "bg-[color:var(--gold)]/15 text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mx-2 h-6 w-px bg-border" />
            <a
              href={telLink}
              className="flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-[color:var(--gold)]/10"
            >
              <Phone className="size-4" /> Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-festive px-5 py-2 text-sm font-semibold text-white shadow-gold transition hover:scale-[1.02]"
            >
              <ShoppingBag className="size-4" /> Order Now
            </a>
            <ThemeToggle className="ml-2" />
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full border border-[color:var(--gold)]/30 bg-card/60 backdrop-blur"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 overflow-hidden rounded-3xl glass-strong p-4 shadow-luxe lg:hidden"
            >
              <nav className="flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/90 transition hover:bg-[color:var(--gold)]/10"
                    activeProps={{ className: "bg-[color:var(--gold)]/15" }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <a
                    href={telLink}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[color:var(--gold)]/40 px-4 py-3 text-sm font-semibold"
                  >
                    <Phone className="size-4" /> Call
                  </a>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-festive px-4 py-3 text-sm font-semibold text-white shadow-gold"
                  >
                    <ShoppingBag className="size-4" /> Order
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
