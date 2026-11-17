import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const oppo = [
  // ---- A Series ----
  ...grp({ os: "Android 13 · ColorOS 13", net: N4, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor"] }, [
    ["Oppo A18", '6.56" HD+ IPS LCD · 90Hz', "MediaTek Helio G85", "8MP + 2MP", "5MP", 5000, 10, "Glowing Green, Glowing Blue"],
    ["Oppo A38", '6.56" HD+ IPS LCD · 90Hz', "MediaTek Helio G85", "50MP + 2MP", "5MP", 5000, 33, "Glowing Gold, Glowing Black"],
    ["Oppo A58", '6.72" FHD+ IPS LCD · 90Hz', "MediaTek Helio G85", "50MP + 2MP", "8MP", 5000, 33, "Dazzling Green, Glowing Black", ["Slim 7.99mm body"]],
  ]),
  ...grp({ os: "Android 14 · ColorOS 14", net: N4, sim: DS_SD, conn: conn("5", "5.0", "NFC"), feats: ["Side fingerprint sensor", "IPX4 splash resistant"] }, [
    ["Oppo A60", '6.67" HD+ IPS LCD · 90Hz', "Snapdragon 680", "50MP + 2MP", "8MP", 5000, 45, "Midnight Purple, Ripple Blue"],
  ]),
  ...grp({ os: "Android 13 · ColorOS 13", net: N5, sim: DS_SD, conn: conn("5", "5.1", "NFC"), feats: ["Side fingerprint sensor"] }, [
    ["Oppo A78 5G", '6.56" HD+ IPS LCD · 90Hz', "MediaTek Dimensity 700", "50MP + 2MP", "8MP", 5000, 33, "Glowing Black, Glowing Blue"],
    ["Oppo A59 5G", '6.56" HD+ IPS LCD · 90Hz', "MediaTek Dimensity 6020", "13MP + 2MP", "8MP", 5000, 33, "Silk Gold, Starry Black"],
  ]),
  ...grp({ os: "Android 14 · ColorOS 14", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor", "Military-grade shock resistance"] }, [
    ["Oppo A3x 5G", '6.67" HD+ IPS LCD · 90Hz', "MediaTek Dimensity 6300", "8MP", "5MP", 5100, 45, "Sparkle Black, Sparkle Blue", ["IP64 dust & splash resistant"]],
    ["Oppo A3 Pro 5G", '6.67" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "50MP + 2MP", "8MP", 5100, 45, "Moonlight Purple, Starry Black", ["IP54 dust & splash resistant"]],
  ]),
  ...grp({ os: "Android 15 · ColorOS 15", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor", "IP69 dust & water resistant"] }, [
    ["Oppo A5 Pro 5G", '6.67" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "50MP + 2MP", "8MP", 5800, 45, "Mocha Brown, Matte Black"],
  ]),
  // ---- F Series ----
  ...grp({ os: "Android 11 · ColorOS 12", net: N4, sim: DS_SD, conn: conn("5", "5.1", "NFC"), feats: ["In-display fingerprint"] }, [
    ["Oppo F21 Pro", '6.43" FHD+ AMOLED · 90Hz', "Snapdragon 680", "64MP + 2MP + 2MP", "16MP", 4500, 33, "Cosmic Black, Sunset Orange, Rainbow Spectrum"],
  ]),
  ...grp({ os: "Android 13 · ColorOS 13", net: N5, sim: DS_SD, conn: conn("5", "5.1", "NFC"), feats: ["Side fingerprint sensor"] }, [
    ["Oppo F23", '6.72" FHD+ IPS LCD · 120Hz', "Snapdragon 695", "64MP + 2MP + 2MP", "16MP", 5000, 67, "Cool Black, Bold Gold"],
  ]),
  ...grp({ os: "Android 14 · ColorOS 14", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint"] }, [
    ["Oppo F25 Pro", '6.7" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7050", "64MP + 8MP + 2MP", "32MP", 5000, 67, "Lava Red, Ocean Blue", ["IP65 dust & water resistant"]],
    ["Oppo F27 5G", '6.67" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 6300", "64MP + 2MP", "32MP", 5000, 45, "Emerald Green, Amber Orange", ["IP64 dust & water resistant", "Military-grade shock resistance"]],
    ["Oppo F27 Pro+ 5G", '6.7" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7050", "64MP + 2MP", "16MP", 5000, 67, "Dusk Pink, Midnight Navy", ["IP69 dust & water resistant"]],
  ]),
  ...grp({ os: "Android 15 · ColorOS 15", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "Military-grade shock resistance"] }, [
    ["Oppo F29 5G", '6.7" FHD+ AMOLED · 120Hz', "Snapdragon 6 Gen 1", "50MP + 2MP", "16MP", 6500, 45, "Glacier Blue, Solid Purple", ["IP66 / IP68 / IP69 rated"]],
    ["Oppo F29 Pro 5G", '6.7" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7300", "50MP + 2MP", "32MP", 6000, 80, "Marble White, Granite Black", ["IP66 / IP68 / IP69 rated"]],
  ]),
  // ---- Reno Series ----
  ...grp({ os: "Android 14 · ColorOS 14", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint"] }, [
    ["Oppo Reno 11", '6.7" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7050", "50MP + 32MP telephoto + 8MP ultra-wide", "32MP", 5000, 67, "Rock Grey, Wave Green", ["Gorilla Glass 3"]],
    ["Oppo Reno 11 Pro", '6.74" FHD+ curved AMOLED · 120Hz', "MediaTek Dimensity 8200", "50MP + 32MP telephoto + 8MP ultra-wide", "32MP", 4600, 80, "Pearl White, Rock Grey"],
    ["Oppo Reno 12", '6.7" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7300 Energy", "50MP + 8MP + 2MP", "32MP", 5000, 80, "Sunset Peach, Matte Brown", ["IP65 dust & water resistant"]],
    ["Oppo Reno 12 Pro", '6.7" FHD+ curved AMOLED · 120Hz', "MediaTek Dimensity 7300 Energy", "50MP + 50MP telephoto + 8MP ultra-wide", "50MP", 5000, 80, "Space Brown, Sunset Gold, Nebula Silver", ["IP65 dust & water resistant"]],
  ]),
  ...grp({ os: "Android 15 · ColorOS 15", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "IP66 / IP68 / IP69 rated"] }, [
    ["Oppo Reno 13", '6.59" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 8350", "50MP + 8MP + 2MP", "50MP", 5600, 80, "Ivory White, Luminous Blue, Graphite Grey"],
    ["Oppo Reno 13 Pro", '6.83" 1.5K curved AMOLED · 120Hz', "MediaTek Dimensity 8350", "50MP + 50MP telephoto + 8MP ultra-wide", "50MP", 5800, 80, "Graphite Grey, Mist Lavender"],
    ["Oppo Reno 14 5G", '6.59" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 8350", "50MP + 50MP telephoto + 8MP ultra-wide", "50MP", 6000, 80, "Pearl White, Forest Green"],
    ["Oppo Reno 14 Pro 5G", '6.83" 1.5K curved AMOLED · 120Hz', "MediaTek Dimensity 8450", "50MP + 50MP telephoto + 8MP ultra-wide", "50MP", 6200, 80, "Pearl White, Titanium Grey"],
  ]),
  // ---- K Series ----
  ...grp({ os: "Android 15 · ColorOS 15", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor", "Military-grade shock resistance"] }, [
    ["Oppo K13x 5G", '6.67" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "50MP + 2MP", "8MP", 6000, 45, "Midnight Violet, Sunset Peach", ["IP65 dust & water resistant"]],
    ["Oppo K13 5G", '6.67" FHD+ AMOLED · 120Hz', "Snapdragon 6 Gen 4", "50MP + 2MP", "16MP", 7000, 80, "Icy Purple, Prism Black", ["In-display fingerprint"]],
  ]),
  ...grp({ os: "Android 14 · ColorOS 14", net: N5, sim: DS_SD, conn: conn("5", "5.1", "NFC"), feats: ["Side fingerprint sensor", "Military-grade shock resistance"] }, [
    ["Oppo K12x", '6.67" HD+ IPS LCD · 120Hz', "Snapdragon 695", "50MP + 2MP", "8MP", 5500, 80, "Breeze Blue, Midnight Violet"],
    ["Oppo K12 Plus", '6.7" FHD+ AMOLED · 120Hz', "Snapdragon 7 Gen 3", "50MP + 8MP", "16MP", 6400, 80, "Cosmic Blue, Stellar Black", ["In-display fingerprint"]],
  ]),
];
