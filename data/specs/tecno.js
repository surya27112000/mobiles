import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

export const tecno = [
  ...grp({ os: "Android 14 (Go edition) · HiOS 14", net: N4, sim: DS_SD, conn: conn("5", "5.0"), feats: ["Side fingerprint sensor", "Dynamic Port"] }, [
    ["Tecno Spark Go 1", '6.67" HD+ IPS LCD · 90Hz', "Unisoc T615", "13MP", "8MP", 5000, 15, "Startrail Black, Glittery White", ["IP54 dust & splash resistant", "3.5mm headphone jack"]],
  ]),
  ...grp({ os: "Android 13 · HiOS 13", net: N4, sim: DS_SD, conn: conn("5", "5.0"), feats: ["Side fingerprint sensor", "Dynamic Port"] }, [
    ["Tecno Spark 20", '6.56" HD+ IPS LCD · 90Hz', "MediaTek Helio G85", "50MP", "32MP", 5000, 18, "Gravity Black, Magic Skin Green, Neon Gold"],
  ]),
  ...grp({ os: "Android 14 · HiOS 14", net: N4, sim: DS_SD, conn: conn("5", "5.2", "NFC"), feats: ["Side fingerprint sensor", "Dynamic Port"] }, [
    ["Tecno Spark 20 Pro+", '6.78" FHD+ AMOLED · 120Hz', "MediaTek Helio G99", "108MP", "32MP", 5000, 33, "Moonlit Black, Lunar Frost, Glacier Green", ["Curved AMOLED display"]],
  ]),
  ...grp({ os: "Android 14 · HiOS 14", net: N5, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor", "Dynamic Port"] }, [
    ["Tecno Spark 30 5G", '6.67" HD+ IPS LCD · 120Hz', "MediaTek Dimensity 6300", "48MP", "13MP", 5000, 18, "Orbit Black, Orbit Blue"],
    ["Tecno Pova 6 Neo 5G", '6.67" FHD+ IPS LCD · 120Hz', "MediaTek Dimensity 6080", "108MP", "8MP", 5000, 18, "Aurora Cloud, Midnight Shadow", ["Ella AI assistant"]],
    ["Tecno Pova 7 5G", '6.78" FHD+ IPS LCD · 144Hz', "MediaTek Dimensity 6300", "50MP", "13MP", 7000, 45, "Magic Silver, Neon Cyan, Geek Black", ["7000 mAh battery"]],
  ]),
  ...grp({ os: "Android 14 · HiOS 14", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint", "Curved AMOLED display", "Dynamic Port"] }, [
    ["Tecno Pova 6 Pro 5G", '6.78" FHD+ curved AMOLED · 120Hz', "MediaTek Dimensity 6080", "108MP + 2MP", "32MP", 6000, 70, "Comet Green, Meteorite Grey", ["Light-up back design"]],
    ["Tecno Pova 7 Pro 5G", '6.78" FHD+ curved AMOLED · 144Hz', "MediaTek Dimensity 7300 Ultimate", "50MP Sony OIS + 2MP", "13MP", 6000, 45, "Neon Cyan, Geek Black, Magic Silver", ["Arc Interface lighting"]],
    ["Tecno Camon 30 5G", '6.78" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 7020", "50MP OIS + 2MP", "50MP", 5000, 70, "Basalt Black, Haze Green"],
    ["Tecno Camon 30 Pro 5G", '6.78" FHD+ curved AMOLED · 144Hz', "MediaTek Dimensity 8200 Ultimate", "50MP OIS + 50MP periscope telephoto", "50MP", 5000, 70, "Alpine Snow, Basalt Black", ["Flagship-grade portrait camera"]],
    ["Tecno Phantom X2 5G", '6.8" FHD+ curved AMOLED · 120Hz', "MediaTek Dimensity 9000", "50MP + 13MP telephoto + 2MP", "32MP", 5160, 45, "Stardust Grey, Moonlight Silver", ["Premium vegan leather finish"]],
  ]),
];
