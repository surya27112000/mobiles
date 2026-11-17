import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BatteryCharging,
  Bell,
  Cable,
  ChevronRight,
  Headphones,
  HardDrive,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Speaker,
  Store,
  Watch,
  Wrench,
  Zap,
} from "lucide-react";
import { brands, countModels, formatPrice, getBrand, plural } from "@/data/mobiles";
import { CATEGORIES } from "@/data/accessories";
import { whatsappLink } from "@/lib/whatsapp";
import HeroTrack from "@/components/home/HeroTrack";
import CatalogSearch from "@/components/home/CatalogSearch";
import BrandGrid from "@/components/home/BrandGrid";

export const metadata = {
  title: "Orange Mobile Store | Mobiles, Accessories & Service in Salem",
  description:
    "Buy the latest mobiles and accessories, or get your phone repaired. Exclusive Mi Store, Salem.",
};

const categoryIcons = {
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

const featured = [
  { id: "oppo", image: "/images/oppo-phone.svg", tint: "from-emerald-50 to-neutral-100" },
  { id: "vivo", image: "/images/vivo-phone.svg", tint: "from-indigo-50 to-neutral-100" },
];

// Three sample models for a brand: the middle model of its first three series.
function sampleModels(brand) {
  return brand.series.slice(0, 3).map((s) => ({
    model: s.models[Math.floor(s.models.length / 2)],
    series: s,
  }));
}

const whyCards = [
  {
    href: "/service",
    icon: Bell,
    title: "Service alerts",
    text: "Get notified the moment your repair is completed.",
  },
  {
    href: whatsappLink("Hi Orange Mobile Store, I'd like to check stock and price."),
    external: true,
    icon: MessageCircle,
    title: "Ask on WhatsApp",
    text: "Check stock and price for any model in one tap.",
  },
  {
    href: "/contact",
    icon: Store,
    title: "3 stores in Salem",
    text: "Cherry Road and two on T.V.K. Road, Ammapet.",
  },
];

function SectionHead({ title, href, linkLabel }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <Link href={href} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand hover:underline">
        {linkLabel} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function HomePage() {
  const modelTotal = brands.reduce((n, b) => n + countModels(b), 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-brand to-[#E0583A] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-2 md:py-14">
          <div className="min-w-0 animate-fade-up">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
              Exclusive Mi Store, Salem
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Buy a new phone. Get your old one fixed.
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
              Orange Mobile Store sells the latest mobiles and accessories, and repairs the ones you already own.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/mobiles"
                className="rounded-full bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-95 active:scale-[0.98]"
              >
                Shop mobiles
              </Link>
              <Link
                href="/service"
                className="rounded-full border-2 border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                Book a service
              </Link>
            </div>
            <div className="mt-6 max-w-md">
              <HeroTrack />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-xs md:max-w-none">
            <Image
              src="/images/hero-phones.svg"
              alt="Oppo and Vivo mobiles"
              width={560}
              height={520}
              priority
              unoptimized
              className="animate-float mx-auto h-auto w-full md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <CatalogSearch />
        <p className="mt-2 px-2 text-xs text-neutral-500">
          Search across {brands.length} brands and {modelTotal} models.
        </p>
      </section>

      {/* Sales / Service */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-8 sm:px-6 md:grid-cols-2">
        <Link
          href="/mobiles"
          className="group rounded-3xl bg-linear-to-br from-[#D94F2E] to-[#E8664A] p-6 text-white transition hover:shadow-xl sm:p-8"
        >
          <Smartphone className="h-7 w-7" />
          <h2 className="mt-4 text-2xl font-bold">Mobile Sales</h2>
          <p className="mt-2 max-w-sm text-white/90">Pick a brand, open a series and see every model we stock.</p>
          <span className="mt-4 inline-flex items-center gap-1 font-semibold text-accent">
            Browse mobiles <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
        <Link
          href="/service"
          className="group rounded-3xl bg-linear-to-br from-[#6E2850] to-[#8E3F69] p-6 text-white transition hover:shadow-xl sm:p-8"
        >
          <Wrench className="h-7 w-7" />
          <h2 className="mt-4 text-2xl font-bold">Mobile Service</h2>
          <p className="mt-2 max-w-sm text-white/90">Book a repair, then follow it with your 4-digit code.</p>
          <span className="mt-4 inline-flex items-center gap-1 font-semibold text-accent">
            Book a service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
      </section>

      {/* Brands */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <SectionHead title="Shop mobiles by brand" href="/mobiles" linkLabel="All brands" />
        <BrandGrid />
      </section>

      {/* Featured: Oppo and Vivo */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <SectionHead title="Popular right now" href="/mobiles" linkLabel="See all" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featured.map((f) => {
            const brand = getBrand(f.id);
            if (!brand) return null;
            return (
              <div key={f.id} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
                <Link href={`/mobiles/${brand.id}`} className={`flex items-center gap-4 bg-linear-to-br ${f.tint} p-5`}>
                  <Image
                    src={f.image}
                    alt={`${brand.name} mobile`}
                    width={240}
                    height={440}
                    unoptimized
                    className="h-44 w-auto shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">{brand.name}</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      {plural(brand.series.length, "series", "series")}, {plural(countModels(brand), "model", "models")}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      View all {brand.name} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
                <ul className="divide-y divide-neutral-100 border-t border-neutral-100">
                  {sampleModels(brand).map(({ model, series }) => (
                    <li key={model.id}>
                      <Link
                        href={`/mobiles/${brand.id}/models/${model.id}`}
                        className="flex items-center gap-3 px-5 py-3 transition hover:bg-neutral-50"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-semibold">{model.name}</span>
                          <span className="block truncate text-xs text-neutral-500">
                            {series.name} · {model.spec}
                          </span>
                        </span>
                        <span className="shrink-0 text-right">
                          <span className="block font-bold text-brand">{formatPrice(model.price)}</span>
                          <span className="block text-[11px] text-neutral-500">approx.</span>
                        </span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-neutral-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Accessories */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <SectionHead title="Accessories" href="/accessories" linkLabel="See all" />
        <ul className="grid grid-cols-3 gap-3 lg:grid-cols-9">
          {CATEGORIES.map((c) => {
            const Icon = categoryIcons[c] || Smartphone;
            return (
              <li key={c}>
                <Link
                  href={`/accessories?category=${encodeURIComponent(c)}`}
                  className="flex h-full flex-col items-center gap-2 rounded-2xl bg-stone-100 px-2 py-5 text-center text-xs font-semibold transition hover:bg-brand/10 hover:text-brand sm:text-sm"
                >
                  <Icon className="h-6 w-6" />
                  {c}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Why Orange */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ul className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
          {whyCards.map(({ href, external, icon: Icon, title, text }) => {
            const cls =
              "group flex h-full items-start gap-4 rounded-3xl border border-neutral-200 bg-stone-100 p-5 transition hover:border-brand/40 hover:bg-brand/5 hover:shadow-md active:scale-[0.98] active:bg-brand/10 sm:p-6 md:flex-col md:gap-0";
            const body = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-sm md:h-auto md:w-auto md:bg-transparent md:shadow-none">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="min-w-0 flex-1 md:mt-2">
                  <span className="block font-bold">{title}</span>
                  <span className="mt-1 block text-sm text-neutral-600">{text}</span>
                </span>
                <ChevronRight className="mt-3 h-5 w-5 shrink-0 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-brand md:hidden" />
              </>
            );
            return (
              <li key={title}>
                {external ? (
                  <a href={href} target="_blank" rel="noreferrer" className={cls}>
                    {body}
                  </a>
                ) : (
                  <Link href={href} className={cls}>
                    {body}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
