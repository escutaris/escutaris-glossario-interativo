
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GlossaryTerm from './GlossaryTerm';
import { GlossarySectionProps } from '@/types/glossaryTypes';

const GlossarySection = ({ title, terms, id }: GlossarySectionProps & { id: string }) => {
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Referência para todos os elementos de accordion desta seção
  const accordionElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Atualiza a referência para todos os elementos de accordion
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('[data-state]');
      accordionElements.current = Array.from(elements) as HTMLElement[];
    }
  }, [terms]);

  // Função para alternar entre expandir e recolher todos os termos
  const toggleAllExpanded = () => {
    const newState = !isAllExpanded;
    setIsAllExpanded(newState);
    
    // Expandir ou recolher todos os itens de acordo com o estado
    if (sectionRef.current && accordionElements.current.length > 0) {
      accordionElements.current.forEach(el => {
        // Encontra o botão de acionamento (trigger) do accordion
        const trigger = el.querySelector('[data-radix-collection-item]') as HTMLButtonElement;
        if (trigger) {
          const isCurrentlyOpen = el.getAttribute('data-state') === 'open';
          
          // Clica apenas se o estado atual for diferente do desejado
          if ((newState && !isCurrentlyOpen) || (!newState && isCurrentlyOpen)) {
            trigger.click();
          }
        }
      });
    }
  };

  return (
    <section id={id} className="py-6 md:py-10 scroll-mt-20" ref={sectionRef} aria-labelledby={`section-title-${id}`}>
      <div className="container mx-auto px-4">
        <Card className="bg-card shadow-custom">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <CardTitle 
              className="text-card-foreground text-xl sm:text-2xl md:text-3xl border-b-2 border-primary pb-2"
              id={`section-title-${id}`}
            >
              {title}
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleAllExpanded}
              className="mt-2 sm:mt-0 text-xs sm:text-sm focus:ring-2 focus:ring-primary/50"
              aria-pressed={isAllExpanded}
            >
              {isAllExpanded ? "Fechar todos" : "Expandir todos"}
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            <div role="region" aria-live="polite">
              {terms.map((term) => (
                <GlossaryTerm 
                  key={term.id}
                  id={term.id}
                  title={term.title}
                  description={term.description}
                  example={term.example}
                  iconName={term.iconName}
                />
              ))}
              
              {terms.length === 0 && (
                <p className="text-center py-6 text-muted-foreground">
                  Nenhum termo encontrado nesta seção.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GlossarySection;
