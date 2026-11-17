import { useId } from "react";

// Placeholder product art, tinted with the brand colour.
// Used until a real photo is added to a model in data/mobiles.js.
export default function PhoneArt({ color, kind = "smartphone", className = "" }) {
  const id = useId();

  if (kind === "keypad") {
    const keys = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 3; c++) keys.push({ x: 12 + c * 17, y: 88 + r * 13 });
    }
    return (
      <svg viewBox="0 0 70 150" className={className} aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor={color} />
            <stop offset="1" stopColor="#0c0c0c" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="64" height="144" rx="16" fill="#171717" />
        <rect x="11" y="12" width="48" height="40" rx="5" fill={`url(#${id})`} />
        <circle cx="35" cy="70" r="9" fill="#2a2a2a" stroke={color} strokeWidth="1.5" />
        <rect x="11" y="62" width="12" height="6" rx="3" fill="#2a2a2a" />
        <rect x="47" y="62" width="12" height="6" rx="3" fill="#2a2a2a" />
        {keys.map((k, i) => (
          <rect key={i} x={k.x} y={k.y} width="14" height="10" rx="3" fill="#2a2a2a" />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 160" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor="#0c0c0c" />
        </linearGradient>
      </defs>
      <rect x="4" y="2" width="72" height="156" rx="14" fill="#141414" />
      <rect x="8" y="6" width="64" height="148" rx="11" fill={`url(#${id})`} />
      <rect x="30" y="11" width="20" height="4" rx="2" fill="#141414" />
      <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2">
        <circle cx="40" cy="90" r="10" strokeWidth="2.4" />
        <path d="M29 76 Q40 66 51 76" opacity="0.9" />
        <path d="M24 69 Q40 54 56 69" opacity="0.7" />
      </g>
    </svg>
  );
}
