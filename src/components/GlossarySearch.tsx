
import { Search, X } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface GlossarySearchProps {
  value: string;
  onSearch: (term: string) => void;
  resultCount: number;
}

const GlossarySearch = ({ value, onSearch, resultCount }: GlossarySearchProps) => {
  const isSearching = value.trim().length > 0;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wasSearching = useRef(false);

  // Ao começar a buscar, traz a lista de resultados para a tela
  useEffect(() => {
    if (isSearching && !wasSearching.current) {
      wrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    wasSearching.current = isSearching;
  }, [isSearching]);

  return (
    <div
      ref={wrapperRef}
      className="sticky top-[72px] z-40 scroll-mt-[72px] border-b border-border bg-background/90 py-4 backdrop-blur md:top-20 md:scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl" role="search">
          <label htmlFor="glossary-search" className="sr-only">
            Pesquisar termos no glossário
          </label>

          <div className="relative">
            <span
              className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted-foreground"
              aria-hidden="true"
            >
              <Search size={18} />
            </span>

            <input
              id="glossary-search"
              type="text"
              inputMode="search"
              placeholder="Buscar termo, sigla ou palavra da definição"
              className="h-12 w-full rounded-full border border-border bg-card pl-12 pr-12 text-base text-foreground shadow-soft transition-colors placeholder:text-muted-foreground/80 focus:border-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={value}
              onChange={(event) => onSearch(event.target.value)}
            />

            {isSearching && (
              <button
                type="button"
                onClick={() => onSearch("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Limpar busca"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <p
            className="mt-2 min-h-[1.25rem] text-center text-sm text-muted-foreground"
            aria-live="polite"
          >
            {isSearching
              ? resultCount === 0
                ? 'Nenhum termo encontrado. Tente outra palavra.'
                : `${resultCount} ${resultCount === 1 ? 'termo encontrado' : 'termos encontrados'}`
              : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlossarySearch;
