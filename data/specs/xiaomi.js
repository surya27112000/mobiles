import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const xiaomi = [
  ...grp({ os: "Android 14 (Go edition) · HyperOS", net: N4, sim: DS_SD, conn: conn("5", "5.4"), feats: ["3.5mm headphone jack", "Face unlock"] }, [
    ["Redmi A3", '6.71" HD+ IPS LCD · 90Hz', "MediaTek Helio G36", "8MP + AI lens", "5MP", 5000, 10, "Midnight Black, Lake Blue, Olive Green"],
  ]),
  ...grp({ os: "Android 14 (Go edition) · HyperOS", net: N5, sim: DS_SD, conn: conn("5", "5.4"), feats: ["3.5mm headphone jack", "Side fingerprint sensor"] }, [
    ["Redmi A4 5G", '6.88" HD+ IPS LCD · 120Hz', "Snapdragon 4s Gen 2", "50MP + depth sensor", "5MP", 5160, 18, "Starry Black, Sparkle Purple"],
  ]),
  ...grp({ os: "Android 13 · MIUI 14", net: N4, sim: DS_SD, conn: conn("5", "5.3"), feats: ["3.5mm headphone jack", "Side fingerprint sensor"] }, [
    ["Redmi 13C", '6.74" HD+ IPS LCD · 90Hz', "MediaTek Helio G85", "50MP + 2MP", "8MP", 5000, 18, "Starshine Green, Startrail Silver, Starlight Black"],
  ]),
  ...grp({ os: "Android 14 · HyperOS", net: N5, sim: DS_SD, conn: conn("5", "5.3"), feats: ["3.5mm headphone jack", "Side fingerprint sensor"] }, [
    ["Redmi 14C 5G", '6.88" HD+ IPS LCD · 120Hz', "Snapdragon 4 Gen 2", "50MP + depth sensor", "8MP", 5160, 18, "Starlight Blue, Stardust Purple, Stargaze Black"],
    ["Redmi 13 5G", '6.79" FHD+ IPS LCD · 120Hz', "Snapdragon 4 Gen 2 Accelerated Edition", "108MP + 2MP", "13MP", 5030, 33, "Black Diamond, Hawaiian Blue, Orchid Pink"],
  ]),
  ...grp({ os: "Android 15 · HyperOS 2", net: N5, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor"] }, [
    ["Redmi 15 5G", '6.9" FHD+ IPS LCD · 144Hz', "Snapdragon 6s Gen 3", "50MP + depth sensor", "8MP", 7000, 33, "Midnight Black, Frosted White, Sandy Purple", ["Large 7000 mAh battery"]],
  ]),
  ...grp({ os: "Android 13 · MIUI 14", net: N5, sim: DS, conn: conn("6", "5.3", "NFC", "USB Type-C"), feats: ["IR blaster"] }, [
    ["Redmi Note 13 5G", '6.67" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 6080", "108MP + 2MP", "16MP", 5000, 33, "Stealth Black, Arctic White, Prism Gold", ["IP54 splash resistant", "Side fingerprint sensor"]],
    ["Redmi Note 13 Pro 5G", '6.67" 1.5K AMOLED · 120Hz', "Snapdragon 7s Gen 2", "200MP OIS + 8MP + 2MP", "16MP", 5100, 67, "Midnight Black, Coral Purple, Arctic White", ["IP54 splash resistant", "In-display fingerprint"]],
    ["Redmi Note 13 Pro+ 5G", '6.67" 1.5K curved AMOLED · 120Hz', "MediaTek Dimensity 7200 Ultra", "200MP OIS + 8MP + 2MP", "16MP", 5000, 120, "Fusion Black, Fusion Purple, Fusion White", ["IP68 dust & water resistant", "In-display fingerprint"]],
  ]),
  ...grp({ os: "Android 14 · HyperOS", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["IR blaster"] }, [
    ["Redmi Note 14 5G", '6.67" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7025 Ultra", "50MP + 2MP", "16MP", 5110, 45, "Titan Black, Mystique White, Phantom Purple", ["IP64 dust & splash resistant", "Gorilla Glass Victus"]],
    ["Redmi Note 14 Pro 5G", '6.67" 1.5K AMOLED · 120Hz', "MediaTek Dimensity 7300 Ultra", "50MP OIS + 8MP + 2MP", "20MP", 5110, 45, "Titan Black, Phantom Purple, Coral Green", ["IP68 dust & water resistant", "In-display fingerprint"]],
    ["Redmi Note 14 Pro+ 5G", '6.67" 1.5K curved AMOLED · 120Hz', "Snapdragon 7s Gen 3", "50MP OIS + 50MP telephoto + 8MP", "20MP", 5110, 90, "Titan Black, Spectre Blue, Mystique White", ["IP68 dust & water resistant", "In-display fingerprint"]],
  ]),
  ...grp({ os: "Android 14 · HyperOS", net: N5, sim: DS, conn: conn("7", "5.4", "NFC"), feats: ["Leica-tuned cameras", "IP68 dust & water resistant", "In-display fingerprint"] }, [
    ["Xiaomi 14T", '6.67" 1.5K AMOLED · 144Hz', "MediaTek Dimensity 8300 Ultra", "50MP + 50MP telephoto + 12MP ultra-wide", "32MP", 5000, 67, "Titan Black, Titan Blue, Titan Gray, Lemon Green"],
    ["Xiaomi 14 Civi", '6.55" FHD+ AMOLED · 120Hz', "Snapdragon 8s Gen 3", "50MP + 50MP telephoto + 12MP ultra-wide", "32MP + 32MP dual", 4700, 67, "Shadow Black, Cruise Blue, Matcha Green", ["Dual selfie cameras"]],
    ["Xiaomi 14T Pro", '6.67" 1.5K AMOLED · 144Hz', "MediaTek Dimensity 9300+", "50MP + 50MP telephoto + 12MP ultra-wide", "32MP", 5000, 120, "Titan Black, Titan Blue, Titan Grey", ["120W HyperCharge"]],
  ]),
  ...grp({ os: "Android 15 · HyperOS 2", net: N5, sim: DS, conn: conn("7", "5.4", "NFC"), feats: ["Leica Summilux lenses", "IP68 dust & water resistant", "Ultrasonic in-display fingerprint"] }, [
    ["Xiaomi 15", '6.36" 1.5K LTPO AMOLED · 120Hz', "Snapdragon 8 Elite", "50MP + 50MP telephoto + 50MP ultra-wide", "32MP", 5240, 90, "Black, White, Green", ["50W wireless charging"]],
  ]),
  ...grp({ os: "Android 14 · HyperOS", net: N5, sim: DS, conn: conn("7", "5.4", "NFC"), feats: ["Leica Summilux lenses", "IP68 dust & water resistant", "Ultrasonic in-display fingerprint"] }, [
    ["Xiaomi 14", '6.36" 1.5K LTPO AMOLED · 120Hz', "Snapdragon 8 Gen 3", "50MP + 50MP telephoto + 50MP ultra-wide", "32MP", 4610, 90, "Black, White, Jade Green", ["50W wireless charging"]],
  ]),
];
