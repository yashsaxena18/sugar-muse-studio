import { o as __toESM } from "../_runtime.mjs";
import { n as telLink, r as whatsappLink, t as site } from "./site-bZPBGJI5.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as Award, O as ArrowRight, S as Gift, T as ChefHat, f as Phone, k as Sparkles, l as ShieldCheck, m as MessageCircle, o as Star, r as Truck, v as Leaf, x as Heart } from "../_libs/lucide-react.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-F5hRaP9Y.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { n as stagger, r as staggerItem, t as Reveal } from "./Reveal-CHYOY6iq.mjs";
import { t as SectionHeading } from "./SectionHeading-CmMIjJ-L.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CCZewG6V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ to, duration = 1800, suffix = "", decimals = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .4
	});
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let raf = 0;
		const start = performance.now();
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			setVal(to * (1 - Math.pow(1 - p, 3)));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-IN"), suffix]
	});
}
var features = [
	{
		icon: Leaf,
		title: "Pure Ingredients",
		desc: "Only the finest desi ghee, nuts and natural sweeteners — never compromise on quality."
	},
	{
		icon: ChefHat,
		title: "Fresh Daily",
		desc: "Every sweet is prepared the same morning it's sold — never stored, never reheated."
	},
	{
		icon: ShieldCheck,
		title: "Hygienic Preparation",
		desc: "FSSAI compliant kitchens with strict hygiene protocols at every stage."
	},
	{
		icon: Heart,
		title: "Traditional Recipes",
		desc: "Heirloom recipes passed down through generations of master halwais."
	},
	{
		icon: Award,
		title: "Premium Quality",
		desc: "Hand-finished by experienced craftsmen for that unmistakable melt-in-mouth feel."
	},
	{
		icon: Truck,
		title: "Trusted Service",
		desc: "Reliable delivery for weddings, festivals and corporate gifting across the city."
	}
];
var festivals = [
	{
		icon: Sparkles,
		title: "Diwali Specials",
		desc: "Festive mithai boxes and dry-fruit assortments to light up your celebrations."
	},
	{
		icon: Heart,
		title: "Wedding Orders",
		desc: "Bulk shagun trays, return gifts and customised platters for every ceremony."
	},
	{
		icon: Gift,
		title: "Corporate Gifting",
		desc: "Premium branded hampers — perfect for clients, employees and partners."
	},
	{
		icon: Truck,
		title: "Bulk Orders",
		desc: "Reliable supply for events of any scale, delivered fresh and on time."
	}
];
function useAutoSlide(length, delay = 5e3) {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % length), delay);
		return () => clearInterval(t);
	}, [length, delay]);
	return [i, setI];
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProducts, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FestivalSpecials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative -mt-20 flex min-h-[100svh] items-center overflow-hidden pt-24 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-cream" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_20%,color-mix(in_oklab,var(--saffron)_22%,transparent),transparent_60%),radial-gradient(50%_40%_at_10%_80%,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute left-[6%] top-[18%] h-24 w-24 rounded-full bg-gradient-gold opacity-30 blur-2xl",
				animate: { y: [
					0,
					-20,
					0
				] },
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute right-[8%] bottom-[12%] h-32 w-32 rounded-full bg-[color:var(--maroon)] opacity-20 blur-3xl",
				animate: { y: [
					0,
					25,
					0
				] },
				transition: {
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-[20%] top-[10%] hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { rotate: 360 },
					transition: {
						duration: 60,
						repeat: Infinity,
						ease: "linear"
					},
					className: "text-[color:var(--gold)]/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-10" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-7xl gap-12 px-4 lg:grid-cols-[1.05fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center lg:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .7 },
							className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-card/60 px-4 py-1.5 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brown)]",
								children: "A Legacy of Taste"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .1
							},
							className: "mt-6 font-display text-3xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-7xl",
							children: [
								site.name.split(" ").slice(0, -1).join(" "),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-festive",
									children: site.name.split(" ").slice(-1)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .25
							},
							className: "mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-base lg:text-lg lg:mx-0",
							children: site.shortDescription
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .4
							},
							className: "mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 lg:justify-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/products",
								className: "group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-festive px-6 py-3.5 text-sm font-semibold text-white shadow-gold transition hover:scale-[1.02]",
								children: ["Explore Products", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappLink(),
								target: "_blank",
								rel: "noreferrer",
								className: "flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-[color:var(--gold)]/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), " Order on WhatsApp"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: 1,
								delay: .7
							},
							className: "mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground lg:justify-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-[color:var(--gold)]" }), " FSSAI Certified"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "size-4 text-[color:var(--gold)]" }), " Pure Desi Ghee"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-[color:var(--gold)]" }), " Trusted for Generations"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: 1,
						delay: .3
					},
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-gold opacity-30 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[2rem] shadow-luxe ring-1 ring-[color:var(--gold)]/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
								label: "Hero Sweets Banner",
								aspect: "aspect-[4/5]",
								rounded: "rounded-[2rem]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { y: [
								0,
								-10,
								0
							] },
							transition: {
								duration: 4,
								repeat: Infinity
							},
							className: "absolute -left-6 bottom-10 hidden rounded-2xl glass-strong p-4 shadow-soft sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-10 place-items-center rounded-full bg-gradient-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5 text-[color:var(--maroon)]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-semibold",
									children: "4.9 / 5"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground",
									children: "Google Reviews"
								})] })]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: 1.2 },
				className: "absolute bottom-6 left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-9 w-6 items-start justify-center rounded-full border-2 border-[color:var(--gold)]/60 p-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: { y: [
							0,
							10,
							0
						] },
						transition: {
							duration: 1.5,
							repeat: Infinity
						},
						className: "h-1.5 w-1 rounded-full bg-[color:var(--gold)]"
					})
				})
			})
		]
	});
}
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl bg-gradient-festive p-6 shadow-luxe sm:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-6 text-white sm:gap-8 lg:grid-cols-4",
					children: site.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-bold sm:text-5xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.value,
								suffix: s.suffix,
								decimals: s.decimals
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80",
							children: s.label
						})]
					}, s.label))
				})
			})
		})
	});
}
function AboutPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-20 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
						label: "Shop Heritage Image",
						aspect: "aspect-[5/6]",
						rounded: "rounded-[1.75rem]",
						className: "relative shadow-luxe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-6 -right-4 hidden rounded-2xl glass-strong p-4 shadow-soft sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-bold text-gradient-festive",
							children: "40+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "Years of Craft"
						})]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .1,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]",
							children: "Our Story"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl",
						children: [
							"A taste of ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-festive",
								children: "tradition"
							}),
							", crafted with love."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: "From a small family kitchen to a beloved name in the city — Geeta Aggarwal Sweets has been preserving the authentic flavours of India for decades. Every morning begins the same way: pure desi ghee, hand-picked ingredients, and recipes that have stayed unchanged for three generations."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[color:var(--brown)]",
							children: "[Replace with your detailed about content]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-7 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-6 py-3 text-sm font-semibold transition hover:bg-[color:var(--gold)]/10",
						children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			})]
		})
	});
}
function FeaturedProducts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Bestsellers",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Featured ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-festive",
						children: "Sweets"
					})] }),
					description: "A small taste of our most-loved creations — each one prepared the traditional way."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: stagger,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .1
					},
					className: "mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						variants: staggerItem,
						whileHover: { y: -6 },
						transition: {
							type: "spring",
							stiffness: 260,
							damping: 20
						},
						className: "group overflow-hidden rounded-2xl sm:rounded-3xl bg-card shadow-soft ring-1 ring-border transition-all duration-500 hover:shadow-luxe hover:ring-[color:var(--gold)]/50 flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "transition-transform duration-700 group-hover:scale-105",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
									label: `Product ${i + 1}`,
									aspect: "aspect-[4/3]",
									rounded: "rounded-none"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-3 sm:p-6 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]",
									children: "Signature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1.5 sm:mt-2 font-display text-sm sm:text-xl font-semibold text-foreground leading-tight",
									children: "Product Name Placeholder"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none",
									children: "Short description placeholder — describe the texture, ingredients and what makes this sweet special."
								})
							]
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-festive px-7 py-3.5 text-sm font-semibold text-white shadow-gold transition hover:scale-[1.02]",
						children: ["View All Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			]
		})
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why Choose Us",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-festive",
						children: "Geeta Aggarwal"
					}),
					" promise"
				] }),
				description: "Six reasons families across the city have trusted us for generations."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .1
				},
				className: "mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: features.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerItem,
					whileHover: { y: -4 },
					className: "group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-7 shadow-soft transition hover:border-[color:var(--gold)]/50 hover:shadow-gold flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 size-32 rounded-full bg-gradient-gold opacity-0 blur-3xl transition group-hover:opacity-30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-10 sm:size-12 place-items-center rounded-xl sm:rounded-2xl bg-gradient-gold text-[color:var(--maroon)] shadow-gold shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 sm:size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 sm:mt-5 font-display text-sm sm:text-xl font-semibold leading-tight",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none flex-1",
							children: desc
						})
					]
				}, title))
			})]
		})
	});
}
function GalleryPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Gallery",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A glimpse of our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-festive",
						children: "creations"
					})] }),
					description: "From the kitchen to the counter — moments captured."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid",
					children: [
						"aspect-[3/4]",
						"aspect-[4/3]",
						"aspect-[1/1]",
						"aspect-[4/5]",
						"aspect-[1/1]",
						"aspect-[3/4]",
						"aspect-[4/3]",
						"aspect-[4/5]"
					].map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "group relative overflow-hidden rounded-2xl ring-1 ring-[color:var(--gold)]/20 shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "transition-transform duration-700 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
									label: `Gallery ${i + 1}`,
									aspect: a,
									rounded: "rounded-none"
								})
							})
						})
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-7 py-3.5 text-sm font-semibold transition hover:bg-[color:var(--gold)]/10",
						children: ["View Full Gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			]
		})
	});
}
function Testimonials() {
	const items = [
		0,
		1,
		2,
		3
	];
	const [active, setActive] = useAutoSlide(items.length, 5500);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Customer Reviews",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Loved by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-festive",
					children: "thousands"
				})] }),
				description: "Real words from the families we've had the pleasure of serving."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-14 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-80 overflow-hidden rounded-3xl glass-strong p-6 shadow-luxe sm:p-12",
					children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: false,
						animate: {
							opacity: active === i ? 1 : 0,
							y: active === i ? 0 : 20
						},
						transition: { duration: .6 },
						className: "absolute inset-0 flex flex-col items-center justify-center p-8 text-center sm:p-12",
						style: { pointerEvents: active === i ? "auto" : "none" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-16 overflow-hidden rounded-full ring-2 ring-[color:var(--gold)]/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
									label: "",
									aspect: "aspect-square",
									rounded: "rounded-full"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex gap-1 text-[color:var(--gold)]",
								children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-current" }, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl font-display text-lg italic text-foreground sm:text-xl",
								children: "\"Customer review placeholder — replace this with real Google review text from your customers.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 font-semibold text-foreground",
								children: "Customer Name Placeholder"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Verified Customer"
							})
						]
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(i),
						"aria-label": `Show review ${i + 1}`,
						className: `h-1.5 rounded-full transition-all ${active === i ? "w-8 bg-[color:var(--gold)]" : "w-4 bg-border"}`
					}, i))
				})]
			})]
		})
	});
}
function FestivalSpecials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Specials",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["For every ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-festive",
					children: "celebration"
				})] }),
				description: "From festivals to weddings to corporate events — we craft the perfect sweet experience."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .1
				},
				className: "mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: festivals.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerItem,
					whileHover: { y: -6 },
					className: "group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[color:var(--maroon)] to-[color:var(--brown)] p-4 sm:p-7 text-white shadow-luxe flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 size-32 rounded-full bg-[color:var(--gold)] opacity-20 blur-2xl transition group-hover:opacity-40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-10 sm:size-12 place-items-center rounded-xl sm:rounded-2xl bg-gradient-gold text-[color:var(--maroon)] shadow-gold shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 sm:size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 sm:mt-5 font-display text-sm sm:text-xl font-semibold leading-tight",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/75 line-clamp-3 sm:line-clamp-none flex-1",
							children: desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 sm:mt-5 flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]",
							children: ["Enquire ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
						})
					]
				}, title))
			})]
		})
	});
}
function ContactCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] bg-gradient-festive p-8 text-center shadow-luxe sm:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--gold)_30%,transparent),transparent_60%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: { rotate: 360 },
						transition: {
							duration: 80,
							repeat: Infinity,
							ease: "linear"
						},
						className: "absolute right-8 top-8 text-white/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-10" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-[0.3em] text-white/80",
								children: "Ready to Order?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-2xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl",
								children: "Let's sweeten your moment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-xl text-white/80",
								children: "Place your order in seconds via WhatsApp or call us directly — bulk orders welcome."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappLink(),
									target: "_blank",
									rel: "noreferrer",
									className: "flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--maroon)] shadow-luxe transition hover:scale-[1.02]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), " WhatsApp Order"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: telLink,
									className: "flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " Call Now"]
								})]
							})
						]
					})
				]
			}) })
		})
	});
}
//#endregion
export { HomePage as component };
