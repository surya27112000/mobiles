import { redirect } from "next/navigation";
import { brands } from "@/data/mobiles";

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.id }));
}

// The separate listing screen was merged into /mobiles/<brand>; keep old links working.
export default async function ModelsRedirect({ params }) {
  const { brand } = await params;
  redirect(`/mobiles/${brand}`);
}
