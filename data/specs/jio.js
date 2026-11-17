import { grp } from "./helpers";

export const jio = [
  ...grp({ os: "Jio feature-phone OS", net: "4G VoLTE", sim: "Single SIM (Jio)", conn: "Bluetooth 5.0 · Micro-USB", feats: ["JioPay UPI", "JioCinema & JioSaavn", "Torch"] }, [
    ["JioBharat V2 4G", '1.77" QQVGA display', "Unisoc T107", "0.3MP VGA", "No camera", 1000, "Micro-USB (5V)", "Black, Blue", ["Affordable 4G"], { memory: "Expandable via microSD up to 128GB" }],
    ["JioBharat K1 Karbonn", '1.77" QQVGA display', "Unisoc T107", "0.3MP VGA", "No camera", 1000, "Micro-USB (5V)", "Black, Red", ["Karbonn-built 4G"], { memory: "Expandable via microSD up to 128GB" }],
    ["JioBharat J1 4G", '2.4" QVGA display', "Unisoc T107", "0.3MP VGA", "No camera", 1000, "Micro-USB (5V)", "Black, Blue", ["Bigger 2.4-inch screen"], { memory: "Expandable via microSD up to 128GB" }],
  ]),
  ...grp({ os: "KaiOS", net: "4G VoLTE", sim: "Single SIM (Jio)", conn: "Wi-Fi 4 · Bluetooth 5.0 · USB Type-C", feats: ["WhatsApp, YouTube & Facebook apps", "JioPay UPI", "Voice assistant"] }, [
    ["JioPhone Prima 4G", '2.4" QVGA display', "Qualcomm QM215", "2MP", "VGA", 1800, "Micro-USB (5V)", "Blue, Black", ["Smart feature phone"], { memory: "512MB RAM · 4GB storage · microSD up to 128GB" }],
    ["JioPhone Prima 2", '2.4" QVGA display', "Qualcomm QM215", "2MP", "VGA", 2000, "Type-C (5V)", "Blue, Black", ["Smart feature phone", "Type-C charging"], { memory: "512MB RAM · 4GB storage · microSD up to 128GB" }],
  ]),
];
