import Image from "next/image";

import { iconAssets, siteConfig } from "@/lib/constants";

const ariaLabel = "Solicitar avaliação personalizada pelo WhatsApp";

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <span className="relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FFF8F3] shadow-[inset_0_0_0_1px_rgba(255,248,243,0.28)]">
      <Image
        alt=""
        aria-hidden="true"
        className={className}
        height={28}
        priority
        quality={95}
        sizes="28px"
        src={iconAssets.whatsapp}
        width={28}
      />
    </span>
  );
}

export function WhatsAppButton() {
  return (
    <>
      <a
        aria-label={ariaLabel}
        className="button-shine fixed right-4 z-50 inline-flex min-h-12 w-[calc(100vw-48px)] max-w-[304px] items-center justify-center gap-2.5 rounded-full border border-[#FFF8F3]/20 bg-[#2F211D] px-5 py-2.5 text-sm font-semibold text-[#FFF8F3] shadow-[0_18px_45px_rgba(47,33,29,0.28)] transition duration-300 active:scale-[0.98] md:hidden"
        href={siteConfig.whatsappUrl}
        rel="noopener noreferrer"
        style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
        target="_blank"
      >
        <WhatsAppIcon />
        <span className="relative z-10">Quero minha avaliação</span>
      </a>

      <a
        aria-label={ariaLabel}
        className="button-shine fixed right-6 bottom-6 z-50 hidden min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#FFF8F3]/18 bg-[#2F211D] px-4 py-2.5 text-sm font-semibold text-[#FFF8F3] shadow-[0_16px_42px_rgba(47,33,29,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#B86A52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B86A52] md:inline-flex"
        href={siteConfig.whatsappUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="size-[18px]" />
        <span className="relative z-10">Falar com a Sabrina</span>
      </a>
    </>
  );
}
