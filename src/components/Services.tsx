import { Activity, ArrowRight, BadgeCheck, Laptop, MapPin } from "lucide-react";

import { services, siteConfig } from "@/lib/constants";

export function Services() {
  return (
    <section className="py-16 md:py-24" id="servicos">
      <div className="container-shell">
        <div className="max-w-3xl" data-reveal>
          <p className="text-sm font-semibold text-[#B86A52]">Acompanhamentos personalizados</p>
          <h2 className="font-heading mt-3 text-4xl leading-tight text-[#1E1715] md:text-6xl">
            O melhor caminho começa com uma avaliação.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5A3E36]/78 md:text-lg">
            Antes de indicar qualquer acompanhamento, a Sabrina entende seu objetivo,
            sua rotina e suas necessidades.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3" data-stagger>
          {services.map((service, index) => {
            const Icon = [Laptop, MapPin, Activity][index] ?? Activity;

            return (
              <article
                className="group relative overflow-hidden rounded-lg border border-[#5A3E36]/10 bg-white/82 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#B86A52]/45 hover:shadow-[0_26px_70px_rgba(90,62,54,0.15)] md:p-7"
                data-card
                key={service.title}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C9828E] via-[#F3DDD5] to-[#B86A52] opacity-80" />
                <div className="flex items-start justify-between gap-5">
                  <div className="inline-flex size-12 items-center justify-center rounded-full bg-[#F3DDD5] text-[#B86A52]">
                    <Icon aria-hidden="true" className="size-6" />
                  </div>
                  <span className="rounded-full border border-[#5A3E36]/10 px-3 py-1 text-xs font-semibold text-[#5A3E36]/68">
                    {index === 0 ? "À distância" : index === 1 ? "Presencial" : "Pilates"}
                  </span>
                </div>

                <h3 className="font-heading mt-6 text-3xl text-[#1E1715]">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5A3E36]/78">{service.description}</p>

                <ul className="mt-6 grid gap-3">
                  {service.benefits.map((benefit) => (
                    <li className="flex items-center gap-3 text-sm font-medium text-[#2F211D]" key={benefit}>
                      <BadgeCheck aria-hidden="true" className="size-5 shrink-0 text-[#B86A52]" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  className="button-shine mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#2F211D] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#5A3E36]"
                  href={siteConfig.whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {service.cta}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-sm font-semibold text-[#5A3E36]/68" data-reveal>
          A Sabrina vai entender seu objetivo antes de indicar o melhor caminho.
        </p>
      </div>
    </section>
  );
}
