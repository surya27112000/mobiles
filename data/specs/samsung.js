import { grp, conn, DS, DS_SD, N4, N5 } from "./helpers";

const ES = "Nano-SIM + eSIM";

export const samsung = [
  // ---- Galaxy A ----
  ...grp({ os: "Android 14 · One UI 6", net: N4, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Galaxy A06", '6.7" HD+ PLS LCD · 60Hz', "MediaTek Helio G85", "50MP + 2MP", "8MP", 5000, 25, "Black, Gold, Light Blue"],
  ]),
  ...grp({ os: "Android 14 · One UI 6", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor", "Super AMOLED display"] }, [
    ["Galaxy A15 5G", '6.5" FHD+ Super AMOLED · 90Hz', "MediaTek Dimensity 6100+", "50MP + 5MP + 2MP", "13MP", 5000, 25, "Blue Black, Blue, Light Blue"],
  ]),
  ...grp({ os: "Android 14 · One UI 6.1", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor", "6 generations of OS updates"] }, [
    ["Galaxy A16 5G", '6.7" FHD+ Super AMOLED · 90Hz', "MediaTek Dimensity 6300", "50MP + 5MP + 2MP", "13MP", 5000, 25, "Blue Black, Light Green, Gold", ["IP54 dust & splash resistant"]],
  ]),
  ...grp({ os: "Android 15 · One UI 7", net: N5, sim: DS_SD, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint", "6 generations of OS updates", "IP67 dust & water resistant"] }, [
    ["Galaxy A26 5G", '6.7" FHD+ Super AMOLED · 120Hz', "Samsung Exynos 1380", "50MP OIS + 8MP + 2MP", "13MP", 5000, 25, "Black, White, Mint, Peach Pink"],
    ["Galaxy A36 5G", '6.7" FHD+ Super AMOLED · 120Hz', "Snapdragon 6 Gen 3", "50MP OIS + 8MP + 5MP", "12MP", 5000, 45, "Awesome Black, Awesome Lavender, Awesome Lime", ["Gorilla Glass Victus+"]],
    ["Galaxy A56 5G", '6.7" FHD+ Super AMOLED · 120Hz', "Samsung Exynos 1580", "50MP OIS + 12MP ultra-wide + 5MP macro", "12MP", 5000, 45, "Awesome Graphite, Awesome Olive, Awesome Lightgray", ["Gorilla Glass Victus+"]],
  ]),
  // ---- Galaxy M ----
  ...grp({ os: "Android 14 · One UI 6", net: N4, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Galaxy M05", '6.7" HD+ PLS LCD · 60Hz', "MediaTek Helio G85", "50MP + 2MP", "8MP", 5000, 25, "Mint Green"],
  ]),
  ...grp({ os: "Android 14 · One UI 6", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor", "Super AMOLED display"] }, [
    ["Galaxy M15 5G", '6.5" FHD+ Super AMOLED · 90Hz', "MediaTek Dimensity 6100+", "50MP + 5MP + 2MP", "13MP", 6000, 25, "Celestial Blue, Stone Grey, Prism Blue", ["6000 mAh battery"]],
    ["Galaxy M16 5G", '6.7" FHD+ Super AMOLED · 90Hz', "MediaTek Dimensity 6300", "50MP + 5MP + 2MP", "13MP", 5000, 25, "Mint Green, Thunder Gray", ["6 generations of OS updates"]],
  ]),
  ...grp({ os: "Android 14 · One UI 6.1", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["In-display fingerprint", "Super AMOLED display"] }, [
    ["Galaxy M35 5G", '6.6" FHD+ Super AMOLED · 120Hz', "Samsung Exynos 1380", "50MP + 8MP + 2MP", "13MP", 6000, 25, "Moonlight Blue, Daybreak Blue, Thunder Grey", ["6000 mAh battery"]],
  ]),
  ...grp({ os: "Android 15 · One UI 7", net: N5, sim: DS_SD, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint", "6 generations of OS updates"] }, [
    ["Galaxy M36 5G", '6.7" FHD+ Super AMOLED · 120Hz', "Samsung Exynos 1380", "50MP + 8MP + 2MP", "12MP", 5000, 25, "Orange Haze, Serene Green, Velvet Black", ["Gorilla Glass Victus+"]],
  ]),
  // ---- Galaxy F ----
  ...grp({ os: "Android 14 · One UI 6", net: N4, sim: DS_SD, conn: conn("5", "5.3"), feats: ["Side fingerprint sensor", "3.5mm headphone jack"] }, [
    ["Galaxy F05", '6.7" HD+ PLS LCD · 60Hz', "MediaTek Helio G85", "50MP + 2MP", "8MP", 5000, 25, "Twilight Blue, Mint Green"],
  ]),
  ...grp({ os: "Android 14 · One UI 6", net: N5, sim: DS_SD, conn: conn("5", "5.3", "NFC"), feats: ["Side fingerprint sensor", "Super AMOLED display"] }, [
    ["Galaxy F15 5G", '6.5" FHD+ Super AMOLED · 90Hz', "MediaTek Dimensity 6100+", "50MP + 5MP + 2MP", "13MP", 6000, 25, "Jazzy Green, Groovy Violet, Ash Black"],
    ["Galaxy F16 5G", '6.7" FHD+ Super AMOLED · 90Hz', "MediaTek Dimensity 6300", "50MP + 5MP + 2MP", "13MP", 5000, 25, "Glam Green, Blingy Black, Vibing Blue"],
  ]),
  ...grp({ os: "Android 15 · One UI 7", net: N5, sim: DS_SD, conn: conn("6", "5.3", "NFC"), feats: ["In-display fingerprint", "6 generations of OS updates"] }, [
    ["Galaxy F36 5G", '6.7" FHD+ Super AMOLED · 120Hz', "Samsung Exynos 1380", "50MP + 8MP + 2MP", "13MP", 5000, 25, "Coral Red, Luxe Violet, Onyx Black"],
    ["Galaxy F55 5G", '6.7" FHD+ Super AMOLED+ · 120Hz', "Snapdragon 7 Gen 1", "50MP OIS + 8MP + 2MP", "50MP", 5000, 45, "Apricot Crush, Raisin Purple", ["Vegan leather back"]],
  ]),
  // ---- Galaxy S ----
  ...grp({ os: "Android 14 · One UI 6.1", net: N5, sim: DS, conn: conn("6E", "5.3", "NFC · UWB"), feats: ["Galaxy AI features", "IP68 dust & water resistant", "Ultrasonic in-display fingerprint", "7 generations of OS updates"] }, [
    ["Galaxy S24 FE", '6.7" FHD+ Dynamic AMOLED 2X · 120Hz', "Samsung Exynos 2400e", "50MP + 12MP ultra-wide + 8MP telephoto", "10MP", 4700, 25, "Blue, Graphite, Gray, Mint, Yellow", ["15W wireless charging"]],
  ]),
  ...grp({ os: "Android 15 · One UI 7", net: N5, sim: `${ES} · or dual eSIM`, conn: conn("7", "5.4", "NFC · UWB"), feats: ["Galaxy AI features", "IP68 dust & water resistant", "Ultrasonic in-display fingerprint", "7 generations of OS updates"] }, [
    ["Galaxy S25", '6.2" FHD+ Dynamic AMOLED 2X · 120Hz', "Snapdragon 8 Elite for Galaxy", "50MP + 12MP ultra-wide + 10MP telephoto", "12MP", 4000, 25, "Icyblue, Mint, Navy, Silver Shadow", ["15W wireless charging"]],
    ["Galaxy S25 Edge", '6.7" QHD+ Dynamic AMOLED 2X · 120Hz', "Snapdragon 8 Elite for Galaxy", "200MP + 12MP ultra-wide", "12MP", 3900, 25, "Titanium Silver, Titanium Jetblack, Titanium Icyblue", ["Ultra-slim 5.8mm titanium frame"]],
    ["Galaxy S25 Ultra", '6.9" QHD+ Dynamic AMOLED 2X · 120Hz', "Snapdragon 8 Elite for Galaxy", "200MP + 50MP ultra-wide + 50MP periscope + 10MP telephoto", "12MP", 5000, 45, "Titanium Silverblue, Titanium Black, Titanium Whitesilver, Titanium Gray", ["Built-in S Pen", "Titanium frame"]],
  ]),
  // ---- Galaxy Z ----
  ...grp({ os: "Android 14 · One UI 6.1.1", net: N5, sim: `${ES} · or dual eSIM`, conn: conn("6E", "5.3", "NFC · UWB"), feats: ["Galaxy AI features", "IPX8 water resistant", "Foldable Dynamic AMOLED 2X"] }, [
    ["Galaxy Z Flip6", '6.7" FHD+ foldable AMOLED · 120Hz (3.4" cover)', "Snapdragon 8 Gen 3 for Galaxy", "50MP + 12MP ultra-wide", "10MP", 4000, 25, "Silver Shadow, Yellow, Blue, Mint", ["Flex Mode"]],
    ["Galaxy Z Fold6", '7.6" QXGA+ foldable AMOLED · 120Hz (6.3" cover)', "Snapdragon 8 Gen 3 for Galaxy", "50MP + 12MP ultra-wide + 10MP telephoto", "10MP + 4MP under-display", 4400, 25, "Silver Shadow, Pink, Navy", ["S Pen support"]],
  ]),
  ...grp({ os: "Android 16 · One UI 8", net: N5, sim: `${ES} · or dual eSIM`, conn: conn("7", "5.4", "NFC · UWB"), feats: ["Galaxy AI features", "IP48 dust & water resistant", "Foldable Dynamic AMOLED 2X"] }, [
    ["Galaxy Z Flip7", '6.9" FHD+ foldable AMOLED · 120Hz (4.1" cover)', "Samsung Exynos 2500", "50MP + 12MP ultra-wide", "10MP", 4300, 25, "Blue Shadow, Jet Black, Coral Red, Mint", ["Full-width Flex Window cover"]],
    ["Galaxy Z Fold7", '8.0" foldable AMOLED · 120Hz (6.5" cover)', "Snapdragon 8 Elite for Galaxy", "200MP + 12MP ultra-wide + 10MP telephoto", "10MP + 10MP", 4400, 25, "Blue Shadow, Silver Shadow, Jet Black, Mint", ["Ultra-thin foldable design"]],
  ]),
  // ---- Guru keypads ----
  ...grp({ os: "Samsung feature-phone OS", net: "2G GSM", sim: "Dual SIM (Mini + Mini)", conn: "Bluetooth 3.0 · Micro-USB", feats: ["Torch", "Wireless FM radio", "Long standby time"] }, [
    ["Samsung Guru FM Plus", '1.8" QQVGA display', "Feature-phone platform", "No camera", "No camera", 1000, "Micro-USB (5V)", "Black, Blue", ["Removable battery"], { memory: "Expandable via microSD up to 16GB" }],
    ["Samsung Guru E1200", '1.77" QQVGA display', "Feature-phone platform", "No camera", "No camera", 800, "Micro-USB (5V)", "Black, Blue", ["Removable battery"], { memory: "Expandable via microSD up to 16GB" }],
    ["Samsung Keystone 3", '1.77" QQVGA display', "Feature-phone platform", "No camera", "No camera", 1000, "Micro-USB (5V)", "Black, Dark Blue", ["Removable battery", "Loud speaker"], { memory: "Expandable via microSD up to 16GB" }],
    ["Samsung Guru Music 2", '2.0" QVGA display', "Feature-phone platform", "VGA", "No camera", 1000, "Micro-USB (5V)", "Black, Blue, Red", ["Dedicated music keys", "MP3 player"], { memory: "Expandable via microSD up to 32GB" }],
  ]),
];
