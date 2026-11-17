// All accessories shown on the /accessories page.
// To add or change a product, edit this list only — filters, counts and search update automatically.
// icon names must exist in ICONS inside components/accessories/ProductCard.jsx

/*export const CATEGORIES = [
  "Tempered Glass",
  "Earphones",
  "Mobile Cases",
  "Chargers",
  "Power Banks",
  "Cables",
  "Smart Watches",
  "Speakers",
  "Memory Cards",
];

export const ACCESSORIES = [
  // Earphones
  { id: 1, name: "JBL Tune 205BT", brand: "JBL", category: "Earphones", price: 1999 },
  { id: 2, name: "JBL Wave Beam", brand: "JBL", category: "Earphones", price: 2999 },
  { id: 3, name: "boAt Airdopes 141", brand: "boAt", category: "Earphones", price: 1299 },
  { id: 4, name: "boAt Rockerz 255", brand: "boAt", category: "Earphones", price: 999 },
  { id: 5, name: "Boult Audio Probass", brand: "Boult", category: "Earphones", price: 999 },
  { id: 6, name: "Noise Buds VS104", brand: "Noise", category: "Earphones", price: 1099 },
  { id: 7, name: "JBL C100SI Wired", brand: "JBL", category: "Earphones", price: 699 },

  // Mobile Cases
  { id: 8, name: "Spigen Ultra Hybrid", brand: "Spigen", category: "Mobile Cases", price: 1499 },
  { id: 9, name: "Spigen Liquid Air", brand: "Spigen", category: "Mobile Cases", price: 1299 },
  { id: 10, name: "Mi Silicone Case", brand: "Mi", category: "Mobile Cases", price: 399 },

  // Power Banks
  { id: 11, name: "Portronics Power Brick", brand: "Portronics", category: "Power Banks", price: 1199 },
  { id: 12, name: "Mi Power Bank 3i 20000mAh", brand: "Mi", category: "Power Banks", price: 2199 },
  { id: 13, name: "boAt EnergyShroom 10000", brand: "boAt", category: "Power Banks", price: 1099 },

  // Tablets / Smart Watches
  { id: 14, name: "Noise ColorFit Pulse", brand: "Noise", category: "Smart Watches", price: 1799 },
  { id: 15, name: "boAt Wave Call", brand: "boAt", category: "Smart Watches", price: 1999 },
  { id: 16, name: "Mi Watch Revolve", brand: "Mi", category: "Smart Watches", price: 8999 },

  // Cables
  { id: 17, name: "Portronics Konnect Type-C", brand: "Portronics", category: "Cables", price: 299 },
  { id: 18, name: "boAt Micro USB Cable", brand: "boAt", category: "Cables", price: 199 },
  { id: 19, name: "Mi Braided Type-C Cable", brand: "Mi", category: "Cables", price: 349 },

  // Chargers
  { id: 20, name: "Mi 33W Fast Charger", brand: "Mi", category: "Chargers", price: 899 },
  { id: 21, name: "Portronics Adapto 20W", brand: "Portronics", category: "Chargers", price: 699 },
  { id: 22, name: "boAt WCD 20W Charger", brand: "boAt", category: "Chargers", price: 599 },

  // Speakers
  { id: 23, name: "JBL Go 3", brand: "JBL", category: "Speakers", price: 2999 },
  { id: 24, name: "Boult Audio Bass Box", brand: "Boult", category: "Speakers", price: 1499 },
  { id: 25, name: "boAt Stone 352", brand: "boAt", category: "Speakers", price: 1799 },

  // Tempered Glass
  { id: 26, name: "Spigen Glas.tR", brand: "Spigen", category: "Tempered Glass", price: 999 },
  { id: 27, name: "Tempered Glass", brand: "Generic", category: "Tempered Glass", price: 199 },
  { id: 28, name: "Mi Screen Guard", brand: "Mi", category: "Tempered Glass", price: 299 },

  // Memory Cards
  { id: 29, name: "SanDisk Ultra 64GB", brand: "SanDisk", category: "Memory Cards", price: 599 },
  { id: 30, name: "SanDisk Ultra 128GB", brand: "SanDisk", category: "Memory Cards", price: 999 },
  { id: 31, name: "Samsung EVO 64GB", brand: "Samsung", category: "Memory Cards", price: 649 },
];

// WhatsApp number used on the "Ask on WhatsApp" buttons (same as the floating button)
export const WHATSAPP_NUMBER = "919677750800";


// ---------------------------------------------------------------------------
// Accessory types shown on /mobiles/[brand]/accessories and counted on /mobiles/[brand].
// icon must be a key of `icons` in app/mobiles/[brand]/accessories/page.js
// ---------------------------------------------------------------------------
const BRAND_ACCESSORY_TYPES = [
  { id: "tempered-glass", name: "Tempered glass", icon: "shield", desc: "Screen protection that fits perfectly." },
  { id: "cases", name: "Cases & covers", icon: "smartphone", desc: "Back covers and flip cases for everyday protection." },
  { id: "chargers", name: "Chargers", icon: "plug", desc: "Original and fast chargers." },
  { id: "cables", name: "Cables", icon: "cable", desc: "Type-C, Lightning and micro USB cables." },
  { id: "earphones", name: "Earphones", icon: "headphones", desc: "Wired and wireless earphones." },
  { id: "power-banks", name: "Power banks", icon: "battery-charging", desc: "Keep your phone charged on the go." },
  { id: "smart-watches", name: "Smart watches", icon: "watch", desc: "Watches and fitness bands." },
  { id: "memory-cards", name: "Memory cards", icon: "hard-drive", desc: "Extra storage for photos and videos." },
];

// `brand` is passed in so you can customise per brand (iPhones have no memory card slot).
export function accessoriesForBrand(brand) {
  if (brand?.id === "apple") {
    return BRAND_ACCESSORY_TYPES.filter((a) => a.id !== "memory-cards");
  }
  return BRAND_ACCESSORY_TYPES;
}*/

