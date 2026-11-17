import PageHero from "@/components/mobiles/PageHero";
import BrandExplorer from "@/components/mobiles/BrandExplorer";

export const metadata = {
  title: "Mobiles | Orange Mobile Store",
  description: "Browse smartphone and keypad mobile brands available at Orange Mobile Store, Salem.",
};

export default function MobilesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Mobiles" }]}
        title="Mobiles"
        subtitle="Choose a brand to see all its series and models."
      />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <BrandExplorer />
      </section>
    </>
  );
}
