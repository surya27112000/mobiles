// Mobile catalogue for the Mobiles section.
// Prices are approximate (shown as "approx." in the UI) – edit freely.
// To show a real product photo, add a 4th item to a model row: a URL or /public path.
//   e.g. ["A38", "4GB + 128GB", 10999, "/phones/oppo-a38.png"]

// "+" becomes "plus" so "Note 14 Pro" and "Note 14 Pro+" get different ids
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// series(name, rows, kind?) – rows are [name, spec, price, image?]
const series = (name, rows, kind) => ({
  id: slug(name),
  name,
  kind,
  models: rows.map(([n, spec, price, image]) => ({
    id: slug(n),
    name: n,
    spec,
    price,
    image,
  })),
});

// brand(id, name, colour, kinds, series[], search aliases[])
const brand = (id, name, color, kinds, ss, aliases = []) => ({
  id,
  name,
  // Logo file lives at public/brands/<id>.svg – replace the file to change a logo.
  logo: `/brands/${id}.svg`,
  letter: name[0].toUpperCase(),
  color,
  kinds,
  aliases,
  series: ss.map((s) => ({ ...s, kind: s.kind ?? kinds[0] })),
});

const SP = ["smartphone"];
const KP = ["keypad"];

const brandList = [
  brand("xiaomi", "Xiaomi", "#FF6900", SP, [
    series("Redmi A Series", [
      ["Redmi A3", "3GB + 64GB", 6999],
      ["Redmi A4 5G", "4GB + 128GB", 8499],
    ]),
    series("Redmi Series", [
      ["Redmi 13C", "4GB + 128GB", 9999],
      ["Redmi 14C 5G", "4GB + 128GB", 9999],
      ["Redmi 13 5G", "6GB + 128GB", 13999],
      ["Redmi 15 5G", "6GB + 128GB", 14999],
    ]),
    series("Redmi Note Series", [
      ["Redmi Note 13 5G", "6GB + 128GB", 17999],
      ["Redmi Note 14 5G", "6GB + 128GB", 17999],
      ["Redmi Note 14 Pro 5G", "8GB + 128GB", 24999],
      ["Redmi Note 13 Pro 5G", "8GB + 128GB", 25999],
      ["Redmi Note 14 Pro+ 5G", "8GB + 256GB", 29999],
      ["Redmi Note 13 Pro+ 5G", "8GB + 256GB", 31999],
    ]),
    series("Xiaomi Series", [
      ["Xiaomi 14T", "12GB + 256GB", 44999],
      ["Xiaomi 14 Civi", "8GB + 256GB", 42999],
      ["Xiaomi 14T Pro", "12GB + 256GB", 59999],
      ["Xiaomi 15", "12GB + 512GB", 64999],
      ["Xiaomi 14", "12GB + 512GB", 69999],
    ]),
  ], ["Redmi", "Mi"]),

  brand("oppo", "Oppo", "#1BA14A", SP, [
    series("A Series", [
      ["Oppo A18", "4GB + 64GB", 7999],
      ["Oppo A38", "4GB + 128GB", 10999],
      ["Oppo A3x 5G", "4GB + 64GB", 12499],
      ["Oppo A58", "6GB + 128GB", 14999],
      ["Oppo A60", "8GB + 128GB", 16999],
      ["Oppo A78 5G", "8GB + 128GB", 18999],
      ["Oppo A59 5G", "6GB + 128GB", 15999],
      ["Oppo A3 Pro 5G", "8GB + 128GB", 17999],
      ["Oppo A5 Pro 5G", "8GB + 128GB", 17999],
    ]),
    series("F Series", [
      ["Oppo F21 Pro", "8GB + 128GB", 22999],
      ["Oppo F23", "8GB + 256GB", 22999],
      ["Oppo F27 5G", "8GB + 128GB", 22999],
      ["Oppo F29 5G", "8GB + 128GB", 23999],
      ["Oppo F25 Pro", "8GB + 128GB", 24999],
      ["Oppo F27 Pro+ 5G", "8GB + 128GB", 27999],
      ["Oppo F29 Pro 5G", "8GB + 128GB", 27999],
    ]),
    series("Reno Series", [
      ["Oppo Reno 11", "8GB + 128GB", 29999],
      ["Oppo Reno 12", "8GB + 256GB", 36999],
      ["Oppo Reno 13", "8GB + 128GB", 37999],
      ["Oppo Reno 14 5G", "8GB + 256GB", 37999],
      ["Oppo Reno 11 Pro", "12GB + 256GB", 39999],
      ["Oppo Reno 12 Pro", "12GB + 256GB", 40999],
      ["Oppo Reno 13 Pro", "12GB + 256GB", 49999],
      ["Oppo Reno 14 Pro 5G", "12GB + 256GB", 49999],
    ]),
    series("K Series", [
      ["Oppo K13x 5G", "4GB + 128GB", 11999],
      ["Oppo K12x", "6GB + 128GB", 12999],
      ["Oppo K13 5G", "8GB + 128GB", 17999],
      ["Oppo K12 Plus", "8GB + 256GB", 19999],
    ]),
  ]),

  brand("samsung", "Samsung", "#1428A0", ["smartphone", "keypad"], [
    series("Galaxy A Series", [
      ["Galaxy A06", "4GB + 64GB", 9999],
      ["Galaxy A15 5G", "6GB + 128GB", 15999],
      ["Galaxy A16 5G", "8GB + 128GB", 18999],
      ["Galaxy A26 5G", "8GB + 128GB", 27999],
      ["Galaxy A36 5G", "8GB + 128GB", 32999],
      ["Galaxy A56 5G", "8GB + 128GB", 41999],
    ]),
    series("Galaxy M Series", [
      ["Galaxy M05", "4GB + 64GB", 7999],
      ["Galaxy M16 5G", "4GB + 128GB", 11499],
      ["Galaxy M15 5G", "6GB + 128GB", 13999],
      ["Galaxy M36 5G", "6GB + 128GB", 16999],
      ["Galaxy M35 5G", "6GB + 128GB", 19999],
    ]),
    series("Galaxy F Series", [
      ["Galaxy F05", "4GB + 64GB", 7499],
      ["Galaxy F15 5G", "6GB + 128GB", 12999],
      ["Galaxy F16 5G", "6GB + 128GB", 13499],
      ["Galaxy F36 5G", "6GB + 128GB", 17499],
      ["Galaxy F55 5G", "8GB + 128GB", 26999],
    ]),
    series("Galaxy S Series", [
      ["Galaxy S24 FE", "8GB + 128GB", 59999],
      ["Galaxy S25", "12GB + 256GB", 80999],
      ["Galaxy S25 Edge", "12GB + 256GB", 109999],
      ["Galaxy S25 Ultra", "12GB + 256GB", 129999],
    ]),
    series("Galaxy Z Series", [
      ["Galaxy Z Flip6", "12GB + 256GB", 109999],
      ["Galaxy Z Flip7", "12GB + 256GB", 109999],
      ["Galaxy Z Fold6", "12GB + 256GB", 164999],
      ["Galaxy Z Fold7", "12GB + 256GB", 174999],
    ]),
    series("Guru Keypad Series", [
      ["Samsung Guru FM Plus", "1.8 inch · Dual SIM", 1499],
      ["Samsung Guru E1200", "1.77 inch · Dual SIM", 1399],
      ["Samsung Keystone 3", "1.77 inch · Dual SIM", 1699],
      ["Samsung Guru Music 2", "2.0 inch · Dual SIM", 1999],
    ], "keypad"),
  ]),

  brand("vivo", "Vivo", "#415FFF", SP, [
    series("Y Series", [
      ["Vivo Y18", "4GB + 64GB", 8999],
      ["Vivo Y28 5G", "4GB + 128GB", 12999],
      ["Vivo Y29 5G", "4GB + 128GB", 13999],
      ["Vivo Y39 5G", "6GB + 128GB", 16999],
      ["Vivo Y58 5G", "8GB + 128GB", 19499],
      ["Vivo Y200e 5G", "6GB + 128GB", 19999],
    ]),
    series("T Series", [
      ["Vivo T3x 5G", "6GB + 128GB", 13499],
      ["Vivo T4x 5G", "6GB + 128GB", 13999],
      ["Vivo T3 5G", "8GB + 128GB", 19999],
      ["Vivo T4 5G", "8GB + 128GB", 21999],
      ["Vivo T3 Pro 5G", "8GB + 128GB", 24999],
    ]),
    series("V Series", [
      ["Vivo V40e", "8GB + 128GB", 28999],
      ["Vivo V50e", "8GB + 128GB", 28999],
      ["Vivo V40", "8GB + 128GB", 34999],
      ["Vivo V50", "8GB + 128GB", 34999],
    ]),
    series("X Series", [
      ["Vivo X200 FE", "12GB + 256GB", 54999],
      ["Vivo X200", "12GB + 256GB", 65999],
      ["Vivo X200 Pro", "16GB + 512GB", 94999],
    ]),
  ]),

  brand("realme", "Realme", "#F5B800", SP, [
    series("C Series", [
      ["Realme C61", "4GB + 64GB", 7999],
      ["Realme C65 5G", "4GB + 128GB", 10499],
      ["Realme C63 5G", "4GB + 128GB", 10999],
      ["Realme C67 5G", "6GB + 128GB", 13999],
    ]),
    series("Narzo Series", [
      ["Narzo N61", "4GB + 64GB", 7999],
      ["Narzo 70x 5G", "4GB + 128GB", 11999],
      ["Narzo 80x 5G", "6GB + 128GB", 13999],
      ["Narzo 70 Pro 5G", "8GB + 128GB", 19999],
      ["Narzo 80 Pro 5G", "8GB + 128GB", 19999],
    ]),
    series("P Series", [
      ["Realme P3x 5G", "6GB + 128GB", 13499],
      ["Realme P1 5G", "6GB + 128GB", 15999],
      ["Realme P3 5G", "6GB + 128GB", 16999],
      ["Realme P2 Pro 5G", "8GB + 128GB", 21999],
      ["Realme P3 Pro 5G", "8GB + 128GB", 23999],
    ]),
    series("Number Series", [
      ["Realme 14x 5G", "6GB + 128GB", 14999],
      ["Realme 13 5G", "8GB + 128GB", 17999],
      ["Realme 14 Pro 5G", "8GB + 128GB", 24999],
      ["Realme 13 Pro 5G", "8GB + 128GB", 26999],
      ["Realme 14 Pro+ 5G", "8GB + 128GB", 29999],
      ["Realme 13 Pro+ 5G", "8GB + 256GB", 31999],
    ]),
    series("GT Series", [
      ["Realme GT 6", "12GB + 256GB", 40999],
      ["Realme GT 7 Pro", "12GB + 256GB", 59999],
    ]),
  ]),

  brand("oneplus", "OnePlus", "#EB0028", SP, [
    series("Nord Series", [
      ["OnePlus Nord CE4 Lite 5G", "8GB + 128GB", 19999],
      ["OnePlus Nord CE4", "8GB + 128GB", 24999],
      ["OnePlus Nord CE5", "8GB + 128GB", 24999],
      ["OnePlus Nord 4", "8GB + 128GB", 29999],
      ["OnePlus Nord 5", "8GB + 256GB", 31999],
    ]),
    series("Flagship Series", [
      ["OnePlus 12R", "8GB + 128GB", 39999],
      ["OnePlus 13R", "12GB + 256GB", 42999],
      ["OnePlus 13s", "12GB + 256GB", 54999],
      ["OnePlus 12", "12GB + 256GB", 64999],
      ["OnePlus 13", "12GB + 256GB", 69999],
    ]),
  ]),

  brand("apple", "Apple", "#3C3C43", SP, [
    series("iPhone 17 Series", [
      ["iPhone 17", "256GB", 82900],
      ["iPhone Air", "256GB", 119900],
      ["iPhone 17 Pro", "256GB", 134900],
      ["iPhone 17 Pro Max", "256GB", 149900],
    ]),
    series("iPhone 16 Series", [
      ["iPhone 16e", "128GB", 59900],
      ["iPhone 16", "128GB", 79900],
      ["iPhone 16 Plus", "128GB", 89900],
      ["iPhone 16 Pro", "128GB", 119900],
      ["iPhone 16 Pro Max", "256GB", 144900],
    ]),
    series("iPhone 15 Series", [
      ["iPhone 15", "128GB", 69900],
      ["iPhone 15 Plus", "128GB", 79900],
    ]),
  ], ["iPhone", "iOS"]),

  brand("poco", "Poco", "#F7C600", SP, [
    series("C Series", [
      ["Poco C61", "4GB + 64GB", 7499],
      ["Poco C75 5G", "4GB + 64GB", 7999],
      ["Poco C65", "6GB + 128GB", 8499],
    ]),
    series("M Series", [
      ["Poco M6 5G", "6GB + 128GB", 10999],
      ["Poco M6 Pro 5G", "6GB + 128GB", 11999],
      ["Poco M7 Plus 5G", "6GB + 128GB", 13999],
      ["Poco M7 Pro 5G", "8GB + 256GB", 14999],
    ]),
    series("X Series", [
      ["Poco X6 5G", "8GB + 256GB", 21999],
      ["Poco X7 5G", "8GB + 256GB", 21999],
      ["Poco X6 Pro 5G", "8GB + 256GB", 26999],
      ["Poco X7 Pro 5G", "8GB + 256GB", 27999],
    ]),
    series("F Series", [
      ["Poco F6", "8GB + 256GB", 29999],
      ["Poco F7", "12GB + 256GB", 31999],
    ]),
  ]),

  brand("motorola", "Motorola", "#0B5FFF", SP, [
    series("Moto E Series", [
      ["Moto E13", "2GB + 64GB", 6999],
      ["Moto E14", "2GB + 64GB", 7499],
    ]),
    series("Moto G Series", [
      ["Moto G35 5G", "4GB + 128GB", 9999],
      ["Moto G45 5G", "4GB + 128GB", 10999],
      ["Moto G64 5G", "8GB + 128GB", 14999],
      ["Moto G85 5G", "8GB + 128GB", 17999],
      ["Moto G96 5G", "8GB + 128GB", 17999],
    ]),
    series("Edge Series", [
      ["Moto Edge 50 Fusion", "8GB + 128GB", 22999],
      ["Moto Edge 60 Fusion", "8GB + 256GB", 22999],
      ["Moto Edge 50 Neo", "8GB + 256GB", 23999],
      ["Moto Edge 60 Pro", "8GB + 256GB", 29999],
      ["Moto Edge 50 Pro", "12GB + 256GB", 31999],
    ]),
    series("Razr Series", [
      ["Moto Razr 50", "8GB + 256GB", 64999],
      ["Moto Razr 50 Ultra", "12GB + 512GB", 99999],
    ]),
  ], ["Moto"]),

  brand("iqoo", "iQOO", "#1F2937", SP, [
    series("Z Series", [
      ["iQOO Z9x 5G", "6GB + 128GB", 12999],
      ["iQOO Z10x 5G", "6GB + 128GB", 13499],
      ["iQOO Z10R 5G", "8GB + 128GB", 19499],
      ["iQOO Z9 5G", "8GB + 128GB", 19999],
      ["iQOO Z9s 5G", "8GB + 128GB", 19999],
      ["iQOO Z10 5G", "8GB + 128GB", 21999],
      ["iQOO Z9s Pro 5G", "8GB + 128GB", 24999],
    ]),
    series("Neo Series", [
      ["iQOO Neo 10R 5G", "8GB + 128GB", 26999],
      ["iQOO Neo 10", "8GB + 128GB", 31999],
      ["iQOO Neo 9 Pro 5G", "8GB + 128GB", 36999],
    ]),
    series("Flagship Series", [
      ["iQOO 12", "12GB + 256GB", 52999],
      ["iQOO 13", "12GB + 256GB", 54999],
    ]),
  ]),

  brand("infinix", "Infinix", "#00A86B", SP, [
    series("Smart Series", [
      ["Infinix Smart 8 HD", "3GB + 64GB", 6299],
      ["Infinix Smart 9", "4GB + 64GB", 6999],
      ["Infinix Smart 8 Plus", "4GB + 64GB", 7999],
    ]),
    series("Hot Series", [
      ["Infinix Hot 50i", "4GB + 128GB", 9299],
      ["Infinix Hot 40i", "8GB + 256GB", 9999],
      ["Infinix Hot 50 5G", "8GB + 128GB", 10999],
    ]),
    series("Note Series", [
      ["Infinix Note 50x 5G", "6GB + 128GB", 11499],
      ["Infinix Note 40 5G", "8GB + 256GB", 14999],
      ["Infinix Note 40 Pro 5G", "8GB + 256GB", 21999],
    ]),
    series("Zero Series", [
      ["Infinix Zero 30 5G", "8GB + 256GB", 23999],
      ["Infinix Zero 40 5G", "8GB + 256GB", 27999],
      ["Infinix Zero Flip", "8GB + 512GB", 49999],
    ]),
  ]),

  brand("tecno", "Tecno", "#0096D6", SP, [
    series("Spark Series", [
      ["Tecno Spark Go 1", "4GB + 64GB", 6699],
      ["Tecno Spark 20", "8GB + 128GB", 9999],
      ["Tecno Spark 30 5G", "6GB + 128GB", 11999],
      ["Tecno Spark 20 Pro+", "8GB + 256GB", 14999],
    ]),
    series("Pova Series", [
      ["Tecno Pova 7 5G", "8GB + 128GB", 12999],
      ["Tecno Pova 6 Neo 5G", "8GB + 128GB", 14999],
      ["Tecno Pova 7 Pro 5G", "8GB + 256GB", 19999],
      ["Tecno Pova 6 Pro 5G", "8GB + 256GB", 21999],
    ]),
    series("Camon Series", [
      ["Tecno Camon 30 5G", "8GB + 256GB", 22999],
      ["Tecno Camon 30 Pro 5G", "12GB + 256GB", 27999],
    ]),
    series("Phantom Series", [
      ["Tecno Phantom X2 5G", "8GB + 256GB", 34999],
    ]),
  ]),

  brand("google", "Google", "#4285F4", SP, [
    series("Pixel a Series", [
      ["Pixel 9a", "8GB + 256GB", 49999],
      ["Pixel 8a", "8GB + 128GB", 52999],
    ]),
    series("Pixel 10 Series", [
      ["Pixel 10", "12GB + 256GB", 79999],
      ["Pixel 10 Pro", "16GB + 256GB", 109999],
      ["Pixel 10 Pro XL", "16GB + 256GB", 124999],
      ["Pixel 10 Pro Fold", "16GB + 256GB", 172999],
    ]),
    series("Pixel 9 Series", [
      ["Pixel 9", "12GB + 256GB", 79999],
      ["Pixel 9 Pro", "16GB + 256GB", 109999],
      ["Pixel 9 Pro XL", "16GB + 256GB", 124999],
    ]),
  ], ["Pixel"]),

  brand("nothing", "Nothing", "#111111", SP, [
    series("Phone Series", [
      ["Nothing Phone (2a)", "8GB + 128GB", 23999],
      ["Nothing Phone (3a)", "8GB + 128GB", 24999],
      ["Nothing Phone (2a) Plus", "12GB + 256GB", 27999],
      ["Nothing Phone (3a) Pro", "8GB + 128GB", 29999],
      ["Nothing Phone (3)", "12GB + 256GB", 79999],
    ]),
    series("CMF Series", [
      ["CMF Phone 1", "6GB + 128GB", 15999],
      ["CMF Phone 2 Pro", "8GB + 128GB", 18999],
    ]),
  ], ["CMF"]),

  brand("lava", "Lava", "#E4002B", ["smartphone", "keypad"], [
    series("Yuva Series", [
      ["Lava Yuva Star", "4GB + 64GB", 6999],
      ["Lava Yuva 5G", "4GB + 64GB", 9499],
    ]),
    series("Blaze Series", [
      ["Lava Blaze 2 5G", "4GB + 128GB", 9999],
      ["Lava Blaze Dragon 5G", "4GB + 128GB", 9999],
      ["Lava Blaze Pro 5G", "6GB + 128GB", 12999],
      ["Lava Blaze Curve 5G", "8GB + 128GB", 17999],
    ]),
    series("Agni Series", [
      ["Lava Agni 3 5G", "8GB + 128GB", 20999],
      ["Lava Agni 2 5G", "8GB + 256GB", 21999],
    ]),
    series("Keypad Series", [
      ["Lava A1 Josh", "1.8 inch · Dual SIM", 1049],
      ["Lava A3", "1.8 inch · Dual SIM", 1299],
      ["Lava A5", "1.8 inch · Dual SIM", 1299],
    ], "keypad"),
  ]),

  brand("itel", "itel", "#E2231A", ["smartphone", "keypad"], [
    series("A Series", [
      ["itel A60s", "4GB + 64GB", 6499],
      ["itel A70", "4GB + 128GB", 6999],
    ]),
    series("P Series", [
      ["itel P40", "4GB + 128GB", 6999],
      ["itel P55 5G", "6GB + 128GB", 9999],
      ["itel P55+ 5G", "8GB + 128GB", 10999],
    ]),
    series("S Series", [
      ["itel S23", "8GB + 128GB", 8999],
      ["itel S24", "8GB + 256GB", 11999],
    ]),
    series("Keypad Series", [
      ["itel Power 110", "1.77 inch · Dual SIM", 1299],
      ["itel Magic X Play", "2.0 inch · Dual SIM", 1699],
      ["itel Super Guru 4G", "2.4 inch · 4G", 1799],
      ["itel Magic 2 4G", "2.4 inch · 4G", 1899],
    ], "keypad"),
  ]),

  brand("nokia", "Nokia", "#124191", KP, [
    series("Nokia 1xx Series", [
      ["Nokia 105 Classic", "1.8 inch · Single SIM", 1249],
      ["Nokia 106 4G", "1.8 inch · 4G", 1799],
      ["Nokia 110 4G", "1.8 inch · 4G", 2299],
      ["Nokia 150", "2.4 inch · Dual SIM", 2499],
    ]),
    series("Nokia 2xx Series", [
      ["Nokia 220 4G", "2.8 inch · 4G", 3499],
      ["Nokia 225 4G", "2.4 inch · 4G", 3999],
      ["Nokia 235 4G", "2.8 inch · 4G", 3999],
    ]),
    series("Nokia Legacy Series", [
      ["Nokia 3210 4G", "2.4 inch · 4G", 3999],
      ["Nokia 8210 4G", "2.8 inch · 4G", 3999],
      ["Nokia 6310", "2.8 inch · Dual SIM", 4299],
      ["Nokia 5710 XpressAudio", "2.4 inch · Built-in earbuds", 4999],
    ]),
  ], ["HMD"]),

  brand("jio", "Jio", "#0A2885", KP, [
    series("JioBharat Series", [
      ["JioBharat V2 4G", "1.77 inch · 4G", 999],
      ["JioBharat K1 Karbonn", "1.77 inch · 4G", 999],
      ["JioBharat J1 4G", "2.4 inch · 4G", 1499],
    ]),
    series("JioPhone Series", [
      ["JioPhone Prima 4G", "2.4 inch · 4G · Apps", 2599],
      ["JioPhone Prima 2", "2.4 inch · 4G · Apps", 2799],
    ]),
  ], ["JioPhone", "JioBharat"]),

  brand("micromax", "Micromax", "#C8102E", KP, [
    series("Micromax Keypad Series", [
      ["Micromax X249", "2.4 inch · Dual SIM", 1099],
      ["Micromax X412", "1.77 inch · Dual SIM", 1199],
      ["Micromax Bharat 5 Pro", "2.4 inch · Dual SIM", 1799],
    ]),
  ]),
];

// Brands are always listed A–Z (case-insensitive), so a newly added brand
// lands in the right place automatically, wherever it is added above.
export const brands = [...brandList].sort((a, b) =>
  a.name.localeCompare(b.name, "en", { sensitivity: "base" })
);

// ---------- helpers ----------

export const brandKinds = [
  { id: "all", label: "All brands" },
  { id: "smartphone", label: "Smartphones" },
  { id: "keypad", label: "Keypad phones" },
];

export const getBrand = (id) => brands.find((b) => b.id === id);

export const countModels = (b) =>
  b.series.reduce((total, s) => total + s.models.length, 0);

export const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

export const brandSummary = (b) =>
  `${plural(b.series.length, "series", "series")}, ${plural(countModels(b), "model", "models")}`;

export const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

// lower-case + strip spaces/punctuation so "note13" matches "Note 13"
export const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
