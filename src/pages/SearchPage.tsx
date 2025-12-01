import BottomNavigation from "@/components/utilities/BottomNavigation";
import { useSearchHooks } from "@/hooks/useSearchHooks";
import SearchResults from "@/components/search/SearchResults";
import SearchHeader from "@/components/search/SearchHeader";
import SearchInput from "@/components/search/SearchInput";
import FilterToggle from "@/components/search/FilterToggle";
import FiltersPanel from "@/components/search/FiltersPanel";

const SearchPage = () => {
  const {
    navigate,
    showFilters,
    setShowFilters,
    filteredProducts,
    isLoading,
    error,
    isFavorite,
    toggleFavorite,
    uniqueCategories,
    sortyByOptions,
    handleClearFilters,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    inStockOnly,
    setInStockOnly,
  } = useSearchHooks();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 pb-20 md:pb-0">
      <div className="bg-white px-4 py-4 md:px-8 lg:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <SearchHeader />

          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <FilterToggle
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            selectedCategory={selectedCategory}
            sortBy={sortBy}
            inStockOnly={inStockOnly}
            searchQuery={searchQuery}
            handleClearFilters={handleClearFilters}
          />

          <FiltersPanel
            showFilters={showFilters}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            uniqueCategories={uniqueCategories}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortyByOptions={sortyByOptions}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
          />
        </div>
      </div>

      <SearchResults
        error={error}
        isLoading={isLoading}
        filteredProducts={filteredProducts}
        handleClearFilters={handleClearFilters}
        isFavorite={isFavorite}
        navigate={navigate}
        toggleFavorite={toggleFavorite}
      />

      <BottomNavigation />
    </div>
  );
};

export default SearchPage;
