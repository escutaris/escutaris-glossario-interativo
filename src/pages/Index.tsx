
import React, { useMemo, useState } from 'react';
import GlossaryHeader from '@/components/GlossaryHeader';
import Hero from '@/components/Hero';
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

const sections = [
  {
    id: 'conceitos-fundamentais',
    title: 'Conceitos Fundamentais',
    description: 'A base do vocabulário: o que são fatores e riscos psicossociais e como eles entram no gerenciamento de riscos.',
    terms: fundamentalConcepts,
  },
  {
    id: 'termos-especificos',
    title: 'Termos Específicos',
    description: 'Os fenômenos que aparecem no dia a dia das organizações, com exemplos concretos de cada um.',
    terms: specificTerms,
  },
  {
    id: 'instrumentos-avaliacao',
    title: 'Instrumentos de Avaliação',
    description: 'Como os fatores psicossociais são medidos: questionários validados, técnicas qualitativas e cuidados metodológicos.',
    terms: evaluationTools,
  },
  {
    id: 'aspectos-legais',
    title: 'Aspectos Legais e Normativos',
    description: 'Normas, leis e prazos que definem o que é exigido das organizações no Brasil.',
    terms: legalAspects,
  },
];

/** Remove acentos para que "saude" encontre "saúde" */
const normalize = (value: string) =>
  value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

const matches = (term: GlossaryTerm, query: string) => {
  const haystack = [
    term.title,
    term.description,
    term.example?.content ?? '',
    ...(term.aliases ?? []),
  ].join(' ');

  return normalize(haystack).includes(query);
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const query = normalize(searchTerm.trim());
  const isSearching = query.length > 0;

  const filteredSections = useMemo(
    () =>
      sections.map((section) => ({
        ...section,
        terms: isSearching
          ? section.terms.filter((term) => matches(term, query))
          : section.terms,
      })),
    [query, isSearching]
  );

  const totalTerms = useMemo(
    () => sections.reduce((total, section) => total + section.terms.length, 0),
    []
  );

  const resultCount = filteredSections.reduce(
    (total, section) => total + section.terms.length,
    0
  );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SkipLink />
      <GlossaryHeader />

      <main id="conteudo-principal" tabIndex={-1} className="flex-grow">
        <Hero
          totalTerms={totalTerms}
          sections={sections.map((section) => ({
            id: section.id,
            title: section.title,
            count: section.terms.length,
          }))}
        />

        <GlossarySearch
          value={searchTerm}
          onSearch={setSearchTerm}
          resultCount={resultCount}
        />

        {!isSearching && <IntroSection />}

        {filteredSections.map((section) =>
          isSearching && section.terms.length === 0 ? null : (
            <GlossarySection
              key={section.id}
              id={section.id}
              title={section.title}
              description={section.description}
              terms={section.terms}
            />
          )
        )}

        {isSearching && resultCount === 0 && (
          <div className="container mx-auto px-4 py-20 text-center" role="status">
            <p className="font-display text-xl text-foreground">
              Nenhum termo encontrado para "{searchTerm}".
            </p>
            <p className="mt-2 text-muted-foreground">
              Tente uma palavra mais curta, uma sigla como HSE ou PGR, ou verifique a ortografia.
            </p>
          </div>
        )}
      </main>

      <GlossaryFooter />
      <MobileNavMenu />
    </div>
  );
};

export default Index;
