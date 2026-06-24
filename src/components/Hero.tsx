import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { imageAlts, siteConfig } from "@/lib/constants";
import { PremiumImage } from "@/components/PremiumImage";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden pt-24 pb-14 sm:pt-32 md:pt-36 md:pb-20"
      data-hero
      id="inicio"
    >
      <div
        aria-hidden="true"
        className="organic-ribbon absolute -right-28 bottom-8 h-72 w-72 bg-[#F3DDD5]/70 md:h-96 md:w-96"
        data-organic
      />
      <div
        aria-hidden="true"
        className="leaf-line left-5 top-32"
        data-organic
      />
      <div
        aria-hidden="true"
        className="leaf-line bottom-24 right-8 rotate-12"
        data-organic
      />

      <div className="container-shell grid items-center gap-7 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 order-2 lg:order-1">
          <BrandLogo
            className="mb-3 hidden w-16 opacity-80 sm:block"
            tone="terracotta"
            variant="monogram"
          />
          <div
            className="inline-flex items-center gap-2 rounded-full border border-[#B86A52]/24 bg-white/72 px-4 py-2 text-sm font-semibold text-[#5A3E36] shadow-sm"
            data-hero-badge
          >
            <Sparkles aria-hidden="true" className="size-4 text-[#B86A52]" />
            {siteConfig.slogan}
          </div>

          <h1 className="font-heading mt-5 max-w-3xl text-[2.35rem] leading-[0.96] text-[#1E1715] min-[390px]:text-[2.55rem] sm:mt-7 sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1">
              <span className="block italic text-[#B86A52]" data-hero-line>
                Movimento
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="block" data-hero-line>
                com propósito
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="block" data-hero-line>
                para transformar
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="block text-[#5A3E36]" data-hero-line>
                seu corpo
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#5A3E36]/82 sm:text-lg" data-hero-sub>
            Consultoria online, acompanhamento presencial e Pilates para quem busca
            força, mobilidade, definição muscular e qualidade de vida com orientação
            personalizada.
          </p>

          <div className="mt-8 hidden gap-3 sm:flex sm:flex-row" data-hero-cta>
            <a
              className="button-shine inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#2F211D] px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_18px_38px_rgba(47,33,29,0.22)] transition hover:bg-[#5A3E36] sm:text-base"
              href={siteConfig.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Solicitar avaliação personalizada
              <ArrowRight aria-hidden="true" className="size-5 shrink-0" />
            </a>
            <a
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#5A3E36]/16 bg-white/72 px-6 py-4 text-sm font-semibold text-[#2F211D] transition hover:border-[#B86A52]/45 hover:bg-[#F3DDD5]/35 sm:text-base"
              href="#servicos"
            >
              Conhecer acompanhamentos
              <ChevronRight aria-hidden="true" className="size-5 shrink-0" />
            </a>
          </div>

          <p className="mt-4 max-w-xl rounded-lg border border-[#B86A52]/18 bg-white/64 p-4 text-sm font-semibold leading-6 text-[#5A3E36]" data-hero-note>
            Antes de começar, a Sabrina entende seu objetivo e indica o melhor caminho
            para você.
          </p>

          <p className="mt-3 text-xs font-semibold text-[#5A3E36]/68" data-hero-note>
            Atendimento personalizado pelo WhatsApp.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-2 text-[#5A3E36]" data-hero-note>
            {["Educação Física", "Pilates", "Movimento com técnica"].map((item) => (
              <div className="rounded-lg border border-[#5A3E36]/10 bg-white/62 px-3 py-3 text-center text-xs font-semibold sm:text-sm" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[300px] min-[390px]:max-w-[320px] sm:max-w-[430px] lg:order-2 lg:mr-0 lg:max-w-[520px]" data-hero-visual>
          <div className="absolute -inset-4 -z-10 rounded-[32px] border border-[#B86A52]/18 bg-[#C9828E]/10" />
          <div className="relative">
            <PremiumImage
              alt={imageAlts.hero}
              className="rounded-[28px] shadow-[0_32px_80px_rgba(90,62,54,0.2)]"
              height={1440}
              imageClassName="aspect-square sm:aspect-[3/4] lg:aspect-[4/5]"
              objectPosition="50% 18%"
              priority
              quality={94}
              reveal={false}
              sizes="(min-width: 1024px) 520px, (min-width: 640px) 430px, 92vw"
              src={siteConfig.heroImage}
              width={1080}
            />
            <BrandLogo
              className="pointer-events-none absolute right-5 top-5 w-16 opacity-[0.14]"
              tone="white"
              variant="monogram"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-white/70 to-transparent lg:block" />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/55 bg-white/82 p-4 shadow-[0_18px_45px_rgba(47,33,29,0.16)] backdrop-blur-md">
              <p className="text-xs font-semibold text-[#B86A52]">Personal trainer e Pilates</p>
              <p className="mt-1 text-sm font-semibold text-[#2F211D]">
                Cuidado, técnica e constância
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
