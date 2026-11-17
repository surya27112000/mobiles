// Same number the floating WhatsApp button already uses.
export const WHATSAPP_NUMBER = "919677750800";

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
