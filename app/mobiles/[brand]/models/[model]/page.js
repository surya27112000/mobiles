import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/mobiles/PageHero";
import ProductHero from "@/components/mobiles/ProductHero";
import SpecSections from "@/components/mobiles/SpecSections";
import ModelCard from "@/components/mobiles/ModelCard";
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
  return {
    title: found
      ? `${found.model.name} price & specifications | Orange Mobile Store`
      : "Mobiles | Orange Mobile Store",
  };
}

export default async function ModelDetailsPage({ params }) {
  const { brand: brandId, model: modelId } = await params;
  const brand = getBrand(brandId);
  if (!brand) notFound();
  const found = findModel(brand, modelId);
  if (!found) notFound();

  const { series, model } = found;
  const sheet = getSpecSheet({ brand, series, model });

  // "More like this": rest of the series first, then other series of the same brand.
  const related = [
    ...series.models.filter((m) => m.id !== model.id).map((m) => ({ m, kind: series.kind })),
    ...brand.series
      .filter((s) => s.id !== series.id)
      .flatMap((s) => s.models.map((m) => ({ m, kind: s.kind }))),
  ].slice(0, 4);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Mobiles", href: "/mobiles" },
          { label: brand.name, href: `/mobiles/${brand.id}` },
          { label: model.name },
        ]}
        title={model.name}
        subtitle={`${brand.name} · ${series.name} · ${model.spec}`}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Link
          href={`/mobiles/${brand.id}`}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> All {brand.name} mobiles
        </Link>

        <ProductHero brand={brand} seriesName={series.name} model={model} sheet={sheet} />

        <h2 className="mb-5 mt-14 text-2xl font-bold text-ink">Full specifications</h2>
        <SpecSections brand={brand} series={series} model={model} sheet={sheet} />
        <p className="mt-4 text-xs text-neutral-500">
          Specifications and prices are for reference and may vary by variant, region or offer. Please
          confirm with the store before buying.
        </p>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold text-ink">More from {brand.name}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map(({ m, kind }) => (
                <ModelCard key={m.id} model={m} brand={brand} kind={kind} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
