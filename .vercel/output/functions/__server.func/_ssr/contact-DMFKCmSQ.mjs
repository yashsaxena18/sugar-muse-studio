import { o as __toESM } from "../_runtime.mjs";
import { n as telLink, r as whatsappLink, t as site } from "./site-bZPBGJI5.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Mail, f as Phone, g as MapPin, u as Send, w as Clock } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-CHYOY6iq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DMFKCmSQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-20 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-cream" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_70%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-4xl px-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-card/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brown)] backdrop-blur",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-3xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl",
							children: [
								"Let's ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-festive",
									children: "connect"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-xl text-muted-foreground",
							children: "Questions, custom orders, bulk enquiries — we'd love to hear from you."
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [[
						{
							icon: Phone,
							label: "Call us",
							value: site.phone,
							href: telLink
						},
						{
							icon: Mail,
							label: "Email",
							value: site.email,
							href: `mailto:${site.email}`
						},
						{
							icon: MapPin,
							label: "Visit the shop",
							value: site.address
						},
						{
							icon: Clock,
							label: "Hours",
							value: site.hours
						}
					].map(({ icon: Icon, label, value, href }) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(href ? "a" : "div", {
							...href ? { href } : {},
							className: "group flex items-start gap-4 rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-[color:var(--gold)]/50 hover:shadow-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-[color:var(--maroon)] shadow-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-medium text-foreground",
									children: value
								})]
							})]
						}) }, label);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink(),
						target: "_blank",
						rel: "noreferrer",
						className: "flex w-full sm:w-auto items-center justify-center gap-2 rounded-3xl bg-gradient-festive px-6 py-4 text-sm font-semibold text-white shadow-luxe transition hover:scale-[1.01]",
						children: "Chat on WhatsApp"
					}) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "relative overflow-hidden rounded-3xl bg-card p-5 sm:p-10 shadow-luxe ring-1 ring-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 size-48 rounded-full bg-gradient-gold opacity-15 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl sm:text-3xl font-semibold",
								children: "Send a message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "We typically reply within a few hours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Your name",
										name: "name",
										required: true,
										placeholder: "e.g. Aarav Sharma"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone",
										name: "phone",
										required: true,
										placeholder: "+91 ..."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										className: "sm:col-span-2",
										label: "Email",
										name: "email",
										type: "email",
										placeholder: "you@example.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										className: "sm:col-span-2",
										label: "Subject",
										name: "subject",
										placeholder: "Bulk order, custom box, wedding…"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
											children: "Message"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											required: true,
											rows: 5,
											placeholder: "Tell us what you'd like to order or ask about…",
											className: "mt-2 w-full rounded-2xl border border-border bg-background p-4 text-sm outline-none transition focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "mt-6 inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-gradient-festive px-7 py-3.5 text-sm font-semibold text-white shadow-gold transition hover:scale-[1.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), " Send Message"]
							}),
							sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 rounded-2xl bg-[color:var(--gold)]/15 px-4 py-3 text-sm text-[color:var(--brown)]",
								children: "Thank you! Your message has been noted. (Hook this form to your inbox or WhatsApp later.)"
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-3xl ring-1 ring-[color:var(--gold)]/30 shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video sm:aspect-[16/7] w-full placeholder-shimmer relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid place-items-center text-center text-[color:var(--brown)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mx-auto size-8" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-xs font-semibold uppercase tracking-[0.25em]",
									children: "Google Maps Placeholder"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Embed your shop location here"
								})
							] })
						})
					})
				}) })
			})
		})
	] });
}
function Field({ label, name, type = "text", required, placeholder, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			placeholder,
			className: "mt-2 h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
		})]
	});
}
//#endregion
export { ContactPage as component };
