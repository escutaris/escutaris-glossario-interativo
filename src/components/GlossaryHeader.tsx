
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const GlossaryHeader = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-custom sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <h1 className="text-primary-dark dark:text-gray-100 font-bold text-xl md:text-2xl lg:text-3xl sm:text-lg">
              Glossário Interativo
            </h1>
            <p className="text-textLight dark:text-gray-300 text-sm md:text-base">
              Termos Técnicos em Fatores Psicossociais para Profissionais de SST
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary/50">
                    Navegação
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="dark:bg-gray-800">
                    <nav>
                      <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] dark:text-gray-100" role="menu">
                        <li role="menuitem">
                          <button 
                            onClick={() => scrollToSection("intro")}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            Introdução
                          </button>
                        </li>
                        <li role="menuitem">
                          <button 
                            onClick={() => scrollToSection("conceitos-fundamentais")}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            Conceitos Fundamentais
                          </button>
                        </li>
                        <li role="menuitem">
                          <button 
                            onClick={() => scrollToSection("termos-especificos")}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            Termos Específicos
                          </button>
                        </li>
                        <li role="menuitem">
                          <button 
                            onClick={() => scrollToSection("instrumentos-avaliacao")}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            Instrumentos de Avaliação
                          </button>
                        </li>
                        <li role="menuitem">
                          <button 
                            onClick={() => scrollToSection("aspectos-legais")}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            Aspectos Legais e Normativos
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
            <img 
              src="/lovable-uploads/8ea8c2f7-db1c-499a-9258-bb28f00a1f66.png" 
              alt="Logotipo da Escutaris - Empresa especializada em saúde mental e fatores psicossociais" 
              className="h-10 md:h-12 lg:h-16" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlossaryHeader;
