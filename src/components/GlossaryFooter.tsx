
import React from 'react';
import ContactLinks from './ContactLinks';

const GlossaryFooter = () => {
  return (
    <footer className="py-6 sm:py-8 md:py-12 border-t bg-card">
      <div className="container mx-auto px-4 text-center">
        <img src="/lovable-uploads/8ea8c2f7-db1c-499a-9258-bb28f00a1f66.png" alt="Escutaris Logo" className="h-12 sm:h-14 md:h-16 mx-auto mb-4 object-cover" />
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold text-card-foreground mb-2 text-lg sm:text-xl md:text-2xl">Fale com a Escutaris</h3>
            <p className="text-muted-foreground mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
              Tem dúvidas sobre como aplicar os conhecimentos ou precisa de suporte personalizado? Nossa equipe está pronta te ajudar.
            </p>
            <div className="flex justify-center">
              <ContactLinks />
            </div>
          </div>
          <div className="pt-4 sm:pt-6 border-t">
            <p className="text-card-foreground mb-2 text-xs sm:text-sm">© 2025 Escutaris - Todos os direitos reservados</p>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Desenvolvido com ❤️ para promover saúde mental nas organizações.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlossaryFooter;
