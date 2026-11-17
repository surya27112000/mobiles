import { grp, conn } from "./helpers";

const G = { net: "5G · 4G LTE · VoLTE", sim: "Nano-SIM + eSIM", feats: ["Pixel camera software", "IP68 dust & water resistant", "Titan M2 security", "In-display fingerprint"] };

export const google = [
  ...grp({ ...G, os: "Android 15 · Pixel UI", conn: conn("6E", "5.3", "NFC"), feats: [...G.feats, "7 years of OS & security updates", "Gemini AI features"] }, [
    ["Pixel 9a", '6.3" FHD+ pOLED · 120Hz', "Google Tensor G4", "48MP + 13MP ultra-wide", "13MP", 5100, 23, "Obsidian, Porcelain, Iris, Peony", [], { ram: "8 GB" }],
  ]),
  ...grp({ ...G, os: "Android 14 · Pixel UI", conn: conn("6E", "5.3", "NFC"), feats: [...G.feats, "7 years of OS & security updates"] }, [
    ["Pixel 8a", '6.1" FHD+ OLED · 120Hz', "Google Tensor G3", "64MP + 13MP ultra-wide", "13MP", 4492, 18, "Obsidian, Porcelain, Bay, Aloe", [], { ram: "8 GB" }],
  ]),
  ...grp({ ...G, os: "Android 16 · Pixel UI", conn: conn("7", "6.0", "NFC · UWB · Qi2 Pixelsnap"), feats: [...G.feats, "7 years of OS & security updates", "Gemini AI features", "Magic Cue"] }, [
    ["Pixel 10", '6.3" FHD+ Actua OLED · 120Hz', "Google Tensor G5", "48MP + 13MP ultra-wide + 10.8MP telephoto (5x)", "10.5MP", 4970, 29, "Obsidian, Frost, Indigo, Lemongrass", ["Qi2 wireless charging 15W"], { ram: "12 GB" }],
    ["Pixel 10 Pro", '6.3" LTPO Super Actua OLED · 120Hz', "Google Tensor G5", "50MP + 48MP ultra-wide + 48MP telephoto (5x)", "42MP", 4870, 30, "Obsidian, Porcelain, Moonstone, Jade", ["Qi2 wireless charging 15W", "Pro Res Zoom"], { ram: "16 GB" }],
    ["Pixel 10 Pro XL", '6.8" LTPO Super Actua OLED · 120Hz', "Google Tensor G5", "50MP + 48MP ultra-wide + 48MP telephoto (5x)", "42MP", 5200, 45, "Obsidian, Porcelain, Moonstone, Jade", ["Qi2 wireless charging 25W", "Pro Res Zoom"], { ram: "16 GB" }],
    ["Pixel 10 Pro Fold", '8.0" foldable LTPO OLED · 120Hz (6.4" cover)', "Google Tensor G5", "48MP + 10.5MP ultra-wide + 10.8MP telephoto (5x)", "10MP + 10MP", 5015, 30, "Moonstone, Jade", ["IP68 water & dust rated foldable", "Qi2 wireless charging"], { ram: "16 GB" }],
  ]),
  ...grp({ ...G, os: "Android 15 · Pixel UI", conn: conn("7", "5.3", "NFC · UWB"), feats: [...G.feats, "7 years of OS & security updates", "Gemini AI features"] }, [
    ["Pixel 9", '6.3" FHD+ Actua OLED · 120Hz', "Google Tensor G4", "50MP + 48MP ultra-wide", "10.5MP", 4700, 27, "Obsidian, Porcelain, Wintergreen, Peony", ["15W wireless charging"], { ram: "12 GB" }],
    ["Pixel 9 Pro", '6.3" LTPO Super Actua OLED · 120Hz', "Google Tensor G4", "50MP + 48MP ultra-wide + 48MP telephoto (5x)", "42MP", 4700, 27, "Obsidian, Porcelain, Hazel, Rose Quartz", ["21W wireless charging"], { ram: "16 GB" }],
    ["Pixel 9 Pro XL", '6.8" LTPO Super Actua OLED · 120Hz', "Google Tensor G4", "50MP + 48MP ultra-wide + 48MP telephoto (5x)", "42MP", 5060, 37, "Obsidian, Porcelain, Hazel, Rose Quartz", ["21W wireless charging"], { ram: "16 GB" }],
  ]),
];
