"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, X } from "lucide-react";
import {
  brands,
  brandKinds,
  brandSummary,
  normalize,
} from "@/data/mobiles";
import BrandLogo from "./BrandLogo";
import ModelCard from "./ModelCard";

const MAX_RESULTS = 40;

export default function BrandExplorer() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("all");

  const q = normalize(query);

  const kindBrands = useMemo(
    () => brands.filter((b) => kind === "all" || b.kinds.includes(kind)),
    [kind]
  );

  const brandMatches = useMemo(() => {
    if (!q) return kindBrands;
    return kindBrands.filter((b) =>
      [b.name, ...b.aliases].some((n) => normalize(n).includes(q))
    );
  }, [kindBrands, q]);

  const modelMatches = useMemo(() => {
    if (!q) return [];
    return kindBrands.flatMap((b) =>
      b.series
        .filter((s) => kind === "all" || s.kind === kind)
        .flatMap((s) =>
          s.models
            .filter((m) => normalize(m.name).includes(q))
            .map((m) => ({ model: m, brand: b, kind: s.kind }))
        )
    );
  }, [kindBrands, kind, q]);

  const kindCount = (id) =>
    id === "all" ? brands.length : brands.filter((b) => b.kinds.includes(id)).length;

  const nothingFound = q && brandMatches.length === 0 && modelMatches.length === 0;

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a model, e.g. Redmi Note"
          aria-label="Search brands or models"
          className="w-full rounded-full border border-transparent bg-neutral-100 py-3 pl-11 pr-11 text-sm outline-none transition placeholder:text-neutral-500 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Smartphone / keypad filter */}
      <div className="mt-5 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter brands">
        {brandKinds.map((k) => {
          const active = kind === k.id;
          return (
            <button
              key={k.id}
              type="button"
              aria-pressed={active}
              onClick={() => setKind(k.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border-brand bg-brand text-white"
                  : "border-neutral-200 bg-white text-neutral-800 hover:border-brand/40 hover:text-brand"
              }`}
            >
              {k.label} <span className={active ? "text-white/80" : "text-neutral-500"}>({kindCount(k.id)})</span>
            </button>
          );
        })}
      </div>

      {/* Brands */}
      {brandMatches.length > 0 && (
        <section className="mt-6">
          {q && <h2 className="mb-3 text-lg font-bold">Brands</h2>}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {brandMatches.map((b) => (
              <Link
                key={b.id}
                href={`/mobiles/${b.id}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <div
                  className="flex h-28 items-center justify-center px-6 py-5 sm:h-40 sm:px-12 sm:py-7"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${b.color} 7%, white), #F6F2EF)`,
                  }}
                >
                  <BrandLogo brand={b} className="transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-3 border-t border-neutral-200 p-4 sm:p-5">
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-base font-bold text-ink sm:text-xl">{b.name}</span>
                    <span className="mt-0.5 block text-xs text-neutral-500 sm:text-sm">{brandSummary(b)}</span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition group-hover:bg-brand group-hover:text-white sm:h-10 sm:w-10">
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Model search results */}
      {modelMatches.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 text-lg font-bold">
            Models <span className="text-sm font-normal text-neutral-500">{modelMatches.length} found</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modelMatches.slice(0, MAX_RESULTS).map(({ model, brand, kind: k }) => (
              <ModelCard key={`${brand.id}-${model.id}`} model={model} brand={brand} kind={k} />
            ))}
          </div>
          {modelMatches.length > MAX_RESULTS && (
            <p className="mt-4 text-sm text-neutral-500">
              Showing the first {MAX_RESULTS}. Type more of the model name to narrow it down.
            </p>
          )}
        </section>
      )}

      {nothingFound && (
        <div className="mt-10 rounded-2xl border border-dashed border-neutral-300 p-8 text-center">
          <p className="font-semibold">No brand or model found for “{query.trim()}”</p>
          <p className="mt-1 text-sm text-neutral-500">Check the spelling or pick a brand above.</p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-4 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
