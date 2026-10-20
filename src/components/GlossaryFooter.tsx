
import React from 'react';
import ContactLinks from './ContactLinks';

const GlossaryFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-poseidon text-offwhite">
      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <img
              src="/logo-escutaris-branco.png"
              alt="Escutaris"
              className="h-16 w-auto"
            />
            <p className="mt-6 max-w-md text-base text-offwhite/80">
              A Escutaris trabalha com{' '}
              <a href="https://www.escutaris.com.br/diagnostico-dos-fatores-psicossociais-e-saude-mental-no-trabalho" className="underline underline-offset-4 hover:text-offwhite">
                diagnóstico organizacional de fatores psicossociais
              </a>
              , com instrumentos validados e leitura por setor, para sustentar as decisões
              exigidas pela NR-1.
            </p>
            <p className="mt-6 font-display text-lg text-offwhite">
              Ciência que escuta, soluções que transformam.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h2 className="font-display text-xl font-bold text-offwhite">
              Fale com a Escutaris
            </h2>
            <p className="mt-3 max-w-sm text-sm text-offwhite/80">
              Para dúvidas sobre a aplicação desses conceitos ou sobre avaliação de fatores
              psicossociais na sua organização.
            </p>

            <div className="mt-6">
              <ContactLinks />
            </div>

            <a
              href="https://wa.me/5571981357004"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-terracota px-6 py-3 text-sm font-medium text-offwhite transition-colors hover:bg-ares focus:outline-none focus-visible:ring-2 focus-visible:ring-offwhite focus-visible:ring-offset-2 focus-visible:ring-offset-poseidon"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-offwhite/15 pt-6 text-sm text-offwhite/60">
          <p>© {year} Escutaris. Todos os direitos reservados.</p>
          <p className="mt-1">
            Material de apoio técnico. Não substitui avaliação profissional individual nem
            dispensa a elaboração dos documentos previstos nas Normas Regulamentadoras.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlossaryFooter;
