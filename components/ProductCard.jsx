/*import {
  Headphones,
  Smartphone,
  BatteryCharging,
  Zap,
  Cable,
  Watch,
  Speaker,
  HardDrive,
  ShieldCheck,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_NUMBER } from "@/data/accessories";

const ICONS = {
  "Tempered Glass": ShieldCheck,
  Earphones: Headphones,
  "Mobile Cases": Smartphone,
  Chargers: Zap,
  "Power Banks": BatteryCharging,
  Cables: Cable,
  "Smart Watches": Watch,
  Speakers: Speaker,
  "Memory Cards": HardDrive,
};

export default function ProductCard({ product }) {
  const Icon = ICONS[product.category] || Smartphone;
  const message = `Hi Orange Mobile Store, I'm interested in ${product.name} (approx ₹${product.price.toLocaleString("en-IN")}). Is it available?`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-brand/40 hover:shadow-md">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-sm font-semibold leading-snug text-ink">{product.name}</h3>
      <p className="mt-0.5 text-xs text-neutral-500">{product.category}</p>

      <p className="mb-4 mt-3 text-base font-bold text-ink">
        ₹{product.price.toLocaleString("en-IN")}{" "}
        <span className="text-[11px] font-normal text-neutral-500">approx.</span>
      </p>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-auto flex items-center justify-center gap-1.5 rounded-full bg-brand/10 px-3 py-2 text-xs font-semibold text-brand transition hover:bg-[#25D366] hover:text-white"
      >
        <WhatsAppIcon className="h-3.5 w-3.5" />
        Ask on WhatsApp
      </a>
    </article>
  );
}*/


import Link from "next/link";
import {
  Headphones,
  Smartphone,
  BatteryCharging,
  Zap,
  Cable,
  Watch,
  Speaker,
  HardDrive,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_NUMBER } from "@/data/accessories";

// Exported so the product page can reuse the same category icons.
export const ICONS = {
  "Tempered Glass": ShieldCheck,
  Earphones: Headphones,
  "Mobile Cases": Smartphone,
  Chargers: Zap,
  "Power Banks": BatteryCharging,
  Cables: Cable,
  "Smart Watches": Watch,
  Speakers: Speaker,
  "Memory Cards": HardDrive,
};

export default function ProductCard({ product }) {
  const Icon = ICONS[product.category] || Smartphone;
  const cover = product.images?.[0]; // image 01 is the only one shown on the listing
  const message = `Hi Orange Mobile Store, I'm interested in ${product.name} (approx ₹${product.price.toLocaleString("en-IN")}). Is it available?`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-brand/40 hover:shadow-md">
      {cover ? (
        <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-neutral-100 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        // No photo yet: same-size tile with the category icon, so the grid stays even
        <div className="mb-4 flex aspect-square items-center justify-center rounded-xl bg-brand/5 text-brand/70">
          <Icon className="h-12 w-12" strokeWidth={1.5} />
        </div>
      )}

      <h3 className="text-sm font-semibold leading-snug text-ink">
        {/* stretched link: the whole card opens the product page */}
        <Link
          href={`/accessories/${product.slug}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {product.name}
        </Link>
      </h3>
      <p className="mt-0.5 text-xs text-neutral-500">{product.category}</p>

      <div className="mb-4 mt-3 flex items-end justify-between gap-2">
        <p className="text-base font-bold text-ink">
          ₹{product.price.toLocaleString("en-IN")}{" "}
          <span className="text-[11px] font-normal text-neutral-500">approx.</span>
        </p>
        <span className="flex shrink-0 items-center text-xs font-semibold text-neutral-500 transition group-hover:text-brand">
          Details <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative z-10 mt-auto flex items-center justify-center gap-1.5 rounded-full bg-brand/10 px-3 py-2 text-xs font-semibold text-brand transition hover:bg-[#25D366] hover:text-white"
      >
        <WhatsAppIcon className="h-3.5 w-3.5" />
        Ask on WhatsApp
      </a>
    </article>
  );
}


