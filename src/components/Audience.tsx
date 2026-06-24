import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { PremiumImage } from "@/components/PremiumImage";
import { imageAlts, movementCards, purposeCards, siteConfig } from "@/lib/constants";

export function Audience() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24" id="movimento">
      <div
        aria-hidden="true"
        className="organic-ribbon absolute -right-28 bottom-6 h-72 w-72 bg-[#F3DDD5]/55"
        data-organic
      />

      <div className="container-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div data-reveal>
            <p className="text-sm font-semibold text-[#B86A52]">Movimento com propósito</p>
            <h2 className="font-heading mt-3 text-4xl leading-tight text-[#1E1715] md:text-6xl">
              Movimento com <span className="italic text-[#B86A52]">propósito.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5A3E36]/82 md:text-lg">
              Cada treino precisa fazer sentido para o seu corpo, sua rotina e seu objetivo.
              Por isso, o acompanhamento da Sabrina combina técnica, estratégia e constância
              para transformar movimento em evolução real.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2" data-stagger>
            {movementCards.map((card) => (
              <div
                className="group rounded-lg border border-[#5A3E36]/10 bg-[#FFF8F3] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#B86A52]/45 hover:bg-white hover:shadow-[0_20px_50px_rgba(90,62,54,0.12)]"
                data-card
                key={card}
              >
                <div className="flex items-start justify-between gap-4">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#B86A52]" />
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-[#5A3E36]/38 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#B86A52]"
                  />
                </div>
                <p className="mt-4 text-base font-semibold leading-6 text-[#2F211D]">{card}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3" data-stagger>
            {purposeCards.map((card) => (
              <article className="rounded-lg border border-[#B86A52]/14 bg-white/70 p-5" data-card key={card.title}>
                <h3 className="font-heading text-xl text-[#2F211D]">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5A3E36]/76">{card.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[24px] border border-[#B86A52]/18 bg-[#F3DDD5]/45" />
          <PremiumImage
            alt={imageAlts.running}
            height={1440}
            imageClassName="aspect-[4/5]"
            objectPosition="48% 50%"
            parallax
            quality={90}
            sizes="(min-width: 1024px) 500px, (min-width: 640px) 540px, 92vw"
            src={siteConfig.runningImage}
            width={1080}
          />
        </div>
      </div>
    </section>
  );
}
