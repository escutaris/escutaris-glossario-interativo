
export interface GlossaryTerm {
  id: string;
  title: string;
  description: string;
  example?: {
    title: string;
    content: string;
  };
  /** Siglas e sinônimos que também encontram o termo na busca */
  aliases?: string[];
  iconName?: string;
}

export interface GlossarySectionProps {
  title: string;
  terms: GlossaryTerm[];
}