// // Accessory categories offered per brand. `for` decides whether it applies to
// // smartphone brands, keypad brands, or both. Prices are quoted on WhatsApp.

// export const accessoryTypes = [
//   { id: "cases", name: "Back covers & cases", desc: "Silicone, hard and flip covers.", icon: "smartphone", for: ["smartphone", "keypad"] },
//   { id: "glass", name: "Tempered glass", desc: "Screen guards and privacy glass.", icon: "shield", for: ["smartphone"] },
//   { id: "chargers", name: "Chargers & adapters", desc: "Original and fast chargers.", icon: "plug", for: ["smartphone", "keypad"] },
//   { id: "cables", name: "Data cables", desc: "Type-C, micro-USB and Lightning.", icon: "cable", for: ["smartphone"] },
//   { id: "earphones", name: "Earphones & earbuds", desc: "Wired, wireless and neckbands.", icon: "headphones", for: ["smartphone", "keypad"] },
//   { id: "powerbanks", name: "Power banks", desc: "10000 mAh and above.", icon: "battery-charging", for: ["smartphone"] },
//   { id: "watches", name: "Smart watches & bands", desc: "Fitness bands and smart watches.", icon: "watch", for: ["smartphone"] },
//   { id: "batteries", name: "Batteries", desc: "Replacement batteries for keypad phones.", icon: "battery", for: ["keypad"] },
//   { id: "memory", name: "Memory cards", desc: "microSD cards for storage and music.", icon: "hard-drive", for: ["smartphone", "keypad"] },
// ];

// export const accessoriesForBrand = (brand) =>
//   accessoryTypes.filter((a) => a.for.some((k) => brand.kinds.includes(k)));

// All accessories shown on the /accessories page.
// To add or change a product, edit this list only — filters, counts and search update automatically.
// icon names must exist in ICONS inside components/accessories/ProductCard.jsx

export const CATEGORIES = [
  "Tempered Glass",
  "Earphones",
  "Mobile Cases",
  "Chargers",
  "Power Banks",
  "Cables",
  "Smart Watches",
  "Speakers",
  "Memory Cards",
];

