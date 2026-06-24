import { AtSign, Phone } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#5A3E36]/10 bg-white pt-10 pb-28 md:pb-10">
      <div className="container-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <BrandLogo className="w-[244px]" sizes="244px" tone="dark" variant="horizontal" />
          <p className="mt-2 text-sm text-[#5A3E36]/72">
            Consultoria online, presencial e Pilates
          </p>
          <p className="mt-5 max-w-2xl text-xs leading-5 text-[#5A3E36]/62">
            Este site não promete resultados milagrosos. A evolução depende de constância,
            individualidade biológica e acompanhamento adequado.
          </p>
        </div>

        <div className="grid content-start gap-3 text-sm text-[#5A3E36]/78 md:justify-end md:text-right">
          <a
            className="inline-flex items-center gap-2 transition hover:text-[#2F211D] md:justify-end"
            href={siteConfig.instagramUrl}
            rel="noreferrer"
            target="_blank"
          >
            <AtSign aria-hidden="true" className="size-4" />
            Instagram: {siteConfig.instagramHandle}
          </a>
          <a
            className="inline-flex items-center gap-2 transition hover:text-[#2F211D] md:justify-end"
            href={siteConfig.whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Phone aria-hidden="true" className="size-4" />
            WhatsApp: {siteConfig.phoneLabel}
          </a>
        </div>
      </div>

      <div className="container-shell mt-8 flex flex-col gap-3 border-t border-[#5A3E36]/10 pt-5 text-center text-xs text-[#5A3E36]/58 md:flex-row md:items-center md:justify-between md:text-left">
        <p>&copy; 2026 Sabrina Pires. Todos os direitos reservados.</p>
        <a
          className="transition-colors hover:text-[#B86A52]"
          href="https://hyperag.com.br/pt-BR"
          rel="noopener noreferrer"
          target="_blank"
        >
          Desenvolvido por HyperAG
        </a>
      </div>
    </footer>
  );
}
