import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const infinix = [
  ...grp({ os: "Android 13 (Go edition) · XOS 13", net: N4, sim: DS_SD, conn: conn("5", "5.0", "", "Micro-USB"), feats: ["Side fingerprint sensor", "3.5mm headphone jack", "Dynamic Bar"] }, [
    ["Infinix Smart 8 HD", '6.6" HD+ IPS LCD · 90Hz', "Unisoc T606", "13MP", "5MP", 5000, 10, "Galaxy White, Shiny Gold, Timber Black"],
    ["Infinix Smart 8 Plus", '6.6" HD+ IPS LCD · 90Hz', "MediaTek Helio G36", "50MP", "8MP", 5000, 10, "Shiny Gold, Timber Black, Galaxy White"],
  ]),
  ...grp({ os: "Android 14 (Go edition) · XOS 14", net: N4, sim: DS_SD, conn: conn("5", "5.0", "", "USB Type-C"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Infinix Smart 9", '6.7" HD+ IPS LCD · 90Hz', "MediaTek Helio G50", "13MP", "8MP", 5000, 15, "Metal Black, Coral Green"],
  ]),
  ...grp({ os: "Android 14 · XOS 14", net: N4, sim: DS_SD, conn: conn("5", "5.2"), feats: ["Side fingerprint sensor", "Dynamic Bar", "JBL-tuned speakers"] }, [
    ["Infinix Hot 40i", '6.56" HD+ IPS LCD · 90Hz', "Unisoc T606", "50MP", "8MP", 5000, 18, "Starlit Black, Horizon Gold, Palm Blue"],
    ["Infinix Hot 50i", '6.7" HD+ IPS LCD · 120Hz', "MediaTek Helio G81 Ultimate", "48MP", "8MP", 5000, 18, "Sleek Black, Vibrant Blue, Sage Green", ["IP54 dust & splash resistant"]],
  ]),
  ...grp({ os: "Android 14 · XOS 14.5", net: N5, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor", "Dynamic Bar", "JBL-tuned speakers"] }, [
    ["Infinix Hot 50 5G", '6.7" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "48MP", "8MP", 5000, 18, "Sleek Black, Sage Green, Dreamy Purple, Vibrant Blue"],
    ["Infinix Note 50x 5G", '6.67" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 7300 Ultimate", "50MP + 2MP", "8MP", 5500, 45, "Enchanted Purple, Sea Breeze Green, Titanium Grey", ["IP64 dust & splash resistant"]],
  ]),
  ...grp({ os: "Android 14 · XOS 14", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint", "Dynamic Bar", "JBL-tuned speakers"] }, [
    ["Infinix Note 40 5G", '6.78" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7020", "108MP + 2MP + AI lens", "32MP", 5000, 33, "Vintage Green, Titan Gold, Obsidian Black", ["20W wireless charging via MagPower"]],
    ["Infinix Note 40 Pro 5G", '6.78" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7020", "108MP OIS + 2MP + AI lens", "32MP", 5000, 45, "Vintage Green, Titan Gold, Obsidian Black", ["20W wireless charging via MagPower"]],
  ]),
  ...grp({ os: "Android 13 · XOS 13", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint", "Curved AMOLED display", "JBL-tuned speakers"] }, [
    ["Infinix Zero 30 5G", '6.78" FHD+ curved AMOLED · 144Hz', "MediaTek Dimensity 8020", "108MP OIS + 13MP + 2MP", "50MP", 5000, 68, "Rome Green, Golden Hour", ["4K selfie video"]],
  ]),
  ...grp({ os: "Android 14 · XOS 14", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint", "Curved AMOLED display", "JBL-tuned speakers"] }, [
    ["Infinix Zero 40 5G", '6.78" FHD+ curved AMOLED · 144Hz', "MediaTek Dimensity 8200 Ultimate", "108MP OIS + 13MP + 2MP", "50MP", 5000, 45, "Moonlit Violet, Rock Black, Violet Garden", ["4K selfie video", "20W wireless charging"]],
    ["Infinix Zero Flip", '6.9" FHD+ foldable AMOLED · 120Hz (3.64" cover)', "MediaTek Dimensity 8020", "50MP + 50MP ultra-wide", "50MP", 4720, 70, "Rock Black, Blossom Glow", ["Foldable design"]],
  ]),
];
