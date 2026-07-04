//#region node_modules/.nitro/vite/services/ssr/assets/site-bZPBGJI5.js
var site = {
	name: "Geeta Aggarwal Sweets",
	tagline: "A Legacy of Authentic Indian Sweets",
	shortDescription: "Handcrafted mithai, namkeen and festive gift boxes — prepared fresh every morning using time-honoured family recipes.",
	phone: "+91 00000 00000",
	whatsapp: "910000000000",
	email: "hello@example.com",
	address: "Shop Address Placeholder, City, State — 000000",
	hours: "Mon – Sun · 8:00 AM – 10:00 PM",
	socials: {
		instagram: "#",
		facebook: "#",
		youtube: "#"
	},
	stats: [
		{
			label: "Years of Excellence",
			value: 40,
			suffix: "+"
		},
		{
			label: "Happy Customers",
			value: 25e3,
			suffix: "+"
		},
		{
			label: "Sweets & Namkeen",
			value: 120,
			suffix: "+"
		},
		{
			label: "Google Rating",
			value: 4.9,
			suffix: "★",
			decimals: 1
		}
	]
};
var whatsappLink = (msg = "Hello! I'd like to place an order.") => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
var telLink = `tel:${site.phone.replace(/\s+/g, "")}`;
//#endregion
export { telLink as n, whatsappLink as r, site as t };
