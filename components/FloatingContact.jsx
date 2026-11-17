import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-20 right-4 md:bottom-5 md:right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:+919677750800"
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg transition hover:scale-110 hover:bg-brand-dark"
      >
        <Phone className="h-5 w-5" />
      </a>

      <a
        href="https://wa.me/919677750800"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsAppIcon className="relative h-6 w-6" />
      </a>
    </div>
  );
}