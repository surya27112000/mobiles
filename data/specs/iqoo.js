import { grp, conn, DS, DS_SD, N5 } from "./helpers";

export const iqoo = [
  ...grp({ os: "Android 14 · Funtouch OS 14", net: N5, sim: DS_SD, conn: conn("5", "5.1"), feats: ["Side fingerprint sensor", "Gaming-focused performance"] }, [
    ["iQOO Z9x 5G", '6.72" FHD+ IPS LCD · 120Hz', "Snapdragon 6 Gen 1", "50MP + 2MP", "8MP", 6000, 44, "Storm Grey, Tornado Green", ["IP64 dust & splash resistant"]],
  ]),
  ...grp({ os: "Android 15 · Funtouch OS 15", net: N5, sim: DS_SD, conn: conn("5", "5.4", "NFC"), feats: ["Side fingerprint sensor", "Gaming-focused performance", "IP64 dust & splash resistant"] }, [
    ["iQOO Z10x 5G", '6.72" FHD+ IPS LCD · 120Hz', "MediaTek Dimensity 7300", "50MP + 2MP", "8MP", 6500, 44, "Ultramarine, Titanium"],
  ]),
  ...grp({ os: "Android 14 · Funtouch OS 14", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "Gaming-focused performance"] }, [
    ["iQOO Z9 5G", '6.67" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7200", "50MP OIS + 2MP", "16MP", 5000, 44, "Brushed Green, Graphene Blue"],
    ["iQOO Z9s 5G", '6.77" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7300", "50MP OIS + 2MP", "16MP", 5500, 44, "Titanium Matte, Onyx Green", ["IP64 dust & splash resistant"]],
    ["iQOO Z9s Pro 5G", '6.77" FHD+ 3D curved AMOLED · 120Hz', "Snapdragon 7 Gen 3", "50MP Sony OIS + 8MP ultra-wide", "16MP", 5500, 80, "Flamboyant Orange, Luxe Marble", ["IP64 dust & splash resistant"]],
  ]),
  ...grp({ os: "Android 15 · Funtouch OS 15", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "Gaming-focused performance"] }, [
    ["iQOO Z10R 5G", '6.77" FHD+ curved AMOLED · 120Hz', "MediaTek Dimensity 7400", "50MP OIS + 8MP ultra-wide", "32MP", 5700, 44, "Aquamarine, Moonstone", ["IP68 / IP69 rated"]],
    ["iQOO Z10 5G", '6.77" FHD+ AMOLED · 120Hz', "Snapdragon 7s Gen 3", "50MP OIS + 2MP", "32MP", 7300, 90, "Stellar Black, Glacier Silver", ["7300 mAh battery"]],
  ]),
  ...grp({ os: "Android 14 · Funtouch OS 14", net: N5, sim: DS, conn: conn("7", "5.4", "NFC · IR blaster"), feats: ["Ultrasonic in-display fingerprint", "Dedicated gaming chip", "Gaming-focused performance"] }, [
    ["iQOO Neo 9 Pro 5G", '6.78" 1.5K LTPO AMOLED · 144Hz', "Snapdragon 8 Gen 2", "50MP OIS + 8MP ultra-wide", "16MP", 5160, 120, "Fiery Red, Conqueror Black", ["Q1 gaming chip"]],
  ]),
  ...grp({ os: "Android 15 · Funtouch OS 15", net: N5, sim: DS, conn: conn("7", "5.4", "NFC · IR blaster"), feats: ["Ultrasonic in-display fingerprint", "Dedicated gaming chip", "IP64 dust & splash resistant"] }, [
    ["iQOO Neo 10R 5G", '6.78" 1.5K AMOLED · 144Hz', "Snapdragon 8s Gen 3", "50MP OIS + 8MP ultra-wide", "32MP", 6400, 80, "Raging Blue, Moonknight Titanium"],
    ["iQOO Neo 10", '6.78" 1.5K AMOLED · 144Hz', "Snapdragon 8s Gen 4", "50MP OIS + 8MP ultra-wide", "32MP", 7000, 120, "Inferno Red, Titanium Chrome", ["7000 mAh battery"]],
  ]),
  ...grp({ os: "Android 14 · Funtouch OS 14", net: N5, sim: DS, conn: conn("7", "5.4", "NFC · IR blaster"), feats: ["Ultrasonic in-display fingerprint", "Flagship performance", "BMW Motorsport design (Legend)"] }, [
    ["iQOO 12", '6.78" 2K LTPO AMOLED · 144Hz', "Snapdragon 8 Gen 3", "50MP OIS + 64MP periscope telephoto + 50MP ultra-wide", "16MP", 5000, 120, "Alpha, Legend"],
  ]),
  ...grp({ os: "Android 15 · Funtouch OS 15", net: N5, sim: DS, conn: conn("7", "5.4", "NFC · IR blaster"), feats: ["Ultrasonic in-display fingerprint", "Flagship performance", "IP68 / IP69 rated"] }, [
    ["iQOO 13", '6.82" 2K LTPO AMOLED · 144Hz', "Snapdragon 8 Elite", "50MP OIS + 50MP telephoto + 50MP ultra-wide", "32MP", 6000, 120, "Legend, Nardo Grey", ["Q2 gaming chip"]],
  ]),
];
