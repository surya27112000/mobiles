import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PhoneArt from "./PhoneArt";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { formatPrice } from "@/data/mobiles";
import { whatsappLink } from "@/lib/whatsapp";

export default function ModelCard({ model, brand, kind = "smartphone" }) {
  const message = `Hi, I'm interested in ${model.name} (${model.spec}). Please share the best price and availability.`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="flex h-44 items-center justify-center sm:h-48"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, ${brand.color} 14%, white), #F6F2EF)`,
        }}
      >
        {model.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={model.image} alt={model.name} className="h-36 w-auto object-contain" loading="lazy" />
        ) : (
          <PhoneArt
            color={brand.color}
            kind={kind}
            className="h-36 w-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-ink">
          {/* stretched link: the whole card opens the details page */}
          <Link
            href={`/mobiles/${brand.id}/models/${model.id}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {model.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-neutral-500">{model.spec}</p>

        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between gap-2">
            <p className="text-xl font-bold text-brand">
              {formatPrice(model.price)}{" "}
              <span className="text-xs font-normal text-neutral-500">approx.</span>
            </p>
            <span className="flex shrink-0 items-center text-xs font-semibold text-neutral-500 transition group-hover:text-brand">
              Details <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </div>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 mt-3 flex items-center justify-center gap-2 rounded-full bg-brand/10 px-4 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
          >
            <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
