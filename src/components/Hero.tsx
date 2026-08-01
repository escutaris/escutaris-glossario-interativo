
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSection {
  id: string;
  title: string;
  count: number;
}

interface HeroProps {
  totalTerms: number;
  sections: HeroSection[];
}

const Hero = ({ totalTerms, sections }: HeroProps) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="border-b border-border bg-accent/60 dark:bg-card">
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center rounded-full border border-secondary/30 bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-secondary md:text-sm">
              Material de apoio técnico
            </p>

            <h1 className="max-w-[15ch] font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Glossário de fatores psicossociais no trabalho
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              {totalTerms} termos técnicos organizados para quem precisa aplicar a NR-1 no dia a dia:
              profissionais de segurança e saúde no trabalho, recursos humanos, lideranças e comissões internas.
            </p>

            <div className="mt-8 h-1 w-24 rounded-full bg-secondary" aria-hidden="true" />

            <p className="mt-8 font-display text-lg text-primary sm:text-xl">
              Ciência que escuta, soluções que transformam.
            </p>
          </div>

          <nav
            aria-label="Atalhos para as seções"
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <h2 className="font-display text-base font-bold text-card-foreground">
              O que você encontra aqui
            </h2>

            <ul className="mt-4 divide-y divide-border">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className="group flex w-full items-center justify-between gap-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="text-sm text-card-foreground transition-colors group-hover:text-secondary">
                      {section.title}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      {section.count}
                      <ArrowRight
                        size={15}
                        className="text-secondary transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Hero;
