import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site, telLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Geeta Aggarwal Sweets" },
      {
        name: "description",
        content:
          "Get in touch for orders, bulk enquiries, weddings and corporate gifting. Phone, WhatsApp, email and shop address.",
      },
      { property: "og:title", content: "Contact — Geeta Aggarwal Sweets" },
      { property: "og:description", content: "Get in touch with us." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-card/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brown)] backdrop-blur">
              Contact
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Let's <span className="text-gradient-festive">connect</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Questions, custom orders, bulk enquiries — we'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1.2fr]">
          {/* Info cards */}
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Call us", value: site.phone, href: telLink },
              { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              { icon: MapPin, label: "Visit the shop", value: site.address },
              { icon: Clock, label: "Hours", value: site.hours },
            ].map(({ icon: Icon, label, value, href }) => {
              const Comp: any = href ? "a" : "div";
              return (
                <Reveal key={label}>
                  <Comp
                    {...(href ? { href } : {})}
                    className="group flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:border-[color:var(--gold)]/50 hover:shadow-gold"
                  >
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-[color:var(--maroon)] shadow-gold">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">{label}</div>
                      <div className="mt-1 font-medium text-foreground">{value}</div>
                    </div>
                  </Comp>
                </Reveal>
              );
            })}

            <Reveal>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-3xl bg-gradient-festive px-6 py-4 text-sm font-semibold text-white shadow-luxe transition hover:scale-[1.01]"
              >
                Chat on WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-luxe ring-1 ring-border sm:p-10"
            >
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-gradient-gold opacity-15 blur-3xl" />
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">We typically reply within a few hours.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="name" required placeholder="e.g. Aarav Sharma" />
                <Field label="Phone" name="phone" required placeholder="+91 ..." />
                <Field className="sm:col-span-2" label="Email" name="email" type="email" placeholder="you@example.com" />
                <Field className="sm:col-span-2" label="Subject" name="subject" placeholder="Bulk order, custom box, wedding…" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what you'd like to order or ask about…"
                    className="mt-2 w-full rounded-2xl border border-border bg-background p-4 text-sm outline-none transition focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-festive px-7 py-3.5 text-sm font-semibold text-white shadow-gold transition hover:scale-[1.02]"
              >
                <Send className="size-4" /> Send Message
              </button>

              {sent && (
                <p className="mt-4 rounded-2xl bg-[color:var(--gold)]/15 px-4 py-3 text-sm text-[color:var(--brown)]">
                  Thank you! Your message has been noted. (Hook this form to your inbox or WhatsApp later.)
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-[color:var(--gold)]/30 shadow-soft">
              <div className="aspect-[16/7] w-full placeholder-shimmer relative">
                <div className="absolute inset-0 grid place-items-center text-center text-[color:var(--brown)]">
                  <div>
                    <MapPin className="mx-auto size-8" />
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.25em]">Google Maps Placeholder</div>
                    <div className="mt-1 text-sm text-muted-foreground">Embed your shop location here</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
      />
    </div>
  );
}
