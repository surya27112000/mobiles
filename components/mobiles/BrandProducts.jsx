"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { Headphones, Smartphone } from "lucide-react";
import ModelsView from "./ModelsView";
import AccessoriesView from "./AccessoriesView";
import { countModels } from "@/data/mobiles";
import { accessoriesForBrand } from "@/data/accessories";

const subscribeToHash = (callback) => {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
};
const readHash = () => window.location.hash;
const serverHash = () => "";

// Mobiles | Accessories segmented control. Switching only swaps what is shown –
// it never navigates. Both panels stay mounted, so the chosen series filter is kept.
export default function BrandProducts({ brand }) {
  // Old links to /mobiles/<brand>#accessories open on the Accessories tab;
  // once the visitor clicks a tab, their choice wins.
  const hash = useSyncExternalStore(subscribeToHash, readHash, serverHash);
  const [picked, setPicked] = useState(null);
  const tab = picked ?? (hash === "#accessories" ? "accessories" : "mobiles");
  const refs = useRef({});

  const tabs = [
    { id: "mobiles", label: "Mobiles", Icon: Smartphone, count: countModels(brand) },
    { id: "accessories", label: "Accessories", Icon: Headphones, count: accessoriesForBrand(brand).length },
  ];

  const select = (id) => {
    setPicked(id);
    const base = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", id === "accessories" ? `${base}#accessories` : base);
  };

  const onKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = tab === "mobiles" ? "accessories" : "mobiles";
    select(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={`${brand.name} products`}
        onKeyDown={onKeyDown}
        className="grid w-full grid-cols-2 gap-1 rounded-full border border-neutral-200 bg-neutral-100 p-1 sm:inline-grid sm:w-auto sm:min-w-[22rem]"
      >
        {tabs.map(({ id, label, Icon, count }) => {
          const on = tab === id;
          return (
            <button
              key={id}
              ref={(el) => (refs.current[id] = el)}
              id={`tab-${id}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls={`panel-${id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => select(id)}
              className={`flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-6 ${
                on ? "bg-brand text-white shadow" : "text-neutral-700 hover:text-brand"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${on ? "bg-white/20 text-white" : "bg-white text-neutral-500"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div id="panel-mobiles" role="tabpanel" aria-labelledby="tab-mobiles" hidden={tab !== "mobiles"} className="mt-6">
        <ModelsView brand={brand} />
      </div>
      <div
        id="panel-accessories"
        role="tabpanel"
        aria-labelledby="tab-accessories"
        hidden={tab !== "accessories"}
        className="mt-6"
      >
        <AccessoriesView brand={brand} />
      </div>
    </div>
  );
}
