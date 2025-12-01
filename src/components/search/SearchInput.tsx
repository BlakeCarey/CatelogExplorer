import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3 md:py-4 cursor-pointer">
        <MagnifyingGlassIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
        <InputText
          unstyled
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-900 text-sm md:text-base cursor-pointer"
          placeholder="Search products..."
          aria-label="Search products"
        />
        {searchQuery && (
          <Button
            unstyled
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
          >
            <XMarkIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
