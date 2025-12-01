import React from "react";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { FunnelIcon } from "@heroicons/react/24/outline";

interface FilterToggleProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  selectedCategory: string;
  sortBy: string;
  inStockOnly: boolean;
  searchQuery: string;
  handleClearFilters: () => void;
}

const FilterToggle: React.FC<FilterToggleProps> = ({
  showFilters,
  setShowFilters,
  selectedCategory,
  sortBy,
  inStockOnly,
  searchQuery,
  handleClearFilters,
}) => {
  const activeFiltersCount = [selectedCategory, sortBy, inStockOnly].filter(
    Boolean
  ).length;

  return (
    <div className="flex items-center gap-2 mt-4">
      <Button
        unstyled
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm md:text-base text-gray-700 hover:bg-gray-50 transition"
        aria-expanded={showFilters}
        aria-label="Toggle filters"
      >
        <FunnelIcon className="w-4 h-4" />
        Filters
        {activeFiltersCount > 0 && <Badge value={activeFiltersCount} />}
      </Button>
      {(searchQuery || selectedCategory || sortBy || inStockOnly) && (
        <Button
          unstyled
          onClick={handleClearFilters}
          className="px-4 py-2 text-sm md:text-base text-blue-600 hover:text-blue-700 transition"
        >
          Clear all
        </Button>
      )}
    </div>
  );
};

export default FilterToggle;
