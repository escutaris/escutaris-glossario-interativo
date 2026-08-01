
import React, { useState } from 'react';
import { List, X } from 'lucide-react';

const sections = [
  { id: 'intro', label: 'Introdução' },
  { id: 'conceitos-fundamentais', label: 'Conceitos Fundamentais' },
  { id: 'termos-especificos', label: 'Termos Específicos' },
  { id: 'instrumentos-avaliacao', label: 'Instrumentos de Avaliação' },
  { id: 'aspectos-legais', label: 'Aspectos Legais' },
];

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lift transition-colors hover:bg-ares focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
      </button>

      {isOpen && (
        <nav
          id="mobile-nav-menu"
          className="absolute bottom-16 right-0 w-60 animate-fade-in rounded-xl border border-border bg-card p-2 shadow-lift"
          aria-label="Seções do glossário"
        >
          <ul className="flex flex-col">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-card-foreground transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNavMenu;
