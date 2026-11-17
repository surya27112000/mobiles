"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  Smartphone,
  Headphones,
  Wrench,
  HelpCircle,
  Navigation,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import BackBar from "@/components/BackBar";

const numbers = ["96777 50800", "90436 50800", "96269 77277"];

const stores = [
  { name: "Cherry Road", area: "Cherry Road, Salem", query: "Orange Mobile Store, Cherry Road, Salem" },
  { name: "T.V.K. Road, Store 1", area: "T.V.K. Road, Ammapet, Salem", query: "Orange Mobile Store, T.V.K. Road, Ammapet, Salem" },
  { name: "T.V.K. Road, Store 2", area: "T.V.K. Road, Ammapet, Salem", query: "Orange Mobile Store, T.V.K. Road, Ammapet, Salem" },
];

const topics = [
  { label: "Buy a mobile", icon: Smartphone },
  { label: "Accessories", icon: Headphones },
  { label: "Repair", icon: Wrench },
  { label: "Other", icon: HelpCircle },
];

const inputCls =
  "w-full rounded-full border-2 border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 sm:text-base";

const mapEmbed = (q) => `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
const mapLink = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export default function ContactPage() {
  const [active, setActive] = useState(0);
  const [topic, setTopic] = useState(topics[0].label);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const store = stores[active];

  function handleSubmit(e) {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!/^\d{10}$/.test(form.phone)) err.phone = "Please enter a 10-digit mobile number";
    setErrors(err);
    if (Object.keys(err).length) return;
    setSent(true);
  }

  function reset() {
    setForm({ name: "", phone: "", message: "" });
    setTopic(topics[0].label);
    setSent(false);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          <BackBar current="Contact" />
          <h1 className="mt-3 text-2xl font-bold sm:text-4xl">Contact us</h1>
          <p className="mt-1.5 max-w-xl text-sm text-white/90 sm:text-base">
            Call, message on WhatsApp or visit any of our 3 stores in Salem.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Quick actions */}
        <div className="grid gap-3 sm:grid-cols-3">
          <a
            href={`tel:+91${numbers[0].replace(/\s/g, "")}`}
            className="animate-fade-up flex items-center gap-3 rounded-2xl bg-brand p-4 text-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
              <Phone className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-white/80">Call us</span>
              <span className="block truncate text-base font-bold">{numbers[0]}</span>
            </span>
          </a>

          <a
            href="https://wa.me/919677750800"
            target="_blank"
            rel="noreferrer"
            className="animate-fade-up flex items-center gap-3 rounded-2xl bg-[#25D366] p-4 text-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-white/90">WhatsApp</span>
              <span className="block truncate text-base font-bold">Check stock &amp; price</span>
            </span>
          </a>

          <div className="animate-fade-up flex items-center gap-3 rounded-2xl bg-ink p-4 text-white">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
              <Clock className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-white/70">Store hours</span>
              {/* TODO: confirm timings with the client */}
              <span className="block truncate text-base font-bold">10 AM – 9:30 PM</span>
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:items-start">
          {/* ---------- STORES + MAP ---------- */}
          <div className="animate-fade-up rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5">
            <h2 className="text-lg font-bold">Our stores</h2>
            <p className="mb-3 text-xs text-neutral-500 sm:text-sm">Tap a store to see it on the map</p>

            <div className="space-y-1.5">
              {stores.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.name}
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center gap-2.5 rounded-xl border-2 px-3 py-2 text-left transition active:scale-[0.99] ${
                      on ? "border-brand bg-brand/5" : "border-neutral-200 hover:border-brand/50"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        on ? "bg-brand text-white" : "bg-brand/10 text-brand"
                      }`}
                    >
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold">{s.name}</span>
                      <span className="block truncate text-xs text-neutral-500">{s.area}</span>
                    </span>
                    {on && <Check className="h-4 w-4 shrink-0 text-brand" />}
                  </button>
                );
              })}
            </div>

            <iframe
              key={store.query}
              title={`Map of ${store.name}`}
              src={mapEmbed(store.query)}
              loading="lazy"
              className="mt-3 h-40 w-full rounded-xl border-0 sm:h-48"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={mapLink(store.query)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-full bg-brand px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-dark active:scale-95 sm:text-sm"
              >
                <Navigation className="h-4 w-4" /> Directions
              </a>
              <a
                href={`tel:+91${numbers[0].replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-1.5 rounded-full border-2 border-brand px-3 py-2 text-xs font-semibold text-brand transition hover:bg-brand/5 active:scale-95 sm:text-sm"
              >
                <Phone className="h-4 w-4" /> Call store
              </a>
            </div>
          </div>

          {/* ---------- ENQUIRY FORM ---------- */}
          <div className="animate-fade-up rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5">
            {sent ? (
              <div className="flex flex-col items-center py-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Check className="h-6 w-6" />
                </span>
                <h2 className="mt-3 text-xl font-bold">Thank you, {form.name.split(" ")[0]}!</h2>
                <p className="mt-1.5 max-w-xs text-sm text-neutral-600">
                  We received your enquiry about <b>{topic}</b>. Our team will call you on +91{" "}
                  {form.phone} shortly.
                </p>
                <button
                  onClick={reset}
                  className="mt-4 rounded-full border-2 border-brand px-5 py-2 text-sm font-semibold text-brand transition hover:bg-brand/5 active:scale-95"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="text-lg font-bold">Send an enquiry</h2>
                <p className="mb-3 text-xs text-neutral-500 sm:text-sm">We will get back to you quickly</p>

                <div className="mb-3 flex flex-wrap gap-1.5">
                  {topics.map(({ label, icon: Icon }) => {
                    const on = topic === label;
                    return (
                      <button
                        type="button"
                        key={label}
                        onClick={() => setTopic(label)}
                        className={`flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition active:scale-95 ${
                          on
                            ? "border-brand bg-brand text-white"
                            : "border-neutral-200 hover:border-brand/50 hover:text-brand"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </button>
                    );
                  })}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold sm:text-sm">Your name</span>
                    <input
                      className={inputCls}
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Full name"
                    />
                    {errors.name && <span className="mt-1 block text-xs text-brand">{errors.name}</span>}
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold sm:text-sm">Mobile number</span>
                    <input
                      className={inputCls}
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))
                      }
                      inputMode="numeric"
                      placeholder="10 digits"
                    />
                    {errors.phone && <span className="mt-1 block text-xs text-brand">{errors.phone}</span>}
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-1 block text-xs font-semibold sm:text-sm">Message (optional)</span>
                    <textarea
                      rows={2}
                      className="w-full resize-none rounded-2xl border-2 border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10 sm:text-base"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="e.g. Looking for a 5G phone under ₹20,000"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark hover:shadow-lg active:scale-[0.98] sm:text-base"
                >
                  <Send className="h-4 w-4" /> Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}