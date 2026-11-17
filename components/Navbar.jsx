"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/mobiles", label: "Mobiles" },
  { href: "/accessories", label: "Accessories" },
  { href: "/service", label: "Service" },
  { href: "/contact", label: "Contact" },
];

// Highlight a nav item on its own page and on any nested page (e.g. /mobiles/oppo)
const isActive = (pathname, href) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

// Parent page used when the user opened this page directly (WhatsApp, Google...)
const parentOf = (pathname) => {
  const parts = pathname.split("/").filter(Boolean);
  parts.pop();
  return parts.length ? "/" + parts.join("/") : "/";
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const showBack = pathname !== "/";

  function goBack() {
    setOpen(false);
    let depth = 0;
    try {
      const stack = JSON.parse(sessionStorage.getItem("navStack") || "[]");
      depth = Array.isArray(stack) ? stack.length : 0;
    } catch {}

    if (depth > 1) router.back(); // previous page inside our site
    else router.push(parentOf(pathname));
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Left: back arrow (mobile only, not on Home) + Logo */}
        <div className="flex items-center gap-1">
          {showBack && (
            <button
              type="button"
              onClick={goBack}
              aria-label="Go back"
              className="-ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-neutral-800 transition active:scale-90 active:bg-neutral-100 md:hidden"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          )}

          <Link href="/" onClick={() => setOpen(false)} className="shrink-0 leading-tight">
            <span className="block text-2xl font-semibold text-brand">Orange</span>
            <span className="block text-[11px] font-semibold text-brand">Mobile Store</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand/10 text-brand"
                    : "text-neutral-700 hover:bg-brand/5 hover:text-brand"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop: number + call icon */}
        <a
          href="tel:+919677750800"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark hover:shadow-lg md:flex"
        >
          <Phone className="h-4 w-4" />
          96777 50800
        </a>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition hover:bg-brand/5 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 border-t border-neutral-100 px-4 py-3 sm:px-6">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active ? "bg-brand/10 text-brand" : "text-neutral-800 hover:bg-neutral-100"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}