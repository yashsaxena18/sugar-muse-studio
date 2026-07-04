import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, ShoppingBag, SlidersHorizontal } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import productsData from "@/data/products.json";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, stagger, staggerItem } from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
};

const products = productsData as Product[];

const categories = [
  "All",
  "Traditional Sweets",
  "Bengali Sweets",
  "Dry Fruit Sweets",
  "Namkeen",
  "Festival Specials",
  "Gift Boxes",
] as const;

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Geeta Aggarwal Sweets" },
      {
        name: "description",
        content:
          "Browse our full range of traditional Indian mithai, Bengali sweets, dry-fruit specialities, namkeen and gift boxes.",
      },
      { property: "og:title", content: "Products — Geeta Aggarwal Sweets" },
      { property: "og:description", content: "Browse our full range of premium Indian sweets and namkeen." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setVisibleCount(8);
  }, [query, cat]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, cat]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-card/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brown)] backdrop-blur">
                Our Collection
              </span>
              <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl">
                Every sweet, <span className="text-gradient-festive">handcrafted</span>.
              </h1>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Explore over a hundred varieties of traditional Indian sweets, namkeen and gift boxes —
                each one prepared the same morning it reaches you.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-25 blur-2xl" />
                <ImagePlaceholder
                  label="Products Banner"
                  aspect="aspect-[4/3]"
                  rounded="rounded-[1.75rem]"
                  className="relative shadow-luxe"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 border-y border-border bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap sm:justify-between">
            <div className="relative min-w-0">
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sweets, namkeen, gift boxes…"
                className="h-12 w-full min-w-0 rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none transition focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30 sm:w-80"
              />
            </div>
            <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
              <SlidersHorizontal className="size-4" /> {filtered.length} items
            </div>
          </div>

          <div className="mt-4 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                  cat === c
                    ? "bg-gradient-festive text-white shadow-gold"
                    : "border border-border bg-card text-foreground/80 hover:border-[color:var(--gold)]/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border p-16 text-center text-muted-foreground">
              No products match your search.
            </div>
          ) : (
            <motion.div
              key={`${cat}-${query}`}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.slice(0, visibleCount).map((p) => (
                <motion.article
                  key={p.id}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border transition-all duration-500 hover:shadow-luxe hover:ring-[color:var(--gold)]/50"
                >
                  <div className="relative overflow-hidden">
                    {p.image ? (
                      <img src={p.image} alt={p.name || "Product"} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="transition-transform duration-700 group-hover:scale-110">
                        <ImagePlaceholder label={`Product ${p.id}`} aspect="aspect-[4/3]" rounded="rounded-none" />
                      </div>
                    )}
                    <div className="absolute left-3 top-3 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brown)]">
                      {p.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-3 sm:p-5 min-w-0">
                    <h3 className="font-display text-sm sm:text-lg font-semibold text-foreground leading-tight">
                      {p.name || "Product Name Placeholder"}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs sm:text-sm text-muted-foreground hidden sm:block">
                      {p.description || "Short description placeholder — replace with real product details."}
                    </p>
                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                      <div className="font-display text-base sm:text-xl font-semibold text-gradient-festive">
                        {p.price || "₹ —"}
                      </div>
                      <a
                        href={whatsappLink(`Hi! I'd like to order: ${p.name || `Product #${p.id}`}`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-gradient-festive px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-gold transition hover:scale-[1.03]"
                      >
                        <ShoppingBag className="size-3 sm:size-3.5" /> <span className="hidden sm:inline">Order</span><span className="sm:hidden">Buy</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {filtered.length > visibleCount && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-7 py-3.5 text-sm font-semibold transition hover:bg-[color:var(--gold)]/10"
              >
                View More Products
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
