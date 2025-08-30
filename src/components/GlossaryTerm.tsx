
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GlossaryTerm as GlossaryTermType } from '@/types/glossaryTypes';

const GlossaryTerm = ({
  id,
  title,
  description,
  example,
  iconName
}: GlossaryTermType) => {
  const headerId = `term-heading-${id}`;
  const contentId = `term-content-${id}`;

  return (
    <div className="mb-4 sm:mb-6 border-l-4 border-primary pl-3 sm:pl-4 md:pl-6 animate-fade-in focus-within:bg-muted/10 hover:bg-muted/10 transition-colors rounded-r-md">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={id} className="border-none">
          <AccordionTrigger
            className="py-2 sm:py-3 hover:no-underline group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md text-left"
            id={headerId}
            aria-controls={contentId}
          >
            <h3 className="text-card-foreground text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-left flex items-center leading-tight">
              {iconName && (
                 <span className="mr-2 sm:mr-3 text-primary flex-shrink-0" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                 </span>
              )}
              {title}
            </h3>
          </AccordionTrigger>
          <AccordionContent id={contentId} aria-labelledby={headerId}>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">{description}</p>
            
            {example && (
              <div className="bg-muted/50 p-3 rounded-md border-l-2 border-primary">
                <h4 className="font-medium text-card-foreground mb-2 text-sm sm:text-base">{example.title}</h4>
                <p className="text-sm text-muted-foreground">{example.content}</p>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default GlossaryTerm;
