"use client";

import { useMemo, useState } from "react";
import { Search, X, ChevronUp, ChevronDown, SlidersHorizontal, SearchX } from "lucide-react";
import { ACCESSORIES, CATEGORIES } from "@/data/accessories";
import ProductCard from "./ProductCard";
import BackBar from "@/components/BackBar";

const PRICE_MIN = 0;
const PRICE_MAX = Math.ceil(Math.max(...ACCESSORIES.map((p) => p.price)) / 1000) * 1000;
const TOP_BRANDS = 5;

const SORTS = [
  { value: "relevance", label: "Relevance" },
  { value: "low", label: "Price: Low to High" },
  { value: "high", label: "Price: High to Low" },
  { value: "name", label: "Name: A to Z" },
];

function toggle(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function Section({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-t border-neutral-200 py-4 first:border-t-0 first:pt-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-sm font-semibold text-ink"
      >
        {title}
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

function CheckRow({ label, count, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-2 py-1.5 text-sm text-neutral-700 hover:text-ink">
      <span className="flex items-center gap-2.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 cursor-pointer rounded border-neutral-300 accent-brand"
        />
        {label}
      </span>
      {count !== undefined && <span className="text-xs text-neutral-400">({count})</span>}
    </label>
  );
}

function Chip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand py-1.5 pl-3.5 pr-2.5 text-xs font-semibold text-white">
      {label}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${label}`}
        className="rounded-full p-0.5 hover:bg-white/20"
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  );
}

export default function AccessoriesClient({ initialCategory = "" }) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState(
    CATEGORIES.includes(initialCategory) ? [initialCategory] : []
  );
  const [brands, setBrands] = useState([]);
  const [minStr, setMinStr] = useState("");
  const [maxStr, setMaxStr] = useState("");
  const [sort, setSort] = useState("relevance");
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);

  const lo = minStr === "" ? PRICE_MIN : Math.max(PRICE_MIN, Number(minStr) || 0);
  const hi = maxStr === "" ? PRICE_MAX : Math.min(PRICE_MAX, Number(maxStr) || PRICE_MAX);
  const priceActive = minStr !== "" || maxStr !== "";

  const q = query.trim().toLowerCase();

  // Individual checks so each filter group can show counts that respect the other filters
  const matchesSearch = (p) =>
    !q || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q);
  const matchesPrice = (p) => p.price >= lo && p.price <= hi;
  const matchesCategory = (p) => categories.length === 0 || categories.includes(p.category);
  const matchesBrand = (p) => brands.length === 0 || brands.includes(p.brand);

  const results = useMemo(() => {
    const list = ACCESSORIES.filter(
      (p) => matchesSearch(p) && matchesPrice(p) && matchesCategory(p) && matchesBrand(p)
    );
    if (sort === "low") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, lo, hi, categories, brands, sort]);

  const categoryCounts = useMemo(() => {
    const c = {};
    ACCESSORIES.filter((p) => matchesSearch(p) && matchesPrice(p) && matchesBrand(p)).forEach(
      (p) => (c[p.category] = (c[p.category] || 0) + 1)
    );
    return c;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, lo, hi, brands]);

  const brandList = useMemo(() => {
    const total = {};
    ACCESSORIES.forEach((p) => (total[p.brand] = (total[p.brand] || 0) + 1));
    const live = {};
    ACCESSORIES.filter((p) => matchesSearch(p) && matchesPrice(p) && matchesCategory(p)).forEach(
      (p) => (live[p.brand] = (live[p.brand] || 0) + 1)
    );
    return Object.keys(total)
      .sort((a, b) => total[b] - total[a] || a.localeCompare(b))
      .map((name) => ({ name, count: live[name] || 0 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, lo, hi, categories]);

  const visibleBrands = showAllBrands ? brandList : brandList.slice(0, TOP_BRANDS);
  const hasFilters = categories.length > 0 || brands.length > 0 || priceActive || q !== "";

  const clearAll = () => {
    setCategories([]);
    setBrands([]);
    setMinStr("");
    setMaxStr("");
    setQuery("");
  };

  const filtersPanel = (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <h2 className="mb-4 text-base font-bold text-ink">Filters</h2>

      <Section title="Categories">
        {CATEGORIES.map((c) => (
          <CheckRow
            key={c}
            label={c}
            count={categoryCounts[c] || 0}
            checked={categories.includes(c)}
            onChange={() => setCategories(toggle(categories, c))}
          />
        ))}
      </Section>

      <Section title="Brands">
        <p className="mb-1 text-xs font-medium text-neutral-500">
          {showAllBrands ? "All brands" : `Branded Accessories (Top ${TOP_BRANDS})`}
        </p>
        {visibleBrands.map((b) => (
          <CheckRow
            key={b.name}
            label={b.name}
            count={b.count}
            checked={brands.includes(b.name)}
            onChange={() => setBrands(toggle(brands, b.name))}
          />
        ))}
        {brandList.length > TOP_BRANDS && (
          <button
            type="button"
            onClick={() => setShowAllBrands(!showAllBrands)}
            className="mt-1 flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-brand"
          >
            {showAllBrands ? "Show Less" : "Show More"}
            {showAllBrands ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        )}
      </Section>

      <Section title="Price Range">
        <div className="price-slider relative mb-4 mt-2 h-5">
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-neutral-200" />
          <div
            className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-brand"
            style={{
              left: `${((lo - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
              right: `${100 - ((hi - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
            }}
          />
          <input
            type="range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={100}
            value={lo}
            aria-label="Minimum price"
            onChange={(e) => setMinStr(String(Math.min(Number(e.target.value), hi)))}
          />
          <input
            type="range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={100}
            value={hi}
            aria-label="Maximum price"
            onChange={(e) => setMaxStr(String(Math.max(Number(e.target.value), lo)))}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={0}
            placeholder="Min"
            value={minStr}
            onChange={(e) => setMinStr(e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-2.5 py-2 text-xs outline-none focus:border-brand"
          />
          <span className="text-neutral-400">-</span>
          <input
            type="number"
            min={0}
            placeholder="Max"
            value={maxStr}
            onChange={(e) => setMaxStr(e.target.value)}
            className="w-full rounded-lg border border-neutral-300 px-2.5 py-2 text-xs outline-none focus:border-brand"
          />
        </div>
      </Section>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="mt-2 w-full rounded-full border border-brand py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Orange banner */}
      <div className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6">
          <BackBar current="Accessories" />
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Accessories</h1>
          <p className="mt-1 text-sm text-white/85">Find the perfect accessories for your devices</p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="-mt-8 grid gap-6 lg:grid-cols-[250px_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl">
              {filtersPanel}
            </div>
          </aside>

          <div className="min-w-0">
            {/* Search */}
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for accessories, brands, or models..."
                aria-label="Search accessories"
                className="w-full rounded-xl border border-neutral-200 bg-white py-3.5 pl-4 pr-12 text-sm shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
            </div>

            {/* Mobile filter toggle */}
            <button
              type="button"
              onClick={() => setMobileFilters(!mobileFilters)}
              aria-expanded={mobileFilters}
              className="mt-4 flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-ink lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              {mobileFilters ? "Hide filters" : "Show filters"}
            </button>
            {mobileFilters && <div className="mt-4 lg:hidden">{filtersPanel}</div>}

            {/* Active chips */}
            {hasFilters && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {categories.map((c) => (
                  <Chip key={c} label={c} onRemove={() => setCategories(categories.filter((v) => v !== c))} />
                ))}
                {brands.map((b) => (
                  <Chip key={b} label={b} onRemove={() => setBrands(brands.filter((v) => v !== b))} />
                ))}
                {priceActive && (
                  <Chip
                    label={`₹${lo.toLocaleString("en-IN")} - ₹${hi.toLocaleString("en-IN")}`}
                    onRemove={() => {
                      setMinStr("");
                      setMaxStr("");
                    }}
                  />
                )}
                {q !== "" && <Chip label={`"${query.trim()}"`} onRemove={() => setQuery("")} />}
                <button
                  type="button"
                  onClick={clearAll}
                  className="px-1 text-xs font-semibold text-brand underline-offset-2 hover:underline"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Result bar */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-sm text-neutral-600" aria-live="polite">
                Showing {results.length} result{results.length === 1 ? "" : "s"}
              </p>
              <label className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-700">
                Sort By:
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent font-medium text-ink outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Products */}
            {results.length > 0 ? (
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {results.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-neutral-300 px-6 py-16 text-center">
                <SearchX className="h-10 w-10 text-neutral-400" />
                <p className="mt-3 font-semibold text-ink">No accessories match these filters</p>
                <p className="mt-1 text-sm text-neutral-500">Try removing a filter or searching a different word.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}