import { CheckCircle2 } from "lucide-react";

import { PremiumImage } from "@/components/PremiumImage";
import { imageAlts, introHighlights, siteConfig } from "@/lib/constants";

export function About() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" id="sobre">
      <div aria-hidden="true" className="leaf-line right-6 top-20" data-organic />
      <div
        aria-hidden="true"
        className="organic-ribbon absolute -left-28 bottom-10 h-72 w-72 bg-[#F3DDD5]/55"
        data-organic
      />

      <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[22px] border border-[#B86A52]/18 bg-[#F3DDD5]/52" />
          <PremiumImage
            alt={imageAlts.portrait}
            height={1080}
            imageClassName="aspect-[4/5]"
            objectPosition="50% 20%"
            quality={92}
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 520px, 92vw"
            src={siteConfig.portraitImage}
            width={1080}
          />
        </div>

        <div>
          <div className="section-divider mb-6" data-reveal>
            <span aria-hidden="true" />
          </div>

          <div className="max-w-2xl" data-reveal>
            <p className="text-sm font-semibold text-[#B86A52]">Educação Física, treino e Pilates</p>
            <h2 className="font-heading mt-3 text-4xl leading-tight text-[#1E1715] md:text-6xl">
              Prazer, eu sou a <span className="italic text-[#B86A52]">Sabrina.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5A3E36]/82 md:text-lg">
              Sou formada em Educação Física, professora de Pilates e personal trainer.
              Acredito que o movimento tem o poder de transformar a forma como nos
              sentimos no nosso próprio corpo.
            </p>
            <p className="mt-4 text-base leading-7 text-[#5A3E36]/78 md:text-lg">
              Meu trabalho une técnica, acompanhamento individualizado e cuidado para
              ajudar cada aluno a evoluir com segurança, constância e propósito.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2" data-stagger>
            {introHighlights.map((highlight) => (
              <div
                className="flex items-center gap-3 rounded-lg border border-[#B86A52]/16 bg-white/72 p-4 shadow-sm"
                data-card
                key={highlight}
              >
                <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-[#B86A52]" />
                <span className="text-sm font-semibold text-[#2F211D] sm:text-base">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
