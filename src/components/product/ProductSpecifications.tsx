import React from "react";
import { toNormalCase } from "@/utils/string.utils";
import { Product } from "@/shared/interfaces";

interface ProductSpecificationsProps {
  product: Product;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  product,
}) => {
  if (!product.specs || Object.keys(product.specs).length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Specifications
      </h3>
      <div className="space-y-2">
        {Object.entries(product.specs).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between py-2 border-b border-gray-100"
          >
            <div className="text-sm md:text-base text-gray-600 capitalize">
              {toNormalCase(key)}
            </div>
            <div className="text-sm md:text-base text-gray-900 font-medium">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecifications;
