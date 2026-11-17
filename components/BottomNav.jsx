"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Smartphone, Headphones, Radar, MapPin } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", icon: House },
  { href: "/mobiles", label: "Mobiles", icon: Smartphone },
  { href: "/accessories", label: "Accessories", icon: Headphones },
  { href: "/service", label: "Track", icon: Radar },
  { href: "/contact", label: "Stores", icon: MapPin },
];

// Phone-only tab bar (hidden from md and up)
export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center gap-0.5 py-2 text-[11px] font-semibold transition ${
                  active ? "text-brand" : "text-neutral-600"
                }`}
              >
                <Icon className="h-6 w-6" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
