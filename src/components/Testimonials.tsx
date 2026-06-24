import { CheckCircle2, Quote } from "lucide-react";

import { expectedResults, testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="overflow-hidden py-16 md:py-24" id="resultados">
      <div className="container-shell">
        <div className="max-w-3xl" data-reveal>
          <p className="text-sm font-semibold text-[#B86A52]">Benefícios e resultados esperados</p>
          <h2 className="font-heading mt-3 text-4xl leading-tight text-[#1E1715] md:text-6xl">
            Evolução real vem de acompanhamento, constância e estratégia.
          </h2>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {expectedResults.map((result) => (
            <div className="rounded-lg border border-[#B86A52]/14 bg-white/76 p-4" data-card key={result}>
              <CheckCircle2 aria-hidden="true" className="size-5 text-[#B86A52]" />
              <p className="mt-3 text-sm font-semibold leading-6 text-[#2F211D]">{result}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3" data-stagger>
          {/* Substitua estes placeholders por depoimentos reais quando estiverem disponíveis. */}
          {testimonials.map((testimonial) => (
            <article
              className="rounded-lg border border-[#5A3E36]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#B86A52]/45 hover:shadow-[0_22px_60px_rgba(90,62,54,0.13)]"
              data-card
              key={testimonial.text}
            >
              <Quote aria-hidden="true" className="size-7 text-[#B86A52]" />
              <p className="mt-5 text-base leading-7 text-[#2F211D]">“{testimonial.text}”</p>
              <p className="mt-6 text-sm font-semibold text-[#5A3E36]/70">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
