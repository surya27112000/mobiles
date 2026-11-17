import { grp, conn, DS, N5 } from "./helpers";

export const oneplus = [
  ...grp({ os: "Android 14 · OxygenOS 14", net: N5, sim: DS, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint", "Alert Slider"] }, [
    ["OnePlus Nord CE4 Lite 5G", '6.67" FHD+ AMOLED · 120Hz', "Snapdragon 695", "50MP + 2MP", "16MP", 5500, 80, "Super Silver, Mega Blue", ["Side-mounted stereo speakers"]],
    ["OnePlus Nord CE4", '6.7" FHD+ AMOLED · 120Hz', "Snapdragon 7 Gen 3", "50MP OIS + 8MP ultra-wide", "16MP", 5500, 100, "Celadon Marble, Dark Chrome", ["IR blaster"]],
    ["OnePlus Nord 4", '6.74" 1.5K AMOLED · 120Hz', "Snapdragon 7+ Gen 3", "50MP OIS + 8MP ultra-wide", "16MP", 5500, 100, "Mercurial Silver, Obsidian Midnight, Oasis Green", ["Full metal unibody", "Gorilla Glass 5"]],
  ]),
  ...grp({ os: "Android 15 · OxygenOS 15", net: N5, sim: DS, conn: conn("6", "5.4", "NFC"), feats: ["In-display fingerprint", "Plus Key"] }, [
    ["OnePlus Nord CE5", '6.77" FHD+ AMOLED · 120Hz', "MediaTek Dimensity 8350 Apex", "50MP + 8MP ultra-wide", "16MP", 7100, 80, "Marble Mist, Nexus Blue, Black Infinity", ["7100 mAh battery"]],
    ["OnePlus Nord 5", '6.83" 1.5K AMOLED · 144Hz', "Snapdragon 8s Gen 3", "50MP OIS + 8MP ultra-wide", "50MP", 6800, 80, "Marble Sands, Phantom Grey, Dry Ice", ["IP65 dust & water resistant"]],
  ]),
  ...grp({ os: "Android 14 · OxygenOS 14", net: N5, sim: DS, conn: conn("7", "5.4", "NFC · IR blaster"), feats: ["In-display fingerprint", "Alert Slider", "Flagship performance"] }, [
    ["OnePlus 12R", '6.78" 1.5K LTPO AMOLED · 120Hz', "Snapdragon 8 Gen 2", "50MP OIS + 8MP ultra-wide + 2MP macro", "16MP", 5500, 100, "Cool Blue, Iron Gray"],
    ["OnePlus 12", '6.82" QHD+ LTPO AMOLED · 120Hz', "Snapdragon 8 Gen 3", "50MP + 48MP ultra-wide + 64MP periscope telephoto", "32MP", 5400, 100, "Silky Black, Flowy Emerald", ["Hasselblad camera tuning", "IP65 rated", "50W wireless charging"]],
  ]),
  ...grp({ os: "Android 15 · OxygenOS 15", net: N5, sim: DS, conn: conn("7", "5.4", "NFC · IR blaster"), feats: ["In-display fingerprint", "Plus Key", "Flagship performance"] }, [
    ["OnePlus 13R", '6.78" 1.5K LTPO AMOLED · 120Hz', "Snapdragon 8 Gen 3", "50MP OIS + 50MP telephoto + 8MP ultra-wide", "16MP", 6000, 80, "Nebula Noir, Astral Trail", ["IP65 rated"]],
    ["OnePlus 13s", '6.32" FHD+ LTPO AMOLED · 120Hz', "Snapdragon 8 Elite", "50MP + 50MP telephoto", "32MP", 5850, 80, "Black Velvet, Green Silk, Pink Satin", ["Compact flagship", "IP65 rated"]],
    ["OnePlus 13", '6.82" QHD+ LTPO AMOLED · 120Hz', "Snapdragon 8 Elite", "50MP + 50MP periscope telephoto + 50MP ultra-wide", "32MP", 6000, 100, "Black Eclipse, Arctic Dawn, Midnight Ocean", ["Hasselblad camera tuning", "IP68 / IP69 rated", "50W wireless charging"]],
  ]),
];
