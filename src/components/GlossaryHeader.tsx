
import React from 'react';
import ThemeToggle from './ThemeToggle';
import ShareButton from './ShareButton';

const sections = [
  { id: 'conceitos-fundamentais', label: 'Conceitos' },
  { id: 'termos-especificos', label: 'Termos' },
  { id: 'instrumentos-avaliacao', label: 'Instrumentos' },
  { id: 'aspectos-legais', label: 'Legislação' },
];

const GlossaryHeader = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
      role="banner"
    >
      <div className="container mx-auto flex h-[72px] items-center justify-between gap-4 px-4 md:h-20">
        <a
          href="https://www.escutaris.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Site da Escutaris"
        >
          <img
            src="/logo-escutaris.png"
            alt="Escutaris"
            className="h-10 w-auto md:h-12 dark:hidden"
          />
          <img
            src="/logo-escutaris-branco.png"
            alt="Escutaris"
            className="hidden h-10 w-auto md:h-12 dark:block"
          />
        </a>

        <nav aria-label="Seções do glossário" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ShareButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default GlossaryHeader;
