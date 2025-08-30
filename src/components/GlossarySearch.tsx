
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";

interface GlossarySearchProps {
  onSearch: (term: string) => void;
}

const GlossarySearch = ({ onSearch }: GlossarySearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mb-4 sm:mb-6" role="search">
      <label htmlFor="glossary-search" className="sr-only">
        Pesquisar termos no glossário
      </label>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
        <Search size={18} className="text-muted-foreground" />
      </div>
      <Input
        id="glossary-search"
        type="search"
        placeholder="Pesquisar termos..."
        className="pl-10 focus-visible:ring-primary focus:ring-2 focus:ring-offset-2"
        value={searchTerm}
        onChange={handleChange}
        aria-label="Pesquisar termos no glossário"
      />
    </div>
  );
};

export default GlossarySearch;
