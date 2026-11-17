"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bell,
  BellRing,
  Check,
  Lock,
  LogOut,
  Smartphone,
  Wrench,
  X,
} from "lucide-react";
import BackBar from "@/components/BackBar";

const DEMO_OTP = "1234";
const STORAGE_KEY = "orange-bookings-v2";
const OLD_SESSION_KEY = "orange-session-v1"; // old localStorage login, cleared on load
const SESSION_KEY = "orange-session-v2"; // sessionStorage: survives refresh, cleared on close
const STEP_MS = 5000; // demo: each stage moves every 5 seconds

const BRANDS = ["Xiaomi", "Oppo", "Samsung", "Vivo", "Realme", "OnePlus", "Apple"];
const PROBLEMS = [
  "Screen broken",
  "Battery issue",
  "Charging port",
  "Water damage",
  "Software / hanging",
  "Speaker / Mic",
  "Other",
];
const STORES = [
  "Cherry Road",
  "T.V.K. Road, Ammapet (Store 1)",
  "T.V.K. Road, Ammapet (Store 2)",
];
const STAGES = ["Received", "Diagnosing", "Repairing", "Completed"];

const inputCls =
  "w-full rounded-full border-2 border-neutral-200 bg-white px-5 py-3 text-base outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-brand">{error}</span>}
    </label>
  );
}

const mask = (p) => (p.length === 10 ? `${p.slice(0, 2)}******${p.slice(-2)}` : p);

