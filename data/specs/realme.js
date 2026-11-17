import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const realme = [
  // ---- C ----
  ...grp({ os: "Android 14 · Realme UI", net: N4, sim: DS_SD, conn: conn("5", "5.2"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Realme C61", '6.74" HD+ IPS LCD · 90Hz', "Unisoc T612", "50MP", "8MP", 5000, 15, "Dark Jungle, Sparkle Gold", ["IP54 dust & splash resistant"]],
  ]),
  ...grp({ os: "Android 14 · Realme UI 5.0", net: N5, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Realme C63 5G", '6.67" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "50MP", "8MP", 5000, 15, "Leather Blue, Jade Green"],
    ["Realme C65 5G", '6.67" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "50MP + 0.08MP", "8MP", 5000, 15, "Feather Green, Glowing Purple"],
  ]),
  ...grp({ os: "Android 13 · Realme UI T", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Realme C67 5G", '6.72" FHD+ IPS LCD · 120Hz', "MediaTek Dimensity 6100+", "50MP + 2MP", "8MP", 5000, 33, "Sunny Oasis, Black Diamond"],
  ]),
  // ---- Narzo ----
  ...grp({ os: "Android 14 · Realme UI 5.0", net: N4, sim: DS_SD, conn: conn("5", "5.2"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Narzo N61", '6.74" HD+ IPS LCD · 90Hz', "Unisoc T612", "50MP", "8MP", 5000, 10, "Voyage Blue, Marble Black", ["IP54 dust & splash resistant"]],
  ]),
  ...grp({ os: "Android 14 · Realme UI 5.0", net: N5, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor"] }, [
    ["Narzo 70x 5G", '6.72" FHD+ IPS LCD · 120Hz', "MediaTek Dimensity 6100+", "50MP + 2MP", "8MP", 5000, 45, "Ice Blue, Forest Green"],
  ]),
  ...grp({ os: "Android 15 · Realme UI 6.0", net: N5, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor", "IP64 dust & splash resistant"] }, [
    ["Narzo 80x 5G", '6.72" FHD+ IPS LCD · 120Hz', "MediaTek Dimensity 6400", "50MP + 2MP", "8MP", 6000, 45, "Sunlit Gold, Deep Ocean"],
  ]),
  ...grp({ os: "Android 14 · Realme UI 5.0", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint"] }, [
    ["Narzo 70 Pro 5G", '6.67" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7050", "50MP Sony OIS + 2MP", "16MP", 5000, 67, "Glass Gold, Glass Green", ["Air gesture controls"]],
  ]),
  ...grp({ os: "Android 15 · Realme UI 6.0", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "IP66 / IP68 / IP69 rated"] }, [
    ["Narzo 80 Pro 5G", '6.77" FHD+ curved AMOLED · 120Hz', "MediaTek Dimensity 7400", "50MP Sony OIS + 2MP", "16MP", 6000, 80, "Racing Green, Speed Silver"],
  ]),
  // ---- P ----
  ...grp({ os: "Android 15 · Realme UI 6.0", net: N5, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor", "IP64 dust & splash resistant"] }, [
    ["Realme P3x 5G", '6.72" FHD+ IPS LCD · 120Hz', "MediaTek Dimensity 6400", "50MP + 2MP", "8MP", 6000, 45, "Lunar Silver, Midnight Blue, Stellar Pink"],
  ]),
  ...grp({ os: "Android 14 · Realme UI 5.0", net: N5, sim: DS_SD, conn: conn("6", "5.3"), feats: ["In-display fingerprint"] }, [
    ["Realme P1 5G", '6.67" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7050", "50MP + 2MP", "16MP", 5000, 45, "Phoenix Red, Peacock Green", ["Rain water touch"]],
    ["Realme P2 Pro 5G", '6.7" FHD+ curved AMOLED · 120Hz', "Snapdragon 7s Gen 2", "50MP Sony OIS + 8MP ultra-wide", "32MP", 5200, 80, "Parrot Green, Eagle Grey"],
  ]),
  ...grp({ os: "Android 15 · Realme UI 6.0", net: N5, sim: DS_SD, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "IP66 / IP68 / IP69 rated"] }, [
    ["Realme P3 5G", '6.67" FHD+ AMOLED · 120Hz', "Snapdragon 6 Gen 4", "50MP + 2MP", "16MP", 6000, 45, "Comet Grey, Nebula Pink, Space Silver"],
    ["Realme P3 Pro 5G", '6.83" 1.5K curved AMOLED · 120Hz', "Snapdragon 7s Gen 3", "50MP Sony OIS + 2MP", "16MP", 6000, 80, "Galaxy Purple, Nebula Glow, Saturn Brown", ["Glow-in-the-dark back panel"]],
  ]),
  // ---- Number series ----
  ...grp({ os: "Android 14 · Realme UI 5.0", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor"] }, [
    ["Realme 13 5G", '6.72" FHD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "50MP + 2MP", "16MP", 5000, 45, "Dark Purple, Speed Green"],
  ]),
  ...grp({ os: "Android 14 · Realme UI 5.0", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint"] }, [
    ["Realme 13 Pro 5G", '6.7" FHD+ curved AMOLED · 120Hz', "Snapdragon 7s Gen 2", "50MP Sony OIS + 8MP ultra-wide", "32MP", 5200, 45, "Emerald Green, Monet Gold, Monet Purple", ["AI-assisted photography"]],
    ["Realme 13 Pro+ 5G", '6.7" FHD+ curved AMOLED · 120Hz', "Snapdragon 7s Gen 2", "50MP Sony OIS + 50MP periscope telephoto + 8MP ultra-wide", "32MP", 5200, 80, "Emerald Green, Monet Gold, Monet Purple", ["3x optical zoom"]],
  ]),
  ...grp({ os: "Android 15 · Realme UI 6.0", net: N5, sim: DS_SD, conn: conn("5", "5.4", "NFC"), feats: ["Side fingerprint sensor", "IP69 dust & water resistant"] }, [
    ["Realme 14x 5G", '6.67" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "50MP + 2MP", "8MP", 6000, 45, "Crystal Black, Golden Glow, Jewel Red"],
  ]),
  ...grp({ os: "Android 15 · Realme UI 6.0", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "IP66 / IP68 / IP69 rated", "Cold-sensitive colour-changing back"] }, [
    ["Realme 14 Pro 5G", '6.77" FHD+ curved AMOLED · 120Hz', "Snapdragon 7s Gen 3", "50MP Sony OIS + 8MP + flicker sensor", "32MP", 6000, 45, "Pearl White, Suede Grey"],
    ["Realme 14 Pro+ 5G", '6.83" 1.5K quad-curved AMOLED · 120Hz', "Snapdragon 7s Gen 3", "50MP OIS + 50MP periscope telephoto + 8MP ultra-wide", "32MP", 6000, 80, "Pearl White, Suede Grey, Bikaner Red"],
  ]),
  // ---- GT ----
  ...grp({ os: "Android 14 · Realme UI 5.0", net: N5, sim: DS, conn: conn("7", "5.4", "NFC"), feats: ["Ultrasonic in-display fingerprint", "Flagship gaming performance"] }, [
    ["Realme GT 6", '6.78" 1.5K LTPO AMOLED · 120Hz', "Snapdragon 8s Gen 3", "50MP OIS + 50MP periscope telephoto + 8MP ultra-wide", "32MP", 5500, 120, "Fluid Silver, Razor Green"],
  ]),
  ...grp({ os: "Android 15 · Realme UI 6.0", net: N5, sim: DS, conn: conn("7", "5.4", "NFC"), feats: ["Ultrasonic in-display fingerprint", "IP68 / IP69 rated", "Flagship gaming performance"] }, [
    ["Realme GT 7 Pro", '6.78" 1.5K LTPO AMOLED · 120Hz', "Snapdragon 8 Elite", "50MP + 50MP periscope telephoto + 8MP ultra-wide", "16MP", 6500, 120, "Galaxy Grey, Mars Orange", ["50W wireless charging"]],
  ]),
];
