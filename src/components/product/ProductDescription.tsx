import React from "react";
import { Product } from "@/shared/interfaces";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {product.fullDescription || product.shortDescription}
      </p>
    </div>
  );
};

export default ProductDescription;
