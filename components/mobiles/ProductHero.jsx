"use client";

import { useState } from "react";
import Link from "next/link";
import { Battery, Camera, Cpu, Phone, ShoppingBag, Smartphone } from "lucide-react";
import PhoneRender from "./PhoneRender";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { colourHex } from "@/lib/colors";
import { formatPrice } from "@/data/mobiles";
import { whatsappLink } from "@/lib/whatsapp";

const VIEWS = [
  { id: "front", label: "Front" },
  { id: "back", label: "Back" },
  { id: "side", label: "Side" },
];

// Gallery (views + colour swatches) and the price / highlights / enquiry panel.
export default function ProductHero({ brand, seriesName, model, sheet }) {
  const [view, setView] = useState("front");
  const [colourIdx, setColourIdx] = useState(0);

  const colours = sheet.colours.map((name) => ({ name, hex: colourHex(name, brand.color) }));
  const active = colours[colourIdx] ?? { name: "", hex: brand.color };
  const isKeypad = sheet.kind === "keypad";

  const buyHref =
    `/mobiles/${brand.id}/models/${model.id}/buy` +
    (active.name ? `?colour=${encodeURIComponent(active.name)}` : "");

  const message =
    `Hi, I'm interested in ${model.name} (${model.spec})` +
    (active.name ? ` in ${active.name}` : "") +
    ". Please share the best price and availability.";

  const highlights = [
    { Icon: Smartphone, label: "Display", value: sheet.displayShort },
    { Icon: Cpu, label: isKeypad ? "Platform" : "Processor", value: sheet.processor },
    { Icon: Camera, label: "Camera", value: sheet.mainCamera ? `${sheet.mainCamera} main` : isKeypad ? "No camera" : null },
    { Icon: Battery, label: "Battery", value: sheet.battery },
  ].filter((h) => h.value);

  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      {/* ---------- Gallery ---------- */}
      <div className="self-start lg:sticky lg:top-24">
        <div
          className="flex h-[380px] items-center justify-center rounded-3xl border border-neutral-200 sm:h-[460px]"
          style={{
            background: `radial-gradient(circle at 50% 35%, color-mix(in srgb, ${active.hex} 22%, white), #F6F2EF 75%)`,
          }}
        >
          {model.image && view === "photo" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={model.image} alt={model.name} className="h-[88%] w-auto object-contain" />
          ) : (
            <PhoneRender
              color={active.hex}
              view={view === "photo" ? "front" : view}
              kind={sheet.kind}
              lenses={sheet.lenses}
              label={brand.name}
              className="h-[88%] w-auto drop-shadow-2xl transition-all duration-300"
            />
          )}
        </div>

        <div className="mt-4 flex gap-3" role="group" aria-label="Product views">
          {model.image && (
            <button
              type="button"
              onClick={() => setView("photo")}
              aria-pressed={view === "photo"}
              className={`flex h-20 w-16 items-center justify-center overflow-hidden rounded-xl border bg-white ${view === "photo" ? "border-brand ring-2 ring-brand/30" : "border-neutral-200"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={model.image} alt="" className="h-full w-full object-contain" />
            </button>
          )}
          {VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setView(v.id)}
              aria-pressed={view === v.id}
              aria-label={`${v.label} view`}
              className={`flex h-20 w-16 flex-col items-center justify-center gap-1 rounded-xl border bg-white transition ${
                view === v.id ? "border-brand ring-2 ring-brand/30" : "border-neutral-200 hover:border-brand/40"
              }`}
            >
              <PhoneRender color={active.hex} view={v.id} kind={sheet.kind} lenses={sheet.lenses} label={brand.name} className="h-12 w-auto" />
              <span className="text-[10px] font-medium text-neutral-500">{v.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Info ---------- */}
      <div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-full px-3 py-1 text-white" style={{ backgroundColor: brand.color }}>
            {brand.name}
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">{seriesName}</span>
          {isKeypad ? (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800">Keypad phone</span>
          ) : (
            sheet.network && (
              <span className={`rounded-full px-3 py-1 ${sheet.is5G ? "bg-green-100 text-green-800" : "bg-sky-100 text-sky-800"}`}>
                {sheet.is5G ? "5G" : "4G"}
              </span>
            )
          )}
        </div>

        <p className="mt-5 text-3xl font-bold text-brand sm:text-4xl">
          {formatPrice(model.price)}{" "}
          <span className="text-sm font-normal text-neutral-500">approx.</span>
        </p>
        <p className="mt-1 text-sm text-neutral-500">
          Offers and exact price vary by day. Message us for today&apos;s best price.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {isKeypad ? "Model" : "Variant"}
            </p>
            <span className="mt-2 inline-block rounded-full border border-brand bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
              {model.spec}
            </span>
          </div>

          {colours.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Colour: <span className="normal-case text-ink">{active.name}</span>
              </p>
              <div className="mt-2 flex flex-wrap gap-2.5" role="group" aria-label="Available colours">
                {colours.map((c, i) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setColourIdx(i)}
                    aria-label={c.name}
                    aria-pressed={i === colourIdx}
                    title={c.name}
                    className={`h-9 w-9 rounded-full border-2 border-white shadow ring-2 transition ${
                      i === colourIdx ? "ring-brand" : "ring-neutral-200 hover:ring-neutral-400"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {highlights.length > 0 && (
          <div className="mt-7 grid grid-cols-2 gap-3">
            {highlights.map(({ Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-neutral-200 bg-white p-4">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `color-mix(in srgb, ${brand.color} 14%, white)`, color: brand.color }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">{label}</p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-ink">{value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Buy Now opens the order page for this model; the chosen colour travels with it. */}
        <div className="mt-7">
          <Link
            href={buyHref}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            <ShoppingBag className="h-6 w-6" /> Buy Now
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-sm font-semibold">
              {formatPrice(model.price)}
            </span>
          </Link>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand px-6 py-3 font-semibold text-brand transition hover:bg-brand/10"
            >
              <WhatsAppIcon className="h-5 w-5" /> Ask on WhatsApp
            </a>
            <a
              href="tel:+919677750800"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 font-semibold text-neutral-700 transition hover:border-brand hover:text-brand"
            >
              <Phone className="h-5 w-5" /> Call 96777 50800
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