// HOW TO ADD PRODUCT PHOTOS (UI only):
//   1. Put the images in  public/accessories/  e.g.  jbl-tune-205bt-01.jpeg, -02.jpeg, -03.jpeg
//   2. Add an `images` list to the product below. The FIRST image (01) is the one shown on the
//      Accessories listing; the product page shows all of them (01, 02, 03 ...) as thumbnails.
//   Products without `images` keep the icon card and open a page with an icon placeholder.
const RAW_ACCESSORIES = [
  // Earphones
  {
    id: 1,
    name: "JBL Tune 205BT",
    brand: "JBL",
    category: "Earphones",
    price: 1999,
    images: [
      "/accessories/jbl-tune-205bt-01.jpeg",
      "/accessories/jbl-tune-205bt-02.jpeg",
      "/accessories/jbl-tune-205bt-03.jpeg",
    ],
  },
  { id: 2, name: "JBL Wave Beam", brand: "JBL", category: "Earphones", price: 2999 },
  { id: 3, name: "boAt Airdopes 141", brand: "boAt", category: "Earphones", price: 1299 },
  { id: 4, name: "boAt Rockerz 255", brand: "boAt", category: "Earphones", price: 999 },
  { id: 5, name: "Boult Audio Probass", brand: "Boult", category: "Earphones", price: 999 },
  { id: 6, name: "Noise Buds VS104", brand: "Noise", category: "Earphones", price: 1099 },
  { id: 7, name: "JBL C100SI Wired", brand: "JBL", category: "Earphones", price: 699 },

  // Mobile Cases
  { id: 8, name: "Spigen Ultra Hybrid", brand: "Spigen", category: "Mobile Cases", price: 1499 },
  { id: 9, name: "Spigen Liquid Air", brand: "Spigen", category: "Mobile Cases", price: 1299 },
  { id: 10, name: "Mi Silicone Case", brand: "Mi", category: "Mobile Cases", price: 399 },

  // Power Banks
  { id: 11, name: "Portronics Power Brick", brand: "Portronics", category: "Power Banks", price: 1199 },
  { id: 12, name: "Mi Power Bank 3i 20000mAh", brand: "Mi", category: "Power Banks", price: 2199 },
  {
    id: 13,
    name: "boAt EnergyShroom 10000",
    brand: "boAt",
    category: "Power Banks",
    price: 1099,
    images: [
      "/accessories/boat-energyshroom-10000-01.jpeg",
      "/accessories/boat-energyshroom-10000-02.jpeg",
      "/accessories/boat-energyshroom-10000-03.jpeg",
    ],
  },

  // Tablets / Smart Watches
  { id: 14, name: "Noise ColorFit Pulse", brand: "Noise", category: "Smart Watches", price: 1799 },
  {
    id: 15,
    name: "boAt Wave Call",
    brand: "boAt",
    category: "Smart Watches",
    price: 1999,
    images: [
      "/accessories/boat-wave-call-01.jpeg",
      "/accessories/boat-wave-call-02.jpeg",
      "/accessories/boat-wave-call-03.jpeg",
    ],
  },
  { id: 16, name: "Mi Watch Revolve", brand: "Mi", category: "Smart Watches", price: 8999 },

  // Cables
  { id: 17, name: "Portronics Konnect Type-C", brand: "Portronics", category: "Cables", price: 299 },
  {
    id: 18,
    name: "boAt Micro USB Cable",
    brand: "boAt",
    category: "Cables",
    price: 199,
    images: [
      "/accessories/boat-micro-usb-cable-01.jpeg",
      "/accessories/boat-micro-usb-cable-02.jpeg",
      "/accessories/boat-micro-usb-cable-03.jpeg",
    ],
  },
  { id: 19, name: "Mi Braided Type-C Cable", brand: "Mi", category: "Cables", price: 349 },

  // Chargers
  {
    id: 20,
    name: "Mi 33W Fast Charger",
    brand: "Mi",
    category: "Chargers",
    price: 899,
    images: [
      "/accessories/mi-33w-fast-charger-01.jpeg",
      "/accessories/mi-33w-fast-charger-02.jpeg",
      "/accessories/mi-33w-fast-charger-03.jpeg",
    ],
  },
  { id: 21, name: "Portronics Adapto 20W", brand: "Portronics", category: "Chargers", price: 699 },
  { id: 22, name: "boAt WCD 20W Charger", brand: "boAt", category: "Chargers", price: 599 },

  // Speakers
  {
    id: 23,
    name: "JBL Go 3",
    brand: "JBL",
    category: "Speakers",
    price: 2999,
    images: [
      "/accessories/jbl-go-3-01.jpeg",
      "/accessories/jbl-go-3-02.jpeg",
      "/accessories/jbl-go-3-03.jpeg",
    ],
  },
  { id: 24, name: "Boult Audio Bass Box", brand: "Boult", category: "Speakers", price: 1499 },
  { id: 25, name: "boAt Stone 352", brand: "boAt", category: "Speakers", price: 1799 },

  // Tempered Glass
  { id: 26, name: "Spigen Glas.tR", brand: "Spigen", category: "Tempered Glass", price: 999 },
  { id: 27, name: "Tempered Glass", brand: "Generic", category: "Tempered Glass", price: 199 },
  {
    id: 28,
    name: "Mi Screen Guard",
    brand: "Mi",
    category: "Tempered Glass",
    price: 299,
    images: [
      "/accessories/mi-screen-guard-01.jpeg",
      "/accessories/mi-screen-guard-02.jpeg",
      "/accessories/mi-screen-guard-03.jpeg",
    ],
  },

  // Memory Cards
  { id: 29, name: "SanDisk Ultra 64GB", brand: "SanDisk", category: "Memory Cards", price: 599 },
  { id: 30, name: "SanDisk Ultra 128GB", brand: "SanDisk", category: "Memory Cards", price: 999 },
  { id: 31, name: "Samsung EVO 64GB", brand: "Samsung", category: "Memory Cards", price: 649 },
];

