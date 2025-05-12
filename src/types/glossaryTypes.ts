
export interface GlossaryTerm {
  id: string;
  title: string;
  description: string;
  example?: {
    title: string;
    content: string;
  };
  iconName?: string;
}

export interface GlossarySectionProps {
  title: string;
  terms: GlossaryTerm[];
}
