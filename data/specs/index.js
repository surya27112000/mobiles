// Specification sheets for every model in data/mobiles.js.
// Each brand file lists its models (matched by model name -> id). To add specs for a new
// model, add a row in the brand's file; models without a row still open a details page
// (with the info available in the listing) so nothing breaks.

import { slug } from "./helpers";
import { xiaomi } from "./xiaomi";
import { oppo } from "./oppo";
import { samsung } from "./samsung";
import { vivo } from "./vivo";
import { realme } from "./realme";
import { oneplus } from "./oneplus";
import { apple } from "./apple";
import { poco } from "./poco";
import { motorola } from "./motorola";
import { iqoo } from "./iqoo";
import { infinix } from "./infinix";
import { tecno } from "./tecno";
import { google } from "./google";
import { nothing } from "./nothing";
import { lava } from "./lava";
import { itel } from "./itel";
import { nokia } from "./nokia";
import { jio } from "./jio";
import { micromax } from "./micromax";

export const specRows = {
  xiaomi, oppo, samsung, vivo, realme, oneplus, apple, poco, motorola,
  iqoo, infinix, tecno, google, nothing, lava, itel, nokia, jio, micromax,
};

const index = Object.fromEntries(
  Object.entries(specRows).map(([brandId, rows]) => [
    brandId,
    new Map(rows.map((r) => [slug(r.name), r])),
  ])
);

const spaced = (s) => s.replace(/(\d)\s*(GB|TB)/gi, (_, n, u) => `${n} ${u.toUpperCase()}`);

// Builds a display-ready spec sheet for one model.
export function getSpecSheet({ brand, series, model }) {
  const raw = index[brand.id]?.get(model.id) ?? {};
  const kind = series.kind;

  const memory = model.spec.match(/(\d+)\s*GB\s*\+\s*(\d+)\s*(GB|TB)/i);
  const ram = raw.ram ?? (memory ? `${memory[1]} GB` : null);
  const storage = memory
    ? `${memory[2]} ${memory[3].toUpperCase()}`
    : /^\d+\s*(GB|TB)$/i.test(model.spec)
      ? spaced(model.spec)
      : null;

  const rear = raw.rear ?? null;
  const noCamera = !rear || /no camera/i.test(rear);
  const lenses = noCamera ? 0 : Math.max(1, rear.split("+").length);

  const charge = raw.charge;
  const charging =
    typeof charge === "number" ? `${charge}W ${charge >= 18 ? "fast" : "wired"} charging` : (charge ?? null);

  const battery = typeof raw.battery === "number" ? `${raw.battery} mAh` : (raw.battery ?? null);

  return {
    found: Boolean(raw.name),
    kind,
    display: raw.display ?? null,
    displayShort: raw.display ? raw.display.split(" · ")[0] : null,
    processor: raw.chip ?? null,
    ram,
    storage,
    memory: raw.memory ?? null,
    rear,
    front: raw.front ?? null,
    mainCamera: noCamera ? null : (rear.match(/\d+(\.\d+)?\s*MP/i)?.[0] ?? rear.split("+")[0].trim()),
    lenses,
    battery,
    charging,
    os: raw.os ?? null,
    network: raw.net ?? null,
    is5G: Boolean(raw.net && raw.net.startsWith("5G")),
    sim: raw.sim ?? null,
    connectivity: raw.conn ?? null,
    colours: raw.colours ? raw.colours.split(",").map((c) => c.trim()).filter(Boolean) : [],
    features: raw.feats ?? [],
  };
}
