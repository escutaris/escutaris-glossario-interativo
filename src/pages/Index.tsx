
import React from 'react';
import GlossaryHeader from '@/components/GlossaryHeader';
import IntroSection from '@/components/IntroSection';
import GlossarySection from '@/components/GlossarySection';
import GlossaryFooter from '@/components/GlossaryFooter';
import { fundamentalConcepts } from '@/data/fundamentalConcepts';
import { specificTerms } from '@/data/specificTerms';
import { evaluationTools } from '@/data/evaluationTools';
import { legalAspects } from '@/data/legalAspects';

const Index = () => {
  return (
    <div className="min-h-screen bg-bgLight flex flex-col">
      <GlossaryHeader />
      
      <main className="flex-grow">
        <IntroSection />
        <GlossarySection title="Conceitos Fundamentais" terms={fundamentalConcepts} />
        <GlossarySection title="Termos Específicos" terms={specificTerms} />
        <GlossarySection title="Instrumentos de Avaliação" terms={evaluationTools} />
        <GlossarySection title="Aspectos Legais e Normativos" terms={legalAspects} />
      </main>
      
      <GlossaryFooter />
    </div>
  );
};

export default Index;
