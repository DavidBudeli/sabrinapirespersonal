import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PremiumImage } from "@/components/PremiumImage";
import { imageAlts, pilatesBenefits, siteConfig } from "@/lib/constants";

export function Pilates() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F3] py-16 md:py-24" id="pilates">
      <div aria-hidden="true" className="leaf-line left-5 top-16" data-organic />
      <div
        aria-hidden="true"
        className="organic-ribbon absolute -right-24 bottom-8 h-72 w-72 bg-[#C9828E]/14"
        data-organic
      />

      <div className="container-shell grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[24px] border border-[#B86A52]/18 bg-[#F3DDD5]/48" />
          <PremiumImage
            alt={imageAlts.pilates}
            height={1280}
            imageClassName="aspect-[4/5]"
            objectPosition="50% 45%"
            quality={92}
            sizes="(min-width: 1024px) 500px, (min-width: 640px) 540px, 92vw"
            src={siteConfig.pilatesImage}
            width={960}
          />
        </div>

        <div>
          <div data-reveal>
            <p className="text-sm font-semibold text-[#B86A52]">Pilates com cuidado individualizado</p>
            <h2 className="font-heading mt-3 text-4xl leading-tight text-[#1E1715] md:text-6xl">
              O Pilates vai além do <span className="italic text-[#B86A52]">alongamento.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5A3E36]/82 md:text-lg">
              Com a prática regular, é possível desenvolver força, mobilidade,
              consciência corporal, postura e mais qualidade para o dia a dia.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2" data-stagger>
            {pilatesBenefits.map((benefit) => (
              <div
                className="flex items-center gap-3 rounded-lg border border-[#B86A52]/14 bg-white/78 p-4"
                data-card
                key={benefit}
              >
                <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-[#B86A52]" />
                <span className="text-sm font-semibold text-[#2F211D]">{benefit}</span>
              </div>
            ))}
          </div>

          <a
            className="button-shine mt-8 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#2F211D] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#5A3E36] sm:w-auto"
            href={siteConfig.whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            Quero avaliar meu caso
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <p className="mt-3 text-xs font-semibold text-[#5A3E36]/66">
            O primeiro passo é entender o que faz sentido para você.
          </p>
        </div>
      </div>
    </section>
  );
}
