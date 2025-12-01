import React from "react";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";

interface FiltersPanelProps {
  showFilters: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  uniqueCategories: string[];
  sortBy: string;
  setSortBy: (sort: string) => void;
  sortyByOptions: { label: string; value: string }[];
  inStockOnly: boolean;
  setInStockOnly: (inStock: boolean) => void;
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({
  showFilters,
  selectedCategory,
  setSelectedCategory,
  uniqueCategories,
  sortBy,
  setSortBy,
  sortyByOptions,
  inStockOnly,
  setInStockOnly,
}) => {
  if (!showFilters) {
    return null;
  }

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
      <Dropdown
        className="w-full px-3 py-2 border border-gray-300 rounded-lg! focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.value)}
        options={uniqueCategories}
        placeholder="All Categories"
      />

      <Dropdown
        className="w-full px-3 py-2 border border-gray-300 rounded-lg! focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        options={sortyByOptions}
        placeholder="Default"
      />

      <div className="flex items-center gap-2">
        <Checkbox
          inputId="inStock"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked ?? false)}
        />
        <label htmlFor="inStock" className="text-sm text-gray-700">
          In Stock Only
        </label>
      </div>
    </div>
  );
};

export default FiltersPanel;
