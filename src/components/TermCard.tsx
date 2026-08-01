
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GlossaryTerm } from '@/types/glossaryTypes';

const TermCard = ({ title, description, example, aliases }: GlossaryTerm) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group flex h-full w-full flex-col rounded-xl border border-border bg-card p-6 text-left shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <h3 className="font-display text-lg font-bold leading-snug text-card-foreground">
            {title}
          </h3>

          <p className="mt-3 line-clamp-4 flex-grow text-sm text-muted-foreground">
            {description}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
            Ver definição
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="pr-6 text-left font-display text-2xl leading-tight text-card-foreground">
            {title}
          </DialogTitle>
          {aliases && aliases.length > 0 && (
            <DialogDescription className="pt-1 text-left text-sm text-muted-foreground">
              Também aparece como: {aliases.join(', ')}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="mt-2 h-1 w-16 shrink-0 rounded-full bg-secondary" aria-hidden="true" />

        <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
          {description}
        </p>

        {example && (
          <div className="rounded-xl border-l-4 border-primary bg-muted/70 p-5">
            <h4 className="font-display text-base font-bold text-foreground">
              {example.title}
            </h4>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {example.content}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TermCard;
