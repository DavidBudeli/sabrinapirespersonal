"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { BrandLogo } from "@/components/BrandLogo";
import { navItems, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#5A3E36]/10 bg-[#FFF7F3]/88 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <a
          aria-label="Ir para o início"
          className="flex items-center leading-none"
          href="#inicio"
          onClick={() => setIsOpen(false)}
        >
          <BrandLogo
            className="hidden h-auto w-[210px] md:block xl:w-[222px]"
            priority
            sizes="(min-width: 1280px) 222px, (min-width: 768px) 210px, 1px"
            tone="dark"
            variant="horizontal"
          />
          <BrandLogo
            className="block h-10 w-12 md:hidden"
            priority
            sizes="(max-width: 767px) 48px, 1px"
            tone="dark"
            variant="monogram"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-medium text-[#5A3E36]/76 transition hover:text-[#2F211D]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button-shine hidden h-11 items-center justify-center gap-2 rounded-full bg-[#2F211D] px-5 text-sm font-semibold text-white transition hover:bg-[#5A3E36] xl:inline-flex"
          href={siteConfig.whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          Falar com a Sabrina
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>

        <button
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex size-11 items-center justify-center rounded-full border border-[#5A3E36]/15 bg-white/70 text-[#2F211D] xl:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "container-shell xl:hidden",
          isOpen ? "pb-4" : "pointer-events-none h-0 overflow-hidden",
        )}
        id="mobile-menu"
      >
        <nav className="grid gap-1 rounded-lg border border-[#5A3E36]/12 bg-white/92 p-2 shadow-[0_22px_60px_rgba(47,33,29,0.12)]">
          {navItems.map((item) => (
            <a
              className="rounded-md px-4 py-3 text-sm font-medium text-[#2F211D] transition hover:bg-[#F3DDD5]/55"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button-shine mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2F211D] px-5 text-sm font-semibold text-white"
            href={siteConfig.whatsappUrl}
            onClick={() => setIsOpen(false)}
            rel="noreferrer"
            target="_blank"
          >
            Solicitar avaliação personalizada
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
