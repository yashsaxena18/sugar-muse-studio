import { t as site } from "./site-bZPBGJI5.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as Award, i as Target, k as Sparkles, x as Heart } from "../_libs/lucide-react.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-F5hRaP9Y.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as stagger, r as staggerItem, t as Reveal } from "./Reveal-CHYOY6iq.mjs";
import { t as SectionHeading } from "./SectionHeading-CmMIjJ-L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CvFrlFrf.js
var import_jsx_runtime = require_jsx_runtime();
var timeline = [
	{
		year: "Year",
		title: "Humble Beginnings",
		desc: "Placeholder — describe how the shop started."
	},
	{
		year: "Year",
		title: "Local Favourite",
		desc: "Placeholder — milestone moment for the brand."
	},
	{
		year: "Year",
		title: "Expanding the Craft",
		desc: "Placeholder — growth, new categories, larger kitchens."
	},
	{
		year: "Year",
		title: "Today",
		desc: "Placeholder — current scale and community reach."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-cream" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(50%_50%_at_30%_20%,color-mix(in_oklab,var(--saffron)_18%,transparent),transparent_70%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-card/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brown)] backdrop-blur",
							children: "Our Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl",
							children: [
								"A legacy ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-festive",
									children: "three generations"
								}),
								" in the making."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
							children: site.shortDescription
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
						label: "Shop / Founder Image",
						aspect: "aspect-[5/6]",
						rounded: "rounded-[1.75rem]",
						className: "relative shadow-luxe"
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]",
								children: "The Beginning"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl",
							children: "Crafted with hands, served with heart."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-[color:var(--brown)]",
								children: "[Story content placeholder]"
							}), " — share the origin story of the shop. How the founder started, what inspired the first recipes, the family values that still shape every batch today."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-[color:var(--brown)]",
								children: "[More content placeholder]"
							}), " — add anecdotes, milestones and the philosophy that has kept generations of customers loyal."]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: stagger,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .2
					},
					className: "grid gap-6 md:grid-cols-2",
					children: [{
						icon: Target,
						eyebrow: "Our Mission",
						title: "Authentic taste, every single time.",
						desc: "Mission statement placeholder — describe what drives the business day to day."
					}, {
						icon: Sparkles,
						eyebrow: "Our Vision",
						title: "Spreading the joy of Indian mithai.",
						desc: "Vision statement placeholder — describe the long-term aspiration for the brand."
					}].map(({ icon: Icon, eyebrow, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: staggerItem,
						className: "relative overflow-hidden rounded-3xl bg-card p-6 shadow-soft ring-1 ring-border sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -top-12 size-40 rounded-full bg-gradient-gold opacity-15 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-12 place-items-center rounded-2xl bg-gradient-gold text-[color:var(--maroon)] shadow-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]",
								children: eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl font-semibold sm:text-3xl",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm sm:text-base text-muted-foreground",
								children: desc
							})
						]
					}, eyebrow))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our Shop",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Inside the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-festive",
						children: "kitchen"
					})] }),
					description: "A peek into the place where every sweet is born."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						"aspect-[4/3]",
						"aspect-[4/5]",
						"aspect-[4/3]",
						"aspect-[4/5]",
						"aspect-[4/3]",
						"aspect-[4/5]"
					].map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl shadow-soft ring-1 ring-[color:var(--gold)]/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
								label: `Shop ${i + 1}`,
								aspect: a,
								rounded: "rounded-none"
							})
						})
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our Journey",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The path so ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-festive",
						children: "far"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--gold)]/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-10",
						children: timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative grid gap-4 sm:grid-cols-2 sm:gap-10 ${i % 2 === 1 ? "sm:[direction:rtl]" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `sm:[direction:ltr] ${i % 2 === 1 ? "sm:text-right" : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "ml-12 sm:ml-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]",
													children: t.year
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-1 font-display text-xl sm:text-2xl font-semibold",
													children: t.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm sm:text-base text-muted-foreground",
													children: t.desc
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-2 grid size-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-gold ring-4 ring-background sm:left-1/2" })
								]
							})
						}, i))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The People",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The hands behind the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-festive",
						children: "craft"
					})] }),
					description: "Master halwais and a passionate team carrying forward the tradition."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
								label: `Team Member ${i + 1}`,
								aspect: "aspect-[4/5]",
								rounded: "rounded-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg font-semibold",
									children: "Name Placeholder"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]",
									children: "Role Placeholder"
								})]
							})]
						})
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 rounded-3xl bg-gradient-festive p-6 text-white shadow-luxe sm:grid-cols-3 sm:p-10",
					children: [
						{
							icon: Heart,
							label: "Family Recipes"
						},
						{
							icon: Award,
							label: "Award-Winning Quality"
						},
						{
							icon: Sparkles,
							label: "Crafted Daily"
						}
					].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3 text-center font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-[color:var(--gold)]" }), label]
					}, label))
				})
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
