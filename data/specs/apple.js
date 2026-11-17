import { grp, DS } from "./helpers";

const ES = "Nano-SIM + eSIM";
const A = { net: "5G · 4G LTE (VoLTE) · Wi-Fi calling", sim: ES, feats: ["Face ID", "Dynamic Island", "Action button", "Ceramic Shield", "IP68 dust & water resistant", "Satellite SOS"] };

export const apple = [
  ...grp({ ...A, os: "iOS 26", conn: "Wi-Fi 7 · Bluetooth 6 · NFC · USB-C", feats: [...A.feats, "Camera Control", "Wireless MagSafe / Qi2 charging"] }, [
    ["iPhone 17", '6.3" Super Retina XDR OLED · 120Hz ProMotion', "Apple A19", "48MP Fusion + 48MP ultra-wide", "18MP Center Stage", "Up to 30 hrs video playback", "USB-C fast charging · MagSafe 25W wireless", "Black, White, Mist Blue, Sage, Lavender", [], { ram: "8 GB" }],
    ["iPhone Air", '6.5" Super Retina XDR OLED · 120Hz ProMotion', "Apple A19 Pro", "48MP Fusion", "18MP Center Stage", "Up to 27 hrs video playback", "USB-C fast charging · MagSafe 20W wireless", "Space Black, Cloud White, Light Gold, Sky Blue", ["Ultra-thin 5.6mm titanium body"], { ram: "12 GB", sim: "eSIM only (no physical SIM)" }],
    ["iPhone 17 Pro", '6.3" Super Retina XDR OLED · 120Hz ProMotion', "Apple A19 Pro", "48MP Fusion + 48MP ultra-wide + 48MP telephoto (4x)", "18MP Center Stage", "Up to 33 hrs video playback", "USB-C fast charging · MagSafe 25W wireless", "Silver, Cosmic Orange, Deep Blue", ["Vapor-chamber cooling", "Aluminium unibody"], { ram: "12 GB" }],
    ["iPhone 17 Pro Max", '6.9" Super Retina XDR OLED · 120Hz ProMotion', "Apple A19 Pro", "48MP Fusion + 48MP ultra-wide + 48MP telephoto (4x)", "18MP Center Stage", "Up to 39 hrs video playback", "USB-C fast charging · MagSafe 25W wireless", "Silver, Cosmic Orange, Deep Blue", ["Vapor-chamber cooling", "Largest iPhone battery"], { ram: "12 GB" }],
  ]),
  ...grp({ ...A, os: "iOS 18", conn: "Wi-Fi 7 · Bluetooth 5.3 · NFC · USB-C", feats: [...A.feats, "Apple Intelligence", "Wireless MagSafe / Qi charging"] }, [
    ["iPhone 16e", '6.1" Super Retina XDR OLED · 60Hz', "Apple A18", "48MP Fusion", "12MP TrueDepth", "Up to 26 hrs video playback", "USB-C fast charging · Qi wireless", "Black, White", [], { ram: "8 GB", feats: ["Face ID", "Action button", "Ceramic Shield", "IP68 dust & water resistant", "Apple Intelligence", "Apple C1 modem"] }],
    ["iPhone 16", '6.1" Super Retina XDR OLED · 60Hz', "Apple A18", "48MP Fusion + 12MP ultra-wide", "12MP TrueDepth", "Up to 22 hrs video playback", "USB-C fast charging · MagSafe 25W wireless", "Black, White, Pink, Teal, Ultramarine", ["Camera Control"], { ram: "8 GB" }],
    ["iPhone 16 Plus", '6.7" Super Retina XDR OLED · 60Hz', "Apple A18", "48MP Fusion + 12MP ultra-wide", "12MP TrueDepth", "Up to 27 hrs video playback", "USB-C fast charging · MagSafe 25W wireless", "Black, White, Pink, Teal, Ultramarine", ["Camera Control"], { ram: "8 GB" }],
    ["iPhone 16 Pro", '6.3" Super Retina XDR OLED · 120Hz ProMotion', "Apple A18 Pro", "48MP Fusion + 48MP ultra-wide + 12MP telephoto (5x)", "12MP TrueDepth", "Up to 27 hrs video playback", "USB-C fast charging · MagSafe 25W wireless", "Black Titanium, White Titanium, Natural Titanium, Desert Titanium", ["Camera Control", "Titanium design"], { ram: "8 GB" }],
    ["iPhone 16 Pro Max", '6.9" Super Retina XDR OLED · 120Hz ProMotion', "Apple A18 Pro", "48MP Fusion + 48MP ultra-wide + 12MP telephoto (5x)", "12MP TrueDepth", "Up to 33 hrs video playback", "USB-C fast charging · MagSafe 25W wireless", "Black Titanium, White Titanium, Natural Titanium, Desert Titanium", ["Camera Control", "Titanium design"], { ram: "8 GB" }],
  ]),
  ...grp({ ...A, os: "iOS 17", conn: "Wi-Fi 6 · Bluetooth 5.3 · NFC · USB-C", feats: ["Face ID", "Dynamic Island", "Ceramic Shield", "IP68 dust & water resistant", "Satellite SOS", "Wireless MagSafe / Qi charging"] }, [
    ["iPhone 15", '6.1" Super Retina XDR OLED · 60Hz', "Apple A16 Bionic", "48MP Main + 12MP ultra-wide", "12MP TrueDepth", "Up to 20 hrs video playback", "USB-C fast charging · MagSafe 15W wireless", "Black, Blue, Green, Yellow, Pink", [], { ram: "6 GB" }],
    ["iPhone 15 Plus", '6.7" Super Retina XDR OLED · 60Hz', "Apple A16 Bionic", "48MP Main + 12MP ultra-wide", "12MP TrueDepth", "Up to 26 hrs video playback", "USB-C fast charging · MagSafe 15W wireless", "Black, Blue, Green, Yellow, Pink", [], { ram: "6 GB" }],
  ]),
];
