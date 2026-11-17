/*export default function AccessoriesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-bold">This is Accessories Page</h1>
    </section>
  );
}*/


import AccessoriesClient from "@/components/AccessoriesClient";

export const metadata = {
  title: "Accessories | Orange Mobile Store",
  description: "Earphones, cases, chargers, power banks, smart watches and more at Orange Mobile Store, Salem.",
};

export default async function AccessoriesPage({ searchParams }) {
  const { category } = await searchParams;
  return <AccessoriesClient initialCategory={typeof category === "string" ? category : ""} />;
}
