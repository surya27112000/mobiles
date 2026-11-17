// Turns marketing colour names ("Glowing Gold", "Titan Black") into swatch colours.

const KEYWORDS = [
  ["black", "#1b1b1f"], ["white", "#f3f1ec"], ["silver", "#c9ccd1"], ["grey", "#7d8087"], ["gray", "#7d8087"],
  ["blue", "#3a6fd8"], ["navy", "#1f2f5c"], ["indigo", "#4b4fb0"], ["green", "#2e9a5f"], ["mint", "#8fd6b4"],
  ["olive", "#7a7a3c"], ["sage", "#9bb08f"], ["teal", "#1f8a8a"], ["aqua", "#4fc3d4"], ["cyan", "#3cc3e0"],
  ["purple", "#7a4fc7"], ["violet", "#7a4fc7"], ["lavender", "#b9a4e6"], ["lilac", "#c3a9e8"], ["orchid", "#c46fc0"],
  ["pink", "#ef8fb4"], ["rose", "#e07a95"], ["peach", "#f2b48f"], ["peony", "#e98ca8"], ["red", "#d8322f"],
  ["orange", "#f08a2b"], ["coral", "#ee7a62"], ["gold", "#d4b062"], ["yellow", "#f2cf3d"], ["lemon", "#e8e46a"],
  ["brown", "#7a5338"], ["bronze", "#a9784a"], ["mocha", "#8a6246"], ["cream", "#efe5cf"], ["ivory", "#f1ead8"],
  ["pearl", "#eeeae2"], ["marble", "#dcdad6"], ["frost", "#d7e4ee"], ["porcelain", "#e7e2d8"],
  ["titanium", "#8f8d88"], ["graphite", "#3d3d41"], ["midnight", "#1d2433"], ["obsidian", "#1d1d22"],
  ["onyx", "#202024"], ["cosmic", "#2a2f4a"], ["stealth", "#222226"], ["jade", "#2f9e7a"], ["desert", "#b8a38a"],
  ["lime", "#a8d94a"], ["sand", "#d9c7a3"], ["emerald", "#1f9a68"], ["sapphire", "#2b4fa8"], ["amber", "#e0a030"],
  ["ocean", "#2b6cb0"], ["forest", "#2f6b4a"], ["lunar", "#c9ccd1"], ["starry", "#1f2233"], ["moon", "#d8d9de"],
];

const clamp = (n) => Math.max(0, Math.min(255, Math.round(n)));

const toRgb = (hex) => {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
};

const toHex = ([r, g, b]) => `#${[r, g, b].map((v) => clamp(v).toString(16).padStart(2, "0")).join("")}`;

// mix(a, b, t) -> t=0 gives a, t=1 gives b
export function mix(a, b, t) {
  const [ar, ag, ab] = toRgb(a);
  const [br, bg, bb] = toRgb(b);
  return toHex([ar + (br - ar) * t, ag + (bg - ag) * t, ab + (bb - ab) * t]);
}

export function isLight(hex) {
  const [r, g, b] = toRgb(hex);
  return 0.299 * r + 0.587 * g + 0.114 * b > 170;
}

export function colourHex(name, fallback = "#777777") {
  const n = name.toLowerCase();
  let hex = null;
  for (const [key, value] of KEYWORDS) {
    if (n.includes(key)) {
      hex = value;
      break;
    }
  }
  if (!hex) return fallback;
  if (/\blight\b/.test(n)) hex = mix(hex, "#ffffff", 0.4);
  if (/\bdark\b|\bdeep\b/.test(n)) hex = mix(hex, "#000000", 0.35);
  return hex;
}