export default function ServicePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    brand: BRANDS[0],
    model: "",
    problem: PROBLEMS[0],
    store: STORES[0],
  });
  const [errors, setErrors] = useState({});
  const [bookings, setBookings] = useState([]);
  const [session, setSession] = useState(null); // logged-in phone number
  const [loaded, setLoaded] = useState(false);
  const [toast, setToast] = useState(null);

  // login: step 1 = phone, step 2 = otp
  const [step, setStep] = useState("phone");
  const [login, setLogin] = useState({ phone: "", otp: "" });
  const [loginError, setLoginError] = useState("");

  const rightRef = useRef(null);

  const mine = session ? bookings.filter((b) => b.phone === session) : [];
  const hasDraft = form.name || form.phone || form.model;

  // Load saved data
  useEffect(() => {
    try {
      localStorage.removeItem(OLD_SESSION_KEY);
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(saved)) setBookings(saved);
      const s = sessionStorage.getItem(SESSION_KEY);
      if (s) setSession(s);
    } catch {}
    setLoaded(true);
    // Coming from the home page "Track your service" button: jump to the tracking section
    if (window.location.hash === "#track") {
      setTimeout(() => rightRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, []);

  // Save bookings (localStorage) and login (sessionStorage)
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    } catch {}
  }, [bookings, loaded]);

  useEffect(() => {
    if (!loaded) return;
    try {
      if (session) sessionStorage.setItem(SESSION_KEY, session);
      else sessionStorage.removeItem(SESSION_KEY);
    } catch {}
  }, [session, loaded]);

  // Demo: move the logged-in customer's bookings forward every few seconds
  useEffect(() => {
    if (!session) return;
    const id = setInterval(() => {
      setBookings((list) =>
        list.map((b) =>
          b.phone === session && b.stage < 3 ? { ...b, stage: b.stage + 1 } : b
        )
      );
    }, STEP_MS);
    return () => clearInterval(id);
  }, [session]);

  // Completion notification (in-page toast only)
  useEffect(() => {
    if (!session) return;
    const ready = bookings.find(
      (b) => b.phone === session && b.stage === 3 && b.notify && !b.notified
    );
    if (!ready) return;
    setToast({ title: "Service completed", msg: `Your ${ready.model} is ready for pickup.` });
    setBookings((list) =>
      list.map((b) => (b.id === ready.id ? { ...b, notified: true } : b))
    );
  }, [bookings, session]);

  // Auto-hide toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(t);
  }, [toast]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function scrollToRight() {
    setTimeout(
      () => rightRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      150
    );
  }

  function handleBook(e) {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!/^\d{10}$/.test(form.phone)) err.phone = "Please enter a 10-digit mobile number";
    if (!form.model.trim()) err.model = "Please enter your mobile model";
    setErrors(err);
    if (Object.keys(err).length) return;

    const booking = {
      id: `b-${Date.now()}`,
      code: String(Math.floor(1000 + Math.random() * 9000)),
      name: form.name.trim(),
      phone: form.phone,
      model: `${form.brand} ${form.model.trim()}`,
      problem: form.problem,
      store: form.store,
      stage: 0,
      eta: "Within 2 days",
      notify: true,
      notified: false,
    };
    setBookings((list) => [booking, ...list]);
    setLogin({ phone: booking.phone, otp: "" });
    setStep("phone");
    setLoginError("");
    setToast({
      title: "Service booked. OTP sent",
      msg: `Your OTP is ${DEMO_OTP} (demo). Sent to +91 ${booking.phone}.`,
    });
    setForm((f) => ({ ...f, name: "", phone: "", model: "" }));
    scrollToRight();
  }

  // Step 1: phone -> continue
  function handlePhoneContinue(e) {
    e.preventDefault();
    if (!/^\d{10}$/.test(login.phone)) {
      setLoginError("Please enter a 10-digit mobile number");
      return;
    }
    if (!bookings.some((b) => b.phone === login.phone)) {
      setLoginError("No bookings found for this mobile number");
      return;
    }
    setLoginError("");
    setStep("otp");
  }

  // Step 2: otp -> continue
  function handleOtpContinue(e) {
    e.preventDefault();
    if (login.otp !== DEMO_OTP) {
      setLoginError("Incorrect OTP. Please try again");
      return;
    }
    setSession(login.phone);
    setLogin({ phone: "", otp: "" });
    setStep("phone");
    setLoginError("");
    scrollToRight();
  }

  function resendOtp() {
    setToast({
      title: "OTP sent",
      msg: `Your OTP is ${DEMO_OTP} (demo). Sent to +91 ${login.phone}.`,
    });
  }

  function logout() {
    setSession(null);
    setStep("phone");
    setLogin({ phone: "", otp: "" });
    setLoginError("");
  }

  function toggleNotify(id) {
    setBookings((list) => list.map((b) => (b.id === id ? { ...b, notify: !b.notify } : b)));
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <BackBar current="Service" />
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Mobile Service</h1>
          <p className="mt-2 max-w-xl text-sm text-white/90 sm:text-base">
            Book your repair, then log in with your mobile number and OTP any time to track it.
            We will notify you the moment it is completed.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-2 lg:items-start">
        {/* ---------- BOOK ---------- */}
        <form
          onSubmit={handleBook}
          noValidate
          className="animate-fade-up rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Wrench className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold">Book a service</h2>
              <p className="text-sm text-neutral-500">Tell us about your mobile</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" error={errors.name}>
              <input className={inputCls} value={form.name} onChange={set("name")} placeholder="Full name" />
            </Field>
            <Field label="Mobile number" error={errors.phone}>
              <input
                className={inputCls}
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))
                }
                inputMode="numeric"
                placeholder="10 digits"
              />
            </Field>
            <Field label="Brand">
              <select className={inputCls} value={form.brand} onChange={set("brand")}>
                {BRANDS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </Field>
            <Field label="Model" error={errors.model}>
              <input className={inputCls} value={form.model} onChange={set("model")} placeholder="e.g. Redmi Note 12" />
            </Field>
            <Field label="Problem">
              <select className={inputCls} value={form.problem} onChange={set("problem")}>
                {PROBLEMS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </Field>
            <Field label="Store">
              <select className={inputCls} value={form.store} onChange={set("store")}>
                {STORES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-dark hover:shadow-lg active:scale-[0.98]"
          >
            <Smartphone className="h-5 w-5" /> Book service
          </button>
        </form>

        {/* ---------- TRACKING ---------- */}
        <div id="track" ref={rightRef} className="scroll-mt-24 space-y-4">
          {/* Live draft preview while typing */}
          {hasDraft && (
            <div className="flex w-full items-center gap-3 rounded-2xl border-2 border-dashed border-brand/50 bg-brand/5 p-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Smartphone className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-bold">
                  {form.brand} {form.model || "Your model"}
                </span>
                <span className="block truncate text-xs text-neutral-600">
                  {form.problem} · {form.name || "Your name"} · +91{" "}
                  {form.phone ? mask(form.phone) : "__________"}
                </span>
              </span>
              <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">
                Draft
              </span>
            </div>
          )}

          {session ? (
            /* Logged in: compact tracking cards */
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-neutral-50 px-4 py-2.5">
                <p className="text-sm font-semibold">
                  Tracking · <span className="font-normal text-neutral-500">+91 {mask(session)}</span>
                </p>
                <button
                  onClick={logout}
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-semibold transition hover:border-brand hover:text-brand active:scale-95"
                >
                  <LogOut className="h-3.5 w-3.5" /> Log out
                </button>
              </div>

              {mine.map((b) => {
                const done = b.stage === 3;
                return (
                  <div
                    key={b.id}
                    className="animate-fade-up rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-bold">{b.model}</h3>
                        <p className="truncate text-sm text-neutral-600">
                          {b.problem} · #{b.code}
                        </p>
                        <p className="truncate text-xs text-neutral-500">
                          {b.name} · {b.store}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                          done ? "bg-green-100 text-green-800" : "bg-accent text-ink"
                        }`}
                      >
                        {STAGES[b.stage]}
                      </span>
                    </div>

                    <ol className="mt-4 grid grid-cols-4">
                      {STAGES.map((s, i) => {
                        const reached = i <= b.stage;
                        return (
                          <li key={s} className="relative flex flex-col items-center text-center">
                            {i > 0 && (
                              <span
                                className={`absolute right-1/2 top-[9px] h-0.5 w-full transition-colors duration-700 ${
                                  reached ? "bg-brand" : "bg-neutral-200"
                                }`}
                              />
                            )}
                            <span
                              className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                                reached
                                  ? "border-brand bg-brand text-white"
                                  : "border-neutral-300 bg-white"
                              } ${i === b.stage && !done ? "ring-4 ring-brand/20" : ""}`}
                            >
                              {reached && <Check className="h-3 w-3" />}
                            </span>
                            <span
                              className={`mt-1.5 text-[11px] font-semibold ${
                                reached ? "text-ink" : "text-neutral-400"
                              }`}
                            >
                              {s}
                            </span>
                          </li>
                        );
                      })}
                    </ol>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <p className="text-xs text-neutral-600">
                        {done ? "Ready for pickup" : `Estimated: ${b.eta}`}
                      </p>
                      {!done && (
                        <button
                          onClick={() => toggleNotify(b.id)}
                          className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition active:scale-95 ${
                            b.notify
                              ? "border border-brand text-brand"
                              : "bg-brand text-white hover:bg-brand-dark"
                          }`}
                        >
                          {b.notify ? (
                            <>
                              <BellRing className="h-3.5 w-3.5" /> You will be notified
                            </>
                          ) : (
                            <>
                              <Bell className="h-3.5 w-3.5" /> Notify me
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Logged out: login card (phone -> otp) */
            <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Lock className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-xl font-bold">Track your service</h2>
                  <p className="text-sm text-neutral-500">
                    {step === "phone"
                      ? "Enter the mobile number you booked with"
                      : `Enter the OTP you received when booking (+91 ${mask(login.phone)})`}
                  </p>
                </div>
              </div>

              {step === "phone" ? (
                <form onSubmit={handlePhoneContinue} className="space-y-4">
                  <Field label="Mobile number">
                    <input
                      className={inputCls}
                      value={login.phone}
                      onChange={(e) =>
                        setLogin((l) => ({ ...l, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))
                      }
                      inputMode="numeric"
                      placeholder="10 digits"
                    />
                  </Field>
                  {loginError && <p className="text-sm text-brand">{loginError}</p>}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98]"
                  >
                    Continue
                  </button>
                </form>
              ) : (
                <form onSubmit={handleOtpContinue} className="space-y-4">
                  <Field label="OTP">
                    <input
                      className={`${inputCls} tracking-[0.5em]`}
                      value={login.otp}
                      onChange={(e) =>
                        setLogin((l) => ({ ...l, otp: e.target.value.replace(/\D/g, "").slice(0, 4) }))
                      }
                      inputMode="numeric"
                      placeholder="4 digits"
                      autoFocus
                    />
                  </Field>
                  {loginError && <p className="text-sm text-brand">{loginError}</p>}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark active:scale-[0.98]"
                  >
                    Continue
                  </button>
                  <div className="flex items-center justify-between text-sm font-semibold text-brand">
                    <button
                      type="button"
                      onClick={() => {
                        setStep("phone");
                        setLoginError("");
                      }}
                      className="hover:underline"
                    >
                      Change number
                    </button>
                    <button type="button" onClick={resendOtp} className="hover:underline">
                      Forgot OTP? Resend
                    </button>
                  </div>
                </form>
              )}

              <p className="mt-4 rounded-xl bg-neutral-50 p-3 text-xs text-neutral-600">
                Demo: the OTP is always <b>{DEMO_OTP}</b>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Single notification, at the bottom of the page */}
      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[80] flex justify-center px-4 pr-20 sm:pr-4">
          <div className="animate-fade-up pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl bg-ink p-4 text-white shadow-2xl">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
              <BellRing className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{toast.title}</p>
              <p className="text-sm text-white/80">{toast.msg}</p>
            </div>
            <button onClick={() => setToast(null)} aria-label="Close">
              <X className="h-5 w-5 text-white/70" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}