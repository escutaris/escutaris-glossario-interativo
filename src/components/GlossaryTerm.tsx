
import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

interface GlossaryTermProps {
  id: string;
  title: string;
  description: string;
  example?: {
    title: string;
    content: string;
  };
  iconName?: string;
}

const GlossaryTerm = ({ id, title, description, example, iconName }: GlossaryTermProps) => {
  return (
    <div className="mb-6 border-l-4 border-primary pl-4 md:pl-6 animate-fade-in">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={id} className="border-none">
          <AccordionTrigger className="py-2 hover:no-underline">
            <h3 className="text-primary-dark text-lg md:text-xl font-semibold text-left flex items-center">
              {iconName && (
                <span className="mr-2 text-primary">
                  {/* Would use actual icons if available */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
              )}
              {title}
            </h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-textDark mb-4">{description}</p>
            
            {example && (
              <Card className="bg-green-50 mb-4">
                <CardContent className="pt-4">
                  <h4 className="text-primary-dark font-medium mb-2">{example.title}</h4>
                  <p className="text-textDark">{example.content}</p>
                </CardContent>
              </Card>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default GlossaryTerm;
