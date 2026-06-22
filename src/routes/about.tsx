import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Sparkles, Target } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, stagger, staggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Geeta Aggarwal Sweets" },
      {
        name: "description",
        content:
          "Discover the story, mission and craftsmanship behind Geeta Aggarwal Sweets — a legacy of authentic Indian mithai.",
      },
      { property: "og:title", content: "About — Geeta Aggarwal Sweets" },
      { property: "og:description", content: "Our story, mission and craftsmanship." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "Year", title: "Humble Beginnings", desc: "Placeholder — describe how the shop started." },
  { year: "Year", title: "Local Favourite", desc: "Placeholder — milestone moment for the brand." },
  { year: "Year", title: "Expanding the Craft", desc: "Placeholder — growth, new categories, larger kitchens." },
  { year: "Year", title: "Today", desc: "Placeholder — current scale and community reach." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_30%_20%,color-mix(in_oklab,var(--saffron)_18%,transparent),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-card/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brown)] backdrop-blur">
              Our Story
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              A legacy <span className="text-gradient-festive">three generations</span> in the making.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              {site.shortDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-20 blur-2xl" />
              <ImagePlaceholder
                label="Shop / Founder Image"
                aspect="aspect-[5/6]"
                rounded="rounded-[1.75rem]"
                className="relative shadow-luxe"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
                The Beginning
              </span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Crafted with hands, served with heart.
            </h2>
            <p className="mt-5 text-muted-foreground">
              <span className="italic text-[color:var(--brown)]">[Story content placeholder]</span> —
              share the origin story of the shop. How the founder started, what inspired the first recipes,
              the family values that still shape every batch today.
            </p>
            <p className="mt-3 text-muted-foreground">
              <span className="italic text-[color:var(--brown)]">[More content placeholder]</span> —
              add anecdotes, milestones and the philosophy that has kept generations of customers loyal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {[
              { icon: Target, eyebrow: "Our Mission", title: "Authentic taste, every single time.", desc: "Mission statement placeholder — describe what drives the business day to day." },
              { icon: Sparkles, eyebrow: "Our Vision", title: "Spreading the joy of Indian mithai.", desc: "Vision statement placeholder — describe the long-term aspiration for the brand." },
            ].map(({ icon: Icon, eyebrow, title, desc }) => (
              <motion.div
                key={eyebrow}
                variants={staggerItem}
                className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border sm:p-10"
              >
                <div className="absolute -right-12 -top-12 size-40 rounded-full bg-gradient-gold opacity-15 blur-3xl" />
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-gold text-[color:var(--maroon)] shadow-gold">
                  <Icon className="size-6" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">{eyebrow}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{title}</h3>
                <p className="mt-3 text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Shop Images */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Shop" title={<>Inside the <span className="text-gradient-festive">kitchen</span></>} description="A peek into the place where every sweet is born." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "aspect-[4/3]", "aspect-[4/5]", "aspect-[4/3]",
              "aspect-[4/5]", "aspect-[4/3]", "aspect-[4/5]",
            ].map((a, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-[color:var(--gold)]/20">
                  <ImagePlaceholder label={`Shop ${i + 1}`} aspect={a} rounded="rounded-none" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="Our Journey" title={<>The path so <span className="text-gradient-festive">far</span></>} />
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--gold)]/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className={`relative grid gap-4 sm:grid-cols-2 sm:gap-10 ${i % 2 === 1 ? "sm:[direction:rtl]" : ""}`}>
                    <div className={`sm:[direction:ltr] ${i % 2 === 1 ? "sm:text-right" : ""}`}>
                      <div className="ml-12 sm:ml-0">
                        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">{t.year}</div>
                        <h3 className="mt-1 font-display text-2xl font-semibold">{t.title}</h3>
                        <p className="mt-2 text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                    <div />
                    <div className="absolute left-4 top-2 grid size-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-gold ring-4 ring-background sm:left-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="The People" title={<>The hands behind the <span className="text-gradient-festive">craft</span></>} description="Master halwais and a passionate team carrying forward the tradition." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border">
                  <ImagePlaceholder label={`Team Member ${i + 1}`} aspect="aspect-[4/5]" rounded="rounded-none" />
                  <div className="p-5 text-center">
                    <div className="font-display text-lg font-semibold">Name Placeholder</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">Role Placeholder</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 rounded-3xl bg-gradient-festive p-8 text-white shadow-luxe sm:grid-cols-3 sm:p-10">
            {[
              { icon: Heart, label: "Family Recipes" },
              { icon: Award, label: "Award-Winning Quality" },
              { icon: Sparkles, label: "Crafted Daily" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 text-center font-semibold">
                <Icon className="size-5 text-[color:var(--gold)]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
