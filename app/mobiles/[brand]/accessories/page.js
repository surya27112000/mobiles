import { redirect } from "next/navigation";
import { brands } from "@/data/mobiles";

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.id }));
}

// Accessories now live on /mobiles/<brand> behind the Mobiles | Accessories toggle.
export default async function AccessoriesRedirect({ params }) {
  const { brand } = await params;
  redirect(`/mobiles/${brand}#accessories`);
}
