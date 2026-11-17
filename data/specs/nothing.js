import { grp, conn, DS, N5 } from "./helpers";

export const nothing = [
  ...grp({ os: "Android 14 · Nothing OS 2.5", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["Glyph Interface", "In-display fingerprint", "Transparent design"] }, [
    ["Nothing Phone (2a)", '6.7" FHD+ flexible AMOLED · 120Hz', "MediaTek Dimensity 7200 Pro", "50MP + 50MP ultra-wide", "32MP", 5000, 45, "Black, White, Blue"],
    ["Nothing Phone (2a) Plus", '6.7" FHD+ flexible AMOLED · 120Hz', "MediaTek Dimensity 7350 Pro", "50MP + 50MP ultra-wide", "50MP", 5000, 50, "Grey, Black"],
  ]),
  ...grp({ os: "Android 15 · Nothing OS 3.1", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["Glyph Interface", "In-display fingerprint", "Essential Key"] }, [
    ["Nothing Phone (3a)", '6.77" FHD+ flexible AMOLED · 120Hz', "Snapdragon 7s Gen 3", "50MP + 50MP telephoto (2x) + 8MP ultra-wide", "32MP", 5000, 50, "Black, White, Blue"],
    ["Nothing Phone (3a) Pro", '6.77" FHD+ flexible AMOLED · 120Hz', "Snapdragon 7s Gen 3", "50MP + 50MP periscope telephoto (3x) + 8MP ultra-wide", "50MP", 5000, 50, "Black, Grey"],
  ]),
  ...grp({ os: "Android 15 · Nothing OS 3.5", net: N5, sim: DS, conn: conn("7", "5.4", "NFC"), feats: ["Glyph Matrix", "In-display fingerprint", "Essential Key", "IP68 dust & water resistant"] }, [
    ["Nothing Phone (3)", '6.67" 1.5K LTPO AMOLED · 120Hz', "Snapdragon 8s Gen 4", "50MP + 50MP periscope telephoto (3x) + 50MP ultra-wide", "50MP", 5150, 65, "Black, White", ["15W wireless charging"]],
  ]),
  ...grp({ os: "Android 14 · Nothing OS 2.6", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["Essential Key", "Essential Space", "Side fingerprint sensor", "Swappable back panel"] }, [
    ["CMF Phone 1", '6.67" FHD+ Super AMOLED · 120Hz', "MediaTek Dimensity 7300", "50MP + 2MP", "16MP", 5000, 33, "Black, Blue, Light Green, Orange"],
    ["CMF Phone 2 Pro", '6.77" FHD+ Super AMOLED · 120Hz', "MediaTek Dimensity 7300 Pro", "50MP + 50MP telephoto (2x) + 8MP ultra-wide", "16MP", 5000, 33, "Black, White, Light Green, Orange", ["Modular back panel"], { os: "Android 15 · Nothing OS 3.2" }],
  ]),
];