// "JBL Tune 205BT" -> "jbl-tune-205bt"  (used in the product page URL: /accessories/jbl-tune-205bt)
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Adds `slug` and a default empty `images` list to every product automatically.
export const ACCESSORIES = RAW_ACCESSORIES.map((p) => ({
  ...p,
  slug: slugify(p.name),
  images: p.images ?? [],
}));

export const getAccessory = (slug) => ACCESSORIES.find((p) => p.slug === slug);

// WhatsApp number used on the "Ask on WhatsApp" buttons (same as the floating button)
export const WHATSAPP_NUMBER = "919677750800";

export const accessoryTypes = [
  { id: "cases", name: "Back covers & cases", desc: "Silicone, hard and flip covers.", icon: "smartphone", for: ["smartphone", "keypad"] },
  { id: "glass", name: "Tempered glass", desc: "Screen guards and privacy glass.", icon: "shield", for: ["smartphone"] },
  { id: "chargers", name: "Chargers & adapters", desc: "Original and fast chargers.", icon: "plug", for: ["smartphone", "keypad"] },
  { id: "cables", name: "Data cables", desc: "Type-C, micro-USB and Lightning.", icon: "cable", for: ["smartphone"] },
  { id: "earphones", name: "Earphones & earbuds", desc: "Wired, wireless and neckbands.", icon: "headphones", for: ["smartphone", "keypad"] },
  { id: "powerbanks", name: "Power banks", desc: "10000 mAh and above.", icon: "battery-charging", for: ["smartphone"] },
  { id: "watches", name: "Smart watches & bands", desc: "Fitness bands and smart watches.", icon: "watch", for: ["smartphone"] },
  { id: "batteries", name: "Batteries", desc: "Replacement batteries for keypad phones.", icon: "battery", for: ["keypad"] },
  { id: "memory", name: "Memory cards", desc: "microSD cards for storage and music.", icon: "hard-drive", for: ["smartphone", "keypad"] },
];

export const accessoriesForBrand = (brand) =>
  accessoryTypes.filter((accessory) =>
    accessory.for.some((kind) => brand.kinds.includes(kind))
  );