"use client";

import { useState } from "react";
import { Smartphone } from "lucide-react";
import { ICONS } from "./ProductCard";

// Big image + thumbnails (01, 02, 03 ...). Clicking a thumbnail swaps the big image.
export default function ProductGallery({ name, category, images }) {
  const [active, setActive] = useState(0);
  const Icon = ICONS[category] || Smartphone;

  // No photos added yet -> show a neat placeholder instead of a broken page.
  if (!images || images.length === 0) {
    return (
      <div className="flex h-[360px] w-full items-center justify-center rounded-3xl border border-neutral-200 bg-brand/5 sm:h-[440px]">
        <div className="flex flex-col items-center gap-3 text-brand">
          <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand/10">
            <Icon className="h-10 w-10" />
          </span>
          <span className="text-sm font-medium text-neutral-500">Photos coming soon</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex h-[360px] w-full items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 bg-white sm:h-[440px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={images[active]}
          src={images[active]}
          alt={`${name} - photo ${active + 1}`}
          className="h-full w-full animate-fade-up object-contain"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3" role="group" aria-label="Product photos">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              aria-label={`Show photo ${i + 1}`}
              className={`h-20 w-20 overflow-hidden rounded-xl border bg-white p-1 transition sm:h-24 sm:w-24 ${
                i === active
                  ? "border-brand ring-2 ring-brand/30"
                  : "border-neutral-200 hover:border-brand/40"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" loading="lazy" className="h-full w-full rounded-lg object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
