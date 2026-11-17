import Link from "next/link";
import { Phone, MapPin, ExternalLink } from "lucide-react";

const numbers = ["96777 50800", "90436 50800", "96269 77277"];

const links = [
  ["/mobiles", "Mobiles"],
  ["/accessories", "Accessories"],
  ["/service", "Service & Tracking"],
  ["/contact", "Contact"],
];

const mapUrl = (q) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

// Replace each url with the exact Google Maps share link from the client when available
const stores = [
  {
    name: "Cherry Road, Salem",
    url: mapUrl("Orange Mobile Store, Cherry Road, Salem"),
  },
  {
    name: "T.V.K. Road, Ammapet (Store 1)",
    url: mapUrl("Orange Mobile Store, T.V.K. Road, Ammapet, Salem"),
  },
  {
    name: "T.V.K. Road, Ammapet (Store 2)",
    url: mapUrl("Orange Mobile Store, T.V.K. Road, Ammapet, Salem"),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-ink pb-16 text-white md:pb-0">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-6 px-4 py-8 sm:px-6 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <p className="text-2xl font-semibold leading-none">Orange</p>
          <p className="text-[11px] font-semibold text-accent">Mobile Store</p>
          <p className="mt-2 text-xs leading-relaxed text-white/70">
            Mobile Sales &amp; Service · Accessories.
            <br />
            Exclusive Mi Store, Salem.
          </p>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">Shop</p>
          <ul className="space-y-1.5 text-sm text-white/80">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">Call us</p>
          <ul className="space-y-1.5 text-sm text-white/80">
            {numbers.map((n) => (
              <li key={n}>
                <a
                  href={`tel:+91${n.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 transition hover:text-accent"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" /> {n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">Our stores</p>
          <ul className="space-y-1.5 text-sm text-white/80">
            {stores.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-2 transition hover:text-accent"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  <span className="group-hover:underline">{s.name}</span>
                  <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 opacity-0 transition group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-3 pr-20 text-xs text-white/50 sm:px-6">
          © 2026 Orange Mobile Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}