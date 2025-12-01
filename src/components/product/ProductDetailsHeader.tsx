import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { Product } from "@/shared/interfaces";

interface ProductDetailsProps {
  product: Product;
  productIsFavorite?: boolean;
  toggleFavorite: (product: Product) => void;
}

const ProductDetailsPage: React.FC<ProductDetailsProps> = ({
  product,
  productIsFavorite,
  toggleFavorite,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white px-4 py-4 md:px-8 lg:px-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Button
            unstyled
            onClick={() => navigate(-1)}
            className="p-1 md:p-2"
            aria-label="Go back"
          >
            <ChevronLeftIcon className="size-6 md:size-7 text-gray-900" />
          </Button>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 flex-1">
            Product Details
          </h1>
          <Button
            unstyled
            onClick={() => toggleFavorite(product)}
            className="p-1 md:p-2"
            aria-label={
              productIsFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {productIsFavorite ? (
              <HeartSolidIcon className="size-6 md:size-7 text-red-500" />
            ) : (
              <HeartIcon className="size-6 md:size-7 text-gray-900" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
