import React from "react";
import { Product } from "@/shared/interfaces";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
          {product.name}
        </h2>
        {!product.inStock && (
          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full whitespace-nowrap">
            Out of Stock
          </span>
        )}
      </div>
      <p className="text-gray-600 text-sm mb-2">{product.category}</p>
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 md:mt-3">
        {product.currency} ${product.price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductInfo;
