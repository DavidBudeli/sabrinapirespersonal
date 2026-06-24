import { ArrowRight, Sparkles } from "lucide-react";

import { siteConfig } from "@/lib/constants";

export function Differential() {
  return (
    <section className="relative overflow-hidden bg-[#2F211D] py-16 text-[#FFF8F3] md:py-24" id="avaliacao">
      <div
        aria-hidden="true"
        className="organic-ribbon absolute -right-24 top-10 h-72 w-72 bg-[#C9828E]/18"
        data-organic
      />
      <div
        aria-hidden="true"
        className="organic-ribbon absolute -left-28 bottom-8 h-64 w-64 bg-[#F3DDD5]/10"
        data-organic
      />

      <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="relative" data-parallax>
          <div className="rounded-[20px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-md md:p-8">
            <Sparkles aria-hidden="true" className="size-8 text-[#F3DDD5]" />
            <p className="mt-6 text-sm font-semibold text-[#F3DDD5]">
              Avaliação personalizada
            </p>
            <p className="font-heading mt-4 text-4xl leading-none text-white md:text-6xl">
              Sem fórmulas
            </p>
            <p className="font-heading mt-2 text-4xl leading-none text-[#C9828E] md:text-6xl">
              prontas.
            </p>
            <div className="mt-8 h-px bg-white/14" />
            <p className="mt-6 text-sm leading-6 text-[#FFF8F3]/72">
              Acompanhamento sob medida começa entendendo corpo, rotina, histórico e objetivo.
            </p>
          </div>
        </div>

        <div data-reveal>
          <p className="text-sm font-semibold text-[#C9828E]">Por que não existe um plano pronto?</p>
          <h2 className="font-heading mt-3 text-4xl leading-tight text-white md:text-6xl">
            Seu corpo, sua rotina e seu objetivo não cabem em um plano genérico.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#FFF8F3]/82">
            Antes de indicar qualquer acompanhamento, a Sabrina entende sua realidade,
            seu histórico, suas dificuldades e o objetivo que você deseja alcançar.
            Assim, o plano é construído com mais clareza, segurança e estratégia.
          </p>
          <p className="mt-5 text-base font-semibold leading-7 text-[#F3DDD5] md:text-lg">
            Por isso, o primeiro passo é uma avaliação personalizada.
          </p>
          <a
            className="button-shine mt-8 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#FFF8F3] px-6 py-4 text-sm font-semibold text-[#2F211D] transition hover:bg-white sm:w-auto"
            href={siteConfig.whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            Solicitar avaliação personalizada
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <p className="mt-3 text-xs font-semibold text-[#FFF8F3]/62">
            Sem promessas irreais. Com estratégia.
          </p>
        </div>
      </div>
    </section>
  );
}
