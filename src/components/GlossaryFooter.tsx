
import React from 'react';
import ContactLinks from './ContactLinks';

const GlossaryFooter = () => {
  return (
    <footer className="py-6 sm:py-8 md:py-12 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <img src="/lovable-uploads/8ea8c2f7-db1c-499a-9258-bb28f00a1f66.png" alt="Escutaris Logo" className="h-12 sm:h-14 md:h-16 mx-auto mb-4 object-cover" />
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold text-primary-dark dark:text-gray-100 mb-2 text-xl sm:text-2xl">Fale com a Escutaris</h3>
            <p className="text-textLight dark:text-gray-300 mb-4 text-sm sm:text-base">
              Tem dúvidas sobre como aplicar os conhecimentos ou precisa de suporte personalizado? Nossa equipe está pronta te ajudar.
            </p>
            <div className="flex justify-center">
              <ContactLinks />
            </div>
          </div>
          <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
            <p className="text-textDark dark:text-gray-300 mb-2 text-sm">© 2025 Escutaris - Todos os direitos reservados</p>
            <p className="text-textLight dark:text-gray-400 text-sm">
              Desenvolvido com ❤️ para promover saúde mental nas organizações.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlossaryFooter;
