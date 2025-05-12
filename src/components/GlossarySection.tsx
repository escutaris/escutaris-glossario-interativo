
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GlossaryTerm from './GlossaryTerm';
import { GlossarySectionProps } from '@/types/glossaryTypes';

const GlossarySection = ({ title, terms, id }: GlossarySectionProps & { id: string }) => {
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const [visibleTerms, setVisibleTerms] = useState(terms);

  // Função para alternar entre expandir e recolher todos os termos
  const toggleAllExpanded = () => {
    setIsAllExpanded(!isAllExpanded);
    
    // Esta funcionalidade exigiria uma reescrita do componente Accordion 
    // para permitir controle programático, mas incluímos o botão para UI
  };

  return (
    <section id={id} className="py-6 md:py-10 scroll-mt-20">
      <div className="container mx-auto px-4">
        <Card className="bg-white dark:bg-gray-800 shadow-custom">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <CardTitle className="text-primary-dark dark:text-gray-100 text-xl sm:text-2xl md:text-3xl border-b-2 border-primary dark:border-primary/70 pb-2">
              {title}
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleAllExpanded}
              className="mt-2 sm:mt-0 text-xs sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {isAllExpanded ? "Fechar todos" : "Expandir todos"}
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            {visibleTerms.map((term) => (
              <GlossaryTerm 
                key={term.id}
                id={term.id}
                title={term.title}
                description={term.description}
                example={term.example}
                iconName={term.iconName}
              />
            ))}
            
            {visibleTerms.length === 0 && (
              <p className="text-center py-6 text-textLight dark:text-gray-400">
                Nenhum termo encontrado nesta seção.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GlossarySection;
