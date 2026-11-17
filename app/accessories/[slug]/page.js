import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import PageHero from "@/components/mobiles/PageHero";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ACCESSORIES, getAccessory } from "@/data/accessories";
import { whatsappLink } from "@/lib/whatsapp";

// Only products in data/accessories.js have a page; anything else shows 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return ACCESSORIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getAccessory(slug);
  return {
    title: product
      ? `${product.name} price | Orange Mobile Store`
      : "Accessories | Orange Mobile Store",
  };
}

export default async function AccessoryDetailsPage({ params }) {
  const { slug } = await params;
  const product = getAccessory(slug);
  if (!product) notFound();

  const price = `₹${product.price.toLocaleString("en-IN")}`;
  const message = `Hi Orange Mobile Store, I'm interested in ${product.name} (approx ${price}). Is it available?`;

  // "More in this category", then other accessories to fill up to 4
  const related = [
    ...ACCESSORIES.filter((p) => p.category === product.category && p.id !== product.id),
    ...ACCESSORIES.filter((p) => p.category !== product.category),
  ].slice(0, 4);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Accessories", href: "/accessories" },
          { label: product.name },
        ]}
        title={product.name}
        subtitle={`${product.brand} · ${product.category}`}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Link
          href="/accessories"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> All accessories
        </Link>

        <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="self-start lg:sticky lg:top-24">
            <ProductGallery name={product.name} category={product.category} images={product.images} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-full bg-brand px-3 py-1 text-white">{product.brand}</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">
                {product.category}
              </span>
            </div>

            <p className="mt-5 text-3xl font-bold text-brand sm:text-4xl">
              {price} <span className="text-sm font-normal text-neutral-500">approx.</span>
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Offers and exact price vary by day. Message us for today&apos;s best price.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
              >
                <WhatsAppIcon className="h-5 w-5" /> Ask on WhatsApp
              </a>
              <a
                href="tel:+919677750800"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand px-6 py-3.5 font-semibold text-brand transition hover:bg-brand/10"
              >
                <Phone className="h-5 w-5" /> Call 96777 50800
              </a>
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              Prices are for reference and may vary by colour, model or offer. Please confirm with the
              store before buying.
            </p>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold text-ink">More accessories</h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
