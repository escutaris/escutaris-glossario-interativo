
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
    <div className="relative w-full max-w-md mx-auto mb-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-textLight dark:text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="Pesquisar termos..."
        className="pl-10 bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus-visible:ring-primary"
        value={searchTerm}
        onChange={handleChange}
        aria-label="Pesquisar termos no glossário"
      />
    </div>
  );
};

export default GlossarySearch;
