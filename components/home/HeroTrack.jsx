"use client";

import Link from "next/link";
import { Search } from "lucide-react";

// Home page tracking: just a button. The mobile number + OTP login lives on the Service page.
export default function HeroTrack() {
  return (
    <Link
      href="/service#track"
      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand shadow-xl transition hover:bg-neutral-100 active:scale-[0.98]"
    >
      <Search className="h-4 w-4" />
      Track your service
    </Link>
  );
}
