import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const poco = [
  ...grp({ os: "Android 14 · HyperOS", net: N4, sim: DS_SD, conn: conn("5", "5.4"), feats: ["3.5mm headphone jack", "Side fingerprint sensor"] }, [
    ["Poco C61", '6.71" HD+ IPS LCD · 90Hz', "MediaTek Helio G36", "8MP + AI lens", "5MP", 5000, 10, "Diamond Dust Black, Ethereal Blue, Mystical Green"],
    ["Poco C65", '6.74" HD+ IPS LCD · 90Hz', "MediaTek Helio G85", "50MP + 2MP", "8MP", 5000, 18, "Pastel Blue, Matte Black, Pastel Green"],
  ]),
  ...grp({ os: "Android 14 · HyperOS", net: N5, sim: DS_SD, conn: conn("5", "5.4"), feats: ["3.5mm headphone jack", "Side fingerprint sensor"] }, [
    ["Poco C75 5G", '6.88" HD+ IPS LCD · 120Hz', "Snapdragon 4s Gen 2", "50MP + depth sensor", "5MP", 5160, 18, "Aqua Bliss, Enchanted Green, Silver Stardust"],
    ["Poco M6 5G", '6.74" HD+ IPS LCD · 90Hz', "MediaTek Dimensity 6100+", "50MP + 2MP", "5MP", 5000, 18, "Orion Blue, Polaris Green"],
    ["Poco M6 Pro 5G", '6.79" FHD+ IPS LCD · 120Hz', "Snapdragon 4 Gen 2", "50MP + 2MP", "8MP", 5000, 18, "Forest Green, Power Black"],
  ]),
  ...grp({ os: "Android 15 · HyperOS 2", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor"] }, [
    ["Poco M7 Plus 5G", '6.9" FHD+ IPS LCD · 144Hz', "Snapdragon 6s Gen 3", "50MP + 2MP", "8MP", 7000, 33, "Carbon Black, Aqua Blue, Ice Silver", ["7000 mAh battery"]],
  ]),
  ...grp({ os: "Android 14 · HyperOS", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint"] }, [
    ["Poco M7 Pro 5G", '6.67" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7025 Ultra", "50MP + 2MP", "20MP", 5110, 45, "Lunar Dust, Olive Twilight, Lavender Frost", ["Gorilla Glass 5"]],
    ["Poco X6 5G", '6.67" 1.5K AMOLED · 120Hz', "Snapdragon 7s Gen 2", "64MP OIS + 8MP + 2MP", "16MP", 5100, 67, "Spectrum Blue, Mirror Black, Snowstorm White", ["IP54 splash resistant"]],
    ["Poco X6 Pro 5G", '6.67" 1.5K AMOLED · 120Hz', "MediaTek Dimensity 8300 Ultra", "64MP OIS + 8MP + 2MP", "16MP", 5000, 67, "Yellow, Racing Grey, Spectre Black", ["Gaming focused performance"]],
  ]),
  ...grp({ os: "Android 15 · HyperOS 2", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "IP68 dust & water resistant"] }, [
    ["Poco X7 5G", '6.67" 1.5K AMOLED · 120Hz', "MediaTek Dimensity 7300 Ultra", "50MP OIS + 8MP", "20MP", 5110, 45, "Green, Silver, Black"],
    ["Poco X7 Pro 5G", '6.67" 1.5K AMOLED · 120Hz', "MediaTek Dimensity 8400 Ultra", "50MP OIS + 8MP", "20MP", 6550, 90, "Yellow, Green, Silver", ["6550 mAh silicon-carbon battery"]],
    ["Poco F7", '6.83" 1.5K AMOLED · 120Hz', "Snapdragon 8s Gen 4", "50MP OIS + 8MP", "20MP", 6500, 90, "Cyber Silver, Phantom Black", ["IP68 dust & water resistant", "Flagship-class gaming"]],
  ]),
  ...grp({ os: "Android 14 · HyperOS", net: N5, sim: DS, conn: conn("7", "5.4", "NFC"), feats: ["In-display fingerprint", "Flagship-class gaming"] }, [
    ["Poco F6", '6.67" 1.5K AMOLED · 120Hz', "Snapdragon 8s Gen 3", "50MP OIS + 8MP", "20MP", 5000, 90, "Titanium, Black", ["IP64 dust & splash resistant"]],
  ]),
];
