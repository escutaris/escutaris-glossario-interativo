
import React from 'react';

const IntroSection = () => {
  return (
    <section id="intro" className="scroll-mt-[160px] py-12 md:scroll-mt-[172px] md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Para que serve este glossário
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-secondary" aria-hidden="true" />
          </div>

          <div className="space-y-5 text-base text-muted-foreground sm:text-lg">
            <p>
              Fatores psicossociais entraram na rotina da segurança e saúde no trabalho com vocabulário
              próprio, vindo da psicologia organizacional, da medicina do trabalho e da ergonomia. Este
              material reúne esse vocabulário em definições curtas, com exemplos do cotidiano das organizações.
            </p>
            <p>
              A Portaria MTE nº 1.419/2024 incluiu os fatores de risco psicossociais no Gerenciamento de
              Riscos Ocupacionais previsto na NR-1. A Portaria MTE nº 765/2025 estabeleceu um período de
              atuação educativa da fiscalização, encerrado em 25 de maio de 2026. Desde 26 de maio de 2026,
              a fiscalização é punitiva: a ausência de avaliação e de plano de ação para esses fatores
              sujeita a empresa a autuação.
            </p>
            <p className="rounded-xl border border-border bg-card p-5 text-base text-card-foreground shadow-soft">
              Falar a mesma língua é o primeiro passo prático. Quando a equipe técnica, o RH e a liderança
              nomeiam o mesmo fenômeno da mesma forma, a avaliação ganha consistência e o plano de ação
              deixa de ser genérico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
