"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { brands, brandKinds, brandSummary } from "@/data/mobiles";
import BrandLogo from "@/components/mobiles/BrandLogo";

const SHOWN = 8;

// Brand grid with the same Smartphones / Keypad filter and logo cards used on /mobiles.
export default function BrandGrid() {
  const [kind, setKind] = useState("all");
  const list = brands.filter((b) => kind === "all" || b.kinds.includes(kind));
  const count = (id) => (id === "all" ? brands.length : brands.filter((b) => b.kinds.includes(id)).length);

  return (
    <div>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter brands">
        {brandKinds.map((k) => {
          const on = kind === k.id;
          return (
            <button
              key={k.id}
              type="button"
              aria-pressed={on}
              onClick={() => setKind(k.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                on
                  ? "border-brand bg-brand text-white"
                  : "border-neutral-200 bg-white text-neutral-800 hover:border-brand/40 hover:text-brand"
              }`}
            >
              {k.label} <span className={on ? "text-white/80" : "text-neutral-500"}>({count(k.id)})</span>
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {list.slice(0, SHOWN).map((b) => (
          <li key={b.id}>
            <Link
              href={`/mobiles/${b.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
            >
              <div
                className="flex h-24 items-center justify-center px-6 py-4 sm:h-32 sm:px-8 sm:py-5"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, ${b.color} 7%, white), #F6F2EF)`,
                }}
              >
                <BrandLogo brand={b} className="transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-3 border-t border-neutral-200 p-3 sm:p-4">
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-base font-bold text-ink">{b.name}</span>
                  <span className="mt-0.5 block truncate text-xs text-neutral-500">{brandSummary(b)}</span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition group-hover:bg-brand group-hover:text-white">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {list.length > SHOWN && (
        <p className="mt-4 text-center">
          <Link href="/mobiles" className="text-sm font-semibold text-brand hover:underline">
            View all {list.length} brands
          </Link>
        </p>
      )}
    </div>
  );
}