import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const itel = [
  ...grp({ os: "Android 13 (Go edition) · itel OS", net: N4, sim: DS_SD, conn: conn("5", "5.0", "", "Micro-USB"), feats: ["Face unlock", "3.5mm headphone jack"] }, [
    ["itel A60s", '6.6" HD+ IPS LCD · 90Hz', "Unisoc SC9863A", "8MP", "5MP", 5000, 10, "Starry Black, Azure Blue", ["Side fingerprint sensor"]],
    ["itel A70", '6.6" HD+ IPS LCD · 90Hz', "Unisoc T603", "13MP", "8MP", 5000, 10, "Brilliant Gold, Field Green, Azure Blue", ["Side fingerprint sensor", "Dynamic Bar"]],
  ]),
  ...grp({ os: "Android 14 · itel OS 14", net: N4, sim: DS_SD, conn: conn("5", "5.0"), feats: ["Side fingerprint sensor", "Dynamic Bar"] }, [
    ["itel P40", '6.6" HD+ IPS LCD · 90Hz', "Unisoc T606", "13MP", "8MP", 6000, 18, "Force Black, Dawn Blue, Shine Gold", ["6000 mAh battery", "Reverse charging"]],
    ["itel S23", '6.6" HD+ IPS LCD · 90Hz', "Unisoc T616", "50MP", "8MP", 5000, 18, "Starry Black, Lake Cyan, Mystery White"],
    ["itel S24", '6.6" HD+ IPS LCD · 90Hz', "Unisoc T620", "50MP", "32MP", 5000, 18, "Dawn White, Dusk Blue, Starry Black", ["Selfie flash"]],
  ]),
  ...grp({ os: "Android 14 · itel OS 14", net: N5, sim: DS_SD, conn: conn("5", "5.2", "NFC"), feats: ["Side fingerprint sensor", "Dynamic Bar"] }, [
    ["itel P55 5G", '6.6" HD+ IPS LCD · 90Hz', "MediaTek Dimensity 6080", "50MP", "8MP", 5000, 18, "Brilliant Black, Mint Green"],
    ["itel P55+ 5G", '6.6" FHD+ IPS LCD · 90Hz', "MediaTek Dimensity 6080", "50MP", "8MP", 5000, 45, "Brilliant Black, Mint Green", ["45W fast charging"]],
  ]),
  ...grp({ os: "Feature-phone OS", net: "2G GSM", sim: "Dual SIM (Mini + Mini)", conn: "Bluetooth 3.0 · Micro-USB", feats: ["Torch", "Wireless FM radio", "Auto call recording"] }, [
    ["itel Power 110", '1.77" QQVGA display', "Feature-phone platform", "No camera", "No camera", 2500, "Micro-USB (5V)", "Black, Blue", ["Long-lasting 2500 mAh battery"], { memory: "Expandable via microSD up to 32GB" }],
    ["itel Magic X Play", '2.0" QVGA display', "Feature-phone platform", "VGA", "No camera", 1000, "Micro-USB (5V)", "Black, Blue", ["Built-in games", "Bluetooth calling"], { memory: "Expandable via microSD up to 32GB" }],
    ["itel Super Guru 4G", '2.4" QVGA display', "Unisoc T107", "VGA", "No camera", 1900, "Type-C (5V)", "Black, Blue, Green", ["4G VoLTE", "UPI-ready"], { net: "4G VoLTE", conn: "Bluetooth 5.0 · USB Type-C", memory: "Expandable via microSD up to 64GB" }],
    ["itel Magic 2 4G", '2.4" QVGA display', "Unisoc T107", "VGA", "No camera", 1900, "Type-C (5V)", "Black, Blue, Purple", ["4G VoLTE", "Voice commands"], { net: "4G VoLTE", conn: "Bluetooth 5.0 · USB Type-C", memory: "Expandable via microSD up to 64GB" }],
  ]),
];
