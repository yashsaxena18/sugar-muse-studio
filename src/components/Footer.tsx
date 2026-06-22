import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[color:var(--gold)]/20 bg-[color:var(--cream)]/60 dark:bg-card">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--gold)_15%,transparent),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-full bg-gradient-gold text-[color:var(--maroon)] shadow-gold">
                <span className="font-display text-lg font-bold">G</span>
              </div>
              <div className="font-display text-lg font-semibold">{site.name}</div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {site.shortDescription}
            </p>
            <div className="mt-5 flex gap-3">
              <a href={site.socials.instagram} aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-[color:var(--gold)]/30 hover:bg-[color:var(--gold)]/10">
                <Instagram className="size-4" />
              </a>
              <a href={site.socials.facebook} aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-[color:var(--gold)]/30 hover:bg-[color:var(--gold)]/10">
                <Facebook className="size-4" />
              </a>
              <a href={site.socials.youtube} aria-label="Youtube" className="grid size-10 place-items-center rounded-full border border-[color:var(--gold)]/30 hover:bg-[color:var(--gold)]/10">
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--gold)]">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--gold)]">Categories</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Traditional Sweets</li>
              <li>Bengali Sweets</li>
              <li>Dry Fruit Sweets</li>
              <li>Namkeen</li>
              <li>Festival Specials</li>
              <li>Gift Boxes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--gold)]">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><Phone className="size-4 shrink-0 text-[color:var(--gold)] mt-0.5" /><span>{site.phone}</span></li>
              <li className="flex gap-3"><Mail className="size-4 shrink-0 text-[color:var(--gold)] mt-0.5" /><span>{site.email}</span></li>
              <li className="flex gap-3"><MapPin className="size-4 shrink-0 text-[color:var(--gold)] mt-0.5" /><span>{site.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--gold)]/20 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Crafted with love · A taste of tradition</p>
        </div>
      </div>
    </footer>
  );
}
