"use client";

import {
  Battery,
  BatteryCharging,
  Cable,
  HardDrive,
  Headphones,
  Plug,
  ShieldCheck,
  Smartphone,
  Watch,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { accessoriesForBrand } from "@/data/accessories";
import { whatsappLink } from "@/lib/whatsapp";

const icons = {
  smartphone: Smartphone,
  shield: ShieldCheck,
  plug: Plug,
  cable: Cable,
  headphones: Headphones,
  "battery-charging": BatteryCharging,
  battery: Battery,
  watch: Watch,
  "hard-drive": HardDrive,
};

// Accessory categories for one brand (same cards the old Accessories screen showed).
export default function AccessoriesView({ brand }) {
  const items = accessoriesForBrand(brand);

  return (
    <div>
      <p className="text-sm text-neutral-500">
        Pick an accessory and ask us for the price and availability on WhatsApp.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => {
          const Icon = icons[a.icon] ?? Smartphone;
          const message = `Hi, I'm looking for ${brand.name} ${a.name.toLowerCase()}. Please share the available options and prices.`;
          return (
            <article
              key={a.id}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `color-mix(in srgb, ${brand.color} 14%, white)`,
                  color: brand.color,
                }}
              >
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {brand.name} {a.name.toLowerCase()}
              </h3>
              <p className="mt-1 text-sm text-neutral-500">{a.desc}</p>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand/10 px-4 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
