
import React from 'react';

const SkipLink = () => {
  return (
    <a 
      href="#conteudo-principal" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-md focus:outline-none"
    >
      Pular para o conteúdo principal
    </a>
  );
};

export default SkipLink;
