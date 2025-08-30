
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { List, X } from 'lucide-react';

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden fixed bottom-4 right-4 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="secondary"
        size="icon"
        className="rounded-full shadow-lg bg-primary text-primary-foreground h-12 w-12 focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 hover:bg-primary/90"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
      >
        {isOpen ? <X size={20} /> : <List size={20} />}
      </Button>

      {isOpen && (
        <div 
          id="mobile-nav-menu"
          className="absolute bottom-16 right-0 bg-card rounded-lg shadow-xl p-3 w-52 sm:w-56 animate-fade-in border max-h-80 overflow-y-auto"
          role="menu"
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollToSection("intro")}
              className="text-left px-3 py-2 hover:bg-accent rounded-md transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              role="menuitem"
            >
              Introdução
            </button>
            <button
              onClick={() => scrollToSection("conceitos-fundamentais")}
              className="text-left px-3 py-2 hover:bg-accent rounded-md transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              role="menuitem"
            >
              Conceitos Fundamentais
            </button>
            <button
              onClick={() => scrollToSection("termos-especificos")}
              className="text-left px-3 py-2 hover:bg-accent rounded-md transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              role="menuitem"
            >
              Termos Específicos
            </button>
            <button
              onClick={() => scrollToSection("instrumentos-avaliacao")}
              className="text-left px-3 py-2 hover:bg-accent rounded-md transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              role="menuitem"
            >
              Instrumentos de Avaliação
            </button>
            <button
              onClick={() => scrollToSection("aspectos-legais")}
              className="text-left px-3 py-2 hover:bg-accent rounded-md transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              role="menuitem"
            >
              Aspectos Legais
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavMenu;
