
import React from 'react';

const GlossaryFooter = () => {
  return (
    <footer className="py-8 md:py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="/placeholder.svg" 
          alt="Escutaris Logo" 
          className="h-16 mx-auto mb-4"
          // Replace with actual logo
        />
        <p className="text-textDark mb-2">© 2025 Escutaris - Todos os direitos reservados</p>
        <p className="text-textLight max-w-2xl mx-auto">
          Este glossário foi desenvolvido como material de apoio para profissionais de SST na implementação das exigências da NR-1 relacionadas aos fatores psicossociais no trabalho.
        </p>
      </div>
    </footer>
  );
};

export default GlossaryFooter;
