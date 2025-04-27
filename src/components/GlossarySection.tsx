
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlossaryTerm from './GlossaryTerm';

interface GlossarySectionProps {
  title: string;
  terms: Array<{
    id: string;
    title: string;
    description: string;
    example?: {
      title: string;
      content: string;
    };
    iconName?: string;
  }>;
}

const GlossarySection = ({ title, terms }: GlossarySectionProps) => {
  return (
    <section className="py-6 md:py-10">
      <div className="container mx-auto px-4">
        <Card className="bg-white shadow-custom">
          <CardHeader>
            <CardTitle className="text-primary-dark text-2xl md:text-3xl border-b-2 border-primary pb-2">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {terms.map((term) => (
              <GlossaryTerm 
                key={term.id}
                id={term.id}
                title={term.title}
                description={term.description}
                example={term.example}
                iconName={term.iconName}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GlossarySection;
