import { useId } from "react";
import { isLight, mix } from "@/lib/colors";

// Illustrated phone views (front / back / side) tinted with the chosen colour.
// The back view draws one lens per rear camera of the selected model.
export default function PhoneRender({ color, view = "front", kind = "smartphone", lenses = 2, label = "", className = "" }) {
  const id = useId();
  const light = isLight(color);
  const ink = light ? "#1b1b1f" : "#ffffff";
  const top = mix(color, "#ffffff", view === "front" ? 0.12 : 0.25);
  const bottom = mix(color, "#000000", view === "front" ? 0.55 : 0.35);
  const grad = (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0.7" y2="1">
        <stop offset="0" stopColor={top} />
        <stop offset="1" stopColor={bottom} />
      </linearGradient>
      <linearGradient id={`${id}-s`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor={mix(color, "#000000", 0.4)} />
        <stop offset="0.5" stopColor={mix(color, "#ffffff", 0.2)} />
        <stop offset="1" stopColor={mix(color, "#000000", 0.4)} />
      </linearGradient>
    </defs>
  );

  if (view === "side") {
    return (
      <svg viewBox="0 0 200 400" className={className} aria-hidden="true">
        {grad}
        <rect x="116" y="110" width="5" height="46" rx="2.5" fill={mix(color, "#000000", 0.5)} />
        <rect x="116" y="172" width="5" height="70" rx="2.5" fill={mix(color, "#000000", 0.5)} />
        <rect x="84" y="4" width="32" height="392" rx="16" fill={`url(#${id}-s)`} />
        <rect x="94" y="14" width="12" height="3" rx="1.5" fill="#000" opacity="0.25" />
      </svg>
    );
  }

  if (kind === "keypad") {
    if (view === "front") {
      const keys = [];
      for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) keys.push({ x: 50 + c * 34, y: 232 + r * 28 });
      return (
        <svg viewBox="0 0 200 400" className={className} aria-hidden="true">
          {grad}
          <rect x="30" y="20" width="140" height="360" rx="34" fill="#17171a" />
          <rect x="44" y="40" width="112" height="96" rx="10" fill={`url(#${id})`} />
          <text x="100" y="96" textAnchor="middle" fontSize="22" fill="#fff" fillOpacity="0.9">9:41</text>
          <circle cx="100" cy="182" r="22" fill="#2a2a2f" stroke={color} strokeWidth="3" />
          <rect x="46" y="166" width="30" height="14" rx="7" fill="#2a2a2f" />
          <rect x="124" y="166" width="30" height="14" rx="7" fill="#2a2a2f" />
          {keys.map((k, i) => (
            <rect key={i} x={k.x} y={k.y} width="28" height="20" rx="7" fill="#2a2a2f" />
          ))}
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 200 400" className={className} aria-hidden="true">
        {grad}
        <rect x="30" y="20" width="140" height="360" rx="34" fill={`url(#${id})`} />
        {lenses > 0 && <circle cx="100" cy="64" r="12" fill="#0a0a0c" stroke="#3b3b42" strokeWidth="2" />}
        <g stroke={ink} strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round">
          <path d="M70 300h60M70 312h60M70 324h60" />
        </g>
        <text x="100" y="262" textAnchor="middle" fontSize="15" letterSpacing="3" fill={ink} fillOpacity="0.7">
          {label.toUpperCase()}
        </text>
      </svg>
    );
  }

  if (view === "back") {
    const n = Math.min(Math.max(lenses, 1), 4);
    return (
      <svg viewBox="0 0 200 400" className={className} aria-hidden="true">
        {grad}
        <rect x="12" y="4" width="176" height="392" rx="32" fill={`url(#${id})`} />
        <rect x="26" y="20" width="60" height={20 + n * 34} rx="24" fill="#000" fillOpacity="0.3" stroke="#fff" strokeOpacity="0.2" />
        {Array.from({ length: n }).map((_, i) => (
          <g key={i}>
            <circle cx="56" cy={48 + i * 34} r="13" fill="#0a0a0c" stroke="#3b3b42" strokeWidth="2" />
            <circle cx="56" cy={48 + i * 34} r="6" fill="#1c2a44" />
            <circle cx="53" cy={45 + i * 34} r="1.8" fill="#fff" fillOpacity="0.7" />
          </g>
        ))}
        <circle cx="104" cy="34" r="5" fill="#fff" fillOpacity="0.85" />
        <text x="100" y="360" textAnchor="middle" fontSize="15" letterSpacing="4" fill={ink} fillOpacity="0.7">
          {label.toUpperCase()}
        </text>
      </svg>
    );
  }

  // front
  return (
    <svg viewBox="0 0 200 400" className={className} aria-hidden="true">
      {grad}
      <rect x="10" y="110" width="3" height="44" rx="1.5" fill="#2a2a2e" />
      <rect x="187" y="140" width="3" height="60" rx="1.5" fill="#2a2a2e" />
      <rect x="12" y="4" width="176" height="392" rx="32" fill="#0e0e10" />
      <rect x="20" y="12" width="160" height="376" rx="25" fill={`url(#${id})`} />
      <circle cx="100" cy="30" r="5" fill="#050505" />
      <text x="100" y="128" textAnchor="middle" fontSize="46" fontWeight="300" fill="#fff" fillOpacity="0.92">9:41</text>
      <text x="100" y="152" textAnchor="middle" fontSize="11" letterSpacing="3" fill="#fff" fillOpacity="0.7">{label.toUpperCase()}</text>
      <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.4" strokeOpacity="0.9">
        <circle cx="100" cy="266" r="17" />
        <path d="M82 244 Q100 230 118 244" strokeOpacity="0.8" />
        <path d="M74 234 Q100 212 126 234" strokeOpacity="0.55" />
      </g>
      <rect x="72" y="372" width="56" height="4" rx="2" fill="#fff" fillOpacity="0.6" />
    </svg>
  );
}
