import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const motorola = [
  ...grp({ os: "Android 13 (Go edition) · near-stock", net: N4, sim: DS_SD, conn: conn("5", "5.2"), feats: ["3.5mm headphone jack", "Side fingerprint sensor"] }, [
    ["Moto E13", '6.5" HD+ IPS LCD · 60Hz', "Unisoc T606", "13MP", "5MP", 5000, 10, "Creamy White, Aurora Green, Cosmic Blue"],
  ]),
  ...grp({ os: "Android 14 (Go edition) · near-stock", net: N4, sim: DS_SD, conn: conn("5", "5.0"), feats: ["3.5mm headphone jack", "Face unlock"] }, [
    ["Moto E14", '6.56" HD+ IPS LCD · 90Hz', "Unisoc T606", "13MP", "5MP", 5000, 10, "Pastel Blue, Graphite Grey, Pastel Green"],
  ]),
  ...grp({ os: "Android 14 · Hello UI", net: N5, sim: DS_SD, conn: conn("5", "5.1", "NFC"), feats: ["Side fingerprint sensor", "Dolby Atmos speakers"] }, [
    ["Moto G35 5G", '6.72" FHD+ IPS LCD · 120Hz', "Unisoc T760", "50MP + 8MP ultra-wide", "16MP", 5000, 18, "Guava Red, Leaf Green, Midnight Black"],
    ["Moto G45 5G", '6.5" HD+ IPS LCD · 120Hz', "Snapdragon 6s Gen 3", "50MP + 2MP", "16MP", 5000, 18, "Brilliant Blue, Vivid Blue, Brilliant Green", ["Water-repellent design"]],
    ["Moto G64 5G", '6.5" FHD+ IPS LCD · 120Hz', "MediaTek Dimensity 7025", "50MP OIS + 8MP ultra-wide", "16MP", 6000, 33, "Pearl Blue, Mint Green, Ice Lilac", ["6000 mAh battery"]],
  ]),
  ...grp({ os: "Android 14 · Hello UI", net: N5, sim: DS_SD, conn: conn("6", "5.3", "NFC"), feats: ["Side fingerprint sensor", "pOLED display", "Dolby Atmos speakers"] }, [
    ["Moto G85 5G", '6.67" FHD+ pOLED · 120Hz', "Snapdragon 6s Gen 3", "50MP OIS + 8MP ultra-wide", "32MP", 5000, 33, "Cobalt Blue, Olive Green, Urban Grey", ["Vegan leather back"]],
  ]),
  ...grp({ os: "Android 15 · Hello UI", net: N5, sim: DS_SD, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "pOLED display", "IP68 dust & water resistant"] }, [
    ["Moto G96 5G", '6.67" FHD+ curved pOLED · 144Hz', "Snapdragon 7s Gen 2", "50MP OIS + 8MP ultra-wide", "32MP", 5500, 33, "Ashleigh Blue, Dresden Blue, Cattleya Orchid", ["Pantone-validated colours"]],
  ]),
  ...grp({ os: "Android 14 · Hello UI", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "pOLED display", "IP68 dust & water resistant", "Pantone-validated colours"] }, [
    ["Moto Edge 50 Fusion", '6.7" FHD+ pOLED · 144Hz', "Snapdragon 7s Gen 2", "50MP OIS + 13MP ultra-wide", "32MP", 5000, 68, "Marshmallow Blue, Forest Blue, Hot Pink"],
    ["Moto Edge 50 Neo", '6.4" FHD+ pOLED · 120Hz', "MediaTek Dimensity 7300", "50MP + 13MP ultra-wide + 10MP telephoto", "32MP", 4310, 68, "Latte, Nautical Blue, Grisaille, Poinciana"],
    ["Moto Edge 50 Pro", '6.7" FHD+ curved pOLED · 144Hz', "Snapdragon 7 Gen 3", "50MP OIS + 13MP ultra-wide + 10MP telephoto", "50MP", 4500, 125, "Luxe Lavender, Moonlight Pearl, Black Beauty", ["125W TurboPower charging"]],
  ]),
  ...grp({ os: "Android 15 · Hello UI", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "pOLED display", "IP68 / IP69 rated", "Pantone-validated colours"] }, [
    ["Moto Edge 60 Fusion", '6.7" FHD+ pOLED · 120Hz', "MediaTek Dimensity 7400", "50MP OIS + 13MP ultra-wide", "32MP", 5500, 68, "Pantone Amazonite, Pantone Slipstream, Pantone Zephyr"],
    ["Moto Edge 60 Pro", '6.7" FHD+ curved pOLED · 120Hz', "MediaTek Dimensity 8350 Extreme", "50MP + 50MP ultra-wide + 10MP telephoto", "50MP", 6000, 90, "Pantone Shadow, Pantone Sparkling Grape", ["Triple 50MP-class camera system"]],
  ]),
  ...grp({ os: "Android 14 · Hello UI", net: N5, sim: `Nano-SIM + eSIM`, conn: conn("6E", "5.4", "NFC"), feats: ["Foldable pOLED display", "Flex View", "IPX8 water resistant", "Side fingerprint sensor"] }, [
    ["Moto Razr 50", '6.9" FHD+ foldable pOLED · 120Hz (3.6" cover)', "MediaTek Dimensity 7300X", "50MP + 13MP ultra-wide", "32MP", 4200, 33, "Spritz Orange, Koala Grey, Sage Green"],
    ["Moto Razr 50 Ultra", '6.9" FHD+ foldable pOLED · 165Hz (4" cover)', "Snapdragon 8s Gen 3", "50MP + 50MP telephoto", "32MP", 4000, 45, "Midnight Blue, Spring Green, Peach Fuzz", ["Largest flip cover display"]],
  ]),
];
