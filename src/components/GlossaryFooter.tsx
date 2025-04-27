import React from 'react';
import ContactLinks from './ContactLinks';
const GlossaryFooter = () => {
  return <footer className="py-8 md:py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <img src="/lovable-uploads/8ea8c2f7-db1c-499a-9258-bb28f00a1f66.png" alt="Escutaris Logo" className="h-16 mx-auto mb-4 object-cover" />
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold text-primary-dark mb-2 text-2xl">Fale com a Escutaris</h3>
            <p className="text-textLight mb-4">
              Tem dúvidas sobre como aplicar os conhecimentos ou precisa de suporte personalizado? Nossa equipe está pronta te ajudar.
            </p>
            <div className="flex justify-center">
              <ContactLinks />
            </div>
          </div>
          <div className="pt-6 border-t border-gray-100">
            <p className="text-textDark mb-2">© 2025 Escutaris - Todos os direitos reservados</p>
            <p className="text-textLight">
              Desenvolvido com ❤️ para promover saúde mental nas organizações.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default GlossaryFooter;