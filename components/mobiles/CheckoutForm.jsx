"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ShieldCheck, Store, Truck } from "lucide-react";
import PhoneRender from "./PhoneRender";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { colourHex } from "@/lib/colors";
import { formatPrice } from "@/data/mobiles";
import { whatsappLink } from "@/lib/whatsapp";

const input =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

const normalisePhone = (value) => {
  let d = value.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
};

function Field({ label, error, htmlFor, children, hint }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : (
        hint && <p className="mt-1.5 text-xs text-neutral-500">{hint}</p>
      )}
    </div>
  );
}

// Order request for one model. No online payment: the details are sent to the store on
// WhatsApp, and the store confirms stock, final price and pickup / delivery.
export default function CheckoutForm({ brand, model, kind, lenses, colours, detailsHref }) {
  const params = useSearchParams();
  const wanted = params.get("colour");

  const [colour, setColour] = useState(colours.includes(wanted) ? wanted : (colours[0] ?? ""));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [delivery, setDelivery] = useState("pickup");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Cash");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const [sentLink, setSentLink] = useState(null);

  const hex = colourHex(colour, brand.color);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(normalisePhone(phone))) next.phone = "Enter a valid 10-digit mobile number.";
    if (delivery === "delivery" && address.trim().length < 10) next.address = "Please enter your full delivery address.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const lines = [
      "*New order request – Orange Mobile Store*",
      `Mobile: ${model.name} (${model.spec})`,
      colour && `Colour: ${colour}`,
      `Approx. price: ${formatPrice(model.price)}`,
      "",
      `Name: ${name.trim()}`,
      `Phone: ${normalisePhone(phone)}`,
      delivery === "pickup" ? "Collection: Pick up from store" : `Collection: Home delivery – ${address.trim()}`,
      `Payment: ${payment}`,
      notes.trim() && `Notes: ${notes.trim()}`,
    ].filter((l) => l !== "" && l !== false && l !== undefined);

    const link = whatsappLink(lines.join("\n"));
    setSentLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  if (sentLink) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
        <h2 className="mt-4 text-2xl font-bold text-ink">Order request ready</h2>
        <p className="mt-2 text-neutral-600">
          Your request for <strong>{model.name}</strong> was opened in WhatsApp. Press <em>Send</em> there and our
          team will confirm availability, final price and pickup or delivery with you.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={sentLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            <WhatsAppIcon className="h-5 w-5" /> Open WhatsApp again
          </a>
          <Link
            href={`/mobiles/${brand.id}`}
            className="flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 font-semibold text-neutral-700 transition hover:border-brand hover:text-brand"
          >
            Continue browsing {brand.name}
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setSentLink(null)}
          className="mt-5 text-sm font-medium text-neutral-500 underline hover:text-brand"
        >
          Edit my details
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
      <form onSubmit={submit} noValidate className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8">
        <h2 className="text-xl font-bold text-ink">Your details</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name" error={errors.name}>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              className={`${input} ${errors.name ? "border-red-500" : "border-neutral-300"}`}
            />
          </Field>
          <Field label="Mobile number" htmlFor="phone" error={errors.phone}>
            <input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              inputMode="tel"
              autoComplete="tel"
              placeholder="98765 43210"
              aria-invalid={Boolean(errors.phone)}
              className={`${input} ${errors.phone ? "border-red-500" : "border-neutral-300"}`}
            />
          </Field>
        </div>

        {colours.length > 0 && (
          <div>
            <p className="mb-1.5 text-sm font-semibold text-ink">
              Colour: <span className="font-normal text-neutral-600">{colour}</span>
            </p>
            <div className="flex flex-wrap gap-2.5" role="group" aria-label="Choose colour">
              {colours.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColour(c)}
                  aria-pressed={c === colour}
                  aria-label={c}
                  title={c}
                  className={`h-9 w-9 rounded-full border-2 border-white shadow ring-2 transition ${
                    c === colour ? "ring-brand" : "ring-neutral-200 hover:ring-neutral-400"
                  }`}
                  style={{ backgroundColor: colourHex(c, brand.color) }}
                />
              ))}
            </div>
          </div>
        )}

        <fieldset>
          <legend className="mb-1.5 text-sm font-semibold text-ink">How would you like to get it?</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { id: "pickup", title: "Pick up from store", text: "Orange Mobile Store, Salem", Icon: Store },
              { id: "delivery", title: "Home delivery", text: "Store confirms availability", Icon: Truck },
            ].map(({ id, title, text, Icon }) => (
              <label
                key={id}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${
                  delivery === id ? "border-brand bg-brand/5 ring-2 ring-brand/20" : "border-neutral-200 hover:border-brand/40"
                }`}
              >
                <input
                  type="radio"
                  name="delivery"
                  value={id}
                  checked={delivery === id}
                  onChange={() => setDelivery(id)}
                  className="sr-only"
                />
                <Icon className={`h-6 w-6 ${delivery === id ? "text-brand" : "text-neutral-500"}`} />
                <span>
                  <span className="block text-sm font-semibold text-ink">{title}</span>
                  <span className="block text-xs text-neutral-500">{text}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {delivery === "delivery" && (
          <Field label="Delivery address" htmlFor="address" error={errors.address}>
            <textarea
              id="address"
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="street-address"
              placeholder="House / street, area, city, PIN code"
              aria-invalid={Boolean(errors.address)}
              className={`${input} ${errors.address ? "border-red-500" : "border-neutral-300"}`}
            />
          </Field>
        )}

        <Field label="Preferred payment" htmlFor="payment" hint="Payment is made to the store; nothing is charged online.">
          <select
            id="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className={`${input} border-neutral-300`}
          >
            <option>Cash</option>
            <option>UPI</option>
            <option>Card</option>
          </select>
        </Field>

        <Field label="Notes (optional)" htmlFor="notes">
          <textarea
            id="notes"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Exchange old phone, preferred time to call, etc."
            className={`${input} border-neutral-300`}
          />
        </Field>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          <WhatsAppIcon className="h-6 w-6" /> Place order request
        </button>
        <p className="text-center text-xs text-neutral-500">
          This opens WhatsApp with your order details ready to send to the store.
        </p>
      </form>

      {/* Order summary */}
      <aside className="self-start rounded-3xl border border-neutral-200 bg-white p-5 lg:sticky lg:top-24">
        <h2 className="text-lg font-bold text-ink">Order summary</h2>
        <div
          className="mt-4 flex h-52 items-center justify-center rounded-2xl"
          style={{ background: `radial-gradient(circle at 50% 35%, color-mix(in srgb, ${hex} 22%, white), #F6F2EF 75%)` }}
        >
          <PhoneRender color={hex} view="front" kind={kind} lenses={lenses} label={brand.name} className="h-[88%] w-auto drop-shadow-xl" />
        </div>
        <p className="mt-4 text-lg font-semibold text-ink">{model.name}</p>
        <dl className="mt-2 space-y-1.5 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-neutral-500">Variant</dt>
            <dd className="font-medium text-ink">{model.spec}</dd>
          </div>
          {colour && (
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">Colour</dt>
              <dd className="font-medium text-ink">{colour}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4 border-t border-neutral-200 pt-3 text-base">
            <dt className="font-semibold text-ink">Approx. price</dt>
            <dd className="font-bold text-brand">{formatPrice(model.price)}</dd>
          </div>
        </dl>
        <p className="mt-4 flex gap-2 rounded-xl bg-neutral-50 p-3 text-xs text-neutral-600">
          <ShieldCheck className="h-4 w-4 shrink-0 text-green-600" />
          Final price, stock and offers are confirmed by our team before you pay anything.
        </p>
        <Link href={detailsHref} className="mt-4 block text-center text-sm font-semibold text-brand hover:underline">
          ← Back to {model.name} details
        </Link>
      </aside>
    </div>
  );
}
