"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Desktop only: breadcrumb (Home > ... > Current).
// On mobile nothing is shown here, the back arrow lives in the Navbar.
//
// Usage:
//   <BackBar current="Contact" />
//   <BackBar crumbs={[{ label: "Home", href: "/" }, { label: "Mobiles", href: "/mobiles" }, { label: "Samsung" }]} />
export default function BackBar({ current, crumbs }) {
  const items = crumbs ?? [{ label: "Home", href: "/" }, { label: current }];

  return (
    <nav
      aria-label="Breadcrumb"
      className="hidden flex-wrap items-center gap-1 text-sm text-white/85 md:flex"
    >
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-70" />}
            {last || !c.href ? (
              <span aria-current={last ? "page" : undefined}>{c.label}</span>
            ) : (
              <Link href={c.href} className="hover:underline">
                {c.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}