// Helpers shared by the per-brand specification files.

// Must match the slug() used in data/mobiles.js so spec rows line up with model ids.
export const slug = (s) =>
  s
    .toLowerCase()
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const DS = "Dual SIM (Nano + Nano)";
export const DS_SD = "Dual SIM (Nano + Nano) · dedicated microSD slot";
export const N5 = "5G (SA/NSA) · 4G LTE · 3G · 2G";
export const N4 = "4G LTE · 3G · 2G";

export const conn = (wifi, bt, extra = "", usb = "USB Type-C") =>
  [`Wi-Fi ${wifi}`, `Bluetooth ${bt}`, extra, usb].filter(Boolean).join(" · ");

// grp(defaults, rows) – `defaults` (os, net, sim, conn, feats) apply to every row of a series.
// row = [name, display, chip, rear, front, battery(mAh), charging(W or text), colours, feats?, overrides?]
export function grp(defaults, rows) {
  return rows.map(
    ([name, display, chip, rear, front, battery, charge, colours, feats = [], over = {}]) => ({
      ...defaults,
      ...over,
      name,
      display,
      chip,
      rear,
      front,
      battery,
      charge,
      colours,
      feats: [...new Set([...(defaults.feats ?? []), ...feats])],
    })
  );
}
