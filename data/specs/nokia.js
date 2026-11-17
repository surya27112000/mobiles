import { grp } from "./helpers";

const K2 = { os: "Nokia Series 30+", net: "2G GSM", sim: "Dual SIM (Mini + Mini)", conn: "Bluetooth 5.0 · USB Type-C", feats: ["Torch", "Wireless FM radio", "Snake game"] };
const K4 = { ...K2, net: "4G VoLTE", feats: ["Torch", "Wireless FM radio", "VoLTE HD calls", "Snake game"] };

export const nokia = [
  ...grp(K2, [
    ["Nokia 105 Classic", '1.8" QQVGA display', "Unisoc SC6531E", "No camera", "No camera", 1020, "Micro-USB (5V)", "Charcoal, Blue, Cyan", ["Up to 18 days standby"], { sim: "Single SIM (Mini)", conn: "Micro-USB (no Bluetooth)", memory: "No microSD slot" }],
    ["Nokia 150", '2.4" QVGA display', "Unisoc SC6531E", "VGA", "No camera", 1020, "Micro-USB (5V)", "Black, Cyan, Red", ["MP3 player"], { conn: "Bluetooth 3.0 · Micro-USB", memory: "Expandable via microSD up to 32GB" }],
  ]),
  ...grp(K4, [
    ["Nokia 106 4G", '1.8" QQVGA display', "Unisoc T107", "No camera", "No camera", 1450, "Micro-USB (5V)", "Charcoal, Light Blue", ["Long standby"], { memory: "Expandable via microSD up to 32GB" }],
    ["Nokia 110 4G", '1.8" QQVGA display', "Unisoc T107", "0.3MP VGA", "No camera", 1020, "Micro-USB (5V)", "Black, Blue, Yellow", ["Rear camera with flash"], { memory: "Expandable via microSD up to 32GB" }],
    ["Nokia 220 4G", '2.8" QVGA display', "Unisoc T107", "0.3MP VGA", "No camera", 1200, "Micro-USB (5V)", "Black, Blue, Charcoal", ["Large 2.8-inch screen"], { memory: "Expandable via microSD up to 32GB" }],
    ["Nokia 225 4G", '2.4" QVGA display', "Unisoc T107", "0.3MP VGA", "No camera", 1150, "Micro-USB (5V)", "Black, Blue, Dark Grey", ["Slim body"], { memory: "Expandable via microSD up to 32GB" }],
    ["Nokia 235 4G", '2.8" QVGA display', "Unisoc T107", "2MP", "No camera", 1450, "Micro-USB (5V)", "Black, Blue, Dark Grey", ["2MP camera with flash"], { memory: "Expandable via microSD up to 32GB" }],
    ["Nokia 3210 4G", '2.4" QVGA display', "Unisoc T107", "2MP", "No camera", 1450, "USB Type-C (5V)", "Y2K Gold, Scuba Blue, Grunge Black", ["Iconic 3210 design", "YouTube Shorts support"], { conn: "Bluetooth 5.0 · USB Type-C", memory: "Expandable via microSD up to 32GB" }],
    ["Nokia 8210 4G", '2.8" QVGA display', "Unisoc T107", "0.3MP VGA", "No camera", 1450, "USB Type-C (5V)", "Cherry Red, Cloud Blue, Charcoal", ["Retro 8210 design", "Bluetooth 5.0"], { conn: "Bluetooth 5.0 · USB Type-C", memory: "Expandable via microSD up to 32GB" }],
  ]),
  ...grp(K2, [
    ["Nokia 6310", '2.8" QVGA display', "Unisoc feature-phone platform", "0.3MP VGA", "No camera", 1150, "Micro-USB (5V)", "Black, Yellow, Green", ["Retro 6310 design", "Removable battery"], { memory: "Expandable via microSD up to 32GB" }],
    ["Nokia 5710 XpressAudio", '2.4" QVGA display', "Unisoc T107", "0.3MP VGA", "No camera", 1450, "Micro-USB (5V)", "Black, White", ["Built-in wireless earbuds", "4G VoLTE", "MP3 player"], { net: "4G VoLTE", conn: "Bluetooth 5.0 · Micro-USB", memory: "Expandable via microSD up to 32GB" }],
  ]),
];
