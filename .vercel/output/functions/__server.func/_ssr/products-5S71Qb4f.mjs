import { o as __toESM } from "../_runtime.mjs";
import { r as whatsappLink } from "./site-bZPBGJI5.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as ShoppingBag, d as Search, s as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-F5hRaP9Y.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as stagger, r as staggerItem, t as Reveal } from "./Reveal-CHYOY6iq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-5S71Qb4f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var products = [
	{
		"id": 1,
		"name": "",
		"description": "",
		"price": "",
		"category": "Traditional Sweets",
		"image": ""
	},
	{
		"id": 2,
		"name": "",
		"description": "",
		"price": "",
		"category": "Traditional Sweets",
		"image": ""
	},
	{
		"id": 3,
		"name": "",
		"description": "",
		"price": "",
		"category": "Traditional Sweets",
		"image": ""
	},
	{
		"id": 4,
		"name": "",
		"description": "",
		"price": "",
		"category": "Traditional Sweets",
		"image": ""
	},
	{
		"id": 5,
		"name": "",
		"description": "",
		"price": "",
		"category": "Bengali Sweets",
		"image": ""
	},
	{
		"id": 6,
		"name": "",
		"description": "",
		"price": "",
		"category": "Bengali Sweets",
		"image": ""
	},
	{
		"id": 7,
		"name": "",
		"description": "",
		"price": "",
		"category": "Bengali Sweets",
		"image": ""
	},
	{
		"id": 8,
		"name": "",
		"description": "",
		"price": "",
		"category": "Bengali Sweets",
		"image": ""
	},
	{
		"id": 9,
		"name": "",
		"description": "",
		"price": "",
		"category": "Dry Fruit Sweets",
		"image": ""
	},
	{
		"id": 10,
		"name": "",
		"description": "",
		"price": "",
		"category": "Dry Fruit Sweets",
		"image": ""
	},
	{
		"id": 11,
		"name": "",
		"description": "",
		"price": "",
		"category": "Dry Fruit Sweets",
		"image": ""
	},
	{
		"id": 12,
		"name": "",
		"description": "",
		"price": "",
		"category": "Dry Fruit Sweets",
		"image": ""
	},
	{
		"id": 13,
		"name": "",
		"description": "",
		"price": "",
		"category": "Namkeen",
		"image": ""
	},
	{
		"id": 14,
		"name": "",
		"description": "",
		"price": "",
		"category": "Namkeen",
		"image": ""
	},
	{
		"id": 15,
		"name": "",
		"description": "",
		"price": "",
		"category": "Namkeen",
		"image": ""
	},
	{
		"id": 16,
		"name": "",
		"description": "",
		"price": "",
		"category": "Festival Specials",
		"image": ""
	},
	{
		"id": 17,
		"name": "",
		"description": "",
		"price": "",
		"category": "Festival Specials",
		"image": ""
	},
	{
		"id": 18,
		"name": "",
		"description": "",
		"price": "",
		"category": "Festival Specials",
		"image": ""
	},
	{
		"id": 19,
		"name": "",
		"description": "",
		"price": "",
		"category": "Gift Boxes",
		"image": ""
	},
	{
		"id": 20,
		"name": "",
		"description": "",
		"price": "",
		"category": "Gift Boxes",
		"image": ""
	}
];
var categories = [
	"All",
	"Traditional Sweets",
	"Bengali Sweets",
	"Dry Fruit Sweets",
	"Namkeen",
	"Festival Specials",
	"Gift Boxes"
];
function ProductsPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const [visibleCount, setVisibleCount] = (0, import_react.useState)(8);
	(0, import_react.useEffect)(() => {
		setVisibleCount(8);
	}, [query, cat]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return products.filter((p) => {
			const matchCat = cat === "All" || p.category === cat;
			const matchQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
			return matchCat && matchQ;
		});
	}, [query, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-cream" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_70%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-card/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brown)] backdrop-blur",
								children: "Our Collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 font-display text-3xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl",
								children: [
									"Every sweet, ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-festive",
										children: "handcrafted"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-muted-foreground",
								children: "Explore over a hundred varieties of traditional Indian sweets, namkeen and gift boxes — each one prepared the same morning it reaches you."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-25 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
									label: "Products Banner",
									aspect: "aspect-[4/3]",
									rounded: "rounded-[1.75rem]",
									className: "relative shadow-luxe"
								})]
							})
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "sticky top-20 z-30 border-y border-border bg-background/80 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search sweets, namkeen, gift boxes…",
							className: "h-12 w-full min-w-0 rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none transition focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30 sm:w-80"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-2 text-xs text-muted-foreground sm:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4" }),
							" ",
							filtered.length,
							" items"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: `shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${cat === c ? "bg-gradient-festive text-white shadow-gold" : "border border-border bg-card text-foreground/80 hover:border-[color:var(--gold)]/50"}`,
						children: c
					}, c))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-dashed border-border p-16 text-center text-muted-foreground",
					children: "No products match your search."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: stagger,
					initial: "hidden",
					animate: "show",
					className: "grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4",
					children: filtered.slice(0, visibleCount).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						variants: staggerItem,
						whileHover: { y: -6 },
						className: "group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border transition-all duration-500 hover:shadow-luxe hover:ring-[color:var(--gold)]/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden",
							children: [p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name || "Product",
								className: "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "transition-transform duration-700 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
									label: `Product ${p.id}`,
									aspect: "aspect-[4/3]",
									rounded: "rounded-none"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-3 top-3 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brown)]",
								children: p.category
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-3 sm:p-5 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm sm:text-lg font-semibold text-foreground leading-tight",
									children: p.name || "Product Name Placeholder"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 line-clamp-2 text-xs sm:text-sm text-muted-foreground hidden sm:block",
									children: p.description || "Short description placeholder — replace with real product details."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-base sm:text-xl font-semibold text-gradient-festive",
										children: p.price || "₹ —"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: whatsappLink(`Hi! I'd like to order: ${p.name || `Product #${p.id}`}`),
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-gradient-festive px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-gold transition hover:scale-[1.03]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-3 sm:size-3.5" }),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden sm:inline",
												children: "Order"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "sm:hidden",
												children: "Buy"
											})
										]
									})]
								})
							]
						})]
					}, p.id))
				}, `${cat}-${query}`), filtered.length > visibleCount && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setVisibleCount((prev) => prev + 8),
						className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-7 py-3.5 text-sm font-semibold transition hover:bg-[color:var(--gold)]/10",
						children: "View More Products"
					})
				})]
			})
		})
	] });
}
//#endregion
export { ProductsPage as component };
