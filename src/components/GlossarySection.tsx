
import React from 'react';
import TermCard from './TermCard';
import { GlossarySectionProps } from '@/types/glossaryTypes';

interface Props extends GlossarySectionProps {
  id: string;
  description: string;
}

const GlossarySection = ({ title, description, terms, id }: Props) => {
  return (
    <section
      id={id}
      className="scroll-mt-[160px] border-t border-border py-12 md:scroll-mt-[172px] md:py-16"
      aria-labelledby={`section-title-${id}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id={`section-title-${id}`}
              className="font-display text-2xl font-bold text-foreground sm:text-3xl"
            >
              {title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          </div>

          <p className="shrink-0 text-sm font-medium text-muted-foreground" aria-hidden="true">
            {terms.length} {terms.length === 1 ? 'termo' : 'termos'}
          </p>
        </div>

        {terms.length > 0 ? (
          <div className="stagger mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {terms.map((term) => (
              <TermCard
                key={term.id}
                id={term.id}
                title={term.title}
                description={term.description}
                example={term.example}
                aliases={term.aliases}
                iconName={term.iconName}
              />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-xl border border-dashed border-border bg-muted/40 px-6 py-8 text-center text-muted-foreground">
            Nenhum termo desta seção corresponde à busca.
          </p>
        )}
      </div>
    </section>
  );
};

export default GlossarySection;
