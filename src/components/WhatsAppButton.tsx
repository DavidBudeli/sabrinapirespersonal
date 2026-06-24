import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      aria-label="Falar com a Sabrina pelo WhatsApp"
      className="button-shine fixed inset-x-4 z-50 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#2F211D] px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(47,33,29,0.28)] md:hidden"
      href={siteConfig.whatsappUrl}
      rel="noreferrer"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      Quero minha avaliação
    </a>
  );
}
