import { benefitWords } from "@/lib/constants";

export function BrandMarquee() {
  const marqueeItems = [...benefitWords, ...benefitWords];

  return (
    <div className="overflow-hidden border-y border-[#5A3E36]/10 bg-[#2F211D] py-4 text-[#FFF8F3]">
      <div className="marquee-track flex w-max items-center gap-5 whitespace-nowrap">
        {marqueeItems.map((word, index) => (
          <span
            className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFF8F3]/78 sm:text-sm"
            key={`${word}-${index}`}
          >
            {word}
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[#C9828E]" />
          </span>
        ))}
      </div>
    </div>
  );
}
