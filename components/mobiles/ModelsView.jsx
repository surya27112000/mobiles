"use client";

import { useState } from "react";
import ModelCard from "./ModelCard";
import { plural } from "@/data/mobiles";

// Series filter pills + series sections with model cards.
export default function ModelsView({ brand }) {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? brand.series : brand.series.filter((s) => s.id === active);

  return (
    <div>
      {brand.series.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by series">
          {[{ id: "all", name: "All series" }, ...brand.series].map((s) => {
            const on = active === s.id;
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(s.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  on
                    ? "border-brand bg-brand text-white"
                    : "border-neutral-200 bg-white text-neutral-800 hover:border-brand/40 hover:text-brand"
                }`}
              >
                {s.name}
              </button>
            );
          })}
        </div>
      )}

      {visible.map((s) => (
        <section key={s.id} className="mt-8" aria-labelledby={`series-${s.id}`}>
          <h2 id={`series-${s.id}`} className="flex items-baseline gap-3 text-2xl font-bold text-ink">
            {s.name}
            <span className="text-sm font-normal text-neutral-500">
              {plural(s.models.length, "model", "models")}
            </span>
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {s.models.map((m, i) => (
              <ModelCard key={`${m.id}-${i}`} model={m} brand={brand} kind={s.kind} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}