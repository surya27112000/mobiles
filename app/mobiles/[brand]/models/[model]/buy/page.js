import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageHero from "@/components/mobiles/PageHero";
import CheckoutForm from "@/components/mobiles/CheckoutForm";
import { brands, getBrand } from "@/data/mobiles";
import { getSpecSheet } from "@/data/specs";

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.flatMap((b) =>
    b.series.flatMap((s) => s.models.map((m) => ({ brand: b.id, model: m.id })))
  );
}

function findModel(brand, modelId) {
  for (const series of brand.series) {
    const model = series.models.find((m) => m.id === modelId);
    if (model) return { series, model };
  }
  return null;
}

export async function generateMetadata({ params }) {
  const { brand: brandId, model: modelId } = await params;
  const brand = getBrand(brandId);
  const found = brand && findModel(brand, modelId);
  return { title: found ? `Buy ${found.model.name} | Orange Mobile Store` : "Mobiles | Orange Mobile Store" };
}

// Buy Now destination: order request for one model.
export default async function BuyPage({ params }) {
  const { brand: brandId, model: modelId } = await params;
  const brand = getBrand(brandId);
  if (!brand) notFound();
  const found = findModel(brand, modelId);
  if (!found) notFound();

  const { series, model } = found;
  const sheet = getSpecSheet({ brand, series, model });
  const detailsHref = `/mobiles/${brand.id}/models/${model.id}`;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Mobiles", href: "/mobiles" },
          { label: brand.name, href: `/mobiles/${brand.id}` },
          { label: model.name, href: detailsHref },
          { label: "Buy now" },
        ]}
        title={`Buy ${model.name}`}
        subtitle="Send your order request – we confirm availability, final price and delivery with you."
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Suspense fallback={null}>
          <CheckoutForm
            brand={{ id: brand.id, name: brand.name, color: brand.color }}
            model={{ id: model.id, name: model.name, spec: model.spec, price: model.price }}
            kind={sheet.kind}
            lenses={sheet.lenses}
            colours={sheet.colours}
            detailsHref={detailsHref}
          />
        </Suspense>
      </section>
    </>
  );
}
