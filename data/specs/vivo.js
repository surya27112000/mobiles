import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const vivo = [
  ...grp({ os: "Android 14 · Funtouch OS 14", net: N4, sim: DS_SD, conn: conn("5", "5.2"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Vivo Y18", '6.56" HD+ IPS LCD · 90Hz', "MediaTek Helio G85", "13MP + 0.08MP", "5MP", 5000, 15, "Gem Green, Space Black"],
  ]),
  ...grp({ os: "Android 14 · Funtouch OS 14", net: N5, sim: DS_SD, conn: conn("5", "5.1"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Vivo Y28 5G", '6.56" HD+ IPS LCD · 90Hz', "MediaTek Dimensity 6020", "50MP + 2MP", "8MP", 5000, 15, "Crystal Purple, Glitter Aqua"],
  ]),
  ...grp({ os: "Android 15 · Funtouch OS 15", net: N5, sim: DS_SD, conn: conn("5", "5.4", "NFC"), feats: ["Side fingerprint sensor", "Military-grade shock resistance", "IP64 dust & splash resistant"] }, [
    ["Vivo Y29 5G", '6.68" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "50MP + 0.08MP", "8MP", 5500, 44, "Titanium Gold, Diamond Black, Glacier Blue"],
    ["Vivo Y39 5G", '6.68" HD+ IPS LCD · 120Hz', "Snapdragon 4 Gen 2", "50MP + 2MP", "8MP", 6500, 44, "Lotus Purple, Ocean Blue", ["6500 mAh battery"]],
  ]),
  ...grp({ os: "Android 14 · Funtouch OS 14", net: N5, sim: DS_SD, conn: conn("5", "5.1"), feats: ["Side fingerprint sensor"] }, [
    ["Vivo Y58 5G", '6.72" FHD+ IPS LCD · 120Hz', "Snapdragon 4 Gen 2", "50MP + 2MP", "8MP", 6000, 44, "Himalayan Blue, Sundarbans Green", ["IP64 dust & splash resistant"]],
    ["Vivo Y200e 5G", '6.67" FHD+ AMOLED · 120Hz', "Snapdragon 4 Gen 2", "50MP + 2MP", "16MP", 5000, 44, "Saffron Delight, Black Diamond", ["Aura light flash"]],
  ]),
  ...grp({ os: "Android 14 · Funtouch OS 14", net: N5, sim: DS_SD, conn: conn("5", "5.1", "NFC"), feats: ["Side fingerprint sensor"] }, [
    ["Vivo T3x 5G", '6.72" FHD+ IPS LCD · 120Hz', "Snapdragon 6 Gen 1", "50MP + 2MP", "8MP", 6000, 44, "Celestial Green, Crimson Bliss"],
    ["Vivo T3 5G", '6.67" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7200", "50MP Sony OIS + 2MP", "16MP", 5000, 44, "Cosmic Blue, Crystal Flake", ["In-display fingerprint"]],
    ["Vivo T3 Pro 5G", '6.77" FHD+ curved AMOLED · 120Hz', "Snapdragon 7 Gen 3", "50MP Sony IMX882 OIS + 8MP", "16MP", 5500, 80, "Emerald Green, Sandstone Orange", ["In-display fingerprint", "IP64 dust & splash resistant"]],
  ]),
  ...grp({ os: "Android 15 · Funtouch OS 15", net: N5, sim: DS_SD, conn: conn("6", "5.4", "NFC"), feats: ["Military-grade shock resistance"] }, [
    ["Vivo T4x 5G", '6.72" FHD+ IPS LCD · 120Hz', "MediaTek Dimensity 7300", "50MP + 2MP", "8MP", 6500, 44, "Pronto Purple, Marine Blue", ["IP64 dust & splash resistant", "Side fingerprint sensor"]],
    ["Vivo T4 5G", '6.77" FHD+ AMOLED · 120Hz', "Snapdragon 7s Gen 3", "50MP Sony OIS + 2MP", "32MP", 7300, 90, "Emerald Blaze, Phantom Grey", ["In-display fingerprint", "7300 mAh battery"]],
  ]),
  ...grp({ os: "Android 14 · Funtouch OS 14", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "Aura light portrait flash"] }, [
    ["Vivo V40e", '6.77" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7300", "50MP OIS + 8MP ultra-wide", "50MP", 5500, 80, "Royal Bronze, Mint Green", ["IP64 dust & splash resistant"]],
    ["Vivo V40", '6.78" 1.5K curved AMOLED · 120Hz', "Snapdragon 7 Gen 3", "50MP OIS + 50MP ultra-wide", "50MP", 5500, 80, "Ganges Blue, Lotus Purple, Titanium Grey", ["ZEISS-tuned cameras", "IP68 dust & water resistant"]],
  ]),
  ...grp({ os: "Android 15 · Funtouch OS 15", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "Aura light portrait flash"] }, [
    ["Vivo V50e", '6.77" FHD+ curved AMOLED · 120Hz', "MediaTek Dimensity 7300", "50MP OIS + 8MP ultra-wide", "50MP", 5600, 90, "Pearl White, Sapphire Blue", ["IP68 / IP69 rated"]],
    ["Vivo V50", '6.77" 1.5K curved AMOLED · 120Hz', "Snapdragon 7 Gen 3", "50MP OIS + 50MP ultra-wide", "50MP", 6000, 90, "Rose Red, Starry Blue, Titanium Grey", ["ZEISS-tuned cameras", "IP68 / IP69 rated"]],
  ]),
  ...grp({ os: "Android 15 · Funtouch OS 15", net: N5, sim: DS, conn: conn("7", "5.4", "NFC · IR blaster"), feats: ["ZEISS-tuned cameras", "Ultrasonic in-display fingerprint", "IP68 / IP69 rated"] }, [
    ["Vivo X200 FE", '6.31" 1.5K AMOLED · 120Hz', "MediaTek Dimensity 9300+", "50MP + 50MP telephoto + 8MP ultra-wide", "50MP", 6500, 90, "Amber Yellow, Luxe Grey, Frost Blue", ["Compact flagship"]],
    ["Vivo X200", '6.67" 1.5K LTPS AMOLED · 120Hz', "MediaTek Dimensity 9400", "50MP + 50MP periscope telephoto + 50MP ultra-wide", "32MP", 5800, 90, "Cosmos Black, Natural Green", ["Wireless charging 40W"]],
    ["Vivo X200 Pro", '6.78" 1.5K LTPO AMOLED · 120Hz', "MediaTek Dimensity 9400", "50MP + 200MP periscope telephoto + 50MP ultra-wide", "32MP", 6000, 90, "Cosmos Black, Titanium Grey", ["Wireless charging 30W"]],
  ]),
];
