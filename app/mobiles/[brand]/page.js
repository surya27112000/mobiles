import { notFound } from "next/navigation";
import PageHero from "@/components/mobiles/PageHero";
import BrandLogo from "@/components/mobiles/BrandLogo";
import BrandProducts from "@/components/mobiles/BrandProducts";
import { brands, getBrand } from "@/data/mobiles";

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.id }));
}

export async function generateMetadata({ params }) {
  const { brand: id } = await params;
  const brand = getBrand(id);
  return { title: brand ? `${brand.name} | Orange Mobile Store` : "Mobiles | Orange Mobile Store" };
}

// Opens straight into the brand's products: Mobiles | Accessories toggle, no extra screen.
export default async function BrandPage({ params }) {
  const { brand: id } = await params;
  const brand = getBrand(id);
  if (!brand) notFound();

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Mobiles", href: "/mobiles" },
          { label: brand.name },
        ]}
        title={brand.name}
        subtitle={`Browse ${brand.name} mobiles and accessories.`}
        leading={
          <span className="flex h-16 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm sm:h-20 sm:w-32">
            <BrandLogo brand={brand} />
          </span>
        }
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <BrandProducts brand={brand} />
      </section>
    </>
  );
}
