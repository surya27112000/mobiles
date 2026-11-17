"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Smartphone, Tag, Headphones, X } from "lucide-react";
import { brands, formatPrice, normalize } from "@/data/mobiles";
import { CATEGORIES } from "@/data/accessories";

const typeIcon = { Brand: Tag, Model: Smartphone, Accessory: Headphones };
const MAX_RESULTS = 7;

// One flat list of everything a customer can search for on the home page.
function buildIndex() {
  const items = [];
  for (const b of brands) {
    items.push({
      type: "Brand",
      label: b.name,
      sub: `${b.series.length} series`,
      keys: [b.name, ...b.aliases],
      href: `/mobiles/${b.id}`,
    });
    for (const s of b.series) {
      for (const m of s.models) {
        items.push({
          type: "Model",
          label: m.name,
          sub: `${b.name} · ${s.name}`,
          price: m.price,
          keys: [m.name, b.name, ...b.aliases],
          href: `/mobiles/${b.id}/models/${m.id}`,
        });
      }
    }
  }
  for (const c of CATEGORIES) {
    items.push({
      type: "Accessory",
      label: c,
      sub: "Accessories",
      keys: [c],
      href: `/accessories?category=${encodeURIComponent(c)}`,
    });
  }
  return items;
}

export default function CatalogSearch() {
  const router = useRouter();
  const index = useMemo(() => buildIndex(), []);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const term = normalize(q);
  const matches = term
    ? index
        .filter((i) => i.keys.some((k) => normalize(k).includes(term)))
        // names that start with the search text come first
        .sort((a, b) => Number(normalize(b.label).startsWith(term)) - Number(normalize(a.label).startsWith(term)))
        .slice(0, MAX_RESULTS)
    : [];

  function go(href) {
    setOpen(false);
    router.push(href);
  }

  function onKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, matches.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, -1));
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = matches[active >= 0 ? active : 0];
      if (pick) go(pick.href);
    }
  }

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
      <input
        role="combobox"
        aria-expanded={open && !!term}
        aria-controls="home-search-list"
        aria-label="Search mobiles, brands or accessories"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          setActive(-1);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onKeyDown={onKeyDown}
        placeholder="Search mobiles, brands, accessories"
        className="w-full rounded-full border-2 border-neutral-200 bg-neutral-50 py-3.5 pl-12 pr-12 text-base outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
      />
      {q && (
        <button
          type="button"
          onClick={() => setQ("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-200"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {open && term && (
        <ul
          id="home-search-list"
          role="listbox"
          onMouseDown={(e) => e.preventDefault()}
          className="absolute left-0 right-0 top-full z-30 mt-2 max-h-[60vh] overflow-y-auto rounded-2xl border border-neutral-200 bg-white shadow-xl"
        >
          {matches.length === 0 && (
            <li className="px-4 py-3 text-sm text-neutral-600">
              No match for “{q.trim()}”. Try a brand like Oppo or Vivo.
            </li>
          )}
          {matches.map((m, i) => {
            const Icon = typeIcon[m.type];
            return (
              <li key={m.type + m.href} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  onClick={() => go(m.href)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition ${
                    i === active ? "bg-brand/10" : "hover:bg-neutral-50"
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{m.label}</span>
                    <span className="block truncate text-xs text-neutral-500">{m.sub}</span>
                  </span>
                  <span className="shrink-0 text-right">
                    {m.price && <span className="block text-sm font-semibold text-brand">{formatPrice(m.price)}</span>}
                    <span className="block text-[11px] text-neutral-400">{m.type}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
