
import React from 'react';

const SkipLink = () => {
  return (
    <a 
      href="#conteudo-principal" 
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lift focus:outline-none"
    >
      Pular para o conteúdo principal
    </a>
  );
};

export default SkipLink;
