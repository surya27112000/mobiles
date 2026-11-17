"use client";

import { useState } from "react";

// Brand logo from /public/brands/<id>.svg (see brand.logo in data/mobiles.js).
// The image is "contained" in its box, so every logo keeps its proportions.
// If a file is missing it falls back to the coloured letter tile.
export default function BrandLogo({ brand, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl font-bold text-white sm:h-20 sm:w-20 sm:text-4xl"
        style={{ backgroundColor: brand.color }}
      >
        {brand.letter}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brand.logo}
      alt={`${brand.name} logo`}
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
      className={`h-full w-full object-contain ${className}`}
    />
  );
}
