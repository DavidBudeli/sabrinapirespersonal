import { PremiumImage } from "@/components/PremiumImage";
import { imageAlts, methodSteps, siteConfig } from "@/lib/constants";

export function Method() {
  return (
    <section className="bg-white py-16 md:py-24" data-method id="metodo">
      <div className="container-shell">
        <div className="max-w-3xl" data-reveal>
          <p className="text-sm font-semibold text-[#B86A52]">Método Sabrina Pires</p>
          <h2 className="font-heading mt-3 text-4xl leading-tight text-[#1E1715] md:text-6xl">
            Técnica, clareza e evolução em cada etapa.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="relative lg:sticky lg:top-28">
            <div className="absolute -inset-3 -z-10 rounded-[24px] border border-[#B86A52]/16 bg-[#F3DDD5]/45" />
            <PremiumImage
              alt={imageAlts.method}
              height={1280}
              imageClassName="aspect-[4/5]"
              objectPosition="50% 58%"
              quality={92}
              sizes="(min-width: 1024px) 430px, (min-width: 640px) 540px, 92vw"
              src={siteConfig.methodImage}
              width={960}
            />
          </div>

          <div className="relative grid gap-6 pl-8 md:pl-10">
            <div className="absolute bottom-3 left-3 top-3 w-px bg-[#5A3E36]/12 md:left-4" />
            <div
              className="method-progress absolute left-3 top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-[#C9828E] via-[#F3DDD5] to-[#B86A52] md:left-4"
              data-method-progress
            />

            {methodSteps.map((step, index) => (
              <article
                className="relative rounded-lg border border-[#5A3E36]/10 bg-[#FFF8F3] p-5 shadow-sm md:p-6"
                data-method-step
                key={step.title}
              >
                <div className="absolute -left-[2.1rem] top-6 inline-flex size-8 items-center justify-center rounded-full border border-[#B86A52]/32 bg-white text-sm font-semibold text-[#B86A52] shadow-sm md:-left-[2.35rem]">
                  {index + 1}
                </div>
                <h3 className="font-heading text-2xl text-[#2F211D]">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#5A3E36]/78">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
