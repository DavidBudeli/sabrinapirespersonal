import { ArrowRight, AtSign } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { PremiumImage } from "@/components/PremiumImage";
import { imageAlts, siteConfig } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24" id="contato">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[20px] bg-[#C9828E] p-5 text-white shadow-[0_30px_90px_rgba(201,130,142,0.28)] md:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="organic-ribbon absolute -right-24 -top-20 h-72 w-72 bg-white/18"
            data-organic
          />
          <div
            aria-hidden="true"
            className="organic-ribbon absolute -bottom-28 -left-24 h-72 w-72 bg-[#2F211D]/14"
            data-organic
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div className="relative">
              <PremiumImage
                alt={imageAlts.method}
                className="border-white/50 shadow-[0_22px_60px_rgba(47,33,29,0.18)]"
                height={1280}
                imageClassName="aspect-[4/5]"
                objectPosition="50% 58%"
                quality={90}
                sizes="(min-width: 1024px) 380px, 86vw"
                src={siteConfig.methodImage}
                width={960}
              />
              <BrandLogo
                className="pointer-events-none absolute right-8 top-8 w-20 opacity-[0.14]"
                tone="white"
                variant="monogram"
              />
            </div>

            <div data-reveal>
              <p className="text-sm font-semibold text-white/78">Atendimento pelo WhatsApp</p>
              <h2 className="font-heading mt-3 text-4xl leading-tight md:text-6xl">
                Vamos encontrar o melhor caminho para o seu objetivo?
              </h2>
              <p className="mt-5 text-base leading-7 text-white/86 md:text-lg">
                Fale com a Sabrina, conte sobre sua rotina e receba uma orientação
                inicial para entender qual acompanhamento combina melhor com você.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="button-shine inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#2F211D] px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#5A3E36] sm:text-base"
                  href={siteConfig.whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Solicitar avaliação personalizada
                  <ArrowRight aria-hidden="true" className="size-5" />
                </a>
                <a
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/34 bg-white/14 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/22 sm:text-base"
                  href={siteConfig.instagramUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AtSign aria-hidden="true" className="size-5" />
                  {siteConfig.instagramHandle}
                </a>
              </div>
              <p className="mt-3 text-xs font-semibold text-white/70">
                Atendimento personalizado pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
