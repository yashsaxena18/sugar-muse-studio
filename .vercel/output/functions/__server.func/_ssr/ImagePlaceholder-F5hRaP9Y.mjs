import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Image } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ImagePlaceholder-F5hRaP9Y.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function ImagePlaceholder({ label = "Image Placeholder", aspect = "aspect-[4/3]", className, rounded = "rounded-2xl" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative w-full overflow-hidden placeholder-shimmer", aspect, rounded, "ring-1 ring-[color:var(--gold)]/30", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center gap-2 text-[color:var(--brown)]/70",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-7 opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium tracking-wide uppercase",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--gold)_30%,transparent),transparent_60%)]" })]
	});
}
//#endregion
export { ImagePlaceholder as t };
