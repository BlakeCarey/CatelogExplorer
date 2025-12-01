import React from "react";
import { Product } from "@/shared/interfaces";
import { Button } from "primereact/button";
import ProductCard from "@/components/product/ProductCard";
import Info from "@/components/utilities/Info";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface SearchResultsProps {
  filteredProducts: Product[];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  handleClearFilters: () => void;
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (product: Product) => void;
  navigate: (path: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  filteredProducts,
  isLoading,
  error,
  handleClearFilters,
  isFavorite,
  toggleFavorite,
  navigate,
}) => {
  if (isLoading) {
    return (
      <div className="px-4 py-4 md:px-8 lg:px-12 md:py-6">
        <div className="max-w-7xl mx-auto">
          <Info isLoading text="Loading products..." color="info" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-4 md:px-8 lg:px-12 md:py-6">
        <div className="max-w-7xl mx-auto">
          <Info
            text="Failed to load products. Please try again later."
            color="error"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-4 md:px-8 lg:px-12 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-sm md:text-base text-gray-600">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"} found
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No products found matching your criteria.
            </p>
            <Button
              unstyled
              onClick={handleClearFilters}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isSaved={isFavorite(product.id)}
                onProductClick={(product) => navigate(`/product/${product.id}`)}
                onToggleSave={(product) => toggleFavorite(product)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
