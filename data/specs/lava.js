import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const lava = [
  ...grp({ os: "Android 14 (Go edition) · near-stock", net: N4, sim: DS_SD, conn: conn("5", "5.0"), feats: ["Clean stock Android", "Side fingerprint sensor", "Free doorstep service"] }, [
    ["Lava Yuva Star", '6.75" HD+ IPS LCD · 90Hz', "Unisoc T606", "13MP", "5MP", 5000, 10, "Midnight Black, Aqua Green"],
  ]),
  ...grp({ os: "Android 14 · near-stock", net: N5, sim: DS_SD, conn: conn("5", "5.2"), feats: ["Clean stock Android", "Side fingerprint sensor", "Free doorstep service"] }, [
    ["Lava Yuva 5G", '6.67" HD+ IPS LCD · 90Hz', "Unisoc T750", "50MP", "8MP", 5000, 18, "Mystic Green, Mystic Blue"],
    ["Lava Blaze 2 5G", '6.56" HD+ IPS LCD · 90Hz', "MediaTek Dimensity 6020", "50MP", "8MP", 5000, 18, "Glass Blue, Glass Lavender"],
    ["Lava Blaze Dragon 5G", '6.74" HD+ IPS LCD · 120Hz', "Snapdragon 4 Gen 2", "50MP", "8MP", 5000, 18, "Golden Mist, Midnight Black"],
    ["Lava Blaze Pro 5G", '6.67" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6020", "50MP", "8MP", 5000, 18, "Glass Blue, Glass Lavender"],
  ]),
  ...grp({ os: "Android 14 · near-stock", net: N5, sim: DS_SD, conn: conn("6", "5.3", "NFC"), feats: ["Clean stock Android", "In-display fingerprint", "Free doorstep service"] }, [
    ["Lava Blaze Curve 5G", '6.67" FHD+ curved AMOLED · 120Hz', "MediaTek Dimensity 7050", "64MP Sony OIS + 2MP", "16MP", 5000, 33, "Celestial Blue, Cosmic Black"],
    ["Lava Agni 2 5G", '6.78" FHD+ curved AMOLED · 120Hz', "MediaTek Dimensity 7050", "50MP OIS + 8MP + 2MP", "16MP", 4700, 66, "Glass Blue, Glass Silver", ["Removable battery"]],
    ["Lava Agni 3 5G", '6.78" 1.5K AMOLED · 120Hz (+1.74" rear AMOLED)', "MediaTek Dimensity 7300X", "50MP OIS + 8MP telephoto + 8MP ultra-wide", "16MP", 5000, 66, "Heather Glass, Pristine Glass", ["Secondary rear display", "Customisable action key"]],
  ]),
  ...grp({ os: "Feature-phone OS", net: "4G VoLTE", sim: "Dual SIM (Nano + Nano)", conn: "Bluetooth 5.0 · USB Type-C", feats: ["Torch", "Wireless FM radio", "Long standby time"] }, [
    ["Lava A1 Josh", '1.8" QQVGA display', "Unisoc feature-phone platform", "No camera", "No camera", 1000, "Micro-USB (5V)", "Black, Blue", ["Removable battery"], { net: "2G GSM", conn: "Bluetooth 3.0 · Micro-USB", memory: "Expandable via microSD up to 32GB" }],
    ["Lava A3", '1.8" QQVGA display', "Unisoc feature-phone platform", "VGA", "No camera", 1000, "Micro-USB (5V)", "Black, Blue, Red", ["Removable battery", "Call recorder"], { net: "2G GSM", conn: "Bluetooth 3.0 · Micro-USB", memory: "Expandable via microSD up to 32GB" }],
    ["Lava A5", '1.8" QQVGA display', "Unisoc feature-phone platform", "VGA", "No camera", 1200, "Micro-USB (5V)", "Black, Blue", ["Removable battery", "Auto call recording"], { net: "2G GSM", conn: "Bluetooth 3.0 · Micro-USB", memory: "Expandable via microSD up to 32GB" }],
  ]),
];
