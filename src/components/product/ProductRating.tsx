import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Product } from "@/shared/interfaces";

interface ProductRatingProps {
  product: Product;
}

const ProductRating: React.FC<ProductRatingProps> = ({ product }) => {
  return (
    <div className="flex items-center gap-1">
      <StarIcon className="text-yellow-400 size-5" aria-hidden="true" />
      <span className="text-sm md:text-base text-gray-600">
        {product.rating} ({product.reviewCount} reviews)
      </span>
    </div>
  );
};

export default ProductRating;
