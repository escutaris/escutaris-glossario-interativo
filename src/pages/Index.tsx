
import React, { useState } from 'react';
import GlossaryHeader from '@/components/GlossaryHeader';
import IntroSection from '@/components/IntroSection';
import GlossarySection from '@/components/GlossarySection';
import GlossaryFooter from '@/components/GlossaryFooter';
import GlossarySearch from '@/components/GlossarySearch';
import MobileNavMenu from '@/components/MobileNavMenu';
import SkipLink from '@/components/SkipLink';
import { fundamentalConcepts } from '@/data/fundamentalConcepts';
import { specificTerms } from '@/data/specificTerms';
import { evaluationTools } from '@/data/evaluationTools';
import { legalAspects } from '@/data/legalAspects';
import { GlossaryTerm } from '@/types/glossaryTypes';

const Index = () => {
  // Estado para armazenar os resultados da pesquisa
  const [searchResults, setSearchResults] = useState<{
    fundamentalConcepts: GlossaryTerm[];
    specificTerms: GlossaryTerm[];
    evaluationTools: GlossaryTerm[];
    legalAspects: GlossaryTerm[];
    isSearching: boolean;
  }>({
    fundamentalConcepts: fundamentalConcepts,
    specificTerms: specificTerms,
    evaluationTools: evaluationTools,
    legalAspects: legalAspects,
    isSearching: false
  });

  // Função para pesquisar em todos os termos
  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      // Se a pesquisa estiver vazia, restaurar todos os termos
      setSearchResults({
        fundamentalConcepts: fundamentalConcepts,
        specificTerms: specificTerms,
        evaluationTools: evaluationTools,
        legalAspects: legalAspects,
        isSearching: false
      });
      return;
    }

    // Converter para minúsculas para pesquisa case-insensitive
    const term = searchTerm.toLowerCase();

    const filterTerms = (terms: GlossaryTerm[]) => {
      return terms.filter(t => 
        t.title.toLowerCase().includes(term) || 
        t.description.toLowerCase().includes(term) ||
        (t.example?.content && t.example.content.toLowerCase().includes(term))
      );
    };

    setSearchResults({
      fundamentalConcepts: filterTerms(fundamentalConcepts),
      specificTerms: filterTerms(specificTerms),
      evaluationTools: filterTerms(evaluationTools),
      legalAspects: filterTerms(legalAspects),
      isSearching: true
    });
  };

  // Conta o total de resultados encontrados
  const totalResults = searchResults.isSearching ? 
    searchResults.fundamentalConcepts.length + 
    searchResults.specificTerms.length + 
    searchResults.evaluationTools.length + 
    searchResults.legalAspects.length : 0;

  return (
    <div className="min-h-screen bg-bgLight dark:bg-gray-950 flex flex-col">
      <SkipLink />
      <GlossaryHeader />
      
      <main id="conteudo-principal" tabIndex={-1} className="flex-grow">
        <IntroSection />
        
        <div className="container mx-auto px-4 py-4">
          <GlossarySearch onSearch={handleSearch} />
          
          {searchResults.isSearching && (
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="sr-only"
            >
              {totalResults === 0 
                ? "Nenhum resultado encontrado para sua pesquisa." 
                : `${totalResults} resultados encontrados para sua pesquisa.`}
            </div>
          )}
          
          {searchResults.isSearching && totalResults === 0 && (
            <div className="text-center py-10" role="status">
              <p className="text-lg text-textDark dark:text-gray-300">
                Nenhum termo encontrado na sua pesquisa.
              </p>
              <p className="text-textLight dark:text-gray-400 mt-2">
                Tente usar palavras-chave diferentes ou verifique a ortografia.
              </p>
            </div>
          )}
        </div>

        <GlossarySection 
          id="conceitos-fundamentais"
          title="Conceitos Fundamentais" 
          terms={searchResults.fundamentalConcepts} 
        />
        
        <GlossarySection 
          id="termos-especificos"
          title="Termos Específicos" 
          terms={searchResults.specificTerms} 
        />
        
        <GlossarySection 
          id="instrumentos-avaliacao"
          title="Instrumentos de Avaliação" 
          terms={searchResults.evaluationTools} 
        />
        
        <GlossarySection 
          id="aspectos-legais"
          title="Aspectos Legais e Normativos" 
          terms={searchResults.legalAspects} 
        />
      </main>
      
      <GlossaryFooter />
      <MobileNavMenu />
    </div>
  );
};

export default Index;
