import React from 'react';
const GlossaryHeader = () => {
  return <header className="bg-white shadow-custom sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-primary-dark font-bold text-xl md:text-2xl lg:text-3xl">Glossário Interativo</h1>
            <p className="text-textLight text-sm md:text-base">
              Termos Técnicos em Fatores Psicossociais para Profissionais de SST
            </p>
          </div>
          <img src="/lovable-uploads/8ea8c2f7-db1c-499a-9258-bb28f00a1f66.png" alt="Escutaris Logo" className="h-12 md:h-16" />
        </div>
      </div>
    </header>;
};
export default GlossaryHeader;